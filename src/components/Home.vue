<template>
  <div>
    <Introduction/>
    <InfoCards/>
    <AboutSection/>
    <ContactForm/>
  </div>
</template>

<script>
import Introduction from "@/components/Home/Introduction";
import InfoCards from "@/components/Home/InfoCards";
import AboutSection from "@/components/Home/AboutSection";
import ContactForm from "@/components/Home/ContactForm";

export default {
  name: "Home",
  components: {
    Introduction,
    InfoCards,
    AboutSection,
    ContactForm
  }
}
</script>

<style>

</style>