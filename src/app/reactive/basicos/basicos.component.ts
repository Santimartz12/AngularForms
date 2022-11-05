import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario : FormGroup = new FormGroup({
  //   nombre     : new FormControl('Hot Wheels'),
  //   precio     : new FormControl(0),
  //   existencias: new FormControl(5),
  // });

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
  })

  campoValido( campo : string) {
    return (this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched) ? true : false;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
