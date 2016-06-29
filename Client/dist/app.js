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
System.register("Client/app/layout/directives/draggableDirective", ['angular2/core'], function(exports_1, context_1) {
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
System.register("Client/app/layout/windowComponent/WindowComponent", ['angular2/core', "Client/app/layout/directives/draggableDirective"], function(exports_2, context_2) {
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
System.register("Client/app/layout/objectSelector/ObjectSelector", ['angular2/core', "Client/app/layout/windowComponent/WindowComponent"], function(exports_3, context_3) {
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
System.register("Client/app/layout/services/LevelService", ['angular2/core', 'angular2/http'], function(exports_4, context_4) {
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
System.register("Client/app/layout/levelSelector/LevelSelector", ['angular2/core', "Client/app/layout/windowComponent/WindowComponent", "Client/app/layout/services/LevelService", "../../game/SonicEngine"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
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
            exports_5("LevelSelector", LevelSelector);
        }
    }
});
System.register("Client/app/layout/Layout", ['angular2/core', "Client/app/layout/objectSelector/ObjectSelector", "Client/app/layout/levelSelector/LevelSelector", 'rxjs/Rx'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
            exports_6("Layout", Layout);
        }
    }
});
System.register("Client/app/hexLibraries/AssetManager", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var AssetManager;
    return {
        setters:[],
        execute: function() {
            AssetManager = (function () {
                function AssetManager(completed) {
                    this.assetQueue = {};
                    this.assets = {};
                    this.completed = null;
                    this.$assetsLoaded = 0;
                    this.$assetsRequested = 0;
                    this.completed = completed;
                }
                AssetManager.prototype.start = function () {
                    for (var name_1 in this.assetQueue) {
                        if (this.assetQueue.hasOwnProperty(name_1)) {
                            var img = new Image();
                            img.onload = ((function (that, img, name) { return function () {
                                that.$imageLoaded(img, name);
                            }; }))(this, img, name_1);
                            img.src = this.assetQueue[name_1].url;
                        }
                    }
                };
                AssetManager.prototype.addAsset = function (name, url, size, base) {
                    this.assetQueue[name] = { base: base, size: size, url: url };
                    this.$assetsRequested++;
                };
                AssetManager.prototype.$imageLoaded = function (img, name) {
                    var _this = this;
                    this.assets[name] = {
                        image: img
                    };
                    this.assets[name].size = this.assetQueue[name].size || { width: img.width, height: img.height };
                    this.assets[name].base = this.assetQueue[name].base ||
                        { x: this.assets[name].size.width / 2, y: this.assets[name].size.height / 2 };
                    this.$assetsLoaded++;
                    if (this.$assetsLoaded === this.$assetsRequested) {
                        setTimeout(function () {
                            _this.completed();
                        }, 100);
                    }
                };
                return AssetManager;
            }());
            exports_7("AssetManager", AssetManager);
        }
    }
});
System.register("Common/hexLibraries/HexUtils", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var HexagonColor, Node, distance, orderBy, DrawingUtilities;
    return {
        setters:[],
        execute: function() {
            HexagonColor = (function () {
                function HexagonColor(color) {
                    this.color = "";
                    this.darkBorder = "";
                    this.dark1 = "";
                    this.dark2 = "";
                    this.dark3 = "";
                    this.color = color;
                    this.darkBorder = DrawingUtilities.colorLuminance(color, -0.45);
                    this.dark1 = DrawingUtilities.colorLuminance(color, -0.4);
                    this.dark2 = DrawingUtilities.colorLuminance(color, -0.55);
                    this.dark3 = DrawingUtilities.colorLuminance(color, -0.65);
                }
                return HexagonColor;
            }());
            exports_8("HexagonColor", HexagonColor);
            Node = (function () {
                function Node(parent, piece) {
                    this.parent = null;
                    this.x = 0;
                    this.y = 0;
                    this.item = null;
                    this.f = 0;
                    this.g = 0;
                    this.parent = parent;
                    // array index of this Node in the world linear array
                    // the location coordinates of this Node
                    this.x = piece.x;
                    this.y = piece.z;
                    this.item = piece;
                    // the distanceFunction cost to get
                    // TO this Node from the START
                    this.f = 0;
                    // the distanceFunction cost to get
                    // from this Node to the GOAL
                    this.g = 0;
                }
                Node.prototype.value = function () {
                    return this.x + (this.y * 5000);
                };
                return Node;
            }());
            exports_8("Node", Node);
            exports_8("distance", distance = function (p1, p2) {
                var x1 = p1.x;
                var y1 = p1.z;
                var x2 = p2.x;
                var y2 = p2.z;
                var du = x2 - x1;
                var dv = (y2 + ((x2 / 2) | 0)) - (y1 + ((x1 / 2) | 0));
                if ((du >= 0 && dv >= 0) || (du < 0 && dv < 0))
                    return Math.max(Math.abs(du), Math.abs(dv));
                else
                    return Math.abs(du) + Math.abs(dv);
            });
            exports_8("orderBy", orderBy = function (list, callback) {
                var itms = [];
                for (var i = 0; i < list.length; i++) {
                    var obj = list[i];
                    itms.push({ item: obj, val: callback(obj) });
                }
                itms.sort(function (a, b) { return (a.val - b.val); });
                list = [];
                for (var i = 0; i < itms.length; i++) {
                    var obj1 = itms[i];
                    list.push(obj1.item);
                }
                return list;
            });
            DrawingUtilities = (function () {
                function DrawingUtilities() {
                }
                DrawingUtilities.drawCircle = function (context) {
                    context.beginPath();
                    context.arc(0, 0, 5, 0, 2 * Math.PI, false);
                    context.fillStyle = 'black';
                    context.fill();
                    context.lineWidth = 5;
                    context.stroke();
                };
                ;
                DrawingUtilities.colorLuminance = function (hex, lum) {
                    // validate hex string
                    hex = hex.replace(new RegExp('[^0-9a-f]', 'gi'), '');
                    // convert to decimal and change luminosity
                    var rgb = '#';
                    for (var i = 0; i < 3; i++) {
                        var c = parseInt(hex.substr(i * 2, 2), 16);
                        var cs = (Math.round(Math.min(Math.max(0, c + c * lum), 255)) | 0).toString(16);
                        rgb += ("00" + cs).substr(cs.length);
                    }
                    return rgb;
                };
                ;
                DrawingUtilities.pointInPolygon = function (pointX, pointY, polygon) {
                    var isInside = false;
                    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
                        if (polygon[i].y > pointY !== polygon[j].y > pointY &&
                            pointX < (polygon[j].x - polygon[i].x) * (pointY - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x) {
                            isInside = !isInside;
                        }
                    }
                    return isInside;
                };
                ;
                return DrawingUtilities;
            }());
            exports_8("DrawingUtilities", DrawingUtilities);
        }
    }
});
System.register("Common/Utils", [], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
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
            exports_9("Point", Point);
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
            exports_9("DoublePoint", DoublePoint);
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
            exports_9("IntersectingRectangle", IntersectingRectangle);
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
            exports_9("Rectangle", Rectangle);
        }
    }
});
System.register("Common/hexLibraries/GridHexagonConstants", ["Common/Utils"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Utils_1;
    var GridHexagonConstants;
    return {
        setters:[
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
            }],
        execute: function() {
            GridHexagonConstants = (function () {
                function GridHexagonConstants() {
                }
                GridHexagonConstants.height = function () {
                    return Math.sqrt(3) / 2 * GridHexagonConstants.width * GridHexagonConstants.heightSkew;
                };
                GridHexagonConstants.depthHeight = function () {
                    return GridHexagonConstants.height() * GridHexagonConstants.depthHeightSkew;
                };
                ;
                GridHexagonConstants.hexagonTopPolygon = function () {
                    return [new Utils_1.Point(-GridHexagonConstants.width / 2, 0), new Utils_1.Point(-GridHexagonConstants.width / 4, -GridHexagonConstants.height() / 2), new Utils_1.Point(GridHexagonConstants.width / 4, -GridHexagonConstants.height() / 2), new Utils_1.Point(GridHexagonConstants.width / 2, 0), new Utils_1.Point(GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2), new Utils_1.Point(-GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2), new Utils_1.Point(-GridHexagonConstants.width / 2, 0)];
                };
                ;
                GridHexagonConstants.hexagonDepthLeftPolygon = function (depthHeight) {
                    return [new Utils_1.Point(-GridHexagonConstants.width / 2, 0), new Utils_1.Point(-GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2), new Utils_1.Point(-GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2 + depthHeight), new Utils_1.Point(-GridHexagonConstants.width / 2, depthHeight), new Utils_1.Point(-GridHexagonConstants.width / 2, 0)];
                };
                ;
                GridHexagonConstants.hexagonDepthBottomPolygon = function (depthHeight) {
                    return [new Utils_1.Point(-GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2),
                        new Utils_1.Point(GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2),
                        new Utils_1.Point(GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2 + depthHeight),
                        new Utils_1.Point(-GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2 + depthHeight),
                        new Utils_1.Point(-GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2)];
                };
                ;
                GridHexagonConstants.hexagonDepthRightPolygon = function (depthHeight) {
                    return [new Utils_1.Point(GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2), new Utils_1.Point(GridHexagonConstants.width / 2, 0), new Utils_1.Point(GridHexagonConstants.width / 2, depthHeight), new Utils_1.Point(GridHexagonConstants.width / 4, depthHeight + GridHexagonConstants.height() / 2), new Utils_1.Point(GridHexagonConstants.width / 4, GridHexagonConstants.height() / 2)];
                };
                ;
                GridHexagonConstants.width = 100;
                GridHexagonConstants.heightSkew = .7;
                GridHexagonConstants.depthHeightSkew = .3;
                return GridHexagonConstants;
            }());
            exports_10("GridHexagonConstants", GridHexagonConstants);
        }
    }
});
System.register("Client/app/hexLibraries/GridHexagon", ["Common/hexLibraries/GridHexagonConstants", "Client/app/hexLibraries/AssetManager"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var GridHexagonConstants_1, AssetManager_1;
    var GridHexagon, caches;
    function buildPath(path) {
        var p2d = new Path2D();
        for (var i = 0; i < path.length; i++) {
            var point = path[i];
            p2d.lineTo(point.x, point.y);
        }
        return p2d;
    }
    function getCacheImage(height, icon, hexColor) {
        var c = (icon ? icon.name : '') + "-" + height + "-" + hexColor.color;
        return caches[c];
    }
    function setCacheImage(height, icon, hexColor, img) {
        var c = (icon ? icon.name : '') + "-" + height + "-" + hexColor.color;
        caches[c] = img;
    }
    return {
        setters:[
            function (GridHexagonConstants_1_1) {
                GridHexagonConstants_1 = GridHexagonConstants_1_1;
            },
            function (AssetManager_1_1) {
                AssetManager_1 = AssetManager_1_1;
            }],
        execute: function() {
            GridHexagon = (function () {
                function GridHexagon() {
                    this.x = 0;
                    this.y = 0;
                    this.z = 0;
                    this.height = 0;
                    this.icon = null;
                    this.unit = null;
                    this.highlightColor = null;
                    this.hexColor = null;
                    this.topPath = null;
                    this.leftDepthPath = null;
                    this.bottomDepthPath = null;
                    this.rightDepthPath = null;
                    this.drawCache = null;
                }
                GridHexagon.prototype.getDepthHeight = function () {
                    return (this.height) * GridHexagonConstants_1.GridHexagonConstants.depthHeight();
                };
                GridHexagon.prototype.setUnit = function (name) {
                    this.unit = name;
                    if (this.unit) {
                        this.icon = AssetManager_1.AssetManager.instance.assets[this.unit];
                    }
                    else {
                        this.icon = null;
                    }
                    this.invalidate();
                };
                GridHexagon.prototype.setColor = function (hexColor) {
                    if (this.hexColor != hexColor) {
                        this.hexColor = hexColor;
                        this.invalidate();
                    }
                };
                GridHexagon.prototype.setHighlight = function (hexColor) {
                    if (this.highlightColor != hexColor) {
                        this.highlightColor = hexColor;
                        this.invalidate();
                    }
                };
                GridHexagon.prototype.buildPaths = function () {
                    var depthHeight = this.getDepthHeight();
                    this.topPath = buildPath(GridHexagonConstants_1.GridHexagonConstants.hexagonTopPolygon());
                    this.leftDepthPath = buildPath(GridHexagonConstants_1.GridHexagonConstants.hexagonDepthLeftPolygon(depthHeight));
                    this.bottomDepthPath = buildPath(GridHexagonConstants_1.GridHexagonConstants.hexagonDepthBottomPolygon(depthHeight));
                    this.rightDepthPath = buildPath(GridHexagonConstants_1.GridHexagonConstants.hexagonDepthRightPolygon(depthHeight));
                };
                GridHexagon.prototype.$getDrawingColor = function () {
                    return this.highlightColor || this.hexColor;
                };
                GridHexagon.prototype.drawLeftDepth = function (context) {
                    context.strokeStyle = this.$getDrawingColor().dark1;
                    context.stroke(this.leftDepthPath);
                    context.fillStyle = this.$getDrawingColor().dark1;
                    context.fill(this.leftDepthPath);
                };
                GridHexagon.prototype.drawBottomDepth = function (context) {
                    context.strokeStyle = this.$getDrawingColor().dark2;
                    context.stroke(this.bottomDepthPath);
                    context.fillStyle = this.$getDrawingColor().dark2;
                    context.fill(this.bottomDepthPath);
                };
                GridHexagon.prototype.drawRightDepth = function (context) {
                    context.strokeStyle = this.$getDrawingColor().dark3;
                    context.stroke(this.rightDepthPath);
                    context.fillStyle = this.$getDrawingColor().dark3;
                    context.fill(this.rightDepthPath);
                };
                GridHexagon.prototype.drawTop = function (context) {
                    /*
                     if ((this.y + this.height) != 1)
                     context.strokeStyle = this.$getDrawingColor().darkBorder;
                     else
                     context.strokeStyle = this.$getDrawingColor().color;
                     */
                    context.strokeStyle = this.$getDrawingColor().darkBorder;
                    context.stroke(this.topPath);
                    context.fillStyle = this.$getDrawingColor().color;
                    context.fill(this.topPath);
                };
                GridHexagon.prototype.drawIcon = function (context) {
                    if (this.icon) {
                        context.save();
                        context.translate(-this.icon.base.x, -this.icon.base.y);
                        context.drawImage(this.icon.image, 0, 0, this.icon.size.width, this.icon.size.height);
                        context.restore();
                    }
                };
                GridHexagon.prototype.invalidate = function () {
                    this.drawCache = null;
                };
                GridHexagon.prototype.envelope = function () {
                    var size = { width: 0, height: 0 };
                    size.width = GridHexagonConstants_1.GridHexagonConstants.width;
                    size.height = GridHexagonConstants_1.GridHexagonConstants.height();
                    if (this.icon) {
                        size.height = Math.max(size.height, this.icon.base.y + size.height / 2);
                    }
                    size.height += this.getDepthHeight();
                    size.width += 12;
                    size.height += 6;
                    return size;
                };
                GridHexagon.prototype.hexCenter = function () {
                    var center = { x: 0, y: 0 };
                    center.y = GridHexagonConstants_1.GridHexagonConstants.height() / 2;
                    if (this.icon) {
                        center.y = Math.max(center.y, this.icon.base.y);
                    }
                    center.x = GridHexagonConstants_1.GridHexagonConstants.width / 2;
                    if (this.icon) {
                        center.x = center.x;
                    }
                    center.x += 6;
                    center.y += 6;
                    return center;
                };
                GridHexagon.prototype.draw = function (context) {
                    var center = this.hexCenter();
                    if (this.drawCache) {
                        context.drawImage(this.drawCache, -center.x, -center.y);
                    }
                    else {
                        var c = getCacheImage(this.height, this.icon ? this.icon.name : '', this.highlightColor || this.hexColor);
                        if (!c) {
                            var can = document.createElement('canvas');
                            var ctx = can.getContext('2d');
                            var size = this.envelope();
                            can.width = size.width;
                            can.height = size.height;
                            ctx.save();
                            ctx.translate(center.x, center.y);
                            this.drawLeftDepth(ctx);
                            this.drawBottomDepth(ctx);
                            this.drawRightDepth(ctx);
                            ctx.save();
                            //ctx.lineWidth = 1;
                            //ctx.lineCap = "round";
                            //ctx.lineJoin = "round";
                            this.drawTop(ctx);
                            ctx.restore();
                            this.drawIcon(ctx);
                            ctx.restore();
                            setCacheImage(this.height, this.icon ? this.icon.name : '', this.hexColor.color, can);
                            /*       ctx.strokeStyle='black';
                             ctx.lineWidth=1;
                             ctx.strokeRect(0,0,can.width,can.height);*/
                            this.drawCache = can;
                        }
                        else {
                            this.drawCache = c;
                        }
                        this.draw(context);
                    }
                };
                GridHexagon.prototype.getNeighbors = function () {
                    var neighbors = [];
                    if ((this.x % 2 === 0)) {
                        neighbors.push({ x: this.x - 1, y: this.z });
                        neighbors.push({ x: this.x, y: this.z - 1 });
                        neighbors.push({ x: this.x + 1, y: this.z });
                        neighbors.push({ x: this.x - 1, y: this.z + 1 });
                        neighbors.push({ x: this.x, y: this.z + 1 });
                        neighbors.push({ x: this.x + 1, y: this.z + 1 });
                    }
                    else {
                        neighbors.push({ x: this.x - 1, y: this.z - 1 });
                        neighbors.push({ x: this.x, y: this.z - 1 });
                        neighbors.push({ x: this.x + 1, y: this.z - 1 });
                        neighbors.push({ x: this.x - 1, y: this.z });
                        neighbors.push({ x: this.x, y: this.z + 1 });
                        neighbors.push({ x: this.x + 1, y: this.z });
                    }
                    return neighbors;
                };
                return GridHexagon;
            }());
            exports_11("GridHexagon", GridHexagon);
            caches = {};
        }
    }
});
System.register("Client/app/hexLibraries/HexBoard", ["Common/hexLibraries/GridHexagonConstants", "Common/hexLibraries/HexUtils", "Client/app/hexLibraries/GridHexagon"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var GridHexagonConstants_2, HexUtils_1, GridHexagon_1;
    var HexBoard;
    return {
        setters:[
            function (GridHexagonConstants_2_1) {
                GridHexagonConstants_2 = GridHexagonConstants_2_1;
            },
            function (HexUtils_1_1) {
                HexUtils_1 = HexUtils_1_1;
            },
            function (GridHexagon_1_1) {
                GridHexagon_1 = GridHexagon_1_1;
            }],
        execute: function() {
            HexBoard = (function () {
                function HexBoard() {
                    this.hexList = [];
                    this.hexBlock = {};
                    this.boardSize = { width: 0, height: 0 };
                    this.viewPort = { x: 0, y: 0, width: 400, height: 400, padding: GridHexagonConstants_2.GridHexagonConstants.width * 2 };
                }
                HexBoard.prototype.xyToHexIndex = function (x, y) {
                    return this.hexBlock[x + y * 5000];
                };
                HexBoard.prototype.resize = function (width, height) {
                    this.viewPort.width = width;
                    this.viewPort.height = height;
                };
                HexBoard.prototype.setSize = function (width, height) {
                    this.boardSize.width = width;
                    this.boardSize.height = height;
                };
                HexBoard.prototype.offsetView = function (x, y) {
                    this.viewPort.x += x;
                    this.viewPort.y += y;
                    this.constrainViewPort();
                };
                HexBoard.prototype.setView = function (x, y) {
                    this.viewPort.x = x;
                    this.viewPort.y = y;
                };
                HexBoard.prototype.constrainViewPort = function () {
                    this.viewPort.x = Math.max(this.viewPort.x, 0 - this.viewPort.padding);
                    this.viewPort.y = Math.max(this.viewPort.y, 0 - this.viewPort.padding);
                    var size = this.gameDimensions();
                    this.viewPort.x = Math.min(this.viewPort.x, size.width + this.viewPort.padding - this.viewPort.width);
                    this.viewPort.y = Math.min(this.viewPort.y, size.height + this.viewPort.padding - this.viewPort.height);
                };
                HexBoard.prototype.initialize = function (state) {
                    var str = state.board.boardStr;
                    this.setSize(state.board.width, state.board.height);
                    var factionColors = [];
                    for (var i = 0; i < state.factions.length; i++) {
                        var faction_1 = state.factions[i];
                        factionColors[i] = new HexUtils_1.HexagonColor(faction_1.color);
                    }
                    var ys = str.split('|');
                    for (var y = 0; y < ys.length; y++) {
                        var yItem = ys[y].split('');
                        for (var x = 0; x < yItem.length; x += 2) {
                            var xItem = parseInt(yItem[x]);
                            if (xItem == 0)
                                continue;
                            var factionIndex = parseInt(yItem[x + 1]);
                            var gridHexagon = new GridHexagon_1.GridHexagon();
                            gridHexagon.x = x / 2;
                            gridHexagon.y = 0;
                            gridHexagon.z = y;
                            gridHexagon.height = xItem;
                            if (factionIndex == 0) {
                                gridHexagon.hexColor = baseColor;
                            }
                            else {
                                gridHexagon.hexColor = factionColors[factionIndex - 1];
                            }
                            gridHexagon.buildPaths();
                            this.addHexagon(gridHexagon);
                        }
                    }
                    this.reorderHexList();
                    for (var i = 0; i < state.factions.length; i++) {
                        var faction = state.factions[i];
                        var fColor = new HexUtils_1.HexagonColor(faction.color);
                        for (var j = 0; j < faction.units.length; j++) {
                            var unit = faction.units[j];
                            var gridHexagon = this.xyToHexIndex(unit.x, unit.y);
                            if (!gridHexagon)
                                continue;
                            gridHexagon.setColor(fColor);
                            gridHexagon.setUnit(unit.unitType);
                        }
                    }
                };
                HexBoard.prototype.gameDimensions = function () {
                    var size = { width: 0, height: 0 };
                    size.width = GridHexagonConstants_2.GridHexagonConstants.width * 3 / 4 * this.boardSize.width;
                    size.height = GridHexagonConstants_2.GridHexagonConstants.height() * this.boardSize.height;
                    return size;
                };
                HexBoard.prototype.getHexAtPoint = function (clickX, clickY) {
                    var lastClick = null;
                    clickX += this.viewPort.x;
                    clickY += this.viewPort.y;
                    for (var i = 0; i < this.hexList.length; i++) {
                        var gridHexagon = this.hexList[i];
                        var x = GridHexagonConstants_2.GridHexagonConstants.width * 3 / 4 * gridHexagon.x;
                        var z = gridHexagon.z * GridHexagonConstants_2.GridHexagonConstants.height() + ((gridHexagon.x % 2 === 1) ? (-GridHexagonConstants_2.GridHexagonConstants.height() / 2) : 0);
                        z -= gridHexagon.height * GridHexagonConstants_2.GridHexagonConstants.depthHeight();
                        z += gridHexagon.y * GridHexagonConstants_2.GridHexagonConstants.depthHeight();
                        if (HexUtils_1.DrawingUtilities.pointInPolygon(clickX - x, clickY - z, GridHexagonConstants_2.GridHexagonConstants.hexagonTopPolygon())) {
                            lastClick = gridHexagon;
                        }
                        if (HexUtils_1.DrawingUtilities.pointInPolygon(clickX - x, clickY - z, GridHexagonConstants_2.GridHexagonConstants.hexagonDepthLeftPolygon((gridHexagon.height + 1) * GridHexagonConstants_2.GridHexagonConstants.depthHeight()))) {
                            lastClick = gridHexagon;
                        }
                        if (HexUtils_1.DrawingUtilities.pointInPolygon(clickX - x, clickY - z, GridHexagonConstants_2.GridHexagonConstants.hexagonDepthBottomPolygon((gridHexagon.height + 1) * GridHexagonConstants_2.GridHexagonConstants.depthHeight()))) {
                            lastClick = gridHexagon;
                        }
                        if (HexUtils_1.DrawingUtilities.pointInPolygon(clickX - x, clickY - z, GridHexagonConstants_2.GridHexagonConstants.hexagonDepthRightPolygon((gridHexagon.height + 1) * GridHexagonConstants_2.GridHexagonConstants.depthHeight()))) {
                            lastClick = gridHexagon;
                        }
                    }
                    return lastClick;
                };
                HexBoard.prototype.addHexagon = function (hexagon) {
                    this.hexList.push(hexagon);
                    this.hexBlock[hexagon.x + hexagon.z * 5000] = hexagon;
                };
                HexBoard.prototype.reorderHexList = function () {
                    this.hexList = HexUtils_1.orderBy(this.hexList, function (m) { return (m.z - m.y) * 1000 + (m.x % 2) * -200 + m.height; });
                };
                HexBoard.prototype.drawBoard = function (context) {
                    context.save();
                    context.translate(-this.viewPort.x, -this.viewPort.y);
                    context.lineWidth = 1;
                    for (var i = 0; i < this.hexList.length; i++) {
                        var gridHexagon = this.hexList[i];
                        this.drawHexagon(context, gridHexagon);
                    }
                    context.restore();
                };
                HexBoard.prototype.drawHexagon = function (context, gridHexagon) {
                    var x = GridHexagonConstants_2.GridHexagonConstants.width * 3 / 4 * gridHexagon.x;
                    var z = gridHexagon.z * GridHexagonConstants_2.GridHexagonConstants.height() + ((gridHexagon.x % 2 === 1) ? (-GridHexagonConstants_2.GridHexagonConstants.height() / 2) : 0);
                    z -= gridHexagon.height * GridHexagonConstants_2.GridHexagonConstants.depthHeight();
                    z += gridHexagon.y * GridHexagonConstants_2.GridHexagonConstants.depthHeight();
                    if (!(x > this.viewPort.x - this.viewPort.padding &&
                        x < this.viewPort.x + this.viewPort.width + this.viewPort.padding &&
                        z > this.viewPort.y - this.viewPort.padding &&
                        z < this.viewPort.y + this.viewPort.height + this.viewPort.padding)) {
                        return;
                    }
                    context.save();
                    context.translate(x, z);
                    gridHexagon.draw(context);
                    context.restore();
                };
                HexBoard.prototype.pathFind = function (start, finish) {
                    var mypathStart = new HexUtils_1.Node(null, start);
                    var mypathEnd = new HexUtils_1.Node(null, finish);
                    var aStar = [];
                    var open = [mypathStart];
                    var closed = [];
                    var result = [];
                    var neighbours;
                    var node;
                    var path;
                    var length, max, min, i, j;
                    while (length = open.length) {
                        max = Infinity;
                        min = -1;
                        for (i = 0; i < length; i++) {
                            if (open[i].f < max) {
                                max = open[i].f;
                                min = i;
                            }
                        }
                        node = open.splice(min, 1)[0];
                        if (node.x === mypathEnd.x && node.y === mypathEnd.y) {
                            path = closed[closed.push(node) - 1];
                            do {
                                result.push(path.item);
                            } while (path = path.parent);
                            aStar = closed = open = [];
                            result.reverse();
                        }
                        else {
                            neighbours = node.item.getNeighbors();
                            for (i = 0, j = neighbours.length; i < j; i++) {
                                var n = this.xyToHexIndex(neighbours[i].x, neighbours[i].y);
                                if (!n)
                                    continue;
                                if (Math.abs((node.item.y + node.item.height) - (n.y + n.height)) >= 2)
                                    continue;
                                path = new HexUtils_1.Node(node, n);
                                if (!aStar[path.value()]) {
                                    path.g = node.g + HexUtils_1.distance(n, node.item) + (Math.abs((node.item.y + node.item.height) - (n.y + n.height)) * 2);
                                    path.f = path.g + HexUtils_1.distance(n, finish);
                                    open.push(path);
                                    aStar[path.value()] = true;
                                }
                            }
                            closed.push(node);
                        }
                    }
                    return result;
                };
                return HexBoard;
            }());
            exports_12("HexBoard", HexBoard);
        }
    }
});
System.register("Client/app/hexLibraries/MenuManager", [], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var MenuManager;
    return {
        setters:[],
        execute: function() {
            MenuManager = (function () {
                function MenuManager(canvas) {
                    this.canvas = null;
                    this.context = null;
                    this.items = [];
                    this.selectedItem = null;
                    this.isOpen = false;
                    this.iconSize = 0;
                    this.location = null;
                    this.onClick = null;
                    this.canvas = canvas;
                    this.context = this.canvas.getContext('2d');
                    this.canvas.width = document.body.clientWidth;
                    this.canvas.height = document.body.clientHeight;
                    this.items = [];
                    this.selectedItem = null;
                    this.isOpen = false;
                    this.iconSize = 100;
                }
                MenuManager.prototype.openMenu = function (items, location, onClick) {
                    this.isOpen = true;
                    this.location = location;
                    this.items = items;
                    this.onClick = onClick;
                    this.selectedItem = null;
                };
                MenuManager.prototype.closeMenu = function () {
                    this.canvas.width = this.canvas.width;
                    this.isOpen = false;
                    this.location = null;
                    this.items = null;
                    this.onClick = null;
                    this.selectedItem = null;
                };
                MenuManager.prototype.size = function () {
                    var size = { width: this.iconSize * this.items.length, height: this.iconSize };
                    return size;
                };
                MenuManager.prototype.tap = function (x, y) {
                    if (!this.isOpen)
                        return false;
                    var size = this.size();
                    if (x >= this.location.x && y >= this.location.y &&
                        x <= this.location.x + size.width && y <= this.location.y + size.height) {
                        x -= this.location.x;
                        y -= this.location.y;
                        var ind = (x / this.iconSize) | 0;
                        this.selectedItem = this.items[ind];
                        this.onClick && this.onClick(this.selectedItem);
                        return true;
                    }
                    return false;
                };
                MenuManager.prototype.draw = function () {
                    if (!this.isOpen)
                        return;
                    this.canvas.width = this.canvas.width;
                    this.context.save();
                    this.context.translate(this.location.x, this.location.y);
                    var size = this.size();
                    this.context.lineWidth = 15;
                    this.context.lineJoin = "round";
                    this.context.strokeStyle = 'grey';
                    this.context.strokeRect(0, 0, size.width, size.height);
                    this.context.fillStyle = 'white';
                    this.context.fillRect(0, 0, size.width, size.height);
                    for (var i = 0; i < this.items.length; i++) {
                        var item = this.items[i];
                        if (this.selectedItem == item) {
                            this.context.fillStyle = 'red';
                            this.context.fillRect(i * (this.iconSize), 0, this.iconSize, this.iconSize);
                        }
                    }
                    for (var i = 0; i < this.items.length - 1; i++) {
                        this.context.fillStyle = 'grey';
                        this.context.fillRect(this.iconSize + i * (this.iconSize), 0, 2, this.iconSize);
                    }
                    for (var i = 0; i < this.items.length; i++) {
                        var item = this.items[i];
                        this.context.drawImage(item.image, i * (this.iconSize) + 5, 0 + 5, this.iconSize - 10, this.iconSize - 10);
                    }
                    this.context.restore();
                };
                return MenuManager;
            }());
            exports_13("MenuManager", MenuManager);
        }
    }
});
/// <reference path="../typings/Compress.d.ts" />
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/core.d.ts" />
/// <reference path="../node_modules/angular2/http.d.ts" />
System.register("Client/app/main", ["Client/app/hexLibraries/AssetManager", "Common/hexLibraries/HexUtils", "Client/app/hexLibraries/HexBoard", "Client/app/hexLibraries/MenuManager"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var AssetManager_2, HexUtils_2, HexBoard_1, MenuManager_1;
    var Main;
    function startApp() {
        var baseColor = new HexUtils_2.HexagonColor('#FFFFFF');
        var highlightColor = new HexUtils_2.HexagonColor('#51F9FF');
        var selectedHighlightColor = new HexUtils_2.HexagonColor('#51F900');
        var moveHighlightColor = new HexUtils_2.HexagonColor('#99F920');
        var attackHighlightColor = new HexUtils_2.HexagonColor('#91F9CF');
        var possiblePoints = [];
        var hexBoard = new HexBoard_1.HexBoard();
        var canvas = document.getElementById("hex");
        var menu = document.getElementById("menu");
        var menuManager = new MenuManager_1.MenuManager(menu);
        var overlay = document.getElementById("overlay");
        var mc = new Hammer.Manager(overlay);
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
        mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
        mc.add(new Hammer.Tap());
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        hexBoard.resize(canvas.width, canvas.height);
        var swipeVelocity = { x: 0, y: 0 };
        var tapStart = { x: 0, y: 0 };
        mc.on('panstart', function (ev) {
            if (menuManager.isOpen) {
                return false;
            }
            menuManager.closeMenu();
            swipeVelocity.x = swipeVelocity.y = 0;
            tapStart.x = hexBoard.viewPort.x;
            tapStart.y = hexBoard.viewPort.y;
            hexBoard.setView(tapStart.x - ev.deltaX, tapStart.y - ev.deltaY);
        });
        mc.on('panmove', function (ev) {
            if (menuManager.isOpen) {
                return false;
            }
            hexBoard.setView(tapStart.x - ev.deltaX, tapStart.y - ev.deltaY);
        });
        mc.on('swipe', function (ev) {
            if (menuManager.isOpen) {
                return false;
            }
            menuManager.closeMenu();
            swipeVelocity.x = ev.velocityX * 10;
            swipeVelocity.y = ev.velocityY * 10;
        });
        var selectedItem;
        var currentState = 'none';
        mc.on('tap', function (ev) {
            var x = ev.center.x;
            var y = ev.center.y;
            swipeVelocity.x = swipeVelocity.y = 0;
            if (menuManager.tap(x, y)) {
                return;
            }
            menuManager.closeMenu();
            for (var i = 0; i < hexBoard.hexList.length; i++) {
                var h = hexBoard.hexList[i];
                h.setHighlight(null);
            }
            var item = hexBoard.getHexAtPoint(x, y);
            if (!item)
                return;
            if (currentState == 'highlighting') {
                for (var p = 0; p < possiblePoints.length; p++) {
                    var pItem = possiblePoints[p];
                    if (pItem == item) {
                        item.setUnit(selectedItem.unit);
                        item.setColor(selectedItem.hexColor);
                        selectedItem.setUnit(null);
                        break;
                    }
                }
                currentState = 'none';
                return;
            }
            selectedItem = null;
            currentState = 'none';
            if (item.unit) {
                currentState = 'highlighted';
                item.setHighlight(highlightColor);
                selectedItem = item;
                menuManager.openMenu([
                    { image: AssetManager_2.AssetManager.instance.assets['Icon.Move'].image, action: 'Move' },
                    { image: AssetManager_2.AssetManager.instance.assets['Icon.Attack'].image, action: 'Attack' }
                ], { x: x, y: y }, function (selectedItem) {
                    item.setHighlight(selectedHighlightColor);
                    menuManager.closeMenu();
                    startAction(item, selectedItem.action);
                    currentState = 'highlighting';
                });
            }
        });
        function startAction(item, action) {
            possiblePoints = [];
            switch (item.unit) {
                case 'Infantry':
                    switch (action) {
                        case "Move":
                            var radius = 2;
                            var spots = findAvailableSpots(radius, item);
                            for (var i = 0; i < spots.length; i++) {
                                var spot = spots[i];
                                if (spot == item || spot.unit)
                                    continue;
                                var path = hexBoard.pathFind(item, spot);
                                if (path.length > 0 && path.length <= radius + 1) {
                                    possiblePoints.push(spot);
                                    spot.setHighlight(moveHighlightColor);
                                }
                            }
                            break;
                        case "Attack":
                            var radius = 2;
                            var spots = findAvailableSpots(radius, item);
                            for (var i = 0; i < spots.length; i++) {
                                var spot = spots[i];
                                if (spot == item)
                                    continue;
                                if (!spot.unit || item.hexColor == spot.hexColor) {
                                    continue;
                                }
                                var path = hexBoard.pathFind(item, spot);
                                if (path.length > 1 && path.length <= radius + 1) {
                                    possiblePoints.push(spot);
                                    spot.setHighlight(attackHighlightColor);
                                }
                            }
                            break;
                    }
                    break;
                case 'Tank':
                    switch (action) {
                        case "Move":
                            var radius = 5;
                            var spots = findAvailableSpots(radius, item);
                            for (var i = 0; i < spots.length; i++) {
                                var spot = spots[i];
                                if (spot == item || spot.unit)
                                    continue;
                                var path = hexBoard.pathFind(item, spot);
                                if (path.length > 1 && path.length <= radius + 1) {
                                    possiblePoints.push(spot);
                                    spot.setHighlight(moveHighlightColor);
                                }
                            }
                            break;
                        case "Attack":
                            var radius = 5;
                            var spots = findAvailableSpots(radius, item);
                            for (var i = 0; i < spots.length; i++) {
                                var spot = spots[i];
                                if (spot == item)
                                    continue;
                                if (!spot.unit || item.hexColor == spot.hexColor) {
                                    continue;
                                }
                                var path = hexBoard.pathFind(item, spot);
                                if (path.length > 1 && path.length <= radius + 1) {
                                    possiblePoints.push(spot);
                                    spot.setHighlight(attackHighlightColor);
                                }
                            }
                            break;
                    }
                    break;
                case 'Base':
                    break;
            }
        }
        function findAvailableSpots(radius, center) {
            var items = [];
            for (var q = 0; q < hexBoard.hexList.length; q++) {
                var item = hexBoard.hexList[q];
                if (HexUtils_2.distance(center, item) <= radius) {
                    items.push(item);
                }
            }
            return items;
        }
        var context = canvas.getContext("2d");
        function draw() {
            requestAnimationFrame(draw);
            tick();
            canvas.width = canvas.width;
            hexBoard.drawBoard(context);
            menuManager.draw();
        }
        function tick() {
            if (Math.abs(swipeVelocity.x) > 0) {
                var sign = Math.sign(swipeVelocity.x);
                swipeVelocity.x += 0.7 * -sign;
                if (Math.sign(swipeVelocity.x) != sign) {
                    swipeVelocity.x = 0;
                }
            }
            if (Math.abs(swipeVelocity.y) > 0) {
                var sign = Math.sign(swipeVelocity.y);
                swipeVelocity.y += 0.7 * -sign;
                if (Math.sign(swipeVelocity.y) != sign) {
                    swipeVelocity.y = 0;
                }
            }
            hexBoard.offsetView(swipeVelocity.x, swipeVelocity.y);
        }
        draw();
        hexBoard.initialize({
            "id": "000000000000000000000000",
            "lastGeneration": "2016-06-29T07:44:02.0733591Z",
            "board": {
                "width": 84,
                "height": 84,
                "boardStr": "213131111121211101111111110111111111112111111121111101011101111111111111111111111111111111111111111111211111212101111111211121111111011111112101111101113111111111111111|011111111131111111111111211101111111110101111121211111112131111111111111111121111101111131112111111111111111111131013111012111111101111111111111112131011111110111111111|111111111121111121112111113111111101311111111111111121111101111111110111111121111111111111111111112131112111011101211111111111211111011121111111110111111111311101112111|211101111111011111111101313121012111111111111111111111211111111121111111111111113121011101111111111121111111211111211111112111111111211111111111110111110111111111212111|111111111121111111311111111111111111111111110111113111112111210111111121111111112111111111111111011111111111311111111111111111211111111111110131011121111111111111111111|111111111131111111111111111111311111111111111121010111310111011121111101111111112111113121111111111101111111311121111121111111111111011111111111111121112121111111111111|211111211111212111111121111111010111113111112131111111110101111111211101111111111101112111110121111121011121210101213121211101211111111111012111111111111121111111110111|111101111121111111111111112111111101111101211111111131211111112131211121111131111111111111011111110111111111111131110111111111111131111101011111111111111111010101111111|211111111131111111213111110111311111111111110111311101111121011131111111211111113111211111211111111111111111010121111121311101111111111111113121111121111101111111111111|111111210111113111011111112111211111211111111111112121111111111111110111111111111111111111111101211111013121211111111101110111011111111111211101211111011101111111111111|111101111111211111011111113101011111012101111111311111110121013131111111011121111111211121011111111111211111012101111111111111211111111111110121111121111111111101111111|011111011111010111110111111111111111112111111111113101111111111111111111111111112111111131110111011111111111011111112111011121111101112111112111012111111121111121111111|012111111111111111111111111111112101011101111101112111111111012111111111011111111111111111111111111111111111111131111111111111110111110101111111111111310111111111311101|110111212101211121111101112111111111111111111111210111011111212111111121211111111101111111212111111111311111111111112101111111211121111111212111111131111111110121111111|112101111111111111211111111111111111112111111111112111111121111111113111211121113111210111011111110111011111112111312111112111011111211111010111110111111131211111110111|011101111111211121111111110111110111211111112111211111110111112111111111110111112111010101111111212121112111111111113111111111111111110111111111111111110111010111111111|111111111111111111111131111111211111111101111111111111111111211111011111111121213111113121113111111111113111011111111121112111011111111111011111112111211111111111110111|311101113131112111211111210111111121111111111111111111011101111101111111111111111121111121111101111111012111111111111131211111111111111111111131111111111111112121111111|211111112121111111111111111111111111111111111111111111112111111111111111111111111121112111211111111111211111111111110111110101211101111111311111213121012111111111111111|111101111121113101111111110111011101211111111111112111111111111111011111111111111121110101111121111111111111111111113121112131112111112111111111111111111111110111111111|111111313111111111211111111111113101111111110111111101111121210131011111211121112121212111112111211111111111113111113111111111211111112111013121111111211111111101111101|111111211111011121112111111101211111111111011121111111110101212111111111110121311111111111110111110111111121111111011121110121111111211111110121110111110111112111112111|211111111111113111110111111111111111112101111111111111010121111111011111211111111101111111111101011111011111111111112111111121111121111111113111111111110111111111111111|111131111111311131111111111111011111112111111111011111111111311111111111111111213111211121111111112111111111111111111111111111211111012111011111110111112101111101111121|111111110111111121111111011111111111111101111111311111111111111121211101111111113111111101110111111131111111111111111111111111111111112111311121111101111131111111111111|211121111111110111111121111111111101113111211111111111112111111111111111111111011121211121111111110111111101111131111111111111110111111111111101311111011121111111111111|112111111131311121111111111111011111111111211131111111111111212121111111112111211111111111111111011111111111311101011121111111012111110121111111111111111101111131211121|111111113111111111010111112121112111111111111101211121111111111111310111112121011121110121112111111131111111211111112101112121111111211111211111111111112111111111011121|221212221202121212021202121212121212121202221222122212121202220222122202120202121202221202121222121222221212121212120212121212221212121212122212121212120212121212223212|121212121212122212221212121212121202123222121212221212121232121212022212121212121212121222121212321232121212221212121212122202121212122212122212121232121212321222121222|221202121212121232122212021212221212323212122212121212121222121212221202321202121212121202222212121222121222121212121212122222121212121212122212221222122212123212120202|121212221212121212121202121212121212121212120212121222221232223222121212121212021212121212121212220212121212120212122212121212121212121222120212121222121212121212221212|220212120212121212121212121232121212121212321222120212220222221212221212122222121212121212122232123222121212221212221212221212121222122222120212221212121222121212220212|221212121212122222121212121212123212221212121222121212120212121212121212121202121212321212122212321212121222222212121212121222123202221212121212121212122212121212221222|122212121212221212221212121212121212121212223212122212121212121212121232121212221222121212121212121212120212121212121212121222121212320202223222122222121212121222121212|020212121222123212021212121212121222121212220212120212122212121212121212122212121202021212121202021212221212220212220232121212121212021222221232121212221212122212121212|121212121202121202021212321222120212120212121212122212220202122212221212121212321212021212121212121212121222121222021212121212020212121212321222121212121222121222121212|122212121212121212121212121212121212123212121212120232222202221202121212121212121212121212222202221212121212121212121212121212123212321212120212221222121212123212021222|223202121212121212122202121222121212220212122212121222123222121202121212221202221212121212021212121212122212122232121212121212120212221212121212121212221212122212120212|021202121212122212121212221212022212021212121212121212120212021202121212221212021212121212121212120212021222121212121212120212122222121212121212121222121212121212120212|121212120212120212121212121212121212122202221212121232121212122212121212122222121212322222321212122212121212021212121212121212121222322212121212121212121212121222121212|121212222212121212121212220212121212022212121212021232221212121212121212321222121212121202121212221212121212221212121232321212122212121222021232021222021212121222121222|120212121212122212121212121212120222122212221212021212020212122212120222121212121212121212121212121212021232121212121212121212121222121212121212121222122212121222121212|021212121212121222121212222222121202121212221222123212120212120222121232123202121212122222121212021212221212123212123212121212121202021212121222121212121202121222121212|121212221212121202321212121212220212121212121212121212120202120222121212121202121212122212221222121212121212121212121212121212120222121212021212121212121212221212023212|021212321212121212221212120212121212122212120212121212121212121202122212121232121212222212121212221202122212121202120212022222121212121222121212221212121212021212121212|121212121212120212220212122212122212122212020212121222121212021222221222021212122212120212121212121212121212121212220202121212021212121212121212120202022212121212122212|222212122212121202121212121202121212121212121212021212122212022212121212321212121212221212021222122212121212221222122212322212121212121202121212120212321202121212323212|121212121212221212021212121212320232121212121212121212121212121212321212121212120202020212221202121212021212122232121202121212120212123222021212121212121212221212120212|120212122212220202020212121202222202121212121202121212122212121222121212121232221222121212122212120212223212221212121222322212121212121212121232121212121212122212121212|122212121212121202122212021212123232121202221212122212121222121212121212121212122212121202121212123212120212120212120212021212121212121222121212222212121212121222222212|121212121212121212121222021212121212123222121212121222221212121202122212121212121222120212121212120212123222021212021212122212121212021212121222121212021212120212021232|020212122212321212120212121212122212121212121212222222320202121222122212121212021222121202221212121212020212121212220222122212121212121202121212321212121212122222023222|122212121212121212121212121212220222121212121212120212121222121212121202221232121212121212121212121212321212021222121212321222122202021232121212222212121212121212121212|120222121202121212121212321212121212221202021212123212220212221212121212222212121222120202121212121222122202121212121232021222121212121212121202121212121202121212121212|121212121212022212122212220212221202121212122212121212120202121212023212121202321222121232022212121202123212121202222212122212122212222212021212320222121202121222121212|231303231313131313231323131313231313131313131313133313131313131313131313131313132303131313131303131313030313131313032313131323132303231313131313131313131333131313133313|131313130313231313131313131323131313331313130313131313131313131313231313131313131313131303132313132313031313131313131303231313133313131313131323131313131313131333131323|130313031323132313231313130313132313331323131313231313131323131323133313131313131313132333132313131313031313130313131323131323032323131313230313131313130313131313130313|131303031313131313231313330313231313231313230303131313131313132313231303131313131333131313131313131323231313131313131313131313131313032313231313131313033313331313132313|231313131313031313231313131313231323130323131303131313131323032313331303231313231313131313132313132313131313031313131313131313133313033303231313131313231313133313130313|032313131313131323130313031313231303131313131313132313131313131313130303131303131313131313131323231313132313131313131313031313031303131313031313131313030313131313232303|131313131313133323131313131313131313133313130313131313131313030313131313031313131313231313131313331313131313031313131313131313130323131313131313331313131313131313131313|031313131313131313031333132323131313131313331323131313132323132313130303131313130313131313032313130313131333132313031313130313131313330313132313031313031313130323131313|131323131323232333131313131313130313031313031313230313131313131303131303131323131313131313131313131313132313131313130313132323131323131323331313131323131333131323230313|131313131313131313131313131303131313130313031313331313031313333313131313131313132333131313130313131313231313231313031303131313132303130313231313131313130313132313131323|131333132323131313131313131313231303132313131303131313131313031313131303131313133333131313131333131313131313131313131303131323331323131303131313131313131313131313131313|131313131313130313131313133313131313131313131313131323133313130333130303131313231303131313132323131313131313031333232313031313131323131303131313031313133323131313033313|231313231323130313231313231313231313231313231323231313131313130313131323231313031313131323131313131313031303131313230323131313131303031313132313132313031313131313231313|131313032313131313131303131333031303132313231313130313131313133313333313131313130313030323031313132323131323131313130313131333031313130323131313133333131313230303131323|131303031303331313130313331333131313131323032313131313131313231303131313132313031323131313131313231313031313131303130323131323331313031313331313131313131313131313131313|131323131313132323131313131313131313131313131323031313132313130313031313131323131323331313131313131313131313230303131313130313331313132313130303130313131323131313130313|131313131313031323131303131313132323131313131313131313132313131313131313031313131313131313331323131313131303131323131303030333231313131313131313131313131323131313131313|131313131313131313131323131313132323131313131313130313330313331313131313031303131313131323231333031303133313233313331313131333232313231313132313232313330313131313131313|131323031313131313131323231313031313131303131303131313131313130333131313331313131313131323031313031313131313132313131313132323132303131313131313131313131333231313231313|031313131313131313131313131313131333131333131313131333131313130313131303131323032313030313230303232323131313031313331313031333231323130333131303132303130313133313131313|133313131313131323131313031313131313331303130313133303231313130313131313331303131313331313131313231303131323032313032313131313131313231313131313131313131313131333131313|032313230313131313332313131313131313331313233313131313331313131313131313132303331313131313132313231313131313130313031303131313130313131333130313231303131313031313131323|131303231313131313131313131323131313331313231313132313032313131313131313131313131313332313132313131323132313231313131313131313131323231313133323131313133313131323131303|130313132313131313131323031313131313132303131333130313131323031313131313131313230323131313132313133313031313131313133313131313132313131313131313131313131313131313131313|031323131313331303131313231313331313331313131313331313131313131313131323130303230313031313131313131313031323231313031313031323031313130313131313133323131313131313131323|231313131323131313131313130313131313031313130313131303131313131313132313131303131323131313131313231313231313131313131313133313131313131313131313132313131313132333131313|232313232313130303131313132323032323031313131313131333131313131303333313231313131313131313231313331303031313131313132323130313131313131303131333231333131313131313132313|130323131313131303132313232323131313131323131333131313232313131313131313131313130323131313131313131333130313030313131313230313231313231313132313130313232313131313131303|"
            },
            "factions": [
                {
                    "id": "57737c06bbf33134287d6e95",
                    "color": "#FF87B7",
                    "units": [
                        {
                            "id": "57737c06bbf33134287d6e96",
                            "unitType": "Base",
                            "health": 16,
                            "x": 33,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6e97",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 46,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6e98",
                            "unitType": "Base",
                            "health": 16,
                            "x": 17,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6e99",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 41,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6e9a",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 37,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6e9b",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 51,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6e9c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 24,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6e9d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6e9e",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 78,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6e9f",
                            "unitType": "Base",
                            "health": 16,
                            "x": 73,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6ea0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 32,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6ea1",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 81,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6ea2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 27,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6ea3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 31,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6ea4",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 37,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6ea5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 18
                        },
                        {
                            "id": "57737c06bbf33134287d6ea6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 31,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6ea7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 11,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6ea8",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 46,
                            "y": 2
                        },
                        {
                            "id": "57737c06bbf33134287d6ea9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6eaa",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 3,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6eab",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 3,
                            "y": 3
                        },
                        {
                            "id": "57737c06bbf33134287d6eac",
                            "unitType": "Base",
                            "health": 16,
                            "x": 65,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6ead",
                            "unitType": "Base",
                            "health": 16,
                            "x": 24,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6eae",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 27,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6eaf",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 42,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6eb0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 58,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6eb1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 54,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6eb2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6eb3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 36,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6eb4",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 19,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6eb5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6eb6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 20,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6eb7",
                            "unitType": "Base",
                            "health": 16,
                            "x": 7,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6eb8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 31,
                            "y": 2
                        },
                        {
                            "id": "57737c06bbf33134287d6eb9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 55,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6eba",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 78,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6ebb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 11,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6ebc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6ebd",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 22,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6ebe",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 73,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6ebf",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6ec0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6ec1",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 22,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6ec2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 19,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6ec3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 34,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6ec4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 57,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6ec5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 67,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6ec6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 2
                        },
                        {
                            "id": "57737c06bbf33134287d6ec7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 75,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6ec8",
                            "unitType": "Base",
                            "health": 16,
                            "x": 49,
                            "y": 27
                        },
                        {
                            "id": "57737c06bbf33134287d6ec9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 2,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6eca",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 3
                        },
                        {
                            "id": "57737c06bbf33134287d6ecb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 19,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6ecc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 18
                        },
                        {
                            "id": "57737c06bbf33134287d6ecd",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 64,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6ece",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 54,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6ecf",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 33,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6ed0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6ed1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 56,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6ed2",
                            "unitType": "Base",
                            "health": 16,
                            "x": 29,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6ed3",
                            "unitType": "Base",
                            "health": 16,
                            "x": 52,
                            "y": 19
                        },
                        {
                            "id": "57737c06bbf33134287d6ed4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 71,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6ed5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6ed6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 34,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6ed7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 11,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6ed8",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 51,
                            "y": 18
                        },
                        {
                            "id": "57737c06bbf33134287d6ed9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 75,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6eda",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 70,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6edb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 34,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6edc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6edd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 5,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6ede",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 33,
                            "y": 3
                        },
                        {
                            "id": "57737c06bbf33134287d6edf",
                            "unitType": "Base",
                            "health": 16,
                            "x": 39,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6ee0",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 49,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6ee1",
                            "unitType": "Base",
                            "health": 16,
                            "x": 12,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6ee2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6ee3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 15,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6ee4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 17,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6ee5",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 42,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6ee6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 50,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6ee7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 64,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6ee8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6ee9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 78,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6eea",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 61,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6eeb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6eec",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 16,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6eed",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 26,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6eee",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6eef",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 18,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6ef0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 45,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6ef1",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6ef2",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 6,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6ef3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 42,
                            "y": 15
                        },
                        {
                            "id": "57737c06bbf33134287d6ef4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 11,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6ef5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 22,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6ef6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 2,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6ef7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 58,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6ef8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 8,
                            "y": 27
                        },
                        {
                            "id": "57737c06bbf33134287d6ef9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 64,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6efa",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 64,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6efb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 32,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6efc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 70,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6efd",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 82,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6efe",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 36,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6eff",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 16,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6f00",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 14,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6f01",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 68,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6f02",
                            "unitType": "Base",
                            "health": 16,
                            "x": 40,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6f03",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 38,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f04",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f05",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 15,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6f06",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 51,
                            "y": 19
                        },
                        {
                            "id": "57737c06bbf33134287d6f07",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6f08",
                            "unitType": "Base",
                            "health": 16,
                            "x": 43,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6f09",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 2
                        },
                        {
                            "id": "57737c06bbf33134287d6f0a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 15
                        },
                        {
                            "id": "57737c06bbf33134287d6f0b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6f0c",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 62,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f0d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 77,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6f0e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 81,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6f0f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 57,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6f10",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 14,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6f11",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6f12",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 66,
                            "y": 15
                        },
                        {
                            "id": "57737c06bbf33134287d6f13",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 33,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6f14",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 17,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f15",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 14,
                            "y": 19
                        },
                        {
                            "id": "57737c06bbf33134287d6f16",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 15
                        },
                        {
                            "id": "57737c06bbf33134287d6f17",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6f18",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 72,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f19",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 73,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f1a",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 35,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6f1b",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 53,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6f1c",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 82,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6f1d",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 65,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6f1e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6f1f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 17,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6f20",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 60,
                            "y": 2
                        },
                        {
                            "id": "57737c06bbf33134287d6f21",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6f22",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 73,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6f23",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 64,
                            "y": 18
                        },
                        {
                            "id": "57737c06bbf33134287d6f24",
                            "unitType": "Base",
                            "health": 16,
                            "x": 81,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6f25",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f26",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 15,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6f27",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f28",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 83,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f29",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 55,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6f2a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 18
                        },
                        {
                            "id": "57737c06bbf33134287d6f2b",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 12,
                            "y": 19
                        },
                        {
                            "id": "57737c06bbf33134287d6f2c",
                            "unitType": "Base",
                            "health": 16,
                            "x": 50,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6f2d",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 6,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6f2e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 9,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6f2f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 64,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6f30",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 16,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f31",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 72,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6f32",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6f33",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 66,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6f34",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 40,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6f35",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 13,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6f36",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 65,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6f37",
                            "unitType": "Base",
                            "health": 16,
                            "x": 67,
                            "y": 3
                        },
                        {
                            "id": "57737c06bbf33134287d6f38",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6f39",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 46,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6f3a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 77,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6f3b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6f3c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 33,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6f3d",
                            "unitType": "Base",
                            "health": 16,
                            "x": 67,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6f3e",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 24,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6f3f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6f40",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 81,
                            "y": 27
                        },
                        {
                            "id": "57737c06bbf33134287d6f41",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 70,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f42",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 60,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6f43",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 40,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6f44",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 33,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6f45",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6f46",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6f47",
                            "unitType": "Base",
                            "health": 16,
                            "x": 67,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6f48",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 22,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6f49",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 24,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6f4a",
                            "unitType": "Base",
                            "health": 16,
                            "x": 45,
                            "y": 27
                        },
                        {
                            "id": "57737c06bbf33134287d6f4b",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 15,
                            "y": 15
                        },
                        {
                            "id": "57737c06bbf33134287d6f4c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 72,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6f4d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 51,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6f4e",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 69,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6f4f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 3
                        },
                        {
                            "id": "57737c06bbf33134287d6f50",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 5,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6f51",
                            "unitType": "Base",
                            "health": 16,
                            "x": 43,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6f52",
                            "unitType": "Base",
                            "health": 16,
                            "x": 16,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6f53",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 22,
                            "y": 27
                        },
                        {
                            "id": "57737c06bbf33134287d6f54",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 8,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6f55",
                            "unitType": "Base",
                            "health": 16,
                            "x": 35,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f56",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 78,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f57",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 32,
                            "y": 3
                        },
                        {
                            "id": "57737c06bbf33134287d6f58",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6f59",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 42,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6f5a",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 30,
                            "y": 25
                        },
                        {
                            "id": "57737c06bbf33134287d6f5b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 18,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6f5c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 2,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6f5d",
                            "unitType": "Base",
                            "health": 16,
                            "x": 48,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6f5e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 82,
                            "y": 3
                        },
                        {
                            "id": "57737c06bbf33134287d6f5f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 55,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6f60",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 70,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6f61",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 43,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6f62",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 7,
                            "y": 19
                        },
                        {
                            "id": "57737c06bbf33134287d6f63",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 72,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6f64",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 46,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6f65",
                            "unitType": "Base",
                            "health": 16,
                            "x": 6,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6f66",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 66,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6f67",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 28,
                            "y": 8
                        },
                        {
                            "id": "57737c06bbf33134287d6f68",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 34,
                            "y": 27
                        },
                        {
                            "id": "57737c06bbf33134287d6f69",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 57,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6f6a",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 56,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6f6b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6f6c",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 78,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6f6d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 28,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6f6e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 11,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f6f",
                            "unitType": "Base",
                            "health": 16,
                            "x": 17,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6f70",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 54,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6f71",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 18,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6f72",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 3,
                            "y": 15
                        },
                        {
                            "id": "57737c06bbf33134287d6f73",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 42,
                            "y": 7
                        },
                        {
                            "id": "57737c06bbf33134287d6f74",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 82,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6f75",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6f76",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 18,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6f77",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 53,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6f78",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 22,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6f79",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6f7a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6f7b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 19,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6f7c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6f7d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6f7e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 74,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6f7f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 2
                        },
                        {
                            "id": "57737c06bbf33134287d6f80",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 22
                        },
                        {
                            "id": "57737c06bbf33134287d6f81",
                            "unitType": "Base",
                            "health": 16,
                            "x": 31,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6f82",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 57,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6f83",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 81,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6f84",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 27,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6f85",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 5,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6f86",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 37,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6f87",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 32,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6f88",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 78,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6f89",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 16,
                            "y": 19
                        },
                        {
                            "id": "57737c06bbf33134287d6f8a",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 9,
                            "y": 18
                        },
                        {
                            "id": "57737c06bbf33134287d6f8b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6f8c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 65,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6f8d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 67,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f8e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 31,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6f8f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f90",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 69,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f91",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6f92",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 80,
                            "y": 16
                        },
                        {
                            "id": "57737c06bbf33134287d6f93",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 71,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6f94",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 38,
                            "y": 18
                        },
                        {
                            "id": "57737c06bbf33134287d6f95",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 64,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f96",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 21,
                            "y": 19
                        },
                        {
                            "id": "57737c06bbf33134287d6f97",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 79,
                            "y": 27
                        },
                        {
                            "id": "57737c06bbf33134287d6f98",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 19,
                            "y": 20
                        },
                        {
                            "id": "57737c06bbf33134287d6f99",
                            "unitType": "Base",
                            "health": 16,
                            "x": 57,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6f9a",
                            "unitType": "Base",
                            "health": 16,
                            "x": 66,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6f9b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 8,
                            "y": 15
                        },
                        {
                            "id": "57737c06bbf33134287d6f9c",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 52,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6f9d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 51,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6f9e",
                            "unitType": "Base",
                            "health": 16,
                            "x": 37,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6f9f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 76,
                            "y": 2
                        },
                        {
                            "id": "57737c06bbf33134287d6fa0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 37,
                            "y": 12
                        },
                        {
                            "id": "57737c06bbf33134287d6fa1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 2,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6fa2",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 50,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6fa3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6fa4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 48,
                            "y": 23
                        },
                        {
                            "id": "57737c06bbf33134287d6fa5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 34,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6fa6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 24,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6fa7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 76,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6fa8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 53,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6fa9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 4,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6faa",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 33,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6fab",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 6
                        },
                        {
                            "id": "57737c06bbf33134287d6fac",
                            "unitType": "Base",
                            "health": 16,
                            "x": 14,
                            "y": 21
                        },
                        {
                            "id": "57737c06bbf33134287d6fad",
                            "unitType": "Base",
                            "health": 16,
                            "x": 42,
                            "y": 13
                        },
                        {
                            "id": "57737c06bbf33134287d6fae",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 61,
                            "y": 9
                        },
                        {
                            "id": "57737c06bbf33134287d6faf",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 45,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6fb0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 0
                        },
                        {
                            "id": "57737c06bbf33134287d6fb1",
                            "unitType": "Base",
                            "health": 16,
                            "x": 68,
                            "y": 17
                        },
                        {
                            "id": "57737c06bbf33134287d6fb2",
                            "unitType": "Base",
                            "health": 16,
                            "x": 31,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6fb3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 54,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6fb4",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 20,
                            "y": 5
                        },
                        {
                            "id": "57737c06bbf33134287d6fb5",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 82,
                            "y": 4
                        },
                        {
                            "id": "57737c06bbf33134287d6fb6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 50,
                            "y": 11
                        },
                        {
                            "id": "57737c06bbf33134287d6fb7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 51,
                            "y": 15
                        },
                        {
                            "id": "57737c06bbf33134287d6fb8",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 57,
                            "y": 3
                        },
                        {
                            "id": "57737c06bbf33134287d6fb9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 59,
                            "y": 26
                        },
                        {
                            "id": "57737c06bbf33134287d6fba",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 17,
                            "y": 1
                        },
                        {
                            "id": "57737c06bbf33134287d6fbb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 16,
                            "y": 24
                        },
                        {
                            "id": "57737c06bbf33134287d6fbc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 19
                        },
                        {
                            "id": "57737c06bbf33134287d6fbd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 43,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6fbe",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 71,
                            "y": 14
                        },
                        {
                            "id": "57737c06bbf33134287d6fbf",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 10
                        },
                        {
                            "id": "57737c06bbf33134287d6fc0",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 36,
                            "y": 2
                        },
                        {
                            "id": "57737c06bbf33134287d6fc1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 32,
                            "y": 7
                        }
                    ]
                },
                {
                    "id": "57737c06bbf33134287d6fc2",
                    "color": "#C4E283",
                    "units": [
                        {
                            "id": "57737c06bbf33134287d6fc3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 19,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d6fc4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 58,
                            "y": 47
                        },
                        {
                            "id": "57737c06bbf33134287d6fc5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 41,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d6fc6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d6fc7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 45,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d6fc8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 74,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d6fc9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 19,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d6fca",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 61,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d6fcb",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 19,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d6fcc",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 28,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d6fcd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 32,
                            "y": 41
                        },
                        {
                            "id": "57737c06bbf33134287d6fce",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 50,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d6fcf",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 29,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d6fd0",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 8,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d6fd1",
                            "unitType": "Base",
                            "health": 16,
                            "x": 78,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d6fd2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 15,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d6fd3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 63,
                            "y": 43
                        },
                        {
                            "id": "57737c06bbf33134287d6fd4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 7,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d6fd5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 41
                        },
                        {
                            "id": "57737c06bbf33134287d6fd6",
                            "unitType": "Base",
                            "health": 16,
                            "x": 59,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d6fd7",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 47,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d6fd8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d6fd9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 82,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d6fda",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 43
                        },
                        {
                            "id": "57737c06bbf33134287d6fdb",
                            "unitType": "Base",
                            "health": 16,
                            "x": 74,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d6fdc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 9,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d6fdd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 37,
                            "y": 29
                        },
                        {
                            "id": "57737c06bbf33134287d6fde",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 6,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d6fdf",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 14,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d6fe0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d6fe1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 72,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d6fe2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 79,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d6fe3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 71,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d6fe4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d6fe5",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 8,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d6fe6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d6fe7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 42,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d6fe8",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 37,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d6fe9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 56,
                            "y": 41
                        },
                        {
                            "id": "57737c06bbf33134287d6fea",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 4,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d6feb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 42,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d6fec",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 71,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d6fed",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 44,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d6fee",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 74,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d6fef",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d6ff0",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 45,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d6ff1",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 5,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d6ff2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 26,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d6ff3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 83,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d6ff4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d6ff5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d6ff6",
                            "unitType": "Base",
                            "health": 16,
                            "x": 67,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d6ff7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d6ff8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 9,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d6ff9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d6ffa",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d6ffb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d6ffc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 36,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d6ffd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 20,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d6ffe",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 1,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d6fff",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 55,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d7000",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 38,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d7001",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d7002",
                            "unitType": "Base",
                            "health": 16,
                            "x": 60,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d7003",
                            "unitType": "Base",
                            "health": 16,
                            "x": 7,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7004",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 16,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7005",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 26,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d7006",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d7007",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 68,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d7008",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 54,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d7009",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 33,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d700a",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 20,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d700b",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 63,
                            "y": 53
                        },
                        {
                            "id": "57737c06bbf33134287d700c",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 46,
                            "y": 53
                        },
                        {
                            "id": "57737c06bbf33134287d700d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d700e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d700f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d7010",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 8,
                            "y": 47
                        },
                        {
                            "id": "57737c06bbf33134287d7011",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 10,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d7012",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 20,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d7013",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 82,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d7014",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 24,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d7015",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 27,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7016",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 4,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d7017",
                            "unitType": "Base",
                            "health": 16,
                            "x": 0,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d7018",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 9,
                            "y": 28
                        },
                        {
                            "id": "57737c06bbf33134287d7019",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 24,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d701a",
                            "unitType": "Base",
                            "health": 16,
                            "x": 13,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d701b",
                            "unitType": "Base",
                            "health": 16,
                            "x": 53,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d701c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 28,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d701d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 65,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d701e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 50,
                            "y": 43
                        },
                        {
                            "id": "57737c06bbf33134287d701f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 56,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7020",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 15,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d7021",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 14,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d7022",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 10,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d7023",
                            "unitType": "Base",
                            "health": 16,
                            "x": 78,
                            "y": 28
                        },
                        {
                            "id": "57737c06bbf33134287d7024",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d7025",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 18,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7026",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 53,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d7027",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 70,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d7028",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 10,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d7029",
                            "unitType": "Base",
                            "health": 16,
                            "x": 56,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d702a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d702b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 4,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d702c",
                            "unitType": "Base",
                            "health": 16,
                            "x": 7,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d702d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 16,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d702e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 9,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d702f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 46,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d7030",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 28
                        },
                        {
                            "id": "57737c06bbf33134287d7031",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 16,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d7032",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 61,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d7033",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 82,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d7034",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 57,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d7035",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 47,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d7036",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 72,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7037",
                            "unitType": "Base",
                            "health": 16,
                            "x": 69,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d7038",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 11,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7039",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d703a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 70,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d703b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 2,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d703c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 34,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d703d",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 62,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d703e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 79,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d703f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 5,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d7040",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 42,
                            "y": 43
                        },
                        {
                            "id": "57737c06bbf33134287d7041",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 27,
                            "y": 47
                        },
                        {
                            "id": "57737c06bbf33134287d7042",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 38,
                            "y": 53
                        },
                        {
                            "id": "57737c06bbf33134287d7043",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 11,
                            "y": 29
                        },
                        {
                            "id": "57737c06bbf33134287d7044",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 71,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d7045",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d7046",
                            "unitType": "Base",
                            "health": 16,
                            "x": 13,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d7047",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 71,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d7048",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 24,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d7049",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 43,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d704a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 38,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d704b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 76,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d704c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d704d",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 62,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d704e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 17,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d704f",
                            "unitType": "Base",
                            "health": 16,
                            "x": 19,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d7050",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 11,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d7051",
                            "unitType": "Base",
                            "health": 16,
                            "x": 39,
                            "y": 53
                        },
                        {
                            "id": "57737c06bbf33134287d7052",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 23,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d7053",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 73,
                            "y": 29
                        },
                        {
                            "id": "57737c06bbf33134287d7054",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d7055",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 47
                        },
                        {
                            "id": "57737c06bbf33134287d7056",
                            "unitType": "Base",
                            "health": 16,
                            "x": 20,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d7057",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 15,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d7058",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 23,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d7059",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 65,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d705a",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 40,
                            "y": 29
                        },
                        {
                            "id": "57737c06bbf33134287d705b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 26,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d705c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 10,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d705d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 41,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d705e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 59,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d705f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 53,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d7060",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 53
                        },
                        {
                            "id": "57737c06bbf33134287d7061",
                            "unitType": "Base",
                            "health": 16,
                            "x": 79,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d7062",
                            "unitType": "Base",
                            "health": 16,
                            "x": 11,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d7063",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 41,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d7064",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 41
                        },
                        {
                            "id": "57737c06bbf33134287d7065",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 82,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d7066",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 48,
                            "y": 43
                        },
                        {
                            "id": "57737c06bbf33134287d7067",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 58,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d7068",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 26,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d7069",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 76,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d706a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d706b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d706c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 15,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d706d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d706e",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 62,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d706f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 18,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d7070",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d7071",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 78,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7072",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 8,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d7073",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 42,
                            "y": 41
                        },
                        {
                            "id": "57737c06bbf33134287d7074",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 10,
                            "y": 28
                        },
                        {
                            "id": "57737c06bbf33134287d7075",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 25,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d7076",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 14,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7077",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 13,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d7078",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 75,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d7079",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 14,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d707a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 78,
                            "y": 47
                        },
                        {
                            "id": "57737c06bbf33134287d707b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 60,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d707c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 31,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d707d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 71,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d707e",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 58,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d707f",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 37,
                            "y": 53
                        },
                        {
                            "id": "57737c06bbf33134287d7080",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 3,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d7081",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 58,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d7082",
                            "unitType": "Base",
                            "health": 16,
                            "x": 58,
                            "y": 28
                        },
                        {
                            "id": "57737c06bbf33134287d7083",
                            "unitType": "Base",
                            "health": 16,
                            "x": 81,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d7084",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 24,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d7085",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 36,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d7086",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 76,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d7087",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 64,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d7088",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d7089",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d708a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 43
                        },
                        {
                            "id": "57737c06bbf33134287d708b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d708c",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 9,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d708d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 41,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d708e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 41
                        },
                        {
                            "id": "57737c06bbf33134287d708f",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 15,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d7090",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 66,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d7091",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 68,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d7092",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 64,
                            "y": 43
                        },
                        {
                            "id": "57737c06bbf33134287d7093",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 50,
                            "y": 47
                        },
                        {
                            "id": "57737c06bbf33134287d7094",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 77,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d7095",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 54,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d7096",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 82,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d7097",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 73,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d7098",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 18,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d7099",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 74,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d709a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 38,
                            "y": 41
                        },
                        {
                            "id": "57737c06bbf33134287d709b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 70,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d709c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 2,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d709d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 79,
                            "y": 28
                        },
                        {
                            "id": "57737c06bbf33134287d709e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 37,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d709f",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 9,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d70a0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 65,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d70a1",
                            "unitType": "Base",
                            "health": 16,
                            "x": 23,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d70a2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 2,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d70a3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 8,
                            "y": 54
                        },
                        {
                            "id": "57737c06bbf33134287d70a4",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 10,
                            "y": 29
                        },
                        {
                            "id": "57737c06bbf33134287d70a5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 18,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d70a6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 77,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d70a7",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 0,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d70a8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 40,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d70a9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 10,
                            "y": 45
                        },
                        {
                            "id": "57737c06bbf33134287d70aa",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 55,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d70ab",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d70ac",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 58,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d70ad",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 54,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d70ae",
                            "unitType": "Base",
                            "health": 16,
                            "x": 31,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d70af",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d70b0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d70b1",
                            "unitType": "Base",
                            "health": 16,
                            "x": 42,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d70b2",
                            "unitType": "Base",
                            "health": 16,
                            "x": 33,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d70b3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 16,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d70b4",
                            "unitType": "Base",
                            "health": 16,
                            "x": 42,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d70b5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 11,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d70b6",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 67,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d70b7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 7,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d70b8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 72,
                            "y": 47
                        },
                        {
                            "id": "57737c06bbf33134287d70b9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 82,
                            "y": 28
                        },
                        {
                            "id": "57737c06bbf33134287d70ba",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 26,
                            "y": 28
                        },
                        {
                            "id": "57737c06bbf33134287d70bb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d70bc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d70bd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 22,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d70be",
                            "unitType": "Base",
                            "health": 16,
                            "x": 24,
                            "y": 47
                        },
                        {
                            "id": "57737c06bbf33134287d70bf",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 42,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d70c0",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 73,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d70c1",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 61,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d70c2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 4,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d70c3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d70c4",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 28,
                            "y": 39
                        },
                        {
                            "id": "57737c06bbf33134287d70c5",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 39,
                            "y": 52
                        },
                        {
                            "id": "57737c06bbf33134287d70c6",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 26,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d70c7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 9,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d70c8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 55,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d70c9",
                            "unitType": "Base",
                            "health": 16,
                            "x": 47,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d70ca",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 43,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d70cb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 82,
                            "y": 31
                        },
                        {
                            "id": "57737c06bbf33134287d70cc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 80,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d70cd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d70ce",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 16,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d70cf",
                            "unitType": "Base",
                            "health": 16,
                            "x": 31,
                            "y": 53
                        },
                        {
                            "id": "57737c06bbf33134287d70d0",
                            "unitType": "Base",
                            "health": 16,
                            "x": 18,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d70d1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 75,
                            "y": 33
                        },
                        {
                            "id": "57737c06bbf33134287d70d2",
                            "unitType": "Base",
                            "health": 16,
                            "x": 7,
                            "y": 49
                        },
                        {
                            "id": "57737c06bbf33134287d70d3",
                            "unitType": "Base",
                            "health": 16,
                            "x": 16,
                            "y": 30
                        },
                        {
                            "id": "57737c06bbf33134287d70d4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 14,
                            "y": 41
                        },
                        {
                            "id": "57737c06bbf33134287d70d5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 50,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d70d6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 33,
                            "y": 38
                        },
                        {
                            "id": "57737c06bbf33134287d70d7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 51,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d70d8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 35
                        },
                        {
                            "id": "57737c06bbf33134287d70d9",
                            "unitType": "Base",
                            "health": 16,
                            "x": 23,
                            "y": 44
                        },
                        {
                            "id": "57737c06bbf33134287d70da",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 28,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d70db",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 51,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d70dc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 75,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d70dd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 64,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d70de",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 20,
                            "y": 42
                        },
                        {
                            "id": "57737c06bbf33134287d70df",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 55
                        },
                        {
                            "id": "57737c06bbf33134287d70e0",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 82,
                            "y": 43
                        },
                        {
                            "id": "57737c06bbf33134287d70e1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 51,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d70e2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 37,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d70e3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 51
                        },
                        {
                            "id": "57737c06bbf33134287d70e4",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 80,
                            "y": 50
                        },
                        {
                            "id": "57737c06bbf33134287d70e5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d70e6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 73,
                            "y": 34
                        },
                        {
                            "id": "57737c06bbf33134287d70e7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 5,
                            "y": 40
                        },
                        {
                            "id": "57737c06bbf33134287d70e8",
                            "unitType": "Base",
                            "health": 16,
                            "x": 34,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d70e9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 8,
                            "y": 46
                        },
                        {
                            "id": "57737c06bbf33134287d70ea",
                            "unitType": "Base",
                            "health": 16,
                            "x": 1,
                            "y": 37
                        },
                        {
                            "id": "57737c06bbf33134287d70eb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 36
                        },
                        {
                            "id": "57737c06bbf33134287d70ec",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 28,
                            "y": 48
                        },
                        {
                            "id": "57737c06bbf33134287d70ed",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 20,
                            "y": 32
                        },
                        {
                            "id": "57737c06bbf33134287d70ee",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 70,
                            "y": 30
                        }
                    ]
                },
                {
                    "id": "57737c06bbf33134287d70ef",
                    "color": "#9985E5",
                    "units": [
                        {
                            "id": "57737c06bbf33134287d70f0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 37,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d70f1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 73,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d70f2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d70f3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 42,
                            "y": 81
                        },
                        {
                            "id": "57737c06bbf33134287d70f4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d70f5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 57,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d70f6",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 43,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d70f7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 48,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d70f8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d70f9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d70fa",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d70fb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 83
                        },
                        {
                            "id": "57737c06bbf33134287d70fc",
                            "unitType": "Base",
                            "health": 16,
                            "x": 7,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d70fd",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 51,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d70fe",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 36,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d70ff",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 77,
                            "y": 72
                        },
                        {
                            "id": "57737c06bbf33134287d7100",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 8,
                            "y": 71
                        },
                        {
                            "id": "57737c06bbf33134287d7101",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 17,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d7102",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 82,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d7103",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 18,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d7104",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 78,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d7105",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 58,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d7106",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 61,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d7107",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 53,
                            "y": 72
                        },
                        {
                            "id": "57737c06bbf33134287d7108",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 7,
                            "y": 81
                        },
                        {
                            "id": "57737c06bbf33134287d7109",
                            "unitType": "Base",
                            "health": 16,
                            "x": 76,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d710a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 9,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d710b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 74,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d710c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 19,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d710d",
                            "unitType": "Base",
                            "health": 16,
                            "x": 10,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d710e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 40,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d710f",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 24,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d7110",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d7111",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 58,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d7112",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 26,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d7113",
                            "unitType": "Base",
                            "health": 16,
                            "x": 57,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d7114",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d7115",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 13,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d7116",
                            "unitType": "Base",
                            "health": 16,
                            "x": 3,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d7117",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d7118",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 66,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d7119",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 9,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d711a",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 30,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d711b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 70,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d711c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d711d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 82,
                            "y": 71
                        },
                        {
                            "id": "57737c06bbf33134287d711e",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 80,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d711f",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 30,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d7120",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 63,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d7121",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 53,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d7122",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 22,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d7123",
                            "unitType": "Base",
                            "health": 16,
                            "x": 16,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d7124",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 27,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d7125",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 38,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d7126",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d7127",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 4,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d7128",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 76,
                            "y": 81
                        },
                        {
                            "id": "57737c06bbf33134287d7129",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d712a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d712b",
                            "unitType": "Base",
                            "health": 16,
                            "x": 46,
                            "y": 71
                        },
                        {
                            "id": "57737c06bbf33134287d712c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d712d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 59,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d712e",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 51,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d712f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 72,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d7130",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 24,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d7131",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 4,
                            "y": 72
                        },
                        {
                            "id": "57737c06bbf33134287d7132",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d7133",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 9,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d7134",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 43,
                            "y": 72
                        },
                        {
                            "id": "57737c06bbf33134287d7135",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 70,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d7136",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 22,
                            "y": 77
                        },
                        {
                            "id": "57737c06bbf33134287d7137",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 50,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d7138",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 15,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d7139",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 77,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d713a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 57,
                            "y": 71
                        },
                        {
                            "id": "57737c06bbf33134287d713b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d713c",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 21,
                            "y": 81
                        },
                        {
                            "id": "57737c06bbf33134287d713d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 30,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d713e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 20,
                            "y": 77
                        },
                        {
                            "id": "57737c06bbf33134287d713f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 77,
                            "y": 82
                        },
                        {
                            "id": "57737c06bbf33134287d7140",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 75,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d7141",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 37,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d7142",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 5,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d7143",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 45,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d7144",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d7145",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 74
                        },
                        {
                            "id": "57737c06bbf33134287d7146",
                            "unitType": "Base",
                            "health": 16,
                            "x": 49,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d7147",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 65,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d7148",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 32,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d7149",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 72
                        },
                        {
                            "id": "57737c06bbf33134287d714a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 71,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d714b",
                            "unitType": "Base",
                            "health": 16,
                            "x": 56,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d714c",
                            "unitType": "Base",
                            "health": 16,
                            "x": 38,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d714d",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 27,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d714e",
                            "unitType": "Base",
                            "health": 16,
                            "x": 68,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d714f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d7150",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 80,
                            "y": 74
                        },
                        {
                            "id": "57737c06bbf33134287d7151",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 77
                        },
                        {
                            "id": "57737c06bbf33134287d7152",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 68,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d7153",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 40,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d7154",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 22,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d7155",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 52,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d7156",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 67,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d7157",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 37,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d7158",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d7159",
                            "unitType": "Base",
                            "health": 16,
                            "x": 43,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d715a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 66,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d715b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 76,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d715c",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 77,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d715d",
                            "unitType": "Base",
                            "health": 16,
                            "x": 7,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d715e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d715f",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 46,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d7160",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 1,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d7161",
                            "unitType": "Base",
                            "health": 16,
                            "x": 45,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d7162",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 74,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d7163",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 61,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d7164",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 77,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d7165",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 66,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d7166",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 15,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d7167",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 68,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d7168",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 77,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d7169",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d716a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 26,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d716b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 21,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d716c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 28,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d716d",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 72,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d716e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 78,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d716f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 27,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d7170",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d7171",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 80,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d7172",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 32,
                            "y": 81
                        },
                        {
                            "id": "57737c06bbf33134287d7173",
                            "unitType": "Base",
                            "health": 16,
                            "x": 56,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d7174",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 50,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d7175",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d7176",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 43,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d7177",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 6,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d7178",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d7179",
                            "unitType": "Base",
                            "health": 16,
                            "x": 82,
                            "y": 77
                        },
                        {
                            "id": "57737c06bbf33134287d717a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 82
                        },
                        {
                            "id": "57737c06bbf33134287d717b",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 39,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d717c",
                            "unitType": "Base",
                            "health": 16,
                            "x": 39,
                            "y": 71
                        },
                        {
                            "id": "57737c06bbf33134287d717d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 17,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d717e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 40,
                            "y": 74
                        },
                        {
                            "id": "57737c06bbf33134287d717f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 0,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d7180",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 63,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d7181",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d7182",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 28,
                            "y": 83
                        },
                        {
                            "id": "57737c06bbf33134287d7183",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 51,
                            "y": 74
                        },
                        {
                            "id": "57737c06bbf33134287d7184",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 13,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d7185",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 75,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d7186",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 6,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d7187",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 37,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d7188",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d7189",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 36,
                            "y": 72
                        },
                        {
                            "id": "57737c06bbf33134287d718a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 24,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d718b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 14,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d718c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 80,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d718d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 53,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d718e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 54,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d718f",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 38,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d7190",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 48,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d7191",
                            "unitType": "Base",
                            "health": 16,
                            "x": 9,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d7192",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d7193",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 41,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d7194",
                            "unitType": "Base",
                            "health": 16,
                            "x": 31,
                            "y": 83
                        },
                        {
                            "id": "57737c06bbf33134287d7195",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 30,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d7196",
                            "unitType": "Base",
                            "health": 16,
                            "x": 15,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d7197",
                            "unitType": "Base",
                            "health": 16,
                            "x": 65,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d7198",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 67,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d7199",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 43,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d719a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 26,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d719b",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 39,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d719c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 2,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d719d",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 55,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d719e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 5,
                            "y": 74
                        },
                        {
                            "id": "57737c06bbf33134287d719f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 44,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d71a0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d71a1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 66,
                            "y": 71
                        },
                        {
                            "id": "57737c06bbf33134287d71a2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 8,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d71a3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d71a4",
                            "unitType": "Base",
                            "health": 16,
                            "x": 20,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d71a5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d71a6",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 0,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d71a7",
                            "unitType": "Base",
                            "health": 16,
                            "x": 70,
                            "y": 82
                        },
                        {
                            "id": "57737c06bbf33134287d71a8",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 21,
                            "y": 77
                        },
                        {
                            "id": "57737c06bbf33134287d71a9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 10,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d71aa",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 42,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d71ab",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 77,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d71ac",
                            "unitType": "Base",
                            "health": 16,
                            "x": 30,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d71ad",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 73,
                            "y": 72
                        },
                        {
                            "id": "57737c06bbf33134287d71ae",
                            "unitType": "Base",
                            "health": 16,
                            "x": 40,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d71af",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 16,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d71b0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 58,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d71b1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 76,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d71b2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 53,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d71b3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 57,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d71b4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 80,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d71b5",
                            "unitType": "Base",
                            "health": 16,
                            "x": 11,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d71b6",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 71,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d71b7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 2,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d71b8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 11,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d71b9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 79,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d71ba",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d71bb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 50,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d71bc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 52,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d71bd",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 77,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d71be",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d71bf",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 32,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d71c0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 12,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d71c1",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 69,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d71c2",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 15,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d71c3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 10,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d71c4",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 37,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d71c5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 74,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d71c6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 2,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d71c7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 71
                        },
                        {
                            "id": "57737c06bbf33134287d71c8",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 2,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d71c9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 30,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d71ca",
                            "unitType": "Base",
                            "health": 16,
                            "x": 48,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d71cb",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 29,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d71cc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 26,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d71cd",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 38,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d71ce",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 45,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d71cf",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 61,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d71d0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 16,
                            "y": 81
                        },
                        {
                            "id": "57737c06bbf33134287d71d1",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 28,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d71d2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 23,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d71d3",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 31,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d71d4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 45,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d71d5",
                            "unitType": "Base",
                            "health": 16,
                            "x": 7,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d71d6",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 48,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d71d7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 47,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d71d8",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 64,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d71d9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 25,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d71da",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 3,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d71db",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 28,
                            "y": 82
                        },
                        {
                            "id": "57737c06bbf33134287d71dc",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 1,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d71dd",
                            "unitType": "Base",
                            "health": 16,
                            "x": 71,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d71de",
                            "unitType": "Base",
                            "health": 16,
                            "x": 29,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d71df",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 73,
                            "y": 77
                        },
                        {
                            "id": "57737c06bbf33134287d71e0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 4,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d71e1",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 13,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d71e2",
                            "unitType": "Base",
                            "health": 16,
                            "x": 70,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d71e3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 6,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d71e4",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 31,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d71e5",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 15,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d71e6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 36,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d71e7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 10,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d71e8",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 29,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d71e9",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 70
                        },
                        {
                            "id": "57737c06bbf33134287d71ea",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 24,
                            "y": 77
                        },
                        {
                            "id": "57737c06bbf33134287d71eb",
                            "unitType": "Base",
                            "health": 16,
                            "x": 74,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d71ec",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 42,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d71ed",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 79,
                            "y": 57
                        },
                        {
                            "id": "57737c06bbf33134287d71ee",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 83
                        },
                        {
                            "id": "57737c06bbf33134287d71ef",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 13,
                            "y": 74
                        },
                        {
                            "id": "57737c06bbf33134287d71f0",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 37,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d71f1",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 41,
                            "y": 74
                        },
                        {
                            "id": "57737c06bbf33134287d71f2",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 35,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d71f3",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 22,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d71f4",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 83,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d71f5",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 37,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d71f6",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 70,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d71f7",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 68,
                            "y": 58
                        },
                        {
                            "id": "57737c06bbf33134287d71f8",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 18,
                            "y": 71
                        },
                        {
                            "id": "57737c06bbf33134287d71f9",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 73,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d71fa",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 75,
                            "y": 78
                        },
                        {
                            "id": "57737c06bbf33134287d71fb",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 59,
                            "y": 68
                        },
                        {
                            "id": "57737c06bbf33134287d71fc",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 61,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d71fd",
                            "unitType": "Base",
                            "health": 16,
                            "x": 39,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d71fe",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d71ff",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 24,
                            "y": 81
                        },
                        {
                            "id": "57737c06bbf33134287d7200",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 55,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d7201",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 34,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d7202",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 11,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d7203",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 70,
                            "y": 67
                        },
                        {
                            "id": "57737c06bbf33134287d7204",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 54,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d7205",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 81,
                            "y": 65
                        },
                        {
                            "id": "57737c06bbf33134287d7206",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 6,
                            "y": 69
                        },
                        {
                            "id": "57737c06bbf33134287d7207",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 72,
                            "y": 83
                        },
                        {
                            "id": "57737c06bbf33134287d7208",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 47,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d7209",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 46,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d720a",
                            "unitType": "Base",
                            "health": 16,
                            "x": 17,
                            "y": 56
                        },
                        {
                            "id": "57737c06bbf33134287d720b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 41,
                            "y": 72
                        },
                        {
                            "id": "57737c06bbf33134287d720c",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 48,
                            "y": 64
                        },
                        {
                            "id": "57737c06bbf33134287d720d",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 62,
                            "y": 76
                        },
                        {
                            "id": "57737c06bbf33134287d720e",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 49,
                            "y": 79
                        },
                        {
                            "id": "57737c06bbf33134287d720f",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 18,
                            "y": 82
                        },
                        {
                            "id": "57737c06bbf33134287d7210",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 46,
                            "y": 61
                        },
                        {
                            "id": "57737c06bbf33134287d7211",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 32,
                            "y": 63
                        },
                        {
                            "id": "57737c06bbf33134287d7212",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 29,
                            "y": 82
                        },
                        {
                            "id": "57737c06bbf33134287d7213",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 73,
                            "y": 80
                        },
                        {
                            "id": "57737c06bbf33134287d7214",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 50,
                            "y": 73
                        },
                        {
                            "id": "57737c06bbf33134287d7215",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 65,
                            "y": 66
                        },
                        {
                            "id": "57737c06bbf33134287d7216",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 1,
                            "y": 75
                        },
                        {
                            "id": "57737c06bbf33134287d7217",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 10,
                            "y": 62
                        },
                        {
                            "id": "57737c06bbf33134287d7218",
                            "unitType": "Base",
                            "health": 16,
                            "x": 76,
                            "y": 60
                        },
                        {
                            "id": "57737c06bbf33134287d7219",
                            "unitType": "Tank",
                            "health": 6,
                            "x": 79,
                            "y": 81
                        },
                        {
                            "id": "57737c06bbf33134287d721a",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 39,
                            "y": 59
                        },
                        {
                            "id": "57737c06bbf33134287d721b",
                            "unitType": "Infantry",
                            "health": 2,
                            "x": 17,
                            "y": 83
                        }
                    ]
                }
            ],
            "generation": 0
        });
    }
    return {
        setters:[
            function (AssetManager_2_1) {
                AssetManager_2 = AssetManager_2_1;
            },
            function (HexUtils_2_1) {
                HexUtils_2 = HexUtils_2_1;
            },
            function (HexBoard_1_1) {
                HexBoard_1 = HexBoard_1_1;
            },
            function (MenuManager_1_1) {
                MenuManager_1 = MenuManager_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                }
                Main.run = function () {
                    AssetManager_2.AssetManager.instance = new AssetManager_2.AssetManager(startApp);
                    var size = { width: 80, height: 80 };
                    var base = { x: 40, y: 55 };
                    AssetManager_2.AssetManager.instance.addAsset('Infantry', 'images/tower_10.png', size, base);
                    AssetManager_2.AssetManager.instance.addAsset('Tank', 'images/tower_40.png', size, base);
                    AssetManager_2.AssetManager.instance.addAsset('Base', 'images/tower_42.png', size, base);
                    AssetManager_2.AssetManager.instance.addAsset('Icon.Move', 'images/icons/move.png', size, base);
                    AssetManager_2.AssetManager.instance.addAsset('Icon.Attack', 'images/icons/attack.png', size, base);
                    AssetManager_2.AssetManager.instance.start();
                    //        bootstrap(Layout, [HTTP_PROVIDERS]);
                };
                return Main;
            }());
            exports_14("Main", Main);
            Main.run();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2xheW91dC9kaXJlY3RpdmVzL2RyYWdnYWJsZURpcmVjdGl2ZS50cyIsIi4uL2FwcC9sYXlvdXQvd2luZG93Q29tcG9uZW50L1dpbmRvd0NvbXBvbmVudC50cyIsIi4uL2FwcC9sYXlvdXQvb2JqZWN0U2VsZWN0b3IvT2JqZWN0U2VsZWN0b3IudHMiLCIuLi9hcHAvbGF5b3V0L3NlcnZpY2VzL0xldmVsU2VydmljZS50cyIsIi4uL2FwcC9sYXlvdXQvbGV2ZWxTZWxlY3Rvci9MZXZlbFNlbGVjdG9yLnRzIiwiLi4vYXBwL2xheW91dC9MYXlvdXQudHMiLCIuLi9hcHAvaGV4TGlicmFyaWVzL0Fzc2V0TWFuYWdlci50cyIsIi4uLy4uL0NvbW1vbi9oZXhMaWJyYXJpZXMvSGV4VXRpbHMudHMiLCIuLi8uLi9Db21tb24vVXRpbHMudHMiLCIuLi8uLi9Db21tb24vaGV4TGlicmFyaWVzL0dyaWRIZXhhZ29uQ29uc3RhbnRzLnRzIiwiLi4vYXBwL2hleExpYnJhcmllcy9HcmlkSGV4YWdvbi50cyIsIi4uL2FwcC9oZXhMaWJyYXJpZXMvSGV4Qm9hcmQudHMiLCIuLi9hcHAvaGV4TGlicmFyaWVzL01lbnVNYW5hZ2VyLnRzIiwiLi4vYXBwL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUNJLDRCQUFzQixFQUFhO29CQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE1BQU0sRUFBRSx1QkFBdUIsRUFBQyxDQUFDLENBQUM7Z0JBQzVFLENBQUM7Z0JBTkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTtxQkFDMUIsQ0FBQzsrQkFFZSxDQUFDLGFBQU0sQ0FBQzs7c0NBRnZCO2dCQUtGLHlCQUFDOztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsbURB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LENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOzRCQUN0QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQ0FDNUMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDOUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQUMsUUFBUSxDQUFDO2dDQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNuRSxRQUFRLENBQUM7Z0NBQ2IsSUFBSSxHQUFHLElBQUksZUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsbUJBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29D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