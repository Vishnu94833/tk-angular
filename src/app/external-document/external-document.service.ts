// external-document.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalDocumentService {

  constructor(private http: HttpClient) { }

  getExternalDocumentContent(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
