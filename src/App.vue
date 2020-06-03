<template>
  <main class="main">
    <div class="tags-wrapper">
        <tag v-for="(tag, index) in tags"
             :id="tag.id"
             :content="tag.name"
             :key="index"
             :style="{'background-color': tag.color}"
        />
    </div>
    <div class="grid-wrapper">
        <card v-for="(card, index) in cards"
              :class="`col-${card.options.columns} row-${card.options.rows}`"
              :key="index"
              :tagIds="card.tagId"
              :coverImg="card.coverImg"
              :title="card.title"
              :content="card.content"
              :options="card.options"
        ></card>
    </div>
  </main>
</template>

<script>
import card from './components/card';
import tag from './components/tag';
import { mapState } from 'vuex';

export default {
  components: {
      card,
      tag
  },
  computed: {
      ...mapState([
          'cards',
          'tags'
      ])
  }
}
</script>

<style lang="scss">
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: #eeeeee;
    font-family: 'Montserrat', sans-serif;
  }

  .main {
    max-width: 98rem;
    margin: 3rem auto;

    @media (max-width: 1000px) {
        padding: 0 4rem;
    }
  }

  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
    grid-auto-flow: dense;
    grid-auto-rows: 30rem;
    grid-gap: 20px;
  }

  $columns: 1, 2, 3, 4;
  $rows: 1, 2;

  @each $column in $columns {
    .col-#{$column} {
      grid-column: span $column;
    }
  }

  @each $row in $rows {
    .row-#{$row} {
      grid-row: span $row;
    }
  }

  [class*='col-'] {
      @media (max-width: 568px) {
          grid-column: 1 / -1;
      }
  }

  [class*='row-'] {
      @media (max-width: 568px) {
          grid-row: span 1;
      }
  }

  .tags-wrapper {
      margin-bottom: 1.3rem;
      display: flex;
      overflow-x: auto;
  }
</style>
