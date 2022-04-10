import { Endereco } from './../../../models/endereco';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss'],
})
export class ClienteCreateComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    dataNascimento: '',
    sexo: '',
  };

  nome: FormControl = new FormControl();
  dataNascimento: FormControl = new FormControl();
  sexo: FormControl = new FormControl();

  constructor(
    private service: ClienteService,
    private tost: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create(): void {
    console.log(this.cliente);
    this.service.create(this.cliente).subscribe(
      (resposta) => {
        this.tost.success('Cliente Cadastrado com Sucesso.', 'Cadastro');
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
    let sexoPrenchido;
    if (this.cliente.sexo === undefined) {
      sexoPrenchido = false;
    } else {
      sexoPrenchido = true;
    }
    return this.nome.valid && this.dataNascimento.valid && sexoPrenchido;
  }
}
