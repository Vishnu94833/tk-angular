import { TestBed } from '@angular/core/testing';
import { CustomHttpInterceptor } from './custom-http.interceptor';
import { environment } from 'src/environments/environment';

describe('HttpInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [CustomHttpInterceptor, environment],
    })
  );

  it('should be created', () => {
    const interceptor: CustomHttpInterceptor = TestBed.inject(
      CustomHttpInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
