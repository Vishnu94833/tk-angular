import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { UsersComponent } from './users.component';
import { MockComponent } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';

fdescribe('UsersComponent', () => {
  let spectator: Spectator<UsersComponent>;
  const createComponent = createComponentFactory({
    component: UsersComponent,
    imports: [HttpClientTestingModule],
    providers: [],
    declarations: [],
    entryComponents: [],
    componentProviders: [
      {
        provide: UsersService,
        useValue: {
          getUsers: () => of({}),
        },
      },
    ], // Override the component's providers
    componentViewProviders: [], // Override the component's view providers
    overrideModules: [], // Override modules
    mocks: [], // Providers that will automatically be mocked
    componentMocks: [], // Component providers that will automatically be mocked
    componentViewProvidersMocks: [], // Component view providers that will be automatically mocked
    detectChanges: false, // Defaults to true
    declareComponent: false, // Defaults to true
    disableAnimations: false, // Defaults to true
    shallow: true, // Defaults to false
  });

  beforeEach(() => (spectator = createComponent()));

  // it('should have a success class by default', () => {
  //   expect(spectator.query('button')).toHaveClass('success');
  // });

  it('should set the class name according to the [className] input', () => {
    expect(spectator).toBeTruthy();
  });
});
