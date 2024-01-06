import { Injectable, inject } from '@angular/core';
import { deleteDoc, doc, collection, Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  id: string;
  firestore: Firestore = inject(Firestore);

  constructor() { }

  async deleteEmployee(){
    await deleteDoc(doc(collection(this.firestore, "employees"), this.id));
  }

}
