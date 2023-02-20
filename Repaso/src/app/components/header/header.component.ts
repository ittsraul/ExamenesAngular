import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 currView : string = "one";
  src : string = '';
  img : string = 'https://static.eldiario.es/clip/0a1ee554-bcf7-4c32-9c2a-37e76297ef6f_16-9-discover-aspect-ratio_default_0.jpg';

 changeView(event : MouseEvent)
 {

  const elem : HTMLElement = <HTMLElement>event.target;

  if (elem.textContent === "Vista 2") {
    this.currView = "two";
    this.img = "../../../assets/darthVader.webp";
  }else if(elem.textContent === "Vista 1"){
    this.currView = "one";
    this.img = 'https://static.eldiario.es/clip/0a1ee554-bcf7-4c32-9c2a-37e76297ef6f_16-9-discover-aspect-ratio_default_0.jpg';
  }
 }
}
