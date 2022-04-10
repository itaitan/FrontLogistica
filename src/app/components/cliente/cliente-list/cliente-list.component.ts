import { ClienteService } from 'src/app/services/cliente.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/clientes';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss'],
})
export class ClienteListComponent implements OnInit {

  ELEMENT_DATA: Cliente[] = [];

  displayedColumns: string[] = [
    'id',
    'nome',
    'dataNascimento',
    'sexo',
    'acoes',
  ];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  constructor(
    private service: ClienteService
  ) {}

  ngOnInit(): void {
    this.findAll()
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
}


