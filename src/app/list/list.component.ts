import { Component, OnInit } from '@angular/core';
import { LinkerService } from "app/linker.service";

@Component({
  selector: 'app-list',
  template: `<ul><li *ngFor="let animal of animals" (click)="select(animal)">{{animal}}</li></ul>`,
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  animals: string[] = ['kitten','puppy','duckling','foal','lamb','piglet'];
  selected: string;
  constructor(private linker: LinkerService) { }

  select(animal): void {
    this.selected = animal;
    this.linker.select(animal);
    console.log('selected: '+this.selected);
  };

  ngOnInit() {
  }

}
