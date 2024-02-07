<template>
  <NuxtLayout>
    <template #side>
      <Avatar/>
      <Contact/>
      <Skills/>
      <Language/>
    </template>
    <template #body>
      <CvHeader/>
      <CvSummary/>
      <Experience/>
      <Projects/>
      <Education/>
    </template>
  </NuxtLayout>
</template>

<style lang="scss">
body {
  margin: 0;
  height: 100%;
  min-height: 100%;
  font-family: 'RobotoMono';
}
@font-face {
  font-family: RobotoMono;
  src: url(/RobotoMono.ttf);
}
@font-face {
  font-family: Montserrat;
  src: url(/Montserrat.ttf);
}
</style>