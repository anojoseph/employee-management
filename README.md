# Employee Management System

This project is an Employee Management System built with Angular. It includes functionalities to list, add, and delete employees with pagination and search capabilities.

## Features

- List employees with pagination.
- Add new employees.
- Delete employees with a confirmation dialog.
- Search employees by name, email, contact number, or address.
- Validations for employee data inputs.

## Technologies Used

- Angular 16.2.14
- Angular Material 16.2.14
- Bootstrap 5
- Ngx-Toastr 5
- Node 18.17.1
- npm 10.5.1.0

## Setup and Installation

1. **Clone the repository:**

    ```sh
    git clone <https://github.com/anojoseph/employee-management.git>
    ```

2. **Navigate to the project directory:**

    ```sh
    cd employee-management-system
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

4. **Run the application:**

    ```sh
    ng serve
    ```

    The application will be available at `http://localhost:4200/`.

## Usage

### Adding Employees

1. Click the "Add Employee" button.
2. Fill in the employee details in the form.
   - Name (required)
   - Contact No (required, 10 digits)
   - Email (required)
   - Address (required)
3. Click "Save" to add the employee. If the form is valid, the employee will be added and displayed in the list.

### Deleting Employees

1. Click the "Delete" button next to the employee you want to remove.
2. Confirm the deletion in the confirmation dialog. If confirmed, the employee will be removed from the list.

### Searching Employees

1. Use the search input field to filter employees by name, email, contact number, or address.
2. The search is case-insensitive and updates in real-time as you type.
