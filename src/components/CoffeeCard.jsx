/* eslint-disable react/react-in-jsx-scope */

import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, photo, chef, category, supplier } = coffee;

  const handleDeletecoffee = (_id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:3000/coffee/${_id}`,{
                   method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                          });
                    }

                })
         
        }
      });

    
    
        
            
          
  }
        
          

  return (
    <div>
      <div className=" bg-base-200">
        <div className="flex-col lg:flex-row flex justify-around items-center">
          <img src={photo} className="w-[150px] rounded-lg shadow-2xl" />
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
              <button
                onClick={() => handleDeletecoffee(_id)}
                className="btn join-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;


// Swal.fire({
//     title: "Deleted!",
//     text: "Your file has been deleted.",
//     icon: "success"
//   })

// if (result.isConfirmed) {   
//     fetch(`http://localhost:3000/coffee/${_id}`,{
//    method: "DELETE"
// })