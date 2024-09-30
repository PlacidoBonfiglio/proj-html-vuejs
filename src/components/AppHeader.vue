<script>
import HeaderLinksItems from './HeaderLinksItems.vue';

export default {
    name: 'AppHeader',

    data() {
        return {
            navLinks: [
                {
                    label: "HOME",
                    url: "#",
                },
                {
                    label: "FIXTURES & RESULTS",
                    url: "#",
                },
                {
                    label: "LEAGUE TABLE",
                    url: "#",
                },
                {
                    label: "PLAYERS",
                    url: "#",
                },
                {
                    label: "GALLERY",
                    url: "#",
                },
                {
                    label: "BLOG",
                    url: "#",
                },
                {
                    label: "CONTACT",
                    url: "#",
                },
            ],
            currentImage: 0,
            images: [
                {
                    image: 'src/assets/slider1-1.jpg',
                    description: 'Welcome to',
                    description2: 'Football Club',
                    slogan: 'Live match fix types and results.',
                },
                {
                    image: 'src/assets/slider2-1.jpg',
                    description: 'Football Club',
                    description2: 'Sport Club',
                    slogan: 'Private Football Matches.',
                },
                {
                    image: 'src/assets/slider3.jpg',
                    description: 'Professional Football',
                    description2: 'Football Club',
                    slogan: 'Football is poetry of movement.',
                },
                {
                    image: 'src/assets/slider4.jpg',
                    description: 'Football Club',
                    description2: 'Sport Club',
                    slogan: 'Football is a head game.',
                },
            ]
        }
    },
    components: {
        HeaderLinksItems
    },
    methods: {
        setCurrentPic(index) {
            this.currentImage = index
        },

        getNextImage() {
            this.currentImage = this.currentImage + 1
            if (this.currentImage > this.images.length - 1) {
                this.currentImage = 0
            }
        },

        getPrevImage() {
            this.currentImage = this.currentImage - 1
            if (this.currentImage < 0) {
                this.currentImage = this.images.length - 1
            }
        },
    }
}

</script>

<template>
    <header>

        <!-- ! NAVBAR -->
        <div class="position-relative">
            <div class="top-header position-absolute">
                <div class="container">
                    <div class="row pt-2 mb-3">
                        <div class="col text-white d-flex flex-wrap align-items-center">
                            <a href="#"><img src="../assets/sponsor1.png" alt="sponsor-1"></a>
                            <a href="#"><img src="../assets/sponsor2.png" alt="sponsor-2"></a>
                        </div>

                        <div class="col text-center text-white">
                            <a href="#"><img src="../assets/logo-football.png" alt="logo-football"></a>
                        </div>

                        <div class="col text-end text-white mt-4">
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter"></i>
                        </div>
                    </div>

                    <div class="ul-box">
                        <ul class="p-0 justify-content-center gap-lg-4 gap-xl-5 d-none d-lg-flex">

                            <HeaderLinksItems v-for="(link, index) in navLinks" :key="index" :linkLabel="link.label"
                                :linkUrl="link.url" />

                        </ul>
                    </div>
                </div>
            </div>

            <a href="#"><i class="bi bi-list text white position-absolute d-sm-inline d-md-none d-xxl-inline"
                    id="sidebar-icon"></i></a>

        </div>

        <!-- ! CAROUSEL -->
        <section class="header-carousel">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item position-relative active" v-for="(image, index) in images" :key="index">
                        <img class="img-carousel" :alt="`slider-image-${index + 1}`" :src="image.image"
                            :class="{ 'active': index === currentImage }">

                        <div class="position-absolute carousel-div-text" :class="{ 'active': index === currentImage }">
                            <h1 class="text-white fw-bold text-center">{{ image.description }}<br>{{ image.description2
                                }}</h1>
                            <p class="text-white fw-bold text-center fs-5 mb-4">{{ image.slogan }}</p>
                            <div class="d-flex justify-content-center">
                                <a href="#" class="text-white fw-bold fs-5">Learn More &#129050;</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <i class="bi bi-arrow-left-circle" @click="getPrevImage"></i>
            <i class="bi bi-arrow-right-circle" @click="getNextImage"></i>
        </section>
    </header>
</template>

<style lang="scss" scoped>
.top-header {
    width: 100%;
    height: 220px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;

    i {
        font-size: 1.8rem;
        margin-left: 20px;
    }

    .ul-box {
        margin-bottom: 30px;

        ul {
            list-style-type: none;
        }
    }
}

.header-carousel img {
    height: 90vh;
    width: 100%;
    object-fit: cover;
    position: relative;
}

i.bi-arrow-left-circle {
    position: absolute;
    left: 100px;
    top: 45%;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    text-shadow: 0 0 5px black;

    &:hover {
        scale: 1.1;
    }
}

i.bi-arrow-right-circle {
    position: absolute;
    right: 100px;
    top: 45%;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    text-shadow: 0 0 5px black;

    &:hover {
        scale: 1.1;
    }
}

.carousel-div-text {
    max-width: 750px;
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);

    & {
        display: none;
    }

    &.active {
        display: block;
    }

    h1 {
        font-size: 4.6rem;
    }

    a {
        text-decoration: none;
        padding: 20px 40px;
        border: 2px solid white;
        border-radius: 40px;
    }
}

.img-carousel {
    display: none;
}

.img-carousel.active {
    display: block;
}

#sidebar-icon {
    z-index: 1;
    top: 189px;
    right: 12%;
    color: white;
    font-size: 2.5rem;
}
</style>
