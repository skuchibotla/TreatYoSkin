import { Component, OnInit } from '@angular/core'; 
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  products : Products[];
  
  constructor(private p : ProductsService) {
  }

  ngOnInit() {
  	this.p.getProducts().subscribe((data : Products[]) => {
  		this.products = data;
  	});
  }

}
