import { IAudit } from './IAudit';
import { ICustomer } from './ICustomer';
import { IDocument } from './IDocument';
import { IQuotationItem } from './IQuotationItem';
import { EQuotationStatus } from '../enums/EQuotationStatus.enum';
import { EQuotationTerm } from '../enums/EQuotationTerm.enum';

export interface IQuotation {
  id: number;
  actionDate?: Date;
  archive: boolean;
  audit: IAudit;
  customer: ICustomer;
  customerId: number;
  date: Date;
  document: IDocument;
  documentId: string;
  quotationItems?: Array<IQuotationItem>;
  remark: string;
  revised: boolean;
  sentDate?: Date;
  status: EQuotationStatus;
  term: EQuotationTerm;
  totalAmount: number;
}
