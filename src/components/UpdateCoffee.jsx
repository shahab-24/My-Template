/* eslint-disable react/react-in-jsx-scope */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, photo, chef, category, supplier, test } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.coffee_name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const newCoffee = { name, chef, supplier, test, photo, category };
    console.log(newCoffee);

    fetch(`http://localhost:3000/updateCoffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount>0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Favourtie Coffee has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="container mx-auto bg-gray-300 p-6">
      <h3 className="text-center text-white text-3xl font-semibold text-orange-500 mb-10">Update Coffee</h3>
      <form onSubmit={handleUpdateCoffee}>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full">
          <div className="w-full">
            <span className="text-black">Name</span>

            <input
              type="text"
              placeholder="Coffee Name"
              name="coffee_name"
              className="input w-full"
              defaultValue={name}
            />
          </div>

          <div className="w-full mb-4">
            <span className="text-black">Chef</span>
            <input
              type="text"
              placeholder="Chef name"
              name="chef"
              className="input w-full"
              defaultValue={chef}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full">
          <div className="w-full">
            <span className="text-black">Supplier</span>
            <input
              type="text"
              placeholder="Supplier"
              name="supplier"
              className="input w-full"
              defaultValue={supplier}
            />
          </div>

          <div className="w-full">
            <span className="text-black">Taste</span>
            <input
              type="text"
              placeholder="Taste"
              name="test"
              className="input w-full"
              defaultValue={test}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full">
          <div className="w-full mb-4">
            <span className="text-black">Category</span>

            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input w-full"
              defaultValue={category}
            />
          </div>

          <div className="w-full mb-">
            <span className="text-black">Photo</span>

            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input w-full"
              defaultValue={photo}
            />
          </div>
        </div>
        <div className="text-center text-black font-bold">
          <button className="btn btn-block btn-ghost text-center bg-orange-500 text-2xl">
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
