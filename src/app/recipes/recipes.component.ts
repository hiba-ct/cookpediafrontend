import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../services/api.service';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
p:number=1;
searchKey:string=""
  allRecipes:any = []
dummyAllRecipes:any=[]
cuisineArray:any=[]
mealTypeArray:any=[]
  constructor(private api:ApiService){}/* dependency inject */

  ngOnInit(){
  this.getAllRecipes()
  }

  getAllRecipes(){/* api call funcn */
  this.api.getAllRecipeAPI().subscribe((res:any)=>{/* observable ne subscribe cheyyenam.promise nu then um catch lum koduk */
  this.allRecipes=res
this.dummyAllRecipes=this.allRecipes
  console.log(this.allRecipes);
this.allRecipes.forEach((item:any)=>{
!this.cuisineArray.includes(item.cuisine)&&this.cuisineArray.push(item.cuisine)
/* !this.mealtypeArray.includes(item.mealType)&&this.mealtypeArray.push(item.mealType) */
})


console.log(this.cuisineArray);

const dummyMeal=this.allRecipes.map((item:any)=>item.mealType)
console.log(dummyMeal.flat(Infinity));/* 1 diomensional array oronnayi kittan flat */
const flatDummyArray=dummyMeal.flat(Infinity)
flatDummyArray.forEach((item:any)=>{
  !this.mealTypeArray.includes(item)&&this.mealTypeArray.push(item)
})
console.log(this.mealTypeArray);

  })
  }

filterAllRecipes(key:string,value:string){
this.allRecipes=this.dummyAllRecipes.filter((item:any)=>item[key].includes(value))
}


}



