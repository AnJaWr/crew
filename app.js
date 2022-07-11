$(document).ready(function(){
  console.log("init")


const  member_container = document.getElementsByClassName("member");

 async function populate() {

  const requestURL = 'zaloga.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const crew = await response.json();


console.log(member_container)
  findMembers(crew);
 statistic(crew);
//  sexCount(crew);
 }
populate();

 function findMembers(obj) {
 
  const crewMember = obj['members'];
  const mainContainer = document.getElementById("crew");

  for (const member of crewMember) {

  
    console.log("hello?")
      const member_container =  document.createElement('div');    
    const mPortret = document.createElement('div');
    const mName = document.createElement('h2');
    const mWiek = document.createElement('p');
    const mPlec = document.createElement('p');
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


    mainContainer.appendChild(member_container);
    member_container.appendChild(mPortret)
    member_container.appendChild(mName);
    member_container.appendChild(mWiek);
    member_container.appendChild(mPlec);
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
  

 }}

  
 function statistic(obj) {
  const crew = obj['members'];


  const women = crew.filter(member => member.sex  === "kobieta");
  const men = crew.filter(member => member.sex  === "mężczyzna");
  const mutant = crew.filter(member => member.mutacja  !== "");
  const kids = crew.filter(member => member.wiek < 15);
  const count_crew = crew.filter(member => member.status === "aktywny");

//   var kidsQuantity = {};
// $.each(kids, function(key, value) {
//   var numOccr = $.grep(kids, function(elem) {
//     return elem === value;
//   }).length;
//   kidsQuantity[value] = numOccr
// });



let women_number = women.length;
let men_number = men.length;
let mutants_number = mutant.length;
let kids_number = kids.length;

let crew_number = count_crew.length;
const statistic = document.getElementById("statistic");
  
  
 
  // const count_crew = Object.keys(crew).length;
  
  
  const statistic_container = document.createElement('div');
  const lcrew = document.createElement('p');
  const lwomen = document.createElement('p');
  const lmen = document.createElement('p');
  const lkids= document.createElement('p');
  const lmutants = document.createElement('p');
 
  lcrew.textContent = `Liczebność załogi (aktywni członkowie): ` + crew_number;
  lwomen.textContent = `Liczba kobiet: ` + women_number;
  lmen.textContent = `Liczba mężczyzn: ` + men_number;
  lkids.textContent = `Liczba dzieci: ` + kids_number;
  lmutants.textContent = `Liczba osób z mutacjami: ` + mutants_number;


  statistic.appendChild(statistic_container);
  statistic_container.append(lcrew);
  statistic_container.append(lwomen);
  statistic_container.append(lmen);
  statistic_container.append(lkids);
  statistic_container.append(lmutants);

// ============================================== button ===========================================

const nav_button = document.createElement("button");
nav_button.textContent = "Przeszukaj akta"

statistic_container.append(nav_button);

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  console.log("Działa")
}
setAttributes(nav_button, {"type": "button", "class": "nav_button"});

nav_button.onclick = function () {location.href = "akta.html";};



};


});