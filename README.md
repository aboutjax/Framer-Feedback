# Framer Feedback Module
The Feedback Module for Framer makes it easier for you to prototype with feedback messages. It allows you to easily created two different types of feedback component in any part of your prototype.

<a href='https://open.framermodules.com/framer-feedback'>
    <img alt='Install with Framer Modules'
    src='https://www.framermodules.com/assets/badge@2x.png' width='160' height='40' />
</a>

1. Generic Feedback
2. Auto Dismiss Feedback

[![](https://media.giphy.com/media/3CSJhKfs7JaNY1qctn/giphy.gif)](https://framer.cloud/UbNRL)

[Example](https://framer.cloud/GUsVL) – Sharing permalinks interaction.


## Including the Module
To include the Feedback Class as a module, get the `feedback.coffee` file and place it within the `/modules` folder of your prototype.

`{Feedback} = require "feedback"`

## Generic Feedback
By default, the feedback component includes a dismissable icon at the end of the message. This is often used when you wish to show the user a message that needs their attention.

```coffee
feedback = new Feedback
  text: 'This is a feedback with a dismissable button.'
```
![generic feedback](https://media.giphy.com/media/3oFzm0oNwQ9gb1ARcQ/giphy.gif)

Since this module extends `TextLayer`, it inherits all the goodness that comes with it. [Documentation here.](https://framer.com/docs/#text.textlayer) For example, this is how to invert the style of the feedback component (white background / dark text)

```coffee
feedback = new Feedback
  text: 'This is a feedback with a dismissable button.'
  color: 'black'
  backgroundColor: 'white'
```
![inverted example](https://imgur.com/X8toEXZ.jpg)


## Auto Dismiss Feedback
If an `autoDimiss` object is passed in as an option, it will dismiss itself after a set time.

```coffee
feedback = new Feedback
text: 'This is a feedback with a self destruct timer.'
autoDismiss:
  duration: 4
  ```

![auto dismiss feedback](https://media.giphy.com/media/3ohc13JxwiMcnnXf0c/giphy.gif)

## Auto Dismiss Customization
Set `autoDimiss` options to override style and behaviours.

```coffee
feedback = new Feedback
  text: 'This is a feedback with a self destruct timer.'
  backgroundColor: 'white'
  color: 'black'
  autoDismiss:
    duration: 2         #duration before auto dissmiss
    counterHeight: 5    #counter bar height
    color: '0097F1'     #counter bar color
```

## Listen to dismiss Events
You can also listen to dismiss event to trigger other functions.
```coffee
feedback = new feedback
  text: 'This is a feedback message'
  autoDimiss:
    duration: 2

feedback.onDimiss ->
  print 'feedback is dismissed'
```
