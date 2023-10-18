import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-publications',
  templateUrl: './content-publications.component.html',
  styleUrls: ['./content-publications.component.scss']
})
export class ContentPublicationsComponent implements AfterViewInit {
  @Input() publications!: any;

  ngAfterViewInit(): void {
    console.log(this.publications)
  }

}
