import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Parcelas } from 'src/app/interfaces/parcelas';
import { Predios } from 'src/app/interfaces/predios.interface';
import { PredioService } from 'src/app/services/predio.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-predio',
  templateUrl: './listar-predio.component.html',
  styleUrls: ['./listar-predio.component.css']
})
export class ListarPredioComponent implements OnInit {

  public predios: Predios[] = [];
  public parcelas: Parcelas[] = [];
  public predio: any = {};
  registros: any = {};
  
  disableSelect = new FormControl(true);

  datepickerConfig!: Partial<BsDatepickerConfig>;
  


  constructor( public predioService : PredioService,  public router: Router, private route: ActivatedRoute, public bsLocaleService: BsLocaleService) { 


    this.datepickerConfig=Object.assign({}, {containerClass:'theme-dark-blue', showWeekNumbers:false},
                                            {dateInputFormat: 'YYYY-MM-DD HH:MM:SS'}
                                            );
    this.bsLocaleService.use('es');

   }

  
  ngOnInit() {
    let token: any = this.getToken();
    this.get_predios(token);
   // let id = this.route.snapshot.paramMap.get("id");  
    }

  get_predios(id_usuario: number) {
    this.predioService.get_predios(id_usuario).subscribe((resp: any) => {
      this.predios = resp;
    })

  }  


  get_predio(id: number) {
    this.predioService.get_predio(id).subscribe((resp: any) => {
      this.predio = resp[0];
      console.log(this.predio);
    } )
    
  }

  

  getToken() {
    let token = localStorage.getItem('token');
        return token;
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

