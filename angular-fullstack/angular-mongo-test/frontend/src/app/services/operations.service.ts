import { Injectable } from '@angular/core';
import axios from 'axios';
import { OperationModel } from 'src/models/operations.model';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  getOperationsByAccount(accountNum: number):Promise<OperationModel[]> {
    return fetch("http://localhost:3001/api/operations/" + accountNum)
      .then(res => res.json())
  }

  addAction(action: OperationModel):Promise<OperationModel> {
    return axios.post("http://localhost:3001/api/operations", action)

  }
}
