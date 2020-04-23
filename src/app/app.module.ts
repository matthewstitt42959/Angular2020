import {  ModuleWithProviders, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import {ApiService } from './_services/api.service';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { EmployeeCreateComponent } from './_components/employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './_components/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './_components/employee/employee-list/employee-list.component';
// Add Angualr Material _components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
    imports: [
        HttpClientModule,
        routing,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        EmployeeCreateComponent,
        EmployeeEditComponent,
        EmployeeListComponent
    ],
    providers: [

        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        ApiService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }