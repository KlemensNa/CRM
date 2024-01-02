import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Firestore, query, getFirestore, collection, doc, onSnapshot, limit, updateDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  firestore: Firestore = inject(Firestore);
  unsub;
  userList: User[] = [];


  constructor(public dialog: MatDialog) {    
    
    const q = query(this.getUserRef(), limit(50))
    this.unsub = onSnapshot(q, (doc) => {
      this.userList = [];      
      doc.forEach((element: any) => {
        this.userList.push({...element.data(), id: element.id}) //add id to JSON
      });
    });

  }

  openDialog() {
    this.dialog.open(DialogComponent)
  }

  getUserRef() {
    return collection(this.firestore, 'users')
  }
}

