import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

url: any = 'http://localhost/api/';


@Output() nombre: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {

   this.getToken();
   

   }
  
    usuarioLogin(formData: any) {
      return this.http.post(`${this.url}login.php`,formData)
      .pipe( map( (Usuarios: any) => {
        console.log(Usuarios);
          this.setToken(Usuarios[0].id);
          this.nombre.emit(true);
        return Usuarios;
      }));
    }

    //token
    setToken(token: string) {
      localStorage.setItem('token', token);
    }

    getToken() {
      
      let token = localStorage.getItem('token');
      //return localStorage.getItem('token');
      console.log(token);
      return token;
      
    }

  isLoggedIn() {
    const userToken = this.getToken();
    if( userToken != null ) {
      return true;      
    }
    return false;
  }


}
