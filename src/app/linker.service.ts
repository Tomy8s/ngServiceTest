import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LinkerService {
  private selected = new BehaviorSubject(null);
  selected$ = this.selected.asObservable();

  select(animal): void {
    this.selected.next(animal);
    console.log(this.selected);
  }
  constructor() { }

}
