// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { Injectable } from '@angular/core';
import { DragDropConfig } from './dnd.config';
import { isPresent } from './dnd.utils';
var DragDropData = /** @class */ (function () {
    function DragDropData() {
    }
    return DragDropData;
}());
export { DragDropData };
export function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService.decorators = [
        { type: Injectable },
    ];
    return DragDropService;
}());
export { DragDropService };
export function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = /** @class */ (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DragDropSortableService.ctorParameters = function () { return [
        { type: DragDropConfig, },
    ]; };
    return DragDropSortableService;
}());
export { DragDropSortableService };
