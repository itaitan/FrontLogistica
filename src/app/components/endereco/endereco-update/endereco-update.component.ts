import { Endereco } from 'src/app/models/endereco';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnderecoService } from 'src/app/services/endereco.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco-update',
  templateUrl: './endereco-update.component.html',
  styleUrls: ['./endereco-update.component.scss'],
})
export class EnderecoUpdateComponent implements OnInit {
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
    this.endereco.id = Number(this.route.snapshot.paramMap.get('idEnd'));
    this.endereco.id_cliente = Number(this.route.snapshot.paramMap.get('id'));

    this.findById();
  }

  findById(): void {
    this.service.findbyID(this.endereco.id).subscribe((resposta) => {
      this.endereco = resposta;
    });
  }

  buscaAPI() {
    const endpoint = 'https://viacep.com.br/ws/' + this.cep.value + '/json/';

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.endereco.logradouro = data.logradouro;
        this.endereco.uf = data.uf;
        this.endereco.bairro = data.bairro;
      })
      .catch(() => console.log('Error!'));
  }

  SetObject() {
    this.endereco.numero = Number(this.endereco.numero);
  }

  update(): void {
    this.SetObject();
    this.service.update(this.endereco).subscribe(
      (resposta) => {
        this.tost.success('Endereço Atualizado com Sucesso.', 'Atualizar');
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
