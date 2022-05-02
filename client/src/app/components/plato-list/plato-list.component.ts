import { Component, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/plato';
import { PlatoService } from '../../services/plato.service';



@Component({
  selector: 'app-plato-list',
  templateUrl: './plato-list.component.html',
  styleUrls: ['./plato-list.component.css']
})
export class PlatoListComponent implements OnInit {

  platos : Plato[] = [];

  constructor(private platoService: PlatoService) { }

  ngOnInit(): void {
    this.getPlatos();
  }

  getPlatos(){
    this.platoService.getPlatos().subscribe(
      res=> {
        console.log(res);
        //this.platos = res;
      },
      err=> console.log(err)
    )
  }


  //deleteProduct(id: string): void {
  //  this.platoService.deletePlato(id).subscribe(
  //      res => {
  //        console.log(res);
  //        this.getPlatos();
  //      },
  //      err => console.log(err)
  //    )
  // }
}
