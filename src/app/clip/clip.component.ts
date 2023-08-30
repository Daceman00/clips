import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClip } from '../models/clip.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css'],
  providers: [DatePipe]
})
export class ClipComponent implements OnInit{
  id=''
  @ViewChild('videoPlayer', {static:true}) target?: ElementRef
  //player?: videojs.Player
  clip?: IClip

  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    //this.player = videojs(this.target?.nativeElement)
    this.route.data.subscribe(data => {
      this.clip = data.clip as IClip

      this.player?.src({
        src: this.clip.url,
        type: 'video/mp4'
      })
    })
  }

}
