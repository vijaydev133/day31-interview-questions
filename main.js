/**************************************************************
1. What is the use of doctype HTML?
Ans)The HTML document type declaration, Doctype in html is used to mention version of the html we are going to 
code in the document, the latest version is HTML(<!DOCTYPE html>)

/************************************************************** 
2. Purpose of meta tag
Ans) meta tags is to give additional information of the document to the
browser,typically used to specify character set, page description, keywords.. 
for ex) we used to mention the keywords of our content to the browser
<meta name="keywords" content="HTML, CSS, JavaScript">

/************************************************************** 
3. Without using css how can I separate span tag in block.
Ans) Using style attribute in that element.
ex)<span style="display: block">sometext</span>

/************************************************************** 
4. Difference between psuedo class and psuedo elements.
Ans) psuedo classes are used to reduce the excessive use of class and 
it will be used only when the element is in some state, example :first child,:hover
psuedo elements will act same as pseudo classes, difference is we use "::",
if we need to select the first line we can use ::first-line,
alse we can add something through css by ::after and ::before psuedo elements

/************************************************************** 
5. Iteration properties
Ans) entries and for in are the iteration property

/************************************************************** 
6. Use of svg and canvas
Ans) SVG gives better performance with smaller number of objects or 
larger surface. Canvas gives better performance with smaller surface or 
larger number of objects. SVG can be modified through script and CSS. 
Canvas can be modified through script only.

/************************************************************** 
7. Media querries
Ans) Media queries are used to make the page as responsive,
for ex) when we need the page to be different in width : 500px
@media (min-width = "500px"){we write code for that width}

/************************************************************** 
8. Orientation
Ans) Page orientation is the way in which a rectangular page is 
oriented for normal viewing.The two most common types of orientation 
are portrait and landscape.

/************************************************************** 
9. Set time out and set interval difference
Ans) Set time out will only run for a certain times,
but set timeout will run for certain interval of time

/************************************************************** 
10. Box model
Ans) everything in a webpage will be inside the box model,
box model contains content, padding(place between content and border),
border(place between margin and padding),margin(which is outside the border)


/************************************************************** 
11. Attribute
Ans) Attribute in html tags are used to give extra information 
about that element. ex) <span class="span-tag">something</span> 

/************************************************************** 
12. Use of default (reset) css
Ans) A CSS Reset (or “Reset CSS”) is a short, often compressed (minified) 
set of CSS rules that resets the styling of all HTML elements to a 
consistent baseline.

/************************************************************** 
13. In span tag I give width:50px:
Padding: 5px;
Margin : 5px;
Now calculate width
Ans) total width = width(50px) + left-padding(5px) + right-padding(5px)+
+ left-margin(5px) + right-margin(5px)

total-width = 70px

/************************************************************** */