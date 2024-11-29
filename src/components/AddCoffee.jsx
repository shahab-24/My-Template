/* eslint-disable react/react-in-jsx-scope */
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee=(e)=> {
        e.preventDefault();
        

        const form = e.target;
        const name = form.coffee_name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const newCoffee = {name,chef,supplier,test,photo,category}
        console.log(newCoffee)

        fetch('http://localhost:3000/addCoffee', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Favourtie Coffee has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
  return (
    <div className="container mx-auto bg-gray-300 p-6">
        <h3 className="text-center mb-10 text-orange-500 text-2xl font-semibold">Add Coffee</h3>
      <form onSubmit={handleAddCoffee}>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full">
        <div className="w-full">
            
            <span className="text-black">Name</span>
          
          <input
            type="text"
            placeholder="Coffee Name"
            name="coffee_name"
            className="input w-full"
          />
        </div>

        <div className="w-full mb-4">
        <span className="text-black">Chef</span>
          <input
            type="text"
            placeholder="Chef name"
            name="chef"
            className="input w-full"
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
          />
        </div>

        <div className="w-full">
        <span className="text-black">Test</span>
          <input
            type="text"
            placeholder="Test"
            name="test"
            className="input w-full"
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
          />
        </div>

        <div className="w-full mb-">
        <span className="text-black">Photo</span>
          
          <input
            type="text"
            placeholder="photo url"
            name="photo"
            className="input w-full"
          />
        </div>
      </div>
      <div className="text-center text-black font-bold">
      <button className="btn btn-ghost text-center bg-orange-500">Add Coffee</button>
      </div>
      </form>
    </div>
  );
};

export default AddCoffee;
