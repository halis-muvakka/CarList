const inputBrand = document.getElementById("brand")
const inputModal = document.getElementById("model")
const inputYear = document.getElementById("year")
const inputPrice = document.getElementById("price")
const tbody = document.getElementById("tbody")

class Car {
    constructor(brand, model, modelYear,price) {
        this.brand = brand;
        this.modelYear = modelYear;
        this.model = model;
        this.price = price;
    }
}
let carData = [];
function createData() {
    const newObj = new Car(inputBrand.value, inputModal.value, inputYear.value, inputPrice.value);
    carData.push(newObj);
    inputBrand.value =""
    inputModal.value =""
    inputYear.value =""
    inputPrice.value =""
    showItems()
}
let date = new Date();
function showItems() {
    if (carData.length > 0) {
        let x = ``
        for (let i = 0; i < carData.length; i++) {
            x = `
            <tr class="table-secondary">
                <td class="table-success">${carData[i].brand}</td>
                <td class="table-success">${carData[i].model}</td>
                <td class="table-success">${date.getFullYear() - carData[i].modelYear}</td>
                <td class="table-success">${carData[i].price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} TL</td>
            </tr>
            `
        }
        tbody.insertAdjacentHTML("beforeend",x)
    }
}