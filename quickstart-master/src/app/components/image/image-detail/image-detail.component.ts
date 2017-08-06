import { Component, Input } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import { ImageItem } from '../../../classes/imageItem';

@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: [ './image-detail.component.css']
})
export class ImageDetail  {

    constructor(private imageService: ImageService){

    };

    @Input() imageItem: ImageItem;
    isSourceError = false;
    noImage = '(Image not available)';

    onSourceError() {
        this.isSourceError = true;
    }

}
