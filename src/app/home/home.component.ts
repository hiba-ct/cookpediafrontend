import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

allRecipes:any = []

constructor(private api:ApiService){}/* dependency inject */

ngOnInit(){
this.getAllRecipes()
}

getAllRecipes(){/* api call funcn */
this.api.getAllRecipeAPI().subscribe((res:any)=>{/* observable ne subscribe cheyyenam.promise nu then um catch lum koduk */
this.allRecipes=res.slice(0,6)
console.log(this.allRecipes);
})
}
}
