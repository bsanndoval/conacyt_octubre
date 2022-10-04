import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { PredioService } from '../services/predio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

user: string | null = '';



  constructor(public predioService: PredioService, public router: Router ) { 

    

  }


  ngOnInit(): void {
    this.user = localStorage.getItem('usuario');
    console.log('Ejemplo:', this.user);

  }

  logout() {
    this.predioService.logout();
    this.router.navigateByUrl('/login');
  }

}
