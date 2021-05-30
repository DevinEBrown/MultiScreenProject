var historyBB = "<p>The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, the Brooklyn Bridge was the first fixed crossing across the East River. It was also the longest suspension bridge in the world at the time, with a main span of 1,595.5 feet (486.3 m) and a deck height of 127 ft (38.7 m) above mean high water. The span was originally called the New York and Brooklyn Bridge or the East River Bridge but was officially renamed the Brooklyn Bridge in 1915.</p>";

var tourist = "<p>There area few factors that will affect how long your walk will be.First, the bridge is a very popular tourist attraction. In the summer months, especially midday through sunset, the bridge can be packed with tourists. Add to that the many locals who walk to and from work over the bridge and it can a bit claustrophobic.In 2018, an average of 26,800 people crossed the bridge on any given weekend day. Second, the pedestrian walkway is somewhat narrow and you can only walk as fast as the flow of the crowd.</p>";

   
window.onload = function(){
    document.getElementById("Brook").width = "400";
   document.getElementById("Brook").height = "300";
   document.getElementById("BtnThree").style.display = "none";
   document.getElementById("BtnOne").addEventListener("click", postHistory, false);
   document.getElementById("BtnTwo").addEventListener("click", postTourist, false);
   document.getElementById("Brook").addEventListener("click", picScreen, false);
}

function postHistory() {  
    document.getElementById("content").innerHTML = historyBB;
    document.getElementById("title").innerHTML = "<h1>History</h1>";
    document.getElementById("BtnOne").style.display = "none";
    document.getElementById("BtnTwo").style.display = "none";
    document.getElementById("Brook").style.display = "none";
    document.getElementById("BtnThree").style.display = "block";
    document.getElementById("BtnThree").addEventListener("click", screenOne, false);
}

function postTourist() {
    document.getElementById("content").innerHTML = tourist;
    document.getElementById("title").innerHTML = "<h1>Tourist Information</h1>";
    document.getElementById("BtnOne").style.display = "none";
    document.getElementById("BtnTwo").style.display = "none";
    document.getElementById("Brook").style.display = "none";
    document.getElementById("BtnThree").style.display = "block";
    document.getElementById("BtnThree").addEventListener("click", screenOne, false);
}

function picScreen() {
    document.getElementById("Brook").width = "600";
    document.getElementById("Brook").height = "400";
    document.getElementById("BtnOne").style.display = "none";
    document.getElementById("BtnTwo").style.display = "none";
    document.getElementById("BtnThree").style.display = "block";
    document.getElementById("BtnThree").style.display = "block";
    document.getElementById("BtnThree").addEventListener("click", screenOne, false);
}

function screenOne(){   
    document.getElementById("content").innerHTML = "";
    document.getElementById("title").innerHTML = "";
    document.getElementById("BtnOne").style.display = "block";
    document.getElementById("BtnOne").addEventListener("click", postHistory, false);
    document.getElementById("BtnTwo").style.display = "block";
    document.getElementById("BtnTwo").addEventListener("click", postTourist, false);
    document.getElementById("BtnThree").style.display = "none";
    document.getElementById("Brook").style.display = "block";
//    document.getElementById("Brook").width = "400";
//    document.getElementById("Brook").height = "300";
            
}