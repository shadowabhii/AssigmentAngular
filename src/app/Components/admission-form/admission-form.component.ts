import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  title="fill the details below";

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
    console.log("Candidate Name"+this.admissionForm.name+" "+
    "Parent Name"+ this.admissionForm.parentsName+" "
    +"Age"+ this.admissionForm.age+" "+
    "Date Of Birth"+this.admissionForm.Dob+" "+
    "Qualification"+this.admissionForm.qualification+" "+
    "Email"+this.admissionForm.email);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
