<template>
  <Layout>

    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">TheInvader360</div>
        <div class="text-green-700 leading-tight">Powered by Vue.js &amp; Tailwind v1</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/developer.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">See <a href="https://github.com/drehimself/gridsome-portfolio-starter">GitHub</a> or check out the <a href="https://www.youtube.com/watch?v=uHo6o1TNQeE">screencast</a>.</p>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
