import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Fortnite', Validators.required], 
      ['Call Of Duty', Validators.required]
    ], Validators.required)
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  nuevoFavorito: FormControl = new FormControl('', Validators.required);

  validar(campo: string) {
    return (this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched) ?
      true : false;
  }

  agregarFav(){

    if(!this.nuevoFavorito.valid){
      return
    }

    //this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) )
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value , Validators.required) )

    this.nuevoFavorito.reset();
  }

  eliminar(index: number){

    this.favoritosArr.removeAt(index)

  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
  }

}
