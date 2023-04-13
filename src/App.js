import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Counter />
        <Footer />
      </header>
    </div>
  );
}

export default App;
