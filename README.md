# Framer Feedback Module
The Feedback Module for Framer makes it easier for you to prototype with feedback messages. It allows you to easily created two different types of feedback component in any part of your prototype.

1. Generic Feedback
2. Auto Dismiss Feedback

[![](https://media.giphy.com/media/xULW8o0aNp4p3sazh6/giphy.gif)](https://framer.cloud/UbNRL)

[Example](https://framer.cloud/GUsVL) – Sharing permalinks interaction.


## Including the Module
To include the Feedback Class as a module, get the feedback.coffee file from within the `/module` folder and place it within the `/modules` folder of your prototype.

`{Feedback} = require "feedback"`

## Generic Feedback
By default, the feedback component includes a dismissable icon at the end of the message. This is often used when you wish to show the user a message that needs their attention.

![generic feedback](https://media.giphy.com/media/3oFzm0oNwQ9gb1ARcQ/giphy.gif)

```coffee
feedback = new Feedback
  text: 'This is a feedback with a dismissable button.'
```

Since this module extends `TextLayer`, it inherits all the goodness that comes with it. [Documentation here.](https://framer.com/docs/#text.textlayer)

So as an example, this is how to invert the style of the feedback component (white background / dark text)

```coffee
feedback = new Feedback
  text: 'This is a feedback with a dismissable button.'
  color: 'black'
  backgroundColor: 'white'
```
![inverted example](https://imgur.com/X8toEXZ.jpg)


## Auto Dismiss Feedback
If an `autoDimiss` object is passed in as an option, it will dismiss itself after a set time.

![auto dismiss feedback](https://media.giphy.com/media/3ohc13JxwiMcnnXf0c/giphy.gif)

```coffee
feedback = new Feedback
  text: 'This is a feedback with a self destruct timer.'
  autoDismiss:
    duration: 4
```

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
