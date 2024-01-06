import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Employees } from '../models/employees.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-edit-dialog',
  templateUrl: './employees-edit-dialog.component.html',
  styleUrl: './employees-edit-dialog.component.scss'
})
export class EmployeesEditDialogComponent {
  loading: boolean = false;
  id: string;
  employee: Employees;
  positions = ['Marketing Consultant', 'Something other'];
  departments = ['Sales', 'Heads of Sale', 'Load Generator', 'Sales Manager', 'Head of Marketing'];

  selectedPosition?: string;
  selectedDep?: string;

  firestore: Firestore = inject(Firestore);
  

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<EmployeesEditDialogComponent>, ) {}

  
  ngOnInit(){
    console.warn("yeaf", this.employee.status);
  }


  selectPosition(position: any){
    this.employee.position = position 
  }


  selectDepartment(dep: any){
    this.employee.department = dep;  
  }


  async updateEmployee(){
    this.loading = true;
  
    await updateDoc(this.getEmployee(), this.employee.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
  }


  getEmployee(){
    return doc(collection(this.firestore, 'employees'), this.employee.id)
  } 
}

