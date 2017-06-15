import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentComponent } from './student/student.component';
import { StudentDeletionComponent } from './student-deletion/student-deletion.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {ModalComponent} from "./modal.component";
import { MenuComponent } from './menu.component';
import { CONST_ROUTING } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    StudentComponent,
    StudentDeletionComponent,
    StudentEditComponent,
    ModalComponent,
    MenuComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ReactiveFormsModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
