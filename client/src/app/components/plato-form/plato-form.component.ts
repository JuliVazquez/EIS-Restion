import { Component, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/plato';

@Component({
  selector: 'app-plato-form',
  templateUrl: './plato-form.component.html',
  styleUrls: ['./plato-form.component.css']
})
export class PlatoFormComponent implements OnInit {

  plato : Plato = {
    nombre :"",
    precio : 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
