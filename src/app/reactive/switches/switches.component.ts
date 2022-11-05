import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  
  
  miFormulario : FormGroup = this.fb.group({
    genero: [ 'M' , Validators.required],
    notificaciones: [ true ],
    condiciones: [false, Validators.requiredTrue]
  })
  
  persona = {
    genero: 'F',
    notificaciones: true,
  }
  
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset( {...this.persona, condiciones: false} )

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...resto}) => {

      this.persona = resto;

      //Otra opcion
      // delete formulario.condiciones; 
      // this.persona = formulario;
    })
  }

  guardar(){

    //Esto es si queremos que los datos sean guardados al presionar el boton
    // const formValue = {...this.miFormulario.value}
    // delete formValue.condiciones
    // this.persona = formValue;

  }



}
