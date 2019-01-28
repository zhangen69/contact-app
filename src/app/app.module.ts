import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NavListItemComponent } from './nav-list-item/nav-list-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavigationDialogComponent } from './templates/navigation-dialog/navigation-dialog.component';
import { LayoutModule } from '@angular/cdk/layout';
import { QuotationListComponent } from './quatation/quotation-list/quotation-list.component';
import { QuotationFormComponent, QuestionService } from './quatation/quotation-form/quotation-form.component';
import { QuotationViewComponent } from './quatation/quotation-view/quotation-view.component';
import { GetEnumNamePipe } from './pipes/get-enum-name.pipe';
import { GetAuditPipe } from './pipes/get-audit/get-audit.pipe';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { LoadingPageService } from './services/loading-page/loading-page.service';
import { PageHistoryService } from './services/page-history/page-history.service';
import { DynamicFormComponent, QuestionControlService } from './dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListService } from './services/contact-list.service';

// Add an icon to the library for convenient access in other components
library.add(fas, far, fab);

@NgModule({
   declarations: [
      AppComponent,
      NavListItemComponent,
      HomeComponent,
      BreadcrumbComponent,
      NavigationDialogComponent,
      QuotationListComponent,
      QuotationFormComponent,
      QuotationViewComponent,
      GetEnumNamePipe,
      GetAuditPipe,
      DynamicFormComponent,
      DynamicFormFieldComponent,
      ContactComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      FontAwesomeModule,
      FlexLayoutModule,
      LayoutModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      LoadingPageService,
      PageHistoryService,
      QuestionControlService,
      QuestionService,
      ContactListService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      NavigationDialogComponent,
      ContactComponent
   ]
})
export class AppModule { }
