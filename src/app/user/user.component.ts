import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Firestore, query, getFirestore, collection, doc, onSnapshot, limit, updateDoc, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { Employees } from '../models/employees.class';
import { UserService } from '../user.service';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  firestore: Firestore = inject(Firestore);
  unsub;
  userList: User[] = [];
  user: User =  new User();
  hovered: boolean;

  constructor(
    public dialog: MatDialog,
    public userService: UserService  
    ) {    
    
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

  async deleteCustomer(id: string){
    this.userService.id = id;
    this.dialog.open(DialogDeleteUserComponent)  

  }
}

