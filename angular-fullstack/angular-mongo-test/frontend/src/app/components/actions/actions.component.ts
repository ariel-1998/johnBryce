import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
import { OperationModel } from 'src/models/operations.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  operation: OperationModel = {};
  error = ''
  constructor(
    private operationService: OperationsService
  ){}

  async onSubmit() {
   try {
    this.operation.date = new Date()
    await this.operationService.addAction(this.operation)
    alert("sucessfull")
   } catch (error: any) {
    alert(error.message)
   }
  }
}
