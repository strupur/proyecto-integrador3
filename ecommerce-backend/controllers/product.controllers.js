const Product = require('../models/product.model')


async function getProducts(req, res) {
    try {
        
        const products = await Product.find();

        
        if (products.length === 0) {
            return res.status(404).send({
                ok: false,
                message: "No se encontraron productos",
            });
        }

        
        return res.status(200).send({
            ok: true,
            message: "Productos obtenidos exitosamente",
            products,
        });

    } catch (error) {
        console.error(error);
        
        return res.status(500).send({
            ok: false,
            message: "Error al obtener los productos",
        });
    }
}


async function createProduct(req, res) {
    try {

        const product = new Product(req.body);

        if(req.file) {
            product.image = req.file.filename;
        }

        const newProduct = await product.save();

        return res.status(201).send({
            message: "Producto creado correctamente",
            product: newProduct

        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error al crear el producto" });

    }

}


async function getProductById(req, res) {
    try {
        const { id } = req.params;  

        const product = await Product.findById(id);  

        if (!product) {
            return res.status(404).send({
                message: "El producto no fue encontrado",
                ok: false
            });
        }

        return res.status(200).send({
            ok: true,
            message: "El producto fue encontrado",
            product
        });

    } catch (error) {
        console.log(error);

        return res.status(500).send("Error al obtener el producto en la DB");
    }
}




async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).send({
                message: "El producto no fue encontrado",
                ok: false
            });
        }

        return res.status(200).send({
            ok: true,
            message: "El producto fue eliminado exitosamente",
            product
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Error al eliminar el producto en la DB",
            ok: false
        });
    }
}



async function updateProduct(req, res) {
    try {
        const { id } = req.params;  

        let updateData = req.body; 

        if(req.file) updateData.image = req.file.filename;
     
        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({
                message: "El producto no fue encontrado",
                ok: false
            });
        }

        return res.status(200).send({
            ok: true,
            message: "El producto fue actualizado exitosamente",
            product: updatedProduct
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Error al actualizar el producto en la DB",
            ok: false
        });
    }
}


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct

}


