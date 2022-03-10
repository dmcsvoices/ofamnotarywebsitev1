import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import VertNav from "./components/VertNav";
import Footer from './components/Footer';
import Article_Intro from './components/Article_Intro';
import Article_Services from './components/Article_Services';
import Article_Pricelist from './components/Article_Pricelist';
import ContactForm from './components/ContactForm'

function App() {
  
  return (
    <div className="mainBox">

      
      <Header />
      <div className="articleBox">
        <VertNav />

      <div className="App">
            <Article_Intro />
            <ContactForm />
            <Article_Services />
            <Article_Pricelist />
            
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
