import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
title = "Regitro de usuarios";
mensaje="";
registrado = false;
nombre :string = "";
apellido :string ="";
entradas :object[];
cargo:string="";


constructor(){
  this.entradas=[
    {title:"fhsdhfdnds"},
    {title:"juan"},
    {title:"python"},
    {title:"js"},
    {title:"php"},
    {title:"bootstrap"},
    {title:"pascal"}
  ];
}
registrarUsuario(){
  this.registrado =true
  this.mensaje = "Usuario registrado correctamente: ";
}
}
