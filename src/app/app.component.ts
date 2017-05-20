import { Component } from '@angular/core';
import {ContainerItem} from './components/container/container.item';
import {TexteBox} from './components/field/texte-box';
import {TexteArea} from './components/field/texte-area';
import {RenderComponent} from './components/render/render.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Angular Forms';
  sectionsListe: Array<Object>;

  constructor() {
    this.sectionsListe = [
      {
        order: 0,
        name: 'description',
        icon: 'icone-description',
        item: new ContainerItem(
          RenderComponent,
          {
            fields: [
              new TexteBox({
                key: 'libelle',
                label: 'Libellé',
                value: 'exemple de champ texte rempli',
                order: 1,
                icon: 'icone-libelle'
              }),
              new TexteArea({
                key: 'description',
                label: 'Description',
                value: 'Les Tortiglonis ont des origines napolitaines très anciennes et sont parmi les ' +
                'vedettes les plus populaires et appréciées de la cuisine italienne',
                order: 2,
                icon: 'icone-description-section'
              }),
              new TexteBox({
                key: 'denominationLegale',
                label: 'Dénomination légale de vente',
                order: 3,
                icon: 'icone-denomination'
              }),
              new TexteBox({
                key: 'tracabilite',
                label: 'Tracabilité n° lot',
                order: 4,
                icon: 'icone-tracabilite'
              })
            ]
          }
        )
      }
    ];
  }
}
