require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"feedback":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Feedback = (function(superClass) {
  extend(Feedback, superClass);

  function Feedback(options) {
    var counter, dismiss, dismissFeedback, svg, svgProps, textPadding;
    if (options == null) {
      options = {};
    }
    svgProps = {
      color: options.color || 'white'
    };
    svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n  <path fill=\"" + svgProps.color + "\" d=\"M13.41525,12.0005 L17.70725,7.7075 C18.09825,7.3175 18.09825,6.6845 17.70725,6.2935 C17.31625,5.9025 16.68425,5.9025 16.29325,6.2935 L12.00125,10.5865 L7.70725,6.2925 C7.31625,5.9025 6.68425,5.9025 6.29325,6.2925 C5.90225,6.6835 5.90225,7.3155 6.29325,7.7065 L10.58725,12.0005 L6.29325,16.2945 C5.90325,16.6845 5.90225,17.3185 6.29325,17.7085 C6.68425,18.0995 7.31725,18.0985 7.70725,17.7085 L12.00125,13.4145 L16.29425,17.7065 C16.68425,18.0975 17.31725,18.0975 17.70825,17.7065 C18.09925,17.3165 18.09825,16.6835 17.70825,16.2935 L13.41525,12.0005 Z\"/>\n</svg>\n\n";
    if (options.autoDismiss) {
      textPadding = {
        top: 16,
        right: 16,
        bottom: 16,
        left: 16
      };
    } else {
      textPadding = {
        top: 16,
        right: 48,
        bottom: 16,
        left: 16
      };
    }
    Feedback.__super__.constructor.call(this, _.defaults(options, {
      fontSize: 16,
      color: 'white',
      text: options.text,
      backgroundColor: '#333',
      borderRadius: 3,
      lineHeight: 1.4,
      x: Align.center,
      y: Align.bottom(-20),
      clip: true,
      padding: textPadding,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1
    }));
    this.name = 'feedback';
    this.states.show = {
      opacity: 1,
      y: options.y || Align.bottom(-20)
    };
    this.states.hide = {
      opacity: 0,
      y: options.y - 30 || Align.bottom(0)
    };
    this.states.animationOptions = {
      time: 0.25
    };
    this.stateSwitch('hide');
    this.states["switch"]('show');
    dismissFeedback = (function(_this) {
      return function() {
        var feedback;
        feedback = Layer.select('feedback');
        feedback.states["switch"]('hide');
        return Utils.delay(0.5, function() {
          return feedback.destroy();
        });
      };
    })(this);
    if (options.autoDismiss) {
      counter = new Layer({
        parent: this,
        borderRadius: 10,
        y: Align.top(2),
        height: options.counterHeight || 2,
        backgroundColor: options.autoDismiss.color || 'white',
        width: this.width
      });
      counter.animate({
        width: 0,
        options: {
          time: options.autoDismiss.duration || 3,
          curve: 'linear'
        }
      });
      counter.onAnimationEnd(function() {
        return dismissFeedback();
      });
    } else {
      dismiss = new Layer({
        parent: this,
        backgroundColor: null,
        borderRadius: 50,
        y: Align.top(14),
        x: Align.right(-12),
        html: svg,
        width: 24,
        height: 24,
        opacity: 0.5,
        style: {
          'cursor': 'pointer'
        }
      });
      dismiss.onMouseOver(function() {
        return this.opacity = 1;
      });
      dismiss.onMouseOut(function() {
        return this.opacity = 0.5;
      });
      dismiss.onClick(function() {
        return dismissFeedback();
      });
    }
  }

  return Feedback;

})(TextLayer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2phY2t5bGVlL1Byb2plY3RzL2NvZGUvZnJhbWVyLWZlZWRiYWNrLW1vZHVsZS9leGFtcGxlcy9zaGFyZS1wZXJtYWxpbmsuZnJhbWVyL21vZHVsZXMvZmVlZGJhY2suY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEZlZWRiYWNrIENsYXNzXG5jbGFzcyBleHBvcnRzLkZlZWRiYWNrIGV4dGVuZHMgVGV4dExheWVyXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblxuXHRcdCMgRGlzbWlzcyBpY29uIHN2ZyBzZXQgdXBcblx0XHRzdmdQcm9wcyA9XG5cdFx0XHRjb2xvcjogb3B0aW9ucy5jb2xvciB8fCAnd2hpdGUnXG5cblx0XHRzdmcgPVxuXHRcdFwiXCJcIlxuXHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgPHBhdGggZmlsbD1cIiN7c3ZnUHJvcHMuY29sb3J9XCIgZD1cIk0xMy40MTUyNSwxMi4wMDA1IEwxNy43MDcyNSw3LjcwNzUgQzE4LjA5ODI1LDcuMzE3NSAxOC4wOTgyNSw2LjY4NDUgMTcuNzA3MjUsNi4yOTM1IEMxNy4zMTYyNSw1LjkwMjUgMTYuNjg0MjUsNS45MDI1IDE2LjI5MzI1LDYuMjkzNSBMMTIuMDAxMjUsMTAuNTg2NSBMNy43MDcyNSw2LjI5MjUgQzcuMzE2MjUsNS45MDI1IDYuNjg0MjUsNS45MDI1IDYuMjkzMjUsNi4yOTI1IEM1LjkwMjI1LDYuNjgzNSA1LjkwMjI1LDcuMzE1NSA2LjI5MzI1LDcuNzA2NSBMMTAuNTg3MjUsMTIuMDAwNSBMNi4yOTMyNSwxNi4yOTQ1IEM1LjkwMzI1LDE2LjY4NDUgNS45MDIyNSwxNy4zMTg1IDYuMjkzMjUsMTcuNzA4NSBDNi42ODQyNSwxOC4wOTk1IDcuMzE3MjUsMTguMDk4NSA3LjcwNzI1LDE3LjcwODUgTDEyLjAwMTI1LDEzLjQxNDUgTDE2LjI5NDI1LDE3LjcwNjUgQzE2LjY4NDI1LDE4LjA5NzUgMTcuMzE3MjUsMTguMDk3NSAxNy43MDgyNSwxNy43MDY1IEMxOC4wOTkyNSwxNy4zMTY1IDE4LjA5ODI1LDE2LjY4MzUgMTcuNzA4MjUsMTYuMjkzNSBMMTMuNDE1MjUsMTIuMDAwNSBaXCIvPlxuPC9zdmc+XG5cblxuXHRcdFwiXCJcIlxuXG5cdFx0IyB0ZXh0IHBhZGRpbmcgc2V0dGluZ3MgZm9yIGRpZmZlcmVudCB0eXBlcyBvZiBmZWVkYmFja1xuXHRcdGlmIG9wdGlvbnMuYXV0b0Rpc21pc3Ncblx0XHRcdHRleHRQYWRkaW5nID1cblx0XHRcdFx0dG9wOiAxNixcblx0XHRcdFx0cmlnaHQ6IDE2LFxuXHRcdFx0XHRib3R0b206IDE2LFxuXHRcdFx0XHRsZWZ0OiAxNlxuXHRcdGVsc2Vcblx0XHRcdHRleHRQYWRkaW5nID1cblx0XHRcdFx0dG9wOiAxNixcblx0XHRcdFx0cmlnaHQ6IDQ4LFxuXHRcdFx0XHRib3R0b206IDE2LFxuXHRcdFx0XHRsZWZ0OiAxNlxuXG5cdFx0IyBzb21lIGdlbmVyaWMgbG9va2luZyBkZWZhdWx0cyBmb3IgRmVlZGJhY2sgY2xhc3Ncblx0XHRzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdGNvbG9yOiAnd2hpdGUnXG5cdFx0XHR0ZXh0OiBvcHRpb25zLnRleHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyMzMzMnXG5cdFx0XHRib3JkZXJSYWRpdXM6IDNcblx0XHRcdGxpbmVIZWlnaHQ6IDEuNFxuXHRcdFx0eDogQWxpZ24uY2VudGVyXG5cdFx0XHR5OiBBbGlnbi5ib3R0b20oLTIwKVxuXHRcdFx0Y2xpcDogdHJ1ZVxuXHRcdFx0cGFkZGluZzogdGV4dFBhZGRpbmdcblx0XHRcdGJvcmRlckNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjIpJ1xuXHRcdFx0Ym9yZGVyV2lkdGg6IDFcblxuXHRcdEBuYW1lID0gJ2ZlZWRiYWNrJ1xuXHRcdEBzdGF0ZXMuc2hvdyA9XG5cdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHR5OiBvcHRpb25zLnkgfHwgQWxpZ24uYm90dG9tKC0yMClcblxuXHRcdEBzdGF0ZXMuaGlkZSA9XG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHR5OiBvcHRpb25zLnkgLSAzMCB8fCBBbGlnbi5ib3R0b20oMClcblxuXHRcdEBzdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHR0aW1lOiAwLjI1XG5cblx0XHRAc3RhdGVTd2l0Y2goJ2hpZGUnKVxuXHRcdEBzdGF0ZXMuc3dpdGNoKCdzaG93JylcblxuXHRcdCMgaGFuZGxlciBmb3IgZGltaXNzaW5nIGZlZWRiYWNrLlxuXHRcdGRpc21pc3NGZWVkYmFjayA9ICgpID0+XG5cdFx0XHRmZWVkYmFjayA9IExheWVyLnNlbGVjdCgnZmVlZGJhY2snKVxuXHRcdFx0ZmVlZGJhY2suc3RhdGVzLnN3aXRjaCgnaGlkZScpXG5cdFx0XHRVdGlscy5kZWxheSAwLjUsIC0+XG5cdFx0XHRcdFx0ZmVlZGJhY2suZGVzdHJveSgpXG5cblxuXHRcdCMgV2hlbiAnYXV0b0Rpc21pc3MnIG9iamVjdCBpcyB1c2VkIGFzIGFuIG9wdGlvbiwgZ2VuZXJhdGUgaG9yaXpvbnRhbCBiYXIgdGhhdCBjb3VudHMgZG93biB0byB0aGUgdXNlci1zcGVjaWZpZWQgZHVyYXRpb24uXG5cdFx0aWYgb3B0aW9ucy5hdXRvRGlzbWlzc1xuXHRcdFx0Y291bnRlciA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6IEBcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAxMFxuXHRcdFx0XHR5OiBBbGlnbi50b3AoMilcblx0XHRcdFx0aGVpZ2h0OiBvcHRpb25zLmNvdW50ZXJIZWlnaHQgfHwgMlxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMuYXV0b0Rpc21pc3MuY29sb3IgfHwgJ3doaXRlJ1xuXHRcdFx0XHR3aWR0aDogQHdpZHRoXG5cblx0XHRcdGNvdW50ZXIuYW5pbWF0ZVxuXHRcdFx0XHR3aWR0aDogMFxuXHRcdFx0XHRvcHRpb25zOlxuXHRcdFx0XHRcdHRpbWU6IG9wdGlvbnMuYXV0b0Rpc21pc3MuZHVyYXRpb24gfHwgM1xuXHRcdFx0XHRcdGN1cnZlOiAnbGluZWFyJ1xuXG5cdFx0XHRjb3VudGVyLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdGRpc21pc3NGZWVkYmFjaygpXG5cblx0XHQjIE90aGVyd2lzZSwgZGVmYXVsdCB0byB1c2luZyBhIGRpbWlzc2FibGUgRmVlZGJhY2sgJiBnZW5lcmF0ZSBkaW1pc3MgaWNvbiBidXR0b24uXG5cdFx0ZWxzZVxuXHRcdFx0ZGlzbWlzcyA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6IEBcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRcdGJvcmRlclJhZGl1czogNTBcblx0XHRcdFx0eTogQWxpZ24udG9wKDE0KVxuXHRcdFx0XHR4OiBBbGlnbi5yaWdodCgtMTIpXG5cdFx0XHRcdGh0bWw6IHN2Z1xuXHRcdFx0XHR3aWR0aDogMjRcblx0XHRcdFx0aGVpZ2h0OiAyNFxuXHRcdFx0XHRvcGFjaXR5OiAwLjVcblx0XHRcdFx0c3R5bGU6ICdjdXJzb3InOidwb2ludGVyJ1xuXG5cdFx0XHRkaXNtaXNzLm9uTW91c2VPdmVyIC0+XG5cdFx0XHRcdHRoaXMub3BhY2l0eSA9IDFcblxuXHRcdFx0ZGlzbWlzcy5vbk1vdXNlT3V0IC0+XG5cdFx0XHRcdHRoaXMub3BhY2l0eSA9IDAuNVxuXG5cdFx0XHRkaXNtaXNzLm9uQ2xpY2sgLT5cblx0XHRcdFx0ZGlzbWlzc0ZlZWRiYWNrKClcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FEQ0EsSUFBQTs7O0FBQU0sT0FBTyxDQUFDOzs7RUFDQSxrQkFBQyxPQUFEO0FBR1osUUFBQTs7TUFIYSxVQUFROztJQUdyQixRQUFBLEdBQ0M7TUFBQSxLQUFBLEVBQU8sT0FBTyxDQUFDLEtBQVIsSUFBaUIsT0FBeEI7O0lBRUQsR0FBQSxHQUNBLDhHQUFBLEdBRWMsUUFBUSxDQUFDLEtBRnZCLEdBRTZCO0lBTzdCLElBQUcsT0FBTyxDQUFDLFdBQVg7TUFDQyxXQUFBLEdBQ0M7UUFBQSxHQUFBLEVBQUssRUFBTDtRQUNBLEtBQUEsRUFBTyxFQURQO1FBRUEsTUFBQSxFQUFRLEVBRlI7UUFHQSxJQUFBLEVBQU0sRUFITjtRQUZGO0tBQUEsTUFBQTtNQU9DLFdBQUEsR0FDQztRQUFBLEdBQUEsRUFBSyxFQUFMO1FBQ0EsS0FBQSxFQUFPLEVBRFA7UUFFQSxNQUFBLEVBQVEsRUFGUjtRQUdBLElBQUEsRUFBTSxFQUhOO1FBUkY7O0lBY0EsMENBQU0sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ0w7TUFBQSxRQUFBLEVBQVUsRUFBVjtNQUNBLEtBQUEsRUFBTyxPQURQO01BRUEsSUFBQSxFQUFNLE9BQU8sQ0FBQyxJQUZkO01BR0Es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
