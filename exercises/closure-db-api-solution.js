const init = () => {
    const db = [];

    const create = (newElement) => {
        db.push(newElement);
        return db.length;
    };

    return create;
};

console.log(init()());