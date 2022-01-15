import { Component, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  chapters = [
    { name: "सीखो" },
    { name: "बीरबल की चतुराई" },
    { name: "सुन्दर कौन" },
    { name: "जागो प्यारे" },
    { name: "चन्दामामा" },
    { name: "स्वच्छता" },
    { name: "पौधे की आत्मकथा" },
    { name: "तितली" },
    { name: "सीखो" },
    { name: "सीखो" },
    { name: "सीखो" }
  ];

  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;

  player: Plyr;


  animation: boolean = false;
  lesson: boolean = false;
  lessonName: string = "";

  videoSources: Plyr.Source[] = [
    {
      src: 'JTlZe21XcKo',
      provider: 'youtube',
    },
  ];

  played() {
    this.player.play();
  }

  playAnim() {
    this.lesson = false;
    this.animation = true;
  }

  getLessonName(lessonName: string) {
    this.animation = false;
    this.lesson = true;
    if (lessonName == "बीरबल की चतुराई") {
      console.log("lessonNamw ", lessonName);
      this.lessonName = "../assets/vedio/book.pdf";
      //this.lessonName = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
    }
  }
}
