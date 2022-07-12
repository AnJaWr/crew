
$(document).ready(function(){
    function selectLanguage(form) {
	let selectLanguageArr = [];
	let inputFields =  form.querySelectorAll('input[type="checkbox"][class="language"]') ; 
	let inputFieldsNumber = inputFields.length;

	for(let i=0; i<inputFieldsNumber; i++) {
		if(
			inputFields[i].type == 'checkbox' &&
			inputFields[i].checked == true
		) selectLanguageArr.push(inputFields[i].value);
	}
	return selectLanguageArr;
}

var getLanguageButton = document.getElementById('getLanguageButton');
getLanguageButton.addEventListener("click", function(){
	let selectedCheckBoxes = selectLanguage(this.form);
	
  let filtered = members.filter((member) => {
	return selectedCheckBoxes.every((selected) => {
		return member.język.some((język) => {
    	    return język['język'] === selected;
        });
	});
});
$("#crew>div").remove();
 findMembers(filtered); 
});
})