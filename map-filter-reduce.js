const products =[
    {id: 1, name:"product A",price:20, category:"Electronics"},
    {id: 2, name:"product B",price:30, category:"Clothing"},
    {id: 3, name:"product C",price:40, category:"Electronics"},
    {id: 4, name:"product D",price:20, category:"Clothing"},
    {id: 5, name:"product E",price:20, category:"Modeling"},
    ];

function App() {


    const electronicsProducts = products.filter((product) => product.category === "Electronics");
  
    const mapping = electronicsProducts.map((product) => (
      <div>
        {product.name} is of price {product.price}$ and the category is {product.category}
      </div>
    ));
    
 
    const Prices = products.reduce((acc,curr)=>{
       return  acc + curr.price ;
    },0);

return (
    <div>
       <p>Electronics</p> 
       {mapping}
    
    <p> total price = {Prices}</p>
    </div>
);

    }

   

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

