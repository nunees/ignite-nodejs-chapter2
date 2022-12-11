import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import ListAvailableCarsUseCase from "./ListAvailableCarsUseCase";

let listCarsAvailableUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsAvailableUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
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

    const cars = await listCarsAvailableUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-2222",
      fine_amount: 50,
      brand: "car_brand_test",
      category_id: "8179bf73-f149-4ffb-91f7-456a2aabac03",
    });

    const cars = await listCarsAvailableUseCase.execute({
      brand: "car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-3333",
      fine_amount: 50,
      brand: "car_brand_test",
      category_id: "8179bf73-f149-4ffb-91f7-456a2aabac03",
    });

    const cars = await listCarsAvailableUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-4444",
      fine_amount: 50,
      brand: "car_brand_test",
      category_id: "12345",
    });

    const cars = await listCarsAvailableUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
