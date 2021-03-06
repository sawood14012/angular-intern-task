import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = 'https://products-ameen.herokuapp.com'
  
  constructor(private http: HttpClient) {   
  }

  getProducts(){
    return this.http.get(this.API_URL+'/products/api')
  }
}
