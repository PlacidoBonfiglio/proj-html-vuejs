<script>
import MainArticles from './MainArticles.vue';
import MainPlayers from './MainPlayers.vue';
import MainSponsor from './MainSponsor.vue';
import MainComingMatches from './MainComingMatches.vue';
import MainLeagueTable from './MainLeagueTable.vue';
import MainEvent from './MainEvent.vue';


export default {
    name: 'AppMain',
    components: {
        MainEvent,
        MainArticles,
        MainPlayers,
        MainSponsor,
        MainComingMatches,
        MainLeagueTable,
    }
}
</script>

<template>
    <MainEvent />
    <MainComingMatches />
    <MainPlayers />
    <MainLeagueTable />
    <MainSponsor />
    <MainArticles />
</template>

<style lang="scss"></style>
