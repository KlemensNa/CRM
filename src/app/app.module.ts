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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { DialogComponent } from './dialog/dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { UserInformationComponent } from './user-information/user-information.component';
import { DialogEditAdressComponent } from './dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DialogComponent,
    DashboardComponent,
    UserInformationComponent,
    DialogEditAdressComponent,
    DialogEditUserComponent
  ],
  imports: [
    BrowserModule,
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
    MatTableModule,
    MatCardModule,
    MatProgressBarModule,
    MatMenuModule,
    provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-142f9","appId":"1:405970796618:web:956b444e44f92dbe49e6b3","storageBucket":"simplecrm-142f9.appspot.com","apiKey":"AIzaSyA4hJeo0hqP5T1Wjj9h0r1iDiIyPwmrAvQ","authDomain":"simplecrm-142f9.firebaseapp.com","messagingSenderId":"405970796618"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
