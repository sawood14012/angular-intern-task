import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  openTab = 1;
  showPassword = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
