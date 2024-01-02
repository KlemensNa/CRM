import { Component, inject } from '@angular/core';
import { Employees } from '../models/employees.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-employees-add-dialog',
  templateUrl: './employees-add-dialog.component.html',
  styleUrl: './employees-add-dialog.component.scss'
})
export class EmployeesAddDialogComponent {

  loading: boolean = false;
  employee = new Employees();
  positions = ['Marketing Consultant', 'Something other'];
  departments = ['Sales', 'Heads of Sale', 'Load Generator', 'Sales Manager', 'Head of Marketing'];

  selectedPosition?: string;
  selectedDep?: string;


  firestore: Firestore = inject(Firestore);
  

  constructor(public dialogRef:MatDialogRef<DialogComponent>) {}

  selectPosition(position: any){
    this.employee.position = position 
    
  }

  selectDepartment(dep: any){
    this.employee.department = dep;
    
  }

  save(){
    this.addEmployee();
    this.dialogRef.close();
    this.loading = false;
  }

  async addEmployee(){
    this.loading = true;
    await addDoc(this.getUserRef(), this.employee.toJSON())
  }

  getUserRef(){
    return collection(this.firestore, 'employees')
  } 
}


