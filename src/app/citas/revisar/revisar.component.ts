import { Component, OnInit } from '@angular/core';
import { citasInterface } from '../local-citas.model';
import { LocalCitasService } from '../local-citas.service';

@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.component.html',
  styleUrls: ['./revisar.component.css']
})
export class RevisarComponent implements OnInit{
  arrayCitas:citasInterface[] | any;

  constructor(private citasService: LocalCitasService){

  }

  ngOnInit(){
    console.log(this.citasService.getArrayCitas())
    this.arrayCitas=this.citasService.getArrayCitas();
    console.log("revisar comp"+this.arrayCitas);
  }

}
