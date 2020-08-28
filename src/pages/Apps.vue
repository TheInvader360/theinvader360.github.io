<template>
  <Layout>
    <div class="container-inner mx-auto my-16 flex flex-wrap">
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
      <AppCard :app="app"/>
    </div>
  </Layout>
</template>

<script>
import AppCard from '../components/AppCard'

export default {
  metaInfo: {
    title: 'Apps'
  },
  components: {
    AppCard
  },
  data: () => ({
    app: {
      name: "Maths Quiz",
      image: "maths-quiz.png",
      description: "A simple and fun maths quiz game with addition, subtraction, multiplication, and division problems.",
      urlPlay: "https://play.google.com/store/apps/details?id=com.theinvader360.quiz.maths",
      urlAmazon: "",
      urlApk: "https://github.com/TheInvader360/apks/raw/master/MathsQuiz.apk",
    }
  })
}
</script>
