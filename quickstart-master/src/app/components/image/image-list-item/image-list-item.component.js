"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var imageItem_1 = require("../../../classes/imageItem");
var ImageListItem = (function () {
    function ImageListItem() {
        this.isSourceError = false;
        this.noImage = '(Image not available)';
    }
    ImageListItem.prototype.onSourceError = function () {
        this.isSourceError = true;
    };
    return ImageListItem;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", imageItem_1.ImageItem)
], ImageListItem.prototype, "imageItem", void 0);
ImageListItem = __decorate([
    core_1.Component({
        selector: 'image-list-item',
        templateUrl: './image-list-item.component.html',
        styleUrls: ['./image-list-item.component.css']
    })
], ImageListItem);
exports.ImageListItem = ImageListItem;
//# sourceMappingURL=image-list-item.component.js.map