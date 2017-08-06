import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    imagesList: any[] = [];

    getImages(pageNumber?: number) {
        if (pageNumber) {
            let itemsPerPage = 5;
            if (IMAGES.length / itemsPerPage > 0) {
                let startIndex = (itemsPerPage - 1) * pageNumber;
                let endIndex = (itemsPerPage * pageNumber) - 1;
                return this.imagesList = IMAGES.slice(startIndex, endIndex)
            }
        }
        return this.imagesList = IMAGES;
    }

    getImage(id: number) {
        return IMAGES.find(image => image.id === id);
    }

}

const IMAGES = [
    {"id": 1, "url": "/assets/images/animals-q-g-500-500-8.jpg"},
    {"id": 2, "url": "/assets/images/city-q-c-500-500-8.jpg"},
    {"id": 3, "url": "/assets/images/city-q-g-500-500-9.jpg"},
    {"id": 4, "url": "/assets/images/city-q-g-500-500-10.jpg"},
    {"id": 5, "url": "/assets/images/fashion-q-g-500-500-1.jpg"},
    {"id": 6, "url": "/assets/images/fashion-q-g-500-500-5.jpg"},
    {"id": 7, "url": "/assets/images/nightlife-q-c-500-500-8.jpg"},
    {"id": 8, "url": "/assets/images/people-q-c-500-500-7.jpg"},
    {"id": 9, "url": "/assets/images/sports-q-c-500-500-5.jpg"},
    {"id": 10, "url": "/assets/images/technics-q-c-500-500-5.jpg"},
];


