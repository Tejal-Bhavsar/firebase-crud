 import './App.css';
// import Contacts from './components/Contacts';
import JoinMe from './JoinMe'
import Users from './Users';

function App() {
  return (
    
    <div className="row">
      <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12">
       <JoinMe />
       </div>
       <div className="col-lg-6 col-lg-6 col-sm-12 col-md-12">
        <Users />
        </div>
      </div>
    
  );
}

export default App;
