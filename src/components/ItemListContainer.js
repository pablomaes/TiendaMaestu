import { render } from "@testing-library/react";
import Itemcount from "./ItemCount";

const ItemListContainer = ({titulo}) => {
    return (<>
     <h1>{titulo}</h1>
      
         <Itemcount stock = {10} initial = {1} />  
       
      </>  
    )
}; 

render(<ItemListContainer titulo="Encuentro Infusiones"/>,
document.getElementById('root'));




  


