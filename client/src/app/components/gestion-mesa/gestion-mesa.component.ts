import { Component, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/plato';
import { PlatoService } from '../../services/plato.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Mesa } from '../../interfaces/mesa';
import { MesaService } from '../../services/mesa.service';

@Component({
  templateUrl: './gestion-mesa.component.html',
  styleUrls: ['./gestion-mesa.component.css']
})
export class GestionMesaComponent implements OnInit {

  mesa: Mesa = {
    ubicacion: '',
    numeroDeMesa: 0,
    total: 0,
    platos: [],
  };

  platos : Plato[] = [];

  constructor(private platoService: PlatoService, private mesaService: MesaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,) { }

  ngOnInit(): void {
    this.getPlatos();
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.mesaService.getMesa(params['id']).subscribe((res) => {
        console.log(res);
        this.mesa = res;
      });
    }
  }

  getPlatos(){
    this.platoService.getPlatos().subscribe(
      res=> {
        this.platos = res;
      },
      err=> console.log(err)
    )
  }

  updateMesa() {
    delete this.mesa.createdAt;
    this.mesaService.updateMesa(this.mesa._id!, this.mesa).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate([`/gestionMesas`]);
      },
      (err) => console.log(err),
    );
  }

  selectPlato(plato: Plato){
    this.mesa.platos.push(plato)
    this.mesa.total = this.mesa.total + plato.precio;
    this.updateMesa()
  }

  deletePlato(plato: Plato){
    this.mesa.platos.forEach( (item, index) => {
      if(item.nombre === plato.nombre) this.mesa.platos.splice(index,1);
    });
    this.mesa.total = this.mesa.total-plato.precio;
    this.updateMesa()
  }

   goBack(): void {
    this.location.back();
  }

}
