function fetchFromLocalStorage(field) {
    return [...JSON.parse(localStorage.getItem(field))];
}

function storeInLocalStorage(field, data) {
    localStorage.setItem(field, JSON.stringify(data));
}
function updateLocalStorage(field, newData) {
    localStorage.setItem(field, JSON.stringify(newData));
}

export { fetchFromLocalStorage, storeInLocalStorage, updateLocalStorage };
