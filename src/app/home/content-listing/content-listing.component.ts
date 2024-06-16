import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/userServices/user.service';
import { PdfRenderComponent } from 'src/app/shared/reusableComps/pdf-render/pdf-render.component';

@Component({
  selector: 'app-content-listing',
  templateUrl: './content-listing.component.html',
  styleUrls: ['./content-listing.component.css']
})
export class ContentListingComponent {

  list : any;
  totalCount : any;
  pdfSrc : any;
  search : string | undefined;
  page : any = 1 ;
  limit : any = 10;


  constructor(private router : Router , private userService : UserService , private sanitizer: DomSanitizer){}

  ngOnInit(): void {
   this.fetchList(); 
  }

  fetchList()
  {
    this.userService.getList(this.search , this.page , this.limit ).subscribe(
      {
        next : (res : any ) => {
          this.list = res.data.list;
          this.totalCount = res.data.count;
        },
        error : (err : any ) => { console.log(err.error.message)}
      }
    )
  }

  addDetails()
  {
    this.router.navigate(['/user/add'])
  }

  editEventHandler(event : any)
  {
    this.router.navigate(['/user/edit' , event]);
  }

  deleteEventHandler(id : any)
  {
    this.userService.delete(id).subscribe(
      {
        next : (res : any ) => {
          console.log(res);
          this.fetchList();
        },
        error : (err : any ) => { console.log(err.error.message)}
      }
    )
  }

  generatePdf()
  {
    this.userService.generatePdf(this.search , this.page , this.limit).subscribe({
      next : (response: ArrayBuffer) => {
        console.log(response);
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      },
      error : () => {},
    })
  }

  handlePagination(event : any )
  {
    this.page = event;
    this.fetchList();
  }
}
