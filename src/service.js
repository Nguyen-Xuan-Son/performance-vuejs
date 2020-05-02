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

const deleteCategory = id => {
    const categories = getCategories();
    const indexCategory = categories.findIndex(category => {
        return category.id === id;
    });
    categories.splice(indexCategory, 1);
    console.log("categories", categories);
    saveCategories(categories);
};

const initCategories = () => {
    const categories = [
        {
            id: generateId(),
            name: "Mobile",
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
    deleteCategory
}
