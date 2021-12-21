import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArtistesComponent } from './artistes/artistes.component';

const routes: Routes = [
  { path: '', component: ArtistesComponent},
];

@NgModule({
  declarations: [ArtistesComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class FeaturesModule {}
