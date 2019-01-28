import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../services/contact-list.service';
import { ContactComponent } from '../contact/contact.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public contactListService: ContactListService, public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.contactListService.getContact();
  }

  editContact(item) {
    this.http.get('http://localhost/webbased-class/course_work/contact-app/api/get_contact_by_id.php?id=' + item.id).subscribe(res => {

      const dialogRef = this.dialog.open(ContactComponent, {
        width: '700px',
        maxHeight: '700px',
        data: res
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        this.contactListService.getContact();
      });
    });
  }

}
