import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import axios from 'axios';
import { book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor() { }

  public async post(url: string, body: any) {
    return await axios.post(url, body);
  }

  public async get(url: string) {
    return await axios.get(url);
  }

}
