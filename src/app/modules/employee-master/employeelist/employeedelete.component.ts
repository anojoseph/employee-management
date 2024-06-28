import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  template: `
  <div style="margin: 20px;text-align:center">
    <h2 mat-dialog-title>Delete Employee</h2>
    <mat-dialog-content>
      Are you sure you want to delete employee <span style="color: red;">{{ data.employeeName }}?</span>
    </mat-dialog-content>
    <mat-dialog-actions style="display: flex;justify-content: center;">
      <button class='btn btn-sm btn-danger' mat-dialog-close><i class="fa fa-times" aria-hidden="true"></i> Cancel</button>
      <button style='margin-left:10px' class='btn btn-primary btn-sm' [mat-dialog-close]="true" cdkFocusInitial><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
    </mat-dialog-actions>
  </div>
  `,
})
export class DeleteConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employeeName: string }
  ) {}
}
