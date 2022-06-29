import Header from "./Final/Header";
import Table from "./Final/Table";
import Kontak from "./Final/Kontak";
import Favoweb from "./Final/Favoweb";
import Tujuan from "./Final/Tujuan";
import Label from "./Final/Label";

import './finalstyle.css';


export default function App(){
    return(<div className="App">
      
      <Header/>
      <Label/>
      <Kontak/>
      <Favoweb/>
      <Tujuan/>
      <Table/>
    
      </div>
      
    )
  }




