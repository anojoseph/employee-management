import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeeService } from '../employee-master.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddComponent } from '../employee-add/employeeadd.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteConfirmationDialogComponent } from './employeedelete.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employeelist.component.html',
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  pagedEmployees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchFilter = '';

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.employeeService.employees$.subscribe((employees) => {
      this.employees = employees;
      this.applyFilters();
    });
  }

  addEmployee(): void {
    const dialogRef = this.dialog.open(EmployeeAddComponent, {
      width: '450px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeService.addEmployee(result); // Add employee to service
        this.toastr.success('Employee added successfully!');
        this.applyFilters(); // Apply filters after adding an employee
      }
    });
  }

  applyFilters(): void {
    this.filteredEmployees = this.employees.filter((employee) =>
      this.filterEmployee(employee)
    ); // Filter employees based on search filter
    this.updatePagedEmployees();
  }

  updatePagedEmployees(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    if(this.searchFilter){ // for searching in all the pages
      this.pagedEmployees = this.filteredEmployees
    }
    else
    this.pagedEmployees = this.employees
      .sort((a, b) => b.id - a.id) // Sort by id descending for showing the added value at first
      .slice(startIndex, startIndex + this.itemsPerPage);
  }

  filterEmployee(employee: Employee): boolean {
    const searchText = this.searchFilter.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchText) ||
      employee.email.toLowerCase().includes(searchText) ||
      employee.contactNo.includes(searchText) ||
      employee.address.toLowerCase().includes(searchText)
    );
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.updatePagedEmployees();
  }

  deleteEmployee(index: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: { employeeName: this.pagedEmployees[index].name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const employeeToDelete = this.pagedEmployees[index];
        this.employeeService.deleteEmployee(employeeToDelete.id);
        this.employees = this.employees.filter((emp) => emp.id !== employeeToDelete.id);
        this.toastr.success('Employee deleted successfully!');
        this.applyFilters(); // Apply filters after deleting an employee
      }
    });
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  clearsearch(){
    this.searchFilter = '';
    this.applyFilters();
  }
}
