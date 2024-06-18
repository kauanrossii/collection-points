function createCollectionPoint(collectionPoint) {
    const trCollectionPoint = document.createElement("tr");
    console.log(collectionPoint)

    const state = document.createElement("td");
    const city = document.createElement("td");
    const street = document.createElement("td");
    const CEP = document.createElement("td");
    const categories = document.createElement("td");
    const organization = document.createElement("td");

    const actions = document.createElement("td");
    actions.classList.add("actions-column");

    state.textContent = collectionPoint.state;
    city.textContent = collectionPoint.city;
    street.textContent = collectionPoint.street;
    CEP.textContent = collectionPoint.zipCode;
    organization.textContent = collectionPoint.organization.name;
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
    trCollectionPoint.appendChild(organization);
    trCollectionPoint.appendChild(categories);
    trCollectionPoint.appendChild(actions);

    return trCollectionPoint;
}

async function getCollectionPoints() {
    const url = "http://localhost:3000/collection-point";
    const response = await fetch(url);
    return await response.json();
}

(async function populateCollectionPointTable() {
    const collectionPoints = await getCollectionPoints();
    const collectionPointsBody = document.querySelector("#collection-points-table-body");
    collectionPointsBody.innerHTML = "";

    collectionPoints.forEach(collectionPoint => {
        const tr = createCollectionPoint(collectionPoint);
        collectionPointsBody.appendChild(tr);
    });
})();

function translateCategories(categories) {
    const categoriesTranslation = { "Foods": "Alimentos", "Clothes": "Roupas", "Toys": "Brinquedos", "Hygiene": "Higiene" }
    const translatedCategories = categories
        .map((categorie) => categoriesTranslation[categorie])
        .toString();
    return translatedCategories.replace(",", ", ");
}

async function openCollectionPointDialog() {
    const dialog = document.querySelector("#add-item-dialog");
    dialog.setAttribute("open", "true");
    dialog.style.display = 'flex';

    const url = "http://localhost:3000/organization";
    const response = await fetch(url);
    const organizations = await response.json();
    const selectOrganizationElement = document.querySelector("#select-organization");

    organizations.forEach((organization) => {
        const option = document.createElement("option");
        option.value = organization.id;
        option.textContent = organization.name;
        selectOrganizationElement.appendChild(option);
    })
}

function closeDialog(event) {
    event.preventDefault();
    const dialog = document.querySelector("#add-item-dialog");
    dialog.style.display = 'none';
}

async function addCollectionPoint(event) {
    event.preventDefault();

    const formElement = document.querySelector("#collection-points-form");
    const formData = new FormData(formElement);

    await fetch("http://localhost:3000/collection-point", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            state: formData.get("state"),
            city: formData.get("city"),
            street: formData.get("street"),
            zipCode: formData.get("zip-code"),
            x: formData.get("x"),
            y: formData.get("y"),
            organization: formData.get("organization"),
            donationCategories: getCategoriesFromFormData(formData)
        })
    });

    document.location = document.location;
}

function getCategoriesFromFormData(formData) {
    const categories = [];
    const foods = formData.get("foods");
    const clothes = formData.get("clothes");
    const toys = formData.get("toys");
    const hygiene = formData.get("hygiene");

    if (foods) categories.push("Foods");
    if (clothes) categories.push("Clothes");
    if (toys) categories.push("Toys");
    if (hygiene) categories.push("Hygiene");

    return categories;
}