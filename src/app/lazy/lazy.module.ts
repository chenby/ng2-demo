import { NgModule } from '@angular/core';
import { lazyComponent }   from './lazy.components';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', component: lazyComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [lazyComponent]
})
export class LazyModule { }