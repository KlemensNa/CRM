import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogComponent } from '../dialog/dialog.component';
import { UserInformationComponent } from '../user-information/user-information.component';
import { UserComponent } from '../user/user.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    UserComponent,
    DialogComponent,
    DashboardComponent,
    UserInformationComponent,
    DialogEditAdressComponent,
    DialogEditUserComponent,
    LandingComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    FormsModule, 
    MatTableModule,
    MatCardModule,
    MatProgressBarModule,
    MatMenuModule,
    RouterModule,
  ]
})
export class PublicModule { }
