import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: '', redirectTo: 'produtos', pathMatch: "full"},
  { path: 'carrinho', loadChildren: () => import('./carrinhos/carrinhos.module').then(m => m.CarrinhosModule) },
  { path: '**', component: NaoEncontradoComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
