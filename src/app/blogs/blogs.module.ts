import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BlogsRoutingModule } from './blogs-routing.module';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

import { BlogsService } from './services/blogs.service';

const blogsRoutes: Routes = [
  { path: 'blogs', component: BlogsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule,
    RouterModule.forChild(blogsRoutes)
  ],
  declarations: [
    BlogsComponent,
    BlogComponent,
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule { }
