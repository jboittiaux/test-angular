import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterOnlyLayoutComponent } from "./layout/footer-only-layout/footer-only-layout.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
