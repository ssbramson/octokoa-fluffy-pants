new Vue({
  el: "#globalNavigation",
    
  template: `
    <nav class="global_navigation-container" role="navigation">

    
      <div class="global_navigation-logo-container">
        <a href="index.html">{{ navigationLogo }}</a>
      </div>

      <div :class="['global_navigation-icon-container', {'global_navigation-icon-container--open': this.open}]" @click="toggleNav">
        <i class="fal fa-chess-knight-alt"></i>
      </div>

      <div :class="['global_navigation-overlay', {'global_navigation-overlay--open': this.open}]">

        <ul class="global_navigation-links">
          <li v-for="globalNavigationLink in globalNavigationLinks">
            <a :href="globalNavigationLink.linkURL">{{ globalNavigationLink.linkTitle }}</a>
          </li>
        </ul>

      </div>

    </nav>
    
  `,
    
  data: {
    globalNavigationLinks: [
      { linkTitle: 'About', linkURL: 'about.html' },
      { linkTitle: 'Capabilities', linkURL: 'capabilities.html' },
      { linkTitle: 'Experience', linkURL: 'experience.html' },
      { linkTitle: 'Connect', linkURL: 'lets-collaborate.html' }
    ],
    navigationLogo: '</ssbramson>',
    open: false
  },
    
  methods: {
    toggleNav: function() {
      this.open = !this.open
      this.$emit('toggle', this.open)
    }
  }
})