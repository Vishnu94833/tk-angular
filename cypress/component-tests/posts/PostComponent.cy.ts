import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { JsonPlaceholderService } from 'src/app/core/services/json-placeholder.service';

describe('PostsComponent.cy.ts', () => {
  it('Should check PostsComponent', () => {
    cy.mount(PostsComponent, {
      providers: [JsonPlaceholderService],
      imports: [HttpClientTestingModule],
    });
  });

  it('Should check posts length and button click', () => {
    cy.mount(PostsComponent, {
      providers: [
        {
          provide: JsonPlaceholderService,
          useValue: {
            getPosts: () => of([{ 1: 'vishnu' }, { 2: 'kuppan' }]),
          },
        },
      ],
      imports: [HttpClientTestingModule],
    }).then((wrapper) => {
      cy.get('p#post').should('have.length', 2);
      cy.spy(wrapper.component, 'onButtonClick').as('onButtonClick');
      cy.get('button').contains('Add').click();
      cy.get('@onButtonClick').should('have.been.called');
    });
  });
});
