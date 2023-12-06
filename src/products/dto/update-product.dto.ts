import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto {
    product_name?: string;
    product_description?: string;
    product_price?: number;
    product_quantity?: number;
  }
  