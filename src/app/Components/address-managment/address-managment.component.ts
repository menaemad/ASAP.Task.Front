import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/Models/person-models';
import { AddressService } from 'src/app/Services/address.service';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-address-managment',
  templateUrl: './address-managment.component.html',
  styleUrls: ['./address-managment.component.css']
})
export class AddressManagmentComponent implements OnInit {
  manageForm: UntypedFormGroup;
  id?: string;
  personId?: string;
  persons?: Person[];
  constructor(private formBuilder: UntypedFormBuilder, private addressService: AddressService
    , private personService: PersonService
    ,private router:Router
    , private activtedRoute: ActivatedRoute) {
    this.manageForm = this.formBuilder.group({
      name: [null, Validators.required],
      city: [null, [Validators.required]],
      country: [null, [Validators.required]],
      description: [null, null],
      personId: [null, Validators.required],

    });
    this.id = this.activtedRoute.snapshot.paramMap.get("id") ?? undefined;
  }

  ngOnInit(): void {
    this.personService.getAll().subscribe(result => {
      this.persons = result.data;
    });
    this.getAddressById();
  }
  save() {
    if (this.manageForm.valid) {
      if (this.id && +this.id > 0) {
        this.addressService.update({ ...this.manageForm.value, id: this.id }).subscribe(data => {
         this.router.navigate(['/addressList']);

        });
      }
      else {
        this.addressService.create(this.manageForm.value).subscribe(data => {
          this.router.navigate(['/addressList']);

        });
      }

    }
  }
  getAddressById() {
    if (this.id && +this.id > 0) {
      this.addressService.get(this.id).subscribe(result => {
        this.manageForm.patchValue({
          name: result.data.name,
          city: result.data.city,
          country: result.data.country,
          description: result.data.description,
          personId: result.data.parentId
        });
      });
    }
  }

}
