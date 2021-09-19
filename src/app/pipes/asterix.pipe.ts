import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string): any {
//     let res='';
//   for (let i = 0; i < ch.length; i++) {
//     if (ch[i]=='a' || ch[i]=='e' ) {
//       res=res+'*';
//     }else{
// res =res+ch[i];
//     }
   
//   }
//   return res;
let voyels=['a','e','y'];
let res='';
for (let i = 0; i < ch.length; i++) {
  let inter=ch[i];
  for (let j = 0; j < voyels.length; j++) {
   if (ch[i]==voyels[j]) {
    inter='*';
   }
   
    
  }
  res=res+inter;
  
}
return res;

   }

}
