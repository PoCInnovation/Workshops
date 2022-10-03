import { Injectable } from '@angular/core';
import { AxiosResponse } from 'axios';
import { user } from '../model/user.model';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: any;

  constructor(private httpRquest: HttpRequestService) {}

  public login(user: user): Promise<AxiosResponse<any, any>> {
    return this.httpRquest.post('http://localhost:4000/login', user);
  }

  public register(user: user): Promise<AxiosResponse<any, any>> {
    return this.httpRquest.post('http://localhost:4000/register', user);
  }

  public logout(): Promise<AxiosResponse<any, any>> {
    return this.httpRquest.post('http://localhost:4000/logout', undefined);
  }
}
