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
  base='USD';
  cont2='USD';
  result: string='1';
  changebase(a:string){
    this.base = a;
    console.log(this.base);
  }

  tocountry(b:string){
    this.cont2=b;
    console.log(this.cont2);
  }

  constructor(private currency: CurrencyapidataServiceService){}

  convert(){
    this.currency.getCurrencyData(this.base).subscribe(data =>{
      this.currjson=JSON.stringify(data);
      this.currjson=JSON.parse(this.currjson);
      switch (this.cont2) {
        case "USD":
          this.result=this.currjson.rates.USD;
          break; 
          case "UAH":
          this.result=this.currjson.rates.UAH;
          break;
          case "EUR":
          this.result=this.currjson.rates.EUR;
          break;
          default:
            break;
      }
    })
  }
}
