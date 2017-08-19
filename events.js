console.log("in the js file");

var outputTargetDiv = document.getElementById('output-target');
var outputTartgetH1 = document.getElementById('output-target');


//When any section is clicked the output target text should be "You clicked on
//the {text of the section} section"

document.body.addEventListener("click", printToDiv);

function printToDiv(e){
	if(e.target.className === "article-section"){
		console.log("e", e);
		outputTargetDiv.innerHTML = `<p>You clicked on the ${e.target.innerHTML} section.</p>`
	}
}

//When the mouse is over the h1 tag, the output element should contain the
//text "You moved your mouse over the header".

document.body.addEventListener("mouseover", mouseOver);

function mouseOver(e){
	if(e.target.id === "page-title"){
		console.log("e", e);
		outputTargetDiv.innerHTML = `<p>You moved your mouse over the header.</p>`
	}
}

//When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

document.body.addEventListener("mouseout", mouseLeave);

function mouseLeave(e){
	if(e.target.id === "page-title"){
		console.log("e", e);
		outputTargetDiv.innerHTML = `<p>You left me!</p>`
	}
}

//When you type characters into the input field, the output element should
//mirror the text in the input field.

document.body.addEventListener("mouseout", mouseLeave);

function mouseLeave(e){
	if(e.target.id === "page-title"){
		console.log("e", e);
		outputTargetDiv.innerHTML = `<p>You left me!</p>`
	}
}


