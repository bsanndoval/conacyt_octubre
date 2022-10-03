import { Component, OnInit } from '@angular/core';
import { PredioService } from 'src/app/services/predio.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { FormGroup, FormBuilder } from '@angular/forms';

defineLocale('es', esLocale);

@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.component.html',
  styleUrls: ['./editar-registro.component.css']
})
export class EditarRegistroComponent implements OnInit {

  registros: any = {};
  disableSelect = new FormControl(true);
  elID: any;
  formRegistros: FormGroup;

  datepickerConfig!: Partial<BsDatepickerConfig>;


  

  constructor(public formulario: FormBuilder, public predioService : PredioService, public router: Router, public bsLocaleService: BsLocaleService, private activeRoute:ActivatedRoute) { 

    
    
    
    this.datepickerConfig=Object.assign({}, {containerClass:'theme-dark-blue', showWeekNumbers:false},
                                            {dateInputFormat: 'YYYY-MM-DD HH:MM:SS'}
                                            );
    this.bsLocaleService.use('es');

    this.elID= this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.predioService.get_registro(this.elID).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formRegistros.setValue ({
          id_parcela: respuesta[0]['id_parcela'],
          tipo: respuesta[0]['tipo']

        });
      }
    );

    this.formRegistros= this.formulario.group( {

      id_parcela:[''],
      tipo:['']

      
    }

    )
    
  }

  ngOnInit(): void {
  }

}









