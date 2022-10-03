import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() email!: string;
  @Input() password!: string;

  constructor(private authRequest: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async loginUser(): Promise<void> {
    const data: user = {
      email: this.email,
      password: this.password,
    };
    const res = await this.authRequest.login(data);
    console.log(res.data);
    this.router.navigate(['/']);
  }
}
