import { observable, action } from 'mobx';

export class heroInfoStore {
    @observable heroInfo: any = [];
    @observable biography: any = [];
    @observable appearance: any = [];
    @observable work: any = [];
    @observable connections: any = [];

    APIkey: string = "2481591191854227";

    @action fetchOneByIdHero = async (e: any) => {
        const heroId: string = e.target.getAttribute('data-hero-id');
        const response = await fetch(`https://superheroapi.com/api.php/${this.APIkey}/${heroId}`);
        const data = await response.json();

        this.heroInfo = data;
        this.biography = data.biography;
        this.appearance = data.appearance;
        this.work = data.work;
        this.connections = data.connections;
    }
}

export default new heroInfoStore();