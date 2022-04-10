import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from './../../../models/endereco';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco-create',
  templateUrl: './endereco-create.component.html',
  styleUrls: ['./endereco-create.component.scss'],
})
export class EnderecoCreateComponent implements OnInit {
  endereco: Endereco = {
    id_cliente: '',
    cep: '',
    logradouro: '',
    bairro: '',
    numero: 0,
    complemento: '',
    uf: '',
  };

  //NgModel
  logradouroModel: string;
  bairroModel: string;
  ufModel: string;
  numeroModel: number;
  cepModel: string;

  //FormsControl
  cep: FormControl = new FormControl(null, Validators.maxLength(8));
  logradouro: FormControl = new FormControl();
  bairro: FormControl = new FormControl();
  numero: FormControl = new FormControl();
  complemento: FormControl = new FormControl();
  uf: FormControl = new FormControl();

  constructor(
    private service: EnderecoService,
    private tost: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.endereco.id_cliente = Number(this.route.snapshot.paramMap.get('id'));
  }

  buscaAPI() {
    const endpoint = 'https://viacep.com.br/ws/' + this.cep.value + '/json/';

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.logradouroModel = data.logradouro;
        this.ufModel = data.uf;
        this.bairroModel = data.bairro;
      })
      .catch(() => console.log('Error!'));
  }

  SetObject() {
    this.endereco.logradouro = this.logradouroModel;
    this.endereco.bairro = this.bairroModel;
    this.endereco.uf = this.ufModel;
    this.endereco.numero = Number(this.numeroModel);
    this.endereco.cep = this.cepModel;
  }

  create(): void {
    this.SetObject();

    this.service.create(this.endereco).subscribe(
      (resposta) => {
        this.tost.success('Endereco cadastrado com sucesso.', 'Cadastro');
        this.router.navigate(['clientes']);
      },
      (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element) => {
            this.tost.error(element.message);
          });
        } else {
          this.tost.error(ex.error.message);
        }
      }
    );
  }

  validaCampos(): boolean {
    return (
      this.cep.valid &&
      this.logradouro.valid &&
      this.numero.valid &&
      this.uf.valid
    );
  }
}
