import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './component/header/header.component';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import {MatToolbarModule } from '@angular/material/toolbar'
import {RouterModule} from '@angular/router';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoutComponent
  ],
  imports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    HeaderComponent,
    LogoutComponent
  ],
  providers: [],
})
export class SharedModule { }
