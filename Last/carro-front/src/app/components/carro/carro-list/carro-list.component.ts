import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Carro } from "src/app/model/carro";
import { CarroService } from "src/app/services/carro.service";

@Component({
  selector: "app-carro",
  templateUrl: "./carro-list.component.html",
  styleUrls: ["./carro-list.component.css"],
})
export class CarroListComponent implements OnInit {

  ELEMENT_DATA: Carro[] = [];

  displayedColumns: string[] = ['carroId', 'nomeDocarro','tabelaFipe','informacoes']
  dataSource = new MatTableDataSource<Carro>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: CarroService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Carro>(resposta);
      this.dataSource.paginator = this.paginator;

    });
  }

   applyFilter(event: Event){
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
   }
}


