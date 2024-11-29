/* eslint-disable react/react-in-jsx-scope */
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const AllCoffee = () => {
    const loadedCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffee);
    return (
        <div className="container mx-auto">
            <h3>coffee: {loadedCoffee.length}</h3>
            <div className="grid grid-cols-2 gap-4">
                {
                coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
            
        </div>
    );
};

export default AllCoffee;
