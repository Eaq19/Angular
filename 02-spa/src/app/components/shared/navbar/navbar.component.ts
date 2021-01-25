import { HeroesService } from './../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string) {
    if (termino.length > 0)
      this._router.navigate(['/search', termino]);
  }

}
