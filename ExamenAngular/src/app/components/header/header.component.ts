import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public fondo :string = "";
  public nombre :string ="";
  img :string ="";
  /* contador :number = 0; */
  public onSubmit(): void {
    if (this.nombre="viewOne") {
      this.fondo = "case1";
    }else if(this.nombre="viewTwo"){
      this.fondo = "case2";
    }else{
      
    }

  }

    

}

