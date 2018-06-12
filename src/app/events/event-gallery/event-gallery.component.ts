import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gallery } from '../../models/gallery.model';
import { GalleryService } from '../../services/gallery.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.component.html',
  styleUrls: ['./event-gallery.component.css']
})
export class EventGalleryComponent implements OnInit {
  gallery: Gallery[];
  eventForm: FormGroup;
  subscribtion = new Subscription;
  constructor(private gService: GalleryService) { }

  ngOnInit() {
    // ako se pomeni shte poluchim tuk nov array ot events
    this.subscribtion = this.gService.galleryChanged.subscribe(
      (gallery: Gallery[]) => {
        // prisvoqvame poluchenite eventi na tezi, koito izpolzvame za display
        this.gallery = gallery;
      }
  );
  //
  this.gallery = this.gService.getImages();
    this.initForm();
  }

  private initForm() {
    const imgUrl = '';
// prisvoqvame poletata ot .html
this.eventForm = new FormGroup({
  // trqbva da suvpadat s formControlName v .html
  'imgUrl': new FormControl(imgUrl, Validators.required),
    });
  }

  onSubmit() {
    const image = new Gallery(
      this.eventForm.value['imgUrl']
      );
    this.gService.addToGallery(image);
    console.log(image);
  }
}
