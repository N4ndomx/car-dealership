import { car } from "src/cars/interfaces/car.interfaces";
import { v4 as uuid } from "uuid";

export const CARS_SEED: car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Belica'
    },
    {
        id: uuid(),
        brand: 'Tesla',
        model: 'KH90'
    },
    {
        id: uuid(),
        brand: 'Ferrari',
        model: 'FranchescoVerguliniFUUUUUUAAA'
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: 'GGG'
    },
]