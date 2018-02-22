import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { ServiceService } from '../service.service';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  template: `
  <h1>Class Bindings</h1><hr/>
    <h2>Noramal Class Binding</h2>
    <h2 class="text-success">Codevolution</h2><hr/>
    <h2>Property Class Binding</h2>
    <h2 [class]="successClass">Codevolution</h2><hr/>
    <h2>Noramal & Property Class Binding (only property binding will work)</h2>
    <h2 [class]="successClass" class="text-special">Codevolution</h2><hr/>
    <h2>Boolean class</h2>
    <h2 [class.text-danger]="hasError">Codevolution</h2><hr/>
    <h2>ngClass </h2>
    <h2 [ngClass]="messageClass">Codevolution</h2><hr/>
    <h1>Style Bindings</h1>
    <hr/>
    <h2 [style.color]="styleColor">HAI</h2>
    <h2 [style.color]="hasError?'orange':'red'">HAI</h2>
    <h2 [ngStyle]="styleObj">HAI</h2>
    <h2>Click Event</h2>
  <button (click)="clickEvnt($event)" >Click Me</button>
  <h2 [style.color]="styleColor">{{clickMe}}</h2>{{eventMsg}}<hr/>
  <h2>Forms Module</h2>
  <input type="text" [(ngModel)]="value"/>{{value}}
  <h2>*ngIf</h2>
  <div *ngIf="show; then first; else second"></div>
  <ng-template #first>
  first block
  </ng-template>
  <ng-template #second>
  second block
  </ng-template>
  <h2>[ngSwitch] & *ngSwichCase</h2>
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You selected red</div> 
  <div *ngSwitchCase="'orange'">You selected orange</div> 
  <div *ngSwitchCase="'black'">You selected black</div> 
  <div *ngSwitchCase="'orange'">No color selected</div>
  </div>
  <div *ngFor="let color of colors; even as e">
 <h2>{{color}} {{e}}</h2>
  </div>
  <div>This msg is coming from parent i.e {{techName}}</div>
  <hr/>
  <h2>child to app com passing data</h2>
  <button (click)="clickEvent1()">Submit</button>
  <h2>Service</h2>
  <ul *ngFor="let userObj of listUsers">
  <li>{{userObj.name}}</li></ul>
  `,
  styles: [
    `
    .text-success
    {
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic
    }
    `
  ]
})
export class HomeComponent implements OnInit {
 @Input('technologyName') public techName; 
 @Output() public childMsg=new EventEmitter();
  successClass = "text-success";
  hasError = true;
  show=false;
  color='black';
  colors=['red','blue','black','orange'];
  messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': true
  };
  styleColor = 'orange';
  styleObj = {
    color: 'orange',
    fontStyle: 'italic'
  };
  listUsers:IEmployee[]=[];
  clickMe = "";
  eventMsg = "";
  errorMsg="";
  constructor(private _service:ServiceService) { }

  ngOnInit() {
   this._service.getEmployees()
                    .subscribe(data=>this.listUsers=data,
                      error=>error.errorMsg=error);
  }
  clickEvnt(event) {
    this.clickMe = "Hai";
    this.eventMsg = event.type;
  }
  clickEvent1(){
    this.childMsg.emit('Angular 5');
  }
  


}
