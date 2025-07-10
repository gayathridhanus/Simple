import { Person } from "./Components/Person";
import './index.css'
function App() {
  return (
    <div className="App">
     <p>Person Details Database</p>
     <Person name="Gopika" age={17} CGPA={8.22} voting={false}/> 
     <Person name="Amirtha" age={19} CGPA={7.8} voting={true}/> 
     <Person name="Madhumitha" age={20} CGPA={8.8} voting={true}/> 
     <Person name="Eliz" age={17} CGPA={7.5} voting={false}/> 
     <Person name="Hepziba" age={19} CGPA={8.8} voting={true}/> 
     <p>Table Created Successfully</p>
    </div>
  );
}

export default App;
