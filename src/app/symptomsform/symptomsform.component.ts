import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptomsform',
  templateUrl: './symptomsform.component.html',
  styleUrls: ['./symptomsform.component.css']
})
export class SymptomsformComponent implements OnInit {

  constructor(private router:Router) { }

  userObj;

  ngOnInit(): void 
  {
    this.userObj=JSON.parse(localStorage.getItem("userObj"))
  } 

  symptoms:any[]=
  [
    {
      symptomName:'Fever'
    },
    {
      symptomName:'Dry Cough'
    },
    {
      symptomName:'Tiredness'
    },
    {
      symptomName:'Sore throat'
    },
    {
      symptomName:'Diarrhoea'
    },
    {
      symptomName:'Headche'
    },
    {
      symptomName:'Loss of taste and smell'
    },
    {
      symptomName:'Rash on skin or discoularization of fingers or toes'
    },
    {
      symptomName:'Difficulty in breathing'
    },
    {
      symptomName:'Chest pain or pressure'
    },
  ]

  symptomsSentByChild=[];
  symptomCount:number=0;

  symptomDetails(symptomName)
  {
    this.symptomsSentByChild.push(symptomName)
    this.symptomCount++;
  }

  hospitals(username)
  {
    this.router.navigateByUrl("/hospitalsData/"+username)
  }
}
