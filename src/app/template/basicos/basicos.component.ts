import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') myForm!: NgForm;

  initForm = {
    producto: 'HotWheels',
    precio: 10,
    existencias: 5,
  }

  constructor() { }

  ngOnInit(): void {

  }

  comprobarNombre() :boolean{
    return (this.myForm?.form.controls['producto']?.invalid &&
            this.myForm?.form.controls['producto']?.touched)
  }

  comprobarPrecio() :boolean{
    return (this.myForm?.form.controls['precio']?.value < 0)
  }

  // guardar( value: NgForm ){
  guardar() {
    console.log("Posteo Exitoso");
    console.log(this.myForm);

    this.myForm.resetForm({
      producto: 'Producto',
      precio: 1,
      existencias: 1,
    });

  }

}
