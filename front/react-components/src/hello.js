'use strict';

function ShowFive() {
    let value = '5';
    return value;
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        };
        this.data = {
            title: "Polaroid Instant Digital Camera",
            message: "We are recreating the magic of classic instant photography with the Polaroid Camera - the newest way to snap, print, and share life instantly.",
            items_bought: []
        }
    };

    addItem() {
        this.setState({ liked: true });
        this.data.items_bought.push(this.data.title);
    };

    render() {
        if (this.state.liked == true) {
            return (
                <div>
                    <p>You added {this.data.title} to the cart.</p>
                    <p>Here is your cart:</p>
                    <p>{this.data.items_bought[0]}
                    </p>
                </div>
            )
        };
        return (
            <div>
                <div className="flex relative">
                    <div className="flex-1 h-auto mt-8 px-4 xl:px-8">
                        <h1 className="mb-2 text-lg md:text-xl lg:text-2xl xl:text-4xl">{this.data.title}</h1>
                        <p className="text-xs md:text-sm">{this.data.message}</p>
                        <p className="text-sm md:text-lg lg:text-xl font-bold mt-8">Polaroid Snap Blue $220</p>
                        <button onClick={this.addItem.bind(this)} className="py-1 md:py-3 px-8 mt-4 rounded-full shadow-2xl text-white" style={{ backgroundColor: "rgb(248, 75, 14)" }} >
                            <p>Add to cart</p>
                        </button>
                    </div>
                    <div className="flex-1 min-h-full h-auto m-auto">
                        <img src="src/camerablue.jpeg" className="w-auto" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-16 md:w-18 lg:w-24 mr-8">
                    <img src="src/polaroid-logo.jpeg" className="w-auto" />
                </div>
            </div >
        );
    }
}

let domContainer = document.querySelector('#card');
ReactDOM.render(<Card />, domContainer);