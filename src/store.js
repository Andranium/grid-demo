import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cards: [
            {
                tagId: [1],
                coverImg: 'https://images.unsplash.com/photo-1453261945531-9740d44bf1a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                title: 'Robot’s Penguin Disguise Keeps Birds',
                content: 'Figuring out how our brains work is key to understanding',
                options: {
                    background: false,
                    readMoreLink: null,
                    shown: true,
                    columns: 1,
                    rows: 1
                }
            },

            {
                tagId: [2],
                coverImg: '/images/avatar.jpg',
                title: '5 Things We Learned From X-Men: Days of Future Past',
                content: 'Peter Dinklage’s porn ‘tache, Jennifer Lawrence’s brilliance and more. Some (tiny) spoilers ahead',
                options: {
                    background: false,
                    readMoreLink: null,
                    shown: true,
                    columns: 2,
                    rows: 1
                }
            },

            {
                tagId: [6],
                coverImg: 'https://static.wixstatic.com/media/632d61_6cea25f5a0b14e74844e3bfe9b2ea25c~mv2_d_3916_2634_s_4_2.jpg/v1/fill/w_1136,h_764,fp_0.50_0.50,q_90/632d61_6cea25f5a0b14e74844e3bfe9b2ea25c~mv2_d_3916_2634_s_4_2.webp',
                title: '14 Things Men Should Never Wear After 30',
                content: 'Light a bonfire in the garden, and step bravely into your best-dressed decade',
                options: {
                    background: true,
                    readMoreLink: 'https://hello.com/en/index.html',
                    shown: true,
                    columns: 1,
                    rows: 1
                }
            },

            {
                tagId: [4,5],
                coverImg: '',
                title: 'Комбикорма для уток и свиней оптом',
                content: 'Наши корма дают +20% к приросту массы в год',
                options: {
                    background: false,
                    readMoreLink: null,
                    shown: true,
                    columns: 1,
                    rows: 1
                }
            },

            {
                tagId: [2],
                coverImg: 'https://images.unsplash.com/46/sh3y2u5PSaKq8c4LxB3B_submission-photo-4.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
                title: 'Stunning Changes Along Colorado River',
                content: 'Lake Powell offering kayakers new channels to explore',
                options: {
                    background: false,
                    readMoreLink: null,
                    shown: true,
                    columns: 1,
                    rows: 1
                }
            },

            {
                tagId: [1],
                coverImg: 'https://static.wixstatic.com/media/632d61_6cea25f5a0b14e74844e3bfe9b2ea25c~mv2_d_3916_2634_s_4_2.jpg/v1/fill/w_1136,h_764,fp_0.50_0.50,q_90/632d61_6cea25f5a0b14e74844e3bfe9b2ea25c~mv2_d_3916_2634_s_4_2.webp',
                title: '14 Things Men Should Never Wear After 30',
                content: 'Light a bonfire in the garden, and step bravely into your best-dressed decade',
                options: {
                    background: true,
                    readMoreLink: 'https://hello.com/en/index.html',
                    shown: true,
                    columns: 1,
                    rows: 2
                }
            },

            {
                tagId: [3],
                coverImg: 'https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                title: 'Offbeat Portraits Give Stars a New Turn',
                content: 'I whipped the Scotch tape from my pocket and said',
                options: {
                    background: false,
                    readMoreLink: null,
                    shown: true,
                    columns: 1,
                    rows: 1
                }
            },

            {
                tagId: [2],
                coverImg: 'https://images.unsplash.com/photo-1502489825135-69dbb92e42ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                title: 'Must See Places of the New Year',
                content: 'Whether it’s India’s literary hub or mountain majesty',
                options: {
                    background: false,
                    readMoreLink: null,
                    shown: true,
                    columns: 1,
                    rows: 1
                }
            },

            {
                tagId: [6],
                coverImg: 'https://images.unsplash.com/photo-1483290222752-a3fce93ef7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
                title: 'Robot’s Penguin Disguise Keeps Birds',
                content: 'Figuring out how our brains work is key to understanding',
                options: {
                    background: false,
                    readMoreLink: null,
                    shown: true,
                    columns: 1,
                    rows: 1
                }
            },

            {
                tagId: [1],
                coverImg: 'https://images.unsplash.com/photo-1567644477518-93b086942eb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
                title: 'Stunning Video Reveals Invisible CO2',
                content: 'A NASA visualization shows the swirling gas ',
                options: {
                    background: false,
                    readMoreLink: null,
                    shown: true,
                    columns: 1,
                    rows: 1
                }
            }
        ],

        tags: [
            {id: 1, name: 'travel', color: '#6b3de4'},
            {id: 2, name: 'explorers', color: '#d9a34a'},
            {id: 3, name: 'nature', color: '#41a674'},
            {id: 4, name: 'сельское хозяйство', color: '#41a674'},
            {id: 5, name: 'корма', color: '#d9a34a'},
            {id: 6, name: 'science', color: '#007ac2'}
        ],

        hiddenTags: []
    },

    mutations: {
        filter(state, id) {
            const { hiddenTags, cards } = state;

            const idExists = hiddenTags.some(tagId => tagId === id);

            if(!idExists) {
                hiddenTags.push(id);
            } else {
                const element = hiddenTags.indexOf(id);
                hiddenTags.splice(element,1);
            }

            cards.forEach(card => {
                let { tagId } = card;
                let arr = [];

                tagId.forEach(t => {
                    if(hiddenTags.includes(t)) { arr.push(t) }
                });

                const sortedArray = array => array.sort((x,y) => x - y);

                arr = sortedArray(arr);
                tagId = sortedArray(tagId);

                card.options.shown = JSON.stringify(arr) !== JSON.stringify(tagId);
            })
        }
    }
});
