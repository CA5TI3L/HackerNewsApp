import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  
  {path: 'home', component: TopStoriesComponent},
  {path: 'item/:id', component: StoryDetailsComponent},
  {path: 'user/:id', component: UserComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
