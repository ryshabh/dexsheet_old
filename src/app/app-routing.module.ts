import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
	    component: HomeComponent
	},
	{
		path: 'createProject',
	    component: CreateProjectComponent
	}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
