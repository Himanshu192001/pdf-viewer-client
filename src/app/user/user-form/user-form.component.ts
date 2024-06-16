import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/userServices/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm : any | FormGroup;
  invalid :any[] = [];
  isEdit : boolean = false ;
  userId : any;

  constructor(
    private fb : FormBuilder ,
    private router : Router ,
    private userService : UserService,
    private activatedRoute : ActivatedRoute
    )
  {
    this.activatedRoute.params.subscribe(params => {
      
      this.userId = params['id'];
      if(this.userId)
      {
        this.isEdit = true;
      }
      console.log(params['id']);
    });
  }

  ngOnInit(): void {
   
    this.userForm = this.fb.group({
      'name': ['' , Validators.required],
      'email': ['' , Validators.required],
      'mobile': ['' , Validators.required],
      'address': ['' , Validators.required],
    });
    if(this.isEdit)
    {
      this.initFormDetails();
    }
  }

  initFormDetails() : void
  {
    this.userService.getDetails(this.userId).subscribe({
      next : (res : any ) => {
        console.log("--- user details --> " , res );
        let data = res.data;
        for (const key in data) {
          this.userForm.get(key)?.setValue(data[key]);
        }
        console.log("---- Form ---> " , this.userForm)
      },
      error : (err : any) => { console.log(" ---- Error --> " , err.error.message)},
      complete : () => {}
    })
  }

  invalidFields()
  {
    const controls = this.userForm.controls;
    for (const name in controls) {
      if (controls[name].invalid && !this.invalid.includes(name)) {
        this.invalid.push(name);
      }
    }
    return this.invalid.length ? true : false;
  }

  clearValidation( name : String)
  {
    if(this.invalid.length && this.invalid.includes(name))
    {
      this.invalid.splice(this.invalid.indexOf(name) , 1);
    }
  }

  submit()
  {
    if(!this.invalidFields())
    {
      console.log(this.userForm.value)
      this.userService.createDoc(this.userForm.value).subscribe({
        next : (res : any ) => {
          console.log("--- user details added --> " , res );
          this.redirectToHome();

        },
        error : (err : any) => { console.log(" ---- Error --> " , err.error.message)},
        complete : () => {}
      });
    }
  }

  edit()
  {
    if(!this.invalidFields())
    {
      this.userService.editDoc(this.userForm.value , this.userId).subscribe({
        next : (res : any )  => {
          console.log("--- user updated added --> " , res );
          this.redirectToHome();
        },
        error : (err : any) => { console.log(" ---- Error --> " , err.error.message)},
        complete : () => {}
      });
    }
  };

  reset()
  {
    this.userForm.reset();
    this.invalid = [];
  }

  redirectToHome()
  {
    this.router.navigate(['/home']);
  }


}
