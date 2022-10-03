import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor() {}

  public async post(url: string, body: any) {
    return await axios.post(url, body);
  }

  public async get(url: string) {
    return await axios.get(url);
  }
}
