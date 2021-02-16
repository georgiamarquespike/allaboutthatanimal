let cowButton = document.getElementById("cow");
let turtleButton = document.getElementById("turtle");
let tigerButton = document.getElementById("tiger");
let monkeyButton = document.getElementById("monkey");
let snakeButton = document.getElementById("snake");
let imageArea = document.getElementById("imagecontainer");
let replyBox = document.getElementById("box");



cowButton.addEventListener("click", function(){
    imageArea.style.backgroundImage = "url('img/cow.jpg' )";
    document.getElementById("soundbutton").onclick = function () {
        document.getElementById('cowsound').play();
            };
            document.getElementById("dietbutton").onclick = function () {
                replyBox.innerHTML = "Grass";

            };
            document.getElementById("Habitat").onclick = function () {
                replyBox.innerHTML = "Grasslands";
            }
            document.getElementById("randomfact").onclick = function () {
                replyBox.innerHTML = "A cow can chew about 50 times in a minitue, making their jaws move about 40,000 times a day";
            }

})

turtleButton.addEventListener("click", function(){
    imageArea.style.backgroundImage = "url('img/turtle.jpg' )";
     document.getElementById("soundbutton").onclick = function () {
                document.getElementById('turtlesound').play(); 
            };
            document.getElementById("dietbutton").onclick = function () {
                replyBox.innerHTML = "What a turtle eats depends on its species. Sea turtles, depending on the species, may eat seagrasses, algae, sponges, sea squirts, squid, shrimp, crabs, jellyfish, cuttlefish or sea cucumbers.Land turtles also eat a variety of foods, from earthworms, grubs, snails, beetles and caterpillars to grasses, fruit, berries, mushrooms and flowers." 

            };
            document.getElementById("Habitat").onclick = function () {
                replyBox.innerHTML = "Turtles are very adaptive and can be found on every continent, except Antarctica. Most turtle species are found in southeastern North America and South Asia."
            };
            document.getElementById("randomfact").onclick = function () {
                replyBox.innerHTML = " They can hold their breath for five hours underwater -to accomplish this mighty feat they slow their heart rate to up to nine minutes in between heart beats in order to conserve oxygen."
            }
})
                            



tigerButton.addEventListener("click", function(){
    imageArea.style.backgroundImage = "url('img/tiger.jpg' )";
     document.getElementById("soundbutton").onclick = function () {
                document.getElementById('tigersound').play(); 
            };
            document.getElementById("dietbutton").onclick = function () {
                replyBox.innerHTML = "Tigers eat a variety of prey ranging in size from termites to elephant calves. However, an integral component of their diet are large-bodied prey weighing about 20 kg (45 lbs.) or larger such as moose, deer species, pigs, cows, horses, buffalos and goats. Occasionally they may consume tapirs, elephant and rhinoceros calves, bear species, leopards and Asiatic wild dogs."
    

            };
            document.getElementById("Habitat").onclick = function () {
                replyBox.innerHTML = "Tigers live in a diverse array of habitats such as tropical rainforests, mangrove swamps, evergreen forests, grasslands, savannahs, and rocky areas."
            }
            document.getElementById("randomfact").onclick = function () {
                replyBox.innerHTML = " Tigers urine smells like buttered popcorn.";
            }
});



monkeyButton.addEventListener("click", function(){
     imageArea.style.backgroundImage = "url('img/monkey.jpg' )";
     document.getElementById("soundbutton").onclick = function () {
                document.getElementById('monkeysound').play(); 
            };
            document.getElementById("dietbutton").onclick = function () {
                replyBox.innerHTML = "Monkeys are omnivores. This means that they eat meat and plant-based foods. Most monkeys eat nuts, fruits, seeds and flowers. Some monkeys also eat meat in the form of bird's eggs, small lizards, insects and spiders."
        
            };
            document.getElementById("Habitat").onclick = function () {
                replyBox.innerHTML = "Monkeys tend to inhabit the tropical rainforests of Africa, Central America, South America and Asia. All primates live in trees, with the exception of baboons that prefer to live on the ground."
            };
            document.getElementById("randomfact").onclick = function () {
                replyBox.innerHTML = " The fastest primate on Earth is the patas monkey. It can reach speeds of 34 miles per hour (55 km/h)." }
})


snakeButton.addEventListener("click", function(){
     imageArea.style.backgroundImage = "url('img/snake.jpg' )";
     document.getElementById("soundbutton").onclick = function () {
                document.getElementById('snakesound').play(); 
            };
            document.getElementById("dietbutton").onclick = function () {
                replyBox.innerHTML = "All snakes are carnivores. Their diet depends on the species. Some eat warm-blooded prey (e.g., rodents, rabbits, birds), while others eat insects, amphibians (frogs or toads), eggs, other reptiles, fish, earthworms, or slugs. Snakes swallow their food whole. The most popular pet snakes usually eat prey such as mice, rats, gerbils, and hamsters. Larger pet snakes also eat whole rabbits."  };
            document.getElementById("Habitat").onclick = function () {
                replyBox.innerHTML = "Some snakes live in habitats on land, including forests, prairies, and deserts. Others live in water environments. Even though snakes can be found all over the world, most of the snakes live in warm tropical climates."    };
            document.getElementById("randomfact").onclick = function () {
                replyBox.innerHTML = "Some snakes have over 200 teeth. The teeth aren’t used for chewing but they point backward to prevent prey from escaping the snake’s throat."
            }
});
    










