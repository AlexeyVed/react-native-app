// import observable from mobx
import {observable, computed, action} from 'mobx';

//create a store with count observable
class Store {
  @observable
  activePage = 'Welcome!';

  @computed
  get pageMessage() {
    return 'You are lacated at ' + this.activePage;
  }

  @action
  updatePage = page => {
    this.activePage = page;
  };
}

//export Store
export default new Store();
