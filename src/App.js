import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location} from "./pages";


function App(){
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}>
             <Route path="services" element={<Services />}/>
             <Route path="history" element={<CompanyHistory />}/>
             <Route path="location" element={<Location />}/>
          </Route>
          <Route path="/events" element={<Events />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Whoops404 />}/>
       </Routes>
    </div>
  );
}
// function Header(props) {
//   // console.log(props)
//   return(
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//     </header>
//   );
// }

// function Main(props) {
//   return(
//     <section>
//     <p>We serve the most {props.adjective} food around the world.</p>
//     <img src="https://miro.medium.com/max/1400/0*da7aKNrewcGK1osR" height={200} alt="chairs and table at restaurent" />
//     <ul style={{textAlign: "left"}}>
//       {props.dishes.map((dish)=>
//       <li key={dish.id}>{dish.title}</li>)}
//     </ul>
//     </section>
//   );
// }

// function Footer(props){
//   return(
//     <footer>
//       <p>Copyright {props.year}</p>
//     </footer>
//   )
// }

// const dishes=[
//   "macaroni and Cheese",
//   "Samon",
//   "Tofu with vegetables",
//   "Minestrone"
// ];

// const dishObjects= dishes.map((dish, i)=>({id: i, title: dish}));
// console.log(dishObjects);

// function SecretComponent(){
//   return <h1>Super secret information for authorized users only</h1>
// }

// function RegularComponent(){
//   return <h1>Everyone can see this component.</h1>
// }
//https://api.github.com/users/defunkt
// function App({login}) {
//     const [data, setData] =useState(null);
//     const [loading, setLoading] =useState(false);
//     const [error, setError] =useState(null);

//     useEffect(()=>{
//       if(!login) return;
//       setLoading(true);
//       fetch(`https://api.github.com/users/${login}`)
//       .then((response) => response.json())
//       .then(setData)
//       .then(()=> setLoading(false))
//       .catch(setError);
//     }, [login]);

//     if(loading) return <h1>Loading...</h1>;
//     if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//     if(!data) return null;

//     if(data){
//       return(
//         <div>
//           <h1>{data.name}</h1>
//           <p>{data.location}</p>
//           <img alt={data.login} src={data.avatar_url}/>
//         </div>
//       )
//     } 
    // const [emotion, setEmotion] = useState("happy");
    // const [secondary, setSecondary] = useState("tired");

    // console.log(secondary);
    // console.log(emotion);

    // useEffect(() => {
    //   console.log(`It's ${emotion} right now`);
    // },[emotion]);
    // useEffect(() => {
    //   console.log(`It's ${secondary} right now`);
    // },[secondary]);
    // const [checked, setChecked] = useReducer(
    //   (checked) => !checked, false);
    // return(
    //   <div className="App">
    //     <input type="checkbox" value={checked} onChange={setChecked} />
    //     <label>
    //       {checked ? "checked" : "not checked"}
    //     </label>
    //   </div>
      // <>
      // {props.authorized ? <SecretComponent /> : <RegularComponent />} 
      // <h1>Current emotion is {emotion}</h1>
      // <button onClick={()=>setEmotion("frustrated")}>Frustrate</button>
      // <button onClick={()=>setEmotion("enthusiastic")}>Enthusiated</button>
      // <button onClick={()=>setEmotion("happy")}>Happy</button>
      // <h1>Secondary emotion is {secondary}</h1>
      // <button onClick={()=> setSecondary("gratefull")}>Greatful</button>
      
      // </>
      
     
  // return (
  //   <div className="App">
  //    <Header name="Raja" />
  //    <Main  adjective="amazing" dishes={dishObjects}/>
  //    <Footer year={new Date().getFullYear()}/>
  //   </div>
  // );
// }

export default App;
