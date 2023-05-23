// Import stylesheets
import './style.css';

const person = {
  found: 2,
  message: 'Found 2 persons',
  result: [
    {
      name: {
        common: 'John',
        fullName: ['John', 'Doe'],
      },
      age: 32,
      isMale: false,
      address: {
        street: '13/A St Joseph',
        house: 10,
      },
    },
    {
      name: {
        common: 'Humayoun',
        fullName: ['Humayoun', 'Kabir'],
      },
      age: 33,
      isMale: false,
      address: {
        street: '13/A St Lucia',
        house: 11,
      },
    },
  ],
};

const numberId = document.getElementById('number-id');
numberId.innerText = person.found;
const getContainer = document.getElementById("container")

for (const p of person.result) {
  const createDiv = document.createElement('div');
  createDiv.classList.add('create-div');

  const createName = document.createElement('p');
  createName.innerText = `Name:${p.name.common}`;
  createName.classList.add('name');
  const createAge = document.createElement('p');
  createAge.innerText = `Age : ${p.age}`;
  const createAddress = document.createElement('p');
  createAddress.innerText = `Street : ${p.address.street} House no ${p.address.house}`;
  createDiv.appendChild(createName);
  createDiv.appendChild(createAge);
  createDiv.appendChild(createAddress);
  getContainer.appendChild(createDiv)
}

fetch("")