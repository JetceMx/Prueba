import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  title = 'Proyecto';

  forma!: FormGroup;
  usuario:any={
    nombre:"xxx",
    telefono:"yyyy",
    correo:"zzz@www.com"
    }

  constructor(){
    this.forma = new FormGroup({
    'nombre': new FormControl('', [Validators.required, Validators.minLength(3)] ),
    'telefono': new FormControl('', [Validators.required] ),
    'correo': new FormControl('', [Validators.required,Validators.email] ),
    });
    this.forma.setValue(this.usuario);
  }

  guardarCambios():void{
    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
    this.forma.reset(this.usuario);
  }

}
