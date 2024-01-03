import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesAddDialogComponent } from './employees-add-dialog/employees-add-dialog.component';
import { EmployeesInformationComponent } from './employees-information/employees-information.component';
import { EmployeesEditDialogComponent } from './employees-edit-dialog/employees-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent, 
    PublicComponent,
    LoginComponent,
    SigninComponent,
    EmployeesComponent,
    EmployeesAddDialogComponent,
    EmployeesInformationComponent,
    EmployeesEditDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatProgressBarModule,
    MatMenuModule,
    MatSelectModule,
    RouterModule,
    AdminModule,
    provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-142f9","appId":"1:405970796618:web:956b444e44f92dbe49e6b3","storageBucket":"simplecrm-142f9.appspot.com","apiKey":"AIzaSyA4hJeo0hqP5T1Wjj9h0r1iDiIyPwmrAvQ","authDomain":"simplecrm-142f9.firebaseapp.com","messagingSenderId":"405970796618"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
