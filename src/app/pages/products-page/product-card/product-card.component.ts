import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  produit: any;
  
  DEFAULT_IMG : string = "https://parfums-ugo.fr/wp-content/uploads/2021/07/Licorne.jpeg"

  constructor() { }

  ngOnInit(): void {
  }

}
