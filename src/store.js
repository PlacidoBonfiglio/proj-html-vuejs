import { reactive } from 'vue'

export const store = reactive({
    teams: [
        {
            id: 1,
            img: 'club-1.png',
            name: 'Instanbul Sports',
            win: 18,
            draw: 2,
            lose: 0,
            points: 42
        },
        {
            id: 2,
            img: 'club-2.png',
            name: 'United Fs Club',
            win: 14,
            draw: 2,
            lose: 1,
            points: 35
        },
        {
            id: 3,
            img: 'club-3.png',
            name: 'Schalke Club',
            win: 13,
            draw: 3,
            lose: 0,
            points: 32
        },
        {
            id: 4,
            img: 'club-4.png',
            name: 'Inter Club',
            win: 13,
            draw: 2,
            lose: 1,
            points: 31
        },
        {
            id: 5,
            img: 'league-club-5.png',
            name: 'Madrid Club',
            win: 12,
            draw: 1,
            lose: 2,
            points: 30
        },
        {
            id: 6,
            img: 'club-6.png',
            name: 'Schalke Club',
            win: 11,
            draw: 0,
            lose: 3,
            points: 28
        },
        {
            id: 7,
            img: 'club-7.png',
            name: 'Arsenal Club',
            win: 10,
            draw: 5,
            lose: 0,
            points: 26
        },
        {
            id: 8,
            img: 'club-8.png',
            name: 'Bayern Club',
            win: 10,
            draw: 2,
            lose: 2,
            points: 24
        },
        {
            id: 9,
            img: 'club-9.png',
            name: 'Atletico Club',
            win: 9,
            draw: 0,
            lose: 4,
            points: 20
        },

    ]
})