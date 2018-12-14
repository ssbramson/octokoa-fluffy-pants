new Vue({
  el: '#experience',

  template: `
    <div class="experience-container">
      <div class="experience-content">

        <ul class="experience-client-links">
          <li v-for="experienceClientLink in experienceClientLinks">
            <a :href="experienceClientLink.linkURL">{{ experienceClientLink.linkTitle }}</a>
          </li>
        </ul>        

      </div>
    </div>
  `,

  data: {
    experienceClientLinks: [
      { linkTitle: 'Google', linkURL: 'experience-google.html' },
      { linkTitle: 'Milkyway', linkURL: 'experience-milky_way.html' },
      { linkTitle: 'Kendrick Lamar', linkURL: 'experience-kendrick_lamar.html' },
      { linkTitle: 'Procter & Gamble', linkURL: 'experience-procter_gamble.html' },
      { linkTitle: 'Thomason Reuters', linkURL: 'experience-thomson_reuters.html' },
      { linkTitle: 'Blackberry', linkURL: 'experience-blackberry.html' },
      { linkTitle: 'Playtex', linkURL: 'experience-playtex.html' }
    ]
  }
})