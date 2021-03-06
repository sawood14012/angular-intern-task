import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  data = [
    {
      id: 20,
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      category: 'women clothing',
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
    },
    {
      id: 21,
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      category: 'women clothing',
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
    },
    {
      id: 22,
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      category: 'women clothing',
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
    },
    {
      id: 23,
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      category: 'women clothing',
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
