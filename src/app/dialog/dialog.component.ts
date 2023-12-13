import { Component, inject } from '@angular/core';
import { User } from '../models/user.class';    //von modelKlasse
import { Firestore, collection, collectionData, addDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  loading: boolean = false;
  user = new User();
  birthDate: Date = new Date();   //ng_model vom Datum in dieser Variablen

  firestore: Firestore = inject(Firestore)
  

  constructor(public dialogRef:MatDialogRef<DialogComponent>) {}

  save(){
    this.user.birthday = this.birthDate?.getTime(); // hier wird der timeStamp in die Variable des Users gespeichert
    this.addUser();
    this.dialogRef.close();
    this.loading = false;
  }

  async addUser(){
    this.loading = true;
    await addDoc(this.getUserRef(), this.user.toJSON())
  }

  getUserRef(){
    return collection(this.firestore, 'users')
  }

  

}

