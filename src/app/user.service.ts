import { Injectable, inject } from '@angular/core';
import { Firestore, deleteDoc, doc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: string;
  firestore: Firestore = inject(Firestore);

  constructor() { }

  async deleteEmployee(){
    console.log(this.id);
    await deleteDoc(doc(collection(this.firestore, "users"), this.id));
  }
}
