import { Injectable } from '@angular/core';
import { HerosRepositoryService } from '../repositories/heros-repository.service';
import { HttpClient } from '@angular/common/http';
import { HeroRepository } from 'src/app/core/models/hero/hero.repository';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/core/models/hero/hero.model';


@Injectable({
  providedIn: 'root'
})
export class HerosService implements HeroRepository{

  constructor(private heroRepository: HerosRepositoryService) { }


  getHeroById(id: number): Observable<Hero> {
    return this.heroRepository.getHeroById(id);
  }


}
