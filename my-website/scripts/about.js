function aboutMe()
{
    document.getElementById("demo").innerHTML = "<h3><u>Introduction:</u></h3><br>This is Pola Thanusha.<br>I completed my graduation from Gokaraju Rangaraju Institute of Engineering and Technology.<br>"+
                                                   "At present,I am working as an intern in Zemoso Technologies,Hyderabad.<br>"+
                                                   "<h3><u>Hobbies:</u></h3>I love to play badminton.<br>I watch Korean Series.<br>"+
                                                   "<h3><u>Technical Skills:</u></h3> Knowledge on C,C++,Java,SQL,CSS,HTML<br>"+
                                                   "Have a good Knowledge on Data Structures,Operating Systems<br>"+
                                                   "Have baisc knowledge on Git Version Control.";
                                                 
}

function home()
{
    document.getElementById("demo").innerHTML = "Hello Everyone...!!<br> This is Pola Thanusha Reddy."+
                                                   "<br>Welcome to my website.<br>"+
                                                   "<img src='images/minion.png' align='right'></img>";
}

function displaySubmit()
{
    window.alert("You would receive a mail shortly");
}
function contact()
{
    document.getElementById("demo").innerHTML = "<center>Wanna get in touch with me ...!!!.Then feel free to fill the form. You would receive a mail from me.</center>"+
                                                "<head><style> input[type=text]  {width: 35%;margin:6px 0px ;float:center;} form{ width:40%;} label{ width: 180px;float:left;clear:left;text-align:left;margin:6px 0px}</style></head><body>"  +
                                                "<center><br><br><br><br>"+
                                                   
                                                  "<div><form ><fieldset><legend><strong>FORM</strong></legend>"+
                                                  "<label>Full Name    : </label><input type=text placeholder='Enter Full Name'><br>"+
                                                  "<label>Email Id     : </label><input type=text placeholder='Enter mail id'><br>"+
                                                  "<label>Mobile Number: </label><input type=text placeholder='Enter mobile number'><br><br>"+
                                                  "<center><input type=submit value=Submit onClick=displaySubmit()><br></center>"+
                                                  "</fieldset></form></div></center></body>"
}



function gallery()
{
    document.getElementById("demo").innerHTML="<img src='images/zemoso.jpeg'>"+
                                            "<img src='images/zemoso1.jpeg'>"+
                                            "<img src='images/zemoso2.jpeg'>"+
                                            "<img src='images/zemoso3.jpeg'>"
}


