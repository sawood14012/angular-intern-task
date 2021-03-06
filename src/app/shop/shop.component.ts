import { Component, OnInit, Query } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
import  * as algoliasearch  from 'algoliasearch/lite';


const searchClient = algoliasearch(
  '9CQGAYW5CN',
  '12aa30e9c2002e51a5e1debc58876659'
);

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})


export class ShopComponent implements OnInit {

  config = {
    indexName: "FAKE_FLIPCART",
    searchClient,
    searchFunction(helper: any) {
      console.log(helper.state.query);
      if(helper.state.query == ""){
        console.log("empty");
      }
      helper.search();
    }
  };
  search: Boolean
  Products: object 
  newItems : object

  constructor(private dataService: DataService, private router: Router) {

   }

  ngOnInit() {
    this.dataService.getProducts().subscribe((res)=>{
      this.Products = res;
      console.log(this.Products);
    })
  }

  groupByType(items: Object[]) {
    const newItems = {};
    items.forEach((item: { type }) => {
      if (!newItems[item.type]) {
        newItems[item.type] = [item];
      } else {
        newItems[item.type].push(item);
      }
    });
    newItems["isEmpty"] = Object.keys(newItems).length === 0;
    return newItems;
  }

  searchEmpty(query: any) : Boolean {
    console.log(query);
    if (query === ''){
      this.search = false;
      return true;
    }
    else{
      this.search = true;
      return false;
    }
  }
  

}
