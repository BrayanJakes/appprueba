import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBinanceService } from 'src/app/services/api-binance.service';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  btcPrice = '0';
  ethPrice = '0';
  bnbPrice = '0';
  usdtPrice = '0';
  bsPrice = '36.12';
  ptrPrice = '60';

  logeado = false;

  constructor( private apiServices: ApiBinanceService,
               public layoutServices: LayoutService,
               private router: Router ){

                setInterval(() => {
                  if(localStorage.getItem('init')){
                    this.logeado = true;
                  }else{
                    this.logeado = false;
                  }
                }, 1000);

  }


  ngOnInit(): void {
    this.getData()
    setInterval(() => this.getData(), 30000)
  }

  getData(){
    this.apiServices.getData().subscribe({
      next: (resp: any) => {

        if(resp){
          this.apiServices.dataState.next(resp)
        }

        resp.forEach((element: any) => {
          if(['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'FDUSDUSDT'].includes(element.symbol)){
            switch(element.symbol){
              case 'BTCUSDT': 
                this.btcPrice = Number(element.lastPrice).toFixed(2);
              break;
              case 'ETHUSDT':
                this.ethPrice = Number(element.lastPrice).toFixed(2);
              break;
              case 'BNBUSDT':
                this.bnbPrice = Number(element.lastPrice).toFixed(2);
              break;
              case 'FDUSDUSDT':
                this.usdtPrice = Number(element.lastPrice).toFixed(2);
              break;
            }
          }
        });
      }
    })
  }


  salir(){
    if(localStorage.getItem('init')){
      this.router.navigate(['login']);
      return localStorage.removeItem('init')
    }
    
  }
  
}
