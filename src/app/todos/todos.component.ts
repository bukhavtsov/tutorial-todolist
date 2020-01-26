import {Component, OnInit} from '@angular/core';
import {TodosService} from '../shared/todos.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {
  }

  private loading: boolean = true;
  private searchString = '';

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.onRemove(id);
  }

  ngOnInit() {
    this.todosService.fetchTodos()
      .pipe(delay(2000))
      .subscribe(() => {
        this.loading = false;
      });
  }
}
