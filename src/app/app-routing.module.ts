import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechmediaBlogComponent } from './techmedia-blog/techmedia-blog.component';


const routes: Routes = [
  {
    path: '',
    component: TechmediaBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
