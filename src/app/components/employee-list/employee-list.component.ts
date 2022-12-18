import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  merge,
  Observable,
  of,
  Subject
} from 'rxjs';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  //readonly employees$: Observable<EmployeeModel[]> = this._employeeService.getAll();

  private _salarySubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public salary$: Observable<string> = this._salarySubject.asObservable();


  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.salary$
  ]).pipe(map(([employees, salary]: [EmployeeModel[], string]) => {
    return employees.sort((a, b) => {
      if (a.employee_salary > b.employee_salary) return salary === 'asc' ? 1 : -1;
      if (a.employee_salary < b.employee_salary) return salary === 'asc' ? -1 : 1;
      return 0;
    })
  }));

  public salaries: Observable<string[]> = of(['asc', 'desc']);

  constructor(private _employeeService: EmployeeService) {
  }

  sort(salary: string): void {
    this._salarySubject.next(salary);

// @ts-ignore
    if (salary == 'asc') {
      console.log('asc');
      // @ts-ignore
      //document.getElementById("asc").style.color = "red";
      document.getElementById("asc").disabled = true;
      // @ts-ignore
      //document.getElementById("desc").style.color = "green";
      document.getElementById("desc").disabled = false;
    }

    // @ts-ignore
    if (salary == 'desc') {
      console.log('desc');
      // @ts-ignore
      //document.getElementById("asc").style.color = "green";
      document.getElementById("asc").disabled = false;
      // @ts-ignore
      //document.getElementById("desc").style.color = "red";
      document.getElementById("desc").disabled = true;
    }

  }

  private _ageSubject: Subject<string> = new Subject<string>();
  public age$: Observable<string> = this._ageSubject.asObservable();

  public ageRanges$: Observable<string[]> = of(['0-20', '21-30', '31-40', '41-50', '51-100']);

  selectAge(age: string): void {
    this._ageSubject.next(age);
  }


  /*readonly employeesFilter$: Observable<EmployeeModel[]> = combineLatest(
    [this._employeeService.getAll(),
      this.age$]
  ).pipe(map(([employees, age]: [EmployeeModel[], string]) => {
    if(age == '0-20') {return employees.filter(employee => employee.employee_age <= '20');}
    if(age == '21-30') {return employees.filter(employee => employee.employee_age >= '21' && employee.employee_age <= '30');}
    if(age == '31-40') {return employees.filter(employee => employee.employee_age >= '31' && employee.employee_age <= '40');}
    if(age == '41-50') {return employees.filter(employee => employee.employee_age >= '41' && employee.employee_age <= '50');}
    if(age == '51-100') {return employees.filter(employee => employee.employee_age >= '51' && employee.employee_age <= '100');}
    else {return employees;}
  }));*/


  readonly employeesSF$: Observable<EmployeeModel[]> = combineLatest(
    [this.employees$,
      this.age$]
  ).pipe(map(([employees, age]: [EmployeeModel[], string]) => {
    if(age == '0-20') {return employees.filter(employee => employee.employee_age <= '20');}
    if(age == '21-30') {return employees.filter(employee => employee.employee_age >= '21' && employee.employee_age <= '30');}
    if(age == '31-40') {return employees.filter(employee => employee.employee_age >= '31' && employee.employee_age <= '40');}
    if(age == '41-50') {return employees.filter(employee => employee.employee_age >= '41' && employee.employee_age <= '50');}
    if(age == '51-100') {return employees.filter(employee => employee.employee_age >= '51' && employee.employee_age <= '100');}
    else {return employees;}
  }));

  readonly employeesAll$: Observable<EmployeeModel[]> = merge(this.employees$, this.employeesSF$);
}
