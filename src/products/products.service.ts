import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Cuenta de Ahorros', description: 'Sin cuota de manejo' },
    { id: 2, name: 'Cuenta Corriente', description: 'Ideal para empresas.' },
    { id: 3, name: 'CDT Digital', description: 'Inversión a plazo fino.' },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
