import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular LifeCycle Hooks';
  private init: string;
  private onchanges: string;
  private docheck: string;
  private aftercontentinit: string;
  private aftercontentchecked: string;
  private afterviewinit: string;
  private aftterviewchecked: string;
  private ondestroy: string;
  ngOnInit() {
    console.log('ngOnInit');
    this.init='i am ngInit method property';
  }
  ngOnChanges(){
    console.log('ngOnChanges');
    this.onchanges='i am ngOnChanges method property'
  }
  ngDoCheck(){
    console.log('ngDoCheck');
    this.docheck='i am ngDoCheck method property'

  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    this.aftercontentinit='i am ngAfterContentInit method property'

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
    this.aftercontentchecked='i am ngAfterContentChecked method property'

  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    this.afterviewinit='i am ngAfterViewInit method property'

  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
    this.aftterviewchecked='i am ngAfterViewChecked method property'

  }
  ngOnDestroy(){
    console.log('ngOnDestory');
    this.ondestroy='i am ngOnDestory method property'

  }
}

