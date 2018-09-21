import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class NavListItemComponent implements OnInit {
  expanded: boolean;
  @Input() item;
  @Input() currentRoute;
  @Input() tabletMode;
  @Input() sidenavExpanded;
  @Output() reset = new EventEmitter<boolean>();
  @Output() openDialog = new EventEmitter<{dialog: MatDialog, links: any}>();

  constructor(public router: Router, public dialog: MatDialog) {}

  ngOnInit() {
  }

  onItemSelected(item) {
    if (!!item.nestedLinks && item.nestedLinks.length > 0) {
      if (!!this.tabletMode && !this.sidenavExpanded) {
        this.openDialog.emit({dialog: this.dialog, links: item.nestedLinks});
      } else {
        this.reset.emit(item);
        item.expanded = !item.expanded;
      }
    } else {
      this.router.navigateByUrl(item.fullRoute);
    }
  }

}
