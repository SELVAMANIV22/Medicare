import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [

  {path:'', redirectTo:'medicare',pathMatch: 'full'},
  {path:'signin' , component: LoginComponent},
  {path:'newuser' , component: RegistrationComponent},
  {path:'reset' , component: ResetpasswordComponent},
  {path:'orders', component:OrdersComponent},
  {path:'cart' , component: CartComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
