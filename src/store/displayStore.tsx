import { observable, action } from 'mobx';
import listCharacters from '../util/listCharacters';
import heroStore from './heroStore';

export class displayStore {
    @observable heroesArray: any = null;

    @action searchHeroes = (e: any) => {
        heroStore.hideHero();
        const word = e.target.value;
        
        if(word.length === 0) {
            this.heroesArray = [];  
            return;
        }

        const allHeroesArr = listCharacters.split(",\n").map( (e) => e.trim() );
        
        let matches = allHeroesArr.filter(
            (element: string) => {
                return element.toLowerCase().includes(word.toLowerCase());
            }
        );
        
        this.heroesArray = matches;
    }

    @action activeNavButton = (e: any) => {
        const navBtns: any = document.getElementsByClassName("nav-btn");
        for (let item of navBtns) {
                item.style.background = "#46546b";
        }

        e.target.style.background = "#000";

        console.log(123);
        console.log(e.target);
        
        
    }
}

export default new displayStore();