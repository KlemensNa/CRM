import { Component, inject } from '@angular/core';
import { Firestore,  collection, doc, getDoc, limit, onSnapshot, query } from '@angular/fire/firestore';
import { Employees } from '../models/employees.class';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesAddDialogComponent } from '../employees-add-dialog/employees-add-dialog.component';
import { EmployeesEditDialogComponent } from '../employees-edit-dialog/employees-edit-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDeleteComponentComponent } from '../employee-delete-component/employee-delete-component.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  firestore: Firestore = inject(Firestore);
  unsub;
  employeesList: Employees[] = [];
  employee: Employees = new Employees();


  constructor(public dialog: MatDialog, private route: ActivatedRoute, public employeeService: EmployeeService) {

    const q = query(this.getUserRef(), limit(50))
    this.unsub = onSnapshot(q, (doc) => {
      this.employeesList = [];
      doc.forEach((element: any) => {
        this.employeesList.push({ ...element.data(), id: element.id }) //add id to JSON
      });

    });
  }


  async editEmployee(id: string){
    const docRef = doc(collection(this.firestore, "employees"), id); 
    const docSnap = await getDoc(docRef);
    this.employee = new Employees(docSnap.data());
    this.openEditEmployeeDialog(id); 
  }


  async deleteEmployee(id){
    this.employeeService.id = id;
    this.dialog.open(EmployeeDeleteComponentComponent)
  }


  async openEditEmployeeDialog(newID: string){
      let dialog = this.dialog.open(EmployeesEditDialogComponent);
      let empCopy = {...this.employee.toJSON(), id: newID};
      dialog.componentInstance.employee = new Employees(empCopy);  
  }


  getUserRef() {
    return collection(this.firestore, 'employees')
  }


  openDialog() {
    this.dialog.open(EmployeesAddDialogComponent)
  }
}
