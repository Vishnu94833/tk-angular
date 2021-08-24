import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Emoji, get } from 'src/app/decorators/member.decorator';
import { logMethod } from 'src/app/decorators/method.decorator';
import { DataService } from 'src/app/services/data.service';
class PaymentMethodsModel {
  key: any;
  value: any;
  constructor(key: any, value: any) {
    this.key = key;
    this.value = value;
  }
}
export class Address {
  FirstName?: string;
  LastName?: string;
  Address1?: string;
  Address2?: string;
  Address3?: string;
  City?: string;
  State?: string;
  PostalCode?: string;
  County?: string;
  Country?: string;
  Phone?: string;
  Email?: string;
  CertNo?: string;
  Pin?: string;
}

export class RewardCertificateModel {
  address: Address | undefined;
  certificate: CertificateModel | undefined;
}

export class CertificateModel {
  certificateNo: string = '';
  pin: string = '';
}

export class ListRequest {
  query: string = '';
  page: number = 0;
  size: number = 10;
  sort: string = 'CreatedTimestamp+desc';
  templateName: string = '';
  pagesize: number = 4;
  keyword: string = '';
}

export class CountryModel {
  CountryName: string = '';
  CountryId: string = '';
}

export class PostDepositModel {
  paymentMethod: string = '';
  referenceNumber: string = '';
  amount: number | undefined;
}

@Component({
  selector: 'app-add-reward-certificate',
  templateUrl: './add-reward-certificate.component.html',
  styleUrls: ['./add-reward-certificate.component.css'],
})
// @logged
export class AddRewardCertificateComponent implements OnInit, OnDestroy {
  static COMPONENT_CONFIG: Route = {
    path: 'app-reward-certificate',
    component: AddRewardCertificateComponent,
    children: [],
  };
  address: Address = new Address();
  certificate: CertificateModel = new CertificateModel();
  vm: RewardCertificateModel = new RewardCertificateModel();
  subscriptions: Array<Subscription> = new Array<Subscription>();

  addressForm = this.fb.group({
    paymentmethod: [null, Validators.required],
    refnum: null,
    amount: [null, Validators.required],
  });
  useAddress: any;

  countries: Array<CountryModel> = new Array<CountryModel>();

  states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ];
  payloadData = {
    PopupWidth: '',
    PopupHeight: '',
    ParamUrl: '',
    PopUpTitle: '',
  };

  isAmountRequired: boolean = true;
  isPaymentMethodRequired: boolean = true;

  paymentMethods: Array<PaymentMethodsModel> = new Array<PaymentMethodsModel>();
  postDepositForm: PostDepositModel = new PostDepositModel();

  @Emoji()
  flavor = 'vanilla';

  // @TrackChanges()

  @get('https://jsonplaceholder.typicode.com/posts')
  postList = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  @logMethod
  ngOnInit(): void {
    this.vm.certificate?.pin;
    this.fillName();
    this.getCountries();
    this.getDefaultConfig();
    this.paymentMethods = [
      { key: 'ABCD', value: 'ABCD' },
      { key: 'EFGH', value: 'EFGH' },
      { key: 'IJKL', value: 'IJKL' },
    ];
    // CORS ERROR
    // this.dataService.getVedic('vishnu').subscribe((res) => {
    //   debugger;
    //   console.log(res);
    // });
    this.dataService.getRandomPublicApi().subscribe((res) => {
      debugger;
      console.log(res);
    });

    this.dataService.getConfigStorebyId().subscribe((res) => {
      let data = res.ConfigStoreData.split('=')[1].split(',');
      console.log(res.ConfigStoreData.split('=')[1].split(','));
      let list: Array<PaymentMethodsModel> = new Array<PaymentMethodsModel>();
      data.forEach((element: any) => {
        list.push(new PaymentMethodsModel(element, element));
      });
      console.log(list);
    });
  }

  onReset() {
    // resp.resetForm();
  }

  changeSameBillingAddress() {
    this.subscriptions.push(
      this.dataService.fetchAllData().subscribe((res) => {
        if (this.useAddress) {
          this.address = this.dataService.getAddress(res.OrderLine);
        } else {
          this.address = new Address();
          this.fillName();
        }
      })
    );
  }

  fillName() {
    this.subscriptions.push(
      this.dataService.fetchAllData().subscribe((res) => {
        if (res && (res.CustomerFirstName || res.CustomerLastName)) {
          this.address.FirstName = res.CustomerFirstName;
          this.address.LastName = res.CustomerLastName;
          this.address.Email = res.CustomerEmail ? res.CustomerEmail : '';

          this.address.Phone = res.CustomerPhone ? res.CustomerPhone : '';
        }
      })
    );
  }
  reset(res: NgForm) {
    console.log(res.valid);
    console.log(res.dirty);
    console.log(res.touched);
    console.log(res.errors);

    debugger;
    res.resetForm(res.value);
  }

  openCardInfoDialog(response: any) {
    console.log(this.address);
  }
  onCountryChange() {}

  getCountries() {
    this.subscriptions.push(
      this.dataService.getCountries().subscribe((res: any) => {
        this.countries = res.data;
      })
    );
  }
  getDefaultConfig() {
    this.subscriptions.push(
      this.dataService.getDefaultConfig().subscribe((res) => {
        this.address.Country = res.data.DefaultCountry;
        console.log(`'${res.data.DefaultCountry}'`);
        this.getState(res.data.DefaultCountry);
      })
    );
  }

  getState(countryId: string): any {
    let listRequest: ListRequest = new ListRequest();
    listRequest.size = 200;
    listRequest.query = "CountryId='" + countryId + "'";

    let URL = this.constructListURLWithListRequest(
      listRequest,
      `api/customerengagementfacade/organization/state?query=CountryId='US'`
    );
    console.log(URL);
  }

  public constructListURLWithListRequest(
    request: ListRequest,
    baseURL: string
  ) {
    let params = [];
    let urlWithParams;
    for (var prop in request) {
      // @ts-ignore
      if (request.hasOwnProperty(prop) && request[prop] != null) {
        params.push(
          // @ts-ignore
          encodeURIComponent(prop) + '=' + encodeURIComponent(request[prop])
        );
      }
    }

    if (params.length > 0) {
      urlWithParams = baseURL + '?' + params.join('&').toString();
    }
    return urlWithParams;
  }

  onSubmit(addressForm: any) {
    console.log(this.postDepositForm);
    addressForm.resetForm();
  }

  ngOnDestroy() {
    console.log('COMPONENT DESTROYED');
    this.subscriptions.forEach((e) => {
      e.unsubscribe();
    });
  }

  dispatchOnClick() {
    let data = 'COMPONENT WORKING BEHOND NEXT LEVEL';
    let event = new CustomEvent('loadPopUp', { detail: data });

    parent.window.dispatchEvent(event);
  }

  pattern =
    /^([^@\s\."'\(\)\[\]\{\}\\/,:;]+\.)*[^@\s\."'\(\)\[\]\{\}\\/,:;]+@[^@\s\."'\(\)\[\]\{\}\\/,:;]+(\.[^@\s\."'\(\)\[\]\{\}\\/,:;]+)+$/;

  isEmailValid: boolean | undefined;
  onEmailChange(email: any) {
    if (email.value) {
      this.isEmailValid = this.pattern.test(email.value);
    }
  }
}
