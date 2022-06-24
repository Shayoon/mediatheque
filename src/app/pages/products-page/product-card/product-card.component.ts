import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  produit: any;
  
  DEFAULT_IMG : string = "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Funicorn-with-colorful-hear-on-rainbow-background-147517458.jpg&sp=1656053747Tfbe1d37e0a76991b95180470a251f265dab045609b264686d6af1dda3b95ab48"

  constructor() { }

  ngOnInit(): void {
  }

}
