import storage from '@/utils/storage';
import { makeAutoObservable } from 'mobx';

class ThemeInstance {
  isDark = storage.get<boolean>('isDark');
  constructor() {
    makeAutoObservable(this);
  }
  setIsDark(isDark: boolean): void {
    this.isDark = isDark;
  }
}

export default new ThemeInstance();
