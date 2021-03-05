import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "shop",
    component: ShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
