function createCollectionPoint(collectionPoint) {
    const trCollectionPoint = document.createElement("tr");

    const state = document.createElement("td");
    const city = document.createElement("td");
    const street = document.createElement("td");
    const CEP = document.createElement("td");
    const categories = document.createElement("td");

    const actions = document.createElement("td");
    actions.classList.add("actions-column");

    state.textContent = collectionPoint.state;
    city.textContent = collectionPoint.city;
    street.textContent = collectionPoint.street;
    CEP.textContent = collectionPoint.zipCode;
    categories.textContent = translateCategories(collectionPoint.donationCategories);
    
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remover";
    
    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    
    trCollectionPoint.appendChild(state);
    trCollectionPoint.appendChild(city);
    trCollectionPoint.appendChild(street);
    trCollectionPoint.appendChild(CEP);
    trCollectionPoint.appendChild(categories);
    trCollectionPoint.appendChild(actions);

    return trCollectionPoint;
}

(async function getCollectionPoints() {
    const collectionPointsBody = document.querySelector("#collection-points-table-body");
    const url = "http://localhost:3000/collection-point";
    const response = await fetch(url);
    const collectionPointData = await response.json();

    collectionPointsBody.innerHTML = "";

    collectionPointData.forEach(collectionPoint => {
      const tr = createCollectionPoint(collectionPoint);
      collectionPointsBody.appendChild(tr);
    });
})();

function translateCategories(categories) {
    const categoriesTranslation = {"Foods": "Alimentos", "Clothes": "Roupas", "Toys": "Brinquedos", "Hygiene": "Higiene"}
    const translatedCategories = categories
        .map((categorie) => categoriesTranslation[categorie])
        .toString();
    return translatedCategories.replace(",", ", ");
}