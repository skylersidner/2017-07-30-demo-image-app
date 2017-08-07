import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Item } from '../../classes/item';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html',
    styleUrls: [ 'list.component.css']
})
export class List implements OnChanges {

    constructor(private imageService: ImageService){
        this.visibleList = this.imageService.getImages();
    }

    visibleList: any[] = [];
    pageNumber:number = 1;
    selectedListItem: Item;
    isShowingDetail = false;

    ngOnChanges() {
        this.visibleList = this.imageService.getImages(this.pageNumber);
    }

    onSelect(Item: Item) {
        this.selectedListItem = Item;
        this.isShowingDetail = true;
    }

    onClose() {
        this.isShowingDetail = false;
        this.selectedListItem = null;
    }
}
