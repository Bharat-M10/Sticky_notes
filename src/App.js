import { useState } from "react";
import InputForm from './Components/inputForm';
import Card from "./Components/card";
import './App.css';

function App() {
  const [newData,setnewData]=useState([]);
const saveDataList=data=>{
  setnewData([...newData,{
    id:newData.length+1,
    value:data
  }]);
  console.log(newData)
  };
  
  



  
  return (
  <div>
<InputForm onSaveTask={saveDataList}></InputForm>

{newData.map(dataItem=>(<div className="set">
  
  <Card data={dataItem} ></Card></div>
))}

</div>
);
}

export default App;
