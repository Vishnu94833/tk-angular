import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { PostComponent } from 'src/app/components/posts/post/post.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { JsonPlaceholderService } from 'src/app/core/services/json-placeholder.service';

describe('PostsComponent.cy.ts', () => {
  it('Should check PostsComponent', () => {
    cy.mount(PostsComponent, {
      providers: [JsonPlaceholderService],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
  });

  it('Should check posts length and button click', () => {
    cy.mount(PostsComponent, {
      autoDetectChanges:true,
      autoSpyOutputs: true,
      declarations: [PostComponent, PostsComponent],
      providers: [
        {
          provide: JsonPlaceholderService,
          useValue: {
            getPosts: () => of([{ 1: 'vishnu' }, { 2: 'kuppan' }]),
          },
        },
      ],
      imports: [HttpClientTestingModule, AppModule],
    }).then((wrapper) => {
      cy.get('p#post').should('have.length', 2);
      // cy.spy(wrapper.component, 'onButtonClick').as('onButtonClick')
      cy.get('button').contains('Add').click();
      // cy.get('@onButtonClick').should('have.been.called', 1);
      expect(wrapper.component.valueFromButton).to.equal('test');
    });
  });
});
