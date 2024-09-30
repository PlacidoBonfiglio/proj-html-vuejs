<script>
import ComingMatchesItems from './ComingMatchesItems.vue';

export default {
    name: 'MainComingMatches',
    components: {
        ComingMatchesItems,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <section id="coming-matches">
        <div class="container">
            <h3 class="text-center pt-4 text-white">UpComing Matchs</h3>
            <div class="cards-coming-matches">
                <ComingMatchesItems />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
#coming-matches {
    background-image: url(../assets/saha.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

h3 {
    font-weight: 600;
    font-size: 25px;
}
</style>