import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule , FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class UserModule { 
  
    constructor(library : FaIconLibrary)
    {
      library.addIconPacks(fab , fas , far);
    }
  
}
