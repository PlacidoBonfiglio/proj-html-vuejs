<script>
export default {
    name: 'MainSponsor',
    props: {

    },
    data() {
        return {
            sponsors: [
                'client2.png',
                'client3.png',
                'client4.png',
                'client7.png',
                'client9.png',
                'client10.png',
            ]
        }
    },
    methods: {
        getImageUrl(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
<div class="main-sponsors">
        <div class="container container-flex">
            <div class="sponsor animation-sponsor" v-for="(sponsor, index) in sponsors" :key="index">
                <img :src="getImageUrl(`../assets/${sponsor}`)" :alt="sponsor">
            </div>
        </div>
</div>
</template>

<style lang="scss" scoped >
.main-sponsors {
    background-color: black;
    display: flex;
    align-items: center;
    padding: 20px;
}

.container-flex {
    display: flex;
    padding: 30px;
    justify-content: space-around;
}

.sponsor {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
}

.animation-sponsor {
    transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
}

img {
    width: 85%;
    border: 1px solid white;
    border-radius: 30px;
    padding: 20px;
}

@media screen and (max-width: 778px) {
    .container-flex {
        flex-direction: column;
        gap: 20px;
    }
}
</style>