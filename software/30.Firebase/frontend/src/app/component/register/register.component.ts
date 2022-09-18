import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { user } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() email!: string;
  @Input() password!: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async registerUser(): Promise<void> {
    const data: user = {
      email: this.email,
      password: this.password
    }
    const res = await this.authService.register(data);
    console.log(res.data);
    this.router.navigate(['/']);
  }

}
