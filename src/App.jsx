
import './App.css'
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import Header from './components/Header';
import Inicio from './components/Inicio';
import MiApi from './components/MiApi';



function App(){

return (
  <>
   <Header/>
   <Cuerpo/>
   <MiApi></MiApi>
   <div className='footer'>
   <Footer
   classN={"bg-dark text-white text-center p-3"}
   text={"Noviembre 2023. Todos los derechos reservados."}
   ></Footer>
   </div>     
  </>
  );
                                                      
};

export default App
