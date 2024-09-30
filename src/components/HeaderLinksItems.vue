<script>

export default {
    data() {
        return {

        }
    },
    props: {
        linkLabel: {
            type: String,
            require: true
        },
        linkUrl: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <li>
        <a href="linkUrl">{{ linkLabel }}</a>
    </li>
</template>

<style lang="scss" scoped>
    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1rem;

        &::after {
            margin-top: 10px;
            display: block;
            content: "";
            width: 0;
            height: 3px;
            background-color: white;
            transition: 0.5s;
        }

        &:hover::after {
            width: 100%;
        }
    }
</style>