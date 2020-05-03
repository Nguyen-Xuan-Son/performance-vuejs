const generateId = () => {
    return Math.random().toString(36).substr(2, 11);
};

const getCategories = () => {
    return JSON.parse(localStorage.getItem("categories"));
};

const saveCategories = categories => {
    localStorage.setItem("categories", JSON.stringify(categories));
};

const createCategory = category => {
    const categories = getCategories();
    categories.push(category);
    saveCategories(categories);
};

const getCategoryById = categoryId => {
    const categories = getCategories();
    const category = categories.filter(category => category.id === categoryId)[0];
    return category;
};

const updateCategoryById = categoryUpdate => {
    const categories = getCategories();
    const indexCategory = categories.findIndex(category => category.id === categoryUpdate.id);
    categories.splice(indexCategory, 1, categoryUpdate);
    saveCategories(categories);
};

const deleteCategory = id => {
    const categories = getCategories();
    const indexCategory = categories.findIndex(category => category.id === id);
    categories.splice(indexCategory, 1);
    saveCategories(categories);
};

const deleteProductById = (categoryId, productId) => {
    const categories = getCategories();
    const category = categories.filter(category => category.id === categoryId)[0];
    const indexProduct = category.products.findIndex(product => product.id === productId);
    const indexCategory = categories.findIndex(category => category.id === categoryId);
    category.products.splice(indexProduct, 1);
    categories.splice(indexCategory, 1, category);
    saveCategories(categories);
};

const updateProductById = (categoryId, productUpdate) => {
    const categories = getCategories();
    const category = categories.filter(category => category.id === categoryId)[0];
    const indexProduct = category.products.findIndex(product => product.id === productUpdate.id);
    const indexCategory = categories.findIndex(category => category.id === categoryId);
    category.products.splice(indexProduct, 1, productUpdate);
    categories.splice(indexCategory, 1, category);
    saveCategories(categories);
};

const createProduct = (categoryId, productCreate) => {
    const categories = getCategories();
    const category = categories.filter(category => category.id === categoryId)[0];
    const indexCategory = categories.filter(category => category.id === categoryId);
    category.products.push(productCreate);
    categories.splice(indexCategory, 1, category);
    saveCategories(categories);
};

const initCategories = () => {
    const categories = [
        {
            id: generateId(),
            name: "Mobile",
            depcription: "Depcription 1",
            products: [
                {
                    id: generateId(),
                    name: "Iphone 1"
                },
                {
                    id: generateId(),
                    name: "Iphone 3"
                }
            ]
        },
        {
            id: generateId(),
            name: "Tablet",
            depcription: "Depcription 2",
            products: [
                {
                    id: generateId(),
                    name: "Tablet 1"
                },
                {
                    id: generateId(),
                    name: "Tablet 3"
                }
            ]
        }
    ];
    localStorage.clear();
    saveCategories(categories);
    return categories;
};

export {
    initCategories,
    createCategory,
    getCategories,
    generateId,
    deleteCategory,
    getCategoryById,
    updateCategoryById,
    deleteProductById,
    updateProductById,
    createProduct
}
