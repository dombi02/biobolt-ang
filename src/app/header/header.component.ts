import { AfterViewInit, Component, OnInit, Output , EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Input() logged?: firebase.default.User | null;
  @Output() log_out: EventEmitter<boolean> = new EventEmitter();
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }
  navClose(logOut?: boolean) {
    
    this.onCloseSidenav.emit(true);

    if(logOut === true){
      this.log_out.emit(logOut)
    }
  }
}
