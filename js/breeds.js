// live_lpGTRTcCSM4IXYPosUXDDxZfQJqddv1im6RucJex2j8C82Tk4scF0mxi0T3zcwB5
const apiKey = 'live_lpGTRTcCSM4IXYPosUXDDxZfQJqddv1im6RucJex2j8C82Tk4scF0mxi0T3zcwB5'
const url = 'https://api.thedogapi.com'


// DOM

let div = document.querySelector("#cardItems")

// let all = 'breeds'
const search = "/search&q="
let paginate = 0
const limit = 15
let paginationParams = `?limit=${limit}&page=`
// oreder=desc




let allBreeds = () => {
    let cards = ``
    for (el of breeds) {
        cards += `
            <a class="card grid">
                <div class="card_content grid">
                    <img src="${el.image.url}" alt="${el.name}">
                    <div class="card_text">
                        <h4>${el.name}</h4>
                        <p>${el.breed_group}</p>
                    </div>
                </div>
            </a> 
        `
        // console.log(el.name, el.breed_group, el.image.url)
    }
    div.innerHTML += cards
} 



async function fetchData(request, apiKey) {
    try {
        const response = await fetch(request, {
            headers: {
                'x-api-key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null; 
    }
}

async function main(request) {
    try {
        breeds = await fetchData(request, apiKey);
        // console.log(breeds, '123'); 
        allBreeds()
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


const pagination = () => {
    paginate += 1
    console.log(paginate, paginationParams, `${url}/v1/breeds${paginationParams}${paginate}`)
    main(`${url}/v1/breeds${paginationParams}${paginate}`)
    // allBreeds()
}


// main(`${url}/v1/breeds/search&q=akita`)
window.addEventListener("load", () => {
    main(`${url}/v1/breeds${paginationParams}${paginate}`)
    // main(`${url}/v1/breeds?${apiKey}`)
    // allBreeds()
})
