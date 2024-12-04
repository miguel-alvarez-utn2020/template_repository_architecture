import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText } from '@ionic/angular/standalone';
import { HerosService } from 'src/app/data/services/heros.service';
import { Hero } from 'src/app/core/models/hero/hero.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText]
})
export class HomePage implements OnInit {

  public hero: Hero;

  constructor(private heroService: HerosService) {
    this.hero = {} as Hero
  }

  ngOnInit() {
    this.heroService.getHeroById(13).subscribe({
      next: (hero: Hero) => {
        console.log(hero);
        this.hero = hero;
      },
      error: (error) => {
        console.log('Error', error);
      },
    })
  }

}
