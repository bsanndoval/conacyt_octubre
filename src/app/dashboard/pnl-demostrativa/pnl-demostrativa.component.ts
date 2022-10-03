import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PredioService } from 'src/app/services/predio.service';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Registros } from 'src/app/interfaces/registros.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pnl-demostrativa',
  templateUrl: './pnl-demostrativa.component.html',
  styleUrls: ['./pnl-demostrativa.component.css']
})
export class PnlDemostrativaComponent implements OnInit {

  public elID: any;

  registros: any = {};

  
  disableSelect = new FormControl(true);

  datepickerConfig!: Partial<BsDatepickerConfig>;
  


  constructor( public predioService : PredioService,  public router: Router, public route: ActivatedRoute, public bsLocaleService: BsLocaleService, private location:Location) { 


    this.datepickerConfig=Object.assign({}, {containerClass:'theme-dark-blue', showWeekNumbers:false},
                                            {dateInputFormat: 'YYYY-MM-DD'}
                                            );
    this.bsLocaleService.use('es');

   }

  ngOnInit(): void {
    this.elID= this.route.snapshot.paramMap.get('id');
    this.get_registros(this.elID);
    console.log('La parcela es:', this.elID);
    
  }


  get_registros(id_parcela: number) {
    this.predioService.get_registros(id_parcela).subscribe((resp: any) => {
      this.registros = resp;

    })

  }  

  go_back():void {
    this.location.back();
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
