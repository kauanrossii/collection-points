function createOrganization(organization) {
    const trOrganization = document.createElement("tr");
    const name = document.createElement("td");
    const cnpj = document.createElement("td");

    const actions = document.createElement("td");
    actions.classList.add("actions-column");

    name.textContent = organization.name;
    cnpj.textContent = organization.cnpj;
    
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remover";
    
    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    
    trOrganization.appendChild(name);
    trOrganization.appendChild(cnpj);
    trOrganization.appendChild(actions);

    return trOrganization;
}

(async function getOrganizations() {
    const organizationList = document.querySelector("#organizations-table-body");
    const url = "http://localhost:3000/organization";
    const response = await fetch(url);
    const organizationsData = await response.json();

    organizationList.innerHTML = "";

    organizationsData.forEach(organization => {
      const li = createOrganization(organization);
      organizationList.appendChild(li);
    });
})();