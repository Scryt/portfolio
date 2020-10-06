<template>
  <section class="container" id="contact">
    <form id="contact-form" name="email_form" method="post" @submit.prevent="sendForm">
      <div class="row">
        <label for="name">Name:</label>
        <input class="form-control" id="name" v-model="name" type="text" name="name" placeholder="Jon Doe" required>
      </div>
      <div class="row">
        <label for="email">Email:</label>
        <input class="form-control" id="email" v-model="email" type="text" name="email" placeholder="jon.doe@example.com" required>
      </div>
      <div class="row">
        <label for="message">Message:</label>
        <textarea class="form-control" id="message" v-model="message" name="message" maxlength="6000" rows="10" required></textarea>
      </div>
      <div class="row" id="rodo-consent">
        <input class="" id="rodo-checkbox" type="checkbox" required>
        <label for="rodo-checkbox" id="rodo-content">
          RODO consent
        </label>
      </div>
      <div class="row" id="captcha-box">
        <p id="missing-captcha"></p>
        <div id="captcha"></div>
      </div>
      <button class="row" id="button-box" type="submit">Submit!</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendForm() {


    }
  }
}
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  label {
    display: inline-flex;
    width: 20%;
  }

  input,
  textarea{
    border-radius: 5px;
  }

  .form-control {
    border: 1px;
    display: inline-flex;
    width: 78%;
  }

  #rodo-consent {
    width: 100%;
  }

  #rodo-content {

  }

  #captcha-box, #button-box{
    display: flex;
    justify-content: flex-end;
  }

  #missing-captcha {
    width: 100%;
  }

  #captcha {
    /*width: 45%;*/
  }
</style>