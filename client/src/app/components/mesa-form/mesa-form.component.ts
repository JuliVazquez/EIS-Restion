import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa'
import { MesaService } from '../../services/mesa.service';
import { Router } from '@angular/router';
import { Plato } from '../../interfaces/plato'

@Component({
  selector: 'app-mesa-form',
  templateUrl: './mesa-form.component.html',
  styleUrls: ['./mesa-form.component.css']
})
export class MesaFormComponent implements OnInit {

  mesa: Mesa = {
    ubicacion:'',
    numeroDeMesa:0,
    total: 0,
    platos: []
  }
  constructor(private mesaService: MesaService, private router: Router) { }

  ngOnInit(): void {
  }

  submitMesa(){
    this.mesaService.createMesa(this.mesa).
    subscribe(res=>{
      console.log(res);
      this.router.navigate([`/mesa`]);
    },
    err=> console.log(err)
  );
}
}
