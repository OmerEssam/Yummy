let totalWidth = $(".nav-content").outerWidth(true);
$("nav").css({ "left": `-${totalWidth}px` })
$(".list-nav i").click(function () {
  if ($("nav").css("left") == "0px") {
    $("nav").animate({ left: `-${totalWidth}` }, 500)
    $(".list-nav i").addClass("fa-align-justify")
    $(".list-nav i").removeClass("fa-xmark")
    $(".nav-content ul li").animate({ top: "300px" }, 500)
  } else {
    $("nav").animate({ left: 0 }, 500)
    $(".list-nav i").addClass("fa-xmark")
    $(".list-nav i").removeClass("fa-align-justify")
    $(".nav-content ul li").animate({ top: "0px" }, 500);
  }
})

$(document).ready(function () {
  $(".load").fadeOut(1000)
}
)

async function displayMeal() {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < final.length; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getDetials('${final[i].strMeal}')" class="foods position-relative overflow-hidden">
            <div class="food-img">
            <img src="${final[i].strMealThumb}" alt="" class="img-fluid">
            </div>
            <div class="overlay bg-white bg-opacity-75 position-absolute bottom-0 d-flex align-items-center">
            <h2> ${final[i].strMeal}  </h2>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)
}
displayMeal()

async function getDetials(s) {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`)
  let result = await res.json()
  let final = result.meals
  $(".row").html(`
    <div class="col-md-4">
      <div class="food-img">
            <img src="${final[0].strMealThumb}" alt="" class="img-fluid">
            <h2 class="text-white">${final[0].strMeal}</h2>
      </div>
    </div>
    <div class="col-md-8">
      <div class="meal-deatils">
        <h2 class="text-white">Instructions</h2>
        <p class="text-white">${final[0].strInstructions}</p>
        <h2 class="text-white">Area : ${final[0].strArea}</h2>
        <h2 class="text-white">Category :${final[0].strCategory}</h2>
        <h2 class="text-white">Recipes:</h2>
        <ul class=" Ingredient   text-white list-unstyled d-flex flex-wrap">
        <li class="alert alert-info m-2 p-1">
        ${final[0].strMeasure1}
        ${final[0].strIngredient1}
        </li> 
        <li class="alert alert-info m-2 p-1">
        ${final[0].strMeasure2}
        ${final[0].strIngredient2}
        </li> 
        <li class="alert alert-info m-2 p-1">
        ${final[0].strMeasure3}
        ${final[0].strIngredient3}
        </li> 
        <li class="alert alert-info m-2 p-1">
        ${final[0].strMeasure4}
        ${final[0].strIngredient4}
        </li> 
        <li class="alert alert-info m-2 p-1">
        ${final[0].strMeasure5}
        ${final[0].strIngredient5}
        </li> 
        </ul>
        <h2 class="text-white">Tags :</h2>
        <ul class="list-unstyled d-flex gap-3 flex-wrap">
        <li >
        <a href="${final[0].strSource}" target="_blank" class="btn btn-success">
        Source
        </a>
        </li>
        <li >
        <a href="${final[0].strYoutube}" target="_blank" class="btn btn-danger">
        Youtube
        </a>
        </li>
        </ul>
      </div>
    </div>
    `
  )
}


$("#search").click(function () {
  $(".container").html(
    `
    <div class="d-flex gap-2">
    <div class="w-50">
      <input type="text" class=" hamda form-control bg-black text-white" placeholder="Search By Name" onkeyup="displaySearchByName(this.value)">
    </div> 
    <div class="w-50">
      <input type="text" class="form-control bg-black  text-white" placeholder="Search By first Letter" onkeyup="displaySearchByFirst(this.value)" >
    </div>
    </div>
    <div class="row g-3 py-5"></div>
    `
  )
})
async function displaySearchByName(s) {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < final.length; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getDetials('${final[i].strMeal}')" class="foods position-relative overflow-hidden">
            <div class="food-img">
            <img src="${final[i].strMealThumb}" alt="" class="img-fluid">
            </div>
            <div class="overlay bg-white bg-opacity-75 position-absolute bottom-0 d-flex align-items-center">
            <h2> ${final[i].strMeal}  </h2>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)
}
async function displaySearchByFirst(s) {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${s}`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < final.length; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getDetials('${final[i].strMeal}')" class="foods position-relative overflow-hidden">
            <div class="food-img">
            <img src="${final[i].strMealThumb}" alt="" class="img-fluid">
            </div>
            <div class="overlay bg-white bg-opacity-75 position-absolute bottom-0 d-flex align-items-center">
            <h2> ${final[i].strMeal}  </h2>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)
}
$("#categories").click(function () {
  displayCat()
})

async function displayCat() {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  let result = await res.json()
  let final = result.categories
  let ma5zn = ``
  for (let i = 0; i < final.length; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getMealsFromCat('${final[i].strCategory}')" class="foods position-relative overflow-hidden">
            <div class="food-img">
            <img src="${final[i].strCategoryThumb}" alt="" class="img-fluid">
            </div>
            <div class="overlay bg-white bg-opacity-75 position-absolute bottom-0 text-center">
            <h2> ${final[i].strCategory}  </h2>
            <p>${final[i].strCategoryDescription}</p>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)
}

$("#area").click(function () {
  displayArea()
})
async function displayArea() {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < final.length; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getMealsFromArea('${final[i].strArea}')" class="foods position-relative overflow-hidden">
            <div class="areas text-white text-center">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h2>${final[i].strArea}</h2>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)


}

$("#ingerdients").click(function () {
  displayIngerd()
})
async function displayIngerd() {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < 20; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getMealsFromIng('${final[i].strIngredient}')" class="foods position-relative overflow-hidden">
            <div class="areas text-white text-center">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h2>${final[i].strIngredient}</h2>
            <p>${final[i].strDescription}</p>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)

}


async function getMealsFromArea(x) {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < final.length; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getMealsFromAreaaa('${final[i].strMeal}')" class="foods position-relative overflow-hidden">
            <div class="food-img">
              <img src="${final[i].strMealThumb}" alt="" class="img-fluid">
            </div>
            <div class="overlay bg-white bg-opacity-75 position-absolute bottom-0 d-flex align-items-center">
              <h2> ${final[i].strMeal}  </h2>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)
}
async function getMealsFromCat(x) {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < 20; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getDetials('${final[i].strMeal}')" class="foods position-relative overflow-hidden">
            <div class="food-img">
              <img src="${final[i].strMealThumb}" alt="" class="img-fluid">
            </div>
            <div class="overlay bg-white bg-opacity-75 position-absolute bottom-0 d-flex align-items-center">
              <h2>${final[i].strMeal}</h2>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)
}

async function getMealsFromAreaaa(x) {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < final.length; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getDetials('${final[i].strMeal}')" class="foods position-relative overflow-hidden">
            <div class="food-img">
              <img src="${final[i].strMealThumb}" alt="" class="img-fluid">
            </div>
            <div class="overlay bg-white bg-opacity-75 position-absolute bottom-0 d-flex align-items-center">
              <h2>${final[i].strMeal}</h2>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)
}
async function getMealsFromIng(x) {
  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`)
  let result = await res.json()
  let final = result.meals
  let ma5zn = ``
  for (let i = 0; i < final.length; i++) {
    ma5zn += `
        <div class="col-md-3">
          <div onclick="getDetials('${final[i].strMeal}')" class="foods position-relative overflow-hidden">
            <div class="food-img">
              <img src="${final[i].strMealThumb}" alt="" class="img-fluid">
            </div>
            <div class="overlay bg-white bg-opacity-75 position-absolute bottom-0 d-flex align-items-center">
              <h2>${final[i].strMeal}</h2>
            </div>
          </div>
        </div>

`
  }
  $(".row").html(ma5zn)
}


$("#contact-us").click(function(){
  document.querySelector(".row").innerHTML = 
    `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
  </div> `
})