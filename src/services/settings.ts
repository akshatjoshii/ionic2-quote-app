export class SettingsService{
  private altBackground:boolean;
  
  setBackground(isAlt){
    return this.altBackground = isAlt;
  }
  isAltBackground(){
    return this.altBackground;
  }
}
