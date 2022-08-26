import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  admissionForm=
  {
    name:"",
    parentsName:"",
    age:0,
    Dob:"",
    qualification:"",
    email:"",



  }

  save()
  {
    console.log(this.admissionForm.name+" "+
    this.admissionForm.pare+" "+
    this.admissionForm.age+" "+
    this.admissionForm.Dob+" "+
    this.admissionForm.qualification+" "+
    this.admissionForm.name+" "+
    )
  }


  constructor() { }

  ngOnInit(): void {
  }

}
