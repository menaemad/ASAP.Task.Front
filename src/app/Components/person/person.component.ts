import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Models/person-models';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  Persons?: Person[];

  constructor(private personService: PersonService,private router:Router) {    

  }

  ngOnInit(): void {
    this.personService.getAll().subscribe(result => {
      this.Persons = result.data;
    });
  }

delete(id:number){
this.personService.delete(id).subscribe(result=>{
console.log(result);
});
}
edit(id:number){
this.router.navigateByUrl(`personManagment/${id}`);

}
create(){
  this.router.navigateByUrl(`personManagment/0`);
  }

}
