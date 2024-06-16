import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedRoutingModule } from './shared-routing.module';
import { ListTableComponent } from './reusableComps/list-table/list-table.component';

import { FontAwesomeModule , FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { PdfRenderComponent } from './reusableComps/pdf-render/pdf-render.component';
// import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ListTableComponent, PdfRenderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxDatatableModule,
    NgxPaginationModule ,
    FontAwesomeModule,
    // PdfViewerModule
  ],
  exports : [
    ListTableComponent,
    PdfRenderComponent
  ]
})
export class SharedModule {
  constructor(library : FaIconLibrary)
  {
    library.addIconPacks(fab , fas , far);
  }
 }
