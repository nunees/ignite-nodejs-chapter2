import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import ListCarsUseCase from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-1111",
      fine_amount: 50,
      brand: "Car brand",
      category_id: "8179bf73-f149-4ffb-91f7-456a2aabac03",
    });

    const cars = await listCarsUseCase.execute({});
    console.log(cars);

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-1111",
      fine_amount: 50,
      brand: "car_brand_test",
      category_id: "8179bf73-f149-4ffb-91f7-456a2aabac03",
    });

    const cars = await listCarsUseCase.execute({
      brand: "car_brand_test",
    });
    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
