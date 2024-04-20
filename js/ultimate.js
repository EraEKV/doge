const categs = [
    "Toy",
    "Hound",
    "Terrier",
    "Working",
    "Mixed",
    "Non-Sporting",
    "Sporting",
    "Herding"
]


const cardItems = document.querySelector("#cardItems")
const search = document.querySelector("#search")
// const options = document.querySelectorAll(".menu li.active")

let breeds = Breeds
const paginate = 20
let count = 0

let allBreeds = (lower, upper, param) => {
    // count = 0
    let cards = ``
    for (i = lower; i <= upper; i++) {
        if(breeds.length == 0) {
            cards = `
                <h3 class="not-found">We couldn't find results for "${search.value}"</h3>
            `
        } else if(breeds[i]) {
            cards += `
                <a class="card grid">
                    <div class="card_content grid">
                        <img src="${breeds[i].image.url}" alt="${breeds[i].name}">
                        <div class="card_text">
                            <h4>${breeds[i].name}</h4>
                            <p>${breeds[i].breed_group == undefined ? "None" : breeds[i].breed_group}</p>
                        </div>
                    </div>
                </a> 
            `
        } 
    }
    // console.log(cards)
    param ? cardItems.innerHTML += cards : cardItems.innerHTML = cards
    if(breeds.length <= upper) {
        count = -1; 
        document.querySelector(".see").classList.add("invicible");
    } else {
        count = upper + 1;
        document.querySelector(".see").classList?.remove("invicible");
    }
} 


const findSearch = (value, db) => {
    if(db) {
        value = value.toLowerCase()
        const filteredBreeds = db.filter(data => {
            const breedGroupIncludes = data.breed_group?.toLowerCase().includes(value);
            const nameIncludes = data.name?.toLowerCase().includes(value);
            // const originIncludes = data.origin?.toLowerCase().includes(value);
            return breedGroupIncludes || nameIncludes ;
        });
        breeds = filteredBreeds
    }
}


search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    count = 0
    value == "" ? breeds = Breeds : findSearch(value, Breeds)
    groupFilter(document.querySelector("#menu > li.active").innerText)
    // breeds = findSearch(value)
    // allBreeds(count, count + paginate, false);
})



const groupFilter = (group) => {
    count = 0
    if (group == "All Breed Groups") {
        breeds = Breeds
        // search.value == "" ? breeds = Breeds : findSearch(search.value) 
        if(search.value) {
            findSearch(search.value, Breeds) 
        } 
    } else {
        // search.value == "" ? breeds = Breeds.filter(data => data.breed_group?.includes(group)) : breeds = breeds.filter(data => data.breed_group?.includes(group)) 
        breeds = Breeds.filter(data => data.breed_group?.includes(group))  
    }
    // breeds = findSearch(search.value)
    findSearch(search.value, breeds)
    const option = document.querySelector("#menu-1 > li.active")
    sortFilter(option.innerText, option.value)
    allBreeds(count, count + paginate, false)
}


const sortFilter = (sort, order) => {
    if (sort == "A-Z" && document.querySelector("#select-1").innerText == "Sort by") return

    const sortByAverageWeight = (a, b) => {
        const getAverageWeight = (str) => {
            arr = str.split(' - ')
            arr.length == 1 ? avg = arr[0] : avg = (+arr[0] + +arr[1]) / 2
            return avg / 2;
        };
        
        const avgWeightA = getAverageWeight(a.weight.metric);
        const avgWeightB = getAverageWeight(b.weight.metric);
      
        if (avgWeightA < avgWeightB) return -1; 
        else if (avgWeightA > avgWeightB) return 1; 
        else return 0;
    }
    
    const sortByAverageHeight = (a, b) => {
        const getAverageHeight = (str) => {
            arr = str.split(' - ')
            arr.length == 1 ? avg = arr[0] : avg = (+arr[0] + +arr[1]) / 2
            return avg / 2;
        };
        
        const avgHeightA = getAverageHeight(a.height.metric);
        const avgHeightB = getAverageHeight(b.height.metric);
      
        if (avgHeightA < avgHeightB) return -1; 
        else if (avgHeightA > avgHeightB) return 1; 
        else return 0;
    }

    const sortByName = (a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }

    count = 0
    if(sort == "A-Z" || sort == "Z-A") {
        breeds.sort(sortByName)
    } else if(sort == "By asc weight" || sort == "By desc weight") {
        breeds.sort(sortByAverageWeight);
    } else if(sort == "By asc height" || sort == "By desc height") {
        breeds.sort(sortByAverageHeight);
    }

    if (order == -1) breeds.reverse();  
    allBreeds(count, count + paginate, false)
}




allBreeds(count, count + paginate, true)

const pagination = () => allBreeds(count, count + paginate, true);

// count == -1 ? document.querySelector(".see").classList.add("invicible") : 
// allBreeds(breeds, count, count + paginate)