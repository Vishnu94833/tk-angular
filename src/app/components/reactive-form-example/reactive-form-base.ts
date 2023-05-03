import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Flight {
    FlightType: string = 'roundtrip';
    From: string = 'LAX';
    To: string = 'DFW';
    Depart: string = '2023-03-22';
    Return: string = '2023-03-23';
    Passengers: number = 3;
  }

export class ReactiveFormBase {
    flightForm: FormGroup;

    airports: { code: string; name: string }[] = [
      { code: 'JFK', name: 'John F. Kennedy International Airport' },
      { code: 'LAX', name: 'Los Angeles International Airport' },
      { code: 'ORD', name: 'Hare International Airport' },
      { code: 'DFW', name: 'Dallas Fort Worth International Airport' },
    ];
  
    flightType: string = 'roundtrip';
    flightTypes: string[] = ['roundtrip', 'oneway'];
  
    passengerOptions: number[] = [1, 2, 3, 4, 5];
  
    cars = [
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
    ]
  
    constructor(public fb: FormBuilder) {
      this.flightForm = this.fb.group({
        flightType: [this.flightType, Validators.required],
        from: ['', Validators.required],
        to: ['', Validators.required],
        depart: ['', Validators.required],
        return: [''],
        passengers: [1, Validators.required],
      });
    }
  
    // ngOnInit(): void {
    //   this.setUpForm(this.cars);
    //   this.flightForm.patchValue(this.cars);
    //   console.log(this.flightForm);
    // }
  
    setUpForm(cars: any[] ) {
      this.flightForm.addControl('cars',new FormArray(cars.map((car) => this.createCar(car))))
      // return new FormGroup({
      //   cars: new FormArray(cars.map((car) => this.createCar(car)))
      // });
    }
  
    get carsFormArray() {
      return (this.flightForm.get('cars') as FormArray);
    }
  
    addNewCar() {
      const newCar = {
        make: '',
        model: '',
        year: null,
        color: ''
      };
      // @ts-ignore
      this.cars.splice(0,0,newCar);
      this.carsFormArray.insert(0, this.createCar(newCar))
    }
  
    createCar(car: any) {
      return new FormGroup({
        details: new FormGroup({
          make: new FormControl(car.make, Validators.required),
          model: new FormControl(car.model),
          year: new FormControl(car.year, Validators.required)
        }),
        appearance: new FormGroup({
          color: new FormControl(car.color, Validators.required)
        })
      })
    }
  
    onSubmit(flightForm: FormGroup) {
      let flight: Flight = <Flight>flightForm.value;
      console.log(flight);
    }
}