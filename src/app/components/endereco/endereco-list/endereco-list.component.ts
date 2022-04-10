import { Endereco } from './../../../models/endereco';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';
import { Cliente } from 'src/app/models/clientes';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.scss'],
})
export class EnderecoListComponent implements OnInit {
  clienteid: Cliente={
    id:''
  }

  ELEMENT_DATA: Cliente[] = [];

  displayedColumns: string[] = [
    'id',
    'cep',
    'logradouro',
    'bairro',
    'complemento',
    'uf',
    'acoes',
  ];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  constructor(
    private serviceCliente: ClienteService,
    private service: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clienteid.id = this.route.snapshot.paramMap.get('id');
    this.findById();


  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findById(): void {
    this.serviceCliente.findById(this.clienteid.id).subscribe((resposta) => {

      this.ELEMENT_DATA = [resposta];
      this.ELEMENT_DATA.map(endereco => endereco.endereco)
      this.dataSource = new MatTableDataSource<Cliente>(resposta.endereco);
      this.dataSource.paginator = this.paginator;
    });

  }


}
