﻿export class AssetManager {
    assetQueue = {};
    assets = {};
    completed = null;
    $assetsLoaded = 0;
    $assetsRequested = 0;

    static instance:AssetManager;


    constructor(completed) {
        this.completed = completed;

    }

    start() {
        for (const name in this.assetQueue) {
            if (this.assetQueue.hasOwnProperty(name)) {
                const img = new Image();

                img.onload = (((that, img, name) => () => {
                    that.$imageLoaded(img, name);
                }))(this, img, name);


                img.src = this.assetQueue[name].url;
            }
        }
    }

    addAsset(name, url, size, base) {
        this.assetQueue[name] = { base, size, url };
        this.$assetsRequested++;
    }

    $imageLoaded(img, name) {
        this.assets[name] = {
            image: img
        };
        this.assets[name].size = this.assetQueue[name].size || { width: img.width, height: img.height };
        this.assets[name].base = this.assetQueue[name].base ||
        { x: this.assets[name].size.width / 2, y: this.assets[name].size.height / 2 };

        this.$assetsLoaded++;
        if (this.$assetsLoaded === this.$assetsRequested) {
            setTimeout(() => {
                    this.completed();
                },
                100);

        }
    }
}