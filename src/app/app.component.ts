import { Component } from '@angular/core';
import { LinkerService } from "app/linker.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LinkerService]
})
export class AppComponent {
  title = 'app';
}
