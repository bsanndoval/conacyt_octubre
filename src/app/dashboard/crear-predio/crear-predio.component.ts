import { Component, OnInit } from '@angular/core';
import { PredioService } from 'src/app/services/predio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-predio',
  templateUrl: './crear-predio.component.html',
  styleUrls: ['./crear-predio.component.css']
})
export class CrearPredioComponent implements OnInit {

  predios: any = {};

  constructor(public predioService : PredioService, public router: Router) { }

  ngOnInit(): void {
  }

  crear_predio() {
    Swal.fire({
      title: 'Desea registrar el predio?',
      showDenyButton: true,
     // showCancelButton: true,
      confirmButtonText: 'Registrar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.predioService.crear_predio(this.predios).subscribe(
          {
            next: result => {
              this.router.navigate(['/dashboard/listar-predio']);
            },
            error: err => {
              console.log(err.error);
            }
          });
        Swal.fire('Registrado', '', 'success')
      } else if (result.isDenied) {
       
      }
    })



    
  }
}
