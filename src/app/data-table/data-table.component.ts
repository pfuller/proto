import { Component, OnInit } from '@angular/core';
import { DataTableInputService } from './data-table-input.service';
import { IProduct } from './iproduct';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [DataTableInputService]
})

export class DataTableComponent implements OnInit {
  pageTitle = 'Data Table';
  errorMessage: string;
  products: IProduct[] = [];

  constructor(private _inputService: DataTableInputService) { }

  ngOnInit(): void {
    this._inputService.getProducts()
            .subscribe(products => {
                this.products = products;
            },
            error => this.errorMessage = <any>error);
  }
}
