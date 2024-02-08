<template>
  <NuxtLayout>
    <template #side>
      <SidePanel/>
    </template>
    <template #body>
      <CvHeader/>
      <CvSummary/>
      <Experience/>
      <Projects/>
      <Education/>
    </template>
    <template #footer>
      <CvFooter/>
    </template>
  </NuxtLayout>
</template>
