

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSubmitted: boolean = false;

  public loginForm: any = this.fb.group({
    usuario: ['', [Validators.required]],
    passw: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private router: Router, private servicioLogin: LoginService) { }

  ngOnInit(): void {
  }

  iniciar_sesion() {

    this.formSubmitted = true;

    if( this.loginForm.invalid ) {
      return;
    }

    this.servicioLogin.usuarioLogin(this.loginForm.value)
      .subscribe( data => {
        if( this.loginForm.value ) {
          localStorage.setItem('usuario', this.loginForm.get('usuario').value);
          this.router.navigateByUrl('dashboard/listar-predio');
        } else {
          localStorage.removeItem('usuario');
        }

      })

  }

  invalido(campo: string) {
    if (this.loginForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
