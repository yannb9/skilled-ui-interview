This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Management
### App.js
[App.js](https://github.com/yannb9/skilled-ui-interview/blob/master/src/App.js) holds two components but oin this case i'm going to call them containers.
I have two containers: [BestSellers.js](https://github.com/yannb9/skilled-ui-interview/blob/master/src/containers/BestSellers.js) and [Chat.js](https://github.com/yannb9/skilled-ui-interview/blob/master/src/containers/Chat.js)
One of the requirements was to have the possibility to make changed to the component without going to the code and making the changes so I opened the door for props:
In BestSellers container you have the possibility to change the text color of the background container, item on hover, title, branding and price.
In Chat container you have the possibility to chnage the person name, profile image, position and message as well as changing background colors, text colors and even decide after how many seconds you want to chat to appear.

### BestSellers.js
BestSellers is a container nesting a component.
It's a container with all the shoes inside.
I created the [ShoeItem](https://github.com/yannb9/skilled-ui-interview/blob/master/src/components/ShoeItem.js) component for this container (which is also a component)

### Chat.js
Chat is a container nesting a component.
The nested component is called [ChatIntro](https://github.com/yannb9/skilled-ui-interview/blob/master/src/components/ChatIntro.js)
Chatintro is a component for all the profile information (name, profile image, role, message and text colors)

## Styling Choice
At first i created a file name Styles.js and put all the inline styles there ,exported and used on my components and contianers.
Afterwards I felt the need to use css-in-js library which i felt more comfortable working with as it's very similar than normal css.
