// Firestore
const inventoryList = document.getElementById("inventory");
var selectedItemId;
var selectedItemCollection;

function renderReactivos(doc) {
  let itemContainer = document.createElement("div");
  let itemDescriptionContainer = document.createElement("div");
  let cas = document.createElement("p");
  let description = document.createElement("p");
  let purity = document.createElement("p");
  let brand = document.createElement("p");
  let location = document.createElement("p");
  let unit = document.createElement("p");
  let quantity = document.createElement("p");
  let type = document.createElement("p");
  let container = document.createElement("p");
  let detailLink = document.createElement("div");
  let detailLinkIcon = document.createElement("i");

  itemContainer.setAttribute("data-id", doc.id);
  itemContainer.classList.add("inv__item");
  itemContainer.classList.add("reactive");
  description.classList.add("item-name");
  cas.textContent = "CAS: " + doc.data().CAS;
  description.textContent = doc.data().descripcion;
  purity.textContent = "Pureza: " + doc.data().pureza;
  brand.textContent = "Marca: " + doc.data().marca;
  location.textContent = "Ubicación: " + doc.data().ubicacion;
  unit.textContent = "Unidad: " + doc.data().unidad;
  quantity.textContent = "Cantidad: " + doc.data().cantidad;
  type.textContent = "Tipo: " + doc.data().tipo;
  container.textContent = "Contenedor: " + doc.data().contenedor;
  detailLinkIcon.classList.add("uil");
  detailLinkIcon.classList.add("uil-arrow-circle-right");

  detailLink.addEventListener("click", function () {
    selectedItemId = doc.id;
    selectedItemCollection = "reactivos";
    presentItem();
  });

  itemDescriptionContainer.appendChild(cas);
  itemDescriptionContainer.appendChild(description);
  itemDescriptionContainer.appendChild(purity);
  itemDescriptionContainer.appendChild(brand);
  itemDescriptionContainer.appendChild(location);
  itemDescriptionContainer.appendChild(unit);
  itemDescriptionContainer.appendChild(quantity);
  itemDescriptionContainer.appendChild(type);
  itemDescriptionContainer.appendChild(container);
  itemContainer.appendChild(itemDescriptionContainer);
  detailLink.appendChild(detailLinkIcon);
  itemContainer.appendChild(detailLink);

  inventoryList.appendChild(itemContainer);
}

function renderVidrio(doc) {
  let itemContainer = document.createElement("div");
  let itemDescriptionContainer = document.createElement("div");
  let description = document.createElement("p");
  let brand = document.createElement("p");
  let location = document.createElement("p");
  let unit = document.createElement("p");
  let quantity = document.createElement("p");
  let type = document.createElement("p");
  let detailLink = document.createElement("div");
  let detailLinkIcon = document.createElement("i");

  itemContainer.setAttribute("data-id", doc.id);
  itemContainer.classList.add("inv__item");
  itemContainer.classList.add("glass");
  description.classList.add("item-name");
  description.textContent = doc.data().descripcion;
  brand.textContent = "Marca: " + doc.data().marca;
  location.textContent = "Ubicación: " + doc.data().ubicacion;
  unit.textContent = "Unidad: " + doc.data().unidad;
  quantity.textContent = "Cantidad: " + doc.data().cantidad;
  type.textContent = "Tipo: " + doc.data().tipo;
  detailLinkIcon.classList.add("uil");
  detailLinkIcon.classList.add("uil-arrow-circle-right");

  detailLink.addEventListener("click", function () {
    selectedItemId = doc.id;
    selectedItemCollection = "vidrio";
    presentItem();
  });

  itemDescriptionContainer.appendChild(description);
  itemDescriptionContainer.appendChild(brand);
  itemDescriptionContainer.appendChild(location);
  itemDescriptionContainer.appendChild(unit);
  itemDescriptionContainer.appendChild(quantity);
  itemDescriptionContainer.appendChild(type);
  itemContainer.appendChild(itemDescriptionContainer);
  detailLink.appendChild(detailLinkIcon);
  itemContainer.appendChild(detailLink);

  inventoryList.appendChild(itemContainer);
}

function renderMateriales(doc) {
  let itemContainer = document.createElement("div");
  let itemDescriptionContainer = document.createElement("div");
  let description = document.createElement("p");
  let location = document.createElement("p");
  let quantity = document.createElement("p");
  let detailLink = document.createElement("div");
  let detailLinkIcon = document.createElement("i");

  itemContainer.setAttribute("data-id", doc.id);
  itemContainer.classList.add("inv__item");
  itemContainer.classList.add("material");
  description.classList.add("item-name");
  description.textContent = doc.data().descripcion;
  location.textContent = "Ubicación: " + doc.data().ubicacion;
  quantity.textContent = "Cantidad: " + doc.data().cantidad;
  detailLinkIcon.classList.add("uil");
  detailLinkIcon.classList.add("uil-arrow-circle-right");

  detailLink.addEventListener("click", function () {
    selectedItemId = doc.id;
    selectedItemCollection = "materiales";
    presentItem();
  });

  itemDescriptionContainer.appendChild(description);
  itemDescriptionContainer.appendChild(location);
  itemDescriptionContainer.appendChild(quantity);
  itemContainer.appendChild(itemDescriptionContainer);
  detailLink.appendChild(detailLinkIcon);
  itemContainer.appendChild(detailLink);

  inventoryList.appendChild(itemContainer);
}

function renderEquipos(doc) {
  let itemContainer = document.createElement("div");
  let itemDescriptionContainer = document.createElement("div");
  let description = document.createElement("p");
  let brand = document.createElement("p");
  let location = document.createElement("p");
  let detailLink = document.createElement("div");
  let detailLinkIcon = document.createElement("i");

  itemContainer.setAttribute("data-id", doc.id);
  itemContainer.classList.add("inv__item");
  itemContainer.classList.add("equipment");
  description.classList.add("item-name");
  description.textContent = doc.data().descripcion;
  brand.textContent = "Marca: " + doc.data().marca;
  location.textContent = "Ubicación: " + doc.data().ubicacion;
  detailLinkIcon.classList.add("uil");
  detailLinkIcon.classList.add("uil-arrow-circle-right");

  detailLink.addEventListener("click", function () {
    selectedItemId = doc.id;
    selectedItemCollection = "equipos";
    presentItem();
  });

  itemDescriptionContainer.appendChild(description);
  itemDescriptionContainer.appendChild(brand);
  itemDescriptionContainer.appendChild(location);
  itemContainer.appendChild(itemDescriptionContainer);
  detailLink.appendChild(detailLinkIcon);
  itemContainer.appendChild(detailLink);

  inventoryList.appendChild(itemContainer);
}

const db = firebase.firestore();

db.collection("reactivos")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      renderReactivos(doc);
      console.log(doc.data());
    });
  });

db.collection("vidrio")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      renderVidrio(doc);
      console.log(doc.data());
    });
  });

db.collection("materiales")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      renderMateriales(doc);
      console.log(doc.data());
    });
  });

db.collection("equipos")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      renderEquipos(doc);
      console.log(doc.data());
    });
  });

// jQuery (filter items)
$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".inv__item").show("1000");
    } else {
      $(".inv__item")
        .not("." + value)
        .hide("1000");
      $(".inv__item")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

function renderModalContent() {
  let itemDetailContainer = document.getElementById("item-detail-container");
  let modalBackground = document.createElement("div");
  modalBackground.id = "modal-container";
  modalBackground.classList.add("modal-background");
  itemDetailContainer.appendChild(modalBackground);

  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalBackground.appendChild(modalContent);

  let docRef = db.collection(selectedItemCollection).doc(selectedItemId);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());

        switch (selectedItemCollection) {
          case "reactivos":
            let reactivosItemDetailContainer = document.createElement("div");
            let reactivosLeftContainer = document.createElement("div");
            let reactivosRightContainer = document.createElement("div");
            let reactivosCas = document.createElement("p");
            let reactivosDescription = document.createElement("p");
            let reactivosPurity = document.createElement("p");
            let reactivosBrand = document.createElement("p");
            let reactivosLocation = document.createElement("p");
            let reactivosUnit = document.createElement("p");
            let reactivosQuantity = document.createElement("p");
            let reactivosType = document.createElement("p");
            let reactivosContainer = document.createElement("p");
            let reactivosButtonsContainer = document.createElement("div");
            let reactivosCloseButtonContainer = document.createElement("div");
            let reactivosCloseButton = document.createElement("div");
            let reactivosNotificationButtonContainer =
              document.createElement("div");
            let reactivosNotificationButton = document.createElement("a");
            let reactivosCompactScreenCloseButton =
              document.createElement("div");
            let reactivosCompactScreenNotificationButton =
              document.createElement("a");

            reactivosItemDetailContainer.classList.add("inv__item__detail");
            reactivosLeftContainer.classList.add("left");
            reactivosRightContainer.classList.add("right");
            reactivosButtonsContainer.classList.add("buttons-container");
            reactivosCloseButtonContainer.classList.add(
              "close-button-container"
            );
            reactivosNotificationButtonContainer.classList.add(
              "close-button-container"
            );
            reactivosCloseButton.classList.add("close-button");
            reactivosNotificationButton.classList.add("notification-button");
            reactivosCompactScreenCloseButton.classList.add(
              "compact-screen-close-button"
            );
            reactivosCompactScreenNotificationButton.classList.add(
              "compact-screen-notification-button"
            );
            reactivosCas.textContent = "CAS: " + doc.data().CAS;
            reactivosDescription.textContent = doc.data().descripcion;
            reactivosPurity.textContent = "Pureza: " + doc.data().pureza;
            reactivosBrand.textContent = "Marca: " + doc.data().marca;
            reactivosLocation.textContent =
              "Ubicación: " + doc.data().ubicacion;
            reactivosUnit.textContent = "Unidad: " + doc.data().unidad;
            reactivosQuantity.textContent = "Cantidad: " + doc.data().cantidad;
            reactivosType.textContent = "Tipo: " + doc.data().tipo;
            reactivosContainer.textContent =
              "Contenedor: " + doc.data().contenedor;
            reactivosCloseButton.textContent = "Cerrar";
            reactivosCompactScreenCloseButton.textContent = "Cerrar";
            reactivosNotificationButton.textContent = "Por acabarse";
            reactivosCompactScreenNotificationButton.textContent =
              "Por acabarse";

            reactivosCloseButton.addEventListener("click", closeModal);
            reactivosCompactScreenCloseButton.addEventListener(
              "click",
              closeModal
            );
            reactivosNotificationButton.href = `mailto:prueba@gmail.com?subject=Material del laboratorio apunto de acabarse&body=Queda poco ${
              doc.data().descripcion
            }`;

            reactivosLeftContainer.appendChild(reactivosCas);
            reactivosLeftContainer.appendChild(reactivosDescription);
            reactivosLeftContainer.appendChild(reactivosPurity);
            reactivosLeftContainer.appendChild(reactivosBrand);
            reactivosLeftContainer.appendChild(reactivosLocation);
            reactivosLeftContainer.appendChild(reactivosUnit);
            reactivosLeftContainer.appendChild(reactivosQuantity);
            reactivosLeftContainer.appendChild(reactivosType);
            reactivosButtonsContainer.appendChild(
              reactivosCloseButtonContainer
            );
            reactivosButtonsContainer.appendChild(
              reactivosNotificationButtonContainer
            );
            reactivosCloseButtonContainer.appendChild(reactivosCloseButton);
            reactivosNotificationButtonContainer.appendChild(
              reactivosNotificationButton
            );
            reactivosLeftContainer.appendChild(reactivosContainer);
            reactivosLeftContainer.appendChild(reactivosButtonsContainer);

            reactivosItemDetailContainer.append(reactivosLeftContainer);
            reactivosItemDetailContainer.append(reactivosRightContainer);
            reactivosItemDetailContainer.append(
              reactivosCompactScreenCloseButton
            );
            reactivosItemDetailContainer.append(
              reactivosCompactScreenNotificationButton
            );

            modalContent.appendChild(reactivosItemDetailContainer);
            break;
          case "vidrio":
            let vidriosItemDetailContainer = document.createElement("div");
            let vidriosLeftContainer = document.createElement("div");
            let vidriosRightContainer = document.createElement("div");
            let vidriosLeftContentContainer = document.createElement("div");
            let vidriosDescription = document.createElement("p");
            let vidriosLocation = document.createElement("p");
            let vidriosBrand = document.createElement("p");
            let vidriosUnit = document.createElement("p");
            let vidriosQuantity = document.createElement("p");
            let vidriosType = document.createElement("p");
            let vidriosCloseButtonContainer = document.createElement("div");
            let vidriosCloseButton = document.createElement("div");
            let vidriosCompactScreenCloseButton = document.createElement("div");

            vidriosItemDetailContainer.classList.add("inv__item__detail");
            vidriosLeftContainer.classList.add("left");
            vidriosRightContainer.classList.add("right");
            vidriosLeftContentContainer.classList.add("left-content-ontainer");
            vidriosCloseButtonContainer.classList.add("close-button-container");
            vidriosCloseButton.classList.add("close-button");
            vidriosCompactScreenCloseButton.classList.add(
              "compact-screen-close-button"
            );
            vidriosDescription.textContent = doc.data().descripcion;
            vidriosBrand.textContent = "Marca: " + doc.data().marca;
            vidriosLocation.textContent = "Ubicación: " + doc.data().ubicacion;
            vidriosUnit.textContent = "Unidad: " + doc.data().unidad;
            vidriosQuantity.textContent = "Cantidad: " + doc.data().cantidad;
            vidriosType.textContent = "Tipo: " + doc.data().tipo;

            vidriosCloseButton.textContent = "Cerrar";
            vidriosCompactScreenCloseButton.textContent = "Cerrar";

            vidriosCloseButton.addEventListener("click", closeModal);
            vidriosCompactScreenCloseButton.addEventListener(
              "click",
              closeModal
            );

            vidriosLeftContentContainer.appendChild(vidriosDescription);
            vidriosLeftContentContainer.appendChild(vidriosBrand);
            vidriosLeftContentContainer.appendChild(vidriosLocation);
            vidriosLeftContentContainer.appendChild(vidriosUnit);
            vidriosLeftContentContainer.appendChild(vidriosQuantity);
            vidriosLeftContentContainer.appendChild(vidriosType);
            vidriosCloseButtonContainer.appendChild(vidriosCloseButton);
            vidriosLeftContainer.appendChild(vidriosLeftContentContainer);
            vidriosLeftContainer.appendChild(vidriosCloseButtonContainer);

            vidriosItemDetailContainer.appendChild(vidriosLeftContainer);
            vidriosItemDetailContainer.appendChild(vidriosRightContainer);
            vidriosItemDetailContainer.appendChild(
              vidriosCompactScreenCloseButton
            );

            modalContent.appendChild(vidriosItemDetailContainer);
            break;
          case "materiales":
            let materialesItemDetailContainer = document.createElement("div");
            let materialesLeftContainer = document.createElement("div");
            let materialesRightContainer = document.createElement("div");
            let materialesLeftContentContainer = document.createElement("div");
            let materialesDescription = document.createElement("p");
            let materialesLocation = document.createElement("p");
            let materialesQuantity = document.createElement("p");
            let materialesItemImage = document.createElement("img");
            let materialesCloseButtonContainer = document.createElement("div");
            let materialesCloseButton = document.createElement("div");
            let materialesCompactScreenCloseButton =
              document.createElement("div");

            materialesItemDetailContainer.classList.add("inv__item__detail");
            materialesLeftContainer.classList.add("left");
            materialesRightContainer.classList.add("right");
            materialesLeftContentContainer.classList.add(
              "left-content-ontainer"
            );
            materialesCloseButtonContainer.classList.add(
              "close-button-container"
            );
            materialesCloseButton.classList.add("close-button");
            materialesCompactScreenCloseButton.classList.add(
              "compact-screen-close-button"
            );
            materialesDescription.textContent = doc.data().descripcion;
            materialesLocation.textContent =
              "Ubicación: " + doc.data().ubicacion;
            materialesQuantity.textContent = "Cantidad: " + doc.data().cantidad;
            materialesItemImage.src = doc.data().imagen;

            materialesCloseButton.textContent = "Cerrar";
            materialesCompactScreenCloseButton.textContent = "Cerrar";

            materialesCloseButton.addEventListener("click", closeModal);
            materialesCompactScreenCloseButton.addEventListener(
              "click",
              closeModal
            );

            materialesLeftContentContainer.appendChild(materialesDescription);
            materialesLeftContentContainer.appendChild(materialesLocation);
            materialesLeftContentContainer.appendChild(materialesQuantity);
            materialesCloseButtonContainer.appendChild(materialesCloseButton);
            materialesLeftContainer.appendChild(materialesLeftContentContainer);
            materialesLeftContainer.appendChild(materialesCloseButtonContainer);

            materialesRightContainer.appendChild(materialesItemImage);
            materialesItemDetailContainer.appendChild(materialesLeftContainer);
            materialesItemDetailContainer.appendChild(materialesRightContainer);
            materialesItemDetailContainer.appendChild(
              materialesCompactScreenCloseButton
            );

            modalContent.appendChild(materialesItemDetailContainer);
            break;
          case "equipos":
            let equiposItemDetailContainer = document.createElement("div");
            let equiposLeftContainer = document.createElement("div");
            let equiposRightContainer = document.createElement("div");
            let equiposLeftContentContainer = document.createElement("div");
            let equiposDescription = document.createElement("p");
            let equiposBrand = document.createElement("p");
            let equiposLocation = document.createElement("p");
            let equiposItemImage = document.createElement("img");
            let equiposCloseButtonContainer = document.createElement("div");
            let equiposCloseButton = document.createElement("div");
            let equiposCompactScreenCloseButton = document.createElement("div");

            equiposItemDetailContainer.classList.add("inv__item__detail");
            equiposLeftContainer.classList.add("left");
            equiposRightContainer.classList.add("right");
            equiposLeftContentContainer.classList.add("left-content-ontainer");
            equiposCloseButtonContainer.classList.add("close-button-container");
            equiposCloseButton.classList.add("close-button");
            equiposCompactScreenCloseButton.classList.add(
              "compact-screen-close-button"
            );
            equiposDescription.textContent = doc.data().descripcion;
            equiposBrand.textContent = "Marca: " + doc.data().marca;
            equiposLocation.textContent = "Ubicación: " + doc.data().ubicacion;
            equiposItemImage.src = doc.data().imagen;
            equiposCloseButton.textContent = "Cerrar";
            equiposCompactScreenCloseButton.textContent = "Cerrar";

            equiposCloseButton.addEventListener("click", closeModal);
            equiposCompactScreenCloseButton.addEventListener(
              "click",
              closeModal
            );

            equiposLeftContentContainer.appendChild(equiposDescription);
            equiposLeftContentContainer.appendChild(equiposBrand);
            equiposLeftContentContainer.appendChild(equiposLocation);
            equiposCloseButtonContainer.appendChild(equiposCloseButton);
            equiposLeftContainer.appendChild(equiposLeftContentContainer);
            equiposLeftContainer.appendChild(equiposCloseButtonContainer);

            equiposRightContainer.appendChild(equiposItemImage);
            equiposItemDetailContainer.appendChild(equiposLeftContainer);
            equiposItemDetailContainer.appendChild(equiposRightContainer);
            equiposItemDetailContainer.appendChild(
              equiposCompactScreenCloseButton
            );

            modalContent.appendChild(equiposItemDetailContainer);
            break;
          default:
            break;
        }
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

function presentItem() {
  console.log(selectedItemId);
  console.log(selectedItemCollection);
  renderModalContent();
}

function closeModal() {
  let modalContainer = document.getElementById("modal-container");
  modalContainer.remove();
}

function filterItems() {
  var input, filter, items, item, i, txtValue;
  input = document.getElementById("inventory-search-bar");
  filter = input.value.toUpperCase();
  items = inventoryList.children;

  for (i = 0; i < items.length; i++) {
    item = items[i].getElementsByClassName("item-name")[0];
    txtValue = item.textContent || item.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
