import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any, filter: string): any {
    if(filter === ''){
      return data;;
    }else{
      return data = data.filter((x: any) => x.symbol.includes(filter.toUpperCase()));
    }
  }

}
