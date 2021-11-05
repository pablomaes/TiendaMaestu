import { render } from "@testing-library/react";

const ItemListContainer = ({titulo}) => {
    return ( <h1>{titulo}</h1>
    )
}; 

render(<ItemListContainer titulo="Encuentro Infusiones"/>,
document.getElementById('root'));




  


