const VarietyURL = "https://localhost:5001/api/beanvariety/";
const CoffeeURL = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

function getAllBeanVarieties() {
    return fetch(VarietyURL).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(CoffeeURL).then(res => res.json());
}