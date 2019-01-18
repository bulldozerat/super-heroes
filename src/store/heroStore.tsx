import { observable, action, computed } from 'mobx';

export class heroStore {
  @observable heroData: string[] = [];
  @observable heroTypes: object = [];
  @observable characterBtnText: string = "See more about this character";

  APIkey: string = "2481591191854227";
  
  @action fetchHero = async () => {
    const response = await fetch(`https://superheroapi.com/api.php/${this.APIkey}/search/hulk`);
    const data = await response.json();

    this.heroData = data;
    this.heroTypes = data.results;
  }

  @action visibilityInfoSection = (e: any) => {
    const selector = e.target.getAttribute('data-hero-class');
    const targetElement: any = document.getElementsByClassName(selector)[0];
    const isVisible = targetElement.offsetParent !== null;
    
    if(isVisible){
      targetElement.style.display = "none";
      this.characterBtnText = "See more about this character";
    }else{
      targetElement.style.display = "block";
      this.characterBtnText = "Hide character info";
    }
    
  }
}

export default new heroStore();