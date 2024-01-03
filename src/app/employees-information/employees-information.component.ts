import { Component, inject } from '@angular/core';
import { Employees } from '../models/employees.class';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EmployeesEditDialogComponent } from '../employees-edit-dialog/employees-edit-dialog.component';

@Component({
  selector: 'app-employees-information',
  templateUrl: './employees-information.component.html',
  styleUrl: './employees-information.component.scss'
})
export class EmployeesInformationComponent {
  
  firestore: Firestore = inject(Firestore);
  id: string;
  employee: Employees = new Employees();
  menuOpen: boolean;

  constructor(private route: ActivatedRoute, public dialog: MatDialog){}    

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser();   
  }

  async getUser(){
  const docRef = doc(collection(this.firestore, "employees"),  this.id);  
  const docSnap = await getDoc(docRef);
  this.employee = new Employees(docSnap.data());
  this.openEditEmployeeDialog(); 
  }

  async openEditEmployeeDialog(){
      let dialog = this.dialog.open(EmployeesEditDialogComponent);
      let empCopy = {...this.employee.toJSON(), id: this.id};
      dialog.componentInstance.employee = new Employees(empCopy);  
  }

}
