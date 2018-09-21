import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '../../../../node_modules/@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageHistoryService {
  pageHistory = [];
  previousPageUrl: string;
  currentPageUrl: string;

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.pageHistory.push(event);
        this.previousPageUrl = this.currentPageUrl || '';
        this.currentPageUrl = event.url;
      }
    });
  }

}
