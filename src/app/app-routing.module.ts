import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './biodata/details/details.component';
import { ListComponent } from './biodata/list.component';

const routes: Routes = [
  {'path': 'list', 'component': ListComponent,
  // children:[
  //   {'path': 'details/:id', 
  //     'component': DetailsComponent,
  //     'outlet': 'outlet2'
  //   }
  // ]
  },
  {'path': 'details/:id', // This is for routes like http://localhost:4200/list(outlet2:details/1)
    'component': DetailsComponent,
    outlet: 'outlet2'
  },
  {'path': 'list/details/:id', // This is for routes like http://localhost:4200/list/details/1234
    'component': DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
