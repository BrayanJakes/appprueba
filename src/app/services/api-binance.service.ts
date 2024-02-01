import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BINANCE } from '../config/api.config';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiBinanceService {

  dataState: BehaviorSubject<any> = new BehaviorSubject({})

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(API_BINANCE)
  }
}
