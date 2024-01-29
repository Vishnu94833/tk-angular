import { Component } from '@angular/core';
import { ExternalDocumentService } from './external-document.service';

@Component({
  selector: 'app-external-document',
  templateUrl: './external-document.component.html',
  styleUrls: ['./external-document.component.scss']
})
export class ExternalDocumentComponent {
  externalDocumentContent: string | undefined;

  constructor(private externalDocumentService: ExternalDocumentService) { }

  ngOnInit(): void {
    const externalDocumentUrl = 'http://localhost:3000/lipsum';
    debugger
    this.externalDocumentService.getExternalDocumentContent(externalDocumentUrl)
      .subscribe(content => {
        this.externalDocumentContent = content;
      });
  }
}
