import { Component } from '@angular/core';
import { ApiBinanceService } from 'src/app/services/api-binance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  datas: any = [];
  filter = '';

  constructor(private apiServices: ApiBinanceService){
    this.apiServices.dataState.subscribe({
      next: (resp: any) => {
        this.datas = [];
        if(resp && resp.length > 0){
          resp.forEach((element: any) => {
            if(element.symbol.includes('USDT')){
              this.datas.push(element);
            }
          });
          
          this.datas.sort( (a: any, b: any) => {
            if (Number(a.lastPrice).toFixed(2) < Number(b.lastPrice).toFixed(2)) {
              return 1;
            }
            if (Number(a.lastPrice).toFixed(2) > Number(b.lastPrice).toFixed(2)) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          this.datas.map((item: any) => {
            item.lastPrice = Number(item.lastPrice).toFixed(2);
            item.lowPrice = Number(item.lowPrice).toFixed(2);
          })
        }
      }
    })
  }

}
