import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'add',
    pathMatch : 'full'
  },
  {
    path : 'add',
    component : UserFormComponent
  },
  {
    path : 'edit/:id',
    component : UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
