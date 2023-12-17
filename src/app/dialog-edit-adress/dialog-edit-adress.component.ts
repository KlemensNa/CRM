import { Component, inject } from '@angular/core';
import { User } from '../models/user.class';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss'
})
export class DialogEditAdressComponent {
  user: User;
  loading: boolean = false;
  firestore: Firestore = inject(Firestore)

  constructor(private dialogRef: MatDialogRef<DialogEditAdressComponent>){}

  async update(){
    this.loading = true;
    console.log(this.user.toJSON())
    await updateDoc(this.getUser(), this.user.toJSON())
          .then(() => {
            this.loading = false;
            this.dialogRef.close();
          })
  }

  getUser(){
    return doc(collection(this.firestore, 'users'), this.user.id)
  }

}
