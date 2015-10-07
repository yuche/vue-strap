<template>
  <div class="bs-docs-section" id="carousel">
    <h1 class="page-header"><a href="#caoursel" class="anchor">Carousel</a></h1>
    <div class="bs-example">
      <carousel>
        <slider>
          <img src="http://placehold.it/1200x500?text=one">
          <div class="carousel-caption">
           <h3>Slide #1</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
        <slider>
          <img src="http://placehold.it/1200x500?text=two">
          <div class="carousel-caption">
           <h3>Slide #2</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
        <slider>
          <img src="http://placehold.it/1200x500?text=three">
          <div class="carousel-caption">
           <h3>Slide #3</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
      </carousel>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<carousel>
  <slider>
    <img src="http://placehold.it/1200x400?text=one">
      <div class="carousel-caption">
       ...
     </div>
  </slider>
  <slider>
    <img src="http://placehold.it/1200x400?text=two">
  </slider>
  <slider>
    <img src="http://placehold.it/1200x400?text=three">
  </slider>
</carousel>
</script></code></pre>

  <h2>Options</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>indicators</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the indicators.</td>
      </tr>
      <tr>
        <td>controls</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the direction controls.</td>
      </tr>
      <tr>
        <td>interval</td>
        <td><code>Number</code></td>
        <td><code>5000</code></td>
        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,
          carousel will not automatically cycle.
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import carousel from 'src/Carousel.vue'
  import slider from 'src/Slider.vue'
  export default {
    components: {
      carousel,
      slider
    }
  }
</script>
