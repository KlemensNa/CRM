import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Firestore, query, getFirestore, collection, doc, onSnapshot} from '@angular/fire/firestore';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  firestore: Firestore = inject(Firestore);
  unsub;


  constructor(public dialog: MatDialog){
    this.unsub = onSnapshot(doc(this.getUserRef()), (doc:any) => {    
      // console.warn(this.firestore)
      // console.error("Current data: ", doc)
      
      
      doc.forEach((element: any) => {
        console.error("Current data: ", element)
      });

      });

  }

  openDialog(){ 
   this.dialog.open(DialogComponent)
  }

  getUserRef(){
    return collection(this.firestore, 'users')
  }
}

