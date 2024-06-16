import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-render',
  templateUrl: './pdf-render.component.html',
  styleUrls: ['./pdf-render.component.css']
})
export class PdfRenderComponent {
  @Input() pdfSrc:any;
  constructor()
  {

  }
}
