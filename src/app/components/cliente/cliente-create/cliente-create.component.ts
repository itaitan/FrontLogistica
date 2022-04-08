import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss'],
})
export class ClienteCreateComponent implements OnInit {
  seletorSexo = '';
  nome: any;
  dataNascimento: any;
  cep: any;
  sexoM: any;

  sexoF: FormControl = new FormControl(null);

  constructor() {}

  ngOnInit(): void {}

  gravar() {
    console.log(this.nome);
    console.log(this.cep);
    console.log(this.seletorSexo);
  }
}
