import { Component, OnInit } from '@angular/core';
import { LinkerService } from "app/linker.service";

@Component({
  selector: 'app-show',
  template: `<p *ngIf="!selected">Select a cute animal</p><img *ngIf="selected" width="500" src="assets/imgs/{{selected}}.jpg">`,
  styleUrls: ['./show.component.css'],
  providers: []
})
export class ShowComponent implements OnInit {
  selected: string;
  constructor(private linker: LinkerService) { }

  ngOnInit() {
    this.linker.selected$.subscribe(animal => {
      this.selected = animal;
    })
  }
}
