"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_assertThisInitialized(_this));
    _this.handleOnPick = _this.handleOnPick.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.state = {
      title: 'Indecision App',
      subTitle: 'Put your life in the hands of a computer',
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {//do nothing
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {} //handle Delete Option

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    } //delete indivisual option

  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(option) {
      this.setState(function (prev) {
        return {
          options: prev.options.filter(function (word) {
            return word !== option;
          })
        };
      });
    } //pick random option

  }, {
    key: "handleOnPick",
    value: function handleOnPick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length); //pick 0-1-2

      alert(this.state.options[randomNum]);
    } //add option into Array->addOption class

  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      //check if empty or already exist
      if (!option) {
        return "Enter valid value to add Item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "already exist";
      } //this.state.options.push(option);


      this.setState(function (prev) {
        return {
          options: prev.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          title = _this$state.title,
          subTitle = _this$state.subTitle,
          options = _this$state.options;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        subTitle: subTitle
      }), /*#__PURE__*/React.createElement(Action, {
        handleOnPick: this.handleOnPick,
        hasOption: options.length > 0
      }), /*#__PURE__*/React.createElement(Options, {
        options: options,
        handleDeleteOptions: this.handleDeleteOptions,
        handleDeleteOption: this.handleDeleteOption
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " ", props.title, " "), /*#__PURE__*/React.createElement("h2", null, props.subTitle, " "));
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: !props.hasOption,
    onClick: props.handleOnPick
  }, "What Should I do ?"));
};

var Options = function Options(props) {
  var options = props.options;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, " Remove All"), options.length == 0 && /*#__PURE__*/React.createElement("p", null, "Please add an option to get started!"), options.map(function (option) {
    return /*#__PURE__*/React.createElement(Option, {
      text: option,
      key: option,
      handleDeleteOption: function handleDeleteOption(e) {
        props.handleDeleteOption(option);
      }
    });
  }));
}; //Option component->goes in Options


var Option = function Option(props) {
  var text = props.text;
  return /*#__PURE__*/React.createElement("div", null, text, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteOption
  }, "Delete"));
};

var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  var _super2 = _createSuper(AddOption);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _super2.call(this, props);
    _this2.state = {
      error: undefined
    };
    _this2.onHandleSubmit = _this2.onHandleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(AddOption, [{
    key: "onHandleSubmit",
    value: function onHandleSubmit(e) {
      e.preventDefault(); //trip ths sentence, in order to lef-out spaces

      var newValue = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(newValue); //if value is exist

      this.setState(function () {
        return {
          error: error
        };
      });

      if (!error) {
        e.target.elements.option.value = ' ';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onHandleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        name: "option",
        type: "text"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component); ///////////////////////////Counter/////////////////////////////////////////


var Counter = /*#__PURE__*/function (_React$Component3) {
  _inherits(Counter, _React$Component3);

  var _super3 = _createSuper(Counter);

  function Counter(props) {
    var _this3;

    _classCallCheck(this, Counter);

    _this3 = _super3.call(this, props);
    _this3.state = {
      count: 0
    };
    _this3.handleAddOne = _this3.handleAddOne.bind(_assertThisInitialized(_this3));
    _this3.handleMinusOne = _this3.handleMinusOne.bind(_assertThisInitialized(_this3));
    _this3.handlereset = _this3.handlereset.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var stringCount = localStorage.getItem('count');
        var count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
          this.setState(function () {
            return {
              count: count
            };
          });
        }
      } catch (e) {//do nothing
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "handleAddOne",
    value: function handleAddOne() {
      // this.state.count++;
      this.setState(function (prev) {
        return {
          count: prev.count + 1
        };
      });
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      this.setState(function (prev) {
        return {
          count: prev.count - 1
        };
      });
    }
  }, {
    key: "handlereset",
    value: function handlereset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var num = this.state.count;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count:", num, " "), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleAddOne
      }, "+1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleMinusOne
      }, "-1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handlereset
      }, "reset"));
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
