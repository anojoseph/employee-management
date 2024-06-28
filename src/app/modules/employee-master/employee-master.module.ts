import { NgModule } from '@angular/core';
import { EmployeeAddComponent } from './employee-add/employeeadd.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { EmployeeMasterRoutingModule } from './emplyee-master.routing.module';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DeleteConfirmationDialogComponent } from './employeelist/employeedelete.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    EmployeeAddComponent,
    EmployeeListComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    EmployeeMasterRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class EmployeeMasterModule { }
