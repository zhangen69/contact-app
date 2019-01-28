import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  list: any[];

  constructor(private http: HttpClient) { }

  getContact() {
    this.http.get('http://localhost/webbased-class/course_work/contact-app/api/get_contact.php').subscribe(data => {
      this.list = _.map(data, (item) => {
        return {
            id: item.Id,
            firstName: item.FirstName,
            lastName: item.LastName,
            company: item.Company,
            jobTitle: item.JobTitle,
            remarks: item.Remarks,
            email: item.Email,
            phone: item.Phone
          };
      });
    });
  }

}
