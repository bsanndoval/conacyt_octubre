import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Predios } from '../interfaces/predios.interface';
import { Registros } from '../interfaces/registros.interface';

@Injectable({
  providedIn: 'root'
})
export class PredioService { 

   url: any = 'http://localhost/api/';

  public menu = [ 
    {
       titulo: 'Predios',
       icono: 'mdi mdi-gauge',
       submenu: [
          { titulo: 'Listar Predio', url: '/dashboard/listar-predio'},
          { titulo: 'Listar Parcela', url: '/dashboard/listar-parcela'},
          { titulo: 'Crear Predio', url: '/dashboard/crear-predio'},
          { titulo: 'Crear Registro', url: '/dashboard/crear-registro'},
          { titulo: 'Listar Registros', url: '/dashboard/listar-bitacora'},
          { titulo: 'Editar Registros', url: '/dashboard/editar-registro/:id'}
       ] 
    }
    
  ]


 
  constructor( private http: HttpClient) { }

  crear_predio (predios : Predios) {
       return this.http.post(`${this.url}crear_predio.php`, JSON.stringify(predios));
    }

  get_predios (id_usuario: number) {
   return this.http.get(`${this.url}get_predios.php?id_usuario=${id_usuario}`);
  }

  get_predio (id: number) {
    return this.http.get(`${this.url}get_predio.php?id=${id}`);
   }

  get_parcelas (id_predio: number) {
    return this.http.get(`${this.url}get_parcelas.php?id_predio=${id_predio}`);
   }

  crear_registro (registros : Registros) {
   return this.http.post(`${this.url}crear_registro.php`, JSON.stringify(registros));
   }

  get_registros(id: any){
    return this.http.get(`${this.url}listar_registros.php?id_parcela=${id}`);
  }

  get_registro(id:number):Observable<any>{
    return this.http.get(`${this.url}get_registro.php?id=${id}`);
  }

  edit_registro(registro: Registros) {
    return this.http.post(`${this.url}edit_registro.php`, JSON.stringify(registro));
  }

  del_registro(id: number) {

    return this.http.get(`${this.url}del_registro.php?id=${id}`);
  }

  get_usuario() {
    let id_usuario = localStorage.getItem('token');
    return id_usuario;
  }

  logout() {
   localStorage.removeItem('token');
   localStorage.removeItem('usuario');
  }

}


