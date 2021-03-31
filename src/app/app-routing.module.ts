import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

// Es para maperar los componentes, creamos una constante de tipo routes, para que nos lleve a las rutas que tenemos mapeadas
const routes: Routes = [

  {
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'contact',
  component: ContactComponent
},{
  path: '**',
  redirectTo: 'home'
}
]


@NgModule({
  declarations: [],
  imports: [
    // Es un clase estatica, cada vez que se utilice una ruta venga y busque al componente que corresponde
    RouterModule.forRoot(routes)
  ],
  exports: [
    // Esto permite que sea visto desde a fuera de la carpeta
    RouterModule

    // otro arrglo para exportar los modules
  ]
})
export class AppRoutingModule { }
