import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeeModel} from '../models/employee.model';
import {ApiResponse} from "./api.response";
import {map} from "rxjs/operators";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    //return this._httpClient.get<Pick<EmployeeModel[],'status' &'data'>>('https://dummy.restapiexample.com/api/v1/employees');
    return this._httpClient.get<ApiResponse<EmployeeModel[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(map(
      (response: ApiResponse<EmployeeModel[]>) => {
        return response.data
      }));
  }
}

