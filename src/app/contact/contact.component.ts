import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { EDialogStatus } from '../enums/EDialogStatus.enum';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dialogStatusOptions: string[] = Object.keys(EDialogStatus).splice(Object.keys(EDialogStatus).length / 2);
  formData: any = {
    id: 0,
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    phone: '',
    email: '',
    remarks: '',
  };

  constructor(public dialogRef: MatDialogRef<ContactComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar, private http: HttpClient) {
    if (data != null) {
      this.formData.id = data.Id;
      this.formData.firstName = data.FirstName;
      this.formData.lastName = data.LastName;
      this.formData.company = data.Company;
      this.formData.jobTitle = data.JobTitle;
      this.formData.phone = data.Phone;
      this.formData.email = data.Email;
      this.formData.remarks = data.Remarks;
    }
  }

  ngOnInit() {
  }

  cancel() {
    const data = Object.assign({}, this.formData, { status: EDialogStatus.Cancelled, statusName: this.dialogStatusOptions[EDialogStatus.Cancelled] });

    this.dialogRef.close(data);
  }

  submit() {
    const data = Object.assign({}, this.formData, { status: EDialogStatus.Succeeeded, statusName: this.dialogStatusOptions[EDialogStatus.Succeeeded], submit: true });

    this.http.post('http://localhost/webbased-class/course_work/contact-app/api/create_contact.php', data).subscribe(res => {
      if (res['succeeded'] === false) {
        this.snackBar.open('Failed to created new contact successfully!', 'Close', { duration: 2000 });
      } else {
        this.snackBar.open('Created new contact successfully!', 'Close', { duration: 2000 });
        this.dialogRef.close(data);
      }
    });
  }

  update() {
    const data = Object.assign({}, this.formData, { status: EDialogStatus.Succeeeded, statusName: this.dialogStatusOptions[EDialogStatus.Succeeeded], submit: true });

    this.http.post('http://localhost/webbased-class/course_work/contact-app/api/update_contact.php', data).subscribe(res => {
      if (res['succeeded'] === false) {
        this.snackBar.open('Failed to update new contact successfully!', 'Close', { duration: 2000 });
      } else {
        this.snackBar.open('Updated new contact successfully!', 'Close', { duration: 2000 });
        this.dialogRef.close(data);
      }
    });
  }

}
