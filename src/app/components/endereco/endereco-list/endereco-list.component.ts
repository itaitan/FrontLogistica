import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.scss'],
})
export class EnderecoListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'cep',
    'logradouro',
    'bairro',
    'complemento',
    'uf',
    'acoes',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {

  id: number;
  cep: string;
  logradouro: string;
  bairro: string;
  numero: number;
  complemento: string;
  uf: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, cep: '08615060', logradouro: 'Ita', bairro: '06/08/1995', numero: 1001, complemento: '1001', uf: 'sp' },
  { id: 2, cep: '08615060', logradouro: 'Ita', bairro: '06/08/1995', numero: 1001, complemento: '1001', uf: 'sp' },
];
