import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GameDetailService} from '../../providers/game-detail-service';

/*
  Generated class for the GameDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html'
})
export class GameDetailPage {

  steamID;
  gameDetails;

  title;
  requiredAge;
  detailedDescription;
  aboutTheGame;
  headerImage;
  pc_requirements;
  mac_requirements;
  linux_requirements;


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameDetailService: GameDetailService) {}

  ionViewDidLoad() {
    this.getGameDetail();
  }

  getGameDetail() {
    this.gameDetailService.getGameDetail(this.navParams.get('game').gameID)
      .then(game => {
        this.steamID = game.info.steamAppID;
        this.gameDetailService.getSteamDetail(this.steamID)
          .then(steamDetails => {
            this.gameDetails = steamDetails[this.steamID].data;
            console.log(this.gameDetails);
            this.title = this.gameDetails.name;
            this.requiredAge = this.gameDetails.required_age;
            this.detailedDescription = this.gameDetails.detailed_description;
            this.aboutTheGame = this.gameDetails.about_the_game;
            this.headerImage = this.gameDetails.header_image;
            this.pc_requirements = this.gameDetails.pc_requirements.minimum;
            this.mac_requirements = this.gameDetails.mac_requirements.minimum;
            this.linux_requirements = this.gameDetails.linux_requirements.minimum;
          });
      });
  }

}
