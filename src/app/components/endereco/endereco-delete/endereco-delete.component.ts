import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnderecoService } from 'src/app/services/endereco.service';
import { Cliente } from 'src/app/models/clientes';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-endereco-delete',
  templateUrl: './endereco-delete.component.html',
  styleUrls: ['./endereco-delete.component.scss'],
})
export class EnderecoDeleteComponent implements OnInit {
  endereco: Endereco = {
    id: '',
    id_cliente: '',
    cep: '',
    logradouro: '',
    bairro: '',
    numero: 0,
    complemento: '',
    uf: '',
  };

  constructor(
    private service: EnderecoService,
    private tost: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.endereco.id = this.route.snapshot.paramMap.get('idEnd');
    this.findById();
  }

  findById(): void {
    this.service.findbyID(this.endereco.id).subscribe((resposta) => {
      this.endereco = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.endereco.id).subscribe(
      (resposta) => {
        this.tost.success('Endereço deletado com Sucesso.', 'Deletado');
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
}
