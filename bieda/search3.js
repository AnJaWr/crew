$(document).ready(function(){
  

console.log(members)


function populate(obj) {

  const zaloga = members
 
  const women= zaloga.filter(member => member.sex  === "kobieta");
  // console.log(women)
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
    mStanCyw.setAttribute("class", member.stan_cywilny === "singiel" ? "singiel" : "związek");
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





// let radio_checked=["","","",""];
//                     k  m  s  zw
// var sex_form = $("#sex_form");
// console.log(sex_form)





// for (i = 0; i < radio.length; i++) {
//   sex_form_value =  radio[i].checked.value
 
// }
  //      

var wybrany_stan = "";
 var wybrana_płeć = "" ;
 var wybrani = members;
 var posortowani=[];


let radio = document.querySelectorAll('input[type="radio"][name="sex"]') ;  

function radioHandle(obj){

// var   sex_form_value = $('#sex_form. sex:checked').val()
//  console.log(sex_form_value)
  let radio_checked="";


  // let checkbox_input = document.querySelectorAll('input[type="radio"].one')  
  var radio_input = document.forms[0];
var i;
 for (i = 0; i < radio_input.length; i++) {
     if (radio_input[i].checked) {
     radio_checked = this.value }}
     console.log(radio_checked)

    // if (radio[0].checked)  {radio_checked.fill(radio[0].value, 0,1,2)}else{radio_checked.fill("",0,1,2)}
    // if (radio[1].checked)  {radio_checked.fill(radio[1].value, 1,2,3)}else{radio_checked.fill("",1,2,3)}
    // if (!radio[0].checked && !radio[1].checked ){radio_checked.splice(0, 2, "kobieta", "mężczyzna")}
    // if (radio[2].checked ) {radio_checked.fill(radio[2].value, 2,3,4)}else{radio_checked.fill("",2,3,4)}
    // if (radio[3].checked ) {   radio_checked.fill(radio[3].value, 3,4,5)}else{radio_checked.fill("",3,4,5)}
    // if (!radio[2].checked && !radio[3].checked ){radio_checked.splice(2, 3, "singiel", "w_związku")};
    
for(item of members){
  //print the whole object individually 
  // console.log('object', item);
  // 
  //print the value inside the object
  // console.log('value', item['imię']);
item["sex"] === radio_checked ? posortowani.push(item) : console.log("nope")
    // console.log(posortowani)
    // console.log(item)
  }
  }

    // console.log(radio_checked)
    //

 $("#crew>div").remove();
// }
 findMembers(posortowani)



 
Array.prototype.forEach.call(radio, function(radio){    
radio.addEventListener('change', radioHandle)
})


});
