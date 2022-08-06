import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[FormBuilder]
})
export class RegisterComponent implements OnInit {

  constructor(private _ToastrService:ToastrService,private _AuthService:AuthService,  private _FormBuilder:FormBuilder) { }
  registerForm:FormGroup=this._FormBuilder.group({
    name:[null,Validators.required],
    email:[null,Validators.required],
    password:[null,Validators.required]
  });
  ngOnInit(): void {
  }
  onsubmit(){
    console.log(this.registerForm.value)
    this._AuthService.register(this.registerForm.value).pipe(first()).subscribe(respond=>{
      this._ToastrService.success("Item Add successfuly", "Success", { timeOut: 3000, closeButton: true, progressBar: true })
      
    },error=>{
      this._ToastrService.error(error.message, "Error!", { timeOut: 4000, closeButton: true, progressBar: true })
      console.log(error)
    })
  }

}
