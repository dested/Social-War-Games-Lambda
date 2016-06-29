var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("layout/directives/draggableDirective", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var DraggableDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DraggableDirective = (function () {
                function DraggableDirective(el) {
                    $(el.nativeElement).draggable({ cancel: ".window .inner-window" });
                }
                DraggableDirective = __decorate([
                    core_1.Directive({
                        selector: '[draggable]',
                    }),
                    __param(0, (core_1.Inject)), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], DraggableDirective);
                return DraggableDirective;
                var _a;
            }());
            exports_1("DraggableDirective", DraggableDirective);
        }
    }
});
System.register("layout/windowComponent/WindowComponent", ['angular2/core', "layout/directives/draggableDirective"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, draggableDirective_1;
    var WindowComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (draggableDirective_1_1) {
                draggableDirective_1 = draggableDirective_1_1;
            }],
        execute: function() {
            WindowComponent = (function () {
                function WindowComponent(el) {
                    this.onclose = new core_2.EventEmitter();
                    this.visible = true;
                }
                WindowComponent.prototype.minimize = function () {
                    this.visible = false;
                };
                WindowComponent.prototype.maximize = function () {
                    this.visible = false;
                };
                WindowComponent.prototype.close = function () {
                    this.visible = false;
                    this.onclose.emit(true);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Boolean)
                ], WindowComponent.prototype, "visible", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], WindowComponent.prototype, "width", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], WindowComponent.prototype, "height", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], WindowComponent.prototype, "left", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], WindowComponent.prototype, "top", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], WindowComponent.prototype, "windowTitle", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_2.EventEmitter !== 'undefined' && core_2.EventEmitter) === 'function' && _a) || Object)
                ], WindowComponent.prototype, "onclose", void 0);
                WindowComponent = __decorate([
                    core_2.Component({
                        selector: 'window',
                        templateUrl: 'app/layout/windowComponent/windowComponent.html',
                        directives: [draggableDirective_1.DraggableDirective],
                    }), 
                    __metadata('design:paramtypes', [(typeof (_b = typeof core_2.ElementRef !== 'undefined' && core_2.ElementRef) === 'function' && _b) || Object])
                ], WindowComponent);
                return WindowComponent;
                var _a, _b;
            }());
            exports_2("WindowComponent", WindowComponent);
        }
    }
});
System.register("layout/objectSelector/ObjectSelector", ['angular2/core', "layout/windowComponent/WindowComponent"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, WindowComponent_1;
    var ObjectSelector;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (WindowComponent_1_1) {
                WindowComponent_1 = WindowComponent_1_1;
            }],
        execute: function() {
            ObjectSelector = (function () {
                function ObjectSelector() {
                }
                ObjectSelector = __decorate([
                    core_3.Component({
                        selector: 'object-selector',
                        templateUrl: 'app/layout/objectSelector/objectSelector.html',
                        directives: [WindowComponent_1.WindowComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ObjectSelector);
                return ObjectSelector;
            }());
            exports_3("ObjectSelector", ObjectSelector);
        }
    }
});
System.register("layout/services/LevelService", ['angular2/core', 'angular2/http'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4, http_1;
    var LevelService, SonicLevelData;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LevelService = (function () {
                function LevelService(http) {
                    this.http = http;
                    this._getLevelsUrl = 'https://api.oursonic.org/levels';
                    this._getLevelUrl = 'https://api.oursonic.org/level';
                }
                LevelService.prototype.getLevels = function () {
                    return this.http.get(this._getLevelsUrl)
                        .map(function (res) { return res.json(); });
                };
                LevelService.prototype.getLevel = function (level) {
                    return this.http.get(this._getLevelUrl + "?level=" + level)
                        .map(function (res) { return res.json(); });
                };
                LevelService = __decorate([
                    core_4.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], LevelService);
                return LevelService;
                var _a;
            }());
            exports_4("LevelService", LevelService);
            SonicLevelData = (function () {
                function SonicLevelData() {
                }
                return SonicLevelData;
            }());
            exports_4("SonicLevelData", SonicLevelData);
        }
    }
});
///<reference path="../../typings/jQuery.d.ts"/>
System.register("common/CanvasInformation", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var CanvasInformation;
    return {
        setters:[],
        execute: function() {
            CanvasInformation = (function () {
                function CanvasInformation(context, domCanvas) {
                    this.Context = context;
                    this.domCanvas = domCanvas;
                    this.canvas = domCanvas[0];
                }
                Object.defineProperty(CanvasInformation, "BlackPixel", {
                    get: function () {
                        if (CanvasInformation.blackPixel == null) {
                            var m = CanvasInformation.create(0, 0, false);
                            m.Context.fillStyle = "black";
                            m.Context.fillRect(0, 0, 1, 1);
                            CanvasInformation.blackPixel = m.canvas;
                        }
                        return CanvasInformation.blackPixel;
                    },
                    enumerable: true,
                    configurable: true
                });
                CanvasInformation.create = function (w, h, pixelated) {
                    var canvas = document.createElement("canvas");
                    return CanvasInformation.CreateFromElement(canvas, w, h, pixelated);
                };
                CanvasInformation.CreateFromElement = function (canvas, w, h, pixelated) {
                    if (w == 0)
                        w = 1;
                    if (h == 0)
                        h = 1;
                    canvas.width = w;
                    canvas.height = h;
                    var ctx = canvas.getContext("2d");
                    if (pixelated) {
                        ctx.mozImageSmoothingEnabled = false; /// future
                        ctx.msImageSmoothingEnabled = false; /// future
                        ctx.imageSmoothingEnabled = false; /// future
                    }
                    return new CanvasInformation(ctx, $(canvas));
                };
                return CanvasInformation;
            }());
            exports_5("CanvasInformation", CanvasInformation);
        }
    }
});
System.register("common/Utils", [], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var Point, DoublePoint, IntersectingRectangle, Rectangle;
    return {
        setters:[],
        execute: function() {
            Point = (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Object.defineProperty(Point.prototype, "x", {
                    get: function () {
                        return this._x | 0;
                    },
                    set: function (val) {
                        this._x = val | 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Point.prototype, "y", {
                    get: function () {
                        return this._y | 0;
                    },
                    set: function (val) {
                        this._y = val | 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Point.Create = function (pos) {
                    return new Point(pos.x, pos.y);
                };
                Point.prototype.Offset = function (windowLocation) {
                    return new Point(this.x + windowLocation.x, this.y + windowLocation.y);
                };
                Point.prototype.NegatePoint = function (windowLocation) {
                    return new Point(this.x - windowLocation.x, this.y - windowLocation.y);
                };
                Point.prototype.Negate = function (x, y) {
                    return new Point(this.x - (x | 0), this.y - (y | 0));
                };
                Point.prototype.Set = function (x, y) {
                    this.x = x;
                    this.y = y;
                };
                return Point;
            }());
            exports_6("Point", Point);
            DoublePoint = (function () {
                function DoublePoint(x, y) {
                    this.x = x;
                    this.y = y;
                }
                DoublePoint.create = function (pos) {
                    return new DoublePoint(pos.x, pos.y);
                };
                DoublePoint.prototype.Offset = function (windowLocation) {
                    return new DoublePoint(this.x + windowLocation.x, this.y + windowLocation.y);
                };
                DoublePoint.prototype.NegatePoint = function (windowLocation) {
                    return new DoublePoint(this.x - windowLocation.x, this.y - windowLocation.y);
                };
                DoublePoint.prototype.Negate = function (x, y) {
                    return new DoublePoint(this.x - (x | 0), this.y - (y | 0));
                };
                DoublePoint.prototype.et = function (x, y) {
                    this.x = x;
                    this.y = y;
                };
                return DoublePoint;
            }());
            exports_6("DoublePoint", DoublePoint);
            IntersectingRectangle = (function (_super) {
                __extends(IntersectingRectangle, _super);
                function IntersectingRectangle(x, y, width, height) {
                    _super.call(this, x, y);
                    this.Width = width;
                    this.Height = height;
                }
                IntersectingRectangle.prototype.Intersects = function (p) {
                    return this.x < p.x && this.x + this.Width > p.x && this.y < p.y && this.y + this.Height > p.y;
                };
                IntersectingRectangle.IntersectsRect = function (r, p) {
                    return r.x < p.x && r.x + r.Width > p.x && r.y < p.y && r.y + r.Height > p.y;
                };
                IntersectingRectangle.IntersectRect = function (r1, r2) {
                    return !(r2.x > r1.x + r1.Width || r2.x + 0 < r1.x || r2.y > r1.y + r1.Height || r2.y + 0 < r1.y);
                };
                return IntersectingRectangle;
            }(Point));
            exports_6("IntersectingRectangle", IntersectingRectangle);
            Rectangle = (function (_super) {
                __extends(Rectangle, _super);
                function Rectangle(x, y, width, height) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (width === void 0) { width = 0; }
                    if (height === void 0) { height = 0; }
                    _super.call(this, x, y);
                    this.Width = width;
                    this.Height = height;
                }
                return Rectangle;
            }(Point));
            exports_6("Rectangle", Rectangle);
        }
    }
});
System.register("game/level/SonicImage", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var SonicImage;
    return {
        setters:[],
        execute: function() {
            SonicImage = (function () {
                function SonicImage(bytes, palette, width, height) {
                    this.Bytes = bytes;
                    this.Palette = palette;
                    this.Width = width;
                    this.Height = height;
                }
                return SonicImage;
            }());
            exports_7("SonicImage", SonicImage);
        }
    }
});
System.register("common/Enums", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var GameState, ClickState, ChunkLayerState, RotationMode;
    return {
        setters:[],
        execute: function() {
            (function (GameState) {
                GameState[GameState["Playing"] = 0] = "Playing";
                GameState[GameState["Editing"] = 1] = "Editing";
            })(GameState || (GameState = {}));
            exports_8("GameState", GameState);
            (function (ClickState) {
                ClickState[ClickState["Dragging"] = 0] = "Dragging";
                ClickState[ClickState["PlaceChunk"] = 1] = "PlaceChunk";
                ClickState[ClickState["PlaceRing"] = 2] = "PlaceRing";
                ClickState[ClickState["PlaceObject"] = 3] = "PlaceObject";
            })(ClickState || (ClickState = {}));
            exports_8("ClickState", ClickState);
            (function (ChunkLayerState) {
                ChunkLayerState[ChunkLayerState["Low"] = 0] = "Low";
                ChunkLayerState[ChunkLayerState["High"] = 1] = "High";
            })(ChunkLayerState || (ChunkLayerState = {}));
            exports_8("ChunkLayerState", ChunkLayerState);
            (function (RotationMode) {
                RotationMode[RotationMode["Floor"] = 134] = "Floor";
                RotationMode[RotationMode["RightWall"] = 224] = "RightWall";
                RotationMode[RotationMode["Ceiling"] = 314] = "Ceiling";
                RotationMode[RotationMode["LeftWall"] = 44] = "LeftWall";
            })(RotationMode || (RotationMode = {}));
            exports_8("RotationMode", RotationMode);
        }
    }
});
System.register("common/Color", [], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var Color;
    return {
        setters:[],
        execute: function() {
            /*[Serializable]*/
            Color = (function () {
                function Color(r, g, b, a) {
                    if (a === void 0) { a = 1; }
                    this.R = r;
                    this.G = g;
                    this.B = b;
                    this.A = a;
                }
                return Color;
            }());
            exports_9("Color", Color);
        }
    }
});
///<reference path="../../typings/Compress.d.ts"/>
System.register("common/Help", ["common/Utils", "common/CanvasInformation", "common/Color", "common/Enums", "game/SonicManager"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Utils_1, CanvasInformation_1, Color_1, Enums_1, SonicManager_1;
    var Help;
    return {
        setters:[
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
            },
            function (CanvasInformation_1_1) {
                CanvasInformation_1 = CanvasInformation_1_1;
            },
            function (Color_1_1) {
                Color_1 = Color_1_1;
            },
            function (Enums_1_1) {
                Enums_1 = Enums_1_1;
            },
            function (SonicManager_1_1) {
                SonicManager_1 = SonicManager_1_1;
            }],
        execute: function() {
            Help = (function () {
                function Help() {
                }
                Help.sin = function (f) {
                    return Help.cos_table[(f + 0x40) & 0xFF];
                };
                Help.cos = function (f) {
                    return Help.cos_table[(f) & 0xFF];
                };
                Help.mod = function (j, n) {
                    return ((j % n) + n) % n;
                };
                Help.scaleSprite = function (image, scale) {
                    var canv = CanvasInformation_1.CanvasInformation.create(image.width * scale.x, image.height * scale.y, true);
                    canv.Context.save();
                    canv.Context.scale(scale.x, scale.y);
                    canv.Context.drawImage(image, 0, 0);
                    canv.Context.restore();
                    return canv;
                };
                Help.scalePixelData = function (scale, data) {
                    var Uint8ClampedArray = data.data;
                    var colors = new Array(Uint8ClampedArray.length / 4 | 0);
                    for (var f = 0; f < Uint8ClampedArray.length; f += 4) {
                        colors[f / 4 | 0] = (Help.colorObjectFromData(Uint8ClampedArray, f));
                    }
                    var d = CanvasInformation_1.CanvasInformation.create(1, 1, false).Context.createImageData(data.width * scale.x, data.height * scale.y);
                    Help.setDataFromColors(d.data, colors, scale, data.width, colors[0]);
                    return d;
                };
                Help.setDataFromColors = function (data, colors, scale, width, transparent) {
                    for (var i = 0; i < colors.length; i++) {
                        var curX = i % width;
                        var curY = i / width | 0;
                        var g = colors[i];
                        var isTrans = false;
                        if (transparent) {
                            if (g.R == transparent.R && g.G == transparent.G && g.B == transparent.B)
                                isTrans = true;
                        }
                        for (var j = 0; j < scale.x; j++) {
                            for (var k = 0; k < scale.y; k++) {
                                var x = (curX * scale.x + j);
                                var y = (curY * scale.y + k);
                                var c = (x + y * (scale.x * width)) * 4;
                                if (isTrans) {
                                    data[c + 0] = 0;
                                    data[c + 1] = 0;
                                    data[c + 2] = 0;
                                    data[c + 3] = 0;
                                    continue;
                                }
                                data[c] = g.R | 0;
                                data[c + 1] = g.G | 0;
                                data[c + 2] = g.B | 0;
                                data[c + 3] = 255;
                            }
                        }
                    }
                };
                Help.getBase64Image = function (data) {
                    var canvas = document.createElement("canvas");
                    canvas.width = data.width;
                    canvas.height = data.height;
                    var ctx = canvas.getContext("2d");
                    ctx.putImageData(data, 0, 0);
                    var dataURL = canvas.toDataURL("image/png");
                    return dataURL;
                };
                Help.colorObjectFromData = function (data, c) {
                    var r = data[c];
                    var g = data[c + 1];
                    var b = data[c + 2];
                    var a = data[c + 3];
                    return new Color_1.Color(r, g, b, a);
                };
                Help.getImageData = function (image) {
                    var canvas = document.createElement("canvas");
                    canvas.width = image.width;
                    canvas.height = image.height;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(image, 0, 0);
                    var data = ctx.getImageData(0, 0, image.width, image.height);
                    return data;
                };
                Help.scaleCsImage = function (image, scale, complete) {
                    var df = image.Bytes;
                    var colors = new Array(df.length);
                    for (var f = 0; f < df.length; f++) {
                        var c = image.Palette[df[f]];
                        colors[f] = new Color_1.Color(c[0], c[1], c[2], c[3]);
                    }
                    var dc = CanvasInformation_1.CanvasInformation.create(1, 1, false);
                    var d = dc.Context.createImageData(image.Width * scale.x, image.Height * scale.y);
                    Help.setDataFromColors(d.data, colors, scale, image.Width, colors[0]);
                    return Help.loadSprite(Help.getBase64Image(d), complete);
                };
                Help.isLoaded = function (element) {
                    return element.getAttribute("loaded") == "true";
                };
                Help.loaded = function (element, set) {
                    element.setAttribute("loaded", set ? "true" : "false");
                };
                Help.loadSprite = function (src, complete) {
                    var sprite1 = new Image();
                    sprite1.addEventListener("load", function (e) {
                        Help.loaded(sprite1, true);
                        if (complete)
                            complete(sprite1);
                    }, false);
                    sprite1.src = src;
                    return sprite1;
                };
                Help.decodeString = function (lvl) {
                    return new Compressor().DecompressText(lvl);
                };
                Help.fixAngle = function (angle) {
                    var fixedAng = Math.floor((256 - angle) * 1.4062) % 360 | 0;
                    var flop = 360 - fixedAng;
                    return Help.degToRad(flop);
                };
                Help.degToRad = function (angle) {
                    return angle * Math.PI / 180;
                };
                Help.sign = function (m) {
                    return m == 0 ? 0 : (m < 0 ? -1 : 1);
                };
                Help.floor = function (spinDashSpeed) {
                    if (spinDashSpeed > 0)
                        return ~~spinDashSpeed;
                    return Math.floor(spinDashSpeed) | 0;
                };
                Help.max = function (f1, f2) {
                    return f1 < f2 ? f2 : f1;
                };
                Help.min = function (f1, f2) {
                    return f1 > f2 ? f2 : f1;
                };
                Help.getCursorPosition = function (ev) {
                    if (ev.originalEvent && ev.originalEvent.targetTouches && ev.originalEvent.targetTouches.length > 0)
                        ev = (ev.originalEvent.targetTouches[0]);
                    if (ev.pageX && ev.pageY)
                        return new Utils_1.Point(ev.pageX, ev.pageY);
                    return new Utils_1.Point(ev.clientX, ev.clientY /*, 0, ev.Which == 3*/);
                };
                Help.stringify = function (obj) {
                    return JSON.stringify(obj, function (key, value) {
                        if (key.indexOf("$") == 0)
                            return undefined;
                        if (key == "image")
                            return undefined;
                        if (key == "imageData")
                            return undefined;
                        if (key == "oldScale")
                            return undefined;
                        if (key == "sprite")
                            return undefined;
                        if (key == "sprites")
                            return undefined;
                        if (key == "index")
                            return undefined;
                        if (key == "_style")
                            return undefined;
                        else
                            return value;
                    });
                };
                Help.safeResize = function (block, width, height) {
                    var m = CanvasInformation_1.CanvasInformation.create(width, height, false);
                    m.Context.drawImage(block.canvas, 0, 0);
                    return m;
                };
                Help.getQueryString = function () {
                    var result = {};
                    var queryString = window.location.search.substring(1);
                    var re = new RegExp("/([^&=]+)=([^&]*)/g");
                    var m;
                    while ((m = re.exec(queryString)) != null) {
                        result[window.decodeURIComponent(m[1])] = window.decodeURIComponent(m[2]);
                    }
                    return result;
                };
                Help.merge = function (base, update) {
                    for (var i in update) {
                        base[i] = update[i];
                    }
                    return base;
                };
                Help.defaultWindowLocation = function (gameState, scale) {
                    switch (gameState) {
                        case Enums_1.GameState.Playing:
                            return new Utils_1.IntersectingRectangle(0, 0, 320, 224);
                        case Enums_1.GameState.Editing:
                            var x = 0;
                            var y = 0;
                            if (SonicManager_1.SonicManager.instance.sonicLevel && SonicManager_1.SonicManager.instance.sonicLevel.StartPositions && SonicManager_1.SonicManager.instance.sonicLevel.StartPositions[0]) {
                                x = SonicManager_1.SonicManager.instance.sonicLevel.StartPositions[0].x - 128 * scale.x;
                                y = SonicManager_1.SonicManager.instance.sonicLevel.StartPositions[0].y - 128 * scale.y;
                            }
                            return new Utils_1.IntersectingRectangle(x, y, window.innerWidth, window.innerHeight);
                    }
                    return null;
                };
                Help.cos_table = new Array(1.00000, 0.99970, 0.99880, 0.99729, 0.99518, 0.99248, 0.98918, 0.98528, 0.98079, 0.97570, 0.97003, 0.96378, 0.95694, 0.94953, 0.94154, 0.93299, 0.92388, 0.91421, 0.90399, 0.89322, 0.88192, 0.87009, 0.85773, 0.84485, 0.83147, 0.81758, 0.80321, 0.78835, 0.77301, 0.75721, 0.74095, 0.72425, 0.70711, 0.68954, 0.67156, 0.65317, 0.63439, 0.61523, 0.59570, 0.57581, 0.55557, 0.53500, 0.51410, 0.49290, 0.47140, 0.44961, 0.42755, 0.40524, 0.38268, 0.35990, 0.33689, 0.31368, 0.29028, 0.26671, 0.24298, 0.21910, 0.19509, 0.17096, 0.14673, 0.12241, 0.09802, 0.07356, 0.04907, 0.02454, 0.00000, -0.02454, -0.04907, -0.07356, -0.09802, -0.12241, -0.14673, -0.17096, -0.19509, -0.21910, -0.24298, -0.26671, -0.29028, -0.31368, -0.33689, -0.35990, -0.38268, -0.40524, -0.42755, -0.44961, -0.47140, -0.49290, -0.51410, -0.53500, -0.55557, -0.57581, -0.59570, -0.61523, -0.63439, -0.65317, -0.67156, -0.68954, -0.70711, -0.72425, -0.74095, -0.75721, -0.77301, -0.78835, -0.80321, -0.81758, -0.83147, -0.84485, -0.85773, -0.87009, -0.88192, -0.89322, -0.90399, -0.91421, -0.92388, -0.93299, -0.94154, -0.94953, -0.95694, -0.96378, -0.97003, -0.97570, -0.98079, -0.98528, -0.98918, -0.99248, -0.99518, -0.99729, -0.99880, -0.99970, -1.00000, -0.99970, -0.99880, -0.99729, -0.99518, -0.99248, -0.98918, -0.98528, -0.98079, -0.97570, -0.97003, -0.96378, -0.95694, -0.94953, -0.94154, -0.93299, -0.92388, -0.91421, -0.90399, -0.89322, -0.88192, -0.87009, -0.85773, -0.84485, -0.83147, -0.81758, -0.80321, -0.78835, -0.77301, -0.75721, -0.74095, -0.72425, -0.70711, -0.68954, -0.67156, -0.65317, -0.63439, -0.61523, -0.59570, -0.57581, -0.55557, -0.53500, -0.51410, -0.49290, -0.47140, -0.44961, -0.42756, -0.40524, -0.38268, -0.35990, -0.33689, -0.31368, -0.29028, -0.26671, -0.24298, -0.21910, -0.19509, -0.17096, -0.14673, -0.12241, -0.09802, -0.07356, -0.04907, -0.02454, -0.00000, 0.02454, 0.04907, 0.07356, 0.09802, 0.12241, 0.14673, 0.17096, 0.19509, 0.21910, 0.24298, 0.26671, 0.29028, 0.31368, 0.33689, 0.35990, 0.38268, 0.40524, 0.42756, 0.44961, 0.47140, 0.49290, 0.51410, 0.53500, 0.55557, 0.57581, 0.59570, 0.61523, 0.63439, 0.65317, 0.67156, 0.68954, 0.70711, 0.72425, 0.74095, 0.75721, 0.77301, 0.78835, 0.80321, 0.81758, 0.83147, 0.84485, 0.85773, 0.87009, 0.88192, 0.89322, 0.90399, 0.91421, 0.92388, 0.93299, 0.94154, 0.94953, 0.95694, 0.96378, 0.97003, 0.97570, 0.98079, 0.98528, 0.98918, 0.99248, 0.99518, 0.99729, 0.99880, 0.99970);
                return Help;
            }());
            exports_10("Help", Help);
        }
    }
});
System.register("SLData", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var SLData, AnimatedPaletteItem, AnimatedPalettePiece, SLDataRingEntry, SLDataCNZBumperEntry, Solidity, SLDataChunkBlock, SLDataObjectEntry, SLDataStartPositionEntry, SLDataAnimation, SLDataAnimationFrame, SLDataPatternIndex, ObjectModelData;
    return {
        setters:[],
        execute: function() {
            SLData = (function () {
                function SLData() {
                }
                return SLData;
            }());
            exports_11("SLData", SLData);
            AnimatedPaletteItem = (function () {
                function AnimatedPaletteItem() {
                }
                return AnimatedPaletteItem;
            }());
            exports_11("AnimatedPaletteItem", AnimatedPaletteItem);
            AnimatedPalettePiece = (function () {
                function AnimatedPalettePiece() {
                }
                return AnimatedPalettePiece;
            }());
            exports_11("AnimatedPalettePiece", AnimatedPalettePiece);
            SLDataRingEntry = (function () {
                function SLDataRingEntry() {
                }
                return SLDataRingEntry;
            }());
            exports_11("SLDataRingEntry", SLDataRingEntry);
            SLDataCNZBumperEntry = (function () {
                function SLDataCNZBumperEntry() {
                }
                return SLDataCNZBumperEntry;
            }());
            exports_11("SLDataCNZBumperEntry", SLDataCNZBumperEntry);
            (function (Solidity) {
                Solidity[Solidity["NotSolid"] = 0] = "NotSolid";
                Solidity[Solidity["TopSolid"] = 1] = "TopSolid";
                Solidity[Solidity["LRBSolid"] = 2] = "LRBSolid";
                Solidity[Solidity["AllSolid"] = 3] = "AllSolid";
            })(Solidity || (Solidity = {}));
            exports_11("Solidity", Solidity);
            SLDataChunkBlock = (function () {
                function SLDataChunkBlock() {
                }
                return SLDataChunkBlock;
            }());
            exports_11("SLDataChunkBlock", SLDataChunkBlock);
            SLDataObjectEntry = (function () {
                function SLDataObjectEntry() {
                }
                return SLDataObjectEntry;
            }());
            exports_11("SLDataObjectEntry", SLDataObjectEntry);
            SLDataStartPositionEntry = (function () {
                function SLDataStartPositionEntry() {
                }
                return SLDataStartPositionEntry;
            }());
            exports_11("SLDataStartPositionEntry", SLDataStartPositionEntry);
            SLDataAnimation = (function () {
                function SLDataAnimation() {
                }
                return SLDataAnimation;
            }());
            exports_11("SLDataAnimation", SLDataAnimation);
            SLDataAnimationFrame = (function () {
                function SLDataAnimationFrame() {
                }
                return SLDataAnimationFrame;
            }());
            exports_11("SLDataAnimationFrame", SLDataAnimationFrame);
            SLDataPatternIndex = (function () {
                function SLDataPatternIndex() {
                }
                return SLDataPatternIndex;
            }());
            exports_11("SLDataPatternIndex", SLDataPatternIndex);
            ObjectModelData = (function () {
                function ObjectModelData() {
                }
                return ObjectModelData;
            }());
            exports_11("ObjectModelData", ObjectModelData);
        }
    }
});
System.register("game/level/HeightMap", ["common/Utils", "game/SonicManager", "common/CanvasInformation", "common/Help", "common/Enums"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var Utils_2, SonicManager_2, CanvasInformation_2, Help_1, Enums_2;
    var HeightMap;
    return {
        setters:[
            function (Utils_2_1) {
                Utils_2 = Utils_2_1;
            },
            function (SonicManager_2_1) {
                SonicManager_2 = SonicManager_2_1;
            },
            function (CanvasInformation_2_1) {
                CanvasInformation_2 = CanvasInformation_2_1;
            },
            function (Help_1_1) {
                Help_1 = Help_1_1;
            },
            function (Enums_2_1) {
                Enums_2 = Enums_2_1;
            }],
        execute: function() {
            HeightMap = (function () {
                function HeightMap(heightMap, i) {
                    this.Width = 0;
                    this.Height = 0;
                    this.Index = 0;
                    this.Full = undefined;
                    this.Items = heightMap;
                    this.Width = 16;
                    this.Height = 16;
                    this.Index = i;
                    this.Full = undefined;
                }
                HeightMap.FullHeight = function (full) {
                    var h = new HeightMap(null, 0);
                    h.Full = full;
                    return h;
                };
                HeightMap.prototype.SetItem = function (x, y, rotationMode) {
                    var jx = 0;
                    var jy = 0;
                    switch (rotationMode) {
                        case Enums_2.RotationMode.Floor:
                            jx = x;
                            jy = y;
                            break;
                        case Enums_2.RotationMode.LeftWall:
                            jx = y;
                            jy = 15 - x;
                            break;
                        case Enums_2.RotationMode.Ceiling:
                            jx = x;
                            jy = 15 - y;
                            break;
                        case Enums_2.RotationMode.RightWall:
                            jx = y;
                            jy = x;
                            break;
                    }
                    this.Items[jx] = 16 - jy;
                };
                HeightMap.prototype.Draw = function (canvas, pos, xflip, yflip, solid, angle) {
                    if (this.Items == null)
                        return;
                    canvas.save();
                    var oPos = Utils_2.Point.Create(pos);
                    if (xflip) {
                        pos.x = -pos.x - 16;
                        canvas.scale(-1, 1);
                    }
                    if (yflip) {
                        pos.y = -pos.y - 16;
                        canvas.scale(1, -1);
                    }
                    var fd = SonicManager_2.SonicManager.instance.spriteCache.HeightMaps[this.Index + (solid << 20)];
                    if (this.Index != -1 && fd)
                        canvas.drawImage(fd.canvas, pos.x, pos.y);
                    else {
                        var ntcanvas = CanvasInformation_2.CanvasInformation.create(16, 16, false);
                        var ncanvas = ntcanvas.Context;
                        if (solid > 0) {
                            for (var x = 0; x < 16; x++) {
                                for (var y = 0; y < 16; y++) {
                                    var jx = 0;
                                    var jy = 0;
                                    if (HeightMap.ItemsGood(this.Items, x, y)) {
                                        jx = x;
                                        jy = y;
                                        var _x = jx;
                                        var _y = jy;
                                        ncanvas.lineWidth = 1;
                                        ncanvas.fillStyle = HeightMap.colors[solid];
                                        ncanvas.fillRect(_x, _y, 1, 1);
                                        if (angle != 255) {
                                            ncanvas.beginPath();
                                            ncanvas.lineWidth = 1;
                                            ncanvas.strokeStyle = "rgba(163,241,255,0.8)";
                                            ncanvas.moveTo(16 / 2, 16 / 2);
                                            ncanvas.lineTo(16 / 2 - Help_1.Help.sin(angle) * 8, 16 / 2 - Help_1.Help.cos(angle) * 8);
                                            ncanvas.stroke();
                                        }
                                    }
                                }
                            }
                        }
                        SonicManager_2.SonicManager.instance.spriteCache.HeightMaps[this.Index + (solid << 20)] = ntcanvas;
                        canvas.drawImage(ntcanvas.canvas, pos.x, pos.y);
                    }
                    canvas.restore();
                    pos.x = oPos.x;
                    pos.y = oPos.y;
                };
                HeightMap.ItemsGood = function (items, x, y) {
                    if (items[x] < 0)
                        return Math.abs(items[x]) >= y;
                    return items[x] >= 16 - y;
                };
                HeightMap.colors = new Array("", "rgba(255,98,235,0.6)", "rgba(24,218,235,0.6)", "rgba(24,98,235,0.6)");
                return HeightMap;
            }());
            exports_12("HeightMap", HeightMap);
        }
    }
});
System.register("game/level/Tiles/Tile", ["common/CanvasInformation", "common/Utils", "game/SonicManager"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var CanvasInformation_3, Utils_3, SonicManager_3;
    var Tile;
    return {
        setters:[
            function (CanvasInformation_3_1) {
                CanvasInformation_3 = CanvasInformation_3_1;
            },
            function (Utils_3_1) {
                Utils_3 = Utils_3_1;
            },
            function (SonicManager_3_1) {
                SonicManager_3 = SonicManager_3_1;
            }],
        execute: function() {
            Tile = (function () {
                function Tile(colors) {
                    this.canAnimate = true;
                    this.index = 0;
                    this.isTileAnimated = false;
                    this.baseCaches = {};
                    this.animatedPaletteCaches = {};
                    this.colors = colors;
                    this.curPaletteIndexes = null;
                }
                Tile.prototype.drawBase = function (canvas, pos, xflip, yflip, palette, isAnimatedTile) {
                    if (isAnimatedTile === void 0) { isAnimatedTile = false; }
                    if (this.animatedTileIndexes != null && (!isAnimatedTile && this.animatedTileIndexes.length > 0))
                        return;
                    var baseCacheIndex = this.getBaseCacheIndex(xflip, yflip, palette);
                    var baseCache = this.baseCaches[baseCacheIndex];
                    if (baseCache == null) {
                        var squareSize = this.colors.length;
                        var j = void 0;
                        j = CanvasInformation_3.CanvasInformation.create(squareSize, squareSize, false);
                        if (pos.x < 0 || pos.y < 0)
                            return;
                        var oPos = new Utils_3.Point(0, 0);
                        if (xflip) {
                            oPos.x = -squareSize;
                            j.Context.scale(-1, 1);
                        }
                        if (yflip) {
                            oPos.y = -squareSize;
                            j.Context.scale(1, -1);
                        }
                        var palette_ = SonicManager_3.SonicManager.instance.sonicLevel.Palette;
                        var colorPaletteIndex = (palette + SonicManager_3.SonicManager.instance.indexedPalette) % palette_.length;
                        var x = oPos.x;
                        var y = oPos.y;
                        for (var _x = 0; _x < squareSize; _x++) {
                            for (var _y = 0; _y < squareSize; _y++) {
                                var colorIndex = this.colors[_x][_y];
                                if (colorIndex == 0)
                                    continue;
                                j.Context.fillStyle = palette_[colorPaletteIndex][colorIndex];
                                j.Context.fillRect(x + _x, y + _y, 1, 1);
                            }
                        }
                        this.baseCaches[baseCacheIndex] = baseCache = j;
                    }
                    canvas.drawImage(baseCache.canvas, pos.x, pos.y);
                };
                Tile.prototype.getBaseCacheIndex = function (xflip, yflip, palette) {
                    return (palette << 6) + ((xflip ? 1 : 0) << 5) + ((yflip ? 1 : 0) << 4);
                };
                Tile.prototype.getAnimatedPaletteCacheIndex = function (xflip, yflip, palette, animatedPaletteIndex, frameIndex) {
                    return (frameIndex << 8) + (animatedPaletteIndex << 7) + (palette << 6) + ((xflip ? 1 : 0) << 5) + ((yflip ? 1 : 0) << 4);
                };
                Tile.prototype.DrawAnimatedPalette = function (canvas, pos, xflip, yflip, palette, animatedPaletteIndex, isAnimatedTile) {
                    if (isAnimatedTile === void 0) { isAnimatedTile = false; }
                    if (this.animatedTileIndexes != null && (!isAnimatedTile && this.animatedTileIndexes.length > 0))
                        return;
                    var animatedPaletteCacheIndex = this.getAnimatedPaletteCacheIndex(xflip, yflip, palette, animatedPaletteIndex, SonicManager_3.SonicManager.instance.tilePaletteAnimationManager.GetPaletteAnimation(animatedPaletteIndex).CurrentFrame);
                    var animatedPaletteCache = this.animatedPaletteCaches[animatedPaletteCacheIndex];
                    if (animatedPaletteCache == null) {
                        var squareSize = this.colors.length;
                        var j = void 0;
                        j = CanvasInformation_3.CanvasInformation.create(squareSize, squareSize, false);
                        if (pos.x < 0 || pos.y < 0)
                            return;
                        var oPos = new Utils_3.Point(0, 0);
                        if (xflip) {
                            oPos.x = -squareSize;
                            j.Context.scale(-1, 1);
                        }
                        if (yflip) {
                            oPos.y = -squareSize;
                            j.Context.scale(1, -1);
                        }
                        var palette_ = SonicManager_3.SonicManager.instance.sonicLevel.Palette;
                        var colorPaletteIndex = (palette + SonicManager_3.SonicManager.instance.indexedPalette) % palette_.length;
                        var x = oPos.x;
                        var y = oPos.y;
                        for (var _x = 0; _x < squareSize; _x++) {
                            for (var _y = 0; _y < squareSize; _y++) {
                                var colorIndex = this.colors[_x][_y];
                                if (colorIndex == 0)
                                    continue;
                                if (this.paletteIndexesToBeAnimated[animatedPaletteIndex].indexOf(colorIndex) == -1)
                                    continue;
                                j.Context.fillStyle = palette_[colorPaletteIndex][colorIndex];
                                j.Context.fillRect(x + _x, y + _y, 1, 1);
                            }
                        }
                        this.animatedPaletteCaches[animatedPaletteCacheIndex] = animatedPaletteCache = j;
                    }
                    canvas.drawImage(animatedPaletteCache.canvas, pos.x, pos.y);
                };
                Tile.prototype.drawAnimatedTile = function (canvas, pos, xflip, yflip, palette, animatedTileIndex) {
                    if (this.animatedTileIndexes.indexOf(animatedTileIndex) == -1)
                        return;
                    var tileAnimationFrame = SonicManager_3.SonicManager.instance.tileAnimationManager.getCurrentFrame(animatedTileIndex);
                    var tileAnimation = tileAnimationFrame.animation;
                    var tileAnimationData = tileAnimation.animatedTileData;
                    var animationIndex = tileAnimationData.AnimationTileIndex;
                    var frame = tileAnimationFrame.frameData();
                    if (!frame) {
                        frame = tileAnimation.animatedTileData.DataFrames[0];
                    }
                    var file = tileAnimationData.GetAnimationFile();
                    var va = file[frame.StartingTileIndex + (this.index - animationIndex)];
                    if (va != null) {
                        va.drawBase(canvas, pos, xflip, yflip, palette, true);
                    }
                    else {
                    }
                };
                Tile.prototype.ShouldTileAnimate = function () {
                    return this.isTileAnimated && this.canAnimate;
                };
                Tile.prototype.GetAllPaletteIndexes = function () {
                    if (this.curPaletteIndexes == null) {
                        var d = new Array();
                        for (var _x = 0; _x < this.colors.length; _x++) {
                            var color = this.colors[_x];
                            var _loop_1 = function(_y) {
                                var col = color[_y];
                                if (col == 0)
                                    return "continue";
                                if (d.filter(function (a) { return a != col; }).length == d.length)
                                    d.push(col);
                            };
                            for (var _y = 0; _y < color.length; _y++) {
                                var state_1 = _loop_1(_y);
                                if (state_1 === "continue") continue;
                            }
                        }
                        this.curPaletteIndexes = d.slice(0);
                    }
                    return this.curPaletteIndexes;
                };
                Tile.prototype.ClearCache = function () {
                    this.curPaletteIndexes = null;
                    this.baseCaches = {};
                };
                return Tile;
            }());
            exports_13("Tile", Tile);
        }
    }
});
System.register("game/level/Tiles/TileInfo", ["game/SonicManager"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var SonicManager_4;
    var TileInfo;
    return {
        setters:[
            function (SonicManager_4_1) {
                SonicManager_4 = SonicManager_4_1;
            }],
        execute: function() {
            TileInfo = (function () {
                function TileInfo() {
                    this._Tile = 0;
                    this.Priority = false;
                    this.XFlip = false;
                    this.YFlip = false;
                    this.Palette = 0;
                    this.Index = 0;
                }
                TileInfo.prototype.GetTile = function () {
                    return SonicManager_4.SonicManager.instance.sonicLevel.GetTile(this._Tile);
                };
                return TileInfo;
            }());
            exports_14("TileInfo", TileInfo);
        }
    }
});
System.register("game/level/Tiles/TilePiece", ["common/Utils", "common/CanvasInformation", "game/SonicManager"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var Utils_4, CanvasInformation_4, SonicManager_5;
    var TilePiece;
    return {
        setters:[
            function (Utils_4_1) {
                Utils_4 = Utils_4_1;
            },
            function (CanvasInformation_4_1) {
                CanvasInformation_4 = CanvasInformation_4_1;
            },
            function (SonicManager_5_1) {
                SonicManager_5 = SonicManager_5_1;
            }],
        execute: function() {
            TilePiece = (function () {
                function TilePiece() {
                    this.onlyBackground = false;
                    this.onlyBackgroundSet = false;
                    this.onlyForeground = false;
                    this.onlyForegroundSet = false;
                    this.shouldAnimate = false;
                    this.Index = 0;
                    this.animatedPaletteCaches = {};
                }
                TilePiece.prototype.Init = function () {
                    this.OnlyBackground();
                    this.OnlyForeground();
                };
                TilePiece.prototype.OnlyBackground = function () {
                    if (this.onlyBackgroundSet)
                        return this.onlyBackground;
                    for (var _i = 0, _a = this.Tiles; _i < _a.length; _i++) {
                        var mj = _a[_i];
                        if (mj) {
                            if (mj.Priority) {
                                this.onlyBackgroundSet = true;
                                return (this.onlyBackground = false);
                            }
                        }
                    }
                    this.onlyBackgroundSet = true;
                    return (this.onlyBackground = true);
                };
                TilePiece.prototype.OnlyForeground = function () {
                    if (this.onlyForegroundSet)
                        return this.onlyForeground;
                    for (var _i = 0, _a = this.Tiles; _i < _a.length; _i++) {
                        var mj = _a[_i];
                        if (mj) {
                            if (!mj.Priority) {
                                this.onlyForegroundSet = true;
                                return (this.onlyForeground = false);
                            }
                        }
                    }
                    this.onlyForegroundSet = true;
                    return (this.onlyForeground = true);
                };
                TilePiece.prototype.DrawBase = function (canvas, position, layer, xFlip, yFlip) {
                    var drawOrderIndex = 0;
                    drawOrderIndex = xFlip ? (yFlip ? 0 : 1) : (yFlip ? 2 : 3);
                    var tilePieceLength = 8;
                    var ac = CanvasInformation_4.CanvasInformation.create(tilePieceLength * 2, tilePieceLength * 2, false);
                    var i = 0;
                    var localPoint = new Utils_4.Point(0, 0);
                    for (var _i = 0, _a = this.Tiles; _i < _a.length; _i++) {
                        var tileItem = _a[_i];
                        var tile = tileItem.GetTile();
                        if (tile) {
                            if (tileItem.Priority == (layer == 1)) {
                                var _xf = !!xFlip !== !!tileItem.XFlip;
                                var _yf = !!yFlip !== !!tileItem.YFlip;
                                var df = TilePiece.DrawInfo[TilePiece.DrawOrder[drawOrderIndex][i]];
                                localPoint.x = df[0] * tilePieceLength;
                                localPoint.y = df[1] * tilePieceLength;
                                tile.drawBase(ac.Context, localPoint, _xf, _yf, tileItem.Palette);
                            }
                        }
                        i++;
                    }
                    canvas.drawImage(ac.canvas, position.x, position.y);
                };
                TilePiece.prototype.getAnimatedPaletteCacheIndex = function (xflip, yflip, animatedPaletteIndex, frameIndex) {
                    return (frameIndex << 8) + (animatedPaletteIndex << 7) + ((xflip ? 1 : 0) << 5) + ((yflip ? 1 : 0) << 4);
                };
                TilePiece.prototype.DrawAnimatedPalette = function (canvas, position, layer, xFlip, yFlip, animatedPaletteIndex) {
                    var animatedPaletteCacheIndex = this.getAnimatedPaletteCacheIndex(xFlip, yFlip, animatedPaletteIndex, SonicManager_5.SonicManager.instance.tilePaletteAnimationManager.GetPaletteAnimation(animatedPaletteIndex).CurrentFrame);
                    var animatedPaletteCache = this.animatedPaletteCaches[animatedPaletteCacheIndex];
                    if (animatedPaletteCache == null) {
                        var drawOrderIndex = 0;
                        drawOrderIndex = xFlip ? (yFlip ? 0 : 1) : (yFlip ? 2 : 3);
                        var tilePieceLength = 8;
                        var ac = CanvasInformation_4.CanvasInformation.create(tilePieceLength * 2, tilePieceLength * 2, false);
                        var i = 0;
                        var localPoint = new Utils_4.Point(0, 0);
                        for (var _i = 0, _a = this.Tiles; _i < _a.length; _i++) {
                            var tileItem = _a[_i];
                            var tile = tileItem.GetTile();
                            if (tile) {
                                if (tileItem.Priority == (layer == 1)) {
                                    var _xf = !!xFlip !== !!tileItem.XFlip;
                                    var _yf = !!yFlip !== !!tileItem.YFlip;
                                    var df = TilePiece.DrawInfo[TilePiece.DrawOrder[drawOrderIndex][i]];
                                    localPoint.x = df[0] * tilePieceLength;
                                    localPoint.y = df[1] * tilePieceLength;
                                    tile.DrawAnimatedPalette(ac.Context, localPoint, _xf, _yf, tileItem.Palette, animatedPaletteIndex);
                                }
                            }
                            i++;
                        }
                        this.animatedPaletteCaches[animatedPaletteCacheIndex] = animatedPaletteCache = ac;
                    }
                    canvas.drawImage(animatedPaletteCache.canvas, position.x, position.y);
                };
                TilePiece.prototype.DrawAnimatedTile = function (canvas, position, layer, xFlip, yFlip, animatedTileIndex) {
                    var drawOrderIndex = 0;
                    drawOrderIndex = xFlip ? (yFlip ? 0 : 1) : (yFlip ? 2 : 3);
                    var tilePieceLength = 8;
                    var ac = CanvasInformation_4.CanvasInformation.create(tilePieceLength * 2, tilePieceLength * 2, false);
                    var i = 0;
                    var localPoint = new Utils_4.Point(0, 0);
                    for (var _i = 0, _a = this.Tiles; _i < _a.length; _i++) {
                        var tileItem = _a[_i];
                        var tile = tileItem.GetTile();
                        if (tile) {
                            if (tileItem.Priority == (layer == 1)) {
                                var _xf = !!xFlip !== !!tileItem.XFlip;
                                var _yf = !!yFlip !== !!tileItem.YFlip;
                                var df = TilePiece.DrawInfo[TilePiece.DrawOrder[drawOrderIndex][i]];
                                localPoint.x = df[0] * tilePieceLength;
                                localPoint.y = df[1] * tilePieceLength;
                                tile.drawAnimatedTile(ac.Context, localPoint, _xf, _yf, tileItem.Palette, animatedTileIndex);
                            }
                        }
                        i++;
                    }
                    canvas.drawImage(ac.canvas, position.x, position.y);
                };
                TilePiece.prototype.ShouldAnimate = function () {
                    if (this.shouldAnimate == null) {
                        for (var _i = 0, _a = this.Tiles; _i < _a.length; _i++) {
                            var t = _a[_i];
                            var tile = t.GetTile();
                            if (tile) {
                                if (tile.ShouldTileAnimate())
                                    return (this.shouldAnimate = true);
                            }
                        }
                        this.shouldAnimate = false;
                    }
                    return (this.shouldAnimate);
                };
                TilePiece.prototype.GetLayer1Angles = function () {
                    return SonicManager_5.SonicManager.instance.sonicLevel.Angles[SonicManager_5.SonicManager.instance.sonicLevel.CollisionIndexes1[this.Index]];
                };
                TilePiece.prototype.GetLayer2Angles = function () {
                    return SonicManager_5.SonicManager.instance.sonicLevel.Angles[SonicManager_5.SonicManager.instance.sonicLevel.CollisionIndexes2[this.Index]];
                };
                TilePiece.prototype.GetLayer1HeightMaps = function () {
                    return SonicManager_5.SonicManager.instance.sonicLevel.HeightMaps[SonicManager_5.SonicManager.instance.sonicLevel.CollisionIndexes1[this.Index]];
                };
                TilePiece.prototype.GetLayer2HeightMaps = function () {
                    return SonicManager_5.SonicManager.instance.sonicLevel.HeightMaps[SonicManager_5.SonicManager.instance.sonicLevel.CollisionIndexes2[this.Index]];
                };
                TilePiece.DrawInfo = [[0, 0], [1, 0], [0, 1], [1, 1]];
                TilePiece.DrawOrder = [[3, 2, 1, 0], [1, 0, 3, 2], [2, 3, 0, 1], [0, 1, 2, 3]];
                return TilePiece;
            }());
            exports_15("TilePiece", TilePiece);
        }
    }
});
System.register("game/level/Tiles/TilePieceInfo", ["game/SonicManager", "SLData"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var SonicManager_6, SLData_1;
    var TilePieceInfo;
    return {
        setters:[
            function (SonicManager_6_1) {
                SonicManager_6 = SonicManager_6_1;
            },
            function (SLData_1_1) {
                SLData_1 = SLData_1_1;
            }],
        execute: function() {
            TilePieceInfo = (function () {
                function TilePieceInfo() {
                    this.Block = 0;
                    this.XFlip = false;
                    this.YFlip = false;
                    this.Solid1 = SLData_1.Solidity.NotSolid;
                    this.Solid2 = SLData_1.Solidity.NotSolid;
                    this.Index = 0;
                }
                TilePieceInfo.prototype.GetTilePiece = function () {
                    return SonicManager_6.SonicManager.instance.sonicLevel.GetTilePiece(this.Block);
                };
                TilePieceInfo.prototype.SetTilePiece = function (tp) {
                    if (this.Block == tp.Index)
                        return false;
                    this.Block = tp.Index;
                    return true;
                };
                TilePieceInfo.prototype.GetLayer1Angles = function () {
                    return SonicManager_6.SonicManager.instance.sonicLevel.Angles[SonicManager_6.SonicManager.instance.sonicLevel.CollisionIndexes1[this.Block]];
                };
                TilePieceInfo.prototype.GetLayer2Angles = function () {
                    return SonicManager_6.SonicManager.instance.sonicLevel.Angles[SonicManager_6.SonicManager.instance.sonicLevel.CollisionIndexes2[this.Block]];
                };
                TilePieceInfo.prototype.GetLayer1HeightMaps = function () {
                    return SonicManager_6.SonicManager.instance.sonicLevel.HeightMaps[SonicManager_6.SonicManager.instance.sonicLevel.CollisionIndexes1[this.Block]];
                };
                TilePieceInfo.prototype.GetLayer2HeightMaps = function () {
                    return SonicManager_6.SonicManager.instance.sonicLevel.HeightMaps[SonicManager_6.SonicManager.instance.sonicLevel.CollisionIndexes2[this.Block]];
                };
                return TilePieceInfo;
            }());
            exports_16("TilePieceInfo", TilePieceInfo);
        }
    }
});
System.register("game/level/Animations/TileAnimationData", ["game/SonicManager"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var SonicManager_7;
    var TileAnimationData, TileAnimationDataFrame;
    return {
        setters:[
            function (SonicManager_7_1) {
                SonicManager_7 = SonicManager_7_1;
            }],
        execute: function() {
            TileAnimationData = (function () {
                function TileAnimationData() {
                    /*   function animation(name, images) {
                 this.images = images;
                 this.name = name;
                 this.draw = function (canvas, x, y, scale, animationIndex) {
                     canvas.save();
                     let jv = (function (ind, imgs) {
                         let dj = 0;
                         for (let vm in imgs) {
                             if (dj == ind)
                                 return vm;
                             dj++;
             
                         }
                         return null;
                     })(animationIndex, this.images);
                     
                     canvas.drawImage(sonicManager.spriteCache.animationSprites[animationIndex + " " + name + scale.x + scale.y],
                         (x - this.images[jv].width / 2) * scale.x, (y - this.images[jv].height / 2) * scale.y);
                     canvas.restore();
                 };
             }*/
                    this.AnimationTileFile = 0;
                    this.NumberOfTiles = 0;
                    this.LastAnimatedIndex = 0;
                    this.LastAnimatedFrame = 0;
                    this.AnimationTileIndex = 0;
                    this.AutomatedTiming = 0;
                }
                TileAnimationData.prototype.GetAnimationFile = function () {
                    return SonicManager_7.SonicManager.instance.sonicLevel.AnimatedTileFiles[this.AnimationTileFile];
                };
                return TileAnimationData;
            }());
            exports_17("TileAnimationData", TileAnimationData);
            TileAnimationDataFrame = (function () {
                function TileAnimationDataFrame() {
                    this.Ticks = 0;
                    this.StartingTileIndex = 0;
                }
                return TileAnimationDataFrame;
            }());
            exports_17("TileAnimationDataFrame", TileAnimationDataFrame);
        }
    }
});
System.register("game/level/Objects/LevelObjectAssetFrame", ["common/CanvasInformation"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var CanvasInformation_5;
    var LevelObjectAssetFrame;
    return {
        setters:[
            function (CanvasInformation_5_1) {
                CanvasInformation_5 = CanvasInformation_5_1;
            }],
        execute: function() {
            LevelObjectAssetFrame = (function () {
                function LevelObjectAssetFrame(name) {
                    this.Image = {};
                    this.name = name;
                    this.collisionMap = new Array(100);
                    this.hurtSonicMap = new Array(100);
                    for (var i = 0; i < 100; i++) {
                        this.collisionMap[i] = new Array(100);
                        this.hurtSonicMap[i] = new Array(100);
                    }
                }
                LevelObjectAssetFrame.prototype.SetWidth = function (w) {
                    this.width = w;
                    this.collisionMap = this.collisionMap.slice(0, w);
                    this.ClearCache();
                };
                LevelObjectAssetFrame.prototype.SetHeight = function (h) {
                    this.height = h;
                    for (var j = 0; j < this.width; j++) {
                        this.collisionMap[j] = this.collisionMap[j].slice(0, h);
                    }
                    this.ClearCache();
                };
                LevelObjectAssetFrame.prototype.SetOffset = function (ex, ey) {
                    this.offsetX = ex;
                    this.offsetY = ey;
                    this.ClearCache();
                };
                LevelObjectAssetFrame.prototype.DrawSimple = function (mainCanvas, pos, width, height, xflip, yflip) {
                    var c = this.GetCache(false, false, false);
                    mainCanvas.save();
                    mainCanvas.translate(pos.x, pos.y);
                    mainCanvas.scale((width / this.width) | 0, (height / this.height) | 0);
                    mainCanvas.drawImage(c.canvas, 0, 0);
                    mainCanvas.restore();
                };
                LevelObjectAssetFrame.prototype.GetCache = function (showOutline, showCollideMap, showHurtMap) {
                    var m = this.Image[(((showOutline ? 1 : 0) + 2) * 7) ^ (((showCollideMap ? 1 : 0) + 2) * 89) ^ (((showHurtMap ? 1 : 0) + 2) * 79)];
                    if (m == null) {
                        var mj = CanvasInformation_5.CanvasInformation.create(this.width, this.height, false);
                        var canvas = mj.Context;
                        canvas.save();
                        canvas.strokeStyle = "#000000";
                        canvas.lineWidth = 1;
                        for (var x = 0; x < this.width; x++) {
                            for (var y = 0; y < this.height; y++) {
                                var ex = x;
                                var ey = y;
                                var d = this.colorMap[ex][ey];
                                var color = this.palette[d];
                                if (color == this.transparentColor) {
                                    canvas.fillStyle = "rgba(0,0,0,0)";
                                }
                                else {
                                    canvas.fillStyle = "#" + color;
                                }
                                canvas.fillRect(ex, ey, 1, 1);
                                if (showCollideMap) {
                                    if (this.collisionMap[ex][ey] > 0) {
                                        canvas.fillStyle = "rgba(30,34,255,0.6)";
                                        canvas.fillRect(ex, ey, 1, 1);
                                    }
                                }
                                if (showHurtMap) {
                                    if (this.hurtSonicMap[ex][ey] > 0) {
                                        canvas.fillStyle = "rgba(211,12,55,0.6)";
                                        canvas.fillRect(ex, ey, 1, 1);
                                    }
                                }
                            }
                        }
                        canvas.restore();
                        m = mj;
                        this.SetCache(mj, showOutline, showCollideMap, showHurtMap);
                    }
                    return m;
                };
                LevelObjectAssetFrame.prototype.ClearCache = function () {
                    this.Image = {};
                };
                LevelObjectAssetFrame.prototype.SetCache = function (image, showOutline, showCollideMap, showHurtMap) {
                    this.Image[(((showOutline ? 1 : 0) + 2) * 7) ^ (((showCollideMap ? 1 : 0) + 2) * 89) ^ (((showHurtMap ? 1 : 0) + 2) * 79)] = image;
                };
                LevelObjectAssetFrame.prototype.DrawUI = function (_canvas, pos, showOutline, showCollideMap, showHurtMap, showOffset, xflip, yflip) {
                    var fd = this.GetCache(showOutline, showCollideMap, showHurtMap);
                    _canvas.save();
                    _canvas.translate(pos.x, pos.y);
                    if (xflip) {
                        if (yflip) {
                            _canvas.translate(fd.canvas.width / 2, fd.canvas.height / 2);
                            _canvas.rotate(-90 * Math.PI / 180);
                            _canvas.translate(-fd.canvas.width / 2, -fd.canvas.height / 2);
                            _canvas.translate(0, this.height);
                            _canvas.scale(1, -1);
                        }
                        else {
                            _canvas.translate(fd.canvas.width / 2, fd.canvas.height / 2);
                            _canvas.rotate(-90 * Math.PI / 180);
                            _canvas.translate(-fd.canvas.width / 2, -fd.canvas.height / 2);
                        }
                    }
                    else {
                        if (yflip) {
                            _canvas.translate(0, this.height);
                            _canvas.scale(1, -1);
                        }
                        else {
                        }
                    }
                    _canvas.drawImage(fd.canvas, 0, 0);
                    if (showOffset) {
                        _canvas.beginPath();
                        _canvas.moveTo(this.offsetX, 0);
                        _canvas.lineTo(this.offsetX, this.height);
                        _canvas.lineWidth = 1;
                        _canvas.strokeStyle = "#000000";
                        _canvas.stroke();
                        _canvas.beginPath();
                        _canvas.moveTo(0, this.offsetY);
                        _canvas.lineTo(this.width, this.offsetY);
                        _canvas.lineWidth = 1;
                        _canvas.strokeStyle = "#000000";
                        _canvas.stroke();
                    }
                    _canvas.restore();
                };
                return LevelObjectAssetFrame;
            }());
            exports_18("LevelObjectAssetFrame", LevelObjectAssetFrame);
        }
    }
});
System.register("game/level/Objects/LevelObjectAsset", [], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var LevelObjectAsset;
    return {
        setters:[],
        execute: function() {
            LevelObjectAsset = (function () {
                function LevelObjectAsset(name) {
                    this.frames = new Array();
                    this.name = name;
                }
                return LevelObjectAsset;
            }());
            exports_19("LevelObjectAsset", LevelObjectAsset);
        }
    }
});
System.register("game/level/Objects/LevelObjectProjectile", [], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var LevelObjectProjectile;
    return {
        setters:[],
        execute: function() {
            LevelObjectProjectile = (function () {
                function LevelObjectProjectile(name) {
                    this.name = name;
                }
                return LevelObjectProjectile;
            }());
            exports_20("LevelObjectProjectile", LevelObjectProjectile);
        }
    }
});
System.register("game/level/Objects/LevelObjectPiece", [], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var LevelObjectPiece;
    return {
        setters:[],
        execute: function() {
            LevelObjectPiece = (function () {
                function LevelObjectPiece(name) {
                    this.name = name;
                }
                return LevelObjectPiece;
            }());
            exports_21("LevelObjectPiece", LevelObjectPiece);
        }
    }
});
System.register("game/level/Objects/LevelObject", ["game/SonicManager"], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var SonicManager_8;
    var LevelObject;
    return {
        setters:[
            function (SonicManager_8_1) {
                SonicManager_8 = SonicManager_8_1;
            }],
        execute: function() {
            LevelObject = (function () {
                function LevelObject(key) {
                    this.cacheCompiled = {};
                    this.cacheLast = {};
                    this.Key = key;
                    this.InitScript = "this.state = {\r\n\txsp: 0.0,\r\n\tysp: 0.0,\r\n\tfacing: false,\r\n};";
                    this.Pieces = [];
                    this.PieceLayouts = [];
                    this.Projectiles = [];
                    this.Assets = [];
                }
                LevelObject.prototype.Init = function ($object, level, sonic) {
                    $object.Reset();
                    this.evalMe("InitScript").apply($object, [$object, level, sonic]);
                };
                LevelObject.prototype.OnCollide = function ($object, level, sonic, sensor, piece) {
                    return this.evalMe("CollideScript").apply($object, [$object, level, sonic, sensor, piece]);
                };
                LevelObject.prototype.OnHurtSonic = function ($object, level, sonic, sensor, piece) {
                    return this.evalMe("HurtScript").apply($object, [$object, level, sonic, sensor, piece]);
                };
                LevelObject.prototype.Tick = function ($object, level, sonic) {
                    if ($object.lastDrawTick != SonicManager_8.SonicManager.instance.tickCount - 1)
                        this.Init($object, level, sonic);
                    $object.lastDrawTick = SonicManager_8.SonicManager.instance.tickCount;
                    this.evalMe("TickScript").apply($object, [$object, level, sonic]);
                    if ($object.State) {
                        $object.Xsp = $object.State.Xsp;
                        $object.Ysp = $object.State.Ysp;
                    }
                    $object.X += $object.Xsp;
                    $object.Y += $object.Ysp;
                    return true;
                };
                LevelObject.prototype.Die = function () {
                };
                LevelObject.prototype.evalMe = function (js) {
                    if (this.cacheLast[js] == null)
                        this.cacheLast[js] = null;
                    if (this.cacheLast[js] != this[js])
                        this.cacheCompiled[js] = null;
                    this.cacheLast[js] = this[js];
                    if (this.cacheCompiled[js] == null) {
                        this.cacheCompiled[js] = (eval("(function(object,level,sonic,sensor,piece){" + this[js] + "});"));
                    }
                    return this.cacheCompiled[js];
                };
                return LevelObject;
            }());
            exports_22("LevelObject", LevelObject);
        }
    }
});
System.register("game/level/Objects/LevelObjectPieceLayoutPiece", [], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var LevelObjectPieceLayoutPiece;
    return {
        setters:[],
        execute: function() {
            LevelObjectPieceLayoutPiece = (function () {
                function LevelObjectPieceLayoutPiece(pieceIndex) {
                    this.PieceIndex = pieceIndex;
                }
                return LevelObjectPieceLayoutPiece;
            }());
            exports_23("LevelObjectPieceLayoutPiece", LevelObjectPieceLayoutPiece);
        }
    }
});
System.register("game/level/Objects/LevelObjectPieceLayout", ["game/SonicManager", "common/Utils"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var SonicManager_9, Utils_5;
    var LevelObjectPieceLayout;
    return {
        setters:[
            function (SonicManager_9_1) {
                SonicManager_9 = SonicManager_9_1;
            },
            function (Utils_5_1) {
                Utils_5 = Utils_5_1;
            }],
        execute: function() {
            LevelObjectPieceLayout = (function () {
                function LevelObjectPieceLayout(name) {
                    this.name = name;
                    this.width = 350;
                    this.height = 280;
                    this.pieces = new Array();
                }
                LevelObjectPieceLayout.prototype.Update = function () {
                    for (var _i = 0, _a = SonicManager_9.SonicManager.instance.sonicLevel.Objects; _i < _a.length; _i++) {
                        var t = _a[_i];
                        t.Reset();
                    }
                };
                LevelObjectPieceLayout.prototype.DrawUI = function (canvas, showImages, selectedPieceIndex, levelObject) {
                    canvas.save();
                    if (!showImages) {
                        canvas.strokeStyle = "#000000";
                        canvas.lineWidth = 2;
                        canvas.beginPath();
                        canvas.moveTo(-1000, 0);
                        canvas.lineTo(1000, 0);
                        canvas.closePath();
                        canvas.stroke();
                        canvas.beginPath();
                        canvas.moveTo(0, -1000);
                        canvas.lineTo(0, 1000);
                        canvas.closePath();
                        canvas.stroke();
                        for (var i = 1; i < this.pieces.length; i++) {
                            var j = this.pieces[i];
                            canvas.beginPath();
                            canvas.moveTo(j.X, j.Y);
                            canvas.lineTo(this.pieces[i - 1].X, this.pieces[i - 1].Y);
                            canvas.stroke();
                        }
                    }
                    for (var _i = 0, _a = this.pieces; _i < _a.length; _i++) {
                        var levelObjectPieceLayoutPiece = _a[_i];
                        if (showImages) {
                            var piece = levelObject.Pieces[levelObjectPieceLayoutPiece.PieceIndex];
                            var asset = levelObject.Assets[piece.assetIndex];
                            if (asset.frames.length > 0) {
                                var frm = asset.frames[0];
                                frm.DrawUI(canvas, new Utils_5.Point(levelObjectPieceLayoutPiece.X - frm.offsetX, levelObjectPieceLayoutPiece.Y - frm.offsetY), false, false, false, false, piece.xflip, piece.yflip);
                            }
                        }
                        else {
                            var drawRadial = void 0;
                            drawRadial = SonicManager_9.SonicManager.instance.mainCanvas.Context.createRadialGradient(0, 0, 0, 10, 10, 50);
                            drawRadial.addColorStop(0, "white");
                            if (selectedPieceIndex == levelObjectPieceLayoutPiece.PieceIndex)
                                drawRadial.addColorStop(1, "yellow");
                            else
                                drawRadial.addColorStop(1, "red");
                            canvas.fillStyle = drawRadial;
                            canvas.beginPath();
                            canvas.arc(levelObjectPieceLayoutPiece.X, levelObjectPieceLayoutPiece.Y, 10, 0, Math.PI * 2, true);
                            canvas.closePath();
                            canvas.fill();
                        }
                    }
                    canvas.restore();
                };
                LevelObjectPieceLayout.prototype.Draw = function (canvas, x, y, framework, instance, showHeightMap) {
                    for (var _i = 0, _a = instance.Pieces; _i < _a.length; _i++) {
                        var j = _a[_i];
                        if (!j.visible)
                            continue;
                        var piece = framework.Pieces[j.pieceIndex];
                        var asset = framework.Assets[piece.assetIndex];
                        if (asset.frames.length > 0) {
                            var frm = asset.frames[j.frameIndex];
                            frm.DrawUI(canvas, new Utils_5.Point((x) - (frm.offsetX), (y) - (frm.offsetY)), false, showHeightMap, showHeightMap, false, instance.Xflip !== !!piece.xflip, instance.Yflip !== !!piece.yflip);
                        }
                    }
                };
                LevelObjectPieceLayout.prototype.GetRectangle = function (levelObject) {
                    var left = 100000000;
                    var top = 100000000;
                    var right = -100000000;
                    var bottom = -100000000;
                    for (var _i = 0, _a = this.pieces; _i < _a.length; _i++) {
                        var levelObjectPieceLayoutPiece = _a[_i];
                        var piece = levelObject.Pieces[levelObjectPieceLayoutPiece.PieceIndex];
                        var asset = levelObject.Assets[piece.assetIndex];
                        var frame = asset.frames[piece.frameIndex];
                        var pieceX = levelObjectPieceLayoutPiece.X - frame.offsetX;
                        var pieceY = levelObjectPieceLayoutPiece.Y - frame.offsetY;
                        var pieceWidth = frame.width;
                        var pieceHeight = frame.height;
                        if (pieceX < left) {
                            left = pieceX;
                        }
                        if (pieceY < top) {
                            top = pieceY;
                        }
                        if (pieceX + pieceWidth > right) {
                            right = pieceX + pieceWidth;
                        }
                        if (pieceY + pieceHeight > bottom) {
                            bottom = pieceY + pieceHeight;
                        }
                    }
                    return new Utils_5.Rectangle(left, top, right - left, bottom - top);
                };
                return LevelObjectPieceLayout;
            }());
            exports_24("LevelObjectPieceLayout", LevelObjectPieceLayout);
        }
    }
});
System.register("game/level/Objects/LevelObjectData", [], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var LevelObjectData;
    return {
        setters:[],
        execute: function() {
            LevelObjectData = (function () {
                function LevelObjectData() {
                    this.assets = [];
                    this.pieces = [];
                    this.projectiles = [];
                    this.pieceLayouts = [];
                    this.key = "";
                    this.description = "";
                    this.initScript = "";
                    this.tickScript = "";
                    this.collideScript = "";
                    this.hurtScript = "";
                }
                return LevelObjectData;
            }());
            exports_25("LevelObjectData", LevelObjectData);
        }
    }
});
System.register("game/level/Objects/ObjectManager", ["common/Help", "game/level/Objects/LevelObjectAsset", "game/level/Objects/LevelObjectAssetFrame", "game/level/Objects/LevelObjectProjectile", "game/level/Objects/LevelObject", "game/level/Objects/LevelObjectPieceLayout"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var Help_2, LevelObjectAsset_1, LevelObjectAssetFrame_1, LevelObjectProjectile_1, LevelObject_1, LevelObjectPieceLayout_1;
    var ObjectManager;
    return {
        setters:[
            function (Help_2_1) {
                Help_2 = Help_2_1;
            },
            function (LevelObjectAsset_1_1) {
                LevelObjectAsset_1 = LevelObjectAsset_1_1;
            },
            function (LevelObjectAssetFrame_1_1) {
                LevelObjectAssetFrame_1 = LevelObjectAssetFrame_1_1;
            },
            function (LevelObjectProjectile_1_1) {
                LevelObjectProjectile_1 = LevelObjectProjectile_1_1;
            },
            function (LevelObject_1_1) {
                LevelObject_1 = LevelObject_1_1;
            },
            function (LevelObjectPieceLayout_1_1) {
                LevelObjectPieceLayout_1 = LevelObjectPieceLayout_1_1;
            }],
        execute: function() {
            ObjectManager = (function () {
                function ObjectManager(sonicManager) {
                    this.sonicManager = sonicManager;
                }
                ObjectManager.prototype.Init = function () {
                };
                ObjectManager.ExtendObject = function (d) {
                    var obj = Help_2.Help.merge(new LevelObject_1.LevelObject(d.key), {
                        CollideScript: d.collideScript,
                        HurtScript: d.hurtScript,
                        InitScript: d.initScript,
                        TickScript: d.tickScript
                    });
                    obj.Description = d.description;
                    obj.Assets = new Array();
                    for (var i = 0; i < d.assets.length; i++) {
                        var asset = d.assets[i];
                        var levelObjectAsset = Help_2.Help.merge(new LevelObjectAsset_1.LevelObjectAsset(asset.name), { name: asset.name });
                        levelObjectAsset.frames = new Array();
                        for (var index = 0; index < asset.frames.length; index++) {
                            var fr = asset.frames[index];
                            levelObjectAsset.frames[index] = Help_2.Help.merge(new LevelObjectAssetFrame_1.LevelObjectAssetFrame(fr.name), {
                                offsetX: fr.offsetX,
                                width: fr.width,
                                transparentColor: fr.transparentColor,
                                height: fr.height,
                                offsetY: fr.offsetY,
                                hurtSonicMap: fr.hurtSonicMap,
                                collisionMap: fr.collisionMap,
                                colorMap: fr.colorMap,
                                palette: fr.palette
                            });
                        }
                        obj.Assets[i] = levelObjectAsset;
                    }
                    obj.Pieces = new Array();
                    for (var index = 0; index < d.pieces.length; index++) {
                        var piece = d.pieces[index];
                        obj.Pieces[index] = piece;
                    }
                    obj.PieceLayouts = new Array();
                    for (var index = 0; index < d.pieceLayouts.length; index++) {
                        var pl = d.pieceLayouts[index];
                        obj.PieceLayouts[index] = Help_2.Help.merge(new LevelObjectPieceLayout_1.LevelObjectPieceLayout(pl.name), {
                            height: pl.height,
                            width: pl.width
                        });
                        obj.PieceLayouts[index].pieces = new Array();
                        for (var i = 0; i < d.pieceLayouts[index].pieces.length; i++) {
                            obj.PieceLayouts[index].pieces[i] = d.pieceLayouts[index].pieces[i];
                        }
                    }
                    obj.Projectiles = new Array();
                    for (var index = 0; index < d.projectiles.length; index++) {
                        var proj = d.projectiles[index];
                        proj = Help_2.Help.merge(new LevelObjectProjectile_1.LevelObjectProjectile(proj.name), {
                            x: proj.x,
                            y: proj.y,
                            xsp: proj.xsp,
                            ysp: proj.ysp,
                            xflip: proj.xflip,
                            yflip: proj.yflip,
                            assetIndex: proj.assetIndex,
                            frameIndex: proj.frameIndex
                        });
                        obj.Projectiles[index] = proj;
                    }
                    return obj;
                };
                ObjectManager.broken = Help_2.Help.loadSprite("assets/sprites/broken.png", function (e) {
                });
                return ObjectManager;
            }());
            exports_26("ObjectManager", ObjectManager);
        }
    }
});
System.register("game/level/Objects/LevelObjectInfo", ["common/Utils", "game/SonicManager", "game/level/Objects/ObjectManager"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var Utils_6, SonicManager_10, ObjectManager_1;
    var LevelObjectInfo;
    return {
        setters:[
            function (Utils_6_1) {
                Utils_6 = Utils_6_1;
            },
            function (SonicManager_10_1) {
                SonicManager_10 = SonicManager_10_1;
            },
            function (ObjectManager_1_1) {
                ObjectManager_1 = ObjectManager_1_1;
            }],
        execute: function() {
            LevelObjectInfo = (function () {
                function LevelObjectInfo(o) {
                    this._rect = new Utils_6.Rectangle(0, 0, 0, 0);
                    this.lastDrawTick = 0;
                    this.X = 0;
                    this.Y = 0;
                    this.Xsp = 0;
                    this.Ysp = 0;
                    this.Xflip = false;
                    this.Yflip = false;
                    this.Subdata = 0;
                    this.UpperNibble = 0;
                    this.LowerNibble = 0;
                    this.PieceLayoutIndex = 0;
                    this.Dead = false;
                    this.Index = 0;
                    this.O = o;
                    this.X = o.X;
                    this.Y = o.Y;
                    this.Xflip = o.XFlip;
                    this.Yflip = o.YFlip;
                    this.Subdata = o.SubType;
                    this.Key = o.ID.toString();
                    this.UpperNibble = this.Subdata >> 4;
                    this.LowerNibble = this.Subdata & 0xf;
                }
                LevelObjectInfo.prototype.Log = function (txt, level) {
                    if (level === void 0) { level = 100; }
                    if (!this.Debug)
                        this.Debug = [];
                    if (level == 0)
                        this.Debug.push(" -- " + txt + " -- ");
                    else
                        this.Debug.push(txt);
                    if (this.ConsoleLog)
                        this.ConsoleLog(this.Debug);
                };
                LevelObjectInfo.prototype.SetPieceLayoutIndex = function (ind) {
                    this.PieceLayoutIndex = ind;
                    var pcs = this.ObjectData.PieceLayouts[this.PieceLayoutIndex].pieces;
                    this.Pieces = [];
                    for (var _i = 0, pcs_1 = pcs; _i < pcs_1.length; _i++) {
                        var t = pcs_1[_i];
                        //todo look into this...
                        this.Pieces.push(t);
                    }
                };
                LevelObjectInfo.prototype.SetObjectData = function (obj) {
                    this.ObjectData = obj;
                    if (this.ObjectData.PieceLayouts.length > this.PieceLayoutIndex && this.ObjectData.PieceLayouts[this.PieceLayoutIndex].pieces.length > 0)
                        this.SetPieceLayoutIndex(this.PieceLayoutIndex);
                };
                LevelObjectInfo.prototype.Tick = function ($object, level, sonic) {
                    if (this.Dead || !this.ObjectData)
                        return false;
                    try {
                        return this.ObjectData.Tick($object, level, sonic);
                    }
                    catch (EJ) {
                        this.Log(EJ.Message, 0);
                        return false;
                    }
                };
                LevelObjectInfo.prototype.MainPieceLayout = function () {
                    return this.ObjectData.PieceLayouts[this.PieceLayoutIndex];
                };
                LevelObjectInfo.prototype.GetRect = function () {
                    if (this.ObjectData.PieceLayouts.length == 0) {
                        this._rect.x = this.X;
                        this._rect.y = this.Y;
                        this._rect.Width = ObjectManager_1.ObjectManager.broken.width;
                        this._rect.Height = ObjectManager_1.ObjectManager.broken.height;
                        return this._rect;
                    }
                    return this.ObjectData.PieceLayouts[this.PieceLayoutIndex].GetRectangle(this.ObjectData);
                };
                LevelObjectInfo.prototype.Draw = function (canvas, x, y, showHeightMap) {
                    if (this.Dead || !this.ObjectData)
                        return;
                    if (this.ObjectData.PieceLayouts.length == 0) {
                        canvas.drawImage(ObjectManager_1.ObjectManager.broken, (x - ObjectManager_1.ObjectManager.broken.width / 2), (y - ObjectManager_1.ObjectManager.broken.height / 2), ObjectManager_1.ObjectManager.broken.width, ObjectManager_1.ObjectManager.broken.height);
                        return;
                    }
                    var levelObjectPieceLayout = this.MainPieceLayout();
                    levelObjectPieceLayout.Draw(canvas, x, y, this.ObjectData, this, showHeightMap);
                    if (this.ConsoleLog != null) {
                        var gr = this.GetRect();
                        canvas.save();
                        canvas.fillStyle = "rgba(228,228,12,0.4)";
                        var wd = 1;
                        canvas.fillRect(gr.x - this.X + x - (gr.Width / 2) - wd, gr.y - this.Y + y - (gr.Height / 2) - wd, gr.Width - (gr.x - this.X) + wd * 2, gr.Height - (gr.y - this.Y) + wd * 2);
                        canvas.restore();
                    }
                };
                LevelObjectInfo.prototype.Reset = function () {
                    this.X = this.O.X;
                    this.Y = this.O.Y;
                    this.Xsp = 0;
                    this.Ysp = 0;
                    this.State = null;
                    this.Xflip = this.O.XFlip;
                    this.Yflip = this.O.YFlip;
                    this.Dead = false;
                    this.PieceLayoutIndex = 0;
                    this.Subdata = this.O.SubType;
                    this.UpperNibble = this.Subdata >> 4;
                    this.LowerNibble = this.Subdata & 0xf;
                    if (this.ObjectData.PieceLayouts.length > this.PieceLayoutIndex && this.ObjectData.PieceLayouts[this.PieceLayoutIndex].pieces.length > 0)
                        this.SetPieceLayoutIndex(this.PieceLayoutIndex);
                };
                LevelObjectInfo.prototype.Collides = function (sonic) {
                    return this.Collision(sonic, false);
                };
                LevelObjectInfo.prototype.HurtsSonic = function (sonic) {
                    return this.Collision(sonic, true);
                };
                LevelObjectInfo.prototype.Kill = function () {
                    this.Dead = true;
                };
                LevelObjectInfo.prototype.Collision = function (sonic, isHurtMap) {
                    if (this.Dead || !this.ObjectData || this.ObjectData.PieceLayouts.length == 0)
                        return null;
                    var pcs = this.Pieces;
                    var mX = ((sonic.x) - this.X) | 0;
                    var mY = ((sonic.y) - this.Y) | 0;
                    for (var _i = 0, pcs_2 = pcs; _i < pcs_2.length; _i++) {
                        var j = pcs_2[_i];
                        var piece = this.ObjectData.Pieces[j.pieceIndex];
                        var asset = this.ObjectData.Assets[piece.assetIndex];
                        if (asset.frames.length > 0) {
                            var frm = asset.frames[j.frameIndex];
                            var map = isHurtMap ? frm.hurtSonicMap : frm.collisionMap;
                            if (this.twoDArray(map, (mX + frm.offsetX), (mY + frm.offsetY), this.Xflip !== !!piece.xflip, this.Yflip !== !!piece.xflip) == true)
                                return j;
                        }
                    }
                    return null;
                };
                LevelObjectInfo.prototype.twoDArray = function (map, x, y, xflip, yflip) {
                    if (!map || x < 0 || y < 0 || x > map.length)
                        return false;
                    var d = map[x];
                    if (!d || y > d.length)
                        return false;
                    return d[y] > 0;
                };
                LevelObjectInfo.prototype.Collide = function (sonic, sensor, piece) {
                    try {
                        return this.ObjectData.OnCollide(this, SonicManager_10.SonicManager.instance.sonicLevel, sonic, sensor, piece);
                    }
                    catch (EJ) {
                        this.Log(EJ.Message, 0);
                        return false;
                    }
                };
                LevelObjectInfo.prototype.HurtSonic = function (sonic, sensor, piece) {
                    try {
                        return this.ObjectData.OnHurtSonic(this, SonicManager_10.SonicManager.instance.sonicLevel, sonic, sensor, piece);
                    }
                    catch (EJ) {
                        this.Log(EJ.Message, 0);
                        return false;
                    }
                };
                return LevelObjectInfo;
            }());
            exports_27("LevelObjectInfo", LevelObjectInfo);
        }
    }
});
System.register("game/level/Ring", ["common/Utils", "game/SonicManager", "common/Enums"], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var Utils_7, SonicManager_11, Enums_3;
    var Ring;
    return {
        setters:[
            function (Utils_7_1) {
                Utils_7 = Utils_7_1;
            },
            function (SonicManager_11_1) {
                SonicManager_11 = SonicManager_11_1;
            },
            function (Enums_3_1) {
                Enums_3 = Enums_3_1;
            }],
        execute: function() {
            Ring = (function (_super) {
                __extends(Ring, _super);
                function Ring(active) {
                    _super.call(this, 0, 0);
                    this.Active = false;
                    this.AnimationIndex = 0;
                    this.TickCount = 0;
                    this.Ysp = 0;
                    this.Xsp = 0;
                    this.Active = active;
                }
                Ring.prototype.Draw = function (canvas, pos) {
                    if (this.Active) {
                        this.Ysp += 0.09375;
                        this.x += this.Xsp;
                        this.y += this.Ysp;
                        var wl = SonicManager_11.SonicManager.instance.windowLocation;
                        if (this.x < wl.x || this.y < wl.y || this.x > wl.x + wl.Width || this.y > wl.y + wl.Height) {
                            this.TickCount = 0xfffffff;
                            return;
                        }
                        if (SonicManager_11.SonicManager.instance.drawTickCount > SonicManager_11.SonicManager.instance.sonicToon.sonicLastHitTick + 64 && Utils_7.IntersectingRectangle.IntersectsRect(SonicManager_11.SonicManager.instance.sonicToon.myRec, new Utils_7.Rectangle(this.x - 8, this.y - 8, 8 * 2, 2 * 8))) {
                            this.TickCount = 0xfffffff;
                            SonicManager_11.SonicManager.instance.sonicToon.rings++;
                            return;
                        }
                        this.TickCount++;
                    }
                    if (SonicManager_11.SonicManager.instance.currentGameState == Enums_3.GameState.Playing)
                        this.AnimationIndex = ((SonicManager_11.SonicManager.instance.drawTickCount % ((this.Active ? 4 : 8) * 4)) / (this.Active ? 4 : 8)) | 0;
                    else
                        this.AnimationIndex = 0;
                    var sprites = null;
                    if (SonicManager_11.SonicManager.instance.spriteCache.Rings)
                        sprites = SonicManager_11.SonicManager.instance.spriteCache.Rings;
                    else
                        throw ("bad ring animation");
                    var sps = sprites[this.AnimationIndex];
                    canvas.drawImage(sps.canvas, (pos.x - 8), (pos.y - 8));
                };
                return Ring;
            }(Utils_7.Point));
            exports_28("Ring", Ring);
        }
    }
});
System.register("game/SonicLevel", [], function(exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var SonicLevel, PaletteItem, PaletteItemPieces;
    return {
        setters:[],
        execute: function() {
            SonicLevel = (function () {
                function SonicLevel() {
                    this.CurHeightMap = false;
                    this.LevelWidth = 0;
                    this.LevelHeight = 0;
                    this.CurPaletteIndex = 0;
                    this.Tiles = new Array();
                    this.TilePieces = new Array();
                    this.TileChunks = new Array();
                    this.ChunkMap = new Array(0);
                    this.Rings = new Array();
                    this.Objects = new Array();
                    this.HeightMaps = new Array();
                    this.Tiles = new Array();
                    this.CurHeightMap = true;
                    this.CurPaletteIndex = 0;
                    this.LevelWidth = 0;
                    this.LevelHeight = 0;
                }
                SonicLevel.prototype.getChunkAt = function (x, y) {
                    return this.TileChunks[this.ChunkMap[x][y]];
                };
                SonicLevel.prototype.ClearCache = function () {
                    for (var _i = 0, _a = this.Tiles; _i < _a.length; _i++) {
                        var tile = _a[_i];
                        tile.ClearCache();
                    }
                    for (var _b = 0, _c = this.TileChunks; _b < _c.length; _b++) {
                        var chunk = _c[_b];
                        chunk.clearCache();
                    }
                };
                SonicLevel.prototype.GetTile = function (tile) {
                    return this.Tiles[tile];
                };
                SonicLevel.prototype.GetTilePiece = function (block) {
                    return this.TilePieces[block];
                };
                SonicLevel.prototype.SetChunkAt = function (x, y, tileChunk) {
                    this.ChunkMap[x][y] = tileChunk.Index;
                };
                return SonicLevel;
            }());
            exports_29("SonicLevel", SonicLevel);
            PaletteItem = (function () {
                function PaletteItem() {
                    this.SkipIndex = 0;
                    this.TotalLength = 0;
                }
                return PaletteItem;
            }());
            exports_29("PaletteItem", PaletteItem);
            PaletteItemPieces = (function () {
                function PaletteItemPieces() {
                    this.PaletteIndex = 0;
                    this.PaletteMultiply = 0;
                    this.PaletteOffset = 0;
                }
                return PaletteItemPieces;
            }());
            exports_29("PaletteItemPieces", PaletteItemPieces);
        }
    }
});
System.register("game/level/Tiles/TilePaletteAnimationManager", [], function(exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var TilePaletteAnimationManager, TilePaletteAnimation, TilePaletteAnimationFrame;
    return {
        setters:[],
        execute: function() {
            TilePaletteAnimationManager = (function () {
                function TilePaletteAnimationManager(sonicManager) {
                    this.SonicManager = sonicManager;
                    this.Init();
                }
                TilePaletteAnimationManager.prototype.Init = function () {
                    this.Animations = {};
                    for (var animatedPaletteIndex = 0; animatedPaletteIndex < this.SonicManager.sonicLevel.AnimatedPalettes.length; animatedPaletteIndex++) {
                        this.Animations[animatedPaletteIndex] = new TilePaletteAnimation(this, this.SonicManager.sonicLevel.AnimatedPalettes[animatedPaletteIndex]);
                        this.Animations[animatedPaletteIndex].Init();
                    }
                };
                TilePaletteAnimationManager.prototype.ClearCache = function () {
                    this.Animations = null;
                };
                TilePaletteAnimationManager.prototype.TickAnimatedPalettes = function () {
                    if (this.Animations == null)
                        this.Init();
                    for (var animation in this.Animations) {
                        var tilePaletteAnimation = this.Animations[animation];
                        tilePaletteAnimation.Tick();
                    }
                };
                TilePaletteAnimationManager.prototype.getCurrentFrame = function (paletteAnimationIndex) {
                    return this.Animations[paletteAnimationIndex].GetCurrentFrame();
                };
                TilePaletteAnimationManager.prototype.GetPaletteAnimation = function (paletteAnimationIndex) {
                    return this.Animations[paletteAnimationIndex];
                };
                return TilePaletteAnimationManager;
            }());
            exports_30("TilePaletteAnimationManager", TilePaletteAnimationManager);
            TilePaletteAnimation = (function () {
                function TilePaletteAnimation(manager, animatedPaletteData) {
                    this.CurrentFrame = 0;
                    this.Manager = manager;
                    this.AnimatedPaletteData = animatedPaletteData;
                    this.Frames = new Array();
                }
                TilePaletteAnimation.prototype.GetCurrentFrame = function () {
                    return this.Frames[this.CurrentFrame];
                };
                TilePaletteAnimation.prototype.Tick = function () {
                    var pal = this.AnimatedPaletteData;
                    if (pal.SkipIndex == 0)
                        return;
                    if (pal.TotalLength == 0)
                        return;
                    for (var j = 0; j <= pal.TotalLength; j += pal.SkipIndex) {
                        if (this.Manager.SonicManager.drawTickCount % (pal.TotalLength + pal.SkipIndex) == j) {
                            this.CurrentFrame = j / pal.SkipIndex;
                        }
                    }
                };
                TilePaletteAnimation.prototype.Init = function () {
                    var pal = this.AnimatedPaletteData;
                    if (pal.SkipIndex == 0)
                        return;
                    if (pal.TotalLength == 0)
                        return;
                    for (var j = 0; j <= pal.TotalLength; j += pal.SkipIndex) {
                        var frameIndex = j / pal.SkipIndex;
                        if (this.Frames[frameIndex] == null) {
                            this.Frames[frameIndex] = new TilePaletteAnimationFrame(frameIndex, this);
                        }
                    }
                };
                return TilePaletteAnimation;
            }());
            exports_30("TilePaletteAnimation", TilePaletteAnimation);
            TilePaletteAnimationFrame = (function () {
                function TilePaletteAnimationFrame(frameIndex, animation) {
                    this.FrameIndex = 0;
                    this.Animation = animation;
                    this.FrameIndex = frameIndex;
                }
                TilePaletteAnimationFrame.prototype.SetPalette = function () {
                    var levelPalette = this.Animation.Manager.SonicManager.sonicLevel.Palette;
                    this.clonePalette(levelPalette);
                    var pal = this.Animation.AnimatedPaletteData;
                    for (var index = 0; index < pal.Pieces.length; index++) {
                        var palettePiece = pal.Pieces[index];
                        var colorIndex = this.FrameIndex + (pal.Pieces.length * index);
                        var replaceIndex = (palettePiece.PaletteOffset) / 2 | 0;
                        var color = pal.Palette[colorIndex];
                        if (color != null)
                            levelPalette[palettePiece.PaletteIndex][replaceIndex] = color;
                        else
                            levelPalette[palettePiece.PaletteIndex][replaceIndex] = "#000000";
                    }
                };
                TilePaletteAnimationFrame.prototype.clonePalette = function (levelPalette) {
                    this.tempPalette = new Array(levelPalette.length);
                    for (var index = 0; index < levelPalette.length; index++) {
                        var canvasElements = levelPalette[index];
                        this.tempPalette[index] = new Array(canvasElements.length);
                        for (var index2 = 0; index2 < canvasElements.length; index2++) {
                            this.tempPalette[index][index2] = canvasElements[index2];
                        }
                    }
                };
                TilePaletteAnimationFrame.prototype.ClearPalette = function () {
                    this.Animation.Manager.SonicManager.sonicLevel.Palette = this.tempPalette;
                    this.tempPalette = null;
                };
                return TilePaletteAnimationFrame;
            }());
            exports_30("TilePaletteAnimationFrame", TilePaletteAnimationFrame);
        }
    }
});
System.register("game/level/Tiles/TileAnimationManager", ["game/SonicManager"], function(exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var SonicManager_12;
    var TileAnimationManager, TileAnimation, TileAnimationFrame;
    return {
        setters:[
            function (SonicManager_12_1) {
                SonicManager_12 = SonicManager_12_1;
            }],
        execute: function() {
            TileAnimationManager = (function () {
                function TileAnimationManager(sonicManager) {
                    this.SonicManager = sonicManager;
                    this.Init();
                }
                TileAnimationManager.prototype.Init = function () {
                    this.Animations = {};
                    for (var animatedTileIndex = 0; animatedTileIndex < this.SonicManager.sonicLevel.TileAnimations.length; animatedTileIndex++) {
                        this.Animations[animatedTileIndex] = new TileAnimation(this, this.SonicManager.sonicLevel.TileAnimations[animatedTileIndex]);
                        this.Animations[animatedTileIndex].init();
                    }
                };
                TileAnimationManager.prototype.TickAnimatedTiles = function () {
                    if (this.Animations == null)
                        this.Init();
                    for (var animation in this.Animations) {
                        if (this.Animations.hasOwnProperty(animation)) {
                            var tilePaletteAnimation = this.Animations[animation];
                            tilePaletteAnimation.tick();
                        }
                    }
                };
                TileAnimationManager.prototype.ClearCache = function () {
                    this.Animations = null;
                };
                TileAnimationManager.prototype.getCurrentFrame = function (tileAnimationIndex) {
                    return this.Animations[tileAnimationIndex].getCurrentFrame();
                };
                return TileAnimationManager;
            }());
            exports_31("TileAnimationManager", TileAnimationManager);
            TileAnimation = (function () {
                function TileAnimation(manager, animatedTileData) {
                    this.currentFrame = 0;
                    this.manager = manager;
                    this.animatedTileData = animatedTileData;
                    this.frames = new Array();
                    this.currentFrame = 0;
                }
                TileAnimation.prototype.getCurrentFrame = function () {
                    return this.frames[this.currentFrame];
                };
                TileAnimation.prototype.tick = function () {
                    var anni = this.animatedTileData;
                    if (anni.LastAnimatedFrame == null) {
                        anni.LastAnimatedFrame = 0;
                        anni.LastAnimatedIndex = 0;
                    }
                    if (anni.DataFrames[anni.LastAnimatedIndex].Ticks == 0 || (SonicManager_12.SonicManager.instance.drawTickCount - anni.LastAnimatedFrame) >= ((anni.AutomatedTiming > 0) ? anni.AutomatedTiming : anni.DataFrames[anni.LastAnimatedIndex].Ticks)) {
                        anni.LastAnimatedFrame = SonicManager_12.SonicManager.instance.drawTickCount;
                        anni.LastAnimatedIndex = (anni.LastAnimatedIndex + 1) % anni.DataFrames.length;
                        this.currentFrame = anni.LastAnimatedIndex;
                    }
                };
                TileAnimation.prototype.init = function () {
                    for (var index = 0; index < this.animatedTileData.DataFrames.length; index++) {
                        this.frames[index] = new TileAnimationFrame(index, this);
                    }
                };
                return TileAnimation;
            }());
            exports_31("TileAnimation", TileAnimation);
            TileAnimationFrame = (function () {
                function TileAnimationFrame(frameIndex, animation) {
                    this.frameIndex = 0;
                    this.animation = animation;
                    this.frameIndex = frameIndex;
                }
                TileAnimationFrame.prototype.frameData = function () {
                    return this.animation.animatedTileData.DataFrames[this.frameIndex];
                };
                return TileAnimationFrame;
            }());
            exports_31("TileAnimationFrame", TileAnimationFrame);
        }
    }
});
System.register("game/level/Tiles/TileChunk", ["common/Utils", "game/SonicManager", "common/CanvasInformation", "common/Enums"], function(exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var Utils_8, SonicManager_13, CanvasInformation_6, Enums_4;
    var TileChunk, TileChunkDebugDrawOptions, ChunkLayer, PaletteAnimationCanvasFrames, PaletteAnimationCanvasFrame, TileAnimationCanvasFrames, TileAnimationCanvasFrame;
    return {
        setters:[
            function (Utils_8_1) {
                Utils_8 = Utils_8_1;
            },
            function (SonicManager_13_1) {
                SonicManager_13 = SonicManager_13_1;
            },
            function (CanvasInformation_6_1) {
                CanvasInformation_6 = CanvasInformation_6_1;
            },
            function (Enums_4_1) {
                Enums_4 = Enums_4_1;
            }],
        execute: function() {
            TileChunk = (function () {
                function TileChunk() {
                    this.myLocalPoint = new Utils_8.Point(0, 0);
                    this.IsOnlyBackground = null;
                }
                TileChunk.prototype.GetTilePieceAt = function (x, y, large) {
                    return this.GetTilePieceInfo(x, y, large).GetTilePiece();
                };
                TileChunk.prototype.SetTilePieceAt = function (x, y, tp, large) {
                    if (this.GetTilePieceInfo(x, y, large).SetTilePiece(tp))
                        this.clearCache();
                };
                TileChunk.prototype.GetTilePieceInfo = function (x, y, large) {
                    if (large) {
                        return this.TilePieces[(x / TileChunk.TilePiecesSquareSize) | 0][(y / TileChunk.TilePiecesSquareSize) | 0];
                    }
                    else {
                        return this.TilePieces[x][y];
                    }
                };
                TileChunk.prototype.onlyBackground = function () {
                    if (!this.IsOnlyBackground) {
                        for (var _i = 0, _a = this.EachPiece(); _i < _a.length; _i++) {
                            var tilePiece = _a[_i];
                            if (!tilePiece.OnlyBackground())
                                return (this.IsOnlyBackground = false);
                        }
                        this.IsOnlyBackground = true;
                        return this.IsOnlyBackground;
                    }
                    return this.IsOnlyBackground;
                };
                TileChunk.prototype.OnlyForeground = function () {
                    if (!this.IsOnlyForeground) {
                        for (var _i = 0, _a = this.EachPiece(); _i < _a.length; _i++) {
                            var tilePiece = _a[_i];
                            if (!tilePiece.OnlyForeground()) {
                                return (this.IsOnlyForeground = false);
                            }
                        }
                        this.IsOnlyForeground = true;
                        return this.IsOnlyForeground;
                    }
                    return this.IsOnlyForeground;
                };
                TileChunk.prototype.isEmpty = function () {
                    if (!this.Empty) {
                        for (var _i = 0, _a = this.EachPiece(); _i < _a.length; _i++) {
                            var tilePiece = _a[_i];
                            if (tilePiece.Index != 0) {
                                return (this.Empty = false);
                            }
                        }
                        this.Empty = true;
                    }
                    return this.Empty;
                };
                TileChunk.prototype.EachPiece = function () {
                    var __result = [];
                    for (var pieceY = 0; pieceY < TileChunk.TilePieceSideLength; pieceY++) {
                        for (var pieceX = 0; pieceX < TileChunk.TilePieceSideLength; pieceX++) {
                            var tilePiece = this.TilePieces[pieceX][pieceY].GetTilePiece();
                            if (tilePiece != null) {
                                __result.push(tilePiece);
                            }
                        }
                    }
                    return __result;
                };
                TileChunk.prototype.hasPixelAnimations = function () {
                    return this.getAllPaletteAnimationIndexes().length > 0;
                };
                TileChunk.prototype.HasTileAnimations = function () {
                    return this.getAllTileAnimationIndexes().length > 0;
                };
                TileChunk.prototype.getAllPaletteAnimationIndexes = function () {
                    if (this.paletteAnimationIndexes == null) {
                        this.paletteAnimationIndexes = [];
                        for (var _i = 0, _a = this.EachPiece(); _i < _a.length; _i++) {
                            var tilePiece = _a[_i];
                            if (tilePiece.AnimatedPaletteIndexes == null)
                                continue;
                            for (var _b = 0, _c = tilePiece.AnimatedPaletteIndexes; _b < _c.length; _b++) {
                                var animatedPaletteIndex = _c[_b];
                                if (this.paletteAnimationIndexes.indexOf(animatedPaletteIndex) == -1) {
                                    this.paletteAnimationIndexes.push(animatedPaletteIndex);
                                }
                            }
                        }
                    }
                    return this.paletteAnimationIndexes;
                };
                TileChunk.prototype.getAllTileAnimationIndexes = function () {
                    if (this.tileAnimationIndexes == null) {
                        this.tileAnimationIndexes = [];
                        for (var _i = 0, _a = this.EachPiece(); _i < _a.length; _i++) {
                            var tilePiece = _a[_i];
                            for (var _b = 0, _c = tilePiece.Tiles; _b < _c.length; _b++) {
                                var tileInfo = _c[_b];
                                var tile = tileInfo.GetTile();
                                if (tile == null)
                                    continue;
                                if (tile.animatedTileIndexes == null)
                                    continue;
                                for (var _d = 0, _e = tile.animatedTileIndexes; _d < _e.length; _d++) {
                                    var animatedTileIndex = _e[_d];
                                    if (this.tileAnimationIndexes.indexOf(animatedTileIndex) == -1) {
                                        this.tileAnimationIndexes.push(animatedTileIndex);
                                    }
                                }
                            }
                        }
                    }
                    return this.tileAnimationIndexes;
                };
                TileChunk.prototype.neverAnimates = function () {
                    return !(this.HasTileAnimations() || this.hasPixelAnimations());
                };
                TileChunk.prototype.draw = function (canvas, position, layer) {
                    canvas.save();
                    {
                        canvas.drawImage(this.baseCanvasCache[layer].canvas, position.x, position.y);
                        if (this.hasPixelAnimations()) {
                            var paletteAnimationCanvases = this.paletteAnimationCanvasesCache[layer];
                            for (var _i = 0, _a = this.getAllPaletteAnimationIndexes(); _i < _a.length; _i++) {
                                var paletteAnimationIndex = _a[_i];
                                var paletteAnimationCanvasFrames = paletteAnimationCanvases[paletteAnimationIndex];
                                if (paletteAnimationCanvasFrames == null)
                                    continue;
                                var currentFrame = SonicManager_13.SonicManager.instance.tilePaletteAnimationManager.getCurrentFrame(paletteAnimationIndex);
                                this.currentPaletteAnimationFrameIndexCache[paletteAnimationIndex] = currentFrame.FrameIndex;
                                var paletteAnimationCanvasFrame = paletteAnimationCanvasFrames.frames[currentFrame.FrameIndex];
                                var canvasLayerToDraw = paletteAnimationCanvasFrame.canvas.canvas;
                                canvas.drawImage(canvasLayerToDraw, position.x + paletteAnimationCanvasFrames.position.x, position.y + paletteAnimationCanvasFrames.position.y);
                            }
                        }
                        if (this.HasTileAnimations()) {
                            var tileAnimationCanvases = this.tileAnimationCanvasesCache[layer];
                            for (var _b = 0, _c = this.getAllTileAnimationIndexes(); _b < _c.length; _b++) {
                                var tileAnimationIndex = _c[_b];
                                var tileAnimationCanvasFrames = tileAnimationCanvases[tileAnimationIndex];
                                if (tileAnimationCanvasFrames == null)
                                    continue;
                                var currentFrame = SonicManager_13.SonicManager.instance.tileAnimationManager.getCurrentFrame(tileAnimationIndex);
                                this.currentTileAnimationFrameIndexCache[tileAnimationIndex] = currentFrame.frameIndex;
                                var tileAnimationCanvasFrame = tileAnimationCanvasFrames.frames[currentFrame.frameIndex];
                                var canvasLayerToDraw = tileAnimationCanvasFrame.canvas.canvas;
                                canvas.drawImage(canvasLayerToDraw, position.x + tileAnimationCanvasFrames.position.x, position.y + tileAnimationCanvasFrames.position.y);
                            }
                        }
                    }
                    canvas.restore();
                };
                TileChunk.prototype.drawTilePiecesAnimatedPalette = function (canvas, layer, piecesSquareSize, animatedPaletteIndex) {
                    for (var pieceY = 0; pieceY < TileChunk.TilePieceSideLength; pieceY++) {
                        for (var pieceX = 0; pieceX < TileChunk.TilePieceSideLength; pieceX++) {
                            var pieceInfo = this.TilePieces[pieceX][pieceY];
                            var piece = pieceInfo.GetTilePiece();
                            if (piece == null)
                                continue;
                            if (piece.AnimatedPaletteIndexes.indexOf(animatedPaletteIndex) == -1)
                                continue;
                            if (layer == Enums_4.ChunkLayerState.Low ? (piece.OnlyForeground()) : (piece.OnlyBackground()))
                                continue;
                            this.myLocalPoint.x = pieceX * piecesSquareSize;
                            this.myLocalPoint.y = pieceY * piecesSquareSize;
                            piece.DrawAnimatedPalette(canvas, this.myLocalPoint, layer, pieceInfo.XFlip, pieceInfo.YFlip, animatedPaletteIndex);
                        }
                    }
                };
                TileChunk.prototype.drawTilePiecesAnimatedTile = function (canvas, layer, piecesSquareSize, animatedTileIndex) {
                    for (var pieceY = 0; pieceY < TileChunk.TilePieceSideLength; pieceY++) {
                        for (var pieceX = 0; pieceX < TileChunk.TilePieceSideLength; pieceX++) {
                            var pieceInfo = this.TilePieces[pieceX][pieceY];
                            var piece = pieceInfo.GetTilePiece();
                            if (piece == null)
                                continue;
                            if (piece.AnimatedTileIndexes.indexOf(animatedTileIndex) == -1)
                                continue;
                            if (layer == Enums_4.ChunkLayerState.Low ? (piece.OnlyForeground()) : (piece.OnlyBackground()))
                                continue;
                            this.myLocalPoint.x = pieceX * piecesSquareSize;
                            this.myLocalPoint.y = pieceY * piecesSquareSize;
                            piece.DrawAnimatedTile(canvas, this.myLocalPoint, layer, pieceInfo.XFlip, pieceInfo.YFlip, animatedTileIndex);
                        }
                    }
                };
                TileChunk.prototype.drawTilePiecesBase = function (canvas, layer, piecesSquareSize) {
                    for (var pieceY = 0; pieceY < TileChunk.TilePieceSideLength; pieceY++) {
                        for (var pieceX = 0; pieceX < TileChunk.TilePieceSideLength; pieceX++) {
                            var pieceInfo = this.TilePieces[pieceX][pieceY];
                            var piece = pieceInfo.GetTilePiece();
                            if (piece == null)
                                continue;
                            if (layer == Enums_4.ChunkLayerState.Low ? (piece.OnlyForeground()) : (piece.OnlyBackground()))
                                continue;
                            this.myLocalPoint.x = pieceX * piecesSquareSize;
                            this.myLocalPoint.y = pieceY * piecesSquareSize;
                            piece.DrawBase(canvas, this.myLocalPoint, layer, pieceInfo.XFlip, pieceInfo.YFlip);
                        }
                    }
                };
                /*cache */
                TileChunk.prototype.clearCache = function () {
                    this.initCache();
                    this.warmCache();
                };
                TileChunk.prototype.initCache = function () {
                    this.baseCanvasCache = new ChunkLayer();
                    this.paletteAnimationCanvasesCache = new ChunkLayer();
                    this.tileAnimationCanvasesCache = new ChunkLayer();
                    this.tileAnimationCanvasesCache[Enums_4.ChunkLayerState.Low] = {};
                    this.tileAnimationCanvasesCache[Enums_4.ChunkLayerState.High] = {};
                    this.paletteAnimationCanvasesCache[Enums_4.ChunkLayerState.Low] = {};
                    this.paletteAnimationCanvasesCache[Enums_4.ChunkLayerState.High] = {};
                    this.currentTileAnimationFrameIndexCache = [];
                    this.currentPaletteAnimationFrameIndexCache = [];
                };
                TileChunk.prototype.warmCache = function () {
                    this.cacheBase(Enums_4.ChunkLayerState.Low);
                    this.cacheBase(Enums_4.ChunkLayerState.High);
                    if (this.hasPixelAnimations()) {
                        this.cachePaletteAnimation(Enums_4.ChunkLayerState.Low);
                        this.cachePaletteAnimation(Enums_4.ChunkLayerState.High);
                    }
                    if (this.HasTileAnimations()) {
                        this.cacheTileAnimation(Enums_4.ChunkLayerState.Low);
                        this.cacheTileAnimation(Enums_4.ChunkLayerState.High);
                    }
                };
                TileChunk.prototype.cacheBase = function (layer) {
                    if (layer == Enums_4.ChunkLayerState.Low ? (this.OnlyForeground()) : (this.onlyBackground()))
                        return;
                    this.baseCanvasCache[layer] = CanvasInformation_6.CanvasInformation.create(TileChunk.TilePieceSideLength * TileChunk.TilePiecesSquareSize, TileChunk.TilePieceSideLength * TileChunk.TilePiecesSquareSize, false);
                    this.drawTilePiecesBase(this.baseCanvasCache[layer].Context, layer, TileChunk.TilePiecesSquareSize);
                };
                TileChunk.prototype.cachePaletteAnimation = function (layer) {
                    var paletteAnimationCanvases = this.paletteAnimationCanvasesCache[layer];
                    for (var _i = 0, _a = this.getAllPaletteAnimationIndexes(); _i < _a.length; _i++) {
                        var paletteAnimationIndex = _a[_i];
                        var rect = this.getAnimationPaletteSurfaceInformation(paletteAnimationIndex, layer);
                        if (rect == null) {
                            continue;
                        }
                        var paletteAnimationCanvasFrames = paletteAnimationCanvases[paletteAnimationIndex] = new PaletteAnimationCanvasFrames(paletteAnimationIndex);
                        var tilePaletteAnimation = SonicManager_13.SonicManager.instance.tilePaletteAnimationManager.Animations[paletteAnimationIndex];
                        paletteAnimationCanvasFrames.position = new Utils_8.Point(rect.x * TileChunk.TilePiecesSquareSize, rect.y * TileChunk.TilePiecesSquareSize);
                        for (var _b = 0, _c = tilePaletteAnimation.Frames; _b < _c.length; _b++) {
                            var currentFrame = _c[_b];
                            tilePaletteAnimation.CurrentFrame = currentFrame.FrameIndex;
                            var paletteAnimationCanvasFrame = paletteAnimationCanvasFrames.frames[currentFrame.FrameIndex] = new PaletteAnimationCanvasFrame();
                            currentFrame.SetPalette();
                            var tilePaletteCanvas = CanvasInformation_6.CanvasInformation.create(rect.Width * TileChunk.TilePiecesSquareSize, rect.Height * TileChunk.TilePiecesSquareSize, false);
                            paletteAnimationCanvasFrame.canvas = tilePaletteCanvas;
                            paletteAnimationCanvasFrame.canvas.Context.save();
                            paletteAnimationCanvasFrame.canvas.Context.translate(-rect.x * TileChunk.TilePiecesSquareSize, -rect.y * TileChunk.TilePiecesSquareSize);
                            this.drawTilePiecesAnimatedPalette(tilePaletteCanvas.Context, layer, TileChunk.TilePiecesSquareSize, paletteAnimationIndex);
                            paletteAnimationCanvasFrame.canvas.Context.restore();
                            currentFrame.ClearPalette();
                        }
                        tilePaletteAnimation.CurrentFrame = 0;
                    }
                };
                TileChunk.prototype.cacheTileAnimation = function (layer) {
                    var tileAnimationCanvases = this.tileAnimationCanvasesCache[layer];
                    for (var _i = 0, _a = this.getAllTileAnimationIndexes(); _i < _a.length; _i++) {
                        var tileAnimationIndex = _a[_i];
                        var rect = this.getAnimationTileSurfaceInformation(tileAnimationIndex, layer);
                        if (rect == null) {
                            continue;
                        }
                        var tileAnimationCanvasFrames = tileAnimationCanvases[tileAnimationIndex] = new TileAnimationCanvasFrames(tileAnimationIndex);
                        var tileAnimation = SonicManager_13.SonicManager.instance.tileAnimationManager.Animations[tileAnimationIndex];
                        tileAnimationCanvasFrames.position = new Utils_8.Point(rect.x * TileChunk.TilePiecesSquareSize, rect.y * TileChunk.TilePiecesSquareSize);
                        for (var _b = 0, _c = tileAnimation.frames; _b < _c.length; _b++) {
                            var currentFrame = _c[_b];
                            var tileAnimationCanvasFrame = tileAnimationCanvasFrames.frames[currentFrame.frameIndex] = new TileAnimationCanvasFrame();
                            var tileTileCanvas = CanvasInformation_6.CanvasInformation.create(rect.Width * TileChunk.TilePiecesSquareSize, rect.Height * TileChunk.TilePiecesSquareSize, false);
                            tileAnimationCanvasFrame.canvas = tileTileCanvas;
                            tileAnimation.currentFrame = currentFrame.frameIndex;
                            tileAnimationCanvasFrame.canvas.Context.save();
                            tileAnimationCanvasFrame.canvas.Context.translate(-rect.x * TileChunk.TilePiecesSquareSize, -rect.y * TileChunk.TilePiecesSquareSize);
                            this.drawTilePiecesAnimatedTile(tileTileCanvas.Context, layer, TileChunk.TilePiecesSquareSize, tileAnimationIndex);
                            tileAnimationCanvasFrame.canvas.Context.restore();
                        }
                        tileAnimation.currentFrame = 0;
                    }
                };
                TileChunk.prototype.getAnimationTileSurfaceInformation = function (tileAnimationIndex, layer) {
                    var lowestX = 10000000;
                    var highestX = -10000000;
                    var lowestY = 10000000;
                    var highestY = -10000000;
                    for (var pieceY = 0; pieceY < TileChunk.TilePieceSideLength; pieceY++) {
                        for (var pieceX = 0; pieceX < TileChunk.TilePieceSideLength; pieceX++) {
                            var pieceInfo = this.TilePieces[pieceX][pieceY];
                            var piece = pieceInfo.GetTilePiece();
                            if (piece == null)
                                continue;
                            if (layer == Enums_4.ChunkLayerState.Low ? (piece.OnlyForeground()) : (piece.OnlyBackground()))
                                continue;
                            if (piece.AnimatedTileIndexes.indexOf(tileAnimationIndex) == -1)
                                continue;
                            if (pieceX < lowestX)
                                lowestX = pieceX;
                            if (pieceX > highestX)
                                highestX = pieceX;
                            if (pieceY < lowestY)
                                lowestY = pieceY;
                            if (pieceY > highestY)
                                highestY = pieceY;
                        }
                    }
                    if (lowestX == 10000000)
                        return null;
                    return new Utils_8.Rectangle(lowestX, lowestY, highestX - lowestX + 1, highestY - lowestY + 1);
                };
                TileChunk.prototype.getAnimationPaletteSurfaceInformation = function (paletteAnimationIndex, layer) {
                    var lowestX = 10000000;
                    var highestX = -10000000;
                    var lowestY = 10000000;
                    var highestY = -10000000;
                    for (var pieceY = 0; pieceY < TileChunk.TilePieceSideLength; pieceY++) {
                        for (var pieceX = 0; pieceX < TileChunk.TilePieceSideLength; pieceX++) {
                            var piece = this.TilePieces[pieceX][pieceY].GetTilePiece();
                            if (piece == null)
                                continue;
                            if (layer == Enums_4.ChunkLayerState.Low ? (piece.OnlyForeground()) : (piece.OnlyBackground()))
                                continue;
                            if (piece.AnimatedPaletteIndexes.indexOf(paletteAnimationIndex) == -1)
                                continue;
                            if (pieceX < lowestX)
                                lowestX = pieceX;
                            if (pieceX > highestX)
                                highestX = pieceX;
                            if (pieceY < lowestY)
                                lowestY = pieceY;
                            if (pieceY > highestY)
                                highestY = pieceY;
                        }
                    }
                    if (lowestX == 10000000)
                        return null;
                    return new Utils_8.Rectangle(lowestX, lowestY, highestX - lowestX + 1, highestY - lowestY + 1);
                };
                /*debug*/
                TileChunk.prototype.DrawAnimationDebug = function (canvas, position, layer, debugDrawOptions) {
                    if (debugDrawOptions == null)
                        return;
                    canvas.save();
                    canvas.fillStyle = "White";
                    canvas.textBaseline = "top";
                    {
                        var yOffset = layer == Enums_4.ChunkLayerState.Low ? 0 : 64;
                        if (debugDrawOptions.showBaseData) {
                            canvas.fillText("Base", position.x + 0, position.y + yOffset);
                        }
                        if (debugDrawOptions.showPaletteAnimationData) {
                            if (this.hasPixelAnimations()) {
                                var paletteAnimationCanvases = this.paletteAnimationCanvasesCache[layer];
                                for (var _i = 0, _a = this.getAllPaletteAnimationIndexes(); _i < _a.length; _i++) {
                                    var paletteAnimationIndex = _a[_i];
                                    var paletteAnimationCanvasFrames = paletteAnimationCanvases[paletteAnimationIndex];
                                    if (paletteAnimationCanvasFrames == null)
                                        continue;
                                    var currentFrame = SonicManager_13.SonicManager.instance.tilePaletteAnimationManager.getCurrentFrame(paletteAnimationIndex);
                                    canvas.fillText("Palette " + paletteAnimationIndex + "-" + currentFrame.FrameIndex, position.x + 25, position.y + yOffset + (paletteAnimationIndex * 13));
                                }
                            }
                        }
                        if (debugDrawOptions.showTileAnimationData) {
                            if (this.HasTileAnimations()) {
                                var tileAnimationCanvases = this.tileAnimationCanvasesCache[layer];
                                for (var _b = 0, _c = this.getAllTileAnimationIndexes(); _b < _c.length; _b++) {
                                    var tileAnimationIndex = _c[_b];
                                    var tileAnimationCanvasFrames = tileAnimationCanvases[tileAnimationIndex];
                                    if (tileAnimationCanvasFrames == null)
                                        continue;
                                    var currentFrame = SonicManager_13.SonicManager.instance.tileAnimationManager.getCurrentFrame(tileAnimationIndex);
                                    canvas.fillText("Tile " + tileAnimationIndex + "-" + currentFrame.frameIndex, position.x + 75, position.y + yOffset + (tileAnimationIndex * 13));
                                }
                            }
                        }
                    }
                    if (debugDrawOptions.putlineChunk) {
                        canvas.strokeStyle = "black";
                        canvas.strokeRect(position.x, position.y, 128, 128);
                    }
                    if (debugDrawOptions.outlineTiles) {
                        canvas.strokeStyle = "green";
                        for (var x = 0; x < TileChunk.TileSideLength; x++) {
                            for (var y = 0; y < TileChunk.TileSideLength; y++) {
                                canvas.strokeRect(position.x + (x * TileChunk.TileSquareSize), position.y + (y * TileChunk.TileSquareSize), TileChunk.TileSquareSize, TileChunk.TileSquareSize);
                            }
                        }
                    }
                    if (debugDrawOptions.outlineTilePieces) {
                        canvas.strokeStyle = "purple";
                        for (var x = 0; x < TileChunk.TilePieceSideLength; x++) {
                            for (var y = 0; y < TileChunk.TilePieceSideLength; y++) {
                                canvas.strokeRect(position.x + (x * TileChunk.TilePiecesSquareSize), position.y + (y * TileChunk.TilePiecesSquareSize), TileChunk.TilePiecesSquareSize, TileChunk.TilePiecesSquareSize);
                            }
                        }
                    }
                    if (debugDrawOptions.outlineTile != null) {
                    }
                    if (debugDrawOptions.outlineTilePiece != null) {
                        canvas.strokeStyle = "yellow";
                        for (var x = 0; x < TileChunk.TilePieceSideLength; x++) {
                            for (var y = 0; y < TileChunk.TilePieceSideLength; y++) {
                                var tilePieceInfo = this.GetTilePieceInfo(x, y, false);
                                if (tilePieceInfo == null)
                                    continue;
                                var tilePiece = tilePieceInfo.GetTilePiece();
                                if (tilePiece == null)
                                    continue;
                                if (tilePiece.Index == debugDrawOptions.outlineTilePiece.Block) {
                                    canvas.strokeRect(position.x + (x * TileChunk.TilePiecesSquareSize), position.y + (y * TileChunk.TilePiecesSquareSize), TileChunk.TilePiecesSquareSize, TileChunk.TilePiecesSquareSize);
                                }
                            }
                        }
                    }
                    canvas.restore();
                };
                TileChunk.prototype.Debug_DrawCache = function () {
                    var numWide = 10;
                    var numOfChunks = 0;
                    for (var i = 0; i < 2; i++) {
                        var chunkLayer = i;
                        if (this.baseCanvasCache[chunkLayer] != null)
                            numOfChunks++;
                        for (var paletteAnimationCanvasCache in this.paletteAnimationCanvasesCache[chunkLayer]) {
                            for (var frame in this.paletteAnimationCanvasesCache[chunkLayer][paletteAnimationCanvasCache].frames) {
                                numOfChunks++;
                            }
                        }
                        for (var tileAnimationCanvasCache in this.tileAnimationCanvasesCache[chunkLayer]) {
                            for (var frame in this.tileAnimationCanvasesCache[chunkLayer][tileAnimationCanvasCache].frames) {
                                numOfChunks++;
                            }
                        }
                    }
                    var canvas = CanvasInformation_6.CanvasInformation.create((numWide * 128), (Math.ceil(numOfChunks / numWide) | 0) * 128, false);
                    canvas.Context.fillStyle = "#111111";
                    canvas.Context.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
                    numOfChunks = 0;
                    canvas.Context.strokeStyle = "#FFFFFF";
                    canvas.Context.lineWidth = 4;
                    for (var i = 0; i < 2; i++) {
                        var chunkLayer = i;
                        canvas.Context.strokeStyle = chunkLayer == Enums_4.ChunkLayerState.Low ? "Green" : "Yellow";
                        if (this.baseCanvasCache[chunkLayer] != null) {
                            var context = canvas.Context;
                            context.save();
                            var x = ((numOfChunks % numWide) * 128) | 0;
                            var y = (Math.floor(numOfChunks / numWide) | 0) * 128;
                            context.translate(x, y);
                            canvas.Context.fillStyle = chunkLayer == Enums_4.ChunkLayerState.Low ? "#333333" : "#777777";
                            context.fillRect(0, 0, 128, 128);
                            context.drawImage(this.baseCanvasCache[chunkLayer].canvas, 0, 0);
                            context.strokeRect(0, 0, 128, 128);
                            context.restore();
                            numOfChunks++;
                        }
                        canvas.Context.strokeStyle = chunkLayer == Enums_4.ChunkLayerState.Low ? "pink" : "purple";
                        for (var paletteAnimationCanvasCache in this.paletteAnimationCanvasesCache[chunkLayer]) {
                            var m = this.paletteAnimationCanvasesCache[chunkLayer][paletteAnimationCanvasCache];
                            for (var f in m.frames) {
                                var frame = m.frames[f];
                                var context = canvas.Context;
                                context.save();
                                var x = ((numOfChunks % numWide) * 128) | 0;
                                var y = (Math.floor(numOfChunks / numWide) | 0) * 128;
                                context.translate(x, y);
                                canvas.Context.fillStyle = chunkLayer == Enums_4.ChunkLayerState.Low ? "#333333" : "#777777";
                                context.fillRect(0, 0, 128, 128);
                                context.drawImage(frame.canvas.canvas, m.position.x, m.position.y);
                                context.strokeRect(0, 0, 128, 128);
                                context.restore();
                                numOfChunks++;
                            }
                        }
                        canvas.Context.strokeStyle = chunkLayer == Enums_4.ChunkLayerState.Low ? "red" : "orange";
                        for (var tileAnimationCanvasCache in this.tileAnimationCanvasesCache[chunkLayer]) {
                            var m = this.tileAnimationCanvasesCache[chunkLayer][tileAnimationCanvasCache];
                            for (var f in m.frames) {
                                var frame = m.frames[f];
                                var context = canvas.Context;
                                context.save();
                                var x = ((numOfChunks % numWide) * 128) | 0;
                                var y = (Math.floor(numOfChunks / numWide) | 0) * 128;
                                context.translate(x, y);
                                canvas.Context.fillStyle = chunkLayer == Enums_4.ChunkLayerState.Low ? "#333333" : "#777777";
                                context.fillRect(0, 0, 128, 128);
                                context.drawImage(frame.canvas.canvas, m.position.y, m.position.y);
                                context.strokeRect(0, 0, 128, 128);
                                context.restore();
                                numOfChunks++;
                            }
                        }
                    }
                    canvas.Context.strokeStyle = "blue";
                    canvas.Context.strokeRect(0, 0, canvas.canvas.width, canvas.canvas.height);
                    canvas.Context.fillStyle = "white";
                    canvas.Context.font = "20px bold";
                    canvas.Context.fillText("Number Of Chunks: " + numOfChunks, 50, 50);
                    return canvas;
                };
                TileChunk.TilePiecesSquareSize = 16;
                TileChunk.TileSquareSize = 8;
                TileChunk.Size = TileChunk.TilePiecesSquareSize * TileChunk.TilePieceSideLength;
                TileChunk.TilePieceSideLength = 8;
                TileChunk.TileSideLength = 16;
                return TileChunk;
            }());
            exports_32("TileChunk", TileChunk);
            TileChunkDebugDrawOptions = (function () {
                function TileChunkDebugDrawOptions() {
                }
                return TileChunkDebugDrawOptions;
            }());
            exports_32("TileChunkDebugDrawOptions", TileChunkDebugDrawOptions);
            ChunkLayer = (function () {
                function ChunkLayer() {
                }
                return ChunkLayer;
            }());
            exports_32("ChunkLayer", ChunkLayer);
            PaletteAnimationCanvasFrames = (function () {
                function PaletteAnimationCanvasFrames(paletteAnimationIndex) {
                    this.paletteAnimationIndex = paletteAnimationIndex;
                    this.frames = {};
                }
                return PaletteAnimationCanvasFrames;
            }());
            exports_32("PaletteAnimationCanvasFrames", PaletteAnimationCanvasFrames);
            PaletteAnimationCanvasFrame = (function () {
                function PaletteAnimationCanvasFrame() {
                }
                return PaletteAnimationCanvasFrame;
            }());
            exports_32("PaletteAnimationCanvasFrame", PaletteAnimationCanvasFrame);
            TileAnimationCanvasFrames = (function () {
                function TileAnimationCanvasFrames(tileAnimationIndex) {
                    this.tileAnimationIndex = tileAnimationIndex;
                    this.frames = {};
                }
                return TileAnimationCanvasFrames;
            }());
            exports_32("TileAnimationCanvasFrames", TileAnimationCanvasFrames);
            TileAnimationCanvasFrame = (function () {
                function TileAnimationCanvasFrame() {
                }
                return TileAnimationCanvasFrame;
            }());
            exports_32("TileAnimationCanvasFrame", TileAnimationCanvasFrame);
        }
    }
});
System.register("game/sonic/SensorManager", ["SLData", "game/level/HeightMap", "common/Help", "game/SonicManager", "common/Enums"], function(exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var SLData_2, HeightMap_1, Help_3, SonicManager_14, Enums_5;
    var SensorManager, Sensor, SensorM;
    return {
        setters:[
            function (SLData_2_1) {
                SLData_2 = SLData_2_1;
            },
            function (HeightMap_1_1) {
                HeightMap_1 = HeightMap_1_1;
            },
            function (Help_3_1) {
                Help_3 = Help_3_1;
            },
            function (SonicManager_14_1) {
                SonicManager_14 = SonicManager_14_1;
            },
            function (Enums_5_1) {
                Enums_5 = Enums_5_1;
            }],
        execute: function() {
            SensorManager = (function () {
                function SensorManager() {
                    this.sensors = {};
                    this.sensorResults = {};
                }
                SensorManager.prototype.addSensor = function (letter, sensor) {
                    this.sensors[letter] = (sensor);
                    this.sensorResults[letter] = null;
                    return sensor;
                };
                SensorManager.prototype.createVerticalSensor = function (letter, x, y1, y2, color, ignoreSolid) {
                    if (ignoreSolid === void 0) { ignoreSolid = false; }
                    return this.addSensor(letter, new Sensor(x, x, y1, y2, this, color, ignoreSolid, letter));
                };
                SensorManager.prototype.createHorizontalSensor = function (letter, y, x1, x2, color, ignoreSolid) {
                    if (ignoreSolid === void 0) { ignoreSolid = false; }
                    return this.addSensor(letter, new Sensor(x1, x2, y, y, this, color, ignoreSolid, letter));
                };
                SensorManager.prototype.check = function (character) {
                    var none = false;
                    for (var i in this.sensors) {
                        this.sensorResults[i] = this.sensors[i].check(character);
                        none = none || (this.sensorResults[i] != null);
                    }
                    return none;
                };
                SensorManager.prototype.getResult = function (mn) {
                    return this.sensorResults[mn];
                };
                SensorManager.prototype.draw = function (canvas, sonic) {
                    for (var sensor in this.sensors) {
                        this.sensors[sensor].draw(canvas, sonic, this.sensorResults[sensor]);
                    }
                };
                SensorManager.prototype.buildChunk = function (chunk, isLayerOne) {
                    if (isLayerOne) {
                        if (chunk.HeightBlocks1)
                            return;
                        var hb1 = chunk.HeightBlocks1 = new Array(128);
                        var ab1 = chunk.AngleMap1 = new Array(8);
                        for (var _1 = 0; _1 < 128; _1++) {
                            hb1[_1] = new Array(128);
                            for (var _2 = 0; _2 < 128; _2++) {
                                hb1[_1][_2] = 0;
                            }
                        }
                        for (var _1 = 0; _1 < 8; _1++) {
                            ab1[_1] = new Array(8);
                            for (var _2 = 0; _2 < 8; _2++) {
                                ab1[_1][_2] = 0;
                            }
                        }
                        for (var _y = 0; _y < 8; _y++) {
                            for (var _x = 0; _x < 8; _x++) {
                                var tp = chunk.TilePieces[_x][_y];
                                ab1[_x][_y] = tp.GetLayer1Angles();
                                if (!(ab1[_x][_y] == 0 || ab1[_x][_y] == 255 || ab1[_x][_y] == 1)) {
                                    if (tp.XFlip) {
                                        if (tp.YFlip) {
                                            ab1[_x][_y] = 192 - ab1[_x][_y] + 192;
                                            ab1[_x][_y] = 128 - ab1[_x][_y] + 128;
                                        }
                                        else
                                            ab1[_x][_y] = 128 - ab1[_x][_y] + 128;
                                    }
                                    else {
                                        if (tp.YFlip)
                                            ab1[_x][_y] = 192 - ab1[_x][_y] + 192;
                                        else
                                            ab1[_x][_y] = (ab1[_x][_y]);
                                    }
                                }
                                var heightMask = tp.GetLayer1HeightMaps();
                                var heightMaskItems = null;
                                if (heightMask == null)
                                    continue;
                                var mj = void 0;
                                if (heightMask.Full !== undefined) {
                                    mj = heightMask.Full === false ? 0 : tp.Solid1;
                                    for (var __y = 0; __y < 16; __y++) {
                                        for (var __x = 0; __x < 16; __x++) {
                                            hb1[(_x * 16 + __x)][(_y * 16 + __y)] = mj;
                                        }
                                    }
                                }
                                else {
                                    heightMaskItems = heightMask.Items;
                                }
                                for (var __y = 0; __y < 16; __y++) {
                                    for (var __x = 0; __x < 16; __x++) {
                                        var jx = 0;
                                        var jy = 0;
                                        if (tp.XFlip) {
                                            if (tp.YFlip) {
                                                jx = 15 - __x;
                                                jy = 15 - __y;
                                            }
                                            else {
                                                jx = 15 - __x;
                                                jy = __y;
                                            }
                                        }
                                        else {
                                            if (tp.YFlip) {
                                                jx = __x;
                                                jy = 15 - __y;
                                            }
                                            else {
                                                jx = __x;
                                                jy = __y;
                                            }
                                        }
                                        if (heightMask.Full === undefined) {
                                            switch (tp.Solid1) {
                                                case 0:
                                                    hb1[(_x * 16 + jx)][(_y * 16 + jy)] = 0;
                                                    break;
                                                case 1:
                                                case 2:
                                                case 3:
                                                    hb1[(_x * 16 + jx)][(_y * 16 + jy)] = HeightMap_1.HeightMap.ItemsGood(heightMaskItems, __x, __y) ? tp.Solid1 : 0;
                                                    break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (chunk.HeightBlocks2)
                            return;
                        var hb2 = chunk.HeightBlocks2 = new Array(128);
                        var ab2 = chunk.AngleMap2 = new Array(8);
                        for (var _1 = 0; _1 < 128; _1++) {
                            hb2[_1] = new Array(128);
                        }
                        for (var _1 = 0; _1 < 8; _1++) {
                            ab2[_1] = new Array(8);
                        }
                        for (var _y = 0; _y < 8; _y++) {
                            for (var _x = 0; _x < 8; _x++) {
                                var tp = chunk.TilePieces[_x][_y];
                                ab2[_x][_y] = tp.GetLayer2Angles();
                                if (!(ab2[_x][_y] == 0 || ab2[_x][_y] == 255 || ab2[_x][_y] == 1)) {
                                    if (tp.XFlip) {
                                        if (tp.YFlip) {
                                            ab2[_x][_y] = 192 - ab2[_x][_y] + 192;
                                            ab2[_x][_y] = 128 - ab2[_x][_y] + 128;
                                        }
                                        else
                                            ab2[_x][_y] = 128 - ab2[_x][_y] + 128;
                                    }
                                    else {
                                        if (tp.YFlip)
                                            ab2[_x][_y] = 192 - ab2[_x][_y] + 192;
                                        else
                                            ab2[_x][_y] = (ab2[_x][_y]);
                                    }
                                }
                                var hd2 = tp.GetLayer2HeightMaps();
                                if (hd2 == null)
                                    continue;
                                var mj = void 0;
                                var hd2Items = null;
                                if (hd2.Full !== undefined) {
                                    mj = hd2.Full === false ? 0 : tp.Solid2;
                                    for (var __y = 0; __y < 16; __y++) {
                                        for (var __x = 0; __x < 16; __x++) {
                                            hb2[(_x * 16 + __x)][(_y * 16 + __y)] = mj;
                                        }
                                    }
                                }
                                else
                                    hd2Items = hd2.Items;
                                for (var __y = 0; __y < 16; __y++) {
                                    for (var __x = 0; __x < 16; __x++) {
                                        var jx = 0;
                                        var jy = 0;
                                        if (tp.XFlip) {
                                            if (tp.YFlip) {
                                                jx = 15 - __x;
                                                jy = 15 - __y;
                                            }
                                            else {
                                                jx = 15 - __x;
                                                jy = __y;
                                            }
                                        }
                                        else {
                                            if (tp.YFlip) {
                                                jx = __x;
                                                jy = 15 - __y;
                                            }
                                            else {
                                                jx = __x;
                                                jy = __y;
                                            }
                                        }
                                        if (hd2.Full === undefined) {
                                            switch (tp.Solid2) {
                                                case 0:
                                                    hb2[(_x * 16 + jx)][(_y * 16 + jy)] = SLData_2.Solidity.NotSolid;
                                                    break;
                                                case 1:
                                                case 2:
                                                case 3:
                                                    hb2[(_x * 16 + jx)][(_y * 16 + jy)] = HeightMap_1.HeightMap.ItemsGood(hd2Items, __x, __y) ? tp.Solid2 : 0;
                                                    break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                return SensorManager;
            }());
            exports_33("SensorManager", SensorManager);
            Sensor = (function () {
                function Sensor(x1, x2, y1, y2, manager, color, ignoreSolid, letter) {
                    this.__currentM = new SensorM(0, 0);
                    this.value = 0;
                    this.angle = 0;
                    this.chosen = false;
                    this.ignoreSolid = false;
                    this.x1 = 0;
                    this.x2 = 0;
                    this.y1 = 0;
                    this.y2 = 0;
                    this.x1 = x1;
                    this.x2 = x2;
                    this.y1 = y1;
                    this.y2 = y2;
                    this.manager = manager;
                    this.color = color;
                    this.ignoreSolid = ignoreSolid;
                    this.letter = letter;
                }
                Sensor.prototype.checkCollisionLineWrap = function (x1, x2, y1, y2, ignoreSolid) {
                    var _x = (x1 / 128) | 0;
                    var _y = Help_3.Help.mod((y1 / 128) | 0, SonicManager_14.SonicManager.instance.sonicLevel.LevelHeight);
                    var tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x, _y);
                    this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                    var curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                    var cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                    var __x = x1 - _x * 128;
                    var __y = y1 - _y * 128;
                    var length = 0;
                    if (y1 == y2) {
                        if (Math.max(x1, x2) > SonicManager_14.SonicManager.instance.sonicLevel.LevelWidth * 128) {
                            this.__currentM.value = SonicManager_14.SonicManager.instance.sonicLevel.LevelWidth * 128 - 20;
                            this.__currentM.angle = 0xff;
                            return this.__currentM;
                        }
                        if (x1 < x2) {
                            length = x2 - x1;
                            if (curh[(__x)][__y] >= 2) {
                                for (var i = 0; i < 128 * 2; i++) {
                                    while (true) {
                                        if (__x - i < 0) {
                                            if (_x - 1 < 0) {
                                                this.__currentM.value = 0;
                                                this.__currentM.angle = 0xFF;
                                                return this.__currentM;
                                            }
                                            tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x - 1, _y);
                                            this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                                            curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                                            cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                                            __x += 128;
                                        }
                                        else
                                            break;
                                    }
                                    if (curh[(__x - i)][__y] >= 1 || SonicManager_14.SonicManager.instance.sonicToon.CheckCollisionWithObjects(x1 - i, y1, this.letter)) {
                                        this.__currentM.value = x1 - i;
                                        this.__currentM.angle = cura[(__x - i) / 16 | 0][(__y) / 16 | 0];
                                        return this.__currentM;
                                    }
                                }
                            }
                            for (var i = 0; i < length; i++) {
                                while (true) {
                                    if (__x + i >= 128) {
                                        tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x + 1, _y);
                                        this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                                        curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                                        cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                                        __x -= 128;
                                    }
                                    else
                                        break;
                                }
                                if (curh[(__x + i)][__y] >= 1 || SonicManager_14.SonicManager.instance.sonicToon.CheckCollisionWithObjects(x1 + i, y1, this.letter)) {
                                    this.__currentM.value = x1 + i;
                                    this.__currentM.angle = cura[(__x + i) / 16 | 0][(__y) / 16 | 0];
                                    return this.__currentM;
                                }
                            }
                        }
                        else {
                            length = x1 - x2;
                            if (curh[(__x)][__y] >= 2) {
                                for (var i = 0; i < 128 * 2; i++) {
                                    while (true) {
                                        if (__x + i >= 128) {
                                            tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x + 1, _y);
                                            this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                                            curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                                            cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                                            __x -= 128;
                                        }
                                        else
                                            break;
                                    }
                                    if (curh[(__x + i)][__y] >= 1 || SonicManager_14.SonicManager.instance.sonicToon.CheckCollisionWithObjects(x1 + i, y1, this.letter)) {
                                        this.__currentM.value = x1 + i;
                                        this.__currentM.angle = cura[(__x + i) / 16 | 0][(__y) / 16 | 0];
                                        return this.__currentM;
                                    }
                                }
                            }
                            for (var i = 0; i < length; i++) {
                                while (true) {
                                    if (__x - i < 0) {
                                        if (_x - 1 < 0) {
                                            this.__currentM.value = 0;
                                            this.__currentM.angle = 0xFF;
                                            return this.__currentM;
                                        }
                                        tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x - 1, _y);
                                        this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                                        curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                                        cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                                        __x += 128;
                                    }
                                    else
                                        break;
                                }
                                if (curh[(__x - i)][__y] >= 1 || SonicManager_14.SonicManager.instance.sonicToon.CheckCollisionWithObjects(x1 - i, y1, this.letter)) {
                                    this.__currentM.value = x1 - i;
                                    this.__currentM.angle = cura[(__x - i) / 16 | 0][(__y) / 16 | 0];
                                    return this.__currentM;
                                }
                            }
                        }
                    }
                    else {
                        if (y1 < y2) {
                            length = y2 - y1;
                            if (curh[(__x)][__y] >= 2) {
                                for (var i = 0; i < 128 * 2; i++) {
                                    while (true) {
                                        if (__y - i < 0) {
                                            tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x, Help_3.Help.mod((_y - 1), SonicManager_14.SonicManager.instance.sonicLevel.LevelHeight));
                                            this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                                            curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                                            cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                                            __y += 128;
                                        }
                                        else
                                            break;
                                    }
                                    if (curh[__x][__y - i] > 1 || SonicManager_14.SonicManager.instance.sonicToon.CheckCollisionWithObjects(x1, y1 - i, this.letter)) {
                                        this.__currentM.value = y1 - i;
                                        this.__currentM.angle = cura[(__x) / 16 | 0][(__y - i) / 16 | 0];
                                        return this.__currentM;
                                    }
                                }
                            }
                            for (var i = 0; i < length; i++) {
                                while (true) {
                                    if (__y + i >= 128) {
                                        tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x, (_y + 1) % SonicManager_14.SonicManager.instance.sonicLevel.LevelHeight);
                                        this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                                        curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                                        cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                                        __y -= 128;
                                    }
                                    else
                                        break;
                                }
                                if (curh[__x][__y + i] >= 1 || SonicManager_14.SonicManager.instance.sonicToon.CheckCollisionWithObjects(x1, y1 + i, this.letter)) {
                                    if (curh[__x][__y + i] == 1 && SonicManager_14.SonicManager.instance.sonicToon.inAir && SonicManager_14.SonicManager.instance.sonicToon.ysp < 0)
                                        continue;
                                    this.__currentM.value = y1 + i;
                                    this.__currentM.angle = cura[(__x) / 16 | 0][(__y + i) / 16 | 0];
                                    return this.__currentM;
                                }
                            }
                        }
                        else {
                            length = y1 - y2;
                            if (curh[(__x)][__y] >= 2) {
                                for (var i = 0; i < 128 * 2; i++) {
                                    while (true) {
                                        if (__y + i >= 128) {
                                            tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x, (_y + 1) % SonicManager_14.SonicManager.instance.sonicLevel.LevelHeight);
                                            this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                                            curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                                            cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                                            __y -= 128;
                                        }
                                        else
                                            break;
                                    }
                                    if (curh[__x][__y + i] >= 1 || SonicManager_14.SonicManager.instance.sonicToon.CheckCollisionWithObjects(x1, y1 + i, this.letter)) {
                                        this.__currentM.value = y1 + i;
                                        this.__currentM.angle = cura[(__x) / 16 | 0][(__y + i) / 16 | 0];
                                        return this.__currentM;
                                    }
                                }
                            }
                            for (var i = 0; i < length; i++) {
                                while (true) {
                                    if (__y - i < 0) {
                                        tc = SonicManager_14.SonicManager.instance.sonicLevel.getChunkAt(_x, Help_3.Help.mod((_y - 1), SonicManager_14.SonicManager.instance.sonicLevel.LevelHeight));
                                        this.manager.buildChunk(tc, SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap);
                                        curh = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.HeightBlocks1 : tc.HeightBlocks2;
                                        cura = SonicManager_14.SonicManager.instance.sonicLevel.CurHeightMap ? tc.AngleMap1 : tc.AngleMap2;
                                        __y += 128;
                                    }
                                    else
                                        break;
                                }
                                if (curh[__x][__y - i] > 1 || SonicManager_14.SonicManager.instance.sonicToon.CheckCollisionWithObjects(x1, y1 + i, this.letter)) {
                                    this.__currentM.value = y1 - i;
                                    this.__currentM.angle = cura[(__x) / 16 | 0][(__y - i) / 16 | 0];
                                    return this.__currentM;
                                }
                            }
                        }
                    }
                    return null;
                };
                Sensor.prototype.draw = function (canvas, character, sensorResult) {
                    var x = Help_3.Help.floor(character.x) - SonicManager_14.SonicManager.instance.windowLocation.x;
                    var y = Help_3.Help.floor(character.y) - SonicManager_14.SonicManager.instance.windowLocation.y;
                    canvas.beginPath();
                    if (sensorResult && sensorResult.chosen) {
                        canvas.strokeStyle = "#FFF76D";
                        canvas.lineWidth = 4;
                    }
                    else {
                        canvas.strokeStyle = this.color;
                        canvas.lineWidth = 2;
                    }
                    switch (character.mode) {
                        case Enums_5.RotationMode.Floor:
                            canvas.moveTo((x + this.x1), (y + this.y1));
                            canvas.lineTo((x + this.x2), (y + this.y2));
                            break;
                        case Enums_5.RotationMode.LeftWall:
                            canvas.moveTo((x - this.y1), (y + this.x1));
                            canvas.lineTo((x - this.y2), (y + this.x2));
                            break;
                        case Enums_5.RotationMode.Ceiling:
                            canvas.moveTo((x - this.x1), (y - this.y1));
                            canvas.lineTo((x - this.x2), (y - this.y2));
                            break;
                        case Enums_5.RotationMode.RightWall:
                            canvas.moveTo((x + this.y1), (y - this.x1));
                            canvas.lineTo((x + this.y2), (y - this.x2));
                            break;
                    }
                    canvas.closePath();
                    canvas.stroke();
                };
                Sensor.prototype.check = function (character) {
                    var _y2 = character.inAir ? this.y2 : this.y2;
                    var m = null;
                    var x = Help_3.Help.floor(character.x);
                    var y = Help_3.Help.floor(character.y);
                    switch (character.mode) {
                        case Enums_5.RotationMode.Floor:
                            m = this.checkCollisionLineWrap(x + this.x1, x + this.x2, y + this.y1, y + _y2, this.ignoreSolid);
                            break;
                        case Enums_5.RotationMode.LeftWall:
                            m = this.checkCollisionLineWrap(x - this.y1, x - _y2, y + this.x1, y + this.x2, this.ignoreSolid);
                            break;
                        case Enums_5.RotationMode.Ceiling:
                            m = this.checkCollisionLineWrap(x - this.x1, x - this.x2, y - this.y1, y - _y2, this.ignoreSolid);
                            break;
                        case Enums_5.RotationMode.RightWall:
                            m = this.checkCollisionLineWrap(x + this.y1, x + _y2, y - this.x1, y - this.x2, this.ignoreSolid);
                            break;
                    }
                    if (m != null) {
                        m.letter = this.letter;
                        if (m.angle == 255 || m.angle == 0 || m.angle == 1) {
                            if (character.mode == Enums_5.RotationMode.Floor)
                                m.angle = 255;
                            if (character.mode == Enums_5.RotationMode.LeftWall)
                                m.angle = 64;
                            if (character.mode == Enums_5.RotationMode.Ceiling)
                                m.angle = 128;
                            if (character.mode == Enums_5.RotationMode.RightWall)
                                m.angle = 192;
                        }
                    }
                    return m;
                };
                return Sensor;
            }());
            exports_33("Sensor", Sensor);
            SensorM = (function () {
                function SensorM(value, angle) {
                    this.value = 0;
                    this.angle = 0;
                    this.chosen = false;
                    this.value = value;
                    this.angle = angle;
                }
                return SensorM;
            }());
            exports_33("SensorM", SensorM);
        }
    }
});
System.register("game/sonic/SonicConstants", ["common/Help"], function(exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var Help_4;
    var SonicConstants;
    return {
        setters:[
            function (Help_4_1) {
                Help_4 = Help_4_1;
            }],
        execute: function() {
            SonicConstants = (function () {
                function SonicConstants() {
                }
                SonicConstants.Sonic = function () {
                    var sc = Help_4.Help.merge(new SonicConstants(), {
                        acc: 0.046875,
                        dec: 0.5,
                        slp: 0.125,
                        frc: 0.046875,
                        rdec: 0.125,
                        rfrc: 0.0234375,
                        slpRollingUp: 0.078125,
                        slpRollingDown: 0.3125,
                        jmp: -6.5,
                        grv: 0.21875,
                        air: 0.09375,
                        topSpeed: 6
                    });
                    return sc;
                };
                return SonicConstants;
            }());
            exports_34("SonicConstants", SonicConstants);
        }
    }
});
System.register("game/sonic/Sonic", ["common/Utils", "game/sonic/SensorManager", "common/Enums", "game/SonicManager", "common/Help", "game/level/Ring", "game/sonic/SonicConstants"], function(exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var Utils_9, SensorManager_1, Enums_6, SonicManager_15, Help_5, Ring_1, SonicConstants_1;
    var Sonic, Watcher;
    return {
        setters:[
            function (Utils_9_1) {
                Utils_9 = Utils_9_1;
            },
            function (SensorManager_1_1) {
                SensorManager_1 = SensorManager_1_1;
            },
            function (Enums_6_1) {
                Enums_6 = Enums_6_1;
            },
            function (SonicManager_15_1) {
                SonicManager_15 = SonicManager_15_1;
            },
            function (Help_5_1) {
                Help_5 = Help_5_1;
            },
            function (Ring_1_1) {
                Ring_1 = Ring_1_1;
            },
            function (SonicConstants_1_1) {
                SonicConstants_1 = SonicConstants_1_1;
            }],
        execute: function() {
            Sonic = (function () {
                function Sonic() {
                    this.obtainedRing = {};
                    this.ticking = false;
                    this.x = 0;
                    this.y = 0;
                    this.rings = 0;
                    this.debugging = false;
                    this.jumping = false;
                    this.crouching = false;
                    this.holdingLeft = false;
                    this.holdingRight = false;
                    this.holdingUp = false;
                    this.xsp = 0;
                    this.ysp = 0;
                    this.gsp = 0;
                    this.rolling = false;
                    this.inAir = false;
                    this.wasInAir = false;
                    this.holdingJump = false;
                    this.justHit = false;
                    this.hLock = 0;
                    this.mode = Enums_6.RotationMode.Floor;
                    this.facing = false;
                    this.breaking = 0;
                    this.ducking = false;
                    this.spinDash = false;
                    this.spinDashSpeed = 0;
                    this.angle = 0;
                    this.currentlyBall = false;
                    this.halfSize = new Utils_9.Point(20, 20);
                    this.offsetFromImage = new Utils_9.Point(0, 0);
                    this.objectCollision = new Utils_9.Point(0, 0);
                    this.ringCollisionRect = new Utils_9.Rectangle(0, 0, 0, 0);
                    this.watcher = new Watcher();
                    this.physicsVariables = SonicConstants_1.SonicConstants.Sonic();
                    var sonicManager = SonicManager_15.SonicManager.instance;
                    this.sonicLevel = sonicManager.sonicLevel;
                    this.x = this.sonicLevel.StartPositions[0].x;
                    this.y = this.sonicLevel.StartPositions[0].y;
                    this.sensorManager = new SensorManager_1.SensorManager();
                    this.haltSmoke = new Array();
                    this.rings = 7;
                    this.sensorManager.createVerticalSensor("a", -9, 0, 36, "#F202F2");
                    this.sensorManager.createVerticalSensor("b", 9, 0, 36, "#02C2F2");
                    this.sensorManager.createVerticalSensor("c", -9, 0, -20, "#2D2C21");
                    this.sensorManager.createVerticalSensor("d", 9, 0, -20, "#C24222");
                    this.sensorManager.createHorizontalSensor("m1", 4, 0, -12, "#212C2E");
                    this.sensorManager.createHorizontalSensor("m2", 4, 0, 13, "#22Ffc1");
                    this.spriteState = "normal";
                    this.myRec = new Utils_9.Rectangle(0, 0, 0, 0);
                    this.sonicLastHitTick = -100000;
                }
                Sonic.prototype.updateMode = function () {
                    if (this.angle <= 0x22 || this.angle >= 0xDE)
                        this.mode = Enums_6.RotationMode.Floor;
                    else if (this.angle > 0x22 && this.angle < 0x59)
                        this.mode = Enums_6.RotationMode.LeftWall;
                    else if (this.angle >= 0x59 && this.angle < 0xA1)
                        this.mode = Enums_6.RotationMode.Ceiling;
                    else if (this.angle > 0xA1 && this.angle < 0xDE)
                        this.mode = Enums_6.RotationMode.RightWall;
                    this.myRec.x = (this.x - 10) | 0;
                    this.myRec.y = (this.y - 20) | 0;
                    this.myRec.Width = 10 * 2;
                    this.myRec.Height = 20 * 2;
                    if (this.inAir)
                        this.mode = Enums_6.RotationMode.Floor;
                };
                Sonic.prototype.tick = function (sonicLevel) {
                    if (this.debugging) {
                        var debugSpeed = this.watcher.Multiply(15);
                        if (this.holdingRight)
                            this.x += debugSpeed;
                        if (this.holdingLeft)
                            this.x -= debugSpeed;
                        if (this.crouching)
                            this.y += debugSpeed;
                        if (this.holdingUp)
                            this.y -= debugSpeed;
                        this.x = ((sonicLevel.LevelWidth * 128) + (this.x)) % (sonicLevel.LevelWidth * 128);
                        this.y = ((sonicLevel.LevelHeight * 128) + (this.y)) % (sonicLevel.LevelHeight * 128);
                        return;
                    }
                    this.updateMode();
                    if (this.hLock > 0) {
                        this.hLock--;
                        this.holdingRight = false;
                        this.holdingLeft = false;
                    }
                    if (this.inAir) {
                        if (this.angle != 0xff) {
                            this.angle = (0xff + (this.angle + ((this.angle > 0xff / 2) ? 2 : -2))) % 0xff;
                            if (this.angle >= 0xfd || this.angle <= 0x01)
                                this.angle = 0xff;
                        }
                    }
                    this.effectPhysics();
                    this.checkCollisionWithRings();
                    this.updateSprite();
                    this.sensorManager.check(this);
                    var sensorM1 = this.sensorManager.getResult("m1");
                    var sensorM2 = this.sensorManager.getResult("m2");
                    var best = this.getBestSensor(sensorM1, sensorM2, this.mode);
                    if (best != null) {
                        switch (this.mode) {
                            case Enums_6.RotationMode.Floor:
                                this.x = (best.value + (sensorM2 != null && sensorM1 != null && (sensorM1.value == sensorM2.value) ? 12 : (best.letter == "m1" ? 12 : -12)));
                                this.gsp = 0;
                                if (this.inAir)
                                    this.xsp = 0;
                                break;
                            case Enums_6.RotationMode.LeftWall:
                                this.y = (best.value + (sensorM2 != null && sensorM1 != null && (sensorM1.value == sensorM2.value) ? 12 : (best.letter == "m1" ? 12 : -12)));
                                if (this.inAir)
                                    this.xsp = 0;
                                break;
                            case Enums_6.RotationMode.Ceiling:
                                this.x = (best.value + (sensorM2 != null && sensorM1 != null && (sensorM1.value == sensorM2.value) ? 12 : (best.letter == "m1" ? -12 : 12)));
                                this.gsp = 0;
                                if (this.inAir)
                                    this.xsp = 0;
                                break;
                            case Enums_6.RotationMode.RightWall:
                                this.y = (best.value + (sensorM2 != null && sensorM1 != null && (sensorM1.value == sensorM2.value) ? 12 : (best.letter == "m1" ? -12 : 12)));
                                this.gsp = 0;
                                if (this.inAir)
                                    this.xsp = 0;
                                break;
                        }
                    }
                    this.sensorManager.check(this);
                    var sensorA = this.sensorManager.getResult("a");
                    var sensorB = this.sensorManager.getResult("b");
                    var fy;
                    var fx;
                    var hSize = this.getHalfImageSize();
                    if (!this.inAir) {
                        best = this.getBestSensor(sensorA, sensorB, this.mode);
                        if (best == null)
                            this.inAir = true;
                        else {
                            this.justHit = false;
                            switch (this.mode) {
                                case Enums_6.RotationMode.Floor:
                                    best.chosen = true;
                                    this.angle = best.angle;
                                    this.y = fy = best.value - hSize.y;
                                    break;
                                case Enums_6.RotationMode.LeftWall:
                                    best.chosen = true;
                                    this.angle = best.angle;
                                    this.x = fx = best.value + hSize.x;
                                    break;
                                case Enums_6.RotationMode.Ceiling:
                                    best.chosen = true;
                                    this.angle = best.angle;
                                    this.y = fy = best.value + hSize.y;
                                    break;
                                case Enums_6.RotationMode.RightWall:
                                    best.chosen = true;
                                    this.angle = best.angle;
                                    this.x = fx = best.value - hSize.x;
                                    break;
                            }
                        }
                        this.updateMode();
                    }
                    else {
                        if (sensorA == null && sensorB == null)
                            this.inAir = true;
                        else {
                            if ((sensorA != null && sensorA.value >= 0) && (sensorB != null && sensorB.value >= 0)) {
                                if (sensorA.value < sensorB.value) {
                                    if (this.y + (20) >= sensorA.value) {
                                        this.angle = sensorA.angle;
                                        this.y = fy = sensorA.value - hSize.y;
                                        this.rolling = this.currentlyBall = false;
                                        this.inAir = false;
                                    }
                                }
                                else {
                                    if (sensorB.value > -1) {
                                        if (this.y + (20) >= sensorB.value) {
                                            this.angle = sensorB.angle;
                                            this.y = fy = sensorB.value - hSize.y;
                                            this.rolling = this.currentlyBall = false;
                                            this.inAir = false;
                                        }
                                    }
                                }
                            }
                            else if ((sensorA != null) && sensorA.value > -1) {
                                if (this.y + (20) >= sensorA.value) {
                                    this.angle = sensorA.angle;
                                    this.y = fy = sensorA.value - hSize.y;
                                    this.rolling = this.currentlyBall = false;
                                    this.inAir = false;
                                }
                            }
                            else if (sensorB != null && sensorB.value > -1) {
                                if (this.y + (20) >= sensorB.value) {
                                    this.angle = sensorB.angle;
                                    this.y = fy = sensorB.value - hSize.y;
                                    this.rolling = this.currentlyBall = false;
                                    this.inAir = false;
                                }
                            }
                        }
                        this.updateMode();
                        var cur = SonicManager_15.SonicManager.instance.spriteCache.SonicSprites[this.spriteState];
                        var __h = cur.height / 2;
                        this.sensorManager.check(this);
                        var sensorC = this.sensorManager.getResult("c");
                        var sensorD = this.sensorManager.getResult("d");
                        if ((sensorC == null && sensorD == null)) {
                        }
                        else {
                            if (sensorD != null && (sensorC != null) && (sensorC.value >= 0 && sensorD.value >= 0)) {
                                if (sensorC.value < sensorD.value) {
                                    if (this.y + (__h) >= sensorC.value) {
                                        if (this.ysp < 0) {
                                            if (sensorC.angle > 0x40 && sensorC.angle < 0xC0) {
                                                this.angle = sensorC.angle;
                                                this.gsp = this.ysp;
                                                this.inAir = false;
                                                this.wasInAir = false;
                                            }
                                            else
                                                this.ysp = 0;
                                            this.y = fy = sensorC.value + __h;
                                        }
                                    }
                                }
                                else {
                                    if (this.y + (__h) >= sensorD.value) {
                                        if (this.ysp < 0) {
                                            if (sensorD.angle > 0x40 && sensorD.angle < 0xC0) {
                                                this.angle = sensorD.angle;
                                                this.gsp = -this.ysp;
                                                this.inAir = false;
                                                this.wasInAir = false;
                                            }
                                            else
                                                this.ysp = 0;
                                            this.y = fy = sensorD.value + __h;
                                        }
                                    }
                                }
                            }
                            else if (sensorC != null && sensorC.value > -1) {
                                if (this.y + (__h) >= sensorC.value) {
                                    if (this.ysp < 0) {
                                        if (sensorC.angle > 0x40 && sensorC.angle < 0xC0) {
                                            this.angle = sensorC.angle;
                                            this.gsp = this.ysp;
                                            this.inAir = false;
                                            this.wasInAir = false;
                                        }
                                        else
                                            this.ysp = 0;
                                        this.y = fy = sensorC.value + __h;
                                    }
                                }
                            }
                            else if (sensorD != null && sensorD.value > -1) {
                                if (this.y + (__h) >= sensorD.value) {
                                    if (this.ysp < 0) {
                                        if (sensorD.angle > 0x40 && sensorD.angle < 0xC0) {
                                            this.angle = sensorD.angle;
                                            this.gsp = -this.ysp;
                                            this.inAir = false;
                                            this.wasInAir = false;
                                        }
                                        else
                                            this.ysp = 0;
                                        this.y = fy = sensorD.value + __h;
                                    }
                                }
                            }
                            this.updateMode();
                        }
                    }
                };
                Sonic.prototype.getBestSensor = function (sensor1, sensor2, mode) {
                    if (sensor1 == null && sensor2 == null)
                        return null;
                    if (sensor1 == null)
                        return sensor2;
                    if (sensor2 == null)
                        return sensor1;
                    switch (mode) {
                        case Enums_6.RotationMode.Floor:
                            return sensor1.value < sensor2.value ? sensor1 : sensor2;
                        case Enums_6.RotationMode.LeftWall:
                            return sensor1.value > sensor2.value ? sensor1 : sensor2;
                        case Enums_6.RotationMode.Ceiling:
                            return sensor1.value > sensor2.value ? sensor1 : sensor2;
                        case Enums_6.RotationMode.RightWall:
                            return sensor1.value < sensor2.value ? sensor1 : sensor2;
                    }
                    return null;
                };
                Sonic.prototype.invulnerable = function () {
                    var mc = SonicManager_15.SonicManager.instance.drawTickCount - this.sonicLastHitTick;
                    if (mc < 120) {
                        if (mc % 8 < 4)
                            return true;
                    }
                    return false;
                };
                Sonic.prototype.getHalfImageSize = function () {
                    return this.halfSize;
                };
                Sonic.prototype.getOffsetFromImage = function () {
                    var cur = SonicManager_15.SonicManager.instance.spriteCache.SonicSprites[this.spriteState];
                    var xOffset = 0;
                    var yOffset = 0;
                    if (cur.height != 40) {
                        var n = void 0;
                        switch (this.mode) {
                            case Enums_6.RotationMode.Floor:
                                n = 0;
                                yOffset = (40 - ((cur.height + n))) / 2;
                                break;
                            case Enums_6.RotationMode.LeftWall:
                                n = 15;
                                xOffset = -(40 - ((cur.height + n))) / 2;
                                break;
                            case Enums_6.RotationMode.Ceiling:
                                n = 8;
                                yOffset = -(40 - ((cur.height + n))) / 2;
                                break;
                            case Enums_6.RotationMode.RightWall:
                                n = 9;
                                xOffset = (40 - ((cur.height + n))) / 2;
                                break;
                        }
                    }
                    this.offsetFromImage.x = xOffset;
                    this.offsetFromImage.y = yOffset;
                    return this.offsetFromImage;
                };
                Sonic.prototype.updateSprite = function () {
                    var absgsp = Math.abs(this.gsp);
                    var word = this.spriteState.substring(0, this.spriteState.length - 1);
                    var j = parseInt(this.spriteState.substring(this.spriteState.length - 1, this.spriteState.length));
                    if (this.breaking > 0) {
                        if (this.gsp > 0 || this.gsp == 0 || this.spriteState == "breaking3") {
                            this.facing = false;
                            this.breaking = 0;
                        }
                    }
                    else if (this.breaking < 0) {
                        if (this.gsp < 0 || this.gsp == 0 || this.spriteState == "breaking3") {
                            this.breaking = 0;
                            this.facing = true;
                        }
                    }
                    var epsilon = 0.00001;
                    if (this.justHit) {
                        if (word != "hit") {
                            this.spriteState = "hit0";
                            this.runningTick = 1;
                        }
                        else if (((this.runningTick++) % (Math.floor(8 - absgsp) | 0) == 0))
                            this.spriteState = "hit1";
                    }
                    else if (this.spinDash) {
                        if (word != "spindash") {
                            this.spriteState = "spindash0";
                            this.runningTick = 1;
                        }
                        else if (((this.runningTick++) % Math.floor(2 - absgsp) | 0) == 0)
                            this.spriteState = "spindash" + ((j + 1) % 6);
                    }
                    else if (Math.abs(absgsp - 0) < epsilon && !this.inAir) {
                        if (this.ducking) {
                            if (word != "duck") {
                                this.spriteState = "duck0";
                                this.runningTick = 1;
                            }
                            else if (((this.runningTick++) % Math.floor(4 - absgsp) | 0) == 0)
                                this.spriteState = "duck1";
                        }
                        else if (this.holdingUp) {
                            if (word != "lookingup") {
                                this.spriteState = "lookingup0";
                                this.runningTick = 1;
                            }
                            else if (((this.runningTick++) % Math.floor(4 - absgsp) | 0) == 0)
                                this.spriteState = "lookingup1";
                        }
                        else {
                            this.spriteState = "normal";
                            this.currentlyBall = false;
                            this.rolling = false;
                            this.runningTick = 0;
                        }
                    }
                    else if (this.breaking != 0) {
                        if (word != "breaking") {
                            this.spriteState = "breaking0";
                            this.runningTick = 1;
                        }
                        else if ((this.runningTick++) % (7) == 0) {
                            this.spriteState = "breaking" + ((j + 1) % 4);
                            if (j == 0)
                                this.haltSmoke.push(new Utils_9.Point(this.x, this.y));
                        }
                    }
                    else if (this.currentlyBall) {
                        if (word != "balls") {
                            this.spriteState = "balls0";
                            this.runningTick = 1;
                        }
                        else if (((this.runningTick++) % Math.floor(8 - absgsp) == 0) || (8 - absgsp < 1))
                            this.spriteState = "balls" + ((j + 1) % 5);
                    }
                    else if (absgsp < 6) {
                        if (word != "running") {
                            this.spriteState = "running0";
                            this.runningTick = 1;
                        }
                        else if (((this.runningTick++) % (Math.floor(8 - absgsp) | 0) == 0) || (8 - absgsp < 1))
                            this.spriteState = "running" + ((j + 1) % 8);
                    }
                    else if (absgsp >= 6) {
                        if (word != "fastrunning") {
                            this.spriteState = "fastrunning0";
                            this.runningTick = 1;
                        }
                        else if (((this.runningTick++) % (Math.floor(8 - absgsp) | 0) == 0) || (8 - absgsp < 1))
                            this.spriteState = "fastrunning" + ((j + 1) % 4);
                    }
                };
                Sonic.prototype.effectPhysics = function () {
                    this.watcher.Tick();
                    var physics = this.physicsVariables;
                    var max = physics.topSpeed;
                    if (!this.jumping) {
                        if (!this.inAir && this.wasJumping)
                            this.wasJumping = false;
                    }
                    if (this.inAir && !this.wasInAir) {
                        this.wasInAir = true;
                        var offset = this.getOffsetFromImage();
                    }
                    if (!this.inAir && this.wasInAir) {
                        this.wasInAir = false;
                        if ((this.angle >= 0xF0 || this.angle <= 0x0F))
                            this.gsp = (this.xsp);
                        else if ((this.angle > 0xE2 && this.angle <= 0xEF) || (this.angle >= 0x10 && this.angle <= 0x1F))
                            this.gsp = (this.ysp);
                        else if ((this.angle >= 0xC0 && this.angle <= 0xE2))
                            this.gsp = (-this.ysp);
                        else if ((this.angle >= 0x20 && this.angle <= 0x3F))
                            this.gsp = (this.ysp);
                        this.xsp = 0;
                        this.ysp = 0;
                    }
                    if (!this.inAir && !this.rolling && !this.spinDash) {
                        if (!this.holdingLeft && !this.holdingRight && !this.justHit) {
                            this.gsp -= (Math.min(Math.abs(this.gsp), this.watcher.Multiply(physics.frc)) * (this.gsp > 0 ? 1 : -1));
                        }
                        this.oldSign = Help_5.Help.sign(this.gsp);
                        this.gsp += this.watcher.Multiply(physics.slp) * -Help_5.Help.sin(this.angle);
                        if (this.oldSign != Help_5.Help.sign(this.gsp) && this.oldSign != 0)
                            this.hLock = 30;
                        if (this.holdingRight && !this.holdingLeft && !this.justHit) {
                            this.facing = true;
                            if (this.gsp >= 0) {
                                this.gsp += this.watcher.Multiply(physics.acc);
                                if (this.gsp > max)
                                    this.gsp = max;
                            }
                            else {
                                this.gsp += this.watcher.Multiply(physics.dec);
                                if (Math.abs(this.gsp) > 4.5) {
                                    this.facing = false;
                                    this.breaking = 1;
                                    this.runningTick = 0;
                                }
                            }
                        }
                        if (this.holdingLeft && !this.holdingRight && !this.justHit) {
                            this.facing = false;
                            if (this.gsp <= 0) {
                                this.gsp -= this.watcher.Multiply(physics.acc);
                                if (this.gsp < -max)
                                    this.gsp = -max;
                            }
                            else {
                                this.gsp -= this.watcher.Multiply(physics.dec);
                                if (Math.abs(this.gsp) > 4.5) {
                                    this.facing = true;
                                    this.breaking = -1;
                                    this.runningTick = 0;
                                }
                            }
                        }
                    }
                    this.ducking = false;
                    if (this.crouching) {
                        if (Math.abs(this.gsp) > 1.03125) {
                            this.rolling = true;
                            this.currentlyBall = true;
                        }
                        else
                            this.ducking = true;
                    }
                    else {
                        if (this.spinDash) {
                            this.gsp = (8 + Help_5.Help.floor(this.spinDashSpeed) / 2) * (this.facing ? 1 : -1);
                            this.spinDash = false;
                            this.rolling = true;
                            this.currentlyBall = true;
                        }
                    }
                    if (!this.inAir && this.rolling) {
                        if (this.holdingLeft && !this.justHit) {
                            if (this.gsp > 0) {
                                if (this.rolling)
                                    this.gsp = (Help_5.Help.max(0, this.gsp - this.watcher.Multiply(physics.rdec)));
                            }
                        }
                        if (this.holdingRight && !this.justHit) {
                            if (this.gsp < 0) {
                                if (this.rolling)
                                    this.gsp = (Help_5.Help.min(0, this.gsp + this.watcher.Multiply(physics.rdec)));
                            }
                        }
                        this.gsp -= (Math.min(Math.abs(this.gsp), this.watcher.Multiply(physics.rfrc)) * (this.gsp > 0 ? 1 : -1));
                        this.oldSign = Help_5.Help.sign(this.gsp);
                        var ang = Help_5.Help.sin(this.angle);
                        if ((ang > 0) == (this.gsp > 0))
                            this.gsp += this.watcher.Multiply(-physics.slpRollingUp) * ang;
                        else
                            this.gsp += this.watcher.Multiply(-physics.slpRollingDown) * ang;
                        if (this.gsp > max * 2.5)
                            this.gsp = max * 2.5;
                        if (this.gsp < -max * 2.5)
                            this.gsp = -max * 2.5;
                        if (this.oldSign != Help_5.Help.sign(this.gsp) && this.oldSign != 0)
                            this.hLock = 30;
                        if (Math.abs(this.gsp) < 0.53125) {
                            this.rolling = false;
                            this.currentlyBall = false;
                        }
                    }
                    if (this.inAir) {
                        if (this.holdingRight && !this.holdingLeft && !this.justHit) {
                            this.facing = true;
                            if (this.xsp >= 0) {
                                this.xsp += this.watcher.Multiply(physics.air);
                                if (this.xsp > max)
                                    this.xsp = max;
                            }
                            else {
                                this.xsp += this.watcher.Multiply(physics.air);
                            }
                        }
                        if (this.holdingLeft && !this.holdingRight && !this.justHit) {
                            this.facing = false;
                            if (this.xsp <= 0) {
                                this.xsp -= this.watcher.Multiply(physics.air);
                                if (this.xsp < -max)
                                    this.xsp = -max;
                            }
                            else {
                            }
                        }
                        if (this.wasInAir)
                            if (this.jumping) {
                            }
                            else {
                            }
                        this.ysp += this.justHit ? 0.1875 : physics.grv;
                        if (this.ysp < 0 && this.ysp > -4) {
                            if (Math.abs(this.xsp) > 0.125)
                                this.xsp *= 0.96875;
                        }
                        if (this.ysp > 16)
                            this.ysp = 16;
                    }
                    if (this.wasInAir && this.jumping) {
                    }
                    else if (this.jumping && !this.wasJumping) {
                        this.wasJumping = true;
                        if (this.ducking) {
                            this.spinDash = true;
                            this.spinDashSpeed += 2;
                            if (this.spinDashSpeed > 8)
                                this.spinDashSpeed = 8;
                            this.spriteState = "spindash0";
                        }
                        else {
                            this.inAir = true;
                            this.currentlyBall = true;
                            this.xsp = physics.jmp * Help_5.Help.sin(this.angle) + this.gsp * Help_5.Help.cos(this.angle);
                            this.ysp = physics.jmp * Help_5.Help.cos(this.angle);
                            if (Math.abs(this.xsp) < .17)
                                this.xsp = 0;
                        }
                    }
                    if (!this.inAir) {
                        if (this.spinDash)
                            this.gsp = 0;
                        this.xsp = this.gsp * Help_5.Help.cos(this.angle);
                        this.ysp = this.gsp * -Help_5.Help.sin(this.angle);
                        if (Math.abs(this.gsp) < 2.5 && this.mode != Enums_6.RotationMode.Floor) {
                            if (this.mode == Enums_6.RotationMode.RightWall)
                                this.x += 0;
                            else if (this.mode == Enums_6.RotationMode.LeftWall)
                                this.x += 0;
                            else if (this.mode == Enums_6.RotationMode.Ceiling)
                                this.y += 0;
                            var oldMode = this.mode;
                            this.updateMode();
                            this.mode = Enums_6.RotationMode.Floor;
                            this.hLock = 30;
                            this.inAir = true;
                        }
                    }
                    if (this.xsp > 0 && this.xsp < 0.008) {
                        this.gsp = 0;
                        this.xsp = 0;
                    }
                    if (this.xsp < 0 && this.xsp > -0.008) {
                        this.gsp = 0;
                        this.xsp = 0;
                    }
                    this.x = ((this.sonicLevel.LevelWidth * 128) + (this.x + this.xsp)) % (this.sonicLevel.LevelWidth * 128);
                    this.y = ((this.sonicLevel.LevelHeight * 128) + (this.y + this.ysp)) % (this.sonicLevel.LevelHeight * 128);
                };
                Sonic.prototype.draw = function (canvas) {
                    var fx = (this.x) | 0;
                    var fy = (this.y) | 0;
                    if (this.invulnerable())
                        return;
                    var cur = SonicManager_15.SonicManager.instance.spriteCache.SonicSprites[this.spriteState];
                    if (cur == null) {
                    }
                    if (Help_5.Help.isLoaded(cur)) {
                        canvas.save();
                        var offset = this.getOffsetFromImage();
                        canvas.translate((fx - SonicManager_15.SonicManager.instance.windowLocation.x + offset.x), ((fy - SonicManager_15.SonicManager.instance.windowLocation.y + offset.y)));
                        if (SonicManager_15.SonicManager.instance.showHeightMap) {
                            var mul = 10;
                            var xj = this.xsp * mul;
                            var yj = this.ysp * mul;
                            var distance = Math.sqrt((yj * yj) + (xj * xj));
                            canvas.save();
                            canvas.moveTo(xj, yj);
                            canvas.beginPath();
                            canvas.fillStyle = "rgba(163,241,255,1)";
                            canvas.strokeStyle = "rgba(163,241,255,1)";
                            canvas.arc(xj, yj, distance / 8, 0, 2 * Math.PI, true);
                            canvas.closePath();
                            canvas.fill();
                            canvas.stroke();
                            canvas.restore();
                        }
                        if (!this.facing) {
                            canvas.scale(-1, 1);
                            if (!this.currentlyBall && !this.spinDash)
                                canvas.rotate(-Help_5.Help.fixAngle(this.angle));
                            canvas.drawImage(cur, -cur.width / 2, -cur.height / 2);
                            if (this.spinDash) {
                                canvas.drawImage(SonicManager_15.SonicManager.instance.spriteCache.SonicSprites[("spinsmoke" + ((SonicManager_15.SonicManager.instance.drawTickCount % 14) / 2 | 0))], (-cur.width / 2) - 19, -cur.height / 2 + (offset.y) - 6, cur.width, cur.height);
                            }
                        }
                        else {
                            if (!this.currentlyBall && !this.spinDash)
                                canvas.rotate(Help_5.Help.fixAngle(this.angle));
                            canvas.drawImage(cur, -cur.width / 2, -cur.height / 2);
                            if (this.spinDash) {
                                canvas.drawImage(SonicManager_15.SonicManager.instance.spriteCache.SonicSprites[("spinsmoke" + ((SonicManager_15.SonicManager.instance.drawTickCount % 14) / 2 | 0))], (-cur.width / 2) - 19, -cur.height / 2 + (offset.y) - 6, cur.width, cur.height);
                            }
                        }
                        canvas.restore();
                        if (SonicManager_15.SonicManager.instance.showHeightMap)
                            this.sensorManager.draw(canvas, this);
                        for (var i = 0; i < this.haltSmoke.length; i++) {
                            var lo = this.haltSmoke[i];
                            canvas.drawImage(SonicManager_15.SonicManager.instance.spriteCache.SonicSprites[("haltsmoke" + ((SonicManager_15.SonicManager.instance.drawTickCount % (4 * 6)) / 6 | 0))], ((lo.x - SonicManager_15.SonicManager.instance.windowLocation.x - 15)), ((lo.y + 12 - SonicManager_15.SonicManager.instance.windowLocation.y + offset.y)));
                            if ((((SonicManager_15.SonicManager.instance.drawTickCount + 6) % (4 * 6)) / 6 | 0) == 0) {
                                this.haltSmoke.splice(i, 1);
                            }
                        }
                    }
                };
                Sonic.prototype.DrawUI = function (canvas, pos) {
                    canvas.save();
                    {
                        if (canvas.font != "13pt Arial bold")
                            canvas.font = "13pt Arial bold";
                        canvas.fillStyle = "White";
                        canvas.fillText("Rings: " + this.rings, pos.x + 90, pos.y + 45);
                        canvas.fillText("Angle: " + this.angle.toString(16), pos.x + 90, pos.y + 75);
                        canvas.fillText("Position: " + (this.x) + ", " + (this.y), pos.x + 90, pos.y + 105);
                        canvas.fillText("Speed: g: " + this.gsp.toFixed(3) + " x:" + this.xsp.toFixed(3) + " y:" + this.ysp.toFixed(3), pos.x + 90, pos.y + 135);
                        canvas.fillText("Mode: " + this.mode.toString(), pos.x + 90, pos.y + 165);
                        canvas.fillText("Multiplier: " + this.watcher.mult, pos.x + 90, pos.y + 195);
                        if (this.inAir)
                            canvas.fillText("air ", pos.x + 220, pos.y + 45);
                        if (this.hLock > 0)
                            canvas.fillText("HLock: " + this.hLock, pos.x + 90, pos.y + 195);
                    }
                    canvas.restore();
                };
                Sonic.prototype.Hit = function (x, y) {
                    if (SonicManager_15.SonicManager.instance.drawTickCount - this.sonicLastHitTick < 120)
                        return;
                    this.justHit = true;
                    this.ysp = -4;
                    this.xsp = 2 * ((this.x - x) < 0 ? -1 : 1);
                    this.sonicLastHitTick = SonicManager_15.SonicManager.instance.drawTickCount;
                    var t = 0;
                    var angle = 101.25;
                    var n = false;
                    var speed = 4;
                    while (t < this.rings) {
                        var ring = new Ring_1.Ring(true);
                        SonicManager_15.SonicManager.instance.activeRings.push(ring);
                        ring.x = this.x | 0;
                        ring.y = this.y - 10 | 0;
                        ring.Ysp = -Math.sin(angle) * speed;
                        ring.Xsp = Math.cos(angle) * speed;
                        if (n) {
                            ring.Ysp *= -1;
                            angle += 22.5;
                        }
                        n = !n;
                        t++;
                        if (t == 16) {
                            speed = 2;
                            angle = 101.25;
                        }
                    }
                    this.rings = 0;
                };
                Sonic.prototype.Debug = function () {
                    this.debugging = !this.debugging;
                    this.xsp = 0;
                    this.gsp = 0;
                    this.ysp = 0;
                    this.spriteState = "normal";
                };
                Sonic.prototype.PressUp = function () {
                    this.holdingUp = true;
                };
                Sonic.prototype.ReleaseUp = function () {
                    this.holdingUp = false;
                };
                Sonic.prototype.PressCrouch = function () {
                    this.crouching = true;
                };
                Sonic.prototype.ReleaseCrouch = function () {
                    this.crouching = false;
                };
                Sonic.prototype.PressLeft = function () {
                    this.holdingLeft = true;
                };
                Sonic.prototype.ReleaseLeft = function () {
                    this.holdingLeft = false;
                };
                Sonic.prototype.PressRight = function () {
                    this.holdingRight = true;
                };
                Sonic.prototype.ReleaseRight = function () {
                    this.holdingRight = false;
                };
                Sonic.prototype.PressJump = function () {
                    this.jumping = true;
                };
                Sonic.prototype.ReleaseJump = function () {
                    this.jumping = false;
                };
                Sonic.prototype.CheckCollisionWithObjects = function (x, y, letter) {
                    this.objectCollision.x = x;
                    this.objectCollision.y = y;
                    var me = this.objectCollision;
                    var levelObjectInfos = SonicManager_15.SonicManager.instance.inFocusObjects;
                    for (var _i = 0, levelObjectInfos_1 = levelObjectInfos; _i < levelObjectInfos_1.length; _i++) {
                        var ob = levelObjectInfos_1[_i];
                        var dj = ob.Collides(me);
                        var dj2 = ob.HurtsSonic(me);
                        if (dj)
                            return ob.Collide(this, letter, dj);
                        if (dj2)
                            return ob.HurtSonic(this, letter, dj2);
                    }
                    return false;
                };
                Sonic.prototype.checkCollisionWithRings = function () {
                    var me = this.myRec;
                    this.ringCollisionRect.x = 0;
                    this.ringCollisionRect.y = 0;
                    this.ringCollisionRect.Width = 8 * 2;
                    this.ringCollisionRect.Height = 8 * 2;
                    var rings = SonicManager_15.SonicManager.instance.sonicLevel.Rings;
                    for (var index = 0; index < rings.length; index++) {
                        var ring = rings[index];
                        var pos = ring;
                        if (this.obtainedRing[index])
                            continue;
                        this.ringCollisionRect.x = pos.x;
                        this.ringCollisionRect.y = pos.y;
                        if (Utils_9.IntersectingRectangle.IntersectRect(me, this.ringCollisionRect)) {
                            this.rings++;
                            this.obtainedRing[index] = true;
                        }
                    }
                };
                Sonic.prototype.CheckCollisionLine = function (p0, p1, p2, p3) {
                    return null;
                };
                return Sonic;
            }());
            exports_35("Sonic", Sonic);
            Watcher = (function () {
                function Watcher() {
                    this.lastTick = 0;
                    this.mult = 1;
                }
                Watcher.prototype.Tick = function () {
                    if (true || SonicManager_15.SonicManager.instance.inHaltMode) {
                        this.mult = 1;
                        return;
                    }
                    var ticks = new Date().getTime();
                    var offset = 0;
                    if (this.lastTick == 0)
                        offset = 16;
                    else
                        offset = ticks - this.lastTick;
                    this.lastTick = ticks;
                    this.mult = (offset / 16) | 0;
                };
                Watcher.prototype.Multiply = function (v) {
                    return this.mult * v;
                };
                return Watcher;
            }());
            exports_35("Watcher", Watcher);
        }
    }
});
System.register("game/level/SpriteCache", [], function(exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var SpriteCache, SpriteCacheIndexes;
    return {
        setters:[],
        execute: function() {
            SpriteCache = (function () {
                function SpriteCache() {
                    this.Rings = new Array();
                    this.TileChunks = new Array();
                    this.Tilepieces = {};
                    this.Tiles = new Array();
                    this.SonicSprites = {};
                    this.HeightMaps = new Array();
                    this.HeightMapChunks = {};
                    this.Indexes = new SpriteCacheIndexes();
                }
                SpriteCache.prototype.ClearCache = function () {
                    this.HeightMaps = new Array();
                    this.HeightMapChunks = {};
                };
                return SpriteCache;
            }());
            exports_36("SpriteCache", SpriteCache);
            SpriteCacheIndexes = (function () {
                function SpriteCacheIndexes() {
                    this.Sprites = 0;
                    this.Tps = 0;
                    this.Tcs = 0;
                    this.Ss = 0;
                    this.Hms = 0;
                    this.Hmc = 0;
                    this.Tls = 0;
                    this.Px = 0;
                    this.Aes = 0;
                }
                return SpriteCacheIndexes;
            }());
            exports_36("SpriteCacheIndexes", SpriteCacheIndexes);
        }
    }
});
System.register("game/level/Animations/AnimationInstance", [], function(exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    var AnimationInstance;
    return {
        setters:[],
        execute: function() {
            AnimationInstance = (function () {
                function AnimationInstance() {
                }
                AnimationInstance.prototype.Tick = function () {
                };
                AnimationInstance.prototype.Draw = function (canvas, i, i1) {
                };
                return AnimationInstance;
            }());
            exports_37("AnimationInstance", AnimationInstance);
        }
    }
});
System.register("common/SpriteLoader", [], function(exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var SpriteLoader, SpriteLoaderStep;
    return {
        setters:[],
        execute: function() {
            SpriteLoader = (function () {
                function SpriteLoader(completed, update) {
                    this.done = false;
                    this.stepIndex = 0;
                    this.steps = new Array();
                    this.tickIndex = 0;
                    this.myCompleted = completed;
                    this.myUpdate = update;
                }
                SpriteLoader.prototype.Tick = function () {
                    var _this = this;
                    if (this.stepIndex == this.steps.length) {
                        if (!this.done) {
                            this.done = true;
                            this.myCompleted();
                        }
                        return true;
                    }
                    var stp = this.steps[this.stepIndex];
                    if (!stp)
                        return true;
                    if ((this.tickIndex % stp.Iterations.length / 12 | 0) == 0)
                        this.myUpdate("Caching: " + stp.Title + " " + ((this.tickIndex / stp.Iterations.length) * 100) + "%");
                    if (stp.Iterations.length > this.tickIndex) {
                        stp.Method(stp.Iterations[this.tickIndex++], function () {
                            if (stp.OnFinish()) {
                                _this.stepIndex++;
                                _this.tickIndex = 0;
                            }
                        });
                    }
                    return false;
                };
                SpriteLoader.prototype.AddStep = function (title, method, onFinish, disable) {
                    if (disable)
                        return -1;
                    this.steps.push(new SpriteLoaderStep(title, method, onFinish));
                    return this.steps.length - 1;
                };
                SpriteLoader.prototype.AddIterationToStep = function (spriteStep, i) {
                    if (spriteStep == -1)
                        return;
                    this.steps[spriteStep].Iterations.push(i);
                };
                return SpriteLoader;
            }());
            exports_38("SpriteLoader", SpriteLoader);
            SpriteLoaderStep = (function () {
                function SpriteLoaderStep(title, method, onFinish) {
                    this.Title = title;
                    this.Method = method;
                    this.OnFinish = onFinish;
                    this.Iterations = new Array();
                }
                return SpriteLoaderStep;
            }());
            exports_38("SpriteLoaderStep", SpriteLoaderStep);
        }
    }
});
System.register("game/level/SonicBackground", [], function(exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var SonicBackground;
    return {
        setters:[],
        execute: function() {
            SonicBackground = (function () {
                function SonicBackground() {
                    this.Width = 0;
                    this.Height = 0;
                }
                SonicBackground.prototype.Draw = function (canvas, point, wOffset) {
                };
                return SonicBackground;
            }());
            exports_39("SonicBackground", SonicBackground);
        }
    }
});
System.register("game/SonicManager", ["common/Utils", "common/CanvasInformation", "common/Enums", "common/Help", "game/level/HeightMap", "game/level/Objects/ObjectManager", "game/SonicLevel", "game/level/Objects/LevelObjectInfo", "game/level/Ring", "game/level/SpriteCache", "game/level/Animations/TileAnimationData", "game/level/Tiles/TilePaletteAnimationManager", "game/level/Tiles/TileAnimationManager", "game/level/Tiles/TileChunk", "common/SpriteLoader", "game/level/Objects/LevelObject", "game/level/Objects/LevelObjectData", "game/level/Tiles/Tile", "game/level/Tiles/TilePiece", "game/level/Tiles/TileInfo", "game/level/Tiles/TilePieceInfo"], function(exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var Utils_10, CanvasInformation_7, Enums_7, Help_6, HeightMap_2, ObjectManager_2, SonicLevel_1, LevelObjectInfo_1, Ring_2, SpriteCache_1, TileAnimationData_1, TilePaletteAnimationManager_1, TileAnimationManager_1, TileChunk_1, SpriteLoader_1, LevelObject_2, LevelObjectData_1, Tile_1, TilePiece_1, TileInfo_1, TilePieceInfo_1;
    var SonicManager, PixelScaleManager;
    return {
        setters:[
            function (Utils_10_1) {
                Utils_10 = Utils_10_1;
            },
            function (CanvasInformation_7_1) {
                CanvasInformation_7 = CanvasInformation_7_1;
            },
            function (Enums_7_1) {
                Enums_7 = Enums_7_1;
            },
            function (Help_6_1) {
                Help_6 = Help_6_1;
            },
            function (HeightMap_2_1) {
                HeightMap_2 = HeightMap_2_1;
            },
            function (ObjectManager_2_1) {
                ObjectManager_2 = ObjectManager_2_1;
            },
            function (SonicLevel_1_1) {
                SonicLevel_1 = SonicLevel_1_1;
            },
            function (LevelObjectInfo_1_1) {
                LevelObjectInfo_1 = LevelObjectInfo_1_1;
            },
            function (Ring_2_1) {
                Ring_2 = Ring_2_1;
            },
            function (SpriteCache_1_1) {
                SpriteCache_1 = SpriteCache_1_1;
            },
            function (TileAnimationData_1_1) {
                TileAnimationData_1 = TileAnimationData_1_1;
            },
            function (TilePaletteAnimationManager_1_1) {
                TilePaletteAnimationManager_1 = TilePaletteAnimationManager_1_1;
            },
            function (TileAnimationManager_1_1) {
                TileAnimationManager_1 = TileAnimationManager_1_1;
            },
            function (TileChunk_1_1) {
                TileChunk_1 = TileChunk_1_1;
            },
            function (SpriteLoader_1_1) {
                SpriteLoader_1 = SpriteLoader_1_1;
            },
            function (LevelObject_2_1) {
                LevelObject_2 = LevelObject_2_1;
            },
            function (LevelObjectData_1_1) {
                LevelObjectData_1 = LevelObjectData_1_1;
            },
            function (Tile_1_1) {
                Tile_1 = Tile_1_1;
            },
            function (TilePiece_1_1) {
                TilePiece_1 = TilePiece_1_1;
            },
            function (TileInfo_1_1) {
                TileInfo_1 = TileInfo_1_1;
            },
            function (TilePieceInfo_1_1) {
                TilePieceInfo_1 = TilePieceInfo_1_1;
            }],
        execute: function() {
            SonicManager = (function () {
                function SonicManager(engine, gameCanvas, resize) {
                    var _this = this;
                    this.sonicSprites = {};
                    this.pixelScale = 1;
                    this.pixelScaleManager = new PixelScaleManager();
                    SonicManager.instance = this;
                    this.engine = engine;
                    this.engine.canvasWidth = $(window).width();
                    this.engine.canvasHeight = $(window).height();
                    gameCanvas.domCanvas[0].setAttribute("width", this.engine.canvasWidth.toString());
                    gameCanvas.domCanvas[0].setAttribute("height", this.engine.canvasHeight.toString());
                    jQuery.getJSON("assets/content/sprites/sonic.js", function (data) {
                        _this.sonicSprites = data;
                    });
                    this.objectManager = new ObjectManager_2.ObjectManager(this);
                    this.objectManager.Init();
                    var scl = 2;
                    this.scale = new Utils_10.Point(scl, scl);
                    this.realScale = new Utils_10.DoublePoint(1, 1);
                    this.mainCanvas = gameCanvas;
                    this.windowLocation = Help_6.Help.defaultWindowLocation(Enums_7.GameState.Editing, this.scale);
                    this.bigWindowLocation = Help_6.Help.defaultWindowLocation(Enums_7.GameState.Editing, this.scale);
                    this.bigWindowLocation.Width = (this.bigWindowLocation.Width * 1.8) | 0;
                    this.bigWindowLocation.Height = (this.bigWindowLocation.Height * 1.8) | 0;
                    this.tileAnimations = new Array();
                    this.animationInstances = new Array();
                    this.showHeightMap = false;
                    this.goodRing = new Ring_2.Ring(false);
                    this.activeRings = new Array();
                    this.forceResize = resize;
                    this.background = null;
                    this.currentGameState = Enums_7.GameState.Editing;
                    this.screenOffset = new Utils_10.Point(this.mainCanvas.domCanvas.width() / 2 - this.windowLocation.Width / 2, this.mainCanvas.domCanvas.height() / 2 - this.windowLocation.Height / 2);
                    this.clickState = Enums_7.ClickState.PlaceChunk;
                    this.tickCount = 0;
                    this.drawTickCount = 0;
                    this.inHaltMode = false;
                    this.waitingForTickContinue = false;
                    this.waitingForDrawContinue = false;
                    this.tileChunkDebugDrawOptions = new TileChunk_1.TileChunkDebugDrawOptions();
                }
                SonicManager.prototype.OnClick = function (Event) {
                    this.clicking = true;
                    if (this.effectClick(Event))
                        return true;
                    return false;
                };
                SonicManager.prototype.effectClick = function (event) {
                    var e = new Utils_10.Point((event.clientX / this.scale.x / this.realScale.x + this.windowLocation.x), (event.clientY / this.scale.y / this.realScale.y + this.windowLocation.y));
                    var ey;
                    var ex;
                    if (event.ctrlKey) {
                        ex = e.x / 128 | 0;
                        ey = e.y / 128 | 0;
                        var ch = this.sonicLevel.getChunkAt(ex, ey);
                        //            if (this.UIManager.UIManagerAreas.TilePieceArea != null)
                        //                ch.SetTilePieceAt(e.X - ex * 128, e.Y - ey * 128, this.UIManager.UIManagerAreas.TilePieceArea.Data, true);
                        return true;
                    }
                    if (event.shiftKey) {
                        ex = e.x / 128 | 0;
                        ey = e.y / 128 | 0;
                        var ch = this.sonicLevel.getChunkAt(ex, ey);
                        //            if (this.UIManager.UIManagerAreas.TileChunkArea != null)
                        //                this.SonicLevel.SetChunkAt(ex, ey, this.UIManager.UIManagerAreas.TileChunkArea.Data);
                        return true;
                    }
                    if (event.button == 0) {
                        switch (this.clickState) {
                            case Enums_7.ClickState.Dragging:
                                return true;
                            case Enums_7.ClickState.PlaceChunk:
                                ex = e.x / 128 | 0;
                                ey = e.y / 128 | 0;
                                var ch = this.sonicLevel.getChunkAt(ex, ey);
                                var tp = ch.GetTilePieceAt(e.x - ex * 128, e.y - ey * 128, true);
                                var dontClear = false;
                                //                    if (this.UIManager.UIManagerAreas.TileChunkArea != null) {
                                //                        if (this.UIManager.UIManagerAreas.TileChunkArea.Data == ch)
                                //                            dontClear = true;
                                //                        this.UIManager.UIManagerAreas.TileChunkArea.Data = ch;
                                //                    }
                                //                    if (this.UIManager.UIManagerAreas.TilePieceArea != null) {
                                //                        if (this.UIManager.UIManagerAreas.TilePieceArea.Data != tp)
                                //                            dontClear = true;
                                //                        this.UIManager.UIManagerAreas.TilePieceArea.Data = tp;
                                //                    }
                                // this.clearCache();
                                return true;
                            case Enums_7.ClickState.PlaceRing:
                                ex = e.x;
                                ey = e.y;
                                this.sonicLevel.Rings.push(Help_6.Help.merge(new Ring_2.Ring(true), { X: ex, Y: ey }));
                                return true;
                            case Enums_7.ClickState.PlaceObject:
                                ex = e.x;
                                ey = e.y;
                                var pos = new Utils_10.Point(ex, ey);
                                for (var _i = 0, _a = this.sonicLevel.Objects; _i < _a.length; _i++) {
                                    var o = _a[_i];
                                    if (Utils_10.IntersectingRectangle.IntersectsRect(o.GetRect(), pos))
                                        alert("Object Data: " + Help_6.Help.stringify(o));
                                }
                                return true;
                        }
                    }
                    return false;
                };
                SonicManager.prototype.tickObjects = function () {
                    var localPoint = new Utils_10.Point(0, 0);
                    this.inFocusObjects = new Array();
                    var levelObjectInfos = this.sonicLevel.Objects;
                    for (var _i = 0, levelObjectInfos_2 = levelObjectInfos; _i < levelObjectInfos_2.length; _i++) {
                        var obj = levelObjectInfos_2[_i];
                        localPoint.x = obj.X | 0;
                        localPoint.y = obj.Y | 0;
                        if (this.bigWindowLocation.Intersects(localPoint)) {
                            this.inFocusObjects.push(obj);
                            obj.Tick(obj, this.sonicLevel, this.sonicToon);
                        }
                    }
                    //        if (this.UIManager.UIManagerAreas.LiveObjectsArea != null)
                    //            this.UIManager.UIManagerAreas.LiveObjectsArea.Data.Populate(this.InFocusObjects);
                    for (var _a = 0, _b = this.animationInstances; _a < _b.length; _a++) {
                        var animationInstance = _b[_a];
                        animationInstance.Tick();
                    }
                };
                SonicManager.prototype.Tick = function () {
                    if (this.loading)
                        return;
                    if (this.currentGameState == Enums_7.GameState.Playing) {
                        if (this.inHaltMode) {
                            if (this.waitingForTickContinue)
                                return;
                        }
                        this.tickCount++;
                        this.tickObjects();
                        this.sonicToon.ticking = true;
                        try {
                            this.sonicToon.tick(this.sonicLevel);
                        }
                        finally {
                            this.sonicToon.ticking = false;
                        }
                        if (this.inHaltMode) {
                            if (this.waitingForTickContinue)
                                return;
                            this.waitingForTickContinue = true;
                            this.waitingForDrawContinue = false;
                        }
                    }
                };
                SonicManager.prototype.PreloadSprites = function (completed, update) {
                    var _this = this;
                    if (this.spriteCache != null) {
                        completed();
                        return;
                    }
                    this.spriteCache = this.spriteCache != null ? this.spriteCache : new SpriteCache_1.SpriteCache();
                    var ci = this.spriteCache.Rings;
                    var spriteLocations = new Array();
                    for (var j = 0; j < 4; j++) {
                        spriteLocations.push("assets/sprites/ring" + j + ".png");
                        this.imageLength++;
                    }
                    var ind_ = this.spriteCache.Indexes;
                    this.spriteLoader = new SpriteLoader_1.SpriteLoader(completed, update);
                    if (ci.length == 0) {
                        var spriteStep = this.spriteLoader.AddStep("Sprites", function (i, done) {
                            Help_6.Help.loadSprite(spriteLocations[i], function (jd) {
                                ci[i] = CanvasInformation_7.CanvasInformation.create(jd.width, jd.height, false);
                                ci[i].Context.drawImage(jd, 0, 0);
                                done();
                            });
                        }, function () {
                            ind_.Sprites++;
                            if (ind_.Sprites == 4)
                                return true;
                            return false;
                        }, false);
                        for (var i = 0; i < spriteLocations.length; i++) {
                            this.spriteLoader.AddIterationToStep(spriteStep, i);
                        }
                    }
                    var cci = this.spriteCache.SonicSprites;
                    if (Object.keys(cci).length == 0) {
                        var sonicStep = this.spriteLoader.AddStep("Sonic Sprites", function (sp, done) {
                            for (var sonicSprite in _this.sonicSprites) {
                                cci[sonicSprite] = Help_6.Help.scaleCsImage(_this.sonicSprites[sonicSprite], new Utils_10.Point(1, 1), function (ec) {
                                });
                            }
                            done();
                        }, function () { return true; }, false);
                        this.spriteLoader.AddIterationToStep(sonicStep, 0);
                    }
                };
                SonicManager.prototype.MainDraw = function (canvas) {
                    var context = canvas.Context;
                    if (this.inHaltMode)
                        if (this.drawHaltMode(context))
                            return;
                    this.engine.Clear(canvas);
                    if (this.sonicLevel == null)
                        return;
                    context.save();
                    var localPoint = new Utils_10.Point(0, 0);
                    this.drawTickCount++;
                    if (this.spriteLoader && !this.spriteLoader.Tick() || this.loading) {
                        SonicManager.drawLoading(context);
                        context.restore();
                        return;
                    }
                    this.updatePositions(context);
                    var w1 = (this.windowLocation.Width / 128 | 0) + 2;
                    var h1 = (this.windowLocation.Height / 128 | 0) + 2;
                    if (this.currentGameState == Enums_7.GameState.Editing) {
                        w1 += 1;
                        h1 += 1;
                        w1 /= this.scale.x;
                        h1 /= this.scale.y;
                    }
                    var offs = SonicManager.getOffs(w1, h1);
                    this.tilePaletteAnimationManager.TickAnimatedPalettes();
                    this.tileAnimationManager.TickAnimatedTiles();
                    var fxP = ((this.windowLocation.x) / 128) | 0;
                    var fyP = ((this.windowLocation.y) / 128) | 0;
                    this.ResetCanvases();
                    var zero = new Utils_10.Point(0, 0);
                    if (this.background) {
                        var wOffset = this.windowLocation.x;
                        var bw = this.background.Width;
                        var movex = (wOffset / bw) * bw;
                        localPoint.x = -this.windowLocation.x + movex;
                        localPoint.y = -this.windowLocation.y / 4;
                        this.background.Draw(this.lowChunkCanvas.Context, localPoint, wOffset);
                        localPoint.x = -this.windowLocation.x + movex + this.background.Width;
                        localPoint.y = -this.windowLocation.y / 4;
                        this.background.Draw(this.lowChunkCanvas.Context, localPoint, wOffset);
                    }
                    this.drawLowChunks(this.lowChunkCanvas.Context, zero, offs, fyP, fxP);
                    if (this.showHeightMap)
                        this.drawHighChunks(this.lowChunkCanvas.Context, fxP, fyP, offs, zero);
                    this.drawObjects(this.sonicCanvas.Context, zero);
                    this.drawAnimations(this.sonicCanvas.Context);
                    this.drawRings(this.sonicCanvas.Context, zero);
                    this.drawSonic(this.sonicCanvas.Context);
                    if (!this.showHeightMap)
                        this.drawHighChunks(this.highChuckCanvas.Context, fxP, fyP, offs, zero);
                    this.drawDebugTextChunks(this.highChuckCanvas.Context, fxP, fyP, offs, zero);
                    //        this.lowChunkCanvas.Context.OffsetPixelsForWater();
                    //        this.highChuckCanvas.Context.OffsetPixelsForWater();
                    this.drawCanveses(context, localPoint);
                    context.restore();
                    if (this.currentGameState == Enums_7.GameState.Playing)
                        this.sonicToon.DrawUI(context, new Utils_10.Point(this.screenOffset.x, this.screenOffset.y));
                };
                SonicManager.prototype.drawCanveses = function (canvas, localPoint) {
                    if (this.pixelScale > 0) {
                        canvas.drawImage(((this.lowChunkCanvas.canvas)), localPoint.x, localPoint.y);
                        canvas.drawImage(((this.sonicCanvas.canvas)), localPoint.x, localPoint.y);
                        canvas.drawImage(((this.highChuckCanvas.canvas)), localPoint.x, localPoint.y);
                        this.extracted(canvas);
                        var imageData = this.pixelScaleManager.scale(canvas, this.pixelScale - 1, this.windowLocation.Width, this.windowLocation.Height);
                        var pixelScale = this.pixelScaleManager.getPixelScale(this.pixelScale - 1);
                        canvas.scale(pixelScale.x, pixelScale.y);
                        canvas.scale(this.realScale.x, this.realScale.y);
                        canvas.scale(this.scale.x, this.scale.y);
                        canvas.drawImage(imageData, localPoint.x, localPoint.y);
                    }
                    else {
                        canvas.scale(this.realScale.x, this.realScale.y);
                        canvas.scale(this.scale.x, this.scale.y);
                        this.extracted(canvas);
                        canvas.drawImage(((this.lowChunkCanvas.canvas)), localPoint.x, localPoint.y);
                        canvas.drawImage(((this.sonicCanvas.canvas)), localPoint.x, localPoint.y);
                        canvas.drawImage(((this.highChuckCanvas.canvas)), localPoint.x, localPoint.y);
                    }
                };
                SonicManager.prototype.extracted = function (canvas) {
                    var img = canvas.getImageData(0, 0, this.windowLocation.Width, this.windowLocation.Height);
                    var arr = img.data;
                    var newArr = PixelScaleManager.cachedArray(this.windowLocation.Width * this.windowLocation.Height);
                    for (var i = 0; i < arr.length; i += 4) {
                        this.transform(arr, newArr, i, this.windowLocation.Width, this.windowLocation.Height);
                    }
                    img.data.set(newArr);
                    canvas.putImageData(img, 0, 0);
                };
                SonicManager.prototype.transform = function (arr, arr2, i, width, height) {
                    var x = i / 4 % width | 0;
                    var y = i / 4 / width | 0;
                    var top = PixelScaleManager._top(x - 1, y, width, height);
                    var bottom = PixelScaleManager._bottom(x + 1, y, width, height);
                    arr2[i] = 127;
                    arr2[i + 1] = 127;
                    arr2[i + 2] = 127;
                    arr2[i] -= arr[top];
                    arr2[i + 1] -= arr[top + 1];
                    arr2[i + 2] -= arr[top + 2];
                    arr2[i] += arr[bottom];
                    arr2[i + 1] += arr[bottom + 1];
                    arr2[i + 2] += arr[bottom + 2];
                    var m = (arr2[i] + arr2[i + 1] + arr2[i + 2]) / 3 | 0;
                    arr2[i] = m;
                    arr2[i + 1] = m;
                    arr2[i + 2] = m;
                };
                SonicManager.prototype.ResetCanvases = function () {
                    this.lowChunkCanvas = this.lowChunkCanvas != null ? this.lowChunkCanvas : CanvasInformation_7.CanvasInformation.create(this.windowLocation.Width, this.windowLocation.Height, false);
                    this.sonicCanvas = this.sonicCanvas != null ? this.sonicCanvas : CanvasInformation_7.CanvasInformation.create(this.windowLocation.Width, this.windowLocation.Height, true);
                    this.highChuckCanvas = this.highChuckCanvas != null ? this.highChuckCanvas : CanvasInformation_7.CanvasInformation.create(this.windowLocation.Width, this.windowLocation.Height, false);
                    this.sonicCanvas.Context.clearRect(0, 0, this.windowLocation.Width, this.windowLocation.Height);
                    this.highChuckCanvas.Context.clearRect(0, 0, this.windowLocation.Width, this.windowLocation.Height);
                    this.lowChunkCanvas.Context.clearRect(0, 0, this.windowLocation.Width, this.windowLocation.Height);
                };
                SonicManager.prototype.DestroyCanvases = function () {
                    this.lowChunkCanvas = null;
                    this.sonicCanvas = null;
                    this.highChuckCanvas = null;
                };
                SonicManager.getOffs = function (w1, h1) {
                    var hash = (w1 + 1) * (h1 + 1);
                    if (SonicManager._cachedOffs[hash])
                        return SonicManager._cachedOffs[hash];
                    var offs = new Array(0);
                    var ca = 0;
                    for (var y = -1; y < h1; y++)
                        for (var x = -1; x < w1; x++)
                            offs[ca++] = (new Utils_10.Point(x, y));
                    return SonicManager._cachedOffs[hash] = offs;
                };
                SonicManager.prototype.updatePositions = function (canvas) {
                    this.screenOffset.x = 0;
                    this.screenOffset.y = 0;
                    if (this.currentGameState == Enums_7.GameState.Playing)
                        this.updatePositionsForPlaying(canvas);
                };
                SonicManager.prototype.updatePositionsForPlaying = function (canvas) {
                    // canvas.scale(this.realScale.x, this.realScale.y);
                    if (this.sonicToon.ticking) {
                        while (true) {
                            if (this.sonicToon.ticking)
                                break;
                        }
                    }
                    canvas.translate(this.screenOffset.x, this.screenOffset.y);
                    this.windowLocation.x = (this.sonicToon.x) - this.windowLocation.Width / 2;
                    this.windowLocation.y = (this.sonicToon.y) - this.windowLocation.Height / 2;
                    this.bigWindowLocation.x = (this.sonicToon.x) - this.bigWindowLocation.Width / 2;
                    this.bigWindowLocation.y = (this.sonicToon.y) - this.bigWindowLocation.Height / 2;
                    this.bigWindowLocation.x = (this.bigWindowLocation.x - this.windowLocation.Width * 0.2);
                    this.bigWindowLocation.y = (this.bigWindowLocation.y - this.windowLocation.Height * 0.2);
                    this.bigWindowLocation.Width = (this.windowLocation.Width * 1.8);
                    this.bigWindowLocation.Height = (this.windowLocation.Height * 1.8);
                };
                SonicManager.drawLoading = function (canvas) {
                    canvas.fillStyle = "white";
                    canvas.fillText("loading...   ", 95, 95);
                    canvas.restore();
                };
                SonicManager.prototype.drawHaltMode = function (canvas) {
                    canvas.fillStyle = "white";
                    canvas.font = "21pt arial bold";
                    canvas.fillText("HALT MODE\r\n Press: P to step\r\n        O to resume", 10, 120);
                    if (this.waitingForDrawContinue)
                        return true;
                    else
                        this.waitingForDrawContinue = true;
                    return false;
                };
                SonicManager.prototype.drawLowChunks = function (canvas, localPoint, offs, fyP, fxP) {
                    for (var _i = 0, offs_1 = offs; _i < offs_1.length; _i++) {
                        var off = offs_1[_i];
                        var _xP = fxP + off.x;
                        var _yP = fyP + off.y;
                        var _xPreal = fxP + off.x;
                        var _yPreal = fyP + off.y;
                        _xP = Help_6.Help.mod(_xP, this.sonicLevel.LevelWidth);
                        _yP = Help_6.Help.mod(_yP, this.sonicLevel.LevelHeight);
                        var chunk = this.sonicLevel.getChunkAt(_xP, _yP);
                        if (chunk == null)
                            continue;
                        localPoint.x = (_xPreal * 128) - this.windowLocation.x | 0;
                        localPoint.y = (_yPreal * 128) - this.windowLocation.y | 0;
                        if (!chunk.isEmpty() && !chunk.OnlyForeground())
                            chunk.draw(canvas, localPoint, Enums_7.ChunkLayerState.Low);
                    }
                };
                SonicManager.prototype.drawHighChunks = function (canvas, fxP, fyP, offs, localPoint) {
                    var m = [];
                    for (var _i = 0, offs_2 = offs; _i < offs_2.length; _i++) {
                        var off = offs_2[_i];
                        var _xP = fxP + off.x;
                        var _yP = fyP + off.y;
                        var _xPreal = fxP + off.x;
                        var _yPreal = fyP + off.y;
                        _xP = Help_6.Help.mod(_xP, this.sonicLevel.LevelWidth);
                        _yP = Help_6.Help.mod(_yP, this.sonicLevel.LevelHeight);
                        var chunk = this.sonicLevel.getChunkAt(_xP, _yP);
                        if (chunk == null)
                            continue;
                        localPoint.x = (_xPreal * 128) - this.windowLocation.x | 0;
                        localPoint.y = (_yPreal * 128) - this.windowLocation.y | 0;
                        if (!chunk.isEmpty() && !chunk.onlyBackground()) {
                            m.push(localPoint.x + " " + localPoint.y);
                            chunk.draw(canvas, localPoint, Enums_7.ChunkLayerState.High);
                        }
                        if (this.showHeightMap) {
                            var fd = this.spriteCache.HeightMapChunks[(this.sonicLevel.CurHeightMap ? 1 : 2) + " " + chunk.Index];
                            if (fd == null) {
                                fd = this.cacheHeightMapForChunk(chunk);
                            }
                            canvas.drawImage(fd.canvas, localPoint.x, localPoint.y);
                        }
                        if (this.currentGameState == Enums_7.GameState.Editing) {
                            canvas.strokeStyle = "#DD0033";
                            canvas.lineWidth = 3;
                            canvas.strokeRect(localPoint.x, localPoint.y, 128, 128);
                        }
                    }
                };
                SonicManager.prototype.drawDebugTextChunks = function (canvas, fxP, fyP, offs, localPoint) {
                    for (var _i = 0, offs_3 = offs; _i < offs_3.length; _i++) {
                        var off = offs_3[_i];
                        var _xP = fxP + off.x;
                        var _yP = fyP + off.y;
                        var _xPreal = fxP + off.x;
                        var _yPreal = fyP + off.y;
                        _xP = Help_6.Help.mod(_xP, this.sonicLevel.LevelWidth);
                        _yP = Help_6.Help.mod(_yP, this.sonicLevel.LevelHeight);
                        var chunk = this.sonicLevel.getChunkAt(_xP, _yP);
                        if (chunk == null)
                            continue;
                        localPoint.x = (_xPreal * 128) - this.windowLocation.x;
                        localPoint.y = (_yPreal * 128) - this.windowLocation.y;
                        if (!chunk.isEmpty() && !chunk.OnlyForeground())
                            chunk.DrawAnimationDebug(canvas, localPoint, Enums_7.ChunkLayerState.Low, this.tileChunkDebugDrawOptions);
                        if (!chunk.isEmpty() && !chunk.onlyBackground())
                            chunk.DrawAnimationDebug(canvas, localPoint, Enums_7.ChunkLayerState.High, this.tileChunkDebugDrawOptions);
                    }
                };
                SonicManager.prototype.cacheHeightMapForChunk = function (chunk) {
                    var md = chunk;
                    var posj1 = new Utils_10.Point(0, 0);
                    var canv = CanvasInformation_7.CanvasInformation.create(128, 128, false);
                    var ctx = canv.Context;
                    this.engine.Clear(canv);
                    for (var _y = 0; _y < 8; _y++) {
                        for (var _x = 0; _x < 8; _x++) {
                            var tp = md.TilePieces[_x][_y];
                            var solid = (this.sonicLevel.CurHeightMap ? tp.Solid1 : tp.Solid2);
                            var hd = this.sonicLevel.CurHeightMap ? tp.GetLayer1HeightMaps() : tp.GetLayer2HeightMaps();
                            var __x = _x;
                            var __y = _y;
                            var vangle = 0;
                            var posm = new Utils_10.Point(posj1.x + (__x * 16), posj1.y + (__y * 16));
                            if (!hd)
                                continue;
                            if (hd.Full === false) {
                            }
                            else if (hd.Full === true) {
                                if (solid > 0) {
                                    ctx.fillStyle = HeightMap_2.HeightMap.colors[solid];
                                    ctx.fillRect(posj1.x + (__x * 16), posj1.y + (__y * 16), 16, 16);
                                }
                            }
                            else {
                                vangle = this.sonicLevel.CurHeightMap ? tp.GetLayer1Angles() : tp.GetLayer2Angles();
                                hd.Draw(ctx, posm, tp.XFlip, tp.YFlip, solid, vangle);
                            }
                        }
                    }
                    return this.spriteCache.HeightMapChunks[(this.sonicLevel.CurHeightMap ? 1 : 2) + " " + md.Index] = canv;
                };
                SonicManager.prototype.drawSonic = function (canvas) {
                    if (this.currentGameState == Enums_7.GameState.Playing) {
                        this.sonicToon.draw(canvas);
                    }
                };
                SonicManager.prototype.drawRings = function (canvas, localPoint) {
                    for (var index = 0; index < this.sonicLevel.Rings.length; index++) {
                        var r = this.sonicLevel.Rings[index];
                        switch (this.currentGameState) {
                            case Enums_7.GameState.Playing:
                                if (!this.sonicToon.obtainedRing[index]) {
                                    if (this.bigWindowLocation.Intersects(r))
                                        this.goodRing.Draw(canvas, r.Negate(this.windowLocation.x | 0, this.windowLocation.y | 0));
                                }
                                break;
                            case Enums_7.GameState.Editing:
                                if (this.bigWindowLocation.Intersects(r))
                                    this.goodRing.Draw(canvas, r.Negate(this.windowLocation.x | 0, this.windowLocation.y | 0));
                                break;
                        }
                    }
                    switch (this.currentGameState) {
                        case Enums_7.GameState.Playing:
                            for (var i = this.activeRings.length - 1; i >= 0; i--) {
                                var ac = this.activeRings[i];
                                localPoint.x = ac.x - this.windowLocation.x | 0;
                                localPoint.y = ac.y - this.windowLocation.y | 0;
                                ac.Draw(canvas, localPoint);
                                if (ac.TickCount > 256)
                                    this.activeRings.splice(i, 1);
                            }
                            break;
                        case Enums_7.GameState.Editing:
                            break;
                    }
                };
                SonicManager.prototype.drawAnimations = function (canvas) {
                    for (var _i = 0, _a = this.animationInstances; _i < _a.length; _i++) {
                        var ano = _a[_i];
                        ano.Draw(canvas, -this.windowLocation.x | 0, -this.windowLocation.y | 0);
                    }
                };
                SonicManager.prototype.drawObjects = function (canvas, localPoint) {
                    var levelObjectInfos = this.sonicLevel.Objects;
                    for (var _i = 0, levelObjectInfos_3 = levelObjectInfos; _i < levelObjectInfos_3.length; _i++) {
                        var o = levelObjectInfos_3[_i];
                        localPoint.x = o.X;
                        localPoint.y = o.Y;
                        if (o.Dead || this.bigWindowLocation.Intersects(localPoint)) {
                            o.Draw(canvas, ((localPoint.x - this.windowLocation.x)) | 0, ((localPoint.y - this.windowLocation.y)) | 0, this.showHeightMap);
                        }
                    }
                };
                SonicManager.prototype.containsAnimatedTile = function (tile, sonLevel) {
                    for (var _i = 0, _a = sonLevel.TileAnimations; _i < _a.length; _i++) {
                        var an = _a[_i];
                        var anin = an.AnimationTileIndex;
                        var num = an.NumberOfTiles;
                        if (tile >= anin && tile < anin + num)
                            return an;
                    }
                    return null;
                };
                SonicManager.prototype.clearCache = function () {
                    if (this.spriteCache != null)
                        this.spriteCache.ClearCache();
                    if (this.sonicLevel != null)
                        this.sonicLevel.ClearCache();
                    if (this.tilePaletteAnimationManager != null)
                        this.tilePaletteAnimationManager.ClearCache();
                    if (this.tileAnimationManager != null)
                        this.tileAnimationManager.ClearCache();
                };
                SonicManager.prototype.mouseUp = function (queryEvent) {
                    this.clicking = false;
                    return false;
                };
                SonicManager.prototype.mouseMove = function (queryEvent) {
                    if (this.clicking)
                        if (this.effectClick(queryEvent))
                            return true;
                    return false;
                };
                SonicManager.prototype.ReplaceMagic = function () {
                    this.Replace(new Utils_10.Rectangle(0, 0, 15, 30), new Utils_10.Point(712, 40));
                };
                SonicManager.prototype.Replace = function (from, to) {
                    var _this = this;
                    var _loop_2 = function(y) {
                        var curY = y;
                        window.setTimeout(function () {
                            for (var x = 0; x < from.Width; x++) {
                                var toChunkX = (to.x + x) / 8;
                                var toChunkY = (to.y + curY) / 8;
                                var tochunk = _this.sonicLevel.getChunkAt(toChunkX, toChunkY);
                                tochunk.clearCache();
                                var totp = tochunk.TilePieces[(to.x + x) - toChunkX * 8][(to.y + curY) - toChunkY * 8];
                                tochunk.IsOnlyBackground = null;
                                tochunk.IsOnlyForeground = null;
                                var fromChunkX = (from.x + x) / 8 | 0;
                                var fromChunkY = (from.y + curY) / 8 | 0;
                                var fromchunk = _this.sonicLevel.getChunkAt(fromChunkX, fromChunkY);
                                fromchunk.clearCache();
                                fromchunk.IsOnlyBackground = null;
                                fromchunk.IsOnlyForeground = null;
                                var fromtp = fromchunk.TilePieces[(from.x + x) - fromChunkX * 8][(from.y + curY) - fromChunkY * 8];
                                tochunk.TilePieces[(to.x + x) - toChunkX * 8][(to.y + curY) - toChunkY * 8] = fromtp;
                                fromchunk.TilePieces[(from.x + x) - fromChunkX * 8][(from.y + curY) - fromChunkY * 8] = totp;
                            }
                        }, (from.Height - y) * 50);
                    };
                    for (var y = from.Height; y >= 0; y--) {
                        _loop_2(y);
                    }
                };
                SonicManager.prototype.cacheTiles = function () {
                    console.time("tileCache");
                    this.tilePaletteAnimationManager = new TilePaletteAnimationManager_1.TilePaletteAnimationManager(this);
                    this.tileAnimationManager = new TileAnimationManager_1.TileAnimationManager(this);
                    for (var _i = 0, _a = this.sonicLevel.TileChunks; _i < _a.length; _i++) {
                        var chunk = _a[_i];
                        chunk.initCache();
                        chunk.warmCache();
                    }
                    console.timeEnd("tileCache");
                    if (this.sonicToon != null) {
                        console.time("collisionCache");
                        for (var _b = 0, _c = this.sonicLevel.TileChunks; _b < _c.length; _b++) {
                            var chunk = _c[_b];
                            this.sonicToon.sensorManager.buildChunk(chunk, false);
                            this.sonicToon.sensorManager.buildChunk(chunk, true);
                        }
                        console.timeEnd("collisionCache");
                    }
                    if (false) {
                        this.debugDraw();
                    }
                };
                SonicManager.prototype.debugDraw = function () {
                    var numWide = 10;
                    var dropOffIndex = 0;
                    var pieces = new Array();
                    while (true) {
                        var debugCanvases = new Array();
                        var totalHeight = 0;
                        var broke = false;
                        for (var index = dropOffIndex; index < this.sonicLevel.TileChunks.length; index++) {
                            var chunk = this.sonicLevel.TileChunks[index];
                            var canvasCache = chunk.Debug_DrawCache();
                            totalHeight += canvasCache.canvas.height;
                            debugCanvases.push(canvasCache);
                            if (totalHeight > 10000) {
                                dropOffIndex = index + 1;
                                broke = true;
                                break;
                            }
                        }
                        var bigOne = CanvasInformation_7.CanvasInformation.create(numWide * 128, totalHeight, false);
                        var currentPosition = 0;
                        for (var index = 0; index < debugCanvases.length; index++) {
                            var canvasInformation = debugCanvases[index];
                            bigOne.Context.drawImage(canvasInformation.canvas, 0, currentPosition);
                            currentPosition += canvasInformation.canvas.height;
                        }
                        pieces.push(bigOne.canvas.toDataURL());
                        if (!broke)
                            break;
                    }
                    var str = "<html><body>";
                    for (var _i = 0, pieces_1 = pieces; _i < pieces_1.length; _i++) {
                        var piece = pieces_1[_i];
                        str += "<img src=\"" + piece + "\"/>\n";
                    }
                    str += "</body></html>";
                    var tx = document.createElement("textarea");
                    tx.style.position = "absolute";
                    tx.value = str;
                    document.body.appendChild(tx);
                };
                SonicManager.prototype.loadObjects = function (objects) {
                    this.cachedObjects = {};
                    var _loop_3 = function() {
                        var o = t.Key;
                        if (this_1.cachedObjects[o]) {
                            t.SetObjectData(this_1.cachedObjects[o]);
                            return "continue";
                        }
                        var d = objects.filter(function (p) { return p.key == o; })[0];
                        if (!d) {
                            t.SetObjectData(new LevelObject_2.LevelObject(o));
                            return "continue";
                        }
                        var dat = void 0;
                        if (d.value.length == 0)
                            dat = new LevelObjectData_1.LevelObjectData();
                        else
                            dat = JSON.parse(d.value);
                        var dr = ObjectManager_2.ObjectManager.ExtendObject(dat);
                        this_1.cachedObjects[o] = dr;
                        t.SetObjectData(dr);
                    };
                    var this_1 = this;
                    for (var _i = 0, _a = this.sonicLevel.Objects; _i < _a.length; _i++) {
                        var t = _a[_i];
                        var state_3 = _loop_3();
                        if (state_3 === "continue") continue;
                    }
                };
                SonicManager.prototype.downloadObjects = function (objects) {
                    var _this = this;
                    $.getJSON('https://api.oursonic.org/objects?object-keys=' + objects.join('~')).then(function (data) {
                        console.log(data);
                        _this.loadObjects(data);
                    });
                };
                SonicManager.prototype.Load = function (sonicLevel) {
                    var _this = this;
                    this.loading = true;
                    this.sonicLevel = new SonicLevel_1.SonicLevel();
                    for (var n = 0; n < sonicLevel.Rings.length; n++) {
                        this.sonicLevel.Rings[n] = new Ring_2.Ring(true);
                        this.sonicLevel.Rings[n].x = sonicLevel.Rings[n].X;
                        this.sonicLevel.Rings[n].y = sonicLevel.Rings[n].Y;
                    }
                    this.sonicLevel.LevelWidth = sonicLevel.ForegroundWidth;
                    this.sonicLevel.LevelHeight = sonicLevel.ForegroundHeight;
                    this.sonicLevel.ChunkMap = sonicLevel.Foreground;
                    this.sonicLevel.BGChunkMap = sonicLevel.Background;
                    for (var l = 0; l < sonicLevel.Objects.length; l++) {
                        this.sonicLevel.Objects[l] = new LevelObjectInfo_1.LevelObjectInfo(sonicLevel.Objects[l]);
                        this.sonicLevel.Objects[l].Index = l;
                    }
                    var objectKeys = new Array();
                    this.sonicLevel.Objects.forEach(function (t) {
                        var o = t.Key;
                        if (objectKeys.filter(function (p) { return p != o; }).length == objectKeys.length)
                            objectKeys.push(o);
                    });
                    this.downloadObjects(objectKeys);
                    for (var j = 0; j < sonicLevel.Tiles.length; j++) {
                        var fc = sonicLevel.Tiles[j];
                        var tiles = fc;
                        var mj = new Array();
                        for (var i = 0; i < tiles.length; i++) {
                            var value = sonicLevel.Tiles[j][i];
                            mj.push((value >> 4));
                            mj.push((value & 0xF));
                        }
                        var mfc = new Array(8);
                        for (var o = 0; o < 8; o++) {
                            mfc[o] = new Array(8);
                        }
                        for (var n = 0; n < mj.length; n++) {
                            mfc[n % 8][n / 8 | 0] = mj[n];
                        }
                        this.sonicLevel.Tiles[j] = new Tile_1.Tile(mfc);
                        this.sonicLevel.Tiles[j].index = j;
                    }
                    var acs = this.sonicLevel.AnimatedChunks = new Array();
                    if (sonicLevel.AnimatedFiles) {
                        this.sonicLevel.AnimatedTileFiles = new Array(sonicLevel.AnimatedFiles.length);
                        for (var animatedFileIndex = 0; animatedFileIndex < sonicLevel.AnimatedFiles.length; animatedFileIndex++) {
                            var animatedFile = sonicLevel.AnimatedFiles[animatedFileIndex];
                            this.sonicLevel.AnimatedTileFiles[animatedFileIndex] = new Array(animatedFile.length);
                            for (var filePiece = 0; filePiece < animatedFile.length; filePiece++) {
                                var c = animatedFile[filePiece];
                                var tiles = c;
                                var mjc = new Array();
                                for (var l = 0; l < tiles.length; l++) {
                                    var value = animatedFile[filePiece][l];
                                    mjc.push((value >> 4));
                                    mjc.push((value & 0xF));
                                }
                                var mfc = new Array(8);
                                for (var o = 0; o < 8; o++) {
                                    mfc[o] = new Array(8);
                                }
                                for (var n = 0; n < mjc.length; n++) {
                                    mfc[n % 8][n / 8 | 0] = mjc[n];
                                }
                                var tile = new Tile_1.Tile(mfc);
                                tile.isTileAnimated = true;
                                tile.index = filePiece * 10000 + animatedFileIndex;
                                this.sonicLevel.AnimatedTileFiles[animatedFileIndex][filePiece] = tile;
                            }
                        }
                    }
                    for (var j = 0; j < sonicLevel.Blocks.length; j++) {
                        var fc = sonicLevel.Blocks[j];
                        var mj = new TilePiece_1.TilePiece();
                        mj.Index = j;
                        mj.Tiles = new Array();
                        for (var p = 0; p < fc.length; p++) {
                            mj.Tiles.push(Help_6.Help.merge(new TileInfo_1.TileInfo(), {
                                _Tile: fc[p].Tile,
                                Index: p,
                                Palette: fc[p].Palette,
                                Priority: fc[p].Priority,
                                XFlip: fc[p].XFlip,
                                YFlip: fc[p].YFlip
                            }));
                        }
                        mj.Init();
                        this.sonicLevel.TilePieces[j] = mj;
                    }
                    this.sonicLevel.Angles = sonicLevel.Angles;
                    this.sonicLevel.TileAnimations = sonicLevel.Animations.map(function (a) { return Help_6.Help.merge(new TileAnimationData_1.TileAnimationData(), {
                        AnimationTileFile: a.AnimationFile,
                        AnimationTileIndex: a.AnimationTileIndex,
                        AutomatedTiming: a.AutomatedTiming,
                        NumberOfTiles: a.NumberOfTiles,
                        DataFrames: a.Frames.map(function (b) { return Help_6.Help.merge(new TileAnimationData_1.TileAnimationDataFrame(), {
                            Ticks: b.Ticks,
                            StartingTileIndex: b.StartingTileIndex
                        }); }).slice(0)
                    }); });
                    this.sonicLevel.CollisionIndexes1 = sonicLevel.CollisionIndexes1;
                    this.sonicLevel.CollisionIndexes2 = sonicLevel.CollisionIndexes2;
                    for (var i = 0; i < sonicLevel.HeightMaps.length; i++) {
                        var b1 = true;
                        var b2 = true;
                        for (var m = 0; m < sonicLevel.HeightMaps[i].length; m++) {
                            if (b1 && sonicLevel.HeightMaps[i][m] !== 0)
                                b1 = false;
                            if (b2 && sonicLevel.HeightMaps[i][m] !== 16)
                                b2 = false;
                        }
                        if (b1)
                            this.sonicLevel.HeightMaps[i] = HeightMap_2.HeightMap.FullHeight(false);
                        else if (b2)
                            this.sonicLevel.HeightMaps[i] = HeightMap_2.HeightMap.FullHeight(true);
                        else
                            this.sonicLevel.HeightMaps[i] = new HeightMap_2.HeightMap(sonicLevel.HeightMaps[i], i);
                    }
                    for (var j = 0; j < sonicLevel.Chunks.length; j++) {
                        var fc = sonicLevel.Chunks[j];
                        var mj = new TileChunk_1.TileChunk();
                        mj.Index = j;
                        mj.TilePieces = new Array(8);
                        for (var i = 0; i < 8; i++) {
                            mj.TilePieces[i] = new Array(8);
                        }
                        for (var p = 0; p < fc.length; p++) {
                            mj.TilePieces[p % 8][(p / 8) | 0] = Help_6.Help.merge(new TilePieceInfo_1.TilePieceInfo(), {
                                Index: p,
                                Block: fc[p].Block,
                                Solid1: fc[p].Solid1,
                                Solid2: fc[p].Solid2,
                                XFlip: fc[p].XFlip,
                                YFlip: fc[p].YFlip
                            });
                        }
                        this.sonicLevel.TileChunks[j] = mj;
                        mj.TileAnimations = {};
                        for (var tpX = 0; tpX < mj.TilePieces.length; tpX++) {
                            for (var tpY = 0; tpY < mj.TilePieces[tpX].length; tpY++) {
                                var pm = mj.TilePieces[tpX][tpY].GetTilePiece();
                                if (pm != null) {
                                    for (var _i = 0, _a = pm.Tiles; _i < _a.length; _i++) {
                                        var mjc = _a[_i];
                                        var fa = this.containsAnimatedTile(mjc._Tile, this.sonicLevel);
                                        if (fa) {
                                            mj.TileAnimations[tpY * 8 + tpX] = fa;
                                            acs[j] = mj;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.sonicLevel.Palette = sonicLevel.Palette.map(function (a) { return a.map(function (b) { return "#" + b; }); });
                    this.sonicLevel.StartPositions = sonicLevel.StartPositions.map(function (a) { return new Utils_10.Point(a.X, a.Y); });
                    this.sonicLevel.AnimatedPalettes = new Array();
                    if (sonicLevel.PaletteItems.length > 0) {
                        for (var k = 0; k < sonicLevel.PaletteItems[0].length; k++) {
                            var pal = sonicLevel.PaletteItems[0][k];
                            this.sonicLevel.AnimatedPalettes.push(Help_6.Help.merge(new SonicLevel_1.PaletteItem(), {
                                Palette: eval(pal.Palette).map(function (b) { return "#" + b; }),
                                SkipIndex: pal.SkipIndex,
                                TotalLength: pal.TotalLength,
                                Pieces: pal.Pieces.map(function (a) { return Help_6.Help.merge(new SonicLevel_1.PaletteItemPieces(), {
                                    PaletteIndex: a.PaletteIndex,
                                    PaletteMultiply: a.PaletteMultiply,
                                    PaletteOffset: a.PaletteOffset
                                }); })
                            }));
                        }
                    }
                    for (var _b = 0, _c = this.sonicLevel.TilePieces; _b < _c.length; _b++) {
                        var tilePiece = _c[_b];
                        tilePiece.AnimatedPaletteIndexes = new Array();
                        tilePiece.AnimatedTileIndexes = new Array();
                        if (this.sonicLevel.AnimatedPalettes.length > 0) {
                            for (var _d = 0, _e = tilePiece.Tiles; _d < _e.length; _d++) {
                                var mj = _e[_d];
                                var tile = mj.GetTile();
                                if (tile) {
                                    tile.animatedPaletteIndexes = new Array();
                                    var pl = tile.GetAllPaletteIndexes();
                                    tile.paletteIndexesToBeAnimated = {};
                                    tile.animatedTileIndexes = new Array();
                                    for (var tileAnimationIndex = 0; tileAnimationIndex < this.sonicLevel.TileAnimations.length; tileAnimationIndex++) {
                                        var tileAnimationData = this.sonicLevel.TileAnimations[tileAnimationIndex];
                                        var anin = tileAnimationData.AnimationTileIndex;
                                        var num = tileAnimationData.NumberOfTiles;
                                        if (tile.index >= anin && tile.index < anin + num) {
                                            tilePiece.AnimatedTileIndexes.push(tileAnimationIndex);
                                            tile.animatedTileIndexes.push(tileAnimationIndex);
                                        }
                                    }
                                    for (var animatedPaletteIndex = 0; animatedPaletteIndex < this.sonicLevel.AnimatedPalettes.length; animatedPaletteIndex++) {
                                        var pal = this.sonicLevel.AnimatedPalettes[animatedPaletteIndex];
                                        tile.paletteIndexesToBeAnimated[animatedPaletteIndex] = new Array();
                                        var _loop_4 = function(mjce) {
                                            var mje1 = mjce;
                                            if (mj.Palette == mje1.PaletteIndex) {
                                                if (pl.filter(function (j) { return j == (mje1.PaletteOffset / 2 | 0) || j == (mje1.PaletteOffset / 2 | 0) + 1; }).length > 0) {
                                                    tilePiece.AnimatedPaletteIndexes.push(animatedPaletteIndex);
                                                    tile.animatedPaletteIndexes.push(animatedPaletteIndex);
                                                    for (var _f = 0, pl_1 = pl; _f < pl_1.length; _f++) {
                                                        var pIndex = pl_1[_f];
                                                        if (pIndex == (mje1.PaletteOffset / 2 | 0) || pIndex == (mje1.PaletteOffset / 2 | 0) + 1) {
                                                            tile.paletteIndexesToBeAnimated[animatedPaletteIndex].push(pIndex);
                                                        }
                                                    }
                                                }
                                            }
                                        };
                                        for (var _g = 0, _h = pal.Pieces; _g < _h.length; _g++) {
                                            var mjce = _h[_g];
                                            _loop_4(mjce);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var finished = (function () {
                        _this.loading = false;
                    });
                    this.PreloadSprites(function () {
                        finished();
                        _this.forceResize();
                    }, function (s) {
                    });
                    this.forceResize();
                    this.onLevelLoad && this.onLevelLoad(this.sonicLevel);
                };
                SonicManager._cachedOffs = {};
                return SonicManager;
            }());
            exports_40("SonicManager", SonicManager);
            PixelScaleManager = (function () {
                function PixelScaleManager() {
                    this.cachedImageDatas = {};
                    this.cachedCanvases = {};
                    this.cached32BitArrays = {};
                    this.cachedPosLookups = {};
                }
                PixelScaleManager.prototype.scale = function (context, pixelScale, width, height) {
                    if (pixelScale == 0)
                        return context.canvas;
                    var startingPixelScale = pixelScale;
                    var imageData = context.getImageData(0, 0, width, height).data;
                    while (pixelScale > 0) {
                        var nScale = Math.pow(2, (startingPixelScale - pixelScale));
                        imageData = this.scaleIt(imageData, width * nScale, height * nScale);
                        pixelScale--;
                    }
                    var f = Math.pow(2, startingPixelScale);
                    var largeImageData = this.cachedImageData(context, width * f, height * f);
                    largeImageData.data.set(imageData);
                    var newC = this.cachedCanvas(largeImageData.width, largeImageData.height);
                    newC.context.putImageData(largeImageData, 0, 0);
                    return newC.canvas;
                };
                PixelScaleManager.prototype.getPixelScale = function (pixelScale) {
                    var nScale = Math.pow(2, pixelScale);
                    return { x: 1 / nScale, y: 1 / nScale };
                };
                PixelScaleManager.prototype.scaleIt = function (pixels_, width, height) {
                    var width2 = width * 2;
                    var height2 = height * 2;
                    var pixels2_ = PixelScaleManager.cachedArray(width2 * height2);
                    var posLookup = this.getPosLookup(width, height);
                    var colsLookup = this.getColsLookup(pixels_, width, height);
                    var cc = 0;
                    for (var y = 0; y < height; y++) {
                        for (var x = 0; x < width; x++) {
                            var Bid = posLookup.top[cc];
                            var Did = posLookup.left[cc];
                            var Eid = posLookup.middle[cc];
                            var Fid = posLookup.right[cc];
                            var Hid = posLookup.bottom[cc];
                            cc++;
                            /*
                             var B = (((pixels_[Bid] << 8) + pixels_[Bid + 1]) << 8) + pixels_[Bid + 2];
                             var D = (((pixels_[Did] << 8) + pixels_[Did + 1]) << 8) + pixels_[Did + 2];
                             var F = (((pixels_[Fid] << 8) + pixels_[Fid + 1]) << 8) + pixels_[Fid + 2];
                             var H = (((pixels_[Hid] << 8) + pixels_[Hid + 1]) << 8) + pixels_[Hid + 2];
                             */
                            var B = colsLookup[Bid];
                            var D = colsLookup[Did];
                            var F = colsLookup[Fid];
                            var H = colsLookup[Hid];
                            var E0, E1, E2, E3;
                            if (B !== (H) && D !== (F)) {
                                E0 = D == (B) ? Did : Eid;
                                E1 = B == (F) ? Fid : Eid;
                                E2 = D == (H) ? Did : Eid;
                                E3 = H == (F) ? Fid : Eid;
                            }
                            else {
                                E0 = Eid;
                                E1 = Eid;
                                E2 = Eid;
                                E3 = Eid;
                            }
                            var tl = (((y * 2) * width2 + (x * 2)) * 4);
                            var tr = (((y * 2) * width2 + (x * 2 + 1)) * 4);
                            var bl = (((y * 2 + 1) * width2 + (x * 2)) * 4);
                            var br = (((y * 2 + 1) * width2 + (x * 2 + 1)) * 4);
                            pixels2_[tl] = pixels_[E0];
                            pixels2_[tr] = pixels_[E1];
                            pixels2_[bl] = pixels_[E2];
                            pixels2_[br] = pixels_[E3];
                            pixels2_[tl + 1] = pixels_[E0 + 1];
                            pixels2_[tr + 1] = pixels_[E1 + 1];
                            pixels2_[bl + 1] = pixels_[E2 + 1];
                            pixels2_[br + 1] = pixels_[E3 + 1];
                            pixels2_[tl + 2] = pixels_[E0 + 2];
                            pixels2_[tr + 2] = pixels_[E1 + 2];
                            pixels2_[bl + 2] = pixels_[E2 + 2];
                            pixels2_[br + 2] = pixels_[E3 + 2];
                        }
                    }
                    return pixels2_;
                };
                PixelScaleManager.prototype.getPosLookup = function (width, height) {
                    var posLookup = this.cachedPosLookups[width * height];
                    if (posLookup)
                        return posLookup;
                    posLookup = this.cachedPosLookups[width * height] = {
                        left: new Uint32Array(width * height),
                        right: new Uint32Array(width * height),
                        top: new Uint32Array(width * height),
                        bottom: new Uint32Array(width * height),
                        middle: new Uint32Array(width * height)
                    };
                    var cc = 0;
                    for (var y = 0; y < height; y++) {
                        for (var x = 0; x < width; x++) {
                            posLookup.top[cc] = PixelScaleManager._top(x, y, width, height);
                            posLookup.left[cc] = PixelScaleManager._left(x, y, width, height);
                            posLookup.middle[cc] = ((y) * width + (x)) * 4;
                            posLookup.right[cc] = PixelScaleManager._right(x, y, width, height);
                            posLookup.bottom[cc] = PixelScaleManager._bottom(x, y, width, height);
                            cc++;
                        }
                    }
                    return posLookup;
                };
                PixelScaleManager.prototype.getColsLookup = function (imageData, width, height) {
                    var cols = this.cached32BitArray(width * height * 4);
                    var pixels_ = imageData;
                    var cc = 0;
                    for (var y = 0; y < height; y++) {
                        for (var x = 0; x < width; x++) {
                            cols[cc] = (((pixels_[(y * width + x) * 4] << 8) + pixels_[(y * width + x) * 4 + 1]) << 8) + pixels_[(y * width + x) * 4 + 2];
                            cc += 4;
                        }
                    }
                    return cols;
                };
                PixelScaleManager._top = function (x, y, width, height) {
                    if (y <= 0)
                        return ((y) * width + (x)) * 4;
                    else
                        return ((y - 1) * width + (x)) * 4;
                };
                PixelScaleManager._left = function (x, y, width, height) {
                    if (x <= 0)
                        return ((y) * width + (x)) * 4;
                    else
                        return ((y) * width + (x - 1)) * 4;
                };
                PixelScaleManager._right = function (x, y, width, height) {
                    if (x + 1 >= width)
                        return ((y) * width + (x)) * 4;
                    else
                        return ((y) * width + (x + 1)) * 4;
                };
                PixelScaleManager._bottom = function (x, y, width, height) {
                    if (y + 1 >= height)
                        return ((y) * width + (x)) * 4;
                    else
                        return ((y + 1) * width + (x)) * 4;
                };
                PixelScaleManager.prototype.cachedImageData = function (canvas, width, height) {
                    var s = ((width) + " " + (height));
                    if (this.cachedImageDatas[s]) {
                        return this.cachedImageDatas[s];
                    }
                    return this.cachedImageDatas[s] = canvas.createImageData(width, height);
                };
                ;
                PixelScaleManager.prototype.cachedCanvas = function (width, height) {
                    var s = (width + " " + height);
                    var tempCnv = this.cachedCanvases[s];
                    if (tempCnv) {
                        return tempCnv;
                    }
                    var newCanvas = document.createElement('canvas');
                    newCanvas.width = width;
                    newCanvas.height = height;
                    var newContext = newCanvas.getContext('2d');
                    newContext.mozImageSmoothingEnabled = false; /// future
                    newContext.msImageSmoothingEnabled = false; /// future
                    newContext.imageSmoothingEnabled = false; /// future
                    return this.cachedCanvases[s] = {
                        canvas: newCanvas,
                        context: newContext
                    };
                };
                PixelScaleManager.cachedArray = function (size) {
                    var tmp = PixelScaleManager.cachedArrays[size];
                    if (tmp) {
                        return tmp;
                    }
                    tmp = PixelScaleManager.cachedArrays[size] = new Uint8ClampedArray(size * 4);
                    for (var s = 0; s < size * 4; s++) {
                        tmp[s] = 255;
                    }
                    return tmp;
                };
                PixelScaleManager.prototype.cached32BitArray = function (size) {
                    var tmp = this.cached32BitArrays[size];
                    if (tmp) {
                        return tmp;
                    }
                    return this.cached32BitArrays[size] = new Uint32Array(size);
                };
                PixelScaleManager.cachedArrays = {};
                return PixelScaleManager;
            }());
        }
    }
});
/// <reference path="../../typings/keyboardjs.d.ts" />
/// <reference path="../../typings/socket.io-client.d.ts" />
System.register("game/SonicEngine", ["common/CanvasInformation", "game/SonicManager", "common/Enums", "common/Utils", "game/sonic/Sonic", "common/Help"], function(exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var CanvasInformation_8, SonicManager_16, Enums_8, Utils_11, Sonic_1, Help_7;
    var SonicEngine;
    return {
        setters:[
            function (CanvasInformation_8_1) {
                CanvasInformation_8 = CanvasInformation_8_1;
            },
            function (SonicManager_16_1) {
                SonicManager_16 = SonicManager_16_1;
            },
            function (Enums_8_1) {
                Enums_8 = Enums_8_1;
            },
            function (Utils_11_1) {
                Utils_11 = Utils_11_1;
            },
            function (Sonic_1_1) {
                Sonic_1 = Sonic_1_1;
            },
            function (Help_7_1) {
                Help_7 = Help_7_1;
            }],
        execute: function() {
            SonicEngine = (function () {
                function SonicEngine() {
                    var _this = this;
                    this.wideScreen = true;
                    this.fullscreenMode = false;
                    this.gameGoodWidth = 0;
                    this.canvasWidth = 0;
                    this.canvasHeight = 0;
                    SonicEngine.instance = this;
                    var gameCanvasName = "gameLayer";
                    this.gameCanvas = CanvasInformation_8.CanvasInformation.CreateFromElement(document.getElementById(gameCanvasName), 0, 0, true);
                    this.canvasWidth = 0;
                    this.canvasHeight = 0;
                    this.bindInput();
                    this.fullscreenMode = true;
                    window.addEventListener("resize", function (e) { return _this.resizeCanvas(true); });
                    jQuery(document).resize(function (e) { return _this.resizeCanvas(true); });
                    this.sonicManager = new SonicManager_16.SonicManager(this, this.gameCanvas, function () { return _this.resizeCanvas(true); });
                    this.sonicManager.indexedPalette = 0;
                    // window.setInterval(() => this.sonicManager.Tick(), 1000 / 60);
                    // window.setInterval(() => this.GameDraw(), 1000 / 60);
                    this.resizeCanvas(true);
                }
                SonicEngine.prototype.bindInput = function () {
                    var _this = this;
                    this.gameCanvas.domCanvas.mousedown(function (e) { return _this.canvasOnClick(e); });
                    this.gameCanvas.domCanvas.mouseup(function (e) { return _this.canvasMouseUp(e); });
                    this.gameCanvas.domCanvas.mousemove(function (e) { return _this.canvasMouseMove(e); });
                    this.gameCanvas.domCanvas.bind("touchstart", function (e) { return _this.canvasOnClick(e); });
                    this.gameCanvas.domCanvas.bind("touchend", function (e) { return _this.canvasMouseUp(e); });
                    this.gameCanvas.domCanvas.bind("touchmove", function (e) { return _this.canvasMouseMove(e); });
                    this.gameCanvas.domCanvas.bind("contextmenu", function (e) { return e.preventDefault(); });
                    keyboardJS.bind("f", function () {
                        _this.sonicManager.showHeightMap = !_this.sonicManager.showHeightMap;
                    }, function () {
                    });
                    keyboardJS.bind("o", function () {
                        if (_this.sonicManager.currentGameState == Enums_8.GameState.Playing)
                            _this.sonicManager.inHaltMode = !_this.sonicManager.inHaltMode;
                    }, function () {
                    });
                    keyboardJS.bind("1", function () {
                        _this.sonicManager.indexedPalette++;
                        _this.sonicManager.clearCache();
                    }, function () {
                    });
                    keyboardJS.bind("2", function () {
                        _this.sonicManager.pixelScale += 1;
                        if (_this.sonicManager.pixelScale == 6)
                            _this.sonicManager.pixelScale = 1;
                    }, function () {
                    });
                    keyboardJS.bind("q", function () {
                        _this.runGame();
                    }, function () {
                    });
                    keyboardJS.bind("p", function () {
                        if (_this.sonicManager.currentGameState == Enums_8.GameState.Playing)
                            if (_this.sonicManager.inHaltMode)
                                _this.sonicManager.waitingForTickContinue = false;
                    }, function () {
                    });
                    keyboardJS.bind("h", function () {
                        if (_this.sonicManager.currentGameState == Enums_8.GameState.Playing)
                            _this.sonicManager.sonicToon.Hit(_this.sonicManager.sonicToon.x, _this.sonicManager.sonicToon.y);
                    }, function () {
                    });
                    keyboardJS.bind("u", function () {
                        _this.wideScreen = !_this.wideScreen;
                        _this.resizeCanvas(true);
                    }, function () {
                    });
                    keyboardJS.bind("c", function () {
                        if (_this.sonicManager.currentGameState == Enums_8.GameState.Playing)
                            _this.sonicManager.sonicToon.Debug();
                    }, function () {
                    });
                    keyboardJS.bind("up", function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.PressUp();
                                break;
                            case Enums_8.GameState.Editing:
                                _this.sonicManager.windowLocation.y -= 128;
                                _this.sonicManager.bigWindowLocation.y -= 128;
                                break;
                        }
                    }, function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.ReleaseUp();
                                break;
                            case Enums_8.GameState.Editing:
                                break;
                        }
                    });
                    keyboardJS.bind("down", function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.PressCrouch();
                                break;
                            case Enums_8.GameState.Editing:
                                _this.sonicManager.windowLocation.y += 128;
                                _this.sonicManager.bigWindowLocation.y += 128;
                                break;
                        }
                    }, function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.ReleaseCrouch();
                                break;
                            case Enums_8.GameState.Editing:
                                break;
                        }
                    });
                    keyboardJS.bind("left", function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.PressLeft();
                                break;
                            case Enums_8.GameState.Editing:
                                _this.sonicManager.windowLocation.x -= 128;
                                _this.sonicManager.bigWindowLocation.x -= 128;
                                break;
                        }
                    }, function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.ReleaseLeft();
                                break;
                            case Enums_8.GameState.Editing:
                                break;
                        }
                    });
                    keyboardJS.bind("right", function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.PressRight();
                                break;
                            case Enums_8.GameState.Editing:
                                _this.sonicManager.windowLocation.x += 128;
                                _this.sonicManager.bigWindowLocation.x += 128;
                                break;
                        }
                    }, function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.ReleaseRight();
                                break;
                            case Enums_8.GameState.Editing:
                                break;
                        }
                    });
                    keyboardJS.bind("space", function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.PressJump();
                                break;
                            case Enums_8.GameState.Editing:
                                break;
                        }
                    }, function () {
                        switch (_this.sonicManager.currentGameState) {
                            case Enums_8.GameState.Playing:
                                _this.sonicManager.sonicToon.ReleaseJump();
                                break;
                            case Enums_8.GameState.Editing:
                                break;
                        }
                    });
                    keyboardJS.bind("e", function () {
                        _this.sonicManager.sonicLevel.CurHeightMap = !_this.sonicManager.sonicLevel.CurHeightMap;
                    }, function () {
                    });
                };
                SonicEngine.prototype.LoadLevel = function (data) {
                    var l = JSON.parse(Help_7.Help.decodeString(data));
                    SonicEngine.instance.RunSonic(l);
                };
                SonicEngine.prototype.RunSonic = function (level) {
                    this.sonicManager.clearCache();
                    this.sonicManager.Load(level);
                    this.sonicManager.windowLocation.x = 0;
                    this.sonicManager.windowLocation.y = 0;
                    this.sonicManager.bigWindowLocation.x = (this.sonicManager.windowLocation.x - this.sonicManager.windowLocation.Width * 0.2) | 0;
                    this.sonicManager.bigWindowLocation.y = (this.sonicManager.windowLocation.y - this.sonicManager.windowLocation.Height * 0.2) | 0;
                    this.sonicManager.bigWindowLocation.Width = (this.sonicManager.windowLocation.Width * 1.8) | 0;
                    this.sonicManager.bigWindowLocation.Height = (this.sonicManager.windowLocation.Height * 1.8) | 0;
                    var dl = Help_7.Help.getQueryString();
                    if (dl["run"]) {
                        if (this.sonicManager.currentGameState == Enums_8.GameState.Playing)
                            this.runGame();
                        this.runGame();
                    }
                    this.sonicManager.cacheTiles();
                    this.runGame();
                };
                SonicEngine.prototype.runGame = function () {
                    var sonicManager = SonicManager_16.SonicManager.instance;
                    switch (sonicManager.currentGameState) {
                        case Enums_8.GameState.Playing:
                            sonicManager.currentGameState = Enums_8.GameState.Editing;
                            sonicManager.scale = new Utils_11.Point(1, 1);
                            sonicManager.windowLocation = Help_7.Help.defaultWindowLocation(sonicManager.currentGameState, sonicManager.scale);
                            sonicManager.sonicToon = null;
                            break;
                        case Enums_8.GameState.Editing:
                            sonicManager.currentGameState = Enums_8.GameState.Playing;
                            sonicManager.scale = new Utils_11.Point(2, 2);
                            sonicManager.windowLocation = Help_7.Help.defaultWindowLocation(sonicManager.currentGameState, sonicManager.scale);
                            sonicManager.sonicToon = new Sonic_1.Sonic();
                            break;
                    }
                    sonicManager.DestroyCanvases();
                    sonicManager.ResetCanvases();
                };
                SonicEngine.prototype.canvasMouseMove = function (queryEvent) {
                    queryEvent.preventDefault();
                    this.sonicManager.mouseMove(queryEvent);
                };
                SonicEngine.prototype.canvasOnClick = function (queryEvent) {
                    queryEvent.preventDefault();
                    this.sonicManager.OnClick(queryEvent);
                };
                SonicEngine.prototype.canvasMouseUp = function (queryEvent) {
                    queryEvent.preventDefault();
                    this.sonicManager.mouseUp(queryEvent);
                };
                SonicEngine.prototype.resizeCanvas = function (resetOverride) {
                    this.canvasWidth = $(window).width();
                    this.canvasHeight = $(window).height();
                    this.sonicManager.windowLocation = Help_7.Help.defaultWindowLocation(this.sonicManager.currentGameState, this.sonicManager.scale);
                    var wide = new Utils_11.DoublePoint((this.canvasWidth / 320 / this.sonicManager.scale.x), (this.canvasHeight / 224 / this.sonicManager.scale.y));
                    var even = new Utils_11.DoublePoint(Math.min((this.canvasWidth / 320 / this.sonicManager.scale.x), (this.canvasHeight / 224 / this.sonicManager.scale.y)), Math.min((this.canvasWidth / 320 / this.sonicManager.scale.x), (this.canvasHeight / 224 / this.sonicManager.scale.y)));
                    this.sonicManager.realScale = !this.fullscreenMode ? new Utils_11.DoublePoint(1, 1) : (this.wideScreen ? wide : even);
                    if (resetOverride || this.sonicManager.overrideRealScale == null)
                        this.sonicManager.overrideRealScale = Utils_11.DoublePoint.create(this.sonicManager.realScale);
                    else
                        this.sonicManager.realScale = Utils_11.DoublePoint.create(this.sonicManager.overrideRealScale);
                    this.gameCanvas.domCanvas.attr("width", (this.sonicManager.windowLocation.Width * (this.sonicManager.currentGameState == Enums_8.GameState.Playing ? this.sonicManager.scale.x * this.sonicManager.realScale.x : 1)).toString());
                    this.gameCanvas.domCanvas.attr("height", (this.sonicManager.windowLocation.Height * (this.sonicManager.currentGameState == Enums_8.GameState.Playing ? this.sonicManager.scale.y * this.sonicManager.realScale.y : 1)).toString());
                    this.gameGoodWidth = (this.sonicManager.windowLocation.Width * (this.sonicManager.currentGameState == Enums_8.GameState.Playing ? this.sonicManager.scale.x * this.sonicManager.realScale.x : 1));
                    var screenOffset = this.sonicManager.currentGameState == Enums_8.GameState.Playing ? new Utils_11.DoublePoint(((this.canvasWidth / 2 - this.sonicManager.windowLocation.Width * this.sonicManager.scale.x * this.sonicManager.realScale.x / 2)), (this.canvasHeight / 2 - this.sonicManager.windowLocation.Height * this.sonicManager.scale.y * this.sonicManager.realScale.y / 2)) : new Utils_11.DoublePoint(0, 0);
                    this.gameCanvas.domCanvas.css("left", screenOffset.x + 'px');
                    this.gameCanvas.domCanvas.css("top", screenOffset.y + 'px');
                    this.sonicManager.DestroyCanvases();
                    this.sonicManager.ResetCanvases();
                };
                SonicEngine.prototype.Clear = function (canv) {
                    canv.domCanvas[0].width = this.gameGoodWidth;
                    this.gameCanvas.Context.mozImageSmoothingEnabled = false; /// future
                    this.gameCanvas.Context.msImageSmoothingEnabled = false; /// future
                    this.gameCanvas.Context.imageSmoothingEnabled = false; /// future
                    this.gameCanvas.Context.imageSmoothingEnabled = false;
                };
                SonicEngine.prototype.GameDraw = function () {
                    this.sonicManager.MainDraw(this.gameCanvas);
                };
                return SonicEngine;
            }());
            exports_41("SonicEngine", SonicEngine);
        }
    }
});
System.register("layout/levelSelector/LevelSelector", ['angular2/core', "layout/windowComponent/WindowComponent", "layout/services/LevelService", "game/SonicEngine"], function(exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    var core_5, WindowComponent_2, LevelService_1, SonicEngine_1;
    var LevelSelector;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (WindowComponent_2_1) {
                WindowComponent_2 = WindowComponent_2_1;
            },
            function (LevelService_1_1) {
                LevelService_1 = LevelService_1_1;
            },
            function (SonicEngine_1_1) {
                SonicEngine_1 = SonicEngine_1_1;
            }],
        execute: function() {
            LevelSelector = (function () {
                function LevelSelector(_levelService) {
                    this._levelService = _levelService;
                }
                LevelSelector.prototype.ngOnInit = function () {
                    var _this = this;
                    this._levelService.getLevels().subscribe(function (levels) {
                        _this.levels = levels;
                    });
                };
                LevelSelector.prototype.loadLevel = function (level) {
                    this._levelService.getLevel(level.name).subscribe(function (level) {
                        SonicEngine_1.SonicEngine.instance.LoadLevel(level);
                    });
                };
                LevelSelector.prototype.closedWindow = function (done) {
                    console.log(done);
                };
                LevelSelector = __decorate([
                    core_5.Component({
                        selector: 'level-selector',
                        templateUrl: 'app/layout/levelSelector/levelSelector.html',
                        directives: [WindowComponent_2.WindowComponent],
                        providers: [LevelService_1.LevelService]
                    }), 
                    __metadata('design:paramtypes', [LevelService_1.LevelService])
                ], LevelSelector);
                return LevelSelector;
            }());
            exports_42("LevelSelector", LevelSelector);
        }
    }
});
System.register("layout/Layout", ['angular2/core', "layout/objectSelector/ObjectSelector", "layout/levelSelector/LevelSelector", 'rxjs/Rx'], function(exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    var core_6, ObjectSelector_1, LevelSelector_1;
    var Layout;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (ObjectSelector_1_1) {
                ObjectSelector_1 = ObjectSelector_1_1;
            },
            function (LevelSelector_1_1) {
                LevelSelector_1 = LevelSelector_1_1;
            },
            function (_1) {}],
        execute: function() {
            Layout = (function () {
                function Layout() {
                }
                Layout = __decorate([
                    core_6.Component({
                        selector: 'layout',
                        templateUrl: 'app/layout/layout.html',
                        directives: [ObjectSelector_1.ObjectSelector, LevelSelector_1.LevelSelector]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Layout);
                return Layout;
            }());
            exports_43("Layout", Layout);
        }
    }
});
/// <reference path="../typings/Compress.d.ts" />
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/core.d.ts" />
/// <reference path="../node_modules/angular2/http.d.ts" />
System.register("main", ['angular2/platform/browser', "layout/Layout", 'angular2/http', "game/SonicEngine"], function(exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    var browser_1, Layout_1, http_2, SonicEngine_2;
    var Main;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Layout_1_1) {
                Layout_1 = Layout_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (SonicEngine_2_1) {
                SonicEngine_2 = SonicEngine_2_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                }
                Main.run = function () {
                    new SonicEngine_2.SonicEngine();
                    browser_1.bootstrap(Layout_1.Layout, [http_2.HTTP_PROVIDERS]);
                };
                return Main;
            }());
            exports_44("Main", Main);
            Main.run();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2xheW91dC9kaXJlY3RpdmVzL2RyYWdnYWJsZURpcmVjdGl2ZS50cyIsIi4uL2FwcC9sYXlvdXQvd2luZG93Q29tcG9uZW50L1dpbmRvd0NvbXBvbmVudC50cyIsIi4uL2FwcC9sYXlvdXQvb2JqZWN0U2VsZWN0b3IvT2JqZWN0U2VsZWN0b3IudHMiLCIuLi9hcHAvbGF5b3V0L3NlcnZpY2VzL0xldmVsU2VydmljZS50cyIsIi4uL2FwcC9jb21tb24vQ2FudmFzSW5mb3JtYXRpb24udHMiLCIuLi9hcHAvY29tbW9uL1V0aWxzLnRzIiwiLi4vYXBwL2dhbWUvbGV2ZWwvU29uaWNJbWFnZS50cyIsIi4uL2FwcC9jb21tb24vRW51bXMudHMiLCIuLi9hcHAvY29tbW9uL0NvbG9yLnRzIiwiLi4vYXBwL2NvbW1vbi9IZWxwLnRzIiwiLi4vYXBwL1NMRGF0YS50cyIsIi4uL2FwcC9nYW1lL2xldmVsL0hlaWdodE1hcC50cyIsIi4uL2FwcC9nYW1lL2xldmVsL1RpbGVzL1RpbGUudHMiLCIuLi9hcHAvZ2FtZS9sZXZlbC9UaWxlcy9UaWxlSW5mby50cyIsIi4uL2FwcC9nYW1lL2xldmVsL1RpbGVzL1RpbGVQaWVjZS50cyIsIi4uL2FwcC9nYW1lL2xldmVsL1RpbGVzL1RpbGVQaWVjZUluZm8udHMiLCIuLi9hcHAvZ2FtZS9sZXZlbC9BbmltYXRpb25zL1RpbGVBbmltYXRpb25EYXRhLnRzIiwiLi4vYXBwL2dhbWUvbGV2ZWwvT2JqZWN0cy9MZXZlbE9iamVjdEFzc2V0RnJhbWUudHMiLCIuLi9hcHAvZ2FtZS9sZXZlbC9PYmplY3RzL0xldmVsT2JqZWN0QXNzZXQudHMiLCIuLi9hcHAvZ2FtZS9sZXZlbC9PYmplY3RzL0xldmVsT2JqZWN0UHJvamVjdGlsZS50cyIsIi4uL2FwcC9nYW1lL2xldmVsL09iamVjdHMvTGV2ZWxPYmplY3RQaWVjZS50cyIsIi4uL2FwcC9nYW1lL2xldmVsL09iamVjdHMvTGV2ZWxPYmplY3QudHMiLCIuLi9hcHAvZ2FtZS9sZXZlbC9PYmplY3RzL0xldmVsT2JqZWN0UGllY2VMYXlvdXRQaWVjZS50cyIsIi4uL2FwcC9nYW1lL2xldmVsL09iamVjdHMvTGV2ZWxPYmplY3RQaWVjZUxheW91dC50cyIsIi4uL2FwcC9nYW1lL2xldmVsL09iamVjdHMvTGV2ZWxPYmplY3REYXRhLnRzIiwiLi4vYXBwL2dhbWUvbGV2ZWwvT2JqZWN0cy9PYmplY3RNYW5hZ2VyLnRzIiwiLi4vYXBwL2dhbWUvbGV2ZWwvT2JqZWN0cy9MZXZlbE9iamVjdEluZm8udHMiLCIuLi9hcHAvZ2FtZS9sZXZlbC9SaW5nLnRzIiwiLi4vYXBwL2dhbWUvU29uaWNMZXZlbC50cyIsIi4uL2FwcC9nYW1lL2xldmVsL1RpbGVzL1RpbGVQYWxldHRlQW5pbWF0aW9uTWFuYWdlci50cyIsIi4uL2FwcC9nYW1lL2xldmVsL1RpbGVzL1RpbGVBbmltYXRpb25NYW5hZ2VyLnRzIiwiLi4vYXBwL2dhbWUvbGV2ZWwvVGlsZXMvVGlsZUNodW5rLnRzIiwiLi4vYXBwL2dhbWUvc29uaWMvU2Vuc29yTWFuYWdlci50cyIsIi4uL2FwcC9nYW1lL3NvbmljL1NvbmljQ29uc3RhbnRzLnRzIiwiLi4vYXBwL2dhbWUvc29uaWMvU29uaWMudHMiLCIuLi9hcHAvZ2FtZS9sZXZlbC9TcHJpdGVDYWNoZS50cyIsIi4uL2FwcC9nYW1lL2xldmVsL0FuaW1hdGlvbnMvQW5pbWF0aW9uSW5zdGFuY2UudHMiLCIuLi9hcHAvY29tbW9uL1Nwcml0ZUxvYWRlci50cyIsIi4uL2FwcC9nYW1lL2xldmVsL1NvbmljQmFja2dyb3VuZC50cyIsIi4uL2FwcC9nYW1lL1NvbmljTWFuYWdlci50cyIsIi4uL2FwcC9nYW1lL1NvbmljRW5naW5lLnRzIiwiLi4vYXBwL2xheW91dC9sZXZlbFNlbGVjdG9yL0xldmVsU2VsZWN0b3IudHMiLCIuLi9hcHAvbGF5b3V0L0xheW91dC50cyIsIi4uL2FwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFw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LE9BQU8sRUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFDdEUsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUM3RSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFDOUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQzlFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUM5RSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFDOUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQzlFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUM5RSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFDOUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQzlFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUM5RSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFDOUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQzlFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUM5RSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFDOUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQzlFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUM5RSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FB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RSxFQUFFLEVBQUUsQ0FBQztnQ0FDNUIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDcEIsQ0FBQzt3QkFDTCxDQUFDO3dCQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7NEJBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0NBQzVCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQ2xDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7Z0NBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDaEUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0NBQ1gsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NENBQ1gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDOzRDQUN0QyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7d0NBQzFDLENBQUM7d0NBQ0QsSUFBSTs0Q0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7b0NBQy9DLENBQUM7b0NBQ0QsSUFBSSxDQUFDLENBQUM7d0NBQ0YsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDVCxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7d0NBQzFDLElBQUk7NENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ3JDLENBQUM7Z0NBQ0wsQ0FBQztnQ0FFRCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQ0FDMUMsSUFBSSxlQUFlLEdBQWEsSUFBSSxDQUFDO2dDQUNyQyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO29DQUNuQixRQUFRLENBQUM7Z0NBQ2IsSUFBSSxFQUFFLFNBQVUsQ0FBQztnQ0FDakIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29DQUNoQyxFQUFFLEdBQUcsVUFBVSxDQUFDLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0NBQy9DLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7d0NBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7NENBQ2hDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7d0NBQy9DLENBQUM7b0NBQ0wsQ0FBQztnQ0FDTCxDQUFDO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNKLGVBQWUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dDQUN2QyxDQUFDO2dDQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7b0NBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7d0NBQ2hDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzt3Q0FDWCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7d0NBQ1gsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NENBQ1gsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0RBQ1gsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7Z0RBQ2QsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7NENBQ2xCLENBQUM7NENBQ0QsSUFBSSxDQUFDLENBQUM7Z0RBQ0YsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7Z0RBQ2QsRUFBRSxHQUFHLEdBQUcsQ0FBQzs0Q0FDYixDQUFDO3dDQUNMLENBQUM7d0NBQ0QsSUFBSSxDQUFDLENBQUM7NENBQ0YsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0RBQ1gsRUFBRSxHQUFHLEdBQUcsQ0FBQztnREFDVCxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQzs0Q0FDbEIsQ0FBQzs0Q0FDRCxJQUFJLENBQUMsQ0FBQztnREFDRixFQUFFLEdBQUcsR0FBRyxDQUFDO2dEQUNULEVBQUUsR0FBRyxHQUFHLENBQUM7NENBQ2IsQ0FBQzt3Q0FDTCxDQUFDO3dDQUNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzs0Q0FDaEMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0RBQ2hCLEtBQWUsQ0FBQztvREFDWixHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29EQUN4QyxLQUFLLENBQUM7Z0RBQ1YsS0FBZSxDQUFDLENBQUM7Z0RBQ2pCLEtBQWUsQ0FBQyxDQUFDO2dEQUNqQixLQUFlLENBQUM7b0RBQ1osR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0RBQ3JHLEtBQUssQ0FBQzs0Q0FDZCxDQUFDO3dDQUNMLENBQUM7b0NBQ0wsQ0FBQztnQ0FDTCxDQUFDOzRCQUNMLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7NEJBQ3BCLE1BQU0sQ0FBQTt3QkFDVixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOzRCQUM5QixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzdCLENBQUM7d0JBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs0QkFDNUIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixDQUFDO3dCQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7NEJBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0NBQzVCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQ2xDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7Z0NBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztv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R0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDcEYsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDdEYsTUFBTSxDQUFBO29CQUNWLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDYixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQzdCLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDL0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0NBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixDQUFDO29CQUNMLENBQUM7b0JBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDZixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDaEIsS0FBSyxvQkFBWSxDQUFDLEtBQUs7Z0NBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUM3SSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29DQUNYLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQixLQUFLLENBQUM7NEJBQ1YsS0FBSyxvQkFBWSxDQUFDLFFBQVE7Z0NBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUM3SSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29DQUNYLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQixLQUFLLENBQUM7NEJBQ1YsS0FBSyxvQkFBWSxDQUFDLE9BQU87Z0NBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUM3SSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQ0FDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29DQUNYLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQixLQUFLLENBQUM7NEJBQ1YsS0FBSyxvQkFBWSxDQUFDLFNBQVM7Z0NBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1B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QUFJLENBQUMsVUFBVSxDQUFDOzRCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDM0MsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7NEJBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDOzRCQUM3RixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDOzRCQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7NEJBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUMzRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdHLENBQUM7d0JBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFD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QUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3RSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFHdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDakksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMzRSxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUd6QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pELE1BQU0sQ0FBQyxLQUFLLENBQUMs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LENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUN0QyxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDekMsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dDQUNuRSxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7Z0NBQ3ZCLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0NBQ2xDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0NBQ2xDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUNuRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7Z0NBQ3JGLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDakcsQ0FBQzt3QkFDTCxDQUFDLEVBQ0QsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxH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Q0FBQztvQkFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ3RELElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDZixJQUFJLEVBQUUsR0FBWSxJQUFJLEtBQUssRUFBVSxDQUFDO3dCQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDM0MsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLENBQUM7d0JBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ2hDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsQ0FBQzt3QkFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFD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QUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ2hELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUdwRCxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUMzQixRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUMzQixRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUMzQixRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUczQixRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ25DLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDbkMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNuQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBR25DLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDbkMsUUFBUSxDQUFDLEVBQUUs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