import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { StudentRegisterComponent } from "./student-register/student-register.component";
import { HomeComponent } from './home/home.component';

const MAINMENU_ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'students', component: StudentComponent },
  { path: 'register', component: StudentRegisterComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
