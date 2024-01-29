import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { Subform1Component } from './components/reactive-form-example/subform1/subform1.component';
import { UniversityImpl } from './design-patterns/abstract-example/university-impl';
import { UniversityInterface } from './design-patterns/abstract-example/university.interface';
import { JsonPlaceHolderInterceptor } from './jsonplaceholder/services/jsonplaceholder-http.interceptor';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent, Subform1Component, ReactiveFormExampleComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({}),
    // FlexLayoutModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    DatePipe,
    { provide: UniversityInterface, useClass: UniversityImpl },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JsonPlaceHolderInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
