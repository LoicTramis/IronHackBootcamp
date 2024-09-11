// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
const deleteElement = exampleRow.querySelector("td > button.btn-delete");
deleteElement.addEventListener("click", handleDelete);

const likeElement = exampleRow.querySelector("td > button.btn-like");
likeElement.addEventListener("click", handleLike);
tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
for (const actor of threeContacts) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>
        <img src="${actor.pictureUrl}" />
      </td>
      <td> ${actor.name} </td>
      <td> ${actor.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    `;
    const deleteElement = newRow.querySelector("td > button.btn-delete");
    deleteElement.addEventListener("click", handleDelete);

    const likeElement = newRow.querySelector("td > button.btn-like");
    likeElement.addEventListener("click", handleLike);
    console.log(likeElement);
    tableBody.appendChild(newRow);
}

// ITERATION 2 - Delete Buttons
function handleDelete(event) {
    event.target.closest("tr").remove();
}

// ITERATION 3 - Like Buttons
function handleLike(event) {
    console.log(event);
    console.log(this);
    this.classList.toggle("selected");
}

// Bonus: ITERATION 4 - Add Random Contacts
const addElement = document.querySelector("#btn-add-random");
addElement.addEventListener("click", handleAdd);

function handleAdd() {
    // get random actor from list
    if (!contacts.length) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const splicedArr = contacts.splice(randomIndex, 1);
    const randomActor = splicedArr[0];
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>
        <img src="${randomActor.pictureUrl}" />
      </td>
      <td> ${randomActor.name} </td>
      <td> ${randomActor.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    `;
    const deleteElement = newRow.querySelector("td > button.btn-delete");
    deleteElement.addEventListener("click", handleDelete);

    const likeElement = newRow.querySelector("td > button.btn-like");
    likeElement.addEventListener("click", handleLike);
    tableBody.appendChild(newRow);
}
