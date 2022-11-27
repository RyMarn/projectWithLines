
    var nodeList = [];

    nodeList["comp1010"] = ["false"];
    nodeList["math1500"] = ["false"];
    nodeList["stat1000"] = ["false"];
    nodeList["math1300"] = ["false"];
    nodeList["econ1010"] = ["false"];
    nodeList["comp1020"] = ["false","comp1010"];
    nodeList["math1700"] = ["false","math1500"];
    nodeList["comp1500"] = ["false","comp1010"];
    nodeList["econ1020"] = ["false","econ1010"];
    nodeList["stat2000"] = ["false","stat1000"];
    nodeList["comp2140"] = ["false","comp1020","math1700" ];
    nodeList["comp2160"] = ["false","comp1020"];
    nodeList["comp2000"] = ["false","comp1020","math1300","math1700","stat2000","econ1020","comp1500" ];
    nodeList["math1240"] = ["false","comp1020","math1300","math1700","stat2000","econ1020" ,"comp1500"];
    nodeList["math2000"] = ["false","comp1020","math1300","math1700","stat2000","econ1020" ,"comp1500"];
    nodeList["comp2150"] = ["false","comp2140"];
    nodeList["comp2280"] = ["false","comp2140" , "comp2160" , "math1240"];
    nodeList["comp2080"] = ["false","math1240" , "comp2140"];
    nodeList["comp2130"] = ["false","math1240" , "comp2140"];
    nodeList["math2080"] = ["false","math1240" , "math2000"];

   
    nodeList["comp3000"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3001"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3002"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3003"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3004"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3005"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3006"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3007"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3008"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3009"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp4000"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4001"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4002"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4003"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4004"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4005"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4006"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4007"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4008"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4009"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];


    // Original
    /*
    nodeList["comp1010"] = ["false"];
    nodeList["math1500"] = ["false"];
    nodeList["stat1000"] = ["false"];
    nodeList["math1300"] = ["false"];
    nodeList["econ1010"] = ["false"];
    nodeList["comp1020"] = ["false","comp1010"];
    nodeList["math1700"] = ["false","math1500"];
    nodeList["comp1500"] = ["false","comp1010"];
    nodeList["econ1020"] = ["false","econ1010"];
    nodeList["stat2000"] = ["false","stat1000"];
    nodeList["comp2140"] = ["false","comp1020","math1300","math1700","stat2000","econ1020","comp1500" ];
    nodeList["comp2160"] = ["false","comp1020"];
    nodeList["comp2000"] = ["false","comp1020","math1300","math1700","stat2000","econ1020","comp1500" ];
    nodeList["math1240"] = ["false","comp1020","math1300","math1700","stat2000","econ1020" ,"comp1500"];
    nodeList["math2000"] = ["false","comp1020","math1300","math1700","stat2000","econ1020" ,"comp1500"];
    nodeList["comp2150"] = ["false","comp2140" , "comp2160"];
    nodeList["comp2280"] = ["false","comp2140" , "comp2160" , "math1240"];
    nodeList["comp2080"] = ["false","math1240" , "comp2140"];
    nodeList["comp2130"] = ["false","math1240" , "comp2140"];
    nodeList["math2080"] = ["false","math1240" , "math2000"];

   
    nodeList["comp3000"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3001"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3002"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3003"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3004"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3005"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3006"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3007"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3008"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp3009"] = ["false","comp2150","comp2280", "comp2080", "comp2130","math2080"];
    nodeList["comp4000"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4001"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4002"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4003"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4004"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4005"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4006"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4007"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4008"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    nodeList["comp4009"] = ["false","comp3002","comp3003", "comp3004", "comp3005","comp3006"];
    */






    //Variables for a when a box is clicked
    var borderWidth = "4px";
    var clickedBox = "#00DF9A";


turnGreen();

  $('input[type="checkbox"]').click(function(e) 
  { 
    

    parentID = $(this).parent().attr("id");

    if ( checkReq(parentID))
    {
   
   
    // Change to false;
    if ( nodeList[parentID][0] == "false")
    {
        nodeList[parentID][0] = "true";
        this.parentElement.style.backgroundColor = clickedBox;
        turnGreen();  
        
     }

      else { 
        nodeList[parentID][0] = "false";
        this.parentElement.style.backgroundColor = "#33554a";
        turnGreen();  
      }
    }
    else {
        $(this).prop('checked', !$(this).prop('checked')); // Prevent this from being checked

    }
      
 })


 function checkReq(nodeID) {
    
    for (  var i = 1 ; i < nodeList[nodeID].length; i++   )
    {

        targetNode =  nodeList[nodeID][i] ;
        if (nodeList[targetNode][0] == "false"  || !checkReq(targetNode) )
        {
            return false;
        }
    }
    return true;
  }

  function turnGreen()
  {

    Object.keys(nodeList).forEach(function(x)
    {
        if (nodeList[x][0] == "false"  && checkReq(x )  ) // It's not clicked, and it's requirments are met
        {
            $("#" + x).css("background-color", "#00DF9A ");// show this as clickable
       
        }
        if ( !checkReq(x)) 
        {

            $(`#${x} :first-child`).prop('checked', false); // Uncheck the box
            nodeList[x][0] = "false";
            $("#" + x).css("background-color" , "#33554a");// Prevent this from being check
        }
    })
}


//WedThurs  11:30 AM - 12:30 PM  1
//MWF 10:30 AM - 11:20 AM  2
//MWF 2:30 PM - 3:20 PM 3

//MWF 9:30 AM - 10:20 AM 4
// MWF 8:30 AM - 9:20 AM 5

//WTrs  8:30 AM - 9:30 AM  6
//WTrs  10:30 AM - 12:20 A  7


//MWF 11:30 AM - 12:20 PM  8
//MWF  12:20 PM - 1 :30PM  9

//MWF 1:30 PM - 2:20 PM  10
//MWF  3:30 PM - 4 :20PM  11

//WTrs  12:20 PM - 1:30 PM 12
//WTrs  1:30 PM - 2:20 PM  13
//WTrs  9:30 AM - 10:20 AM  14

//WTrs  2:30 PM - 3:20 PM   15





var courseDesc = [];
courseDesc["sample"] = "This is a default example of a description for a course! In the real world more information would go here"
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='0'> MWF - AM PM *Generic time "


courseDesc["comp1010"] = "An introduction to computer science. Students will learn the basics of computer science and programming using a procedural high level language "
+ "  <p style='text-decoration: underline ;'>Fall 2022:" 
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='1'> TueTr  11:30 AM - 12:30 PM "
+ "<br>   <input type='radio' name='timeOption' id='time-option2'  value='2'>MWF 10:30 AM - 11:20 AM"
+"<br> <input type='radio' name='timeOption' id='time-option3' value='3'> MWF 2:30 PM - 3:20 PM</p> " ;


courseDesc["math1500"] = "A first Year calculus class. Teaches about derivatives, changing functions, riemann sums and slopes "
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='1'> TueTr  11:30 AM - 12:30 PM "
+ " <br> <input type='radio' name='timeOption' id='time-option2'  value='4'>MWF 9:30 AM - 10:20 AM"
+ " <br> <input type='radio' name='timeOption' id='time-option3' value='5'> MWF 8:30 AM - 9:20 AM</p> " 

courseDesc["math1300"] = "Learn about linear algebra. Includes topics on matrixes, linear functions and transformations "
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='6'> TueTr  8:30 AM - 10:30 AM"
+ " <br> <input type='radio' name='timeOption' id='time-option2'  value='4'>MWF 9:30 AM - 10:20 AM"
+ " <br> <input type='radio' name='timeOption' id='time-option3' value='7'> TueTr  10:30 AM - 12:20 AM </p>"

courseDesc["comp1020"] = "Introduction to recursive functions, Object oriented programing and some basic algorithms "
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='6'> TueTr  8:30 AM - 10:30 AM "
+ " <br> <input type='radio' name='timeOption' id='time-option2'  value='8'>MWF 11:30 AM - 12:20 PM "
+ " <br> <input type='radio' name='timeOption' id='time-option3' value='9'> 12:20 PM - 1 :30PM </p>"


courseDesc["econ1010"] = "This is a sample elective course, that the student could pick from a drop down menu. Learn basic Econmics, including demand and supply curves! "
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='6'> TueTr  8:30 AM - 10:30 AM "
+ " <br> <input type='radio' name='timeOption' id='time-option2'  value='10'>MWF 1:30 PM - 2:20 PM "
+ " <br> <input type='radio' name='timeOption' id='time-option3' value='11'> MWF  3:30 PM - 4:20PM</p>"

courseDesc["econ1020"] = "This is a sample elective course, that the student could pick from a drop down menu. Learn basic Econmics, including demand and supply curves! "
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='12'> TueTr  12:20 PM - 1:30  "
+ " <br> <input type='radio' name='timeOption' id='time-option2'  value='13'>TueTr  1:30 PM - 2:20 PM  "
+ " <br> <input type='radio' name='timeOption' id='time-option3' value='11'> MWF  3:30 PM - 4:20PM</p>"


courseDesc["stat1000"] = "Learn the basics of modern statistics using the R-programing language. Includes topics like normal distribution and p-values"
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='12'> TueTr  12:20 PM - 1:30  "
+ " <br> <input type='radio' name='timeOption' id='time-option2'  value='13'>TueTr  1:30 PM - 2:20 PM  "
+ " <br> <input type='radio' name='timeOption' id='time-option3' value='14'> TueTr  9:30 AM - 10:20 AM </p>"


courseDesc["math1700"] = "A second Year calculus class. Teaches about integrals, calcuting volumes, power rule and accumlation functions "
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='12'> TueTr  12:20 PM - 1:30  "
+ " <br> <input type='radio' name='timeOption' id='time-option2'  value='13'>TueTr  1:30 PM - 2:20 PM  "
+ " <br> <input type='radio' name='timeOption' id='time-option3' value='11'> MWF  3:30 PM - 4:20PM</p>"



courseDesc["comp1500"] = "A computer class designed for engineering students. Uses python to teach object oriented topics in computer scince"
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='1'> TueTr  11:30 AM - 12:30 PM "
+ "<br>   <input type='radio' name='timeOption' id='time-option2'  value='2'>MWF 10:30 AM - 11:20 AM"
+"<br> <input type='radio' name='timeOption' id='time-option3' value='15'> TueTr  2:30 PM - 3:20 PM  </p> " ;


courseDesc["stat2000"] = "More advanced topics in statistics are covered in the course. Geared towards students pursuing more mathematically rich careers."
+ " <br> <input type='radio' name='timeOption' id='time-option1' value='1'> TueTr  11:30 AM - 12:30 PM "
+ "<br>   <input type='radio' name='timeOption' id='time-option2'  value='2'>MWF 10:30 AM - 11:20 AM"
+ " <br> <input type='radio' name='timeOption' id='time-option3' value='9'> 12:20 PM - 1 :30PM </p>"




// EVERYTHING RELATD TO THE HIDDEN DIVS

var currentCourseSelected;



//THE FUNCTION THAT RUNS WHEN YOU DOUBLE CLICK THE NODE
function moveDivs(event)
{

        // THIS IS SO WE CAN TARGET WHAT COURSE TO ADD TO THE SCHEDULE IF THE ADD TO SCHEDULE BUTTON IS CLICKED
        var target = event.target || event.srcElement;
        if ( checkReq(target.id)) // WE WILl ONY SHOW THIS POP UP DIV IF IT'S PREREQUISTS ARE FULLfILLED
        {

            // CHANGES COURSE DESCPRITON;
            if ( courseDesc[target.id] !== undefined)
            {
                $("#course-info p").empty();
                 $("#course-info p").first().html(courseDesc[target.id] );
            }
            else {
                $("#course-info p").empty();
                $("#course-info p").first().html( courseDesc["sample"] );
            }

      

    
        currentCourseSelected = target.id;
        var screenWidth = $(window).width();
     
        x=event.pageX;
        y=event.pageY;
        if (x + 250 >  screenWidth)
        {
            x -= 250;
        }
        
        document.getElementById("course-info").style.left=x+"px";
        document.getElementById("course-info").style.top=y+"px";
    
        showHidden();
        
        }
    }


    function showHidden()
    {
       
        document.getElementById("course-info").style.visibility = "visible";
    }

    function hideShown()
    {
        document.getElementById("course-info").style.visibility = "hidden";

    }

    function changeText()
    {
        var element = document.getElementById("schedule-btn");
        if(element.innerHTML =="Add To Schedule")
        element.innerHTML = "Remove from Schedule";
        else
        element.innerHTML = "Add To Schedule";
    }


    //THIS CHANGES WHETHER THE BUTTON SAYS ADD TO ADD OR REMOVE FROM SCHEDULE
    function changeCourseInfo(text)
    {
        var courseTxt = document.getElementById("course-info-txt");

        courseTxt.innerHTML = text;

           //SETTING WHAT THE Remove from Schedule / ADD TO SCHEDULE BUTTON SHOULD LOOK LIKE
           var courseTarget = document.getElementById("course-info-txt").textContent;
           var addRemoveButton = document.getElementById("schedule-btn");
   

           if ( checkIfCourseInSchedule(courseTarget))
           {
               
               addRemoveButton.innerHTML = "Remove from Schedule";
           }
           else {
               addRemoveButton.innerHTML = "Add To Schedule";
   
           }
    }
    
  

function showDiv(element)
{
   
    var x = document.getElementById(element);
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }


}


//WHAT ACTUALLY HAPPENS WHEN YOU CLICK THE ADD TO / REMOVE SCHEDULE BUTTON
function changeBtnText(element)
{
    var courseTarget = document.getElementById("course-info-txt").textContent;
      
 
    // WHERE WE SET OUR TARGET
    var x = document.getElementById(element);
    if(x.innerHTML === "Add To Schedule")
    {
        if ( addToSchedule(courseTarget) )
    {
    changeText(x,"Remove From Schedule");
    }
    }
    else {
    
      removeFromSchedule(courseTarget);
      changeText(x,"Add To Schedule");
    }
  }

function removeFromSchedule( inputCourse)
{

  for ( var i = 1 ; i < 6; i++)
  {
      var target = "course" + i;
   
      if ( localStorage[target] == inputCourse)
      {
        localStorage[target] = "";
      }
  }
}   





// cHECK IF IF THE INPUT COURSE IS IN THE SCHEDULE;
function checkIfCourseInSchedule( inputCourse)
{
    for ( var i = 1 ; i < 6; i++)
{
    var target = "course" + i;
 
    if ( localStorage[target] == inputCourse)
    {
        return true;
    }
}
    return false;
}



 var courseTimes = [];
courseTimes["COMP 1010"] = [1,2,3];
courseTimes["math 1010"] = ["MWF", 9301020];


//ADD TO SCHDULE - Returns true if added, else returns false
function addToSchedule(inputCourse)
{

  $("#clean-away").remove();

  var time_option ;
  if (document.getElementById('time-option1').checked)
  {
    time_option = document.getElementById('time-option1').value;
  }
  else if (document.getElementById('time-option2').checked)
  {
    time_option = document.getElementById('time-option2').value;
  }

  else if (document.getElementById('time-option3').checked)
  {
    time_option = document.getElementById('time-option3').value;
  }
  else {
      $("#course-info p").last().after("<p id='clean-away' style='color: red;' > *You must Select a time</p>");
      return false;
  }
  

  // CHECK FOR OVERLAPPING TIMES  
  for ( var i = 1 ; i < 7; i++)
  {
     
      var target = "course" + i;
   
      if ( time_option != 0 && localStorage[target] != "" &&  localStorage[target] != null )
      {

        target += "_time";
        if ( localStorage[target] == time_option )
        {
          //alert("That time spot has already been taken by another course!");

          $("#course-info p").last().after("<p id='clean-away' style='color: red;' > *That time spot has already been taken by another course!</p>");
          return false;
        }

          
      }
  }


    for ( var i = 1 ; i < 7; i++)
{
   
    var target = "course" + i;
 
    if ( localStorage[target] == "" ||  localStorage[target] == null )
    {
        localStorage.setItem(target, inputCourse);

        target += "_time";
        localStorage.setItem(target, time_option);

        return true;
    }
    }
    $("#course-info p").last().after("<p id='clean-away' style='color: red;' > *Schedule is full! Maximum of 5 courses allowed. <br> Remove courses before adding more!</p>");

    //alert("Schedule is full! Maximum of 5 courses allowed, remove courses before adding more ")
    return false;
}


function changeText(element , text)
{
 
    element.innerHTML =text;

}

function hideElement(element)
{
    wait(500);
    var element = document.getElementById(element);
    element.style.visibility = 'hidden';
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

 function checksearch(field , link)
 {
    var element = document.getElementById((field));

    if(element.value ==="")
    alert("Error: Please enter a major");
    else
    document.location.href = link;

 }

 function checkUserAndPass(user , pass , link)
 {
    var userE = document.getElementById(user);
    var passE = document.getElementById(pass);
    
    if(userE.value ==="" || passE.value ==="")
    alert("Error: Username or password are missing");
    else
    document.location.href = link

 }






 //THIS FUNCTION DRAW LINES FROM A COURSE NODE TO A YEAR DIV 
function adjustLineYear(from, to, line){
    var fT = from.offsetTop  + from.offsetHeight/2;
     var tT = to.offsetTop 	 + to.offsetHeight/2;
     var fL = from.offsetLeft + from.offsetWidth/2;
     var tL = to.offsetLeft 	 + to.offsetWidth/2;
     
     var CA   = Math.abs(tT - fT);
     var CO   = Math.abs(tL - fL);
     var H    = Math.sqrt(CA*CA + CO*CO);
     var ANG  = 180 / Math.PI * Math.acos( CA/H );
   
     if(tT > fT){
         var top  = (tT-fT)/2 + fT;
     }else{
         var top  = (fT-tT)/2 + tT;
     }
     if(tL > fL){
         var left = (tL-fL)/2 + fL;
     }else{
         var left = (fL-tL)/2 + tL;
     }
   
     if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
       ANG *= -1;
     }
     top-= H/2;
   
     line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
     line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
     line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
     line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
     line.style["-transform"] = 'rotate('+ ANG +'deg)';
    
    
     line.style.top    = top +'px';
     line.style.left   = left+'px';
     line.style.height = H + 'px';
   }

 function adjustLine(from, to, line){
 var fT = from.offsetTop  + from.offsetHeight/2;
  var tT = to.offsetTop 	 + to.offsetHeight/2;
  var fL = from.offsetLeft + from.offsetWidth/2;
  var tL = to.offsetLeft 	 + to.offsetWidth/2;
  
  var CA   = Math.abs(tT - fT);
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top + 12 +'px';
  line.style.left   = left+'px';
  line.style.height = H + 'px';
}

//THIS FUNCTION DRAWS ALL OF THE LINES
function drawLine()
{
adjustLine(
  document.getElementById('comp1010'), 
  document.getElementById('comp1020'),
  document.getElementById('line1')
);
adjustLine(
    document.getElementById('math1500'), 
    document.getElementById('math1700'),
    document.getElementById('line2')
  );

  adjustLine(
    document.getElementById('comp1010'), 
    document.getElementById('comp1500'),
    document.getElementById('line3')
  );

  adjustLine(
    document.getElementById('econ1010'), 
    document.getElementById('econ1020'),
    document.getElementById('line4')
  );

  adjustLine(
    document.getElementById('stat1000'), 
    document.getElementById('stat2000'),
    document.getElementById('line5')
  );



  adjustLine(
    document.getElementById('comp1020'), 
    document.getElementById('comp2160'),
    document.getElementById('line6')
  );

  adjustLine(
    document.getElementById('math1700'), 
    document.getElementById('comp2140'),
    document.getElementById('line7')
  );



  adjustLine(
    document.getElementById('comp2160'), 
    document.getElementById('comp2280'),
    document.getElementById('line8')
  );

  adjustLine(
    document.getElementById('comp2140'), 
    document.getElementById('comp2280'),
    document.getElementById('line9')
  );

  adjustLine(
    document.getElementById('comp2140'), 
    document.getElementById('comp2150'),
    document.getElementById('line10')
  );



  adjustLine(
    document.getElementById('math1240'), 
    document.getElementById('comp2280'),
    document.getElementById('line11')
  );

  adjustLine(
    document.getElementById('math1240'), 
    document.getElementById('comp2080'),
    document.getElementById('line12')
  );

  adjustLine(
    document.getElementById('comp2160'), 
    document.getElementById('comp2080'),
    document.getElementById('line13')
  );


 
  
  adjustLine(
    document.getElementById('math2000'), 
    document.getElementById('math2080'),
    document.getElementById('line14')
  );


    
  adjustLine(
    document.getElementById('math1240'), 
    document.getElementById('math2080'),
    document.getElementById('line15')
  );

  adjustLine(
    document.getElementById('math1240'), 
    document.getElementById('comp2130'),
    document.getElementById('line16')
  );

  adjustLineYear(
    document.getElementById('math1240'), 
    document.getElementById('second-year'),
    document.getElementById('line17')
  );
  adjustLineYear(
    document.getElementById('comp2000'), 
    document.getElementById('second-year'),
    document.getElementById('line18')
  );

  adjustLineYear(
    document.getElementById('math2000'), 
    document.getElementById('second-year'),
    document.getElementById('line19')
  );


  
  adjustLine(
    document.getElementById('comp1020'), 
    document.getElementById('comp2140'),
    document.getElementById('line20')
  );

 


}


//THIS VARIABLE KEEP TRACK OF IF THE LINES ARE ON OR OFF
var linesOn = false;
$("#line-info").hide();


// this monitors the line button, if it has been chcked
function toggleLines()
{

    if ( !linesOn)
    {
   $(".line").show();
   $("#line-info").show();

    drawLine();
    linesOn = true;
    }
    else {
        // Makes the lines invisable 
        linesOn = false;
        $(".line").hide();
        $("#line-info").hide();

    }
};

// IF THE WINDOW RESIZES WE NEED TO REDRAW THE LINES
$( window ).resize(function() {
   
    if ( linesOn) // ONLY REDRAW THE LINES IF THE FEATURE IS TURNED ON
    {
    drawLine();
    }
});




 