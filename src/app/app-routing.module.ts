import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from '../app/book/book.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'Book', component: BookComponent},
  {path: 'App', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
