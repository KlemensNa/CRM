import { Component, inject } from '@angular/core';
import { Firestore, Unsubscribe, collection, doc, getDoc, limit, onSnapshot, query } from '@angular/fire/firestore';
import { Employees } from '../models/employees.class';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesAddDialogComponent } from '../employees-add-dialog/employees-add-dialog.component';
import { EmployeesEditDialogComponent } from '../employees-edit-dialog/employees-edit-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.class';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  firestore: Firestore = inject(Firestore);
  unsub;
  id: string;
  employeesList: Employees[] = [];
  employee: Employees = new Employees();


  constructor(public dialog: MatDialog, private route: ActivatedRoute,) {

    const q = query(this.getUserRef(), limit(50))
    this.unsub = onSnapshot(q, (doc) => {
      this.employeesList = [];
      doc.forEach((element: any) => {
        this.employeesList.push({ ...element.data(), id: element.id }) //add id to JSON
      });

    });

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getUser()
  }

  async getUser() {
    const docRef = doc(this.getUserRef(), this.id);
    const docSnap = await getDoc(docRef);
    this.employee = new Employees(docSnap.data())
  }


  getUserRef() {
    return collection(this.firestore, 'employees')
  }

  openDialog() {
    this.dialog.open(EmployeesAddDialogComponent)
  }
}
