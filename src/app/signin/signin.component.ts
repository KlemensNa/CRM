import { Component, inject } from '@angular/core';
import { Admin } from '../models/admin.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  
  firestore: Firestore = inject(Firestore)
  admin = new Admin();


  save(){
    this.addUser();
  }


  async addUser(){
    await addDoc(this.getUserRef(), this.admin.toJSON())
  }


  getUserRef(){
    return collection(this.firestore, 'accounts')
  }
}
