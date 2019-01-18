import { observable, action } from 'mobx';

export class homeStore {
    @observable heroData: string[] = [];

    APIkey: string = "2481591191854227";


}

export default new homeStore();