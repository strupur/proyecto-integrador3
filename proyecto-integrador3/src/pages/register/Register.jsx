import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"


import './Register.css';
import Swal from "sweetalert2";
import { useUser } from "../../context/UserContext";

const URL2 = import.meta.env.VITE_LOCAL_SERVER;


export default function Register() {
  const [products, setProducts] = useState([]);
  const { token, logout } = useUser();
  
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { register, setValue, reset, handleSubmit, formState: { errors, isValid } } = useForm();

  useEffect(() => {
    getProducts();
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


  async function getProducts() {

    try {

      const response = await axios.get(`${URL2}/api/users`);

      console.log(response.data);

      setProducts(response.data)

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
          const response = await axios.delete(`${URL2}/api/users/${identificador}` , {
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
    console.log(producto)
    try {

      if (selectedProduct) {

        const { _id } = selectedProduct;
        const response = await axios.put(`${URL2}/api/users/${_id}`, producto,{headers: {
          Authorization: token
        }}) ;
        console.log(response.data)
        Swal.fire({
          title: "Actualización correcta",
          text: "El producto fue actualizado correctamente",
          icon: "success",
          timer: 1500
        })

        setSelectedProduct(null)


      } else {

        const response = await axios.post(`${URL2}/api/users`, producto ,{headers: {
          Authorization: token
        }})
        console.log(response.data);

      }

      Swal.fire({
        title: "Usuario creado",
        text: "El usuario fue creado correctamente",
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
      <div className="admin-container-register">

        <div className="form-container">
          <h1 className="title-register">Registro</h1>
          <form className="admin-form" onSubmit={handleSubmit(onProductSubmit)}>

            <div className="input-group-register">
              <label htmlFor="">Imagen</label>
              <input type="url" {...register("image", { required: true })} />
            </div>

            <div className="input-group-register">
              <label htmlFor="name">Nombre Completo</label>

              <input type="text" id="name"
                {...register("name", { required: true, minLength: 3 })
                } />

              {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}

              {errors.name?.type === "minLength" && <div className="input-error">Mínimo de carácteres es 3</div>}

            </div>

            <div className="input-group-register">
              <label htmlFor="email">Correo Electronico</label>

              <input type="email" id="email"
                {...register("email", { required: true, minLength: 3 })
                } />

              {errors.email?.type === "required" && <div className="input-error">El campo es requerido</div>}

              {errors.email?.type === "minLength" && <div className="input-error">Mínimo de carácteres es 3</div>}

            </div>

            <div className="input-group-register">
              <label htmlFor="password">Contraseña</label>

              <input type="password" id="password"
                {...register("password", { required: true, minLength: 3 })
                } />

              {errors.password?.type === "required" && <div className="input-error">El campo es requerido</div>}

              {errors.password?.type === "minLength" && <div className="input-error">Mínimo de carácteres es 3</div>}

            </div>

            <div className="input-group-register">
              <label htmlFor="repeatpass">Repetir Contraseña</label>

              <input type="password" id="repeatpass"
                {...register("repeatpass", { required: true, minLength: 3 })
                } />

              {errors.repeatpass?.type === "required" && <div className="input-error">El campo es requerido</div>}

              {errors.repeatpass?.type === "minLength" && <div className="input-error">Mínimo de carácteres es 3</div>}

            </div>

            <div className="input-group-register">
              <label htmlFor="createdAt">Fecha de Nacimiento</label>
              <input type="date" {...register("createdAt")} />
            </div>

            <div className="input-group-register">
              <label htmlFor="">Seleccione su Pais</label>
              <select {...register("category", { required: true })}>\
                <option value=""></option>
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cuba">Cuba</option>
                <option value="Ecuador">Ecuador</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Haití">Haití</option>
                <option value="Honduras">Honduras</option>
                <option value="México">México</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Panamá">Panamá</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Perú">Perú</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="República Dominicana">República Dominicana</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>

            <div className="input-group-register">
              <label htmlFor="description">Observacíon</label>
              <textarea {...register("description", { required: true, minLength: 3 })} rows={5}></textarea>
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

      </div>

    </>
  )
}
