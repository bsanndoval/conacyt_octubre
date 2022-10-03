import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { Registros } from 'src/app/interfaces/registros.interface';
import { PredioService } from 'src/app/services/predio.service';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-bitacora',
  templateUrl: './listar-bitacora.component.html',
  styleUrls: ['./listar-bitacora.component.css']
})
export class ListarBitacoraComponent implements OnInit {

  public registros: Registros[] = [];
  

  public registro: any = {};

  
  disableSelect = new FormControl(true);

  datepickerConfig!: Partial<BsDatepickerConfig>;

 
  constructor(public registroService : PredioService, public bsLocaleService: BsLocaleService) { 

    this.datepickerConfig=Object.assign({}, {containerClass:'theme-dark-blue', showWeekNumbers:false},
                                            {dateInputFormat: 'YYYY-MM-DD'}
                                            );
    this.bsLocaleService.use('es');
  }

  ngOnInit(): void {

    let token = this.getToken();
    
  }

  //displayedColumns: string[] = ['Id', 'Id_parcela', 'Tipo', 'Etapa'];


  get_registros(token: number) {

    this.registroService.get_registros(token).subscribe((resp: any) => {
      this.registros = resp;

    })

  }  

  get_registro(id: number) {
    this.registroService.get_registro(id).subscribe((resp: any) => {
      this.registro = resp[0];
      console.log(this.registro);
    } )
    
  }




  edit_registro() {

    this.registroService.edit_registro(this.registro).subscribe(( resp: any) => {

      if (resp ['resultado'] == 'OK') {

        Swal.fire({
          icon: 'success',
          title: 'Registro actualizado correctamente',
          showConfirmButton: false,
          timer: 2000
        })

       // this.get_registros(num_token);

      }

    } )


  }


  del_registro(id: number) {
    Swal.fire({
      title: 'Desea ELIMINAR el registro?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */      
      if (result.isConfirmed) {
        Swal.fire('Eliminado', '', 'success')
        this.registroService.del_registro(id)
          .subscribe( (resp: any) => {
            if ( resp['resultado'] == 'OK' ) {
              console.log('Registro eliminado correctamente');
             // this.get_registros(token);
            }
        })        
      } else if (result.isDenied) {
        Swal.fire('Ups!', '', 'info')
      }
    })

  }

  getToken() {
  let token = localStorage.getItem('token');
      //return localStorage.getItem('token');
      return token;
    }

}



    