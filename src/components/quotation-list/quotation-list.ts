import { Component } from '@angular/core';
import { Input } from '@angular/core';

/**
 * Generated class for the QuotationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quotation-list',
  templateUrl: 'quotation-list.html'
})
export class QuotationListComponent {
@Input('dateIssue') issueDate:any;
@Input('premium') premiumPrice:any;
@Input('quotationNew') quotationText:any;
@Input('datalist') data:any;

issue:any;
premiumValue:any;
quotationEntry:any;
newData:any;
  text: string;
  constructor() {
    console.log('Hello QuotationListComponent Component');
    this.text = 'Hello World';
  }
  ngAfterViewInit(){
    this.issue=this.issueDate;
    
    this.premiumValue=this.premiumPrice;
    this.quotationEntry=this.quotationText;
    this.newData=this.data[0];
    console.log(this.data[0]);
  
  }

  
}
