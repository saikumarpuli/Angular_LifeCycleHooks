import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalStorage} from "@ngx-pwa/local-storage";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private deta: any;
  constructor( private localstorage:LocalStorage) { }
  @Input()public number;
  @Output() saving:EventEmitter<any>=new EventEmitter();
  data:any;
  save: any="save";
  get: any="get";
    ngOnInit() {
   }

  savedata() {
    this.localstorage.setItem('data',this.data).subscribe(()=>{});
    console.log("success")
   }

  getdata() {
    this.localstorage.getItem<any>('data').subscribe((user) => {
      this.deta = user;
      this.saving.emit(this.deta)
      console.log(this.deta);
    })
}
}
