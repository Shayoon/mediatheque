import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() produit: any;
  @Output() delete = new EventEmitter();
  
  DEFAULT_IMG : string = "https://parfums-ugo.fr/wp-content/uploads/2021/07/Licorne.jpeg"

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.delete.emit(this.produit.id)
    alert("Le produit sélectionné a bien été supprimé")
  }
  
}
