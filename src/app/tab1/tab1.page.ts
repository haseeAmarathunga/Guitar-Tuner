import {Component, OnInit} from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private speechRecognition: SpeechRecognition) {}

  ngOnInit() {
    this.speechRecognition.isRecognitionAvailable()
        .then((available: boolean) => console.log(available));
  }
}
