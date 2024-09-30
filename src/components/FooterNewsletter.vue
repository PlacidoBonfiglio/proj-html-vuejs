<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
    <div class="footer-newsletter d-flex flex-column gap-1">
        <h4>Join Our Newsletter</h4>
        <p>Subscribe to be informed about important developments in our club and football world.</p>
        <input type="text" placeholder="Your Email Address">
        <button>Subscribe <i class="bi bi-arrow-right"></i></button>
    </div>
</template>

<style scoped>
    .footer-newsletter {
        flex-basis: calc(100% / 3);
    }

    h4 {
        font-weight: bold;
    }

    h4, p {
        color: white;
    }

    input, button {
        padding: 15px 20px;
        border-radius: 40px;
    }
</style>