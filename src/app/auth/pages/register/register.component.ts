import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { UsernameValidatorService } from 'src/app/shared/validators/username-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miForm : FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.vs.nombreApellidoParent)]],
    email: [, [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailVal]],
    username: [, [Validators.required, this.vs.noPuedeSerSantimartz], [this.userVal] ],
    password: [, [Validators.required, Validators.minLength(6)]],
    verifyPw: [, [Validators.required]],
  },{
    validators: [this.vs.camposIguales('password','verifyPw')]
  })

  validarError(campo: string){
    return (this.miForm.get(campo)?.invalid 
      && this.miForm.get(campo)?.touched) ?
      true : false;
  }

  get errorUsername(): string {
    const errors  = this.miForm.get('username')?.errors;

    if(errors?.['required']){
      return 'Este campo es obligatorio';
    }else if(errors?.['noSantimartz']){
      return 'Este campo no puede llamarse Santimartz';
    } else if(errors?.['usernameUsado']){
      return 'Este username ya está en uso';
    }
    return 'Error desconocido';
  }

  get errorEmail(): string {
    const errors  = this.miForm.get('email')?.errors;

    if(errors?.['required']){
      return 'Este campo es obligatorio';
    }else if(errors?.['pattern']){
      return 'Este valor no tiene formato de correo';
    } else if(errors?.['emailTomado']){
      return 'Este correo ya está en uso';
    }
    return 'Error desconocido';
  }

  submitForm(){

    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }

    console.log(this.miForm.value);
    this.miForm.reset();
  }


  constructor( private fb: FormBuilder,
              private vs: ValidatorService,
              private emailVal: EmailValidatorService,
              private userVal: UsernameValidatorService) { }

  ngOnInit(): void {
    this.miForm.reset({
    })
  }

}
