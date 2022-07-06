import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonManagmentComponent } from './Components/person-managment/person-managment.component';
import { PersonComponent } from './Components/person/person.component';
import { AddressComponent } from './Components/address/address.component';
import { AddressManagmentComponent } from './Components/address-managment/address-managment.component';



const routes: Routes = [
  {path:`personManagment/:id`,component:PersonManagmentComponent},
  {path:`personList`,component:PersonComponent},
  {path:`addressList`,component:AddressComponent},
  {path:`addressManagment/:id`,component:AddressManagmentComponent},

  {path:``,component:PersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
