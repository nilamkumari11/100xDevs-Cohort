# Flex
---------------------------------------------------------------------------
flex lets us position elements just next to each other  
 multiples divs can be placed right next to each other if we are using flex box  
 if flex is removed they are placed one below the other  
 style = {{display:"flex}}

to space them equally and no space at start and end  
 we use -> justifyContent:"space-between"  
 style = {{display:"flex, ustifyContent:"space-between"}}  

 default of justify content is flex-start (all at beginning)  
 style = {{display:"flex, ustifyContent:"flex-start"}}  

 flex-end -> all at end   
style = {{display:"flex, ustifyContent:"flex-end"}}   

 centre -> all div close to each other in the centre   
style = {{display:"flex, ustifyContent:"centre"}}   

 to space them equally with space(half of space between divs) at start and end  
 we use -> justifyContent:"space-around"  
 style = {{display:"flex, ustifyContent:"space-around"}}  

- ------------------------------------------------------------------------


 # tailwind -> syntax

 - in tailwind, we write it like 

```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-1 ...">02</div>
  <div class="w-32 flex-1 ...">03</div>
</div>
```

- in react it is written as -> 
```html
 <div className = 'flex'>
```
 we cannot write class becuase class is keyword in js

--------------------------------------------------------------------------------------

# Grid
 grid is equal width, can be unequal also, syntax in App.jsx 

---------------------------------------------------------------------------------------------

# Responsiveness 
changes width based of size of window 

|   breakpoint prefix |  minimum width   |    css    |
| --------------------|------------------|-----------|
|        sm           |     640px        | '@media (min-width: 640px) {...}' |
|        md           |     768px        |                |
|        lg           |     1024px       |                 |
|        xl           |     1280px       |              |
|        2xl          |     1536px       |              |

# mobile first 
---------------------------
- tailwind uses mobile first breakpoint system  
it means that unprefixed utlities take effect on all screen sizes  
prefixed utilities(md) take effect at that breakpoint and above  
that is if we write  
```html
<div class='sm:text-centre'></div>
```
it means text will be centre for sm break point and all above, md lg etc.  
so we use unprefixed utilities to target mobile, and override larger  
```html
<div class='text-centre sm:text-left'></div>
```
here, tect is in centre for sm(mobile), but for above small it will be in left 

------------------------------------------------------
### colour System 
here we write from 50 - 1000 in shades of colour from light to dark  
```html
<div className='bg-green-500 text-red-500 text-md'>hi there from div one</div>
```  
text sizes as xs md lg xl 2xl  
- radius border  
rounded  
rounded-md  
rounded-lg  
rounded-full  

--------------------------
# dark theme
```html
<div className="bg-red-500 dark:bg-green-500">hi there</div> 
```

---------------------
# Storybook 
When we dont want to open sorce a whole project but want someone to fix something... we can open source a single component and it is done using story book  
It exposes componenets without rendering them in App.jsx  
It brings lot of dependencies  
To add storybook to vite-react 
