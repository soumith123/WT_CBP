import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //search pipe
  transform(hospital: any, searchTerm:string): any
  {

    // if we not entered any product..it means search bar is empty, it returns the all producst
    if(!hospital || !searchTerm)
    {
      return hospital;
    }

    //if search bar is not empty, it gives the matched item for entered element
    else
    {
      return hospital.filter(hospital=>hospital.hospitalArea.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }
}
