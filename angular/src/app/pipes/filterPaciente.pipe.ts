import { Pipe, PipeTransform } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args === '' || args.length < 3) return value;
    const resultPost=[];
    for(const post of value){
      if(post.firstName.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}
