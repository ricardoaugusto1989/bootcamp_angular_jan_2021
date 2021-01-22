import { Component, OnInit } from '@angular/core';
import { PoPageAction,PoBreadcrumbModule  ,PoTableColumn, PoBreadcrumb, PoTableAction } from '@po-ui/ng-components';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  actions: Array<PoPageAction> = [
    {
      label:'Incluir',
      url:'home/clientes/new',
    },
  ];
  breadcrumb: PoBreadcrumb ={
    items: [{label:'Home', link:'/home'}, {label:'Cliente'}],
    };
    items:any;


  colunas: Array<PoTableColumn>=[
    {property: 'id', label: 'ID', type:'string'},
    {property: 'nome', label: 'Nome', type:'string'},
    {property: 'endereco', label: 'Endereco', type:'string'},
    {property: 'dataNascimento', label: 'Data Nascimento', type:'date'},
  ];

  tableActions: Array<PoTableAction> = [
    { action: this.visualizar.bind(this), label:'Visualizar' },
    { action: this.editar.bind(this), label:'Editar' },
  ];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
      this.clientesService.retornaClientes().subscribe(
        (api)=>{
          this.items = api.items;
        }
      )
  }

  visualizar(){

  }

  editar(){

  }



}
