$(document).ready(function(){
  

console.log(members)

// function setAttributes(el, attrs) {
//   for(var key in attrs) {
//     el.setAttribute(key, attrs[key]);
//   }
// }

function populate(obj) {

  const zaloga = members
 
  const women= zaloga.filter(member => member.sex  === "kobieta");
  console.log(women)
  const men = zaloga.filter(member => member.sex  === "mężczyzna");
  const mutant = zaloga.filter(member => member.mutacja  !== "");
  const kids = zaloga.filter(member => member.wiek < 15);
  const aktywni = zaloga.filter(member => member.status === "aktywny");


let women_number = women.length;
let men_number = men.length;
let mutants_number = mutant.length;
let kids_number = kids.length;
let liczba_aktywnych = aktywni.length
statystyka(liczba_aktywnych, women_number, men_number, kids_number, mutants_number);
 }

populate(members);


 function findMembers(obj) {
  // console.log("twórz akta")
  const crewMember = obj
  const mainContainer = document.getElementById("crew");

  for (const member of crewMember) {
    const member_container =  document.createElement('div');    
    const mPortret = document.createElement('div');
    const mName = document.createElement('h2');
    const mWiek = document.createElement('p');
    const mPlec = document.createElement('p');
   const mStanCyw = document.createElement('p');
    const mDzieci= document.createElement('p');
    const mJezyki = document.createElement('p');
    const mStopień = document.createElement('p');
    const mFunkcja = document.createElement('p');
    const mStanowisko = document.createElement('p');
    const mWachta = document.createElement('p');
    const mLike = document.createElement('p');
    const mDislike = document.createElement('p');
    const mMutacja= document.createElement('p');
    const mStatus = document.createElement('p');
    const mOpis = document.createElement('p');


    mName.textContent = `Imię i nazwisko: ${member.imię} ${member.nazwisko}`;
    mWiek.textContent = `Wiek: ${member.wiek}`;
    mPlec.textContent = `Płeć: ${member.sex}`;
    mStanCyw.textContent = `Stan cywilny: ${member.stan_cywilny}`;
    mDzieci.textContent = `Dzieci:  ${member.dzieci}`;
    mJezyki.textContent = `Języki: ${member.język}`
    mStopień.textContent = `Stopień: ${member.stopień}`;
    mFunkcja.textContent = `Funkcja: ${member.funkcja}`;
    mStanowisko.textContent = `Stanowisko: ${member.stanowisko}`;
    mWachta.textContent = `Wachta/zmiana: ${member.zmiana}`;
    mLike.textContent = `Lubi: ${member.lubi}`;
    mDislike.textContent = `Nie lubi: ${member.nielubi}`;
    mMutacja.textContent = `Mutacja: ${member.mutacja}`;
    mStatus.textContent = `Status: ${member.status}`;
    mOpis.textContent = `Opis: ${member.opis}`;



    
    mStatus.setAttribute("class", member.status === "aktywny" ? "status active" : "status dead");
    mPortret.setAttribute("class", "portret");
    mPortret.setAttribute("style", "background-image:url(" + member.portret + ")")
    mName.setAttribute("class", "name");
    mWiek.setAttribute("class", "wiek");
    mStanCyw.setAttribute("class", member.stan_cywilny === "singiel" ? "singiel" : "w_zwiazku");
    mPlec.setAttribute( "class", member.sex === "kobieta"? "kobieta" : "mężczyzna");
    mDzieci.setAttribute("class", "dzieci");
    mJezyki.setAttribute("class", "jezyki")
    mStopień.setAttribute("class", "stopien");
    mFunkcja.setAttributeNS= `Funkcja: ${member.funkcja}`;
    mStanowisko.setAttribute("class", "stanowisko");
    mWachta.setAttribute("class", "zmiana");;
    mLike.setAttribute("class", "like");
    mDislike.setAttribute("class", "dislike");
    mMutacja.setAttribute("class", "mutation");
    mStatus.setAttribute("class", "status");
    mOpis.setAttribute("class", "opis");


    mainContainer.appendChild(member_container);
    member_container.appendChild(mPortret)
    member_container.appendChild(mName);
    member_container.appendChild(mWiek);
    member_container.appendChild(mPlec);
    member_container.appendChild(mStanCyw);
    member_container.appendChild(mDzieci);
    member_container.appendChild(mJezyki);
    member_container.appendChild(mStopień);
    member_container.appendChild(mFunkcja);
    member_container.appendChild(mStanowisko);
    member_container.appendChild(mWachta);
    member_container.appendChild(mLike);
    member_container.appendChild(mDislike);
    member_container.appendChild(mMutacja);
    member_container.appendChild(mStatus);
    member_container.appendChild(mOpis);

 
   $("#crew").children('div').addClass("member");
  
 }};

findMembers(members);

 function statystyka(a,b,c,d,e){
  const statistic = document.getElementById("statistic");
  const statistic_container = document.createElement('div');
  const lcrew = document.createElement('p');
  const lwomen = document.createElement('p');
  const lmen = document.createElement('p');
  const lkids= document.createElement('p');
  const lmutants = document.createElement('p');
 
  lcrew.textContent = `Liczebność załogi: ` + a + ' || ';
  lwomen.textContent = `Liczba kobiet: ` + b + ' || ';
  lmen.textContent = `Liczba mężczyzn: ` + c + ' || ';
  lkids.textContent = `Liczba dzieci: ` + d+ ' || ';
  lmutants.textContent = `Liczba osób z mutacjami: ` + e ;


  statistic.appendChild(statistic_container);
  statistic_container.append(lcrew);
  statistic_container.append(lwomen);
  statistic_container.append(lmen);
  statistic_container.append(lkids);
  statistic_container.append(lmutants);
   
  $("#statistic").children('div').addClass("akta");

};
let checkbox = document.querySelectorAll('input[type="checkbox"][class="one"]') ;  
let checkbox_checked=["","","",""];

var wybor_plci; 
var wybor_stanu ;

 


    
function checkboxHandle(obj){

    if (checkbox[0].checked)  {checkbox_checked.fill(checkbox[0].value, 0,1,2)}else{checkbox_checked.fill("",0,1,2)}
    if (checkbox[1].checked)  {checkbox_checked.fill(checkbox[1].value, 1,2,3)}else{checkbox_checked.fill("",1,2,3)}
    if (!checkbox[0].checked && !checkbox[1].checked ){checkbox_checked.splice(0, 2, "kobieta", "mężczyzna")}
    if (checkbox[2].checked ) {checkbox_checked.fill(checkbox[2].value, 2,3,4)}else{checkbox_checked.fill("",2,3,4)}
    if (checkbox[3].checked ) {   checkbox_checked.fill(checkbox[3].value, 3,4,5)}else{checkbox_checked.fill("",3,4,5)}
    if (!checkbox[2].checked && !checkbox[3].checked ){checkbox_checked.splice(2, 3, "singiel", "w_związku")};


    if (checkbox[0].checked)  {wybor_plci = checkbox[0].value}
   else if (checkbox[1].checked)  {wybor_plci = checkbox[1].value}
    // if (checkbox[1].checked&&checkbox[1].checked)  {wybor_plci = `"kobieta"`, "mężczyzna"}
    if (checkbox[2].checked ) {wybor_stanu = checkbox[2].value}
   else if (checkbox[3].checked ) {wybor_stanu = checkbox[2].value}

    console.log(checkbox_checked);
    console.log(wybor_plci)

let ludzie = members;



//   var i;
//   var wybrani = {};
// checkbox.forEach(function() {
//     if (checkbox.checked){
//       console.log(checkbox.checked.value);
for (const member of ludzie){
  wybrani = ludzie.filter(member => member.sex === wybor_plci && member.stan_cywilny === wybor_stanu)  
 
}

 findMembers(wybrani)
  // var m_container = $(".member")

console.log(wybrani)

}
// findMembers(wybrani)

 



Array.prototype.forEach.call(checkbox, function(checkbox){
checkbox.addEventListener('change', checkboxHandle)
})


});
    
       // if (checkbox[0].checked)  {checkbox_checked.fill(checkbox[0].value, 0,1,2)}else{checkbox_checked.fill("",0,1,2)}
    // if (checkbox[1].checked)  {checkbox_checked.fill(checkbox[1].value, 1,2,3)}else{checkbox_checked.fill("",1,2,3)}
    // if (!checkbox[0].checked && !checkbox[1].checked ){checkbox_checked.splice(0, 2, "kobieta", "mężczyzna")}
    // if (checkbox[2].checked ) {checkbox_checked.fill(checkbox[2].value, 2,3,4)}else{checkbox_checked.fill("",2,3,4)}
    // if (checkbox[3].checked ) {   checkbox_checked.fill(checkbox[3].value, 3,4,5)}else{checkbox_checked.fill("",3,4,5)}
    // if (!checkbox[2].checked && !checkbox[3].checked ){checkbox_checked.splice(2, 3, "singiel", "w_związku")};
  //   (checkbox[1].checked){$(mezczyzna_p).each(
  //     function() {
  //       $(".mężczyzna").parent().show();
  //     })}else{$(".mężczyzna").parent().hide();}

  // if (checkbox[2].checked){$(singiel_p).each(
  //     function() {
  //         $(".singiel").parent().show();
  //       })}else{$(".singiel").parent().hide();}
  
  //   if (checkbox[3].checked){$(w_zwiazku_p).each(
  //     function() {
  //       $(".w_zwiazku").parent().show();
  //       })}else{$(".w_zwiazku").parent().hide();}

  

  //  if (checkbox[2].checked ) {checkbox_checked.fill(checkbox[2].value, 2,3,4)}else{checkbox_checked.fill("",2,3,4)}
  //  if (checkbox[3].checked ) {   checkbox_checked.fill(checkbox[3].value, 3,4,5)}else{checkbox_checked.fill("",3,4,5)}}

    //  if (checkbox[1].checked)  {checkbox_checked.fill(checkbox[1].value, 1,2,3)}else{checkbox_checked.fill("",1,2,3)}
    //  if (checkbox[2].checked ) {checkbox_checked.fill(checkbox[2].value, 2,3,4)}else{checkbox_checked.fill("",2,3,4)}
    //  if (checkbox[3].checked ) {   checkbox_checked.fill(checkbox[3].value, 3,4,5)}else{checkbox_checked.fill("",3,4,5)}}

      // console.log(checkbox_input.checked + checkbox_input)
        // input_value = "." + checkbox_checked.toString() + " ";
        // console.log("checkbox checked " + checkbox_checked.filter(function(e){return e}))
        // console.log("pokaz" + input_value)
    //  $(input_value).parent().toggle();}
    //  checkbox_checked=["a","b"];
    //  $(".member").hide();
    //  }
    //  .filter(function(e){return e})

// if (checkbox_checked[0] === "kobieta" ) {$("p.kobieta").parent().show()}
// // else{ $("p.kobieta").parent().hide()}  
// else if (checkbox_checked[0] !== "kobieta" ){ $("p.kobieta").parent().hide()} 
// else if (checkbox_checked[1] === "mężczyzna" ){ $("p.mężczyzna").parent().show()} 
// else if (checkbox_checked[1] !== "mężczyzna" ){ $("p.mężczyzna").parent().hide()} 
// // else{ $("p.mężczyzna").parent().hide()} 
// else if (checkbox_checked[2]  === "singiel" ){ $("p.singiel").parent().show() }
// else if (checkbox_checked[2]  !== "singiel" ){ $("p.singiel").parent().hide() }
// // else{ $("p.singiel").parent().hide() }
// else if (checkbox_checked[3] === "w_zwiazku" ){ $("p.w_zwiazku").parent().show()} 
// else if (checkbox_checked[3] !== "w_zwiazku" ){ $("p.w_zwiazku").parent().hide()} 
// else{ $("p.w_zwiazku").parent().hide()}
//     var a;
//  for (a = 0; a < members_div.length; a++){
// if(){}
//  }


// }  
  
     // let members_div= document.querySelectorAll('[class="member"]') ;
    // let members_p= document.querySelectorAll('div[class="member"]>p') ;
//     let kobieta_p = document.querySelectorAll('p[class="kobieta"]') ;
//     let mezczyzna_p = document.querySelectorAll('p[class="mężczyzna"]') ;
//     let singiel_p =document.querySelectorAll('p[class="singiel"]') ;
// let w_zwiazku_p = document.querySelectorAll('p[class="w_zwiazku"]') ;

//  console.log(checkbox_input);

    


//  for (i = 0; i < checkbox.length; i++) {
//      if (checkbox[0].checked)  {
//      checkbox_checked.fill(checkbox[0].value, 0,1,2);
//    }else{checkbox_checked.fill("",0,1,2)}

// let women_checked = checkbox[0].checked;
// let men_checked = checkbox[1].checked;
// let singiel_checked  = checkbox[2].checked;
// let w_zwiazku_checked = checkbox[3].checked;

// if (this.value === "singiel"){
// $(".w_zwiazku").parent().hide();
// $(".singiel").parent().show();
// }
// else if (this.value === "w_zwiazku"){
//   $(".singiel").parent().hide();
//   $(".w_zwiazku").parent().show();
// }else if (this.value === "obojetne"){
//   $(".singiel").parent().show();
//   $(".w_zwiazku").parent().show();
// }
// }
    

// let input_value = "";
// // Związki
// // let checkboxs = document.querySelectorAll('input[type="checkbox"][name="sex"]')

//   let checkbox_input = document.querySelectorAll('input[type="checkbox"].one')  
//   let checkbox_checked=[];
// function checkboxHandle(e){
//   // let checkbox_input = document.querySelectorAll('input[type="checkbox"].one')  
//   // var checkbox_input = document.forms[0];
//  console.log(checkbox_input);
// $(".member").hide();
// var i;
//  for (i = 0; i < checkbox_input.length; i++) {
//      if (checkbox_input[i].checked) {
//      checkbox_checked.push(checkbox_input[i].value)
    
//       // console.log(checkbox_input.checked + checkbox_input)
//         input_value = input_value + checkbox_input[i].value + " ";
//         console.log("pokaz" + input_value)
//      $(`.`+input_value).parent().show();}
//      input_value=""
  

// // }  

// $(kobieta_p).each(
//   function() {
//     $(".kobieta").parent().show();
//     {$(".mężczyzna").parent().hide();}
//   })}
//   else if (women_checked && men_checked){$(members_div).show();}
//   else if (men_checked && !women_checked){$(kobieta_p).each(function() {
//       $(".mężczyzna").parent().show();
//       $(".kobieta").parent().hide();})}
  
 
// if (singiel_checked && !w_zwiazku_checked){$(singiel_p).each(
//    function() {
//    $(".singiel").parent().show();
//      {$(".w_zwiazku").parent().hide();}
//   }
// )}
// else if (singiel_checked && w_zwiazku_checked && women_checked && men_checked){$(members_div).show();}

// else if(w_zwiazku_checked && !singiel_checked){$(w_zwiazku_p).each(function() {
//   $(".mężczyzna").parent().show();
//   $(".kobieta").parent().hide();}
  

// $(".member").hide() 
    // var i;
    // for (i = 0; i < checkbox.length; i++)
// let checkbox_checked=["","","",""].join('').split('');
// let women_checked = checkbox[0].checked;
// let men_checked = checkbox[1].checked;
// let singiel_checked  = checkbox[2].checked;
// let w_zwiazku_checked = checkbox[3].checked;

    // if (checkbox[0].checked)  {checkbox_checked.fill(checkbox[0].value, 0,1,2)}else{checkbox_checked.fill("",0,1,2)}
    // if (checkbox[1].checked)  {checkbox_checked.fill(checkbox[1].value, 1,2,3)}else{checkbox_checked.fill("",1,2,3)}
    // if (!checkbox[0].checked && !checkbox[1].checked ){checkbox_checked.splice(0, 2, "kobieta", "mężczyzna")}
    // if (checkbox[2].checked ) {checkbox_checked.fill(checkbox[2].value, 2,3,4)}else{checkbox_checked.fill("",2,3,4)}
    // if (checkbox[3].checked ) {   checkbox_checked.fill(checkbox[3].value, 3,4,5)}else{checkbox_checked.fill("",3,4,5)}
    // if (!checkbox[2].checked && !checkbox[3].checked ){checkbox_checked.splice(2, 3, "singiel", "w_związku")};