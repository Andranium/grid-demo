<template>
    <div class="tag" :class="{'tag--disabled': isDisabled}" @click="onCLick">
        {{content}}
    </div>
</template>

<script>
    export default {
        props: ['id','content'],
        data() {
            return {
                isDisabled: false
            }
        },
        methods: {
            onCLick() {
                this.isDisabled = !this.isDisabled;

                this.$store.commit('filter', this.id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tag {
        padding: .3rem .8rem;
        border-radius: .4rem;
        background-color: #6b3de4;
        color: #ffffff;
        transition: opacity .2s ease;
        will-change: opacity;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        user-select: none;
        white-space: nowrap;

        &:not(:last-child) {
            margin-right: 1.5rem;
        }

        &--disabled {
            opacity: .5;
        }
    }
</style>
