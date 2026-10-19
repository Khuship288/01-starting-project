// const reactDescriptions= ['Fundamental', 'crucial', 'Core']
// import reactImg from 
// "src/assets/react-core-concepts.png"
// function getRandomInt(max){
//   return math.floor(Math.random()*(max+1));
// }



// function App() {
//   return (
//     <div>
//       <header>
//         <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//         <h1>React Essentials</h1>
//         <p>
//           Fundamental React concepts you will need for almost any app you are
//           going to build!
//         </p>
//       </header>
//       <main>
//         <h2>Time to get started!</h2>
//       </main>
//     </div>
//   );
// }
// function Header(){
//   const descriptions= reactDescriptions[getRandomInt]
//   return(
//    <div>
//     <Header />
//     <main>
//       <h2>Time to get started</h2>
//     </main>
//     <UserData />
//     <Footer />
//    </div>
//   )

// }
// export default App;

import Header from './components/Header.jsx';
import UserData from './UserData.jsx';
import CoreConcept from './CoreConcept.jsx'; 
import { CORE_CONCEPTS } from './data.js';
function App(){
  return(
    <div>
    <Header/>
    <main>
      <section id= "core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
      </section>

    </main>
    </div>
  );
}

export default App;