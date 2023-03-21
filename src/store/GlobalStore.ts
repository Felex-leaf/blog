import { makeAutoObservable } from 'mobx';

class ThemeInstance {
  show = false;

  constructor() {
    makeAutoObservable(this);
  }

  setShowMeun(show: boolean): void {
    this.show = show;
  }
}

export default new ThemeInstance();
