<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  methods: { sendEmail: (e) =>
    { emailjs.sendForm(
        'service_pi1xx5q',
        'template_t1iw29k',
        e.target,
        'user_WpMCQdLJ9AOFwbrTHyucl') .then((result) => {console.log('SUCCESS!', result.status, result.text); },
        (error) => { console.log('FAILED...', error); });
    }
  }
}

</script>

