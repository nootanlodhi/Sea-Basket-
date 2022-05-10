import './App.css';
import Category from './components/Category';
import FaqsComponents from './components/FaqsComponents';
import Footer from './components/Footer';
import HaveARead from './components/HaveARead';
import Navbar from './components/Navbar';
import Topic from './components/Topic';

function App() {

    const item=[
      {
        id:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWIdpIMgh9ZOxJj5d6LAfRxvQOSMAvkdqew&usqp=CAU',
        heading:'FISH',
        mainhead:'The right quality'
      },
      {
        id:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUBYEyJ3c6GDDQXaQrhMNJrjxfPUyri5vlA&usqp=CAU',
        heading:'CRUSTACEANS',
        mainhead:'The right time'
      },
      {
        id:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzs0dyTWNvo2mIr7fNpbkMnZDiZIdg8bojQ&usqp=CAU',
        heading:'EXOTIC',
        mainhead:'The basis of a balanced diet'
      }
    ]

  return (
    <div className="App">
      <div className='inner-app'>
      <Navbar/>
      <Category item={item}/>
      <FaqsComponents/>
      <FaqsComponents/>
      <FaqsComponents/>
      <HaveARead item={item}/>
      <Topic/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
