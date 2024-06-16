import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListingComponent } from './content-listing/content-listing.component';

const routes: Routes = [
  {
    path:'',
    redirectTo : 'listing',
    pathMatch : 'full'
  },
  {
    path:'listing',
    component : ContentListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
