import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/Models/address-models';
import { AddressService } from 'src/app/Services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addresses?:Address[];
  constructor(private addressService: AddressService,private router:Router) { }

  ngOnInit(): void {
    this.addressService.getAll().subscribe(result => {
      this.addresses = result.data;
    });
  }
  delete(id:number){
    this.addressService.delete(id).subscribe(result=>{
    console.log(result);
    });
    }
    edit(id:number){
    this.router.navigateByUrl(`addressManagment/${id}`);
    
    }
    create(){
      this.router.navigateByUrl(`addressManagment/0`);
      }
    
}
