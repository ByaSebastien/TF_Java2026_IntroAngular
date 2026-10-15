import { Component, OnDestroy, signal, WritableSignal } from '@angular/core';
import { ProductDto } from '../../models/product-dto';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { MoneyPipe } from '../../pipes/money-pipe';

@Component({
  imports: [FormsModule, UpperCasePipe, MoneyPipe],
  selector: 'app-product-index',
  styleUrl: './product-index.scss',
  templateUrl: './product-index.html',
})
export class ProductIndex implements OnDestroy {
  private nextId = 1;
  products: WritableSignal<ProductDto[]> = signal([]);

  nameInput: string = '';
  descriptionInput: string = '';
  priceInput: number = 0;
  imageInput: string = '';

  number: WritableSignal<number> = signal(1);

  timer: number;

  constructor() {
    this.timer = setInterval(() => {
      console.log(this.number());
      this.number.set(this.number() + 1);
    }, 1000);

    console.log('In ProductIndex constructor');
    this.products.update((p) => [
      ...p,
      {
        id: this.nextId++,
        name: 'Skateboard',
        description: "Description d'un skate",
        price: 4299,
        imageUrl:
          'https://m.media-amazon.com/images/I/71DXvHEE+QL._AC_SY550_.jpg',
      },
    ]);
    this.products.update((p) => [
      ...p,
      {
        id: this.nextId++,
        name: 'Rollers',
        description: 'Description de rollers',
        price: 9999,
        imageUrl:
          'https://m.media-amazon.com/images/I/71WV2cIIWlL._AC_SX522_.jpg',
      },
    ]);
    this.products.update((p) => [
      ...p,
      {
        id: this.nextId++,
        name: 'Trotinette',
        description: "Description d'une trotinette",
        price: 2499,
        imageUrl:
          'https://m.media-amazon.com/images/I/61FGf9HRrjL._AC_SX679_.jpg',
      },
    ]);
  }

  addProduct() {
    this.products.update((p) => [
      ...p,
      {
        id: this.nextId++,
        name: this.nameInput,
        description: this.descriptionInput,
        price: this.priceInput,
        imageUrl: this.imageInput,
      },
    ]);

    this.nameInput = '';
    this.descriptionInput = '';
    this.priceInput = 0;
    this.imageInput = '';

    console.log('Product added successfully');
  }

  removeProduct(id: number) {
    console.log('Product removed successfully');
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
