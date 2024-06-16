import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContentListingComponent } from './content-listing/content-listing.component';
import { SharedModule } from '../shared/shared.module';

import { FontAwesomeModule , FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    ContentListingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class HomeModule {
  constructor(library : FaIconLibrary)
  {
    library.addIconPacks(fab , fas , far);
  }
 }
