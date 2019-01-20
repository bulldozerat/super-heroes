import { observable, action } from 'mobx';
import listCharacters from '../util/listCharacters';

export class displayStore {
    @observable homePage: string = "flex";
    @observable allHeroesPage: string = "none";
    @observable searchPage: string = "none";
    @observable heroesArray: any = null;

    @action searchHeroes = (e: any) => {
        const word = e.target.value;
        const allHeroesArr = listCharacters.split(",\n").map( (e) => e.trim() );
        
        let matches = allHeroesArr.filter(
            (element: string) => {
                return element.toLowerCase().includes(word.toLowerCase());
            }
        );

        this.heroesArray = matches;
        console.log(matches);
        
    }
}

export default new displayStore();