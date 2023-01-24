# Application  requirements

## Register car
**FUNCTIONAL REQUIREMENTS**
- [x] Should be possible to register a new car.
- [ ] Should be possible to list all categories.

**BUSINESS RULE**
- [x] Should not be possible to register a vehicle with the same license plate.
- [x] Should not be possible to change the vehicle license plate.
- [x] The car should be register with available as default.
- [x] Only administrators should be able to register a car.

## List all cars

**FUNCTIONAL REQUIREMENTS**
- [ ] Should be possible to list all available cars.
- [ ] Should be possible to list all available cars by the category name.
- [ ] Should be possible to list all available cars by manufacture name.

**BUSINESS RULE**
- [ ] User can list cars without the need of login.

## Car specifications register

**FUNCTIONAL REQUIREMENTS**
- [x] Should be possible to register a car specification.

**BUSINESS RULE**
- [x] Should not be possible to register a specification for a non registered car.
- [x] Should not be possible to register a specification that already exists for the same car.
- [x] User must be administrator to register a new specification.

## Car image registration

**FUNCTIONAL REQUIREMENTS**
- [x] Should be possible to insert a car photo.
- [x] Should be able to list all cars.

**NOT FUNCTIONAL REQUIREMENTS**
- [x] Use multer for image upload

**BUSINESS RULE**
- [x] User should be able to insert more than an image for the same car.
- [x] User should be administrator to insert a new record.

## Rent

**FUNCTIONAL REQUIREMENTS**
- [x] Should be able to register a rent.
- [x] Should be able to list available cars for rent.

**NOT FUNCTIONAL REQUIREMENTS**

**BUSINESS RULE**
- [ ] Rent should have at least 24h as minimum time.
- [ ] Should not be able to register a new rent if the user already have one.
- [ ] Should not be able to register a new rent if car is already taken.

## Car return

**FUNCTIONAL REQUIREMENTS**
- [ ] Should be able to return a car

**NOT FUNCTIONAL REQUIREMENTS**
- [ ] If car is returned with last then 24 hours, user should pay full day.
- [ ] When returned, car should be available for another rent.
- [ ] When returned, user should be free to make another rent.
- [ ] when returned, rent total should be calculated.
- [ ] If the time of return is greater than the estimated time, user should be charge with the proportional time.
- [ ] If there is a charge, it should be add to the rent total.