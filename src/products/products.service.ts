import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  private products = [
    { id: '1', name: 'Product 1', price: 19.99 },
    { id: '2', name: 'Product 2', price: 29.99 },
    // ... d'autres produits
  ];

  getAllProducts() {
    return this.products;
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
  getAllProducts() {
    // Logique pour récupérer tous les produits
    return /* ... */;
  }

  //////////////////////
  // product.service.ts

@Injectable()
export class ProductService {
  

  getProductById(productId: string) {
    const product = this.products.find((p) => p.id === productId);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }
}

  /////apr(s)

  @Post()
  createProduct(@Body() productData: any) {
    return ;
  }

  @Put(':productId')
  updateProduct(@Param('productId') productId: string, @Body() productData: any) {
    return ;
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: string) {
    return ;
  }

  ////////////////////////:
}

