import { observable, action } from 'mobx';

export class heroStore {
  @action fetchSingleCard = async () => {
    const response = await fetch(`https://superheroapi.com/api.php/2481591191854227/search/spider-man`);
    const data = await response.json();

    console.log(data);
    
  }
}

export default new heroStore();