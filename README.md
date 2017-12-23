# Framer Feedback Module
The Feedback Module for Framer makes it easier for you to prototype with feedback messages. It allows you to easily created a Feedback component in any part of your prototype.

## Example
[Permalink sharing](https://framer.cloud/GUsVL)

Generating & Copying a permalink into the clipboard. This example uses the autoDimiss Feedback.

[![example](https://media.giphy.com/media/l0HUka3cZplsu6LhS/giphy.gif)](https://framer.cloud/GUsVL)


## Generic Feedback
By default, the feedback component includes a dismissable icon at the end of the message. This is often used when you wish to show the user a message that needs their attention.

![generic feedback](https://media.giphy.com/media/3oFzm0oNwQ9gb1ARcQ/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a dismissable button.'
```

Since this module extends `TextLayer`, it inherits all the goodness that comes with it. [Full Doc](https://framer.com/docs/#text.textlayer)

To make an inverted Feedback:

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a dismissable button.'
    color: 'black'
    backgroundColor: 'white'
```


## Auto Dismiss Feedback
If an `autoDimiss` object is passed in as an option, it will dismisses itself after a set time.

![auto dismiss feedback](https://media.giphy.com/media/3ohc13JxwiMcnnXf0c/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a self destruct timer.'
    autoDismiss:
      duration: 4
```

Some options are available to customise the style and behaviour:

#### White background / blue counter

![white example](https://media.giphy.com/media/xULW8Fsbgcx8z5S9JS/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a self destruct timer.'
    backgroundColor: 'white'
    color: 'black'
    autoDismiss:
      duration: 2
      color: '0097F1'
```

#### Pink background / white counter

![pink example](https://media.giphy.com/media/3oFzm0U7bMruTwsudy/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a self destruct timer.'
    backgroundColor: '#FF86AA'
    color: 'white'
    autoDismiss:
      duration: 2
      color: 'white'
```
