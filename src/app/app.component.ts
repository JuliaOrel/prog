import { Component } from '@angular/core';
import { CurrencyapidataServiceService } from './currencyapidata-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prog';
  currjson: any=[];
  left='USD'; //default value of left select
  right='USD'; //default value of right select
  result: string='1'; //convert's result 
  inp1='1'; //value input actual
  inpId='1'; //reactive variable for input1
  inpId2='1'; //reactive variable for input2
  ident="left"; //shows what select was changed

  mainFunc(valueSelectLeft:string, valueInput: string, valueSelectRight: string, id: string){
    this.left = valueSelectLeft;
    this.inp1=valueInput;
    this.right=valueSelectRight;
    this.ident=id;
    
   this.balance2(valueInput);
   this.convert();
  }

  tocountry(b:string, id: string){ //function for change currency base
    if(this.ident===id){
      this.left=b;   
    }
    else{
      this.right=b;      
    }
    
    this.convert();
  }

  constructor(private currency: CurrencyapidataServiceService){}

  balance()
  {
    if(this.ident==='left'){
      this.inpId2=this.result;  
    }
    else if(this.ident==='right'){
      this.inpId=this.result;
    }   
  }
  balance2(q: string)
  {
    if(this.ident==='left'){
      this.inpId=q;  
    }
    else if(this.ident==='right'){
      this.inpId2=q;
    }   
  }
  convert(){
    this.currency.getCurrencyData(this.left).subscribe(data =>{
      this.currjson=JSON.stringify(data);
      this.currjson=JSON.parse(this.currjson);
      switch (this.right) {
        case "USD":
          this.result=(this.currjson.rates.USD*(+this.inp1)).toString();
          this.balance();        
          break; 
          case "UAH":
          this.result=(this.currjson.rates.UAH*(+this.inp1)).toString();
          this.balance();
          break;
          case "EUR":
          this.result=(this.currjson.rates.EUR*(+this.inp1)).toString();
          this.balance();
          break;
          default:
          break;
      }
    })
  }
}
