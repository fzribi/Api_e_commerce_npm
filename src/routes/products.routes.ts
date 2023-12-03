// product.routes.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Controller('products')
export class ProductRoutes {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':productId')
  getProductById(@Param('productId') productId: string) {
    return this.productService.getProductById(productId);
  }

  @Post()
  createProduct(@Body() productData: any) {
    return this.productService.createProduct(productData);
  }

  @Put(':productId')
  updateProduct(@Param('productId') productId: string, @Body() productData: any) {
    return this.productService.updateProduct(productId, productData);
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: string) {
    return this.productService.deleteProduct(productId);
  }

  
}
