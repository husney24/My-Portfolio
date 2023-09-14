// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// App.js or your main component
import React from 'react';
import Header from './component/Header';
import ContactSection from './component/ContactSection';
import MyWork from './component/MyWork';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <MyWork />
      <About />
      <ContactSection />
      <Footer />
      {/* Add other sections as needed */}
    </div>
  );
};

export default App;

