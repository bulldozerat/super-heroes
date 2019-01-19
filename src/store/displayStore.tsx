import { observable, action } from 'mobx';

export class displayStore {
    @observable homePage = "flex";
    @observable allHeroesPage = "none";
    @observable searchPage = "none";
}

export default new displayStore();