import { Params } from '../../../node_modules/@angular/router';

export interface IBreadcrumb {
    label: string;
    params: Params;
    url: string;
  }
