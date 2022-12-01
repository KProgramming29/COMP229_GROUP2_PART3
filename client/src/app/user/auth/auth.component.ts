import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public user?: User;
  public errorMessage?: string;
  public password?: String;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  authenticate(form: NgForm): void {
    if (form.valid) {
      // Perform auth
      this.router.navigateByUrl('user/main');
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
  
}
