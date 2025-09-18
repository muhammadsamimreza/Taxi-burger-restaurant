const categoryLoad = () => {
  const url = `https://taxi-kitchen-api.vercel.app/api/v1/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

// {
//     "id": 1,
//     "categoryName": "Beef",
//     "categoryImg": "https://www.themealdb.com/images/category/beef.png"
// }
const displayCategories = (arr) => {
  const categoryContainer = document.getElementById("category-container");
  document.getElementById("category-container").innerHTML = "";
  arr.forEach((category) => {
    console.log(category);
    
    const div = document.createElement("div");
    div.innerHTML=`
        <button class="btn btn-block shadow btn-category">
            <img
              src="${category.categoryImg}"
              alt=""
              class="w-10"
            />${category.categoryName}
          </button>
    `
    categoryContainer.append(div);
  });
};

categoryLoad();
