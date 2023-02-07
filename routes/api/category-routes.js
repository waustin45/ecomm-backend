const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.status(200).json(data)
  } catch (err){
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
   const data = await Category.create({
      category_name: req.body.category_name
    })
    res.status(200).json(data)
  }catch (err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const data = await Category.update({
       category_name: req.body.category_name
     },
     {
     where: {
      id: req.params.id
     }}
     )
     res.status(200).json(data)
   }catch (err){
     res.status(500).json(err);
   }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.destroy(
     {
     where: {
      id: req.params.id
     }}
     )
     res.status(200).json(data)
   }catch (err){
     res.status(500).json(err);
   }
});

module.exports = router;
