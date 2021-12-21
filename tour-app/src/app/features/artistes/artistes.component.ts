import { Component } from '@angular/core';
import { ArtistesService } from 'src/app/core/services/artistes.service';

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.css']
})
export class ArtistesComponent {
  constructor(private artisteService: ArtistesService) { }

  artistes$ = this.artisteService.getArtistes();

}
