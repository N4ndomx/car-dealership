import {
    Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto } from './dtos/create-car.dto';
import { updateCartDto } from './dtos/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }

    // private cars = ['Alfa', 'Ferrari', 'tollota', 'Jeep', 'Koli'];
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    // @Get(':id')
    // getCarById(@Param('id', ParseIntPipe) id: number) {
    //     console.log({ id });
    //     return this.carsService.findCarById(id);

    // }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        console.log({ id });
        return this.carsService.findCarById(id);

    }
    //@UsePipes(ValidationPipe)
    @Post()
    createCar(@Body() data: createCarDto) {
        return this.carsService.create(data);
    }

    // por lo general se debe seleccionar el dato por url 
    @Patch(':id')
    updateCart(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() data: updateCartDto) {
        return this.carsService.update(id, data);
    }

    // para eliminar usualmete solo es el numero del car id 
    @Delete(':id')
    deleteCart(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.deleted(id)

    }
}
