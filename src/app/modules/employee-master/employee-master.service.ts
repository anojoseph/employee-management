// employee.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeSubject = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employeeSubject.asObservable();
  private nextId = 21; // Start with the next id after initial 20 employees

  constructor() {
    // Initialize with 20 dummy employees
    const initialEmployees: Employee[] = [
      { id: 1, name: 'John Doe', contactNo: '1234567890', email: 'john@example.com', address: '123 Main St' },
      { id: 2, name: 'Jane Smith', contactNo: '0987654321', email: 'jane@example.com', address: '456 Elm St' },
      { id: 3, name: 'Alice Johnson', contactNo: '2345678901', email: 'alice@example.com', address: '789 Oak St' },
      { id: 4, name: 'Bob Brown', contactNo: '3456789012', email: 'bob@example.com', address: '321 Pine St' },
      { id: 5, name: 'Charlie Davis', contactNo: '4567890123', email: 'charlie@example.com', address: '654 Cedar St' },
      { id: 6, name: 'Diana Evans', contactNo: '5678901234', email: 'diana@example.com', address: '987 Birch St' },
      { id: 7, name: 'Eve Foster', contactNo: '6789012345', email: 'eve@example.com', address: '159 Maple St' },
      { id: 8, name: 'Frank Green', contactNo: '7890123456', email: 'frank@example.com', address: '753 Walnut St' },
      { id: 9, name: 'Grace Harris', contactNo: '8901234567', email: 'grace@example.com', address: '258 Spruce St' },
      { id: 10, name: 'Henry Lee', contactNo: '9012345678', email: 'henry@example.com', address: '951 Redwood St' },
      { id: 11, name: 'Ivy Martin', contactNo: '0123456789', email: 'ivy@example.com', address: '357 Fir St' },
      { id: 12, name: 'Jack Nelson', contactNo: '1234509876', email: 'jack@example.com', address: '654 Willow St' },
      { id: 13, name: 'Karen Owens', contactNo: '2345610987', email: 'karen@example.com', address: '852 Poplar St' },
      { id: 14, name: 'Leo Parker', contactNo: '3456721098', email: 'leo@example.com', address: '159 Dogwood St' },
      { id: 15, name: 'Mona Quinn', contactNo: '4567832109', email: 'mona@example.com', address: '753 Ash St' },
      { id: 16, name: 'Nina Reed', contactNo: '5678943210', email: 'nina@example.com', address: '258 Alder St' },
      { id: 17, name: 'Oscar Smith', contactNo: '6789054321', email: 'oscar@example.com', address: '951 Beech St' },
      { id: 18, name: 'Paul Thomas', contactNo: '7890165432', email: 'paul@example.com', address: '357 Pine St' },
      { id: 19, name: 'Quincy White', contactNo: '8901276543', email: 'quincy@example.com', address: '654 Maple St' },
      { id: 20, name: 'Rita Young', contactNo: '9012387654', email: 'rita@example.com', address: '852 Elm St' }
    ];
    this.employeeSubject.next(initialEmployees);
  }

  getEmployees() {
    return this.employeeSubject.value;
  }

  addEmployee(employee: Employee) {
    employee.id = this.nextId++;
    const employees = this.employeeSubject.value;
    this.employeeSubject.next([...employees, employee]);
  }


  deleteEmployee(id: number) {
    const employees = this.employeeSubject.value;
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    this.employeeSubject.next([...updatedEmployees]);
  }
}
