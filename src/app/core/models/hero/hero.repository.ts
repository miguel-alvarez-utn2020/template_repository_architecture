import { Observable } from "rxjs";
import { Hero } from "./hero.model";

export interface HeroRepository {
    getHeroById: (id: number) => Observable<Hero>
}
