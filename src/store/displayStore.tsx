import { observable, action } from 'mobx';
import listCharacters from '../util/listCharacters';
import heroStore from './heroStore';

export class displayStore {
    @observable homePage: string = "flex";
    @observable allHeroesPage: string = "none";
    @observable searchPage: string = "none";
    @observable heroesArray: any = null;

    @action searchHeroes = (e: any) => {
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

    @action navLogic = (e: any) => {
        let navBtns: any = document.getElementsByClassName("nav-btn");
        
        //change nav active button
        for (let item of navBtns) {
            if (item.classList.contains('nav-active')) {
                item.classList.remove('nav-active');
            }
        }
        e.target.classList.add('nav-active');

        //change what content is shown
        let order = e.target.getAttribute("data-order");
        
        if(order === "1"){
            this.homePage = "flex";
            this.allHeroesPage = "none";
            this.searchPage = "none";
        }else if( order === "2"){
            this.homePage = "none";
            this.allHeroesPage = "flex";
            this.searchPage = "none";
            heroStore.heroTypes = [];
            this.heroesArray = null;
        }else if( order === "3"){
            this.homePage = "none";
            this.allHeroesPage = "flex";
            this.searchPage = "block";
            heroStore.heroTypes = [];
            this.heroesArray = [];
        }
    }
}

export default new displayStore();