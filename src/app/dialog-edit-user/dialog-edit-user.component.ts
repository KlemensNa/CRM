import { Component, inject } from '@angular/core';
import { User } from '../models/user.class';
import { Firestore, updateDoc, doc, collection } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user: User;
  loading: boolean = false;
  birthDate: Date;
  firestore: Firestore = inject(Firestore);
  

  constructor(private dialogRef: MatDialogRef<DialogEditUserComponent>){}

  ngOnInit(){
    console.error(this.user)
  }

  async update(){
    this.loading = true;
    await updateDoc(this.getUser(), this.user.toJSON())
          .then(() => {
            this.loading = false;
            this.dialogRef.close();
            location.reload()
          })
  }

  getUser(){
    return doc(collection(this.firestore, 'users'), this.user.id)
  }

}
