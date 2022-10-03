import { Component, OnInit } from '@angular/core';
import { PredioService } from 'src/app/services/predio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})

export class CrearRegistroComponent implements OnInit {

  registros: any = {};
  disableSelect = new FormControl(true);

  datepickerConfig!: Partial<BsDatepickerConfig>;
  
  
  constructor(public predioService : PredioService, public router: Router, public bsLocaleService: BsLocaleService) {

    this.datepickerConfig=Object.assign({}, {containerClass:'theme-dark-blue', showWeekNumbers:false},
                                            {dateInputFormat: 'YYYY-MM-DD HH:MM:SS'}
                                            );
    this.bsLocaleService.use('es');

   }

  ngOnInit(): void {
  }

  crear_registro() {

    Swal.fire({
      title: 'Desea registrar el predio?',
      showDenyButton: true,
     // showCancelButton: true,
      confirmButtonText: 'Registrar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.predioService.crear_registro(this.registros).subscribe(
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







