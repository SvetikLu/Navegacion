import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {tick} from "@angular/core/testing";

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string = "";
  edad: number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log(this.nombre, this.edad);

  }

  cerarSinParametros(){
    this.viewCtrl.dismiss();
  }

  cerarConParametros(){

    let data = {
      nombre: "Maria",
      edad: 21,
      coords:{
        lat: 10,
        lng: -10
      }
    };

    this.viewCtrl.dismiss( data );

  }

}
