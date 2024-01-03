import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
    
    firestore: Firestore = inject(Firestore);
    id: string;
    user: User = new User();
    menuOpen: boolean;

    constructor(private route: ActivatedRoute, public dialog: MatDialog){}    

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getUser();
      
    }

    async getUser(){
    const docRef = doc(collection(this.firestore, "users"),  this.id);
    const docSnap = await getDoc(docRef);
    this.user = new User(docSnap.data())
    console.warn(this.user)
    }

    openEditProfil(){
      let dialog = this.dialog.open(DialogEditUserComponent);
      let userCopy = {...this.user.toJSON(), id: this.id};
      dialog.componentInstance.user = new User(userCopy);         //zugriff auf variable "user" in DialogEditUserComponent
                                                                  // new USer(this.user.toJSON()) erstellt Kopie vom Object --> sonst ändert sich Object direkt beim berabreiten durch Two way binding
      }

    openEditMenu(){
      let dialog = this.dialog.open(DialogEditAdressComponent);
      let userCopy = {...this.user.toJSON(), id: this.id}
      console.warn("userCopy", userCopy)
      dialog.componentInstance.user = new User(userCopy);  
    }



}
