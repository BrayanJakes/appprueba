import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  responsiveStatus = 1;

  constructor(private breakpointObserver: BreakpointObserver) { 
    this.responsive()

  }

  responsive() {
    this.breakpointObserver
      .observe([
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.XLarge,
        Breakpoints.Small,
        Breakpoints.XSmall,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.responsiveStatus = 0;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.responsiveStatus = 1;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.responsiveStatus = 2;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.responsiveStatus = 3;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.responsiveStatus = 4;
        }
        
      });
  }
}
