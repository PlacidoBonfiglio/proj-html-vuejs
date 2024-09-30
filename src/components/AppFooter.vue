<script>
import FooterContacts from './FooterContacts.vue';
import FooterLinks from './FooterLinks.vue';
import FooterNewsletter from './FooterNewsletter.vue';
import FooterRights from './FooterRights.vue';

export default {
    name: 'AppFooter',
components: {
    FooterContacts,
    FooterNewsletter,
    FooterLinks,
    FooterRights
},
data() {
    return {
        contacts: [
            {
                typeOfContact: 'location',
                img: 'bi bi-geo-alt',
                reference: 'New Jersey, USA' 
            },
            {
                typeOfContact: 'telephone',
                img: 'bi bi-telephone',
                reference: '+1 (234) 567 89 10'
            },
            {
                typeOfContact: 'email',
                img: 'bi bi-envelope',
                reference: 'example@example.com'
            }
        ],
        socials: [
            'bi bi-facebook',
            'bi bi-instagram',
            'bi bi-twitter'
        ],
        educationLinks: [
            'fixtures & results',
            'league table',
            'players',
            'gallery'
        ],
        quickLinks: [
            'home',
            'blog',
            'gallery',
            'contact'
        ]
    }
},
methods: {

}
}
</script>

<template>
    <footer>
        <div class="container general-components">
            <div class="footer-top">
                <FooterContacts
                    :contacts="contacts"
                    :socials="socials"
                />
                <FooterNewsletter/>
                <FooterLinks
                    :educationLinks="educationLinks"
                    :quickLinks="quickLinks"
                />
            </div>
            <div class="footer-bottom">
                <FooterRights/>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    background-image: url(../assets/footer-bg-football.jpg);
    padding-top: 50px;
}

.footer-top {
    display: flex;
    justify-content: space-around;
    gap: 40px;
}

@media screen and (max-width: 778px) {
    .footer-top {
    flex-direction: column;
}
}
</style>
