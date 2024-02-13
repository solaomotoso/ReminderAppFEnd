import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";

export const appRoutes: Routes = [
    { path: "", component: LoginComponent,title:"login" },
    { path: "login", component: LoginComponent, title:"login"}
  ];
  @NgModule({
    declarations: [LoginComponent],
    imports: [
         RouterModule.forChild(appRoutes),
         ReactiveFormsModule,
         MatCardModule,
         MatFormFieldModule
    ],
    exports: [RouterModule]
  })
  
  export class LoginModule { }