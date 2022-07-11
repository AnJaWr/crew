
$(document).ready(function(){

let input_sex_value = "";
// let women =[];
// let men = [];
// console.log("kobitki" + women)
// console.log("faceci" + men)

// function checkSelected() {

//      }
//  checkSelected();

//  console.log("poza funkcja" +input_sex_value)


  async function populate() {
  const requestURL = 'zaloga.json';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const data = await response.json();
  
    const zaloga = data["members"];
    const women = zaloga.filter(member => member.sex  === "kobieta");
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

  let input_sex_value = "";

  var sexform = document.forms[1];
var i;
 for (i = 0; i < sexform.length; i++) {
     if (sexform[i].checked) {
        input_sex_value = input_sex_value + sexform[i].value + " ";
      
     console.log("wypisz" +input_sex_value)}}  
  
  statystyka(liczba_aktywnych, women_number, men_number, kids_number, mutants_number);
  checkSex (input_sex_value, women, men);
 

}

  populate();
  
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
     



function checkSex(a, b, c ){
 let input_value = a;
  let kobitki = b;
  let faceci = c; 

  console.log("w Checksex : a to "+ kobitki + "a be to " + faceci + "natomiast !!!!!!! ce to:" + input_value)
if (input_value === "kobieta"){

  for (const member of kobitki){

        const member_container =  document.createElement('div');    
        const mPortret = document.createElement('div');
        const mName = document.createElement('h2');
          
const mainContainer = document.getElementById("crew");
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
    
    
        mName.textContent = `Imię i nazwisko: ${osoba.imię} ${member.nazwisko}`;
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
  
 
       $("#crew").children('div').addClass("member"); }
       console.log("kobiki tylko")
}

// else{
  
// $.forEach(([key, value]) => {
//   console.log(`${key} ${value}`);
//         const member_container =  document.createElement('div');    
//         const mPortret = document.createElement('div');
//         const mName = document.createElement('h2');
          
// const mainContainer = document.getElementById("crew");
//         const mWiek = document.createElement('p');
//         const mPlec = document.createElement('p');
//         const mDzieci= document.createElement('p');
//         const mJezyki = document.createElement('p');
//         const mStopień = document.createElement('p');
//         const mFunkcja = document.createElement('p');
//         const mStanowisko = document.createElement('p');
//         const mWachta = document.createElement('p');
//         const mLike = document.createElement('p');
//         const mDislike = document.createElement('p');
//         const mMutacja= document.createElement('p');
//         const mStatus = document.createElement('p');
//         const mOpis = document.createElement('p');
    
    
//         mName.textContent = `Imię i nazwisko: ${osoba.imię} ${member.nazwisko}`;
//         mWiek.textContent = `Wiek: ${member.wiek}`;
//         mPlec.textContent = `Płeć: ${member.sex}`;
//         mDzieci.textContent = `Dzieci:  ${member.dzieci}`;
//         mJezyki.textContent = `Języki: ${member.język}`
//         mStopień.textContent = `Stopień: ${member.stopień}`;
//         mFunkcja.textContent = `Funkcja: ${member.funkcja}`;
//         mStanowisko.textContent = `Stanowisko: ${member.stanowisko}`;
//         mWachta.textContent = `Wachta/zmiana: ${member.zmiana}`;
//         mLike.textContent = `Lubi: ${member.lubi}`;
//         mDislike.textContent = `Nie lubi: ${member.nielubi}`;
//         mMutacja.textContent = `Mutacja: ${member.mutacja}`;
//         mStatus.textContent = `Status: ${member.status}`;
//         mOpis.textContent = `Opis: ${member.opis}`;
//         mStatus.setAttribute("class", member.status === "aktywny" ? "status active" : "status dead");
//         mPortret.setAttribute("class", "portret");
//         mPortret.setAttribute("style", "background-image:url(" + member.portret + ")")
    
    
//         mainContainer.appendChild(member_container);
//         member_container.appendChild(mPortret)
//         member_container.appendChild(mName);
//         member_container.appendChild(mWiek);
//         member_container.appendChild(mPlec);
//         member_container.appendChild(mDzieci);
//         member_container.appendChild(mJezyki);
//         member_container.appendChild(mStopień);
//         member_container.appendChild(mFunkcja);
//         member_container.appendChild(mStanowisko);
//         member_container.appendChild(mWachta);
//         member_container.appendChild(mLike);
//         member_container.appendChild(mDislike);
//         member_container.appendChild(mMutacja);
//         member_container.appendChild(mStatus);
//         member_container.appendChild(mOpis);
  
 
//        $("#crew").children('div').addClass("member");}
// )

// }}

// data.forEach(obj => {
//   Object.entries(obj).forEach(([key, value]) => {
//       console.log(`${key} ${value}`);
//   });
// })


// else{console.log ("dupa")}}

$('#input_sex').onclick.checkSex();


}})