import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{

  @Input() visible:boolean = false;
  @Input() notFoundMessage: string = "Nem található a keresett termék. Sajnálom :("
  @Input() resetLinkText: string = "Vissza";
  @Input() resetLinkRoute: string = "/";
  
  constructor(){}
  ngOnInit(): void {
    
  }
  color: string = 'black';

  getStyles() {
    return {
      'background-color': this.color,
      'font-size': '16px',
      'border': '1px solid white',
      'padding': '2%',
      'height': '10vh'
    };
  }

  isSpecial: boolean = true;
  isImportant: boolean = false;

  getClass() {
    return {
      'special': this.isSpecial,
      'important': this.isImportant
    };
  }
}
