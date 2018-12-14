new Vue({
  el: '#milkyWay',
  
  template: `
    <div class="experience_detail-container">

      <div class="experience_detail-content_overview">

        <img src="http://www.milkywaybar.com/Content/images/logo.png" class="experience_detail-organization_logo" alt="">

        <p class="experience_detail-organization_overview">
          The Milky Way bar is a chocolate-covered confectionary bar manufactured and distributed by the Mars confectionery company.
        </p>

        <h4 class="experience_detail-organization_title">Client's Request</h4>

        <p class="experience_detail-organization_challenge">Lorem ipsum sit amet consectetur adipisicing elit. Dolore rata ratione prident, aliquam ipsa accusamus excepturi sint officia minus laudantium ipsum. A facilis magnam est consectetur fuga incidunt quam. A facilis magnam est consectetur fuga incidunt.</p>

      </div>

      <div class="experience_detail-content_list">

          <h4 class="">Client</h4>
          <ul class="">
            <li class="">Milky Way</li>
          </ul>
        
          <h4 class="">Industry</h4>
          <ul class="">
            <li class="">Consumer Packaged Good</li>
            <!-- <li class="">Consumer Packaged Good - Candy</li> -->
          </ul>
        
          <h4 class="">Services</h4>
          <ul class="experience_detail-services">
            <li class="experience_detail-service"> Service [s] </li>
            <li class="experience_detail-service"> Service [s] </li>
            <li class="experience_detail-service"> Service [s] </li>
            <li class="experience_detail-service"> Service [s] </li>
          </ul>

          <h4 class="">Agency</h4>
          <ul class="">
            <li class="">Buzz University</li>
          </ul>
          
        
      </div>

    </div>
  `,
})