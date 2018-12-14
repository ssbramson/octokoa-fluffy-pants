Vue.component(VueCarousel.name, VueCarousel);

new Vue({
  el: '#about',
  
  template: `
    <div class="about-container">
      <div class="about-content">
        <carousel :autoplay="false" :controls="false" :data="slides" direction="up"></carousel>
      </div>
    </div>
  `,
  
  data: {
    slides: [
      `
      <div class="">
        An only child from the 80s that "pretended" tech from the 90s were my sibilings
        <div class="" style="margin-top: 12px;">💾 📟 📹 📠 📡  </div>
      </div>
      `,
      `
      <div class="">
        I developed a desire and passion for meta-data, blending in-person and online engagament, and user experience.
      </div>
      `,
      `
      <div class="">
        That passion envolved into founding a couple of marketing agencies
      </div>
      `,
      `
      <div class="">
        Who's clientele included, Milkyway, Procter & Gamble, Kendrick Lamar, Blackberry, Playtex, Google, and Thomson Reuters
      </div>
      `,
      `
      <div class="">
        Which was recongized and awarded by The Business Journal, The Massachusetts Innovation & Technology Exchange, and The Future Forward Leadership Summit.
      </div>
      `,
      `
      <div class="">
        Currently time between NYC and LA
      </div>
      `,
      `
      <div class="">
          I'm currently <a href="#"><b>here</b></a> IRL
        </div>
      `,
      `
      <div class="">
        Looks like this is your floor. Curious in discovering more? 👍 or 👎
      </div>
      `,
      `
      <div class="">
        <ul class="">
          <li class=""><a href="#">My Availability</a></li>
          <li class=""><a href="#">Awards and Recongination</a></li>
          <li class=""><a href="capabilities.html">My Capabilities</a></li>
          <li class=""><a href="experience.html">My Experience</a></li>
          <li class=""><a href="thinking-things.html">My Thoughts</a></li>
          <li class=""><a href="lets-collaborate.html">My Contact</a></li>
        </ul>
      </div>
      `,
      `
      <div class="">
        Availablity to collaborate starting mid Q1 2019
      </div>
      `
    ],
  },
});