import { Injectable, NotFoundException } from '@nestjs/common';
<<<<<<< HEAD
=======
import { PrismaService } from 'src/prisma.service';
>>>>>>> refs/remotes/origin/develop
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

  async createProduct(createProductDto: CreateProductDto) {
    const { product_name, product_description, product_price, product_quantity } = createProductDto;

    return this.prisma.products.create({
      data: {
        name: product_name,
        description: product_description,
        price: product_price,
        quantity: product_quantity,
      },
    });
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.products.update({
      where: {
        UUID: id,
      },
      data: {
        name: updateProductDto.product_name,
        description: updateProductDto.product_description,
        price: updateProductDto.product_price,
        quantity: updateProductDto.product_quantity,
      },
    });
  }

  async deleteProduct(id: string) {
    const product = await this.prisma.products.findUnique({
      where: {
        UUID: id,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.prisma.products.delete({
      where: {
        UUID: id,
      },
    });
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

