import { Component, effect, signal, WritableSignal } from '@angular/core';
import { ProductDto } from '../../models/product-dto';
import { CartLineDto } from '../../models/cart-line-dto';
import { MoneyPipe } from '../../pipes/money-pipe';
import { Cart } from '../../components/cart/cart';

@Component({
  imports: [MoneyPipe, Cart],
  selector: 'app-cart-exo',
  styleUrl: './cart-exo.scss',
  templateUrl: './cart-exo.html',
})
export class CartExo {
  products: WritableSignal<ProductDto[]> = signal([]);
  cart: WritableSignal<CartLineDto[]> = signal([]);

  constructor() {
    effect(() => {
      // effect se déclenche automatiquement à chaque changement de notre signal cart()
      console.log(this.cart());
    });

    this.products.update((p) => [
      ...p,
      {
        id: 1,
        name: 'Skateboard',
        description: "Description d'un skate",
        price: 4299,
        imageUrl:
          'https://m.media-amazon.com/images/I/71DXvHEE+QL._AC_SY550_.jpg',
      },
      {
        id: 2,
        name: 'Rollers',
        description: 'Description de rollers',
        price: 9999,
        imageUrl:
          'https://m.media-amazon.com/images/I/71WV2cIIWlL._AC_SX522_.jpg',
      },
      {
        id: 3,
        name: 'Trotinette',
        description: "Description d'une trotinette",
        price: 2499,
        imageUrl:
          'https://m.media-amazon.com/images/I/61FGf9HRrjL._AC_SX679_.jpg',
      },
    ]);
  }

  protected addToCart(productId: number) {
    this.cart.update((c) => {
      if (c.some((cl) => cl.product.id === productId)) {
        return c.map((cl) =>
          cl.product.id === productId
            ? { ...cl, quantity: cl.quantity + 1 }
            : { ...cl },
        );
      }

      let product = this.products().find((p) => p.id === productId)!;
      return [
        ...c,
        {
          product,
          quantity: 1,
        },
      ];
    });

    console.log(this.cart());
  }

  handleMinusEvent(id: number) {
    this.cart.update((c) =>
      c.map(cl =>
          cl.product.id === id
            ? { ...cl, quantity: cl.quantity - 1 }
            : { ...cl },
        ).filter(cl => cl.quantity > 0),
    );
  }

  handlePlusEvent(id: number) {
    this.cart.update((c) =>
      c.map((cl) =>
        cl.product.id === id ? { ...cl, quantity: cl.quantity + 1 } : { ...cl },
      ),
    );
  }

  handleRemoveEvent(id: number) {
    this.cart.update((c) => c.filter((cl) => cl.product.id !== id));
  }
}
