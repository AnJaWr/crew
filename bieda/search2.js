$(document).ready(function(){
  let kobieta
  

const  member_container = document.getElementsByClassName("member");
// ==========================getting data from json ===============

async function populate() {
const requestURL = 'zaloga.json';
const request = new Request(requestURL);
const response = await fetch(request);
const crew = await response.json();
// createBox(crew);
statistic(crew);
setSex(crew);
 };

populate();



  // ========================== creating ststistic box===============

 function statistic(obj) {
  const crew = obj['members'];
  const women = crew.filter(member => member.sex  === "kobieta");
  const men = crew.filter(member => member.sex  === "mężczyzna");
  const mutant = crew.filter(member => member.mutacja  !== "");
  const kids = crew.filter(member => member.wiek < 15);

let women_number = women.length;
let men_number = men.length;
let mutants_number = mutant.length;
let kids_number = kids.length;
const statistic = document.getElementById("statistic");

 
  const count_crew = Object.keys(crew).length;
  const statistic_container = document.createElement('div');
  // statistic_container.attr("class", "akta");
  const lcrew = document.createElement('p');
  const lwomen = document.createElement('p');
  const lmen = document.createElement('p');
  const lkids= document.createElement('p');
  const lmutants = document.createElement('p');
 
  lcrew.textContent = `Liczebność załogi: ` + count_crew + ' || ';
  lwomen.textContent = `Liczba kobiet: ` + women_number + ' || ';
  lmen.textContent = `Liczba mężczyzn: ` + men_number + ' || ';
  lkids.textContent = `Liczba dzieci: ` + kids_number + ' || ';
  lmutants.textContent = `Liczba osób z mutacjami: ` + mutants_number ;


  statistic.appendChild(statistic_container);
  statistic_container.append(lcrew);
  statistic_container.append(lwomen);
  statistic_container.append(lmen);
  statistic_container.append(lkids);
  statistic_container.append(lmutants);
   
  $("#statistic").children('div').addClass("akta");

  setSex(women, men, mutant, kids)
};


// ============================================== find Member ===========================================

function setSex (obj, obj, obj, obj){ 
let wm =obj[women];
let m = obj[men];
let mu = obj[mutants];
let k =obj[kids];

  if($('#sex_k').is(':checked')) {  
$(wm).forEach(kobieta => {
  for (let key in kobieta) { 
        const member_container =  document.createElement('div');    
        // const mPortret = document.createElement('div');
        const mName = document.createElement('h2');
          
const mainContainer = document.getElementById("crew");
        // const mWiek = document.createElement('p');
        // const mPlec = document.createElement('p');
        // const mDzieci= document.createElement('p');
        // const mJezyki = document.createElement('p');
        // const mStopień = document.createElement('p');
        // const mFunkcja = document.createElement('p');
        // const mStanowisko = document.createElement('p');
        // const mWachta = document.createElement('p');
        // const mLike = document.createElement('p');
        // const mDislike = document.createElement('p');
        // const mMutacja= document.createElement('p');
        // const mStatus = document.createElement('p');
        // const mOpis = document.createElement('p');
    
    
        mName.textContent = `Imię i nazwisko: ${kobieta.imię} ${kobieta.nazwisko}`;
        // mWiek.textContent = `Wiek: ${member.wiek}`;
        // mPlec.textContent = `Płeć: ${member.sex}`;
        // mDzieci.textContent = `Dzieci:  ${member.dzieci}`;
        // mJezyki.textContent = `Języki: ${member.język}`
        // mStopień.textContent = `Stopień: ${member.stopień}`;
        // mFunkcja.textContent = `Funkcja: ${member.funkcja}`;
        // mStanowisko.textContent = `Stanowisko: ${member.stanowisko}`;
        // mWachta.textContent = `Wachta/zmiana: ${member.zmiana}`;
        // mLike.textContent = `Lubi: ${member.lubi}`;
        // mDislike.textContent = `Nie lubi: ${member.nielubi}`;
        // mMutacja.textContent = `Mutacja: ${member.mutacja}`;
        // mStatus.textContent = `Status: ${member.status}`;
        // mOpis.textContent = `Opis: ${member.opis}`;
        // mStatus.setAttribute("class", member.status === "aktywny" ? "status active" : "status dead");
        // mPortret.setAttribute("class", "portret");
        // mPortret.setAttribute("style", "background-image:url(" + member.portret + ")")
    
    
        mainContainer.appendChild(member_container);
        // member_container.appendChild(mPortret)
        member_container.appendChild(mName);
        // member_container.appendChild(mWiek);
        // member_container.appendChild(mPlec);
        // member_container.appendChild(mDzieci);
        // member_container.appendChild(mJezyki);
        // member_container.appendChild(mStopień);
        // member_container.appendChild(mFunkcja);
        // member_container.appendChild(mStanowisko);
        // member_container.appendChild(mWachta);
        // member_container.appendChild(mLike);
        // member_container.appendChild(mDislike);
        // member_container.appendChild(mMutacja);
        // member_container.appendChild(mStatus);
        // member_container.appendChild(mOpis);
  
 
       $("#crew").children('div').addClass("member");}

    })
    
    

  }}
  $('#input_sex').click(setSex(crew, kobieta));
})

 


  
  
//śmieci



// if (radio[0].checked && !radio[1].checked){ wybrana_płeć="kobieta"}
// if (radio[1].checked && !radio[0].checked) {wybrana_płeć="mężczyzna"}
// if (radio[2].checked && !radio[1].checked){ wybrany_stan="singiel"}
// if (radio[3].checked && !radio[0].checked) {wybrany_stan="związek"}
// if (radio[2].checked && radio[3].checked) (wybrany_stan=`"singiel" || "związek"`) 


// if (radio[0].checked) {
//   wybrani = members.filter(member => member.sex === wybrana_płeć)
// }
// if (radio[1].checked) {
//   wybrani = members.filter(member => member.sex === wybrana_płeć)


// if (radio[1].checked && radio[0].checked  || !radio[1].checked && !radio[0].checked ) {
//   wybrani = members
// }
//   if (radio[2].checked) {
//   wybrani = wybrani.filter(member => member.stan_cywilny === wybrany_stan)
// }
//  if (radio[3].checked) {
//   wybrani = wybrani.filter(member => member.stan_cywilny === wybrany_stan)
// }
  // console.log(radio_checked);
  // console.log("wybór płci" + wybor_plci)

// function setAttributes(el, attrs) {
//   for(var key in attrs) {
//     el.setAttribute(key, attrs[key]);
//   }
// }



    
    // if (radio[0].checked)  {radio_checked.fill(radio[0].value, 0,1,2)}else{radio_checked.fill("",0,1,2)}
    // if (radio[1].checked)  {radio_checked.fill(radio[1].value, 1,2,3)}else{radio_checked.fill("",1,2,3)}
    // if (!radio[0].checked && !radio[1].checked ){radio_checked.splice(0, 2, "kobieta", "mężczyzna")}
    // if (radio[2].checked ) {radio_checked.fill(radio[2].value, 2,3,4)}else{radio_checked.fill("",2,3,4)}
    // if (radio[3].checked ) {   radio_checked.fill(radio[3].value, 3,4,5)}else{radio_checked.fill("",3,4,5)}
    // if (!radio[2].checked && !radio[3].checked ){radio_checked.splice(2, 3, "singiel", "w_związku")};
  //   (radio[1].checked){$(mezczyzna_p).each(
  //     function() {
  //       $(".mężczyzna").parent().show();
  //     })}else{$(".mężczyzna").parent().hide();}

  // if (radio[2].checked){$(singiel_p).each(
  //     function() {
  //         $(".singiel").parent().show();
  //       })}else{$(".singiel").parent().hide();}
  
  //   if (radio[3].checked){$(w_zwiazku_p).each(
  //     function() {
  //       $(".w_zwiazku").parent().show();
  //       })}else{$(".w_zwiazku").parent().hide();}

  

  //  if (radio[2].checked ) {radio_checked.fill(radio[2].value, 2,3,4)}else{radio_checked.fill("",2,3,4)}
  //  if (radio[3].checked ) {   radio_checked.fill(radio[3].value, 3,4,5)}else{radio_checked.fill("",3,4,5)}}

    //  if (radio[1].checked)  {radio_checked.fill(radio[1].value, 1,2,3)}else{radio_checked.fill("",1,2,3)}
    //  if (radio[2].checked ) {radio_checked.fill(radio[2].value, 2,3,4)}else{radio_checked.fill("",2,3,4)}
    //  if (radio[3].checked ) {   radio_checked.fill(radio[3].value, 3,4,5)}else{radio_checked.fill("",3,4,5)}}

      // console.log(checkbox_input.checked + checkbox_input)
        // input_value = "." + radio_checked.toString() + " ";
        // console.log("radio checked " + radio_checked.filter(function(e){return e}))
        // console.log("pokaz" + input_value)
    //  $(input_value).parent().toggle();}
    //  radio_checked=["a","b"];
    //  $(".member").hide();
    //  }
    //  .filter(function(e){return e})

// if (radio_checked[0] === "kobieta" ) {$("p.kobieta").parent().show()}
// // else{ $("p.kobieta").parent().hide()}  
// else if (radio_checked[0] !== "kobieta" ){ $("p.kobieta").parent().hide()} 
// else if (radio_checked[1] === "mężczyzna" ){ $("p.mężczyzna").parent().show()} 
// else if (radio_checked[1] !== "mężczyzna" ){ $("p.mężczyzna").parent().hide()} 
// // else{ $("p.mężczyzna").parent().hide()} 
// else if (radio_checked[2]  === "singiel" ){ $("p.singiel").parent().show() }
// else if (radio_checked[2]  !== "singiel" ){ $("p.singiel").parent().hide() }
// // else{ $("p.singiel").parent().hide() }
// else if (radio_checked[3] === "w_zwiazku" ){ $("p.w_zwiazku").parent().show()} 
// else if (radio_checked[3] !== "w_zwiazku" ){ $("p.w_zwiazku").parent().hide()} 
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

    


//  for (i = 0; i < radio.length; i++) {
//      if (radio[0].checked)  {
//      radio_checked.fill(radio[0].value, 0,1,2);
//    }else{radio_checked.fill("",0,1,2)}

// let women_checked = radio[0].checked;
// let men_checked = radio[1].checked;
// let singiel_checked  = radio[2].checked;
// let w_zwiazku_checked = radio[3].checked;

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
// // let checkboxs = document.querySelectorAll('input[type="radio"][name="sex"]')

//   let checkbox_input = document.querySelectorAll('input[type="radio"].one')  
//   let radio_checked=[];
// function radioHandle(e){
//   // let checkbox_input = document.querySelectorAll('input[type="radio"].one')  
//   // var checkbox_input = document.forms[0];
//  console.log(checkbox_input);
// $(".member").hide();
// var i;
//  for (i = 0; i < checkbox_input.length; i++) {
//      if (checkbox_input[i].checked) {
//      radio_checked.push(checkbox_input[i].value)
    
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
    // for (i = 0; i < radio.length; i++)
// let radio_checked=["","","",""].join('').split('');
// let women_checked = radio[0].checked;
// let men_checked = radio[1].checked;
// let singiel_checked  = radio[2].checked;
// let w_zwiazku_checked = radio[3].checked;

    // if (radio[0].checked)  {radio_checked.fill(radio[0].value, 0,1,2)}else{radio_checked.fill("",0,1,2)}
    // if (radio[1].checked)  {radio_checked.fill(radio[1].value, 1,2,3)}else{radio_checked.fill("",1,2,3)}
    // if (!radio[0].checked && !radio[1].checked ){radio_checked.splice(0, 2, "kobieta", "mężczyzna")}
    // if (radio[2].checked ) {radio_checked.fill(radio[2].value, 2,3,4)}else{radio_checked.fill("",2,3,4)}
    // if (radio[3].checked ) {   radio_checked.fill(radio[3].value, 3,4,5)}else{radio_checked.fill("",3,4,5)}
    // if (!radio[2].checked && !radio[3].checked ){radio_checked.splice(2, 3, "singiel", "w_związku")};

    
    // if (radio[0].checked)  {radio_checked.fill(radio[0].value, 0,1,2)}else{radio_checked.fill("",0,1,2)}
    // if (radio[1].checked)  {radio_checked.fill(radio[1].value, 1,2,3)}else{radio_checked.fill("",1,2,3)}
    // if (!radio[0].checked && !radio[1].checked ){radio_checked.splice(0, 2, "kobieta", "mężczyzna")}
    // if (radio[2].checked ) {radio_checked.fill(radio[2].value, 2,3,4)}else{radio_checked.fill("",2,3,4)}
    // if (radio[3].checked ) {   radio_checked.fill(radio[3].value, 3,4,5)}else{radio_checked.fill("",3,4,5)}
    // if (!radio[2].checked && !radio[3].checked ){radio_checked.splice(2, 3, "singiel", "w_związku")};


  //   if (radio[0].checked)  {wybor_plci = radio[0].value}
  //  else if (radio[1].checked)  {wybor_plci = radio[1].value}
  //   if (radio[2].checked ) {wybor_stanu = radio[2].value}
  //  else if (radio[3].checked ) {wybor_stanu = radio[2].value}

    // console.log(radio_checked);
    // console.log("wybór płci" + wybor_plci)

// if (radio_checked[0] !== "" || radio_checked[1] !==""){
//   wybrani = members.filter(member => member.sex === wybor_plci )  
//  } else if (radio_checked[2] !== "" || radio_checked[3] !==""){
//   wybrani = members.filter(member => member.stan_cywilny === wybor_stanu) 
//  }

       // if (checkbox[1].checked)  {checkbox_checked.fill(checkbox[1].value, 1,2,3)}else{checkbox_checked.fill("",1,2,3)}
       // if (!checkbox[0].checked && !checkbox[1].checked ){checkbox_checked.splice(0, 2, "kobieta", "mężczyzna")}
       // if (checkbox[2].checked ) {checkbox_checked.fill(checkbox[2].value, 2,3,4)}else{checkbox_checked.fill("",2,3,4)}
       // if (checkbox[3].checked ) {   checkbox_checked.fill(checkbox[3].value, 3,4,5)}else{checkbox_checked.fill("",3,4,5)}
       // if (!checkbox[2].checked && !checkbox[3].checked ){checkbox_checked.splice(2, 3, "singiel", "w_związku")};
   // console.log(wybrana_płeć)

          // if (checkbox[1].checked)  {checkbox_checked.fill(checkbox[1].value, 1,2,3)}else{checkbox_checked.fill("",1,2,3)}
       // if (!checkbox[0].checked && !checkbox[1].checked ){checkbox_checked.splice(0, 2, "kobieta", "mężczyzna")}
       // if (checkbox[2].checked ) {checkbox_checked.fill(checkbox[2].value, 2,3,4)}else{checkbox_checked.fill("",2,3,4)}
       // if (checkbox[3].checked ) {   checkbox_checked.fill(checkbox[3].value, 3,4,5)}else{checkbox_checked.fill("",3,4,5)}
       // if (!checkbox[2].checked && !checkbox[3].checked ){checkbox_checked.splice(2, 3, "singiel", "w_związku")};
   // console.log(wybrana_płeć)