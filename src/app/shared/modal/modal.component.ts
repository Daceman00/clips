import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  @Input() modalID = '';
  constructor(public modal: ModalService, private el: ElementRef){
    
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
   document.body.removeChild(this.el.nativeElement); 
  }

  closeModal(){
    return this.modal.toggleModal(this.modalID);
  }
}
