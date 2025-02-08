function App() {

  return (
    <div>
      {/* <CardWrapper innerComponent={<TextComponent></TextComponent>}></CardWrapper>
      <CardWrapper innerComponent={<TextComponent2></TextComponent2>}></CardWrapper> */}
      <CardWrapper>
        hi there
      </CardWrapper>
      <CardWrapper>
        <TextComponent2></TextComponent2>
      </CardWrapper>
      <CardWrapper>
        <CardWrapper>
          hi there
        </CardWrapper>
      </CardWrapper>
    </div>
  )
}
//renders all under the component
function CardWrapper({children}){
  return <div style={{border: "2px solid black", padding: "20px"}}>
    {children} 
  </div>
}

// function TextComponent(){
//   return <div>
//     hii there
//   </div>
// }

function TextComponent2(){
  return <div>
    hii there from 2
  </div>
}

export default App
