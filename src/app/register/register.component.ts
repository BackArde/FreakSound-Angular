import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)]),
      surname: new FormControl('', [Validators.maxLength(15)]),
      username: new FormControl(''),
      password: new FormControl(''),
      password_repeat: new FormControl(''),
      mail: new FormControl('', [Validators.email]),
      address: new FormControl(''),
      age: new FormControl('')
    }, [this.passwordRepeatValidator]);
  }
  

  ngOnInit(): void {
  }
  
  async onSubmit() {
    console.log(this.formRegister.value);
    const response = await this.usuarioService.sendRegister(this.formRegister.value);
    console.log(response);
  }
  

  passwordRepeatValidator(form) {
    const passwordValue = form.controls.password.value;
    const passwordRepeatValue = form.controls.password_repeat.value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else {
      return { passwordValidator: true };
    }
  }

}
