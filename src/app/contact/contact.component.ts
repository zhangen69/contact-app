import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { EDialogStatus } from '../enums/EDialogStatus.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dialogStatusOptions: string[] = Object.keys(EDialogStatus).splice(Object.keys(EDialogStatus).length / 2);
  formData: any = {
    emails: [{}],
    phones: [{}],
  };

  constructor(public dialogRef: MatDialogRef<ContactComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  cancel() {
    const data = Object.assign({}, this.formData, { status: EDialogStatus.Cancelled, statusName: this.dialogStatusOptions[EDialogStatus.Cancelled] });

    this.dialogRef.close(data);
  }

  submit() {
    const data = Object.assign({}, this.formData, { status: EDialogStatus.Succeeeded, statusName: this.dialogStatusOptions[EDialogStatus.Succeeeded] });

    this.snackBar.open('Created new contact successfully!', 'Close', { duration: 2000 });

    this.dialogRef.close(data);
  }

}
