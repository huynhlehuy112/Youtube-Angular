import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
=======
=======
import { TrendingComponent } from './components/trending/trending.component';
>>>>>>> d869e43737a5ec68038f6a49ca20211e4402e436
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  {
    path:'library' , component: LibraryComponent, 
<<<<<<< HEAD
>>>>>>> 0f16afb16a6688394764cbaa15fef2306e8db5bc
  }
=======
  },
  {
  path:'trending',component:TrendingComponent,

}
>>>>>>> d869e43737a5ec68038f6a49ca20211e4402e436
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
