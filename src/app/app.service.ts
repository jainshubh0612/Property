import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiBaseUrl = 'http://localhost:3000/property';
  constructor(private httpClient:HttpClient) { }

  getAllProperties(){
    return this.httpClient.get(this.apiBaseUrl);
  }

  createProperty(data: any) {
    return this.httpClient.post(this.apiBaseUrl, data);
  }

  updateProperty(data: any) {
    return this.httpClient.put(this.apiBaseUrl + `/${data._id}`, data);
  }

  deleteProperty(id: string) {
    return this.httpClient.delete(this.apiBaseUrl + `?id=${id}`);
  }
}
