import { Component } from '@angular/core';

@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: [ './image-detail.component.css']
})
export class ImageDetail  {

    imageSource = 'something';
    noImage = '(Image not available)';

}
