import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interface/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe = null;
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verHeroe(): void{
    //this.heroeSeleccionado.emit(this.index);
    this._router.navigate(['/heroe', this.index]);
  }

}
