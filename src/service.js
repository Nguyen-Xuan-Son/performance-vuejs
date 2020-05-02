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

const initCategories = () => {
    const categories = [
        {
            id: generateId(),
            name: "Mobile",
            depcription: "Depcription 1",
            product: [
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
            product: [
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
    updateCategoryById
}
