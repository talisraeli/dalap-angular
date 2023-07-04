import { Component } from '@angular/core';
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-opinion-share',
  templateUrl: './opinion-share.component.html',
  styleUrls: ['./opinion-share.component.sass'],
})
export class OpinionShareComponent {
  whatsappIcon = faWhatsapp;
  facebookIcon = faFacebook;
  twitterIcon = faTwitter;
  shareIcon = faShareNodes;
}
