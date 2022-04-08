import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {
  seletorSexoModel: any;
  nomeModel: any;
  dataNascimentoModel: any;
  cepModel: any;

  seletorSexo: FormControl = new FormControl();
  nome: FormControl = new FormControl();
  dataNascimento: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  gravar() {
    console.log(this.nomeModel);
    console.log(this.seletorSexoModel);
    console.log(this.nome.valid);
    console.log(this.dataNascimento.valid);

  }

  validaCampos(): boolean {
    let sexoPrenchido;
    if (this.seletorSexoModel === undefined) {
      sexoPrenchido = false;
    } else {
      sexoPrenchido = true;
    }
    return this.nome.valid && this.dataNascimento.valid && sexoPrenchido;
  }
}
