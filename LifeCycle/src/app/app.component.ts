import {Component, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Angular LifeCycle Hooks';
  constructor() { }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.num.currentValue >> changes.num.previousValue){
      console.log('num went up from: ' + changes.num.previousValue + ' to ' + changes.num.currentValue);
    }
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestory');
  }
  num:number = 0;

  add(){
    console.log('change happend')
    this.num++;
  }
  }
