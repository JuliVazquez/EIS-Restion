import { Component, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/plato';
import { PlatoService } from '../../services/plato.service';
import { Router } from '@angular/router';

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

  constructor(
    private platoService : PlatoService,
    private router : Router
     ) { }

  ngOnInit(): void {
  }

  submitPlato() {
    this.platoService.createPlato(this.plato).subscribe(
      res=>{
        console.log(res);
        this.router.navigate([`/`]);
      },
      err=> console.log(err)
    );
  }
}
