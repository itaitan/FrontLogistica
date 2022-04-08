import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-endereco-create',
  templateUrl: './endereco-create.component.html',
  styleUrls: ['./endereco-create.component.scss'],
})
export class EnderecoCreateComponent implements OnInit {
  //NgModel
  logradouroModel: any;
  bairroModel: any;
  ufModel: any;

  //FormsControl
  cep: FormControl = new FormControl(null, Validators.maxLength(8));
  logradouro: FormControl = new FormControl();
  bairro: FormControl = new FormControl();
  numero: FormControl = new FormControl();
  complemento: FormControl = new FormControl();
  uf: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  gravar() {}

  buscaAPI() {
    const endpoint = 'https://viacep.com.br/ws/' + this.cep.value + '/json/';

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.logradouroModel = data.logradouro;
        this.ufModel = data.uf;
        this.bairroModel = data.bairro;
      })
      .catch(() => console.log('Error!'));
  }
}
