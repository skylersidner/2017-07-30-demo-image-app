import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Item } from '../../classes/item';

@Component({
    selector: 'comments',
    templateUrl: 'comments.component.html',
    styleUrls: [ 'comments.component.css']
})
export class Comments  {

    constructor(private imageService: ImageService){

    };

    test = "Testing comments!";
}
