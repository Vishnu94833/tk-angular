import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

export class Flight {
  FlightType: string = 'roundtrip';
  From: string = 'LAX';
  To: string = 'DFW';
  Depart: string = '2023-03-22';
  Return: string = '2023-03-23';
  Passengers: number = 3;
}

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss'],
})
export class ReactiveFormExampleComponent implements OnInit {
  flightForm: UntypedFormGroup;

  airports: { code: string; name: string }[] = [
    { code: 'JFK', name: 'John F. Kennedy International Airport' },
    { code: 'LAX', name: 'Los Angeles International Airport' },
    { code: 'ORD', name: 'Hare International Airport' },
    { code: 'DFW', name: 'Dallas Fort Worth International Airport' },
  ];

  flightType: string = 'roundtrip';
  flightTypes: string[] = ['roundtrip', 'oneway'];

  passengerOptions: number[] = [1, 2, 3, 4, 5];

  cars:any = []

  constructor(private fb: UntypedFormBuilder) {
    this.flightForm = this.fb.group({
      flightType: [this.flightType, Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: ['', Validators.required],
      return: [''],
      passengers: [1, Validators.required],
    });
  }

  ngOnInit(): void {
    
    console.log(this.flightForm);
  }

  setUpForm(cars: any[] ) {
    this.flightForm.addControl('cars',new UntypedFormArray(cars.map((car) => this.createCar(car))))
    // return new FormGroup({
    //   cars: new FormArray(cars.map((car) => this.createCar(car)))
    // });
  }

  get carsFormArray() {
    return (this.flightForm.get('cars') as UntypedFormArray);
  }

  addNewCar() {
    const newCar = {
      make: '',
      model: '',
      year: null,
      color: ''
    };
    this.cars = [
      {
        make: 'chevrolet',
        model: 'camaro',
        year: 1987,
        color: 'red'
      },
      {
        make: 'chevrolet',
        model: 'corvette',
        year: 2001,
        color: 'black'
      },
      {
        make: 'ford',
        year: 2015,
        color: 'blue',
        model: 'corvette',
      }
    ];
    this.setUpForm(this.cars);
    this.flightForm.patchValue(this.cars);
    // @ts-ignore
    this.cars.splice(0,0,newCar);
    this.carsFormArray.insert(0, this.createCar(newCar))
  }

  createCar(car: any) {
    return new UntypedFormGroup({
      details: new UntypedFormGroup({
        make: new UntypedFormControl(car.make, Validators.required),
        model: new UntypedFormControl(car.model),
        year: new UntypedFormControl(car.year, Validators.required)
      }),
      appearance: new UntypedFormGroup({
        color: new UntypedFormControl(car.color, Validators.required)
      })
    })
  }

  onSubmit(flightForm: UntypedFormGroup) {
    let flight: Flight = <Flight>flightForm.value;
    console.log(flight);
  }
}
