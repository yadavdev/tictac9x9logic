

var box_to_be_active=-1;
var whosturn=0;
var turn=0;
var box_active=[1,1,1,1,1,1,1,1,1,1];
function win(parameter){
	curr_id=parameter.id;
	box=curr_id.slice(1,2);
	dabba1=document.getElementById("b"+box+1).value;
	dabba2=document.getElementById("b"+box+2).value;
	dabba3=document.getElementById("b"+box+3).value;
	dabba4=document.getElementById("b"+box+4).value;
	dabba5=document.getElementById("b"+box+5).value;
	dabba6=document.getElementById("b"+box+6).value;
	dabba7=document.getElementById("b"+box+7).value;
	dabba8=document.getElementById("b"+box+8).value;
	dabba9=document.getElementById("b"+box+9).value;
	var whowon=-1;
	if((dabba1==dabba2 && dabba1!="" && dabba1==dabba3) || (dabba4==dabba5 && dabba5!="" && dabba5==dabba6) || (dabba7==dabba8 && dabba8!="" && dabba8==dabba9) || 
		(dabba1==dabba4 && dabba4!="" && dabba4==dabba7) || (dabba2==dabba8 && dabba5!="" && dabba5==dabba8) || (dabba3==dabba6 && dabba6!="" && dabba6==dabba9) || 
		(dabba1==dabba5 && dabba5!="" && dabba5==dabba8) || (dabba3==dabba5 && dabba5!="" && dabba5==dabba7) ){

		if(whosturn==1)
					whowon=1;
		else whowon=2;
		alert("player"+whowon+" won!");
		//since box is now won we restrict acess to this box;
		box_to_be_active=-1;
		box_active[box]=-10;
	}






}


function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:30%;left:45%;background-color:grey;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}

function introduce_ele () {
		var ele=document.createElement("div");
		
		ele.setAttribute("style","position:absolute;width:85px;height:68px;font-size:60px;background-color:grey;overflow:hidden; text-align:center");
		ele.innerHTML="X";

		document.getElementById("box1").appendChild(ele);
}

function clicked (parameter) {
		//alert(parameter.id + " clicked");
		//return;
		if(parameter.value!="") //incase the button is already pressed ...don't do anything
				return;
		// if(turn==9){
		// 		introduce_ele();
		// 		return;
		// }

		var curr_id=parameter.id;
		var string= curr_id.slice(1);
		var curr_box=curr_id.slice(1,2);

		if(turn!=0 && box_to_be_active!= -1){

			if(curr_box != box_to_be_active){
					tempAlert("Incorrect box chosen",900);
					return;
				}
			//alert(box_to_be_active);
			document.getElementById("box"+box_to_be_active).style.backgroundColor="";


			box_to_be_active=string.slice(1);
			//alert(box_to_be_active);

			changevalue(parameter);
			if(box_to_be_active!=-1)
				document.getElementById("box"+box_to_be_active).style.backgroundColor="yellow";

		}
		else{

			//document.getElementById(curr_id).style.backgroundColor="yellow"; //color of the box according to original wrong idea.
			//just before box_to_be_active condition for win checks so that if a box is now out of scope then box to active becomes -1

			box_to_be_active=string.slice(1);
			
//win-logic 

			//if(either win or draw)
				//document.getElementById("box"+box_to_be_active).style.backgroundColor="";
			changevalue(parameter);
			if(box_to_be_active!=-1)
			document.getElementById("box"+box_to_be_active).style.backgroundColor="yellow";
			
		}
}

function changevalue(parameter){
			

		whosturn=(whosturn+1)%2;	
			turn++;

		if (whosturn==1) {
			parameter.value="X";
			//parameter.style.backgroundColor="red";
		}
		else{
			parameter.value="O";
			//parameter.style.backgroundColor="yellow";
		}
		
		if(turn>4)
				win(parameter);


		document.getElementById("turnplayer").value="Turn: Player#"+eval(turn%2+1);
	//	if(string==11)
	//		document.getElementById(curr_id).style.backgroundColor="orange";
	
	/*	if(turn==9){
			alert("Game Draw!");
			history.go(0);
		}*/ 
	
}
