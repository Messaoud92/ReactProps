import Profile from "./profile/Profile";
import  image from "./imgdev.svg"
function App() {
  let fullname ='Messaoud SOUOID';
  let bio="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente pariatur impedit vitae optio consequatur iusto maxime quisquam molestias soluta, et dolores earum quo expedita nulla harum alias iure magnam.";
 let profession="Developer"
 
  return (
    <div className="App">
      <Profile fullname={fullname} bio={bio} profession={profession}>

<img src={image}/>   
   </Profile>
      
    </div>
  );
}

export default App;
