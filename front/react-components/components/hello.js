'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ShowFive() {
    var value = '5';
    return value;
}

var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

        _this.state = {
            liked: false
        };
        _this.data = {
            title: "Polaroid Instant Digital Camera",
            message: "We are recreating the magic of classic instant photography with the Polaroid Camera - the newest way to snap, print, and share life instantly.",
            items_bought: []
        };
        return _this;
    }

    _createClass(Card, [{
        key: 'addItem',
        value: function addItem() {
            this.setState({ liked: true });
            this.data.items_bought.push(this.data.title);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.liked == true) {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'You added ',
                        this.data.title,
                        ' to the cart.'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Here is your cart:'
                    ),
                    React.createElement(
                        'p',
                        null,
                        this.data.items_bought[0]
                    )
                );
            };
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'flex relative' },
                    React.createElement(
                        'div',
                        { className: 'flex-1 h-auto mt-8 px-4 xl:px-8' },
                        React.createElement(
                            'h1',
                            { className: 'mb-2 text-lg md:text-xl lg:text-2xl xl:text-4xl' },
                            this.data.title
                        ),
                        React.createElement(
                            'p',
                            { className: 'text-xs md:text-sm' },
                            this.data.message
                        ),
                        React.createElement(
                            'p',
                            { className: 'text-sm md:text-lg lg:text-xl font-bold mt-8' },
                            'Polaroid Snap Blue $220'
                        ),
                        React.createElement(
                            'button',
                            { onClick: this.addItem.bind(this), className: 'py-1 md:py-3 px-8 mt-4 rounded-full shadow-2xl text-white', style: { backgroundColor: "rgb(248, 75, 14)" } },
                            React.createElement(
                                'p',
                                null,
                                'Add to cart'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'flex-1 min-h-full h-auto m-auto' },
                        React.createElement('img', { src: 'src/camerablue.jpeg', className: 'w-auto' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'absolute top-0 right-0 w-16 md:w-18 lg:w-24 mr-8' },
                    React.createElement('img', { src: 'src/polaroid-logo.jpeg', className: 'w-auto' })
                )
            );
        }
    }]);

    return Card;
}(React.Component);

var domContainer = document.querySelector('#card');
ReactDOM.render(React.createElement(Card, null), domContainer);