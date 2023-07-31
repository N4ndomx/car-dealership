import { Injectable, NotFoundException } from '@nestjs/common';
import { car } from './interfaces/car.interfaces';
import { v4 as uuid } from "uuid";
import { createCarDto } from './dtos/create-car.dto';
import { updateCartDto } from './dtos/update-car.dto';
// Logica de neg en servisios incluso manejo de exepcioes
@Injectable()
export class CarsService {
    private cars: car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Belica'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Belica'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Belica'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Belica'
        // },
    ]

    findAll() {
        return this.cars
    }

    findCarById(id: string) {
        const car = this.cars.find(car => car.id === id)
        if (!car) {
            throw new NotFoundException("Carro no encontrado con id : ");
        }
        return car
    }

    create(obj: createCarDto) {
        // const c: car = {
        //     id: uuid(),
        //     brand: obj.brand,
        //     model: obj.model
        // }
        // Es lo mismo , solo que '...'desestructura de dto
        const c: car = {
            id: uuid(),
            ...obj
        }
        this.cars.push(c);
        return c;
    }

    update(id: string, data: updateCartDto) {

        let carbd = this.findCarById(id)
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carbd = {
                    ...carbd,
                    ...data,
                    id
                }
                return carbd
            }
            return car
        });
        return carbd
    }
    deleted(id: string) {
        this.findCarById(id)
        this.cars = this.cars.filter(car => car.id !== id);
    }
    setData(dataCars: car[]) {
        this.cars = dataCars
    }
}
