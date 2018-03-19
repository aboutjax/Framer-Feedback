# Framer Feedback Module

The Feedback Module for Framer makes it easier for you to prototype with feedback messages. It allows you to easily spawn two different types of feedback messages in any part of your prototype.

<a href='https://open.framermodules.com/framer-feedback'>
    <img alt='Install with Framer Modules'
    src='https://www.framermodules.com/assets/badge@2x.png' width='160' height='40' />
</a>

[![](https://media.giphy.com/media/3gL42l3ppwJC6eKxem/source.gif)](https://framer.cloud/UbNRL)

## Example

[Copy to clipboard](https://framer.cloud/GUsVL) - Feedback message when copying an app permalink to clipboard.

## Including the Module

To include the Feedback Class as a module, place the `feedback.coffee` file inside the `/modules` folder of your prototype.

Include the module into your Framer project:

```coffee
{Feedback} = require "feedback"
```

## Generic Feedback

By default, the feedback component includes a dismissable icon at the end of the message. This is often used when you wish to show the user a message that needs their attention.

```coffee
feedback = new Feedback
  text: 'Hello world.'
```

![generic feedback](https://media.giphy.com/media/4ZobZB3GghKGwR1KVp/source.gif)

Since this module extends [TextLayer.](https://framer.com/docs/#text.textlayer), it inherits all the goodness that comes with it.  For example, to invert the style of the feedback component (white background / dark text):

```coffee
feedback = new Feedback
  text: 'Hello world.'
  color: 'black'
  backgroundColor: 'white'
```

## Auto Dismiss Feedback

If an `autoDimiss` object is passed in as an option, it will dismiss itself after a set duration of time.

```coffee
feedback = new Feedback
  text: 'Hello world.'
  autoDismiss:
    duration: 3         # duration before auto dissmiss
    color: '007AFF'     # counter bar color
    counterHeight: 5    # counter bar height
```

Some `autoDismiss` options include:

| Properties    | Type   | Description                                       |
| :------------ | :----- | :------------------------------------------------ |
| duration      | number | duration before feedback message dismisses itself |
| color         | Color  | counter bar color                                 |
| counterHeight | number | counter bar height                                |

![auto dismiss feedback](https://media.giphy.com/media/O5txiLniPd3nI0CKcG/source.gif)

## Listen to dismiss events

You can also listen to dismiss event to trigger other functions.

```coffee
feedback = new feedback
  text: 'Hello, world.'
  autoDimiss:
    duration: 2

feedback.onDimiss ->
  print 'feedback is dismissed'
```
