const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/product.controllers');

const upload = require('../middlewares/uploadFile');
const validation = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

router.get("/api/productos",  productControllers.getProducts);
router.post("/api/productos", [validation, isAdmin], [ upload ], productControllers.createProduct);
router.get("/api/productos/:id", productControllers.getProductById);
router.delete("/api/productos/:id", [validation, isAdmin], productControllers.deleteProduct);
router.put("/api/productos/:id", [validation, isAdmin], [ upload ], productControllers.updateProduct);


module.exports = router;