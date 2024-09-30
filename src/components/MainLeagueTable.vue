<script>
import {store} from '../store';
export default {
    name: 'MainLeagueTable',
    data() {
        return {
            store,
            teamsFixtures: [
                { name: store.teams[0].name, image: store.teams[0].img, nameTwo: store.teams[1].name, imageTwo: store.teams[1].img},
                { name: store.teams[5].name, image: store.teams[5].img, nameTwo: store.teams[3].name, imageTwo: store.teams[3].img},
                { name: store.teams[4].name, image: store.teams[4].img, nameTwo: store.teams[2].name, imageTwo: store.teams[2].img},
                { name: store.teams[6].name, image: store.teams[6].img, nameTwo: store.teams[7].name, imageTwo: store.teams[7].img},
                { name: store.teams[8].name, image: store.teams[8].img, nameTwo: store.teams[0].name, imageTwo: store.teams[0].img},
                { name: store.teams[1].name, image: store.teams[1].img, nameTwo: store.teams[2].name, imageTwo: store.teams[2].img},
                { name: store.teams[3].name, image: store.teams[3].img, nameTwo: store.teams[4].name, imageTwo: store.teams[4].img},
                { name: store.teams[2].name, image: store.teams[2].img, nameTwo: store.teams[6].name, imageTwo: store.teams[6].img},
                { name: store.teams[7].name, image: store.teams[7].img, nameTwo: store.teams[8].name, imageTwo: store.teams[8].img}
            ],
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
<div class="container d-flex flex-column flex-md-row main-container gap-5 mt-5 mb-4">
    <div class="league-table d-flex flex-column p-1">
        <div class="title d-flex justify-content-center mb-4">
            <h2><strong>League Table</strong></h2>
        </div>
        <table class="table">
            <thead>
                <tr class="h5">
                    <th class="bg-black text-white" scope="col" colspan="4">TEAM</th>
                    <th class="bg-black text-white" scope="col">W</th>
                    <th class="bg-black text-white" scope="col">D</th>
                    <th class="bg-black text-white" scope="col">L</th>
                    <th class="bg-black text-white ps-1" scope="col">PTS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(team, index) in store.teams">
                    <td class="number">{{ team.id }}</td>
                    <td class="coat"><img :src="getImageUrl(`../assets/${team.img}`)" alt=""></td>
                    <td class="name" colspan="2">{{ team.name }}</td>
                    <td>{{ team.win }}</td>
                    <td>{{ team.draw }}</td>
                    <td>{{ team.lose }}</td>
                    <td>{{ team.points }}</td>
                </tr>
            </tbody>
            <tfoot class="text-center">
                <tr>
                    <td class="bg-black text-white h5" colspan="8"><a class="text-decoration-none text-white" href=""><strong>View Full League Table</strong></a></td>
                </tr>
            </tfoot>
        </table>
    </div>

    <div class="fixtures-results">
        <div class="title d-flex justify-content-center mb-4">
            <h2><strong>Fixtures & Results</strong></h2>
        </div>
        <div class="matches-table d-flex flex-column">
            <div class="d-flex align-items-center justify-content-center matches gap-2" v-for="(fixtures, index) in teamsFixtures" :key="index">
                <img :src="getImageUrl(`../assets/${fixtures.image}`)" alt="">
                <p>{{ fixtures.name }}</p>
                <p><strong>VS</strong></p>
                <p>{{ fixtures.nameTwo }}</p>
                <img :src="getImageUrl(`../assets/${fixtures.imageTwo}`)" alt="">
            </div>

            <div class="d-flex align-items-center justify-content-center matches-black gap-2">
                <a href="#" class="h5 text-decoration-none"><strong>View Full Fixtures</strong></a>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <img class="img-fluid" src="../assets/reklam.jpg" alt="">
</div>
</template>

<style lang="scss" scoped>
.main-container {
    img{
        height: 60px;
    }
    .league-table{
        flex-basis: 50%;
        table{
            border-left: 1px solid rgb(235,235,235);
            border-right: 1px solid rgb(235,235,235);
            thead{
                border-left: 1px solid;
                border-right: 1px solid;
            }
            .number {
                width: 30px;
            }
            td{
                border-bottom-width: 0px;
                vertical-align: baseline;
                width: 50px;
                background-color: rgb(243,243,243);
            }
            tfoot{
                height: 70px;
                width: 100%;
                border-left: 1px solid;
                border-right: 1px solid;
                tr{
                    margin: auto 0;
                    td{
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .fixtures-results {
        flex-basis: 50%;
        
        .matches-table{
            .matches{
                height: 80px;
                background-color: rgb(243,243,243);
                height: 80.9px;
            }
            .matches:nth-child(even) {
                background-color: rgb(235,235,235);
            }
            // dsadasd
            .matches-black {
                height:70px;
                background-color: black;
                color: white;
            }
        }
    }
}
</style>