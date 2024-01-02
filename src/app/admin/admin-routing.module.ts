import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserInformationComponent } from '../user-information/user-information.component';
import { UserComponent } from '../user/user.component';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeesInformationComponent } from '../employees-information/employees-information.component';
import { EmployeesEditDialogComponent } from '../employees-edit-dialog/employees-edit-dialog.component';

const routes: Routes = 
  [
    {path: '', component: AdminComponent, children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "user", component: UserComponent},
      {path: "user/:id", component: UserInformationComponent},
      {path: "employees", component: EmployeesComponent},
      {path: "employees/:id", component: EmployeesInformationComponent},

    ]},
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
