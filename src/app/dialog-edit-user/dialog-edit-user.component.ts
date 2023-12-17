import { Component, inject } from '@angular/core';
import { User } from '../models/user.class';
import { Firestore, updateDoc, doc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user: User;
  loading: boolean = false;
  birthDate: Date;
  firestore: Firestore = inject(Firestore)

  async update(){
    await updateDoc(this.getUser(), this.user.toJSON())
  }

  getUser(){
    return doc(collection(this.firestore, 'users'), this.user.id)
  }

}
