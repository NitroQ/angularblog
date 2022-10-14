import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {component:HomeComponent, path: ''},
  {component:ContactComponent, path: 'contact'},
  {component:GalleryComponent, path: 'gallery' },
  {component:LoginComponent, path: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
