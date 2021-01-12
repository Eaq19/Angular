import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    
    public frase: any = {
        mensaje: 'La política es para marionetas.',
        autor: 'Mr. Robot'
    };

    public view: boolean;

    public personajes: string[];

    constructor(){
        this.view = true;
        this.personajes = ['Elliot', 'Darlene', 'White Rose'];
    }

}