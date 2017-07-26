import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import {Car, CarEnums} from './car/car.classes';
import { Driver } from './driver/driver.classes';

@Injectable()
export class ApiService {

  constructor(
  ) {
  }

  public getAllCars(): Observable<Car[]> {
    return Observable.of([
      new Car({
          id: 1,
          manufacturer: 'Chana',
          model: 'Benni',
          color: 'Голубая',
          stateNumber: 'G 565 FGN',
          convoy: '0001А-АНижний Новгород'
        }),
      new Car({
          id: 2,
          manufacturer: 'ГолАЗ',
          model: '5291',
          color: 'Голубая',
          stateNumber: 'AH 455 54',
          convoy: '0001А-АНижний Новгород'
        }),
      new Car({
          id: 3,
          manufacturer: 'Acura',
          model: 'Integra',
          color: 'Красная',
          stateNumber: 'B 323 BB 77',
          convoy: '0001А-АНижний Новгород'
        }),
      new Car({
          id: 4,
          manufacturer: 'ВАЗ',
          model: '1117 Kalina Универсал',
          color: 'Красный',
          stateNumber: 'П 6565 РР',
          convoy: '0001А-АНижний Новгород'
        }),
    ]);
  }

  public createCar(car: Car): Observable<Car> {
    return Observable.of(car);
  }

  public getCarById(carId: number): Observable<Car> {
    return Observable.of(
      new Car({
          id: 3,
          manufacturer: 'Acura',
          model: 'Integra',
          color: 'Красная',
          stateNumber: 'B 323 BB 77',
          year: '1980',
          convoy: '0001А-АНижний Новгород',
          bodyType: 'Седан',
          organization: true,
          availableForAll: false,
          options: {
            'Детское кресло': false,
            'Багаж': true,
            'доставка': true,
            'Кондиционер': false,
            'до 1 кг': false,
            'Некурящий водитель': true
          },
          notes: 'Машина в отличном состоянии',
          drivers: [
            new Driver({
              id: 3,
              firstName: 'Иван',
              secondName: 'Иванов',
              parentName: 'Иванович'
            })
          ],
        })
    );
  }

  public updateCar(car: Car): Observable<Car> {
    return Observable.of(car);
  }

  public deleteCarById(carId: number): Observable<null> {
    return null;
  }
  public getCarEnums(): Observable<CarEnums> {
    return Observable.of(
      new CarEnums({
          manufacturers: [
            {name: 'Acura', models: ['Integra', 'AcuraModel1', 'AcuraModel2']},
            {name: 'Chana', models: ['Benni', 'ChanaModel1', 'ChanaModel2']},
            {name: 'ВАЗ', models: ['1117 Kalina Универсал', 'Model1', 'Model2']},
            {name: 'ГолАЗ', models: ['5291', '5527', '5101']},
          ],
          colors: ['Красная', 'Голубая', 'Серая', 'Желтая', 'Черная', 'Зеленая'],
          bodyTypes: ['Седан', 'Хэтчбек', 'Купе', 'Универсал', 'Микроавтобус', 'Минивэн'],
          options: ['Детское кресло', 'Багаж', 'доставка', 'Кондиционер', 'до 1 кг', 'Некурящий водитель'],
        })
    );
  }
  drivers = [
    new Driver({
      id: 1,
      firstName: 'Александр',
      secondName: 'Петров',
      parentName: 'Николаевич',
      onDuty: true,
      balance: 300,
      callSign: 33365,
      phoneNumbers: ['+73655525425', '+73555525425', '+73655525433'],
      cars: [
        new Car({
          id: 4,
          manufacturer: 'ВАЗ',
          model: '1117 Kalina Универсал',
          color: 'Красный',
          stateNumber: 'П 6565 РР',
          convoy: '0001А-АНижний Новгород'
        })
      ]
    }),
    new Driver({
      id: 2,
      firstName: 'Петр',
      secondName: 'Петров',
      parentName: 'Петрович',
      onDuty: true,
      balance: 300,
      callSign: 45,
      phoneNumbers: ['+73655525425', '+73555525425'],
      cars: [
        new Car({
          id: 4,
          manufacturer: 'ВАЗ',
          model: '1117 Kalina Универсал',
          color: 'Красный',
          stateNumber: 'П 6565 РР',
          convoy: '0001А-АНижний Новгород'
        })
      ]
    }),
    new Driver({
      id: 3,
      firstName: 'Коновал',
      secondName: 'Дмитрий',
      parentName: 'Дмитриевич',
      onDuty: true,
      balance: 300,
      callSign: 2265,
      phoneNumbers: ['+73655525425'],
      cars: [
        new Car({
          id: 4,
          manufacturer: 'ВАЗ',
          model: '1117 Kalina Универсал',
          color: 'Красный',
          stateNumber: 'П 6565 РР',
          convoy: '0001А-АНижний Новгород'
        })
      ]
    }),
    new Driver({
      id: 4,
      firstName: 'Александр',
      secondName: 'Петров',
      parentName: 'Николаевич',
      onDuty: false,
      balance: 300,
      phoneNumbers: ['+73655525425'],
      cars: [
        new Car({
          id: 4,
          manufacturer: 'ВАЗ',
          model: '1117 Kalina Универсал',
          color: 'Красный',
          stateNumber: 'П 6565 РР',
          convoy: '0001А-АНижний Новгород'
        })
      ]
    })
  ];
  public getAllDrivers(): Observable<Driver[]> {
    return Observable.of(this.drivers);
  }

  public createDriver(driver: Driver): Observable<Driver> {
    return Observable.of(driver);
  }

  public getDriverById(driverId: number): Observable<Driver> {
    if (!driverId) {
      return Observable.throw('invalid carId');
    }
    switch (driverId) {
      case 1: {
        return Observable.of(
          this.drivers[0]
        );
      }
      case 2: {
        return Observable.of(
          this.drivers[1]
        );
      }
      case 3: {
        return Observable.of(
          this.drivers[2]
        );
      }
      case 4: {
        return Observable.of(
          this.drivers[3]
        );
      }
      default: {
        break;
      }
    }
  }

  public updateDriver(driver: Driver): Observable<Driver> {
    return Observable.of(driver).delay(3000);
  }

  public deleteDriverById(carId: number): Observable<null> {
    return null;
  }
}
