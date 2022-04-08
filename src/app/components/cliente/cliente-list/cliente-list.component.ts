import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss'],
})
export class ClienteListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nome',
    'dataNascimento',
    'sexo',
    'acoes',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() {}

  ngOnInit(): void {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  nome: string;
  id: number;
  dataNascimento: string;
  sexo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, nome: 'Ita', dataNascimento: '06/08/1995', sexo: 'M' },
  { id: 2, nome: 'Roger', dataNascimento: '06/08/1995', sexo: 'M' },
  { id: 3, nome: 'Bruno', dataNascimento: '06/08/1995', sexo: 'M' },
  { id: 4, nome: 'Matheus', dataNascimento: '06/08/1995', sexo: 'M' },
  { id: 5, nome: 'Renan', dataNascimento: '06/08/1995', sexo: 'M' },
  { id: 6, nome: 'Italo', dataNascimento: '06/08/1995', sexo: 'M' },
  { id: 7, nome: 'Lud', dataNascimento: '06/08/1995', sexo: 'F' },
];
