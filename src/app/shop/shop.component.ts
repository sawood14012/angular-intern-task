import { Component, OnInit, Query } from '@angular/core';
import {DataService, SomeSharedService} from '../data.service';
import { Router } from '@angular/router';
import  * as algoliasearch  from 'algoliasearch/lite';
import {SharedService} from '../shared.service';


const searchClient = algoliasearch(
  '9CQGAYW5CN',
  '${process.env.ALGOLIA_SEARCH_KEY}'
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
      helper.search();
    }
  };
  public flag: boolean;
  search: Boolean
  Products: object 
  newItems : object

  receiveMessage($event) {
    this.search = $event
    console.log($event)
  }
  constructor(private service: SharedService,private someSharedService: SomeSharedService, private dataService: DataService, private router: Router) {

   }

  ngOnInit() {
    this.service.getValue().subscribe((value) => {
      this.flag = value;
    });
    console.log(this.someSharedService.get());
    this.dataService.getProducts().subscribe((res)=>{
      this.Products = res;
    
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


  searchEmpty() : Boolean {
    if (this.someSharedService.get() === ''){
      return true
    }
    else{
      return false
    }
  }
  

}
