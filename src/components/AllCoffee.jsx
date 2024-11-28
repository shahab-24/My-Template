/* eslint-disable react/react-in-jsx-scope */
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


const AllCoffee = () => {
    const loadedCoffee = useLoaderData()
    return (
        <div className="container mx-auto">
            <h3>coffee: {loadedCoffee.length}</h3>
            <div className="grid grid-cols-2 gap-4">
                {
                    loadedCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
            
        </div>
    );
};

export default AllCoffee;