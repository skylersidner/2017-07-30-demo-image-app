import { Component, Input } from '@angular/core';
import { ImageItem } from '../../../classes/imageItem';

@Component({
    selector: 'image-list-item',
    templateUrl: './image-list-item.component.html',
    styleUrls: [ './image-list-item.component.css']
})
export class ImageListItem  {
    @Input() imageItem: ImageItem;

    isSourceError = false;
    noImage = '(Image not available)';

    onSourceError() {
        this.isSourceError = true;
    }

}
