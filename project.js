let foodSpots = [{"id":1,"name":"Snooze an A.M. Eatery","address":"3800 N Lamar Blvd #120","website":"https://snoozeeatery.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":2,"name":"Counter Cafe","address":"1914 E 6th St, Austin, TX 78702","website":"http://countercafe.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"no"},
{"id":3,"name":"Upper Crust Bakery","address":"4508 Burnet Rd, Austin, TX 78756","website":"http://www.uppercrustbakery.com/","price":"$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":4,"name":"Sugar Mama's Bakeshop","address":"2406 Manor Rd, Austin, TX 78722","website":"http://www.sugarmamasbakeshop.com/","price":"$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":5,"name":"Tor Le Jours Bakery","address":"6808 N Lamar Blvd B-115, Austin, TX 78752","website":"http://www.tljus.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":6,"name":"Le Cafe Crepe","address":"200 San Jacinto Blvd A, Austin, TX 78701","website":"http://cafecrepeofaustin.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"no"},
{"id":7,"name":"Trace","address":"200 Lavaca St, Austin, TX 78701","website":"http://www.traceaustin.com/","price":"$$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":8,"name":"Waffle House","address":"Waffle House, 7809 E Ben White Blv, Austin, TX 78744","website":"https://www.wafflehouse.com/","price":"$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":9,"name":"1886 Cafe & Bakery","address":"604 Brazos St, Austin, TX 78701","website":"https://driskillhotel.com/dining/","price":"$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":10,"name":"Texas French Bread","address":"2900 Rio Grande St, Austin, TX 78705","website":"https://texasfrenchbread.com/","price":"$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":11,"name":"Paperboy","address":"1203 E 11th St, Austin, TX 78702","website":"http://www.paperboyaustin.com/","price":"$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":12,"name":"Josephine House","address":"1601 Waterston Ave, Austin, TX 78703","website":"http://josephineofaustin.com/","price":"$$$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":13,"name":"Dai Due","address":"2406 Manor Rd, Austin, TX 78722","website":"https://www.daidue.com/","price":"$$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":14,"name":"Goodall's Kitchen & Bar","address":"1900 Rio Grande St, Austin, TX 78705","website":"https://goodallskitchen.com/","price":"$$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":15,"name":"Jack Allens","address":"3600 N Capital of Texas Hwy, Austin, TX 78746","website":" jackallenskitchen.com","price":"$$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":16,"name":"Hopdoddy","address":"1400 S Congress Ave, Austin, TX 78704","website":"https://www.hopdoddy.com/","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":17,"name":"Torchy's Tacos","address":"1822 S. CONGRESS AVE. AUSTIN TX 78704","website":"https://torchystacos.com/location/south-congress/","price":"$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"no"},
{"id":18,"name":"Hyde Park Bar and Grill","address":"4521 Westgate Blvd, Austin, TX 78745","website":"http://hpbng.com/","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":19,"name":"Irene's","address":"506 West Ave Austin, TX 78701","website":"http://irenesaustin.com/","price":"$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":20,"name":"Raku Asian Sushi Bistro","address":"2222 Rio Grande St, Austin, TX 78705","website":"rakusushibistro.com/","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":21,"name":"Pieous","address":"12005 US-290, Austin, TX 78737","website":"null","price":"$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":22,"name":"True Food Kitchen","address":"222 West Avenue HR100, Austin, TX 78701","website":"https://www.truefoodkitchen.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":23,"name":"Flower Child","address":"500 W. 2nd St., #133 Austin, TX 78701","website":"https://www.iamaflowerchild.com/","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":24,"name":"P. Terry's ","address":"701 S Capital of Texas Hwy, West Lake Hills, TX 78746","website":"https://pterrys.com/","price":"$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":25,"name":"The Capital Grille","address":"117 W 4th St, Austin, TX 78701","website":"https://www.austincapitolgrill.com/","price":"$$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":26,"name":"Odd Duck ","address":"1201 S Lamar Blvd, Austin, TX 78704","website":"https://oddduckaustin.com/","price":"$$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":27,"name":"Bouldin Oak Cafe","address":"1900 S 1st St, Austin, TX 78704","website":"Bouldincreekcafe.com","price":"$$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"no"},
{"id":28,"name":"Lenior","address":"1807 S 1st St, Austin, TX 78704","website":"lenoirrestaurant.com","price":"$$$","drinks":"no","breakfast":"no","lunch":"no","dinner":"yes"},
{"id":29,"name":"Sway","address":"1417 S 1st St, Austin, TX 78704","website":"Swaythai.com","price":"$$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":30,"name":"Uchi","address":"801 S Lamar Blvd, Austin, TX 78704","website":"uchiaustin.com","price":"$$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":31,"name":"Homeslice","address":"1415 S Congress Ave, Austin, TX 78704","website":"Homeslicepizza.com","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":32,"name":"Perry's SteakHouse and Grill","address":"114 W 7th St, Austin, TX 78701","website":"perryssteakhouse.com","price":"$$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":33,"name":"Contigo","address":"2027 Anchor Ln, Austin, TX 78723","website":"contigotexas.com","price":"$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":34,"name":"Mattie's","address":"811 W Live Oak St, Austin, TX 78704","website":"mattiesaustin.com","price":"$$","drinks":"no","breakfast":"no","lunch":"no","dinner":"yes"},
{"id":35,"name":"Black's","address":"3110 Guadalupe St, Austin, TX 78705","website":"blacksbbq.com","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":36,"name":"Summer Moon","address":"11005 Burnet Rd #112, Austin, TX 78758","website":"woodfiredcoffee.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":37,"name":"Juice Land","address":"2601 E Cesar Chavez St, Austin, TX 78702","website":"https://www.juiceland.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":38,"name":"Seventh Flag","address":"1506 South First Street, Austin, Texas 78704","website":"http://www.seventhflagcoffee.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":39,"name":"Figure 8","address":"1111 Chicon St, Austin, TX 78702","website":"www.figure8coffeepurveyors.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":40,"name":"Halcyon","address":"218 West 4th Street Austin, TX 78701","website":"halcyoncoffeebar.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":41,"name":"Manana","address":"1603 S Congress Ave, Austin, TX 78704","website":"https://mananaaustin.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":42,"name":"Blenders & Bowls","address":"206 E 4th St, Austin, TX 78701","website":"blendersandbowls.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":43,"name":"Jamba Juice","address":"10710 Research Blvd Ste. 306, Austin, TX 78759","website":"www.jambajuice.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":44,"name":"Smoothie KIng","address":"4301 W William Cannon Dr #200, Austin, TX 78749","website":"https://www.smoothieking.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"}]

//create helper method to add dom elements
//--loop through new makeBfast [etc] array
//--create p (or whatever) elements w (EX obj['name'])
//--then more for address, etc etc for all info

const breakfast = makeBreakfast(foodSpots)
function displayBfast(array) {
  for (el of array) {
    let name = $('<h3></h3>').text(el['name'])
    let address = $('<p></p>').text(el['address'])
    let website = $('<p></p>').text(el['website'])
    $('#BreakfastText').append(name)
    $('#BreakfastText').append(address)
    $('#BreakfastText').append(website)
  }
}

const lunch = makeLunch(foodSpots)
function displayLunch(array) {
  for (el of array) {
    let name = $('<h3></h3>').text(el['name'])
    let address = $('<p></p>').text(el['address'])
    let website = $('<p></p>').text(el['website'])
    $('#LunchText').append(name)
    $('#LunchText').append(address)
    $('#LunchText').append(website)
  }
 }

const dinner = makeDinner(foodSpots)
function displayDinner(array) {
  for (el of array) {
    let name = $('<h3></h3>').text(el['name'])
    let address = $('<p></p>').text(el['address'])
    let website = $('<p></p>').text(el['website'])
    $('#DinnerText').append(name)
    $('#DinnerText').append(address)
    $('#DinnerText').append(website)
  }
 }

const drinks = makeDrinks(foodSpots)
function displayDrinks(array) {
  for (el of array) {
    let name = $('<h3></h3>').text(el['name'])
    let address = $('<p></p>').text(el['address'])
    let website = $('<p></p>').text(el['website'])
    $('#DrinksText').append(name)
    $('#DrinksText').append(address)
    $('#DrinksText').append(website)
  }
 }


function makeBreakfast(array) {
  let listBreakfast = [];
  for(obj of array) {
    if(obj['breakfast'] === 'yes'){
      listBreakfast.push(obj)
    }
  }
  return listBreakfast
}

function makeLunch(array){
  let listLunch = [];
  for(obj of array) {
    if(obj['lunch'] === 'yes'){
      listLunch.push(obj)
    }
  }
  return listLunch
}

function makeDinner(array){
  let listDinner = [];
  for(obj of array) {
    if(obj['dinner'] === 'yes'){
      listDinner.push(obj)
    }
  }
  return listDinner
}

function makeDrinks(array){
  let listDrinks = [];
  for(obj of array) {
    if(obj['drinks'] === 'yes'){
      listDrinks.push(obj)
    }
  }
  return listDrinks
}
$(document).ready(() => {
  displayLunch(lunch)
  displayBfast(breakfast)
  displayDinner(dinner)
  displayDrinks(drinks)
})
