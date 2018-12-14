new Vue({
  el: '#capabilities',

  template: `
    <div class="capabilities-container">      

      <div class="capabilities-list">
        <ul class="capabilities">
          <li class="capability tool">Jira</li>
          <li class="capability skill">Corporate Efficiency</li>
          <li class="capability tool">HTTP/2.0</li>
          <li class="capability tool">Sketch</li>
          <li class="capability certification">Bloomberg: Equity</li>
          <li class="capability skill">Git</li>
          <li class="capability skill">VueJS</li>
          <li class="capability certification">ScrumMaster + Product Owner</li>
          <li class="capability certification">HubSpot</li>
          <li class="capability skill">Brand Messaging</li>
          <li class="capability skill">User Experience</li>
          <li class="capability tool">Twilio</li>
          <li class="capability skill">Gnatt Charts</li>
          <li class="capability skill">Organization Structure</li>
          <li class="capability tool">Zendesk</li>
          <li class="capability certification">Social Customer Care</li>
          
          
          <!-- <li class="capability skill">Acquisition</li> -->
          <!-- <li class="capability">Evangelism Conversion[s]</li> -->
          <!-- <li class="capability tool">gSuite</li> -->
        </ul>
      </div>

      <div class="capability-types-title">
        <ul class="capability-types">
            <li class="capability-type">I'm</li>
            <li class="capability-type">
              <a href="http://ssbs-macbook-pro.local:5757/capabilities-detail.html#skills">certified</a>
            </li>
            <li class="capability-type">
              <a href="http://ssbs-macbook-pro.local:5757/capabilities-detail.html#certifications">use</a>
            </li>
            <li class="capability-type">
              <a href="http://ssbs-macbook-pro.local:5757/capabilities-detail.html#platforms">know</a>
            </li>
        </ul>
      </div>
      
    </div>
  `,
})