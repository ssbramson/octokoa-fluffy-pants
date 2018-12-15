new Vue({
  el: '#index',

  template: `
    <div class="index-container">
      <div class="index-content">

      <main>
        <div class="index-header">
        🐨<sub>.60</sub> + 🤖<sub>.10</sub> + 🤓<sub>.20</sub> + 🤦‍<sub> .03</sub> + 🤪‍<sub>.07</sub>
        <!-- 🐨<sub>60%</sub> + 🤖<sub>10%</sub> + 🤓<sub>20%</sub> + 🤦‍<sub> 03%</sub> + 🤪‍<sub>07%</sub> -->
        </div>
  
        <p class="index-intro-paragraph">
          Award winning marketing executive  specialized in consumer technology applications and packaged goods. Clientele including, but not limited to;
          <ul class="index-highlighted-clients">
            <li v-for="indexClientLink in indexClientLinks">
              <a :href="indexClientLink.linkURL">{{ indexClientLink.linkTitle }}</a>
            </li>
          </ul>
        </p>
      </main>
        
      </div>
    </div>
  `,

  data: {
    indexClientLinks: [
      { linkTitle: 'Blackberry', linkURL: 'experience-blackberry.html' },
      { linkTitle: 'Google', linkURL: 'experience-google.html' },
      { linkTitle: 'Milky Way', linkURL: 'experience-milky_way.html' },
      { linkTitle: 'Kendrick Lamar', linkURL: 'experience-kendrick_lamar.html' },
      { linkTitle: 'Procter & Gamble', linkURL: 'experience-procter_gamble.html' },
      { linkTitle: 'Ford Automotive', linkURL: 'experience-ford.html' },
      { linkTitle: 'Spotify Music', linkURL: 'experience-spotify.html' },
      { linkTitle: 'Thomson Reuters', linkURL: 'experience-thomson_reuters.html' },
      { linkTitle: 'Playtex Tampons', linkURL: 'experience-playtex.html' }
    ]
  }
})