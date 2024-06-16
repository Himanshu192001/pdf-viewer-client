import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent {
  
  @Input() list : any ;
  @Input() totalCount : any;
  @Output() edit : EventEmitter<any> = new EventEmitter();
  @Output() delete : EventEmitter<any> = new EventEmitter();
  @Output() paginate : EventEmitter<any> = new EventEmitter();
  @Input() page:any = 1;
  @Input() limit : any  = 10 ;

  constructor() { }

  ngOnInit() {
    
  }

  editDetails(id : String)
  {
    this.edit.emit(id);
  }

  deleteHandler(id:String)
  {
    this.delete.emit(id);
  }

  changePageHandler(event : any )
  {
    this.page = event;
    this.paginate.emit(event);
  }

 
}
