import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import { ImageItem } from '../../../classes/imageItem';

@Component({
    selector: 'image-list',
    templateUrl: './image-list.component.html',
    styleUrls: [ './image-list.component.css']
})
export class ImageList implements OnChanges {

    constructor(private imageService: ImageService){
        this.visibleImageList = this.imageService.getImages();
    }

    visibleImageList: any[] = [];
    pageNumber:number = 1;
    selectedListItem: ImageItem;
    isShowingDetail = false;

    ngOnChanges() {
        this.visibleImageList = this.imageService.getImages(this.pageNumber);
    }

    onSelect(imageItem: ImageItem) {
        this.selectedListItem = imageItem;
        this.isShowingDetail = true;
    }

    onClose() {
        this.isShowingDetail = false;
        this.selectedListItem = null;
    }
}
