import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html'
})

export class EmployeeAddComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EmployeeAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      contactNo:  ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      address: ['', Validators.required]
    });
  }

  get f() {
    return this.employeeForm.controls
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.employeeForm.valid) {
      this.dialogRef.close(this.employeeForm.value);
      return
    }
    else
      this.toastr.error('Please fill all the required fields')
  }

  ngOnInit(): void {

  }
}
