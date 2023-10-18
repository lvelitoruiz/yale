import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  @Input() image!: string;

  ngAfterViewInit(): void {
    // console.log(this.image);
  }

}
