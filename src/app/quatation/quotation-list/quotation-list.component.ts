import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IQuotation } from '../../interfaces/IQuotation';
import { EQuotationStatus } from '../../enums/EQuotationStatus.enum';
import { _ } from 'underscore';
import { ICustomer } from '../../interfaces/ICustomer';
import { IAudit } from '../../interfaces/IAudit';
import { IDocument } from '../../interfaces/IDocument';
import { EQuotationTerm } from '../../enums/EQuotationTerm.enum';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { EventEmitter } from 'events';

const mock_document_data: IDocument = {
  date: new Date(),
  documentId: '#SPQ180705-0008',
  serial: 8,
  remark: ''
};

const mock_audit_data: IAudit = {
  createdBy: 'admin',
  createdDate: new Date(),
  updatedBy: 'admin',
  updatedDate: new Date(),
  deleted: false
};

const mock_customer_data: ICustomer = {
  id: 1,
  name: 'Jaocb',
  phone: '07-123 4564',
  email: 'abc123@gmail.com',
  fax: '07-126 4561',
  gstRegistrationNumber: '154asd785dcz',
  address: '',
  audit: mock_audit_data,
  personInCharge: { name: 'Jacob', phone: '019-7524561', email: 'jacob.tan@gmail.com' }
};

const mock_quotation_data: IQuotation[] = [
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
  { id: 1, documentId: '#SPQ180705-0008', customerId: 1, customer: mock_customer_data, status: EQuotationStatus.Sent, audit: mock_audit_data, archive: false, date: new Date(), document: mock_document_data, remark: '', revised: false, term: EQuotationTerm.Cash, totalAmount: 1000},
];

export interface IQueryModelDetail {
  // for backend purpose
  parameterType: string;
  parameterName: string;
  enumValue?: string;
  queryText: string;
  startDate?: Date;
  endDate?: Date;
  query: string;
  minimum?: number;
  maximum?: number;
  flagValues: Array<number>;
  optional: boolean;
  // for frontend purpose
  displayName: string;
}

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {
  @Output() refresh = new EventEmitter();
  displayedColumns: string[] = ['selected', 'documentId', 'customer.name', 'customer.personInCharge.name', 'customer.personInCharge.phone', 'customer.personInCharge.email', 'status', 'audit'];
  dataSource = mock_quotation_data;
  selectedAll = false;
  quotationStatusList = EQuotationStatus;
  actions = [
    { displayName: 'Generate Quotation', icon: '', onClick: () => { alert('Generate Quotation button clicked!'); }, show: () => this.checkSelectedOneItem() },
    { displayName: 'Edit', icon: '', onClick: () => this.editItem('/quotation/edit/'), show: () => this.checkSelectedOneItem() },
    { displayName: 'Delete', icon: '', color: 'red', onClick: () => { alert('Delete button clicked!'); }, show: () => this.checkSelectedOneItem() },
    { displayName: 'New', icon: '', onClick: () => this.navigateTo('/quotation/new'), show: () => true },
  ];
  filterOptions = [
    { displayName: 'Quotation' },
    { displayName: 'To' },
    { displayName: 'Attention' },
    { displayName: 'Phone' },
    { displayName: 'Email' },
    { displayName: 'Status' },
  ];
  multipleFilters = [] as Array<IQueryModelDetail>;
  selectedFilterOption = null;
  searchText: string = null;

  constructor(public router: Router, public snackBar: MatSnackBar) {}

  ngOnInit() {
    _.each(this.dataSource, (item) => item.selected = false);
    this.multipleFilters.push({ displayName: 'Quotation', queryText: 'SPQ180705-0008' } as IQueryModelDetail);
    this.multipleFilters.push({ displayName: 'To', queryText: 'Splendid Printing' } as IQueryModelDetail);
    this.multipleFilters.push({ displayName: 'Attention', queryText: 'Jacob' } as IQueryModelDetail);
    this.multipleFilters.push({ displayName: 'Phone', queryText: '07-1223 4567' } as IQueryModelDetail);
    this.multipleFilters.push({ displayName: 'Email', queryText: 'abc123@gmail.com' } as IQueryModelDetail);
    this.multipleFilters.push({ displayName: 'Status', queryText: 'Sent' } as IQueryModelDetail);
    this.selectedFilterOption = _.first(this.filterOptions);
  }

  addFilterByKeyPress(event) {
    if (event.keyCode === 13 && !!this.searchText) {
      this.addFilter();
    }
  }

  addFilter() {
    this.multipleFilters.push({displayName: this.selectedFilterOption.displayName, queryText: this.searchText} as IQueryModelDetail);
    this.searchText = null;
    // execute new query from multipleFilters
  }

  removeFilter(filter) {
    this.multipleFilters.splice((_.findIndex(this.multipleFilters, filter)), 1);
    this.openSnackBar(`Removed the filter "${filter.displayName}: ${filter.queryText}"`);
  }

  clearMultipleFilters() {
    this.multipleFilters = [];
    this.openSnackBar('Cleared all filter.');
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'Dismiss', { duration: 3000 });
  }

  editItem(routeUrl) {
    if (this.checkSelectedOneItem()) {
      const selectedItem = _.first(_.filter(this.dataSource, { selected: true }));
      this.router.navigateByUrl(routeUrl + selectedItem.id);
    } else {
      console.log('Selected items are more than one or less than one.');
    }
  }

  navigateTo(routeUrl) {
    this.router.navigateByUrl(routeUrl);
  }

  checkSelectedOneItem() {
    const selectedItems = _.filter(this.dataSource, { selected: true });
    return selectedItems.length === 1;
  }

  toggleAll() {
    _.each(this.dataSource, (item) => item.selected = this.selectedAll);
  }

  selectedItem() {
    // check is all item is selected ?
    this.selectedAll = _.every(this.dataSource, { selected: true });
  }
}
