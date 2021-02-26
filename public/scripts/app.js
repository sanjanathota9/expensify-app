'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <const obj={
//     name:"sanjana",
//     getName(){
//       console.log("Name:"+this.name);
//     }
//    }
//    const getName=obj.getName;
//    console.log(getName());
//Cannot read property 'name' of undefined because in getName function it looses connection with this

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: []
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState({
                options: []
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var optionIndex = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[optionIndex];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Item already exists';
            }
            this.setState({
                options: this.state.options.concat([option])
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var subTitle = 'Put your life in the hands of Computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, { display: this.state.options.length > 0, handlePick: function handlePick() {
                        return _this2.handlePick();
                    } }),
                React.createElement(Options, { options: this.state.options, handleDeleteOptions: function handleDeleteOptions() {
                        return _this2.handleDeleteOptions();
                    } }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: 'Indecision'
};
function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.display, onClick: props.handlePick },
            'What should I do?'
        )
    );
}
// class Action extends React.Component{

//     render(){
//         return(
//             <div>
//             <button disabled={!this.props.display} onClick={this.props.handlePick}>What should I do?</button>
//             </div>
//         )
//     }
// }
var Options = function Options(props) {
    // constructor(props){
    //     super(props);
    //     this.handleRemoveAll=this.handleRemoveAll.bind(this);
    //     //in functions it will lose context to this so we need to bind this
    // }
    // handleRemoveAll(){
    //   console.log(this.props.options);
    // }

    return React.createElement(
        'div',
        null,
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        }),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        )
    );
};
var Option = function Option(props) {

    return React.createElement(
        'div',
        null,
        'Option: ',
        props.optionText
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(event) {
            event.preventDefault();
            var option = event.target.elements.option.value.trim();
            console.log("submitted:" + option);
            event.target.elements.option.value = '';
            var error = this.props.handleAddOption(option);
            this.setState({
                error: error //as we assigning error to error we can write like this
            });
        }
        // if(option){
        //   this.props.handleAddOption(option);
        // }

    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            return _this4.handleAddOption(e);
                        } },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const User = (props)=>{
//     return (
//         <div>
//            <p>Name:{props.name}</p>
//            <p>Age:{props.age}</p>
//         </div>
//     )
// }
//ReactDOM.render(<User name="sanjana" age={26}/>,document.getElementById("app"));


ReactDOM.render(React.createElement(IndecisionApp, { title: "Indecision" }), document.getElementById("app"));
