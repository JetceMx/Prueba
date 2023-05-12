import { DatePipe, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalCitasService } from '../local-citas.service';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  public fechaMinima!: Date;
  public horaMinima!: Time;
  public forma!: FormGroup;

  public fechaStrMinima!: string | null;
  public horaStrMinima!: string | null;

  usuario: any = {
    nombre: "Juan",
    apellidos: "Perez",
    edad: "60",
    telefono: "4491234567",
    correo: "example@gmail.com",
    fecha: "",
    hora: "",
  }


  constructor(private pd: DatePipe, private citasService: LocalCitasService, private alerta: AlertifyService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidos': new FormControl('', [Validators.required]),
      'edad': new FormControl('', [Validators.required]),
      'telefono': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'fecha': new FormControl('', [Validators.required]),
      'hora': new FormControl('', [Validators.required]),
    });
    this.forma.setValue(this.usuario);
  }

  ngOnInit() {
    this.fechaMinima = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    this.fechaStrMinima = this.pd.transform(this.fechaMinima, "YYYY-MM-dd");
    console.log(this.fechaStrMinima);
    //this.usuario = this.citasService.nuevaCita();
  }

  guardarCambios(): void {
    this.citasService.agregarCita(this.forma.value);
    this.usuario = this.citasService.nuevaCita();
    //console.log(this.forma.value);
    this.forma.reset(this.usuario);
    this.alerta.success("Tu cita quedo registrada exitosamente");
  }

}
