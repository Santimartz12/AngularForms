import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number,
  nombre: string,
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  nuevoJuego: string = '';

  persona: Persona ={
    nombre: 'Santiago',
    favoritos: [
      {id: 1, nombre: 'God Of War'},
      {id: 2, nombre: 'Fortnite'},
    ]
  }

  agregar(){
    const newGame: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    }
    this.persona.favoritos.push({...newGame});
    console.log(this.nuevoJuego , "Agregado")
    this.nuevoJuego = '';
  }

  guardar(){
    console.log('Formulario Posteado')
  }

  eliminar(id : number){
    console.log('Se elimina ' + this.persona.favoritos[id].nombre);
    this.persona.favoritos.splice(id,1);
  }

}
