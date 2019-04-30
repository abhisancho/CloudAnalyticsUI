import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private httpClient: HttpClient) { }
  getUsers() {
    return this.httpClient.get("/api/rest/user");
  }
}
