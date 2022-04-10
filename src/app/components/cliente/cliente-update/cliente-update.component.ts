import { Endereco } from './../../../models/endereco';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss'],
})
export class ClienteUpdateComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    dataNascimento: '',
    sexo: '',
  };



  seletorSexoModel: any;
  nomeModel: any;
  dataNascimentoModel: any;


  seletorSexo: FormControl = new FormControl();
  nome: FormControl = new FormControl();
  dataNascimento: FormControl = new FormControl();

  constructor(
    private service: ClienteService,
    private tost: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id).subscribe((resposta) => {
      this.cliente = resposta;
    });
  }

  update(): void {
    this.service.update(this.cliente).subscribe(
      (resposta) => {
        this.tost.success('Cliente Atualizado com Sucesso.', 'Atualizar');
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
    return this.nome.valid && this.dataNascimento.valid
  }
}
