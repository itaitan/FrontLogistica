import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  nome: any;
  dataNascimento: any;
  cep: any;

  constructor( ) { }

  ngOnInit(): void {

  }

  gravar(){
    console.log(this.nome);
    console.log(this.cep)
  }

}
