/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, chef, category, supplier } = coffee;

  const handleDeletecoffee = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              // Update state to remove deleted coffee
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting coffee:", error);
          });
      }
    });
  };

  return (
    <div className="bg-base-200 rounded-md shadow-md p-5">
      <div className="flex-col lg:flex-row flex justify-around items-center">
        <img src={photo} alt={name} className="w-[150px] rounded-lg shadow-2xl" />
        <div>
          <h3 className="font-semibold text-lg">Name: {name}</h3>
          <p>Chef: {chef}</p>
          <p>Supplier: {supplier}</p>
          <p>Category: {category}</p>
        </div>
        <div className="py-4">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">Details</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => handleDeletecoffee(_id)}
              className="btn join-item bg-orange-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
