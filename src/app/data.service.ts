import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  search = false
  API_URL = 'https://products-ameen.herokuapp.com'
  
  constructor(private http: HttpClient) {   
  }

  getProducts(){
    return this.http.get(this.API_URL+'/products/api')
  }

  setSearch(search: boolean){
    search = search
  }

  getSearch() {
    return this.search;
  }
}

export class SomeSharedService {
  public globalVar = '';

  public get(){
    return this.globalVar;
  }

  public update(val){
    this.globalVar = val
  }
}
