import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });
  it('should be able to list all available cars', async () => {
    const availableCar = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 200,
      license_plate: 'ABC-2000',
      fine_amount: 100,
      brand: 'Car brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([availableCar]);
  });

  it('should be able to list all available cars by name', async () => {
    const availableCar = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 200,
      license_plate: 'ABC-2001',
      fine_amount: 100,
      brand: 'Car brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({ name: 'Car2' });
    expect(cars).toEqual([availableCar]);
  });

  it('should be able to list all available cars by brand', async () => {
    const availableCar = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Car description',
      daily_rate: 200,
      license_plate: 'ABC-2002',
      fine_amount: 100,
      brand: 'Car brand New',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car brand New',
    });
    expect(cars).toEqual([availableCar]);
  });

  it('should be able to list all available cars by category ID', async () => {
    const availableCar = await carsRepositoryInMemory.create({
      name: 'Car4',
      description: 'Car description',
      daily_rate: 200,
      license_plate: 'ABC-2003',
      fine_amount: 100,
      brand: 'Car brand New',
      category_id: 'category_id_new',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: 'category_id_new',
    });
    expect(cars).toEqual([availableCar]);
  });
});
