import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { MediaMatcher, BreakpointObserver, BreakpointState } from '../../node_modules/@angular/cdk/layout';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';
import { _ } from 'underscore';
import { MatSidenav } from '../../node_modules/@angular/material';
import { NavigationDialogComponent } from './templates/navigation-dialog/navigation-dialog.component';
import { LoadingPageService } from './services/loading-page/loading-page.service';
import { PageHistoryService } from './services/page-history/page-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = true;
  @ViewChild('appSidenav') sidenav: MatSidenav;
  mobileQuery: any = {};
  tabletQuery: any = { expanded: false };
  currentRoute = null;

  // mock data => route settings
  links = [
    { displayName: 'Contacts', icon: 'contacts', route: '/home', nestedLinks: [] },
    { displayName: 'Groups', icon: 'group', route: '/groups', nestedLinks: []},
    { displayName: 'Labels', icon: 'label', route: '/labels', nestedLinks: []},
  ];

  // tslint:disable-next-line:max-line-length
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public router: Router, public breakpointObserver: BreakpointObserver, public loadingPageService: LoadingPageService, private pageHistoryService: PageHistoryService) {}

  ngOnInit() {
    this.loadingPageService.refresh();

    this.breakpointObserver.observe(['(max-width: 600px)']).subscribe((state: BreakpointState) => {
      this.mobileQuery.matches = state.matches;
      if (this.mobileQuery.matches === false) {
        this.sidenav.opened = true;
      }
    });

    // tslint:disable-next-line:max-line-length
    this.breakpointObserver.observe(['(max-width: 960px) and (min-width: 601px)']).subscribe((state: BreakpointState) => this.tabletQuery.matches = state.matches);

    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.loadingPageService.refresh();

        if (!!this.currentRoute && this.currentRoute !== route.url && !!this.mobileQuery.matches) {
          this.sidenav.opened = false;
        }

        this.currentRoute = route.url;
      }
    });

    this.routeInitialize(this.links, null);
  }

  ngOnDestroy(): void {
  }

  // refresh() {
  //   this.isLoading = true;
  //   timer(1000).subscribe(() => this.isLoading = false);
  // }

  resetNav(selectedLink) {
    _.each(this.links, (link) => link['expanded'] = link === selectedLink ? selectedLink.expanded : false);
  }

  routeInitialize(links, parentRoute) {
    _.each(links, (link) => {
      link.parentRoute = !!parentRoute ? parentRoute : '';
      link.fullRoute = link.parentRoute + link.route;

      if (!!link.nestedLinks && link.nestedLinks.length > 0) {
        this.routeInitialize(link.nestedLinks, link.parentRoute + link.route);
      }
    });
  }

  sidenavToggle() {
    if (!!this.tabletQuery.matches) {
      this.tabletQuery.expanded = !this.tabletQuery.expanded;
      if (this.tabletQuery.expanded) {
        this.sidenav.opened = this.tabletQuery.expanded;
      }
    } else {
      this.sidenav.toggle();
    }
  }

  openNavigationDialog($event): void {
    const dialogRef = $event.dialog.open(NavigationDialogComponent, {
      data: { links: $event.links },
      closeOnNavigation: true,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
