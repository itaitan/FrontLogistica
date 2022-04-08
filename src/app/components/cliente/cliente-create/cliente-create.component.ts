import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss'],
})
export class ClienteCreateComponent implements OnInit {
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
