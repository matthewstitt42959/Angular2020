import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { EmployeeCreateComponent } from './_components/employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './_components/employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './_components/employee/employee-edit/employee-edit.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'create-employee', component: EmployeeCreateComponent },
  	{ path: 'edit-employee/:id', component: EmployeeEditComponent },
  	{ path: 'employees-list', component: EmployeeListComponent },  

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);