var myBody = document.getElementById("body");

var div1 = document.createElement("div");
div1.setAttribute("class" , "after-over") ;
div1.setAttribute("id" , "afterOver") ;


var div1Heading = document.createElement("h1");
var div1HeadingText = document.createTextNode("Game Over");
var div1P =  document.createElement("p");
var div1PText =  document.createTextNode("Your Total Score is");
var div1PSpan = document.createElement("span");
div1PSpan.setAttribute("id" , "totalScore");
var div1PSpanText = document.createTextNode("");

var div2 = document.createElement("div");
div2.setAttribute("class" , "container-fluid");
div2.setAttribute("id" , "mainBranch");

var div2FirstChild = document.createElement("div");
div2FirstChild.setAttribute("class" , "match-color col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12")
var div2FirstChildHeading = document.createElement("h2");
div2FirstChildHeading.setAttribute("class" , "h" )
var div2FirstChildHeadingText = document.createTextNode("Pop This Color Of Balloon:");
var div2FirstChildHeadingSpan = document.createElement("span"); 
div2FirstChildHeadingSpan.setAttribute("id" , "matchColor");

var scoreDiv = document.createElement("div");
scoreDiv.setAttribute("class" , "score")
var scoreDivHeading = document.createElement("h2")
var scoreDivHeadingText = document.createTextNode("Score:")
var scoreDivHeadingSpan = document.createElement("span");
scoreDivHeadingSpan.setAttribute("id" , "score")

var mainDiv = document.createElement("div")
mainDiv.setAttribute("class" , "main col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12")

var rowOneDiv = document.createElement("div")
rowOneDiv.setAttribute("class" , "row-one col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12")

var divBox1 = document.createElement("div");
divBox1.setAttribute("id" , "box1")
divBox1.setAttribute("class" , "ballon")
divBox1.setAttribute("onClick" , "balloon('box1')")

divBox1.className="balloon"


var divBox2 = document.createElement("div");
divBox2.setAttribute("id" , "box2")
divBox2.setAttribute("class" , "ballon")
divBox2.setAttribute("onClick" , "balloon('box2')")
divBox2.className="balloon"



var divBox3 = document.createElement("div");
divBox3.setAttribute("id" , "box3")
divBox3.setAttribute("class" , "ballon")
divBox3.setAttribute("onClick" , "balloon('box3')")
divBox3.className="balloon"



var rowTwoDiv = document.createElement("div")
rowTwoDiv.setAttribute("class" , "row-two col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12")
var divBox4 = document.createElement("div");
divBox4.setAttribute("id" , "box4")
divBox4.setAttribute("class" , "ballon")
divBox4.setAttribute("onClick" , "balloon('box4')")
divBox4.className="balloon"


var divBox5 = document.createElement("div");
divBox5.setAttribute("id" , "box5")
divBox5.setAttribute("class" , "ballon")
divBox5.setAttribute("onClick" , "balloon('box5')")
divBox5.className="balloon"



var divBox6 = document.createElement("div");
divBox6.setAttribute("id" , "box6")
divBox6.setAttribute("class" , "ballon")
divBox6.setAttribute("onClick" , "balloon('box6')")
divBox6.className="balloon"


var rowThreeDiv = document.createElement("div")
rowThreeDiv.setAttribute("class", "row-three col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12")
var divBox7 = document.createElement("div");
divBox7.setAttribute("id" , "box7")
divBox7.setAttribute("class" , "ballon")
divBox7.setAttribute("onClick" , "balloon('box7')")
divBox7.className="balloon"



var divBox8 = document.createElement("div");
divBox8.setAttribute("id" , "box8")
divBox8.setAttribute("class" , "ballon")
divBox8.setAttribute("onClick" , "balloon('box8')")
divBox8.className="balloon"


var divBox9 = document.createElement("div");
divBox9.setAttribute("id" , "box9")
divBox9.setAttribute("class" , "ballon")
divBox9.setAttribute("onClick" , "balloon('box9')")
divBox9.className="balloon"

















myBody.appendChild(div1)
div1P.appendChild(div1PText)
div1P.appendChild(div1PSpan);
div1PSpan.appendChild(div1PSpanText)
div1Heading.appendChild(div1HeadingText)
div1.appendChild(div1Heading , div1P);
div1.appendChild(div1P);


myBody.appendChild(div2)

div2FirstChildHeading.appendChild(div2FirstChildHeadingSpan)
div2FirstChild.appendChild(div2FirstChildHeading)
div2FirstChildHeading.appendChild(div2FirstChildHeadingText)
div2.appendChild(div2FirstChild)

div2FirstChild.appendChild(scoreDiv)
scoreDiv.appendChild(scoreDivHeading)
scoreDivHeading.appendChild(scoreDivHeadingText)
scoreDivHeading.appendChild(scoreDivHeadingSpan)
div2.appendChild(mainDiv)
mainDiv.appendChild(rowOneDiv)
rowOneDiv.appendChild(divBox1)


rowOneDiv.appendChild(divBox2)
rowOneDiv.appendChild(divBox3)

mainDiv.appendChild(rowTwoDiv)
rowTwoDiv.appendChild(divBox4)
rowTwoDiv.appendChild(divBox5)
rowTwoDiv.appendChild(divBox6)

mainDiv.appendChild(rowThreeDiv)
rowThreeDiv.appendChild(divBox7)
rowThreeDiv.appendChild(divBox8)
rowThreeDiv.appendChild(divBox9)








console.log(myBody)









var colors = ["darkred","crimson","lime","teal","dodgerblue"];

var ids = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"];


var random=colors[Math.floor(Math.random()*colors.length)];
var matchColor = document.getElementById("matchColor");
var compare = matchColor.style.backgroundColor = random

    for (var i = 0; i < ids.length; i++) {
        var randoms =colors[Math.floor(Math.random() * colors.length)];
        var getId = ids[i];
        var pushh = document.getElementById(getId);
        pushh.style.backgroundColor = randoms

       
    }

var score = 0

var gameOverScore = 0;

function balloon(b) {
    var activeBalloon = document.getElementById(b);

    if(activeBalloon.style.backgroundColor === compare.toLowerCase()) {
        document.getElementById("score").innerText=++score

        randoms =colors[Math.floor(Math.random() * colors.length)];


         for (var i = 0; i < ids.length; i++) {
            var randoms =colors[Math.floor(Math.random() * colors.length)];
            var getId = ids[i];
            var pushh = document.getElementById(getId);
            pushh.style.backgroundColor = randoms
            pushh.style.transition="3s ease"
     
        }

        activeBalloon.animate([   
            { transform: 'translateY(0px)'},
            { transform: 'translateY(-600px)'},
            {transition: '2s'}
        ],{
            duration: 1500
        });
    }

    else{
            alert("Don't Choose Wrong Color,You Have Only 3 Try's")
            ++gameOverScore
        }

        if (gameOverScore === 3){
            var mainId=document.getElementById("mainBranch");
            mainId.style.display = "none"

            document.getElementById("totalScore").innerText=score
            var afterOver = document.getElementById("afterOver");
            afterOver.style.display = "block"

        }


    random=colors[Math.floor(Math.random()*colors.length)];
    matchColor = document.getElementById("matchColor");
    compare = matchColor.style.backgroundColor = random


}

    
    

