/* eslint-disable react/react-in-jsx-scope */


const CoffeeCard = ({coffee}) => {
    const {_id, name, photo, chef,category, supplier} = coffee;
    return (
        <div>
            <div className=" bg-base-200">
  <div className="flex-col lg:flex-row flex justify-around items-center">
    <img
      src={photo}
      className="w-[150px] rounded-lg shadow-2xl" />
      <div>
            <h3>Name: {name}</h3>
            <p>Chef: {chef}</p>
            <p>Supplier: {supplier}</p>
            <p>Category: {category}</p>
        </div>
    <div className=" py-4">
        
      
    <div className="join join-vertical ">
  <button className="btn join-item">Details</button>
  <button className="btn join-item">Update</button>
  <button className="btn join-item">Delete</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;