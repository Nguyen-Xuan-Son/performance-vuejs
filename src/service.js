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

const initCategories = () => {
    const categories = [
        {
            id: 1,
            name: "Mobile",
            idCategory: "12mcqls1",
            product: [
                {
                    id: 1,
                    name: "Iphone 1"
                },
                {
                    id: 2,
                    name: "Iphone 3"
                }
            ]
        },
        {
            id: 2,
            name: "Tablet",
            idCategory: "87cskasc",
            product: [
                {
                    id: 1,
                    name: "Tablet 1"
                },
                {
                    id: 2,
                    name: "Tablet 3"
                }
            ]
        }
    ];
    localStorage.clear();
    saveCategories(categories);
};

export {
    initCategories,
    createCategory,
    getCategories
}
