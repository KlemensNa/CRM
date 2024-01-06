import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-delete-component',
  templateUrl: './employee-delete-component.component.html',
  styleUrl: './employee-delete-component.component.scss'
})
export class EmployeeDeleteComponentComponent {

  constructor(
    private dialogRef: MatDialogRef<EmployeeDeleteComponentComponent>,
    private employeeService: EmployeeService
    ){}

  closeDialog(){
    this.dialogRef.close()
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee();
    this.dialogRef.close()
  }
}
