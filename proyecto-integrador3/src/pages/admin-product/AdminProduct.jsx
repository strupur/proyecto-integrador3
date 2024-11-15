import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AdminTable from "../../components/admin-table/AdminTable";

import './AdminProduct.css';
import Swal from "sweetalert2";
import { useUser } from "../../context/UserContext";


const URL2 = import.meta.env.VITE_LOCAL_SERVER;


export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const { token, logout } = useUser();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([])

  const { register, setValue, reset, handleSubmit, formState: { errors, isValid } } = useForm();

  useEffect(() => {
    getProducts();
    getCategories();
  }, [])

  useEffect(() => {

    if (selectedProduct) {

      setValue("name", selectedProduct.name),
        setValue("price", selectedProduct.price),
        setValue("description", selectedProduct.description),
        setValue("image", selectedProduct.image),
        setValue("category", selectedProduct.category),
        setValue("createdAt", selectedProduct.createdAt)

    } else {
      reset()
    }

  }, [selectedProduct, setValue, reset])

  async function getCategories() {
    try {

      const response = await axios.get(`${URL2}/categories`);

      console.log(response.data);

      setCategories(response.data.categories)
      
    } catch (error) {
      console.log(error);
      alert("No se pudieron cargar las categorias")
    }
    
  }


  async function getProducts() {

    try {

      const response = await axios.get(`${URL2}/api/productos`);

      console.log(response.data);

      setProducts(response.data.products)

    } catch (error) {
      console.log(error);

    }

  }
  // !getProducts();

  function deleteProduct(identificador) {

    Swal.fire({
      title: "Borrar producto",
      text: "Realmente desea borrar este producto",
      icon: "warning",
      reverseButtons: true,
      showCancelButton: true,
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          
          const response = await axios.delete(`${URL2}/api/productos/${identificador}`, {
            headers: {
              Authorization: token
            }
          });

          console.log(response.data);

          getProducts();
        }
      } catch (error) {
        console.log(error)

        Swal.fire({
          title: "Error al borrar",
          text: "El producto no fue borrado",
          icon: "error"
        })
      }
    })

  }

  async function onProductSubmit(producto) {
    
    try {

      const formData = new FormData();
      formData.append("name", producto.name);
      formData.append("price", producto.price);
      formData.append("description", producto.description);
      formData.append("category", producto.category);

      if(producto.image[0]) {
        formData.append("image", producto.image[0]);
        
      }


      if (selectedProduct) {

        const { _id } = selectedProduct;
        const response = await axios.put(`${URL2}/api/productos/${_id}`, formData ,{headers: {
          Authorization: token
        }});
        console.log(response.data)
        Swal.fire({
          title: "Actualización correcta",
          text: "El producto fue actualizado correctamente",
          icon: "success",
          timer: 1500
        })

        setSelectedProduct(null)


      } else {

        const response = await axios.post(`${URL2}/api/productos`, formData ,{headers: {
          Authorization: token
        }})
        console.log(response.data);


      }

      Swal.fire({
        title: "Producto creado",
        text: "El producto fue creado correctamente",
        icon: "success",
        timer: 1500
      })

      getProducts();

    } catch (error) { 
      console.log(error)

    }

  }


  function handleEditProduct(producto) {

    console.log("Producto a editar", producto);
    setSelectedProduct(producto);

  }

  return (
    <>
      <div className="admin-container-adminProduct">

        <div className="form-container">
          <h1>AdminProduct</h1>
          <form className="admin-form" onSubmit={handleSubmit(onProductSubmit)}>

            <div className="input-group-adminProduct">
              <label htmlFor="name">Nombre producto</label>

              <input type="text" id="name"
                {...register("name", { required: true, minLength: 3 })
                } />

              {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}

              {errors.name?.type === "minLength" && <div className="input-error">Mínimo de carácteres es 3</div>}

            </div>

            <div className="input-group-adminProduct">
              Precio
              <input type="number" {...register("price", { required: true })} />

              {errors.price && <div className="input-error">El campo price es requerido</div>}
            </div>

            <div className="input-group-adminProduct">
              <label htmlFor="description">Descripción</label>
              <textarea {...register("description", { required: true })} rows={5}></textarea>
            </div>

            <div className="input-group-adminProduct">
              <label htmlFor="">Categoría</label>
              <select {...register("category", { required: true })}>\
                {
                  categories.map(cat => (
                    <option key={cat._id} value={cat.name}>{cat.viewValue}</option>
                  ))
                }
              </select>
            </div>

            <div className="input-group-adminProduct">
              <label htmlFor="createdAt">Fecha de ingreso</label>
              <input type="date" {...register("createdAt", { required: true })} />
            </div>

            <div className="input-group-adminProduct">
              <label htmlFor="">Imagen</label>
              <input accept="image/*" type="file" {...register("image", { required: true })} />
            </div>

            <button className={`btn ${selectedProduct && 'btn-success'}`}
              type="submit"
              disabled={!isValid}  >

              {
                selectedProduct ? "Editar" : "Crear"
              }

            </button>

          </form>
        </div>

        <div className="table-container">

          <AdminTable products={products}
            deleteProduct={deleteProduct}
            handleEditProduct={handleEditProduct}
          />

        </div>
      </div>

    </>
  )
}

