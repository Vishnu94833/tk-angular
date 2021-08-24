import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  InjectionToken,
  NgModule,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoDashboardComponent } from './components/photo-dashboard/photo-dashboard.component';
import { ThirukurralComponent } from './components/thirukurral/thirukurral.component';
import { MaterialModule } from './material.module';
import { DataService } from './services/data.service';

export const DATA_SERVICE_TOKEN = new InjectionToken<DataService>(
  'DATA_SERVICE_TOKEN'
);

function dataServiceProviderFactory(http: HttpClient): DataService {
  return new DataService(http);
}

@NgModule({
  declarations: [AppComponent, PhotoDashboardComponent, ThirukurralComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
