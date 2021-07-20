import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-symptomsformchildren',
  templateUrl: './symptomsformchildren.component.html',
  styleUrls: ['./symptomsformchildren.component.css']
})
export class SymptomsformchildrenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() symptomObj:any;

  @Output() myEvent=new EventEmitter()

  
  sendSymptomToParent(symptomName)
  {
    this.myEvent.emit(symptomName)
  }


}
