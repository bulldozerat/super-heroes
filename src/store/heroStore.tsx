import { observable, action } from 'mobx';

export class heroStore {
  @observable heroData: string[] = [];
  @observable heroTypes: object = [];

  APIkey: string = "2481591191854227";
  
  @action fetchHero = async () => {
    const response = await fetch(`https://superheroapi.com/api.php/${this.APIkey}/search/spider-man`);
    const data = await response.json();

    this.heroData = data;
    this.heroTypes = data.results;
    console.log(data.results);
  }
}

export default new heroStore();