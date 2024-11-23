import "./App.scss"
import Footer from "./components/fotter/footer"
import ModularNavbar from './components/navbar/navbar'
import MainComponent from "./components/main/main"

function App() {
  return(
    <div className='app'>
      <ModularNavbar />
      <main>
        <MainComponent />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default App
