import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/Cars.seed';
import { BRANDS_SEED } from './data/Brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
  constructor(
    private readonly carServise: CarsService,
    private readonly brandService: BrandsService,
  ) { }
  generateSeed() {
    this.carServise.setData(CARS_SEED);
    this.brandService.setData(BRANDS_SEED);
    // CARS_SEED
    // BRANDS_SEED
    return "Listo Data Cargada"
  }
}
