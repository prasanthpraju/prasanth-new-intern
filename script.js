const dropdown = document.getElementById("categoryDropdown");
const itemList = document.getElementById("itemList");

const itemsData = [
    { name: "Apple 🍏", category: "fruits" },
    { name: "Banana 🍌", category: "fruits" },
    { name: "Mango 🥭", category: "fruits" },
    { name: "Orange 🍊", category: "fruits" },
    { name: "Grapes 🍇", category: "fruits" },
    { name: "Carrot 🥕", category: "vegetables" },
    { name: "Broccoli 🥦", category: "vegetables" },
    { name: "Cucumber 🥒", category: "vegetables" },
    { name: "Corn 🌽", category: "vegetables" }
];

function displayitem(category) {
    let filterItems; 
    if (category==="all") {
        filterItems=itemsData;
        
    } else {
        filterItems=itemsData.filter(item=>item.category==category);
        
    } 

    itemList.innerHTML= filterItems.map(item=>`<div>${item.name}</div>`).join("");

    const storedData={category,items:filterItems};

    localStorage.setItem("dropdownfilter",JSON.stringify(storedData));
}
    const getData= JSON.parse(localStorage.getItem("dropdownfilter"));

    if (getData) {
        dropdown.value=getData.category;
        displayitem(getData.category);
        
    } else {
        displayitem("all");
        
    }

dropdown.addEventListener("change",()=>{
    displayitem(dropdown.value);
});

 






 