$(document).ready(function(){

   var zmienna

   function populate(obj) {
   
   
    
     const women= members.filter(member => member.sex  === "kobieta");
     console.log(women)
     const men = members.filter(member => member.sex  === "mężczyzna");
     const mutant = members.filter(member => member.mutacja  !== "");
     const kids = members.filter(member => member.wiek < 15);
     const aktywni = members.filter(member => member.status === "aktywny");
   
   
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
       const mPochodzenie = document.createElement('p');
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
   
       
      var stringLanguages = member.język.map((val) => {return val.język;}).join(', ');
       var funkcja = member.funkcja

       funkcja.length > 0 ? funkcja = member.funkcja.join(', ') : funkcja = member.funkcja

   
       mName.textContent = `Imię i nazwisko: ${member.imię} ${member.nazwisko}`;
       mWiek.textContent = `Wiek: ${member.wiek}`;
       mPlec.textContent = `Płeć: ${member.sex}`;
       mStanCyw.textContent = `Stan cywilny: ${member.stan_cywilny}`;
       mDzieci.textContent = `Dzieci:  ${member.dzieci}`;
       mPochodzenie.textContent = `Pochodzenie:  ${member.pochodzenie}`;
       mJezyki.textContent = `Języki: ` + stringLanguages;
       mStopień.textContent = `Stopień: ${member.stopień}`;
       mFunkcja.textContent = `Funkcja: ${funkcja}`;
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
       member_container.appendChild(mPochodzenie);
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
//...............................pochodzenie ............................

 
  // var pochodzenie = document.getElementById('pochodzenie') ;  
  // console.log(pochodzenie)

 
let wybrano_pochodzenie = ""

$('#pochodzenie').on('change',(event) => {
   wybrano_pochodzenie = event.target.value;
console.log(wybrano_pochodzenie);
var wybrane_osoby

if (wybrano_pochodzenie === "wszyscy"){wybrane_osoby = members}
else {wybrane_osoby = members.filter(member => member.pochodzenie === wybrano_pochodzenie) 
console.log(wybrane_osoby)}

$("#crew>div").remove();

findMembers(wybrane_osoby)

});
//.............................imię------------------------

function SayMyName(obj) {
const wpisz_imię = $('input[type="text"]')

  var nazwa = $('#name').val()
 nazwa = nazwa.substr(0, 1).toUpperCase() + nazwa.substr(1).toLowerCase();
console.log(nazwa)
  
  imiennicy = [];
  imiennicy = members.filter(member => member.imię === nazwa || member.nazwisko === nazwa) 


  if(imiennicy.length >0){
  $("#crew>div").remove();
   findMembers(imiennicy)}

   else{ 
     $("#crew>div").remove();
   const mainContainer = document.getElementById("crew");
   const nieMa = document.createElement('div')
   nieMa.innerHTML = `<p>Nie ma takiego załoganta</p>`;
  nieMa.setAttribute("class", "member");
   mainContainer.appendChild(nieMa);
   }

}

var name_button = document.getElementById("namebutton");
console.log(name_button)

name_button.addEventListener("click", SayMyName)

//...........................płeć ............................

  var checkbox_checked=["","","",""];
  var wybrany_stan = "";
  var wybrana_płeć = "" ;
  var wybrani = members;
  //  var wybrani =[]; zmieniłam to teraz
   
   var checkbox = document.querySelectorAll('input[type="checkbox"][class="one"]') ;  
       
   function checkboxHandle(obj){
   wybrani = members
     if (checkbox[0].checked && !checkbox[1].checked) {wybrani = members.filter(member => member.sex === "kobieta")}
     if (checkbox[1].checked && !checkbox[0].checked) { wybrani = members.filter(member => member.sex === "mężczyzna")}
     if ((checkbox[0].checked && checkbox[1].checked)||(!checkbox[0].checked && !checkbox[1].checked)){wybrani = members}
     if (checkbox[2].checked&&!checkbox[3].checked) {wybrani = wybrani.filter(member => member.stan_cywilny === "singiel")}
     if (!checkbox[2].checked&& checkbox[3].checked) {wybrani = wybrani.filter(member => member.stan_cywilny === "związek")}
       
     $("#crew>div").remove();
   
     findMembers(wybrani)
      }
   
    
   Array.prototype.forEach.call(checkbox, function(checkbox){
   checkbox.addEventListener('change', checkboxHandle)
   })


   //.............................................zmiana..................................

  //  var wybrani = members;
    var pracownicy_zmiany =[];
    
    var zmiana_radio = document.querySelectorAll('input[type="radio"][name="zmiana"]') ; 
 
        
    function zmianaHandle(obj){   
       console.log(zmiana_radio)
   
      if (zmiana_radio[0].checked) {pracownicy_zmiany = members.filter(member => member.zmiana === "1") 
      console.log(pracownicy_zmiany)}
      if (zmiana_radio[1].checked) {pracownicy_zmiany = members.filter(member => member.zmiana === "2")
      console.log(pracownicy_zmiany)}
      if (zmiana_radio[2].checked){pracownicy_zmiany = members.filter(member => member.zmiana === "3")
      console.log(pracownicy_zmiany)}
      if (zmiana_radio[3].checked) {pracownicy_zmiany = members.filter(member => member.zmiana === "")
      console.log(pracownicy_zmiany)}
      if ( zmiana_radio[4].checked) {pracownicy_zmiany = members}
        
      $("#crew>div").remove();
    
      findMembers(pracownicy_zmiany)
       }
    
     
    Array.prototype.forEach.call(zmiana_radio, function(zmiana_radio){
      zmiana_radio.addEventListener('change', zmianaHandle)
    })

   //............................................języki ...................................

   function selectLanguage(form) {
    let selectLanguageArr = [];
    let inputFields =  document.querySelectorAll('input[type="checkbox"][name="language"]') ;
    console.log(inputFields); 
    let inputFieldsNumber = inputFields.length;
  
    for(let i=0; i<inputFieldsNumber; i++) {
      if(
        inputFields[i].type == 'checkbox' &&
        inputFields[i].checked == true) selectLanguageArr.push(inputFields[i].value);
      ;
    }
    return selectLanguageArr;
  }

var form = document.getElementById("language_form")
  selectLanguage(form);
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
//...............................stopień............................

let wybrano_stopien = ""

$('#stopien').on('change',(event) => {
 wybrano_stopien = event.target.value  ;
let wybrane_stopnie; 

if (wybrano_stopien === "wszyscy"){wybrane_stopnie= members}
else {wybrane_stopnie = members.filter(member => member.stopień === wybrano_stopien) 
console.log(wybrano_stopien)}

$("#crew>div").remove();

findMembers(wybrane_stopnie)


});

   });