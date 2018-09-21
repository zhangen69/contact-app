import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingPageService {
  isLoading: boolean;

  constructor() { }

  refresh() {
    this.isLoading = true;
    timer(1000).subscribe(() => this.isLoading = false);
  }

}
