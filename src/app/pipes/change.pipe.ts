import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  transform(ch:string): any {
    let res='';
    
  for (let i = 0; i < ch.length; i++) {
     
   
    if (ch[i]=='a' || ch[i]=='A' && ch[i+1]=='i') {
     res=res+(ch.replace(ch[i+1],'y'));
     break;
    }
  }
  
  return res; 
 
  }

}
