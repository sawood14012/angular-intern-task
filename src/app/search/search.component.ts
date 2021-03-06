import { Component, Inject, forwardRef, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { DataService, SomeSharedService } from '../data.service';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends BaseWidget {
  search: boolean
  @Output() messageEvent = new EventEmitter<String>();
  public state: {
    query: string;
    refine: Function;
    clear: Function;
    isSearchStalled: boolean;
    widgetParams: object;
    queryHook: Function
  }
 constructor(private service: SharedService, private someSharedService: SomeSharedService,
   @Inject(forwardRef(() => NgAisInstantSearch))
   public instantSearchParent
 ) {
   super('SearchBox');
 }
 public onChangeDebounced(value) {
   this.state.refine(value);
   this.updateValue(value);
  
}
 ngOnInit() {
   this.createWidget(connectSearchBox, {
     // instance options
   });
   super.ngOnInit();
 }

 updateValue(value: string) {
  this.someSharedService.update(value);
  if(value === ''){
     this.service.setValue(false)
  }
  else{
    this.service.setValue(true)
  }
}
 
}
