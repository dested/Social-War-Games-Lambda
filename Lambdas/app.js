var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("Common/Color", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            exports_1("Color", Color);
        }
    }
});
System.register("Common/Utils", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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
            exports_2("Point", Point);
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
            exports_2("DoublePoint", DoublePoint);
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
            exports_2("IntersectingRectangle", IntersectingRectangle);
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
            exports_2("Rectangle", Rectangle);
        }
    }
});
System.register("Common/hexLibraries/GridHexagonConstants", ["Common/Utils"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
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
                GridHexagonConstants.width = 35;
                GridHexagonConstants.heightSkew = .7;
                GridHexagonConstants.depthHeightSkew = .3;
                return GridHexagonConstants;
            }());
            exports_3("GridHexagonConstants", GridHexagonConstants);
        }
    }
});
///<reference path="../Common/typings/Compress.d.ts"/>
System.register("Lambdas/getGameState", ["Common/Color"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Color_1;
    var s3, m, handler, GameBoard, GameStateData, HexBoard, GameFaction, GameUnit;
    function random(bottom, top) {
        return (Math.random() * (top - bottom) + bottom) | 0;
    }
    return {
        setters:[
            function (Color_1_1) {
                Color_1 = Color_1_1;
            }],
        execute: function() {
            s3 = new global.aws.S3({});
            m = new Color_1.Color(1, 1, 1);
            exports_4("handler", handler = function (event, context) {
                var gameBoard = new GameBoard();
                var gameState = gameBoard.initializeGameState();
                var m = new Compressor().CompressText(JSON.stringify(gameState));
                context.succeed(m);
            });
            GameBoard = (function () {
                function GameBoard() {
                }
                GameBoard.prototype.initializeGameState = function () {
                    var stateData = new GameStateData();
                    stateData.board = new HexBoard();
                    var boardStr = "";
                    stateData.board.width = 84 * 5;
                    stateData.board.height = 84 * 5;
                    noise.seed(Math.random());
                    for (var y = 0; y < stateData.board.height; y++) {
                        for (var x = 0; x < stateData.board.width; x++) {
                            var str = 0;
                            if (random(0, 100) < 10) {
                                str = 0;
                            }
                            else {
                                if (random(0, 100) < 15)
                                    str = 2;
                                else if (random(0, 100) < 6)
                                    str = 1;
                                else
                                    str = 1;
                            }
                            var value = Math.abs(noise.simplex2(x / 90, y / 90)) * 90;
                            boardStr += (value / 10 | 0).toString();
                            boardStr += ((value / 30 | 0) + 1).toString();
                        }
                        boardStr += "|";
                    }
                    stateData.board.boardStr = boardStr;
                    var boardData = boardStr.split('|').map(function (a) { return a.split('').filter(function (b, i) { return i % 2 == 1; }).map(function (b) { return parseInt(b); }); });
                    stateData.lastGeneration = new Date();
                    stateData.factions = [];
                    for (var f = 0; f < 3; f++) {
                        var gameFaction = new GameFaction();
                        gameFaction.units = [];
                        gameFaction.id = GameBoard.makeId();
                        switch (f) {
                            case 0:
                                gameFaction.color = "#FF87B7";
                                break;
                            case 1:
                                gameFaction.color = "#C4E283";
                                break;
                            case 2:
                                gameFaction.color = "#9985E5";
                                break;
                        }
                        var numOfUnits = 0;
                        var _loop_1 = function() {
                            unitType = random(0, 100);
                            var x_1 = 0;
                            var y_1 = 0;
                            while (true) {
                                x_1 = random(0, stateData.board.width);
                                y_1 = random(0, stateData.board.height);
                                if (boardData[y_1][x_1] != f + 1) {
                                    continue;
                                }
                                console.log(x_1, y_1, boardData[y_1][x_1], f + 1);
                                if (gameFaction.units.filter(function (a) { return a.x === x_1 && a.y === y_1; }).length === 0) {
                                    break;
                                }
                            }
                            if (unitType < 60) {
                                gameUnit = new GameUnit();
                                gameUnit.id = GameBoard.makeId();
                                gameUnit.health = 2;
                                gameUnit.unitType = "Infantry";
                                gameUnit.x = x_1;
                                gameUnit.y = y_1;
                            }
                            else if (unitType < 90) {
                                gameUnit = new GameUnit();
                                gameUnit.id = GameBoard.makeId();
                                gameUnit.health = 6;
                                gameUnit.unitType = "Tank";
                                gameUnit.x = x_1;
                                gameUnit.y = y_1;
                            }
                            else {
                                gameUnit = new GameUnit();
                                gameUnit.id = GameBoard.makeId();
                                gameUnit.health = 16;
                                gameUnit.unitType = "Base";
                                gameUnit.x = x_1;
                                gameUnit.y = y_1;
                            }
                            gameFaction.units.push(gameUnit);
                        };
                        var unitType, gameUnit;
                        for (var i = 0; i < numOfUnits; i++) {
                            _loop_1();
                        }
                        stateData.factions.push(gameFaction);
                    }
                    return stateData;
                };
                GameBoard.makeId = function () {
                    function gen(count) {
                        var out = "";
                        for (var i = 0; i < count; i++) {
                            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                        }
                        return out;
                    }
                    return [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
                };
                GameBoard.getUnitById = function (stateData, id) {
                    for (var _i = 0, _a = stateData.factions; _i < _a.length; _i++) {
                        var gameFaction = _a[_i];
                        for (var _b = 0, _c = gameFaction.units; _b < _c.length; _b++) {
                            var gameUnit = _c[_b];
                            if (gameUnit.id === id) {
                                return gameUnit;
                            }
                        }
                    }
                    return null;
                };
                GameBoard.getFactionByUnitId = function (stateData, unitId) {
                    for (var _i = 0, _a = stateData.factions; _i < _a.length; _i++) {
                        var gameFaction = _a[_i];
                        for (var _b = 0, _c = gameFaction.units; _b < _c.length; _b++) {
                            var gameUnit = _c[_b];
                            if (gameUnit.id === unitId) {
                                return gameFaction;
                            }
                        }
                    }
                    return null;
                };
                GameBoard.getUnitByLocation = function (stateData, x, y) {
                    for (var _i = 0, _a = stateData.factions; _i < _a.length; _i++) {
                        var gameFaction = _a[_i];
                        for (var _b = 0, _c = gameFaction.units; _b < _c.length; _b++) {
                            var gameUnit = _c[_b];
                            if (gameUnit.x === x && gameUnit.y === y) {
                                return gameUnit;
                            }
                        }
                    }
                    return null;
                };
                return GameBoard;
            }());
            exports_4("GameBoard", GameBoard);
            GameStateData = (function () {
                function GameStateData() {
                }
                return GameStateData;
            }());
            exports_4("GameStateData", GameStateData);
            HexBoard = (function () {
                function HexBoard() {
                }
                return HexBoard;
            }());
            exports_4("HexBoard", HexBoard);
            GameFaction = (function () {
                function GameFaction() {
                }
                return GameFaction;
            }());
            exports_4("GameFaction", GameFaction);
            GameUnit = (function () {
                function GameUnit() {
                }
                GameUnit.prototype.hurt = function (amount, gameState) {
                    this.health -= amount;
                    if (this.health <= 0) {
                        var faction = GameBoard.getFactionByUnitId(gameState, this.id);
                        faction.units.splice(faction.units.indexOf(this), 1);
                    }
                };
                return GameUnit;
            }());
            exports_4("GameUnit", GameUnit);
            /*
             * A speed-improved perlin and simplex noise algorithms for 2D.
             *
             * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
             * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
             * Better rank ordering method by Stefan Gustavson in 2012.
             * Converted to Javascript by Joseph Gentle.
             *
             * Version 2012-03-09
             *
             * This code was placed in the public domain by its original author,
             * Stefan Gustavson. You may use it as you see fit, but
             * attribution is appreciated.
             *
             */
            (function (global) {
                var module = global.noise = {};
                function Grad(x, y, z) {
                    this.x = x;
                    this.y = y;
                    this.z = z;
                }
                Grad.prototype.dot2 = function (x, y) {
                    return this.x * x + this.y * y;
                };
                Grad.prototype.dot3 = function (x, y, z) {
                    return this.x * x + this.y * y + this.z * z;
                };
                var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
                    new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
                    new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
                var p = [151, 160, 137, 91, 90, 15,
                    131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
                    190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
                    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
                    77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
                    102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
                    135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
                    5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
                    223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
                    129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
                    251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
                    49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
                    138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
                // To remove the need for index wrapping, double the permutation table length
                var perm = new Array(512);
                var gradP = new Array(512);
                // This isn't a very good seeding function, but it works ok. It supports 2^16
                // different seed values. Write something better if you need more seeds.
                module.seed = function (seed) {
                    if (seed > 0 && seed < 1) {
                        // Scale the seed out
                        seed *= 65536;
                    }
                    seed = Math.floor(seed);
                    if (seed < 256) {
                        seed |= seed << 8;
                    }
                    for (var i = 0; i < 256; i++) {
                        var v;
                        if (i & 1) {
                            v = p[i] ^ (seed & 255);
                        }
                        else {
                            v = p[i] ^ ((seed >> 8) & 255);
                        }
                        perm[i] = perm[i + 256] = v;
                        gradP[i] = gradP[i + 256] = grad3[v % 12];
                    }
                };
                module.seed(0);
                /*
                 for(var i=0; i<256; i++) {
                 perm[i] = perm[i + 256] = p[i];
                 gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
                 }*/
                // Skewing and unskewing factors for 2, 3, and 4 dimensions
                var F2 = 0.5 * (Math.sqrt(3) - 1);
                var G2 = (3 - Math.sqrt(3)) / 6;
                var F3 = 1 / 3;
                var G3 = 1 / 6;
                // 2D simplex noise
                module.simplex2 = function (xin, yin) {
                    var n0, n1, n2; // Noise contributions from the three corners
                    // Skew the input space to determine which simplex cell we're in
                    var s = (xin + yin) * F2; // Hairy factor for 2D
                    var i = Math.floor(xin + s);
                    var j = Math.floor(yin + s);
                    var t = (i + j) * G2;
                    var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
                    var y0 = yin - j + t;
                    // For the 2D case, the simplex shape is an equilateral triangle.
                    // Determine which simplex we are in.
                    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
                    if (x0 > y0) {
                        i1 = 1;
                        j1 = 0;
                    }
                    else {
                        i1 = 0;
                        j1 = 1;
                    }
                    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
                    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
                    // c = (3-sqrt(3))/6
                    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
                    var y1 = y0 - j1 + G2;
                    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
                    var y2 = y0 - 1 + 2 * G2;
                    // Work out the hashed gradient indices of the three simplex corners
                    i &= 255;
                    j &= 255;
                    var gi0 = gradP[i + perm[j]];
                    var gi1 = gradP[i + i1 + perm[j + j1]];
                    var gi2 = gradP[i + 1 + perm[j + 1]];
                    // Calculate the contribution from the three corners
                    var t0 = 0.5 - x0 * x0 - y0 * y0;
                    if (t0 < 0) {
                        n0 = 0;
                    }
                    else {
                        t0 *= t0;
                        n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
                    }
                    var t1 = 0.5 - x1 * x1 - y1 * y1;
                    if (t1 < 0) {
                        n1 = 0;
                    }
                    else {
                        t1 *= t1;
                        n1 = t1 * t1 * gi1.dot2(x1, y1);
                    }
                    var t2 = 0.5 - x2 * x2 - y2 * y2;
                    if (t2 < 0) {
                        n2 = 0;
                    }
                    else {
                        t2 *= t2;
                        n2 = t2 * t2 * gi2.dot2(x2, y2);
                    }
                    // Add contributions from each corner to get the final noise value.
                    // The result is scaled to return values in the interval [-1,1].
                    return 70 * (n0 + n1 + n2);
                };
                // 3D simplex noise
                module.simplex3 = function (xin, yin, zin) {
                    var n0, n1, n2, n3; // Noise contributions from the four corners
                    // Skew the input space to determine which simplex cell we're in
                    var s = (xin + yin + zin) * F3; // Hairy factor for 2D
                    var i = Math.floor(xin + s);
                    var j = Math.floor(yin + s);
                    var k = Math.floor(zin + s);
                    var t = (i + j + k) * G3;
                    var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
                    var y0 = yin - j + t;
                    var z0 = zin - k + t;
                    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
                    // Determine which simplex we are in.
                    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
                    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
                    if (x0 >= y0) {
                        if (y0 >= z0) {
                            i1 = 1;
                            j1 = 0;
                            k1 = 0;
                            i2 = 1;
                            j2 = 1;
                            k2 = 0;
                        }
                        else if (x0 >= z0) {
                            i1 = 1;
                            j1 = 0;
                            k1 = 0;
                            i2 = 1;
                            j2 = 0;
                            k2 = 1;
                        }
                        else {
                            i1 = 0;
                            j1 = 0;
                            k1 = 1;
                            i2 = 1;
                            j2 = 0;
                            k2 = 1;
                        }
                    }
                    else {
                        if (y0 < z0) {
                            i1 = 0;
                            j1 = 0;
                            k1 = 1;
                            i2 = 0;
                            j2 = 1;
                            k2 = 1;
                        }
                        else if (x0 < z0) {
                            i1 = 0;
                            j1 = 1;
                            k1 = 0;
                            i2 = 0;
                            j2 = 1;
                            k2 = 1;
                        }
                        else {
                            i1 = 0;
                            j1 = 1;
                            k1 = 0;
                            i2 = 1;
                            j2 = 1;
                            k2 = 0;
                        }
                    }
                    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
                    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
                    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
                    // c = 1/6.
                    var x1 = x0 - i1 + G3; // Offsets for second corner
                    var y1 = y0 - j1 + G3;
                    var z1 = z0 - k1 + G3;
                    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
                    var y2 = y0 - j2 + 2 * G3;
                    var z2 = z0 - k2 + 2 * G3;
                    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
                    var y3 = y0 - 1 + 3 * G3;
                    var z3 = z0 - 1 + 3 * G3;
                    // Work out the hashed gradient indices of the four simplex corners
                    i &= 255;
                    j &= 255;
                    k &= 255;
                    var gi0 = gradP[i + perm[j + perm[k]]];
                    var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
                    var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
                    var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]];
                    // Calculate the contribution from the four corners
                    var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
                    if (t0 < 0) {
                        n0 = 0;
                    }
                    else {
                        t0 *= t0;
                        n0 = t0 * t0 * gi0.dot3(x0, y0, z0); // (x,y) of grad3 used for 2D gradient
                    }
                    var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
                    if (t1 < 0) {
                        n1 = 0;
                    }
                    else {
                        t1 *= t1;
                        n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
                    }
                    var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
                    if (t2 < 0) {
                        n2 = 0;
                    }
                    else {
                        t2 *= t2;
                        n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
                    }
                    var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
                    if (t3 < 0) {
                        n3 = 0;
                    }
                    else {
                        t3 *= t3;
                        n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
                    }
                    // Add contributions from each corner to get the final noise value.
                    // The result is scaled to return values in the interval [-1,1].
                    return 32 * (n0 + n1 + n2 + n3);
                };
                // ##### Perlin noise stuff
                function fade(t) {
                    return t * t * t * (t * (t * 6 - 15) + 10);
                }
                function lerp(a, b, t) {
                    return (1 - t) * a + t * b;
                }
                // 2D Perlin Noise
                module.perlin2 = function (x, y) {
                    // Find unit grid cell containing point
                    var X = Math.floor(x), Y = Math.floor(y);
                    // Get relative xy coordinates of point within that cell
                    x = x - X;
                    y = y - Y;
                    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
                    X = X & 255;
                    Y = Y & 255;
                    // Calculate noise contributions from each of the four corners
                    var n00 = gradP[X + perm[Y]].dot2(x, y);
                    var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
                    var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
                    var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
                    // Compute the fade curve value for x
                    var u = fade(x);
                    // Interpolate the four results
                    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
                };
                // 3D Perlin Noise
                module.perlin3 = function (x, y, z) {
                    // Find unit grid cell containing point
                    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
                    // Get relative xyz coordinates of point within that cell
                    x = x - X;
                    y = y - Y;
                    z = z - Z;
                    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
                    X = X & 255;
                    Y = Y & 255;
                    Z = Z & 255;
                    // Calculate noise contributions from each of the eight corners
                    var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
                    var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
                    var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
                    var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
                    var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
                    var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
                    var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
                    var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);
                    // Compute the fade curve value for x, y, z
                    var u = fade(x);
                    var v = fade(y);
                    var w = fade(z);
                    // Interpolate
                    return lerp(lerp(lerp(n000, n100, u), lerp(n001, n101, u), w), lerp(lerp(n010, n110, u), lerp(n011, n111, u), w), v);
                };
            })(this);
        }
    }
});
System.register("Lambdas/gameVote", ["Common/Color"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var Color_2;
    var m, handler;
    return {
        setters:[
            function (Color_2_1) {
                Color_2 = Color_2_1;
            }],
        execute: function() {
            m = new Color_2.Color(1, 1, 1);
            exports_5("handler", handler = function (event, context) {
                if (event != null) {
                    console.log('event = ' + JSON.stringify(event));
                }
                else {
                    console.log('No event object');
                }
                context.succeed('Hello World'); // SUCCESS with message
            });
        }
    }
});
///<reference path="../Common/typings/Compress.d.ts"/>
System.register("Lambdas/express", ["Lambdas/getGameState", "Lambdas/gameVote"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var getGameState, gameVote;
    var app;
    function handleContext(res) {
        return {
            succeed: function (data) {
                res.send(data);
            },
            error: function (data) {
                res.send(data);
            }
        };
    }
    return {
        setters:[
            function (getGameState_1) {
                getGameState = getGameState_1;
            },
            function (gameVote_1) {
                gameVote = gameVote_1;
            }],
        execute: function() {
            app = global.express();
            app.use(global.cors());
            app.get('/gameState', function (req, res) {
                getGameState.handler(null, handleContext(res));
            });
            app.get('/gameVote', function (req, res) {
                gameVote.handler(null, handleContext(res));
            });
            app.listen(3000);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ29tbW9uL0NvbG9yLnRzIiwiLi4vQ29tbW9uL1V0aWxzLnRzIiwiLi4vQ29tbW9uL2hleExpYnJhcmllcy9HcmlkSGV4YWdvbkNvbnN0YW50cy50cyIsImdldEdhbWVTdGF0ZS50cyIsImdhbWVWb3RlLnRzIiwiZXhwcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7WUFBQSxrQkFBa0I7WUFDbEI7Z0JBS0ksZUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFXO29CQUFYLGlCQUFXLEdBQVgsS0FBVztvQkFDcEQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFDTCxZQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCx5QkFXQyxDQUFBOzs7Ozs7Ozs7OztZQ1pEO2dCQW9CSSxlQUFZLENBQVMsRUFBRSxDQUFTO29CQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQXBCRCxzQkFBVyxvQkFBQzt5QkFBWjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUM7eUJBQ0QsVUFBYSxHQUFXO3dCQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLENBQUM7OzttQkFIQTtnQkFLRCxzQkFBVyxvQkFBQzt5QkFBWjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUM7eUJBQ0QsVUFB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QUFDO2dCQUVGLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdkYsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDOUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO29CQUM5QixHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDakcsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDL0YsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHO29CQUM5RixFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUc7b0JBQy9GLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUYsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0JBQzdGLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ2hHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUMzRixHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRztv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QkFFekIsbUVBQW1FO29CQUNuRSxDQUFDLElBQUksR0FBRyxDQUFDO29CQUNULENBQUMsSUFBSSxHQUFHLENBQUM7b0JBQ1QsQ0FBQyxJQUFJLEdBQUcsQ0FBQztvQkFDVCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFbkQsbURBQW1EO29CQUNuRCxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNULEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixFQUFFLElBQUksRUFBRSxDQUFDO3dCQUNULEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFFLHNDQUFzQztvQkFDaEYsQ0FBQztvQkFDRCxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNULEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixFQUFFLElBQUksRUFBRSxDQUFDO3dCQUNULEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDeEMsQ0FBQztvQkFDRCxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNULEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixFQUFFLElBQUksRUFBRSxDQUFDO3dCQUNULEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDeEMsQ0FBQztvQkFDRCxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNULEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixFQUFFLElB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QUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUU5RSwyQ0FBMkM7b0JBQzNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWhCLGNBQWM7b0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FDUCxJQUFJLENBQ0EsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMzQixJQUFJLENBQ0EsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUM7WUFFTixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7UUM1akJMLENBQUMsRUFHTSxPQUFPOzs7Ozs7O1lBSGQsQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFHZCxxQkFBQSxPQUFPLEdBQUcsVUFBQyxLQUFLLEVBQUUsT0FBTztnQkFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRW5DLENBQUM7Z0JBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFFLHVCQUF1QjtZQUM1RCxDQUFDLENBQUEsQ0FBQzs7OztBQ2ZGLHNEQUFzRDs7Ozs7UUFRbEQsR0FBRztJQUdQLHVCQUF1QixHQUFHO1FBQ3RCLE1BQU0sQ0FBQztZQUNILE9BQU8sRUFBRSxVQUFDLElBQUk7Z0JBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsS0FBSyxFQUFFLFVBQUMsSUFBSTtnQkFDUixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDSixDQUFDO0lBQ04sQ0FBQzs7Ozs7Ozs7OztZQVpHLEdBQUcsR0FBUyxNQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFbEMsR0FBRyxDQUFDLEdBQUcsQ0FBTyxNQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQWE5QixHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUMzQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztZQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQzFCLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9