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
var image_service_1 = require("../../services/image.service");
var List = (function () {
    function List(imageService) {
        this.imageService = imageService;
        this.visibleList = [];
        this.pageNumber = 1;
        this.isShowingDetail = false;
        this.visibleList = this.imageService.getImages();
    }
    List.prototype.ngOnChanges = function () {
        this.visibleList = this.imageService.getImages(this.pageNumber);
    };
    List.prototype.onSelect = function (Item) {
        this.selectedListItem = Item;
        this.isShowingDetail = true;
    };
    List.prototype.onClose = function () {
        this.isShowingDetail = false;
        this.selectedListItem = null;
    };
    return List;
}());
List = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.css']
    }),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], List);
exports.List = List;
//# sourceMappingURL=list.component.js.map