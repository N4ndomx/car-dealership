import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from "uuid";

@Injectable()
export class BrandsService {
  private brans: Brand[] = [
    // {
    //   id: uuid(),
    //   name: "Toyota",
    //   createdAt: new Date().getTime()
    // }
  ]


  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime()
    }
    this.brans.push(brand)
    return brand;
  }

  findAll() {
    return this.brans;
  }

  findOne(id: string) {
    const brand = this.brans.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`no encontre ${id}`);
    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandBD = this.findOne(id);
    this.brans = this.brans.map(brand => {
      if (brand.id === id) {
        brandBD.updatedAt = new Date().getTime();
        brandBD = {
          ...brandBD,
          ...updateBrandDto
        }
        return brandBD
      }
      return brand
    });
    return brandBD
  }

  remove(id: string) {
    this.brans = this.brans.filter(bran => bran.id !== id)
  }
  setData(dataBrand: Brand[]) {
    this.brans = dataBrand
  }
}
