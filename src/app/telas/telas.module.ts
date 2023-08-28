import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaImovelComponent } from './lista-imovel/lista-imovel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroImovelComponent,
    CadastroClienteComponent,
    ListaClienteComponent,
    ListaImovelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TelasModule { }
