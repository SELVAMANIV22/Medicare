import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  { path:'signin' , 
    component: LoginComponent},
    {path:'home' , component:HomeComponent},
  { path:'newuser' , 
    component: RegistrationComponent},
  {path:'reset' , component: ResetpasswordComponent},
  {path:'orders', component:OrdersComponent},
  {path:'cart' , component: CartComponent},
  {path:'**' , component:PagenotfoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
