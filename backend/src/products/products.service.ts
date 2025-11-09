import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductsService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  private products = [
    { id: 1, name: 'Cuenta de Ahorros', description: 'Sin cuota de manejo' },
    { id: 2, name: 'Cuenta Corriente', description: 'Ideal para empresas.' },
    { id: 3, name: 'CDT Digital', description: 'Inversión a plazo fino.' },
  ];

  async findAll() {
    const cacheKey = 'products_list';
    const cached = await this.cacheManager.get(cacheKey);
    if (cached) {
      console.log('Products get from cache');
      return cached;
    }

    console.log('Products get from source');
    await this.cacheManager.set(cacheKey, this.products, 60_000);
    return this.products;
  }

  async findOne(id: number) {
    const cacheKey = `product_${id}`;
    const cached = await this.cacheManager.get(cacheKey);

    if (cached) {
      console.log(`Product ${id} get from cache`);
      return cached;
    }

    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    console.log(`Product ${id} get from source`);
    await this.cacheManager.set(cacheKey, product, 60_000);
    return product;
  }
}
