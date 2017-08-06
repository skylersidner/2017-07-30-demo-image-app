"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ImageService = (function () {
    function ImageService() {
        this.imagesList = [];
    }
    ImageService.prototype.getImages = function (pageNumber) {
        if (pageNumber) {
            var itemsPerPage = 5;
            if (IMAGES.length / itemsPerPage > 0) {
                var startIndex = (itemsPerPage - 1) * pageNumber;
                var endIndex = (itemsPerPage * pageNumber) - 1;
                return this.imagesList = IMAGES.slice(startIndex, endIndex);
            }
        }
        return this.imagesList = IMAGES;
    };
    ImageService.prototype.getImage = function (id) {
        return IMAGES.find(function (image) { return image.id === id; });
    };
    return ImageService;
}());
ImageService = __decorate([
    core_1.Injectable()
], ImageService);
exports.ImageService = ImageService;
var IMAGES = [
    { "id": 1, "url": "/assets/images/animals-q-g-500-500-8.jpg" },
    { "id": 2, "url": "/assets/images/city-q-c-500-500-8.jpg" },
    { "id": 3, "url": "/assets/images/city-q-g-500-500-9.jpg" },
    { "id": 4, "url": "/assets/images/city-q-g-500-500-10.jpg" },
    { "id": 5, "url": "/assets/images/fashion-q-g-500-500-1.jpg" },
    { "id": 6, "url": "/assets/images/fashion-q-g-500-500-5.jpg" },
    { "id": 7, "url": "/assets/images/nightlife-q-c-500-500-8.jpg" },
    { "id": 8, "url": "/assets/images/people-q-c-500-500-7.jpg" },
    { "id": 9, "url": "/assets/images/sports-q-c-500-500-5.jpg" },
    { "id": 10, "url": "/assets/images/technics-q-c-500-500-5.jpg" },
];
//# sourceMappingURL=image.service.js.map