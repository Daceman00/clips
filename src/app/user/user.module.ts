import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManageComponent } from '../video/manage/manage.component';


@NgModule({
  declarations: [
    AuthModalComponent,
    LoginComponent,
    RegisterComponent,
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    AuthModalComponent
  ]
})
export class UserModule { }
