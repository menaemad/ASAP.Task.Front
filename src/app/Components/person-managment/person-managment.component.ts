import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person-managment',
  templateUrl: './person-managment.component.html',
  styleUrls: ['./person-managment.component.css']
})
export class PersonManagmentComponent implements OnInit {
  manageForm: UntypedFormGroup;
  id?:string;
  constructor(private formBuilder: UntypedFormBuilder,private personService:PersonService
    ,private activtedRoute:ActivatedRoute
    ,private router:Router) {
    this.manageForm = this.formBuilder.group({
      fullName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

    });
    this.id=this.activtedRoute.snapshot.paramMap.get("id") ?? undefined;
  }

  ngOnInit(): void {
    this.getPersonById();
  }
  save(){
    if(this.manageForm.valid){
      if(this.id && +this.id>0){
        this.personService.update({...this.manageForm.value,id:this.id}).subscribe(data=>{
          this.router.navigate(['/personList']);
         });
      }
      else{
        this.personService.create(this.manageForm.value).subscribe(data=>{
          this.router.navigate(['/personList']);
        console.log(data);
       });}
     
    }
  }
getPersonById(){
  if(this.id && +this.id>0){
    this.personService.get(this.id).subscribe(result=>{
      this.manageForm.patchValue({fullName:result.data.fullName,email:result.data.email});
    });
  }
}


}
