import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <div className="title">
        <Header />
      </div>
      <div className="nav-div">
        <Navbar />
      </div>
      {/*<div className="me-div">
        <img className="me" src="me.jpg" alt="profile"/>
  </div>*/}
      <div className='about-div'>
        <p className="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, ante eget auctor congue, ligula libero accumsan ex, ut placerat mauris quam ac erat. Nullam quis ante vitae leo fermentum tristique. Aliquam at erat justo. Sed hendrerit dui risus, nec condimentum ex condimentum quis. Nam commodo, mauris a sollicitudin iaculis, quam nibh cursus ipsum, quis eleifend mauris tellus ut nisl. Aliquam erat volutpat. Praesent leo dolor, porta eget justo eget, varius luctus tellus. Vestibulum consequat nisi lorem, ut vestibulum magna pulvinar sit amet. In et ante id tortor sodales sodales.
        </p>
      </div>
    </div>
  );
}

export default App;
