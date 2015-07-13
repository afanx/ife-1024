'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

define(function (require) {
    var WIDTH = 600;
    var HEIGHT = 800;

    var GameManager = (function () {
        function GameManager(InputManager) {
            _classCallCheck(this, GameManager);

            this.inputManager = new InputManager();

            this.entities = [];
            this.score = 0;
            this.canvas = document.getElementById('plane-game');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = WIDTH;
            this.canvas.height = HEIGHT;
            this.ratio = WIDTH / HEIGHT;

            this.setup();
        }

        _createClass(GameManager, [{
            key: 'restart',
            value: function restart() {}
        }, {
            key: 'setup',
            value: function setup() {
                window.addEventListener('resize', this.resize.bind(this), false);
                this.resize();
            }
        }, {
            key: 'resize',
            value: function resize() {
                var currentHeight = window.innerHeight;
                var currentWidth = currentHeight * this.ratio;

                this.canvas.style.width = currentWidth + 'px';
                this.canvas.style.height = currentHeight + 'px';

                this.scale = currentWidth / WIDTH;
            }
        }]);

        return GameManager;
    })();

    return GameManager;
});