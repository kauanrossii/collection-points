var map = L.map('map').setView([-23.4251, -51.9382], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-23.4000, -51.9000]).addTo(map).bindPopup('Lar e Amor');
var marker2 = L.marker([-23.4200, -51.8900]).addTo(map).bindPopup('Coração Solidário');
var marker3 = L.marker([-23.4300, -51.9200]).addTo(map).bindPopup('Ajudar Sempre');
var marker4 = L.marker([-23.4400, -51.8800]).addTo(map).bindPopup('Mãos Amigas');
var marker5 = L.marker([-23.4500, -51.9300]).addTo(map).bindPopup('Esperança Viva');
var marker6 = L.marker([-23.4000, -51.9300]).addTo(map).bindPopup('Sorriso Solidário');
var marker7 = L.marker([-23.4300, -51.9600]).addTo(map).bindPopup('Paz e Bem');
var marker8 = L.marker([-23.4100, -51.9525]).addTo(map).bindPopup('Casa da Fraternidade');

const organizationLink = document.querySelector("#link-organizations");
const collectionsPointsLink = document.querySelector("#link-collection-points");
const mapLink = document.querySelector("#link-map");

const mapContainer = document.querySelector("#map");
const collectionPointsContainer = document.querySelector("#collection-points");
const organizationsContainer = document.querySelector("#organizations");

const contentContainers = [mapContainer, collectionPointsContainer, organizationsContainer];
const contentLinks = [organizationLink, collectionsPointsLink, mapLink];

let activeContainer = mapContainer;

contentLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        contentContainers.forEach(c => c.style.display = 'none');

        const selectedContent = e.target.id.replace("link-", "");
        const contentContainer = document.querySelector("#" + selectedContent);
    
        activeContainer = contentContainer;
        activeContainer.style.display = 'flex';

        if (e.target.id == "link-organizations") {
            getOrganizations();
        }
    })
});

function createOrganization(organization) {
    const liOrganization = document.createElement("li");
    const name = document.createElement("h2");
    const cnpj = document.createElement("p")

    name.textContent = organization.name;
    cnpj.textContent = organization.cnpj;

    const divOrganization = document.createElement("div");
    const divOrganizationText = document.createElement("div");
    const divOrganizationActions = document.createElement("div");

    divOrganizationText.appendChild(name);
    divOrganizationText.appendChild(cnpj);
    divOrganizationText.setAttribute("id", "organization-text")

    const createButton = document.createElement("button");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    divOrganizationActions.appendChild(createButton);
    divOrganizationActions.appendChild(editButton);
    divOrganizationActions.appendChild(deleteButton);
    divOrganizationActions.setAttribute("id", "organization-actions")


    divOrganization.appendChild(divOrganizationText);
    divOrganization.appendChild(divOrganizationActions);
    divOrganization.setAttribute("id", "organization-card-container")

    liOrganization.appendChild(divOrganization);
    return liOrganization;
}

async function getOrganizations() {
    const organizationList = document.querySelector("#organizations-list");
    const url = "http://localhost:3000/organization";
    const response = await fetch(url);
    const organizationsData = await response.json();
  
    organizationList.innerHTML = '';

    organizationsData.forEach(organization => {
      const li = createOrganization(organization);
      organizationList.appendChild(li);
    });
  }