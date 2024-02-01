import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  userTemp = 'admin@admin.com'
  passTemp = '12345'


  constructor(private _snackBar: MatSnackBar,
              private router: Router) {}



  postLogin(email: string, pass: string, event: any){
    event.preventDefault()
    if(email === this.userTemp && pass === this.passTemp) {
      this.router.navigate(['home'])
      this._snackBar.open('Bienvenido Admin', 'Cerrar');
      localStorage.setItem('init', 'si')
    }else{
      this._snackBar.open('Usuario o clave invalido', 'Cerrar');
    }
  }

}
