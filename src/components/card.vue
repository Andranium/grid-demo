<template>
    <div class="card" :class="{'card--filled': options.background, 'card--large': options.columns >= 2, 'card--hidden': !options.shown }" :style="{'background-color': options.background ? tags[0].color : ''}">
        <img class="card__image" alt="card image" :src="coverImg" v-if="coverImg">
        <div class="card__wrapper">
            <div class="tags" :class="{'tags--relative': !coverImg}">
                <div class="tag" v-for="(tag, index) in tags" :key="index" :style="{'background-color': tag.color}">{{tag.name}}</div>
            </div>

            <h2 class="card__title">{{title}}</h2>
            <p class="card__content">{{content}}</p>
            <a class="card__button" :href="options.readMoreLink" v-if="options.readMoreLink">READ MORE</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['tagIds','column', 'row', 'coverImg', 'title', 'content', 'options'],
        computed: {
            tags() {
                let tags = this.$store.state.tags;
                let filteredTags = [];

                tags.forEach(tag => {
                    this.tagIds.forEach(tagId => {
                        if(tag.id === tagId) filteredTags.push(tag);
                    })
                });

                return filteredTags;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin tag-relative {
        position: relative;
        top: unset;
        left: unset;

        .tag {
            display: inline-block;
        }
    }

    .card {
        background-color: #ffffff;
        border-radius: .4rem;
        position: relative;
        overflow: hidden;

        &--hidden {
            display: none !important;
        }

        .tags {
            position: absolute;
            top: 2rem;
            left: 2rem;
            display: flex;
            flex-direction: column;

            &--relative {
                @include tag-relative;
                padding: 0 0 1.5rem;
            }
        }

        .tag {
            padding: .3rem .8rem;
            border-radius: .4rem;
            font-size: 1rem;
            z-index: 1;
            font-weight: bold;
            color: #ffffff;
            text-transform: uppercase;
            background-color: #6b3de4;
            align-self: flex-start;

            &:not(:last-child) {
                margin-bottom: .5rem;
            }
        }

        &--filled {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: #6b3de4;

            > * {
                text-align: center;
                color: #ffffff;
            }

            .tags {
                display: block;
                @include tag-relative;
                padding-bottom: 1.5rem;
            }

            .card__title {
                font-size: 2.2rem;
            }

            img {
                display: none;
            }

            .card__content {
                color: rgba(255,255,255, .6);
            }
        }

        &--large {
            display: flex;

            .tags {
                @include tag-relative;
                padding-bottom: 1.5rem;
            }

            img {
                max-width: 18rem;
                max-height: unset;
                order: 1;
                align-self: center;
                padding-right: 3rem;
                position: unset;
                transform: none;
                left: unset;
            }

            .card__title {
                font-size: 2.2rem;
            }

            @media (max-width: 568px) {
                flex-direction: column-reverse;
                justify-content: center;
                grid-row: span 2;

                img {
                    padding-right: 0;
                }
            }
        }

        &__image {
            width: 100%;
            max-height: 17rem;
            object-fit: cover;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }

        &__wrapper {
            padding: 2rem;
        }

        &__title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        &__content {
            font-size: 1.4rem;
            color: #838d8f;
        }

        &__button {
            font-size: 1rem;
            padding: 1rem 2.5rem;
            font-weight: bold;
            text-decoration: none;
            color: #ffffff;
            display: inline-block;
            border-radius: 2rem;
            border: .1rem solid rgba(255,255,255, .2);
            letter-spacing: .2rem;
            margin-top: 1.5rem;
            transition: border-color .2s ease;
            will-change: border-color;

            &:hover {
                border-color: #ffffff;
            }
        }
    }
</style>
