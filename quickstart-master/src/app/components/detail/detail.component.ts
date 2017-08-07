import { Component, Input } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Item } from '../../classes/item';

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html',
    styleUrls: [ 'detail.component.css']
})
export class Detail  {

    constructor(private imageService: ImageService){

    };

    @Input() item: Item;
    isSourceError = false;
    noImage = '(Image not available)';

    onSourceError() {
        this.isSourceError = true;
    }

}
