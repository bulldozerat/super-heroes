import { observable, action } from 'mobx';

export class heroStore {
  @observable heroData: string[] = [];
  APIkey: string = "2481591191854227";
  
  @action fetchSingleCard = async () => {
    const response = await fetch(`https://superheroapi.com/api.php/${this.APIkey}/search/spider-man`);
    const data = await response.json();

    this.heroData = data;
    console.log(data);
    
  }
}

export default new heroStore();