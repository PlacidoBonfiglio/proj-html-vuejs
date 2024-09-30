<script>
import { store } from '../store'


export default {
    name: 'ComingMatchesItems',
    data() {
        return {
            store,
            teamsMatches: [
                { name: store.teams[2].name, image: store.teams[2].img, nameTwo: store.teams[3].name, imageTwo: store.teams[3].img, date: 'October 20, 2022 , 17:00 pm' },
                { name: store.teams[8].name, image: store.teams[8].img, nameTwo: store.teams[5].name, imageTwo: store.teams[5].img, date: 'September 18, 2022, 21:00 pm' },
                { name: store.teams[1].name, image: store.teams[1].img, nameTwo: store.teams[7].name, imageTwo: store.teams[7].img, date: 'August 3, 2022, 19:00 pm' },
                { name: store.teams[6].name, image: store.teams[6].img, nameTwo: store.teams[8].name, imageTwo: store.teams[8].img, date: 'July 8, 2022, 12:00 pm' },
                { name: store.teams[0].name, image: store.teams[0].img, nameTwo: store.teams[1].name, imageTwo: store.teams[1].img, date: 'June 12, 2022, 09:00 am' },
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
        <div class="pb-5">
            <div v-for="(match, index) in teamsMatches" :key="index" class="cards-coming-matches">
                <div class="mt-5 d-flex justify-content-center align-items-center gap-5 card-coming-matches">
                    <div class=" d-flex">
                        <img :src="getImageUrl(`../assets/${match.image}`)" alt="Image">
                        <p class="fw-bolder fs-3 d-flex justify-content-center align-items-center"> {{ match.name }}</p>
                    </div>
                    <div>
                        <p class="fw-bolder add-on"> VS</p>
                    </div>
                    <div class=" d-flex">
                        <p class="fw-bolder fs-3 d-flex justify-content-center align-items-center"> {{ match.nameTwo }}
                        </p>
                        <img :src="getImageUrl(`../assets/${match.imageTwo}`)" alt="Image">
                    </div>
                </div>
                <div class="address">
                    <div class="d-flex justify-content-center align-content-center gap-5">
                        <p class="text-end"><i class="bi bi-calendar3"></i> {{ match.date }} </p>
                        <p><i class="bi bi-plus-circle"></i> Expert Stadium</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
p {
    color: white;
    margin-bottom: 0;
}

.card-coming-matches {
    background-color: rgba(0, 0, 0, 0.158);
}

.address {
    background-color: rgba(0, 0, 0, 0.356);
    text-align: center;
}

img {
    width: 100px;
}

.add-on {
    font-size: 40px;
}

@media screen and (max-width: 580px) {
    img {
        width: 50px;
    }
}
</style>