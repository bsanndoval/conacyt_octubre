import { Component, OnInit } from '@angular/core';
import { PredioService } from 'src/app/services/predio.service';
import { Parcelas } from 'src/app/interfaces/parcelas';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listar-parcela',
  templateUrl: './listar-parcela.component.html',
  styleUrls: ['./listar-parcela.component.css']
})
export class ListarParcelaComponent implements OnInit {

  public parcelas: Parcelas[] = [];
  public elID: any;
  

  constructor(public parcelaService : PredioService, private activeRoute:ActivatedRoute, 
              public router: Router, private location:Location ) { }

  ngOnInit(): void {
    
    this.elID= this.activeRoute.snapshot.paramMap.get('id_predio');
    this.get_parcelas(this.elID);
    

    
  }

 // displayedColumns: string[] = ['Id', 'Productor', 'Predio'];


  get_parcelas(id_predio: number) {
    console.log('las parcelas');
    console.log(this.elID);
    this.parcelaService.get_parcelas(id_predio).subscribe((resp: any) => {
      this.parcelas = resp;
      console.log(this.parcelas);

    })

  }  


  go_back():void {
    this.location.back();
  }


  get_panel(tipo : string) {
    if (tipo === "Demostrativa"){
      console.log('Tipo=', tipo );
      this.router.navigate(['/dashboard/pnl-demostrativa', this.elID ]);
      
    } else {
      this.router.navigate(['/dashboard/pnl-testigo', this.elID ]);
      console.log('quien sabe si ono:', tipo );
    }

  }
  

}
