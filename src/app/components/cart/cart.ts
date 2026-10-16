import {
  Component,
  computed,
  input,
  InputSignal,
  output,
  OutputEmitterRef, Signal,
} from '@angular/core';
import { CartLineDto } from '../../models/cart-line-dto';
import { MoneyPipe } from '../../pipes/money-pipe';

@Component({
  imports: [MoneyPipe],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
})
export class Cart {
  cart: InputSignal<CartLineDto[]> = input.required<CartLineDto[]>();

  total: Signal<number> = computed(() => {
    return this.cart()
      .map((cl) => cl.product.price * cl.quantity)
      .reduce((a, b) => a + b, 0);
  });

  minusEvent: OutputEmitterRef<number> = output<number>();
  plusEvent: OutputEmitterRef<number> = output<number>();
  removeEvent: OutputEmitterRef<number> = output<number>();

  triggerMinusEvent(id: number) {
    this.minusEvent.emit(id);
  }

  triggerPlusEvent(id: number) {
    this.plusEvent.emit(id);
  }

  triggerRemoveEvent(id: number) {
    this.removeEvent.emit(id);
  }
}
