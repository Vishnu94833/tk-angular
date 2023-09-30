import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo.model';
import { JsonPlaceholderService } from 'src/app/core/services/json-placeholder.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined;
  valueFromButton = '';
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.todos$ = this.jsonPlaceholderService.getTodos();
  }

  onButtonClick(req: string) {
    this.valueFromButton = req;
  }
}
