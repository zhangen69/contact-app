import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotationListComponent } from './quatation/quotation-list/quotation-list.component';
import { QuotationFormComponent } from './quatation/quotation-form/quotation-form.component';
import { QuotationViewComponent } from './quatation/quotation-view/quotation-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Contacts' } },
  // { path: 'quotation', children: [
  //   { path: '', redirectTo: '/quotation/list', pathMatch: 'full' },
  //   { path: 'list', component: QuotationListComponent, data: { breadcrumb: 'List' } },
  //   { path: 'list/confirmed', component: QuotationListComponent, data: { breadcrumb: 'Confirmed List' } },
  //   { path: 'list/rejected', component: QuotationListComponent, data: { breadcrumb: 'Rejected List' } },
  //   { path: 'new', component: QuotationFormComponent, data: { breadcrumb: 'New' } },
  //   { path: 'edit/:id', component: QuotationFormComponent, data: { breadcrumb: 'Edit' } },
  //   { path: 'view/:id', component: QuotationViewComponent, data: { breadcrumb: 'View' } },
  // ], data: { breadcrumb: 'Quotation' }},
  // { path: 'quotationItem', children: [
  //   { path: '', redirectTo: '/quotationItem/list', pathMatch: 'full' },
  //   { path: 'list', component: HomeComponent, data: { breadcrumb: 'List' } },
  //   { path: 'list/approved', component: HomeComponent, data: { breadcrumb: 'Approved List' } },
  //   { path: 'list/rejected', component: HomeComponent, data: { breadcrumb: 'Rejected List' } },
  //   { path: 'view/:id', component: HomeComponent, data: { breadcrumb: 'View' } },
  // ], data: { breadcrumb: 'Quotation Item' }},
  // { path: 'customer', children: [
  //   { path: '', redirectTo: '/customer/list', pathMatch: 'full' },
  //   { path: 'list', component: HomeComponent, data: { breadcrumb: 'List' } },
  //   { path: 'new', component: HomeComponent, data: { breadcrumb: 'New' } },
  //   { path: 'edit/:id', component: HomeComponent, data: { breadcrumb: 'Edit' } },
  //   { path: 'view/:id', component: HomeComponent, data: { breadcrumb: 'View' } },
  // ], data: { breadcrumb: 'Customer' }},
  // { path: 'finishing', children: [
  //   { path: '', redirectTo: '/finishing/list', pathMatch: 'full' },
  //   { path: 'list', component: HomeComponent, data: { breadcrumb: 'List' } },
  //   { path: 'new', component: HomeComponent, data: { breadcrumb: 'New' } },
  //   { path: 'edit/:id', component: HomeComponent, data: { breadcrumb: 'Edit' } },
  //   { path: 'view/:id', component: HomeComponent, data: { breadcrumb: 'View' } },
  // ], data: { breadcrumb: 'Finishing' }},
  // { path: 'item', children: [
  //   { path: '', redirectTo: '/item/list', pathMatch: 'full' },
  //   { path: 'list', component: HomeComponent, data: { breadcrumb: 'List' } },
  //   { path: 'new', component: HomeComponent, data: { breadcrumb: 'New' } },
  //   { path: 'edit/:id', component: HomeComponent, data: { breadcrumb: 'Edit' } },
  //   { path: 'view/:id', component: HomeComponent, data: { breadcrumb: 'View' } },
  // ], data: { breadcrumb: 'Item' }},
  // { path: 'colour', children: [
  //   { path: '', redirectTo: '/colour/list', pathMatch: 'full' },
  //   { path: 'list', component: HomeComponent, data: { breadcrumb: 'List' } },
  //   { path: 'new', component: HomeComponent, data: { breadcrumb: 'New' } },
  //   { path: 'edit/:id', component: HomeComponent, data: { breadcrumb: 'Edit' } },
  //   { path: 'view/:id', component: HomeComponent, data: { breadcrumb: 'View' } },
  // ], data: { breadcrumb: 'Colour' }},
  // { path: 'quality', children: [
  //   { path: '', redirectTo: '/quality/list', pathMatch: 'full' },
  //   { path: 'list', component: HomeComponent, data: { breadcrumb: 'List' } },
  //   { path: 'new', component: HomeComponent, data: { breadcrumb: 'New' } },
  //   { path: 'edit/:id', component: HomeComponent, data: { breadcrumb: 'Edit' } },
  //   { path: 'view/:id', component: HomeComponent, data: { breadcrumb: 'View' } },
  // ], data: { breadcrumb: 'Quality' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
