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
    id: '',
    nome: '',
    dataNascimento: '',
  };

  seletorSexoModel: any;
  nomeModel: any;
  dataNascimentoModel: any;
  cepModel: any;

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

  gravar() {
    console.log(this.nomeModel);
    console.log(this.seletorSexoModel);
    console.log(this.nome.valid);
    console.log(this.dataNascimento.valid);
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
    let sexoPrenchido;
    if (this.seletorSexoModel === undefined) {
      sexoPrenchido = false;
    } else {
      sexoPrenchido = true;
    }
    return this.nome.valid && this.dataNascimento.valid && sexoPrenchido;
  }
}
