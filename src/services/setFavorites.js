const handleFavClick = id => {
    if (localStorage.getItem("favs")) {
        const favsArray = JSON.parse(localStorage.getItem("favs")).ids;
        favsArray.push(id);
        favsArray
            ? localStorage.setItem("favs", JSON.stringify({ ids: favsArray }))
            : localStorage.setItem("favs", JSON.stringify({ ids: [id] }));
    } else {
        localStorage.setItem("favs", JSON.stringify({ ids: [id] }));
    }
};

export default handleFavClick;
