async function populate() {
  
    const requestURL = 'https://raw.githubusercontent.com/AnJaWr/AnJaWr.github.io/master/zaloga.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const crew = await response.json();
   
  
  console.log("works")
    findMembers(crew);
   }
  populate();

 function findMembers(obj) {
   
    const crewMember = obj['members'];
  
  
    for (const member of crewMember) {
  
    
      console.log("hello?")
      
      const mName = document.createElement('h2')
      const mWiek = document.createElement('p');
      const mPlec = document.createElement('p');
      const mDzieci= document.createElement('p');
      const mJezyki = document.createElement('ul');
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
      mPlec.textContent = `Płeć: ${member.płeć}`;
      mDzieci.textContent = `Dzieci:  ${member.dzieci}`;
      mJezyki.textContent = `Języki: ${member.język}`
      mStopień.textContent = `Stopień: ${member.stopień}`;
      mFunkcja.textContent = `Funkcja: ${member.funkcja}`;
      mStanowisko.textContent = `Stanowisko: ${member.stanowisko}`;
      mWachta.textContent = `Wachta/zmiana: ${member.zmiana}`;
      mLike.textContent = `Lubi: ${member.lubi}`;
      mDislike.textContent = `Nie lubi: ${member.nielubi}`;
      mMutacja.textContent = `Mutacja: ${member.mutacja}`;
      mStatus.textContent = `Lubi: ${member.lubi}`;
      mOpis.textContent = `Nie lubi: ${member.nielubi}`;
      
       $('#crew').append($("<div class='member'>")
          .append($("<div class='portret'>").css("background-image", "url(" + member.portret + ")"))
          .append($("<p class='item name'>").append( "Imię i nazwisko: " + member.imię + ' ' + member.nazwisko))
          .append($("<p class='item'>").append('Pochodzenie: ' + member.pochodzenie))
          .append($("<p class='item'>").append('Płeć: ' + member.płeć))
          .append($("<p class='item'>").append('Wiek: ' + member.wiek))
          .append($("<p class='item'>").append('Znajomość języka: ' + member.język))
          .append($("<p class='item'>").append('Stanowisko: ' + member.stanowisko))
          .append($("<p class='item'>").append('Stopień: ' + member.stopień))
          .append($("<p class='item'>").append('Funkcja: ' + member.funkcja))
          .append($("<p class='item'>").append('Wachta/zmiana: ' + member.zmiana))
          .append($("<p class='item'>").append('Stan cywilny: ' + member.stan_cywilny))
          .append($("<p class='item dzieci'>").append('Dzieci: ' + member.dzieci))
          .append($("<p class='item'>").append('Sympatie: ' + member.lubi))
          .append($("<p class='item'>").append('Antypatie: ' + member.nielubi))
          .append($("<p class='item'>").append('Mutacje: ' + member.mutacja))
          .append($("<p class='item status'>").append('Status: ' + member.status))
          .append($("<p class='item opis'>").append('Opis: ' + member.opis))
  
    ) }}