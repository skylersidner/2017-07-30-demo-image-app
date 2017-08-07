import { Component, Input } from '@angular/core';
import { Item } from '../../classes/item';

@Component({
    selector: 'list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: [ 'list-item.component.css']
})
export class ListItem  {
    @Input() item: Item;

    isSourceError = false;
    noImage = '(Image not available)';

    onSourceError() {
        this.isSourceError = true;
    }

}
