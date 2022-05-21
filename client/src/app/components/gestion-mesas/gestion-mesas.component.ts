import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';
import { MesaService } from '../../services/mesa.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: './gestion-mesas.component.html',
  styleUrls: ['./gestion-mesas.component.css']
})
export class GestionMesasComponent implements OnInit {
  mesas: Mesa[] = [];

  constructor(private mesaService: MesaService, private location: Location) {}

  ngOnInit(): void {
    this.getMesas();
  }

  getMesas() {
    this.mesaService.getMesas().subscribe(
      (res) => {
        this.mesas = res;
      },
      (err) => console.log(err),
    );
  }
}
