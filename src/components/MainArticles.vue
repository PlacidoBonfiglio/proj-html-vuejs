<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    name: 'MainArticles',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    data() {
        return {
            articles: [
                { name: 'What is Football', img: 'news1-1-300x300.png', description: 'Football is a sport known as a ball game and is loved by[...]' },
                { name: 'Football Rules', img: 'news3-1-300x300.png', description: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in […]' },
                { name: 'Football Features', img: 'news2-1-300x300.png', description: 'Football: It is an aerobic-based anaerobic sport in which jumps, kicks, turns, running with changing […]' },
                { name: 'Football Terms', img: 'news4-1-300x300.png', description: 'GOLDEN GOAL: In a football match, the goal scored by one of the teams in […]' },
                { name: 'How many football players are there in the world?', img: 'news6-1-300x300.png', description: 'According to this report, there are more than 301 thousand football clubs, over 1.752 million […]' }
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
    <div class="container">
        <swiper :slidesPerView="4" :centeredSlides="true" :spaceBetween="30" :grabCursor="true" :loop="true"
            :pagination="{
                clickable: true,
            }" :breakpoints="{
                '640': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                '1200': {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                '1400': {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },

            }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(article, index) in articles" :key="index">
                <div class="col-3 card-layout m-3">
                    <div class="card mb-5">
                        <div class="card-body text-card-field text-center p-4">
                            <img :src="getImageUrl(`../assets/${article.img}`)" class="card-img-top img-fluid"
                                alt="...">
                            <p class="fs-6">29.05.2022-Football</p>
                            <p class="fs-5"><strong>{{ article.name }}</strong></p>
                            <p>{{ article.description }}</p>
                            <button type="button" class="btn btn-dark button-card"><strong>More</strong></button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<style lang="scss" scoped>
.card-layout {
    width: 19.5rem;

    img {
        height: 230px;
        width: 220px;
    }

    .button-card {
        padding: 20px 50px;
        border-radius: 30px;
    }
}


.card {
    height: 35rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 30%;
    object-fit: cover;
}
</style>