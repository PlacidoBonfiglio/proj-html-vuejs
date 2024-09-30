<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    educationLinks: {
        type: Array,
        required: true
    },
    quickLinks: {
        type: Array,
        required: true
    }
    },
}
</script>

<template>
    <div class="footer-links">
        <div class="container container-flex">
            <div class="education-section">
                <h4>Education</h4>
                <ul class="education-links" v-for="(educationLink, index) in educationLinks" :key="index">
                    <li><span class="list-symbol">-</span><a href="#">{{ educationLink }}</a></li>
                </ul>
            </div>
            <div class="quick-section">
                <h4>Quick Links</h4>
                <ul class="quick-links" v-for="(quickLink, index) in quickLinks" :key="index">
                    <li><span class="list-symbol">-</span><a href="#">{{ quickLink }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer-links {
    flex-basis: calc(100% / 3);
}

.container-flex {
    display: flex;
    gap: 30px;
    justify-content: end;
}

ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 5px;
}

li {
    font-size: 0.8rem;
}

.list-symbol {
    margin-right: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 2em;
}

h4 {
    color: white;
    margin-bottom: 20px;
    font-weight: bold;
}

a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
}

@media screen and (max-width: 778px) {
    .container-flex {
    justify-content: center;
}
}
</style>