import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-img-cropper-modal';
  closeResult: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private modalService: NgbModal) { }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}
open(content) {
  this.modalService.open(content, {ariaLabelledBy:'modal-basic-title'})
  .result.then((result) => {
    this.closeResult = `Close with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}


getDismissReason(reason: any): string {
  if(reason === ModalDismissReasons.ESC) {
    return 'by Pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
}
