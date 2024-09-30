<script>
import { store } from '../store'
export default {
    name: 'MainEvent',
    data() {
        return {
            store,
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
    <section id="main-event">
        <div class="container">
            <div class="mt-5 d-flex justify-content-center align-items-center gap-3">
                <div class="d-flex align-items-center fw-bolder fs-3">
                    <p class="fw-bolder"> {{ store.teams[0].name }}</p>
                    <img :src="getImageUrl(`../assets/${store.teams[0].img}`)" alt="Image">
                </div>
                <div>
                    <p class="fw-bolder add-on">VS</p>
                </div>
                <div class="d-flex align-items-center fw-bolder fs-3">
                    <img :src="getImageUrl(`../assets/${store.teams[1].img}`)" alt="Image">
                    <p class="fw-bolder"> {{ store.teams[1].name }}</p>
                </div>
            </div>
            <div class="address">
                <div class="row justify-content-center align-content-center gap-3">
                    <p class="col text-end fw-bolder"><i class="bi bi-calendar3"></i> May, 21 , 2022 18:05 pm </p>
                    <p class="col fw-bolder"><i class="bi bi-plus-circle"></i> Expert Stadium</p>
                </div>
            </div>
            <div class="d-flex justify-content-center align-content-center mb-4">
                <button type="button" class="my-btn btn btn-dark text-center px-5 py-3 fs-5">View Match Details</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.my-btn {
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 30px;
}

img {
    width: 90px;
}

.add-on {
    font-size: 60px;
}
</style>