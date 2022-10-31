
export const getBook = (url) => {
    return fetch(url)
    .then((response) => response.json())
    .catch((e) => console.log(e.message))
} 

export const postBook = (url, book) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then((response) => response.json())
    .catch((e) => console.log(e.message))
}

export const deleteBook = (url, id) => {
    return fetch(`${url}/${id}`, {
        method: "DELETE"
    })
    .then((response) => response.json())
    .catch((e) => console.log(e.message))
}