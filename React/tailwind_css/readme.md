# Flex
---------------------------------------------------------------------------
flex lets us position elements just next to each other 
 multiples divs can be placed right next to each other if we are using flex box
 if flex is removed they are placed one below the other
 style = {{display:"flex}}
- ----------------------------------------------------------
to space them equally and no space at start and end 
 we use -> justifyContent:"space-between"
 style = {{display:"flex, ustifyContent:"space-between"}}
- ----------------------------------------------------------------
 default of justify content is flex-start (all at beginning)
 style = {{display:"flex, ustifyContent:"flex-start"}}
- -----------------------------------------------------------------
 flex-end -> all at end
style = {{display:"flex, ustifyContent:"flex-end"}}
- ------------------------------------------------------------------
 centre -> all div close to each other in the centre
style = {{display:"flex, ustifyContent:"centre"}}
- -----------------------------------------------------------------
 to space them equally with space(half of space between divs) at start and end 
 we use -> justifyContent:"space-around"
 style = {{display:"flex, ustifyContent:"space-around"}}
- ------------------------------------------------------------------------


 # tailwind -> syntax

 - in tailwind, we write it like 
  <div class="flex">
     <div class="w-14 flex-none ...">01</div>
     <div class="w-64 flex-1 ...">02</div>
     <div class="w-32 flex-1 ...">03</div>
 </div> 

- in react it is written as -> 
 <div className = 'flex'>
 we cannot write class becuase class is keyword in js

--------------------------------------------------------------------------------------

# Grid
 grid is equal width, can be unequal also, syntax in App.jsx 

---------------------------------------------------------------------------------------------

# responsiveness 
