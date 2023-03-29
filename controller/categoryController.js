const Category = require("../model/CatogoryModel");

// to add new category
exports.addCategory = async (req, res) => {
    let categoryToAdd = new Category({
        category_name: req.body.category_name,
    });
    categoryToAdd = await categoryToAdd.save();
    if (!categoryToAdd) {
        return res.status(400).json({ error: "something went wrong" });
    }
    res.send(categoryToAdd);
};

// to get all categories
exports.getAllCategories = async (req, res) => {
    let categories = await Category.find();
    if (!categories) {
        return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(categories);
};

// to get category details
exports.getCategoryDetails = async (req, res) => {
    let category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(category);
};

// to update category
exports.updateCategory = async (req, res) => {
    let categoryToUpdate = await Category.findByIdAndUpdate(
        req.params.id,
        { category_name: req.body.category_name },
        { new: true }
    );
    if (!categoryToUpdate) {
        return res.status(400).json({ error: "Something went wrong" });
    }
    res.send(categoryToUpdate);
};

// to delete category
exports.deleteCategory = (req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then((categoryToDelete) => {
            if (!categoryToDelete) {
                return res.status(400).json({ error: "Category not found" });
            }
            res.send({ message: "Category deleted sucessfully" });
        })
        .catch((err) => res.status(400).json({ error: err.message }));
};

// Model.find() => returns all documents/data in Model
// Model.find(filter) => returns all documents that match filter object
// Model.findById(id) => returns document with the id
// Model.findOne(filter) => returns first document that match the filter
// Model.findByIdAndUpdate(id,object,...) -> to update document
// Model.findByIdAndDelete(id) or Model.findByIdAndRemove(id) -> to delete document

// req.body -> data is passed using form
// req.params -> data is passed through url
// req.query -> data is passed through url using named parameters

// res.send(object) -> success      (succ. msg/or if sucess)
// res.status(200).json(object) -> success
// res.status(400).json(object) -> error
// 404 - page not found
// 400 - bad request
