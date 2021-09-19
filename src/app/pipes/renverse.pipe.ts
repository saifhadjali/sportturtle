import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'renverse'
})
export class RenversePipe implements PipeTransform {

  transform(ch:string): any {
    let res='';
    for (let i = 0; i < ch.length; i++) {
     res=ch[i]+res;
      
    }
    return res;
  }

}
