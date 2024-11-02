// // Set-3. REST Countries
// Endpoint: https://restcountries.com/v3.1/all
// // Description: Provides information about countries.
// // Note: No authentication required.
// // function fetchdata(){
// //     fetch("https://restcountries.com/v3.1/all/").then((res)=>{
// //     return res.json();
// // }).then((data)=>{
// //     const ele =document.createElement("div")
// //     ele.innerHTML=data.slip.advice
// //     document.querySelector(".ins").appendChild(ele)

    
// //     })
// // }
// async function fetchCountries() {
//     try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const countries = await response.json();
//         displayCountries(countries);
//     } catch (error) {
//         console.error('Error fetching countries:', error);
//     }
// }

// function displayCountries(countries) {
//     const countriesContainer = document.getElementById('countries');
//     countries.forEach(country => {
//         const countryDiv = document.createElement('div');
//         countryDiv.classList.add('country');
        
       
//         const name = country.name.common;
//         const capital = country.capital ? country.capital[0] : 'N/A';
//         const population = country.population.toLocaleString(); 
//         const region = country.region;

       
//         countryDiv.innerHTML = `
//             <h2>${name}</h2>
//             <p><strong>Capital:</strong> ${capital}</p>
//             <p><strong>Population:</strong> ${population}</p>
//             <p><strong>Region:</strong> ${region}</p>
//         `;

//         countriesContainer.appendChild(countryDiv);
//     });
// }


// window.onload = fetchCountries;

// // async function fetchdata() {
// //     try {
//         // Fetching data from a sample API
//         // const response = await fetch('https://restcountries.com/v3.1/all');
//         // const data = await response.json(); Parse JSON response

//         // Display the fetched data in the div
// //         document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
// //     } catch (error) {
// //         console.error('Error fetching data:', error);
// //     }
// // }

// // Add click event listener to the button
// // document.getElementById('fetchButton').addEventListener('click', fetchdata);
document.getElementById('orange').onclick=function(){
    document.body.style.backgroundColor(`orange`)
}