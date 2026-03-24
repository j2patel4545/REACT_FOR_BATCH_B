function App(){

  let a = "Digifarm"
  const navoptions = ["contact","about","feedback"]


  return(
    <div className="w-screen flex justify-center h-10 text-amber-50 bg-black">
      <nav className=" w-[80%] flex justify-between items-center bg-black">
        <div>LOGO</div>
        <div className="flex gap-4">
          {navoptions.map((z)=>{
            return(
              
              <h2>{z}</h2>
              
            )
          })}
        </div>

      </nav>
    </div>
  )
}
export default App;