
function searchMeal() {

    var search = document.getElementById("search").value;

    var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search;

    fetch(url)
    .then(res => res.json())
    .then(data => {

        var meals = data.meals;

        var result = document.getElementById("result");

        result.innerHTML = "";

        if (meals == null) {
            result.innerHTML = "No meals found!";
        }

        else {

            for (var i = 0; i < meals.slice(0, 5).length; i++) {

                result.innerHTML += `
                
                <div class="meal">

                    <img src="${meals[i].strMealThumb}">

                    <h3>${meals[i].strMeal}</h3>

                </div>

                `;

            }

        }

    });

}
