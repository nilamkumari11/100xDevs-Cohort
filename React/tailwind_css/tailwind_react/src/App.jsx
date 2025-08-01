import "tailwindcss";
import './App.css'

function App() {

  //in react when in write inline css we create a object
  return (
    <>
      <div style={{display:"flex", justifyContent:"space-between"}}> 
        <div style={{backgroundColor:"red"}}>hii</div>
        <div style={{backgroundColor:"green"}}>hii</div>
        <div style={{backgroundColor:"yellow"}}>hii</div>
      </div>
      
<div className="flex bg-white-500">done by tailwindcss</div>

      <div className='flex justify-around'>
        <div className='bg-red-500'>hii</div>
        <div className='bg-yellow-500'>hii</div>
        <div className='bg-green-500'>hii</div>
      </div>

<div className="flex bg-white-500">grids</div>

      {/* // in one row it has 3 children in equal width thats why the next three go to the next line */}
      <div className='grid grid-cols-3'> 
        <div className='bg-red-500'>hii</div>
        <div className='bg-yellow-500'>hii</div>
        <div className='bg-green-500'>hii</div>
        <div className='bg-red-500'>hii</div>
        <div className='bg-yellow-500'>hii</div>
        <div className='bg-green-500'>hii</div>
      </div>

<div className="flex bg-white-500">unequal width grid </div>

      <div className='grid grid-cols-10'> 
        <div className='bg-red-500 col-span-5'>hii</div>
        <div className='bg-yellow-500 col-span-3'>hii</div>
        <div className='bg-green-500 col-span-2'>hii</div>
      </div>

<div className="flex bg-white-500">unequal width with flex</div>

      <div className='flex'> 
        <div className='bg-red-500 w-[40%]'>hii</div>
        <div className='bg-yellow-500 w-[40%]'>hii</div>
        <div className='bg-green-500 w-[20%]'>hii</div>
      </div>

<div className="flex bg-white-500">responsiveness</div>
{/* here it means by default it is red, but above md it will be blue */}
      <div className="bg-red-500 md:bg-blue-500">
          hi there 
      </div>

      {/* how to have 3 equally placed children, when go below md they go one below other  */}
<div className="flex bg-white-500">responsiveness task 1</div>

<div className="grid grid-cols-1 md:grid-cols-3">
  {/* green on dark theme */}
  <div className="bg-red-500 dark:bg-green-500">hi there</div> 
  <div className="bg-yellow-500">hi there</div>
  <div className="bg-green-500">hi there</div>
</div>

<div className="flex bg-white-500">font & colurs</div>
    <div className='bg-green-500 text-red-500 text-md'>hi there from div one</div>
    </>
  )
}

export default App
