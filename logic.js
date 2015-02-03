

var box_to_be_active;
var whosturn=0;
var turn=0;
var last_move;

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
		ele.innerHTML="lol";
		ele.style.fontSize=100;
		//ele.style.textAlign="center";

		document.getElementById("gamediv").appendChild(el);
}

function clicked (parameter) {
		if(parameter.value!="")
				return;
		if(turn==9){
				introduce_ele();
				return;
		}
		var curr_id=parameter.id;
		var string= curr_id.slice(1);
		var curr_box=curr_id.slice(1,2)%3;
		
		if(curr_box==0)
				curr_box=3;

		
		if(turn!=0){
			if(curr_box != box_to_be_active){
					tempAlert("Incorrect box chosen",900);
					return;
				}

			document.getElementById(last_move).style.backgroundColor="";
			document.getElementById(curr_id).style.backgroundColor="yellow";

			last_move=curr_id;

			box_to_be_active=string.slice(1)%3;
		
			if(box_to_be_active==0)
				box_to_be_active=3;

			changevalue(parameter);
		}
		else{

			document.getElementById(curr_id).style.backgroundColor="yellow";
			last_move=curr_id;
			box_to_be_active=string.slice(1)%3;
			if(box_to_be_active==0)
				box_to_be_active=3;
			
			changevalue(parameter);
		}
}

function changevalue(parameter){

		if(parameter.value==""){
			whosturn=(whosturn+1)%2;
			turn++;
		}
		else return;

		if (whosturn==1) {
			parameter.value="X";
			//parameter.style.backgroundColor="red";
		}
		else{
			parameter.value="O";
			//parameter.style.backgroundColor="yellow";
		}
		
	//	if(string==11)
	//		document.getElementById(curr_id).style.backgroundColor="orange";
	
		if(turn==9){
			//alert("Game Draw!");
			//history.go(0);
		}
	
}




