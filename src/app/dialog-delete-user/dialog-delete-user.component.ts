import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrl: './dialog-delete-user.component.scss'
})
export class DialogDeleteUserComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogDeleteUserComponent>,
    private UserService: UserService
    ){}

  closeDialog(){
    this.dialogRef.close()
  }

  deleteUser(){
    this.UserService.deleteEmployee();
    this.dialogRef.close()
  }
}
