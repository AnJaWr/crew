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
  isActive(crew);
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
    mStatus.setAttribute("class", "status")
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
})


let isActive = (obj) => { 
  const zaloga = obj['members'];
  
  for (const member of zaloga) {
 const z  = JSON.stringify(zaloga, function (key, value) {
  console.log
  if (member.status ==="aktywny") {
    console.log(member.status == "aktywny" )
    $(".status").addClass("active")
  } else {
    $(".status").addClass("dead")}
  })
}}
