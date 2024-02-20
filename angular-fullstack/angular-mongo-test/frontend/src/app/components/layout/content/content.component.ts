import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
import { OperationModel } from 'src/models/operations.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  account: number;
  operations: OperationModel[] = []

  constructor(
    private operationsService: OperationsService
  ){}
  async onclick() {
    this.operations = await this.operationsService.getOperationsByAccount(this.account)
  }

}
