import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

  nuevoElemento: any = {};
  elementoAEditar: any = {};

  constructor(private http: HttpClient) {}

  guardarElemento() {
    this.http.post<any>('http://127.0.0.1:3306/api/items', this.nuevoElemento)
      .subscribe(
        data => { console.log('Elemento guardado:', data); },
        error => console.error('Error al guardar elemento:', error)
      );
  }

  editarElemento() {
    const itemId = this.elementoAEditar.id;
    this.http.put<any>(`http://127.0.0.1:3306/api/items/${itemId}`, this.elementoAEditar)
      .subscribe(
        data => {
          console.log('Elemento editado:', data);
        },
        error => console.error('Error al editar elemento:', error)
      );
  }

  eliminarElemento(itemId: number) {
    this.http.delete<any>(`http://127.0.0.1:3306/api/items/${itemId}`)
      .subscribe(
        data => {
          console.log('Elemento eliminado:', data);
        },
        error => console.error('Error al eliminar elemento:', error)
      );
  }

}



