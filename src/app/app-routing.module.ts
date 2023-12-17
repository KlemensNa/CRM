import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "user", component: UserComponent},
  {path: "user/:id", component: UserInformationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
