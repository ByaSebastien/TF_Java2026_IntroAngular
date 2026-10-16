import { ProductDto } from './product-dto';

export interface CartLineDto {
  product: ProductDto;
  quantity: number;
}
