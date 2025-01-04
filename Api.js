

const API_KEY="olm0JCCg4670vgWebfFQ7okYu5ZicQfZ74Lrj5Un";
const API_URL=`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
const contentDiv = document.getElementById("content");
async function fetchAPOD(){
  try{
    const response = await fetch(API_URL);
    const data = await response.json();

    contentDiv.innerHTML = 
      `<h2>${data.title}</h2>
      <img src="${data.url}" alt="${data.title}">
      <p>${data.explanation}</p>`;
  }
   catch (error) {
     contentDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
   }
    
  }
  fetchAPOD();
