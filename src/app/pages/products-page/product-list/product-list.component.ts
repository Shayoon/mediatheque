import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: any[] = [];
  @Output() delete = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id:number){
    this.delete.emit(id)
  }
}
