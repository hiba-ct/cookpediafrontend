 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';
import { RequestListComponent } from './request-list/request-list.component';
import { UsrsListComponent } from './usrs-list/usrs-list.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
/* http://localhost:4200/admin */
{
path:"",component:DashboardComponent,title:"Admin Dashboard"
},

/* http://localhost:4200/admin/download-list */
{
  path:"download-list",component:DownloadListComponent,title:"Recipe Download list"
  },
/* http://localhost:4200/admin/recipe-list */
{
  path:"recipe-list",component:RecipeListComponent,title:"Admin Dashboard"
  },

/* http://localhost:4200/admin/user-list */
{
  path:"user-list",component:UsrsListComponent,title:"User List"
  },

/* http://localhost:4200/admin/request-list */
 {
  path:"request-list",component:RequestListComponent,title:"Client Request list"
  },

/* http://localhost:4200/admin/recipe-add */
{
  path:"recipe/add",component:ManageRecipeComponent,title:"Add Recipe Page"
  },

/* http://localhost:4200/admin/recipe/id/edit */
 {
  path:"recipe/:id/edit",component:ManageRecipeComponent,title:"Edit Recipe Page"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }




