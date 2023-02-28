import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {routes} from './app/routes'


bootstrapApplication(AppComponent, {
  providers:[
      provideRouter(routes)
  ]

})
.catch(err => console.error(err));
