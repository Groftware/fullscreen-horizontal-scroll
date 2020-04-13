**Table of contents** 

* [Insallation](#installation)
* [FAQ](#faq)
* [How it works](#howitworks)
* [Usage](#usage)
* [Why making such component?](#whymake)

A component that helps developer to create an element that scroll horizontally using vertical scroll with fullscreen view. It only starts to scroll horizontally when the scroll/view reaches the element.

* Is reponsive, scrolling works even thought is resize 📱💻🖥
* It only scroll horizontally when it reaches the element, no unwated horizontal scrolling when user are browsing your website 👀
* Solve your problem to do the calculation for scrolling horizontally with vertical scroll 🤓
*  Scrolls horitonzally as accurate as your vertical scroll 🖱 

<a name="installation"/>

## Installation

``` 
npm i @groftware/fullscreen-horizontal-scroll 
```
or

``` 
yarn add @groftware/fullscreen-horizontal-scroll 
```

<a name="howitworks"/>

## How it works?
It takes the children width in containers and apply the height to the wrapper. So when user scrolls vertically, it uses HTML DOM property; which is `scrollLeft`, to mimic the horizontal scroll.  

<a name="howitworks"/>

## Usage

Just wrap the element that you want it to scroll horizontally  `<FullScreenHorizontalScroll>` you are good to go! 🎉

Example:

```
import FullScreenHorizontalScroll from '@groftware/fullscreen-horizontal-scroll';

<div>
  <div style={{ backgroundColor: 'black', width: 1500, height: 100 }} />
  <HorizontalScroll>
    {/* Elements that you want to display in the horizontal scroll */}
    <div style={{ border: '10px solid black', height: 200 }}>
      <div style={{ border: '10px solid red', width: 1500, height: 100 }} />
    </div>
    <div style={{ border: '10px solid black', width: 1500, height: 100 }} />
  </HorizontalScroll>
  <div style={{ backgroundColor: 'black', width: 1500, height: 100 }} />
</div>
```
<table>
	<tr>
		<th>Property</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>children</td>
		<td>node</td>
		<td>elements that you want to show</td>
	</tr>
	<tr>
		<td>hideScrollX</td>
		<td>boolean</td>
		<td>default shows horizontal scollbar</td>
	</tr>
	<tr>
		<td>containerStyle</td>
		<td>object</td>
		<td>React inline style for the container</td>
	</tr>
	<tr>
		<td>containerClassName</td>
		<td>string</td>
		<td>CSS style for the container</td>
	</tr>
	<tr>
		<td>centerVertical</td>
		<td>boolean</td>
		<td>vertically center the container and it's child element </td>
	</tr>
</table>

<a name="whymake"/>

## Why making such component?

We wanted to have this feature for our website UI/UX, and therefore we search for the solution and created this component. Is not the best solution but it solve our company's problem, and therefore we hope that it can solve yours too! 

You may refer to our website [https://groftware.tech/](https://groftware.tech/) to test the component, click on the **Experience** tab in the navbar and try scrolling it! 🎉


<a name="faq"/>

## FAQ

1. Why is my element stretched to window height?

	The container uses `display:flex` and `height: 100vh` along with `maxHeight: 100vh` to achieve fullscreen. And so the height of the element fills the available height by default. Define a height for your element if you do not want the height to be stretch. This problem does not apply to the element's children.
	
1. Can i vertically align my container top or bottom?

	There is `containerStyle` and `containerClassName` props for you to customize the container! Please refer to `alignItems` style in CSS 
	<br/> An example for this solution:
	
	```	
	import React from 'react';
	
	import FullScreenHorizontalScroll from '@groftware/fullscreen-horizontal-scroll';
	
	function App() {
	  return (
	    <div>
	      <div style={{ backgroundColor: 'black', width: 1500, height: 100 }} />
	      <FullScreenHorizontalScroll containerStyle={{ alignItems: 'flex-end' }}> // position your container here
	        <div style={{ border: '10px solid black', height: 100 }}>
	          <div style={{ border: '10px solid red', width: 1500, height: 100 }} />
	        </div>
	        <div style={{ border: '10px solid black', width: 1500, height: 100 }} />
	      </FullScreenHorizontalScroll>
	      <div style={{ backgroundColor: 'black', width: 1500, height: 100 }} />
	    </div>
	  );
	}
	
	export default App;
	```
	
1. Why is my element width is being squeeze or stretch when i apply `width: 100%`, `width: auto` or `flex: 1` style?

	This is because the container uses `display: flex` which by default it will expand to windows width. And so the elements width will be stretch/squeeze to match the container width. 

	<br/> You may fix it by giving a fixed width.
	 
	<br/> If you are curious why is this happening, we Groftware did not made this as intended. You may on research on **flexbox** for further understanding. 🕵🏻‍♂️ 
	
1. The scrolling is wrong when my element has nested children in it

	This is because the container only takes the sibling childrens width to calculate the scrolling. Try to make your nested element expand based on your the children or give a fixed width to fix this issue.

1. My problem is not listed here.

	You may go to the Github pages to open a new issue and we will help you 🥳 

Happy hacking! 🖱

## Contact
[hello@groftware.tech](hello@groftware.tech)


