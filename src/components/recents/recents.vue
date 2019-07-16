<template>
  <div>
    <Title>Admire some recently created taco masterpieces</Title>
    <p>
      Even the greatest artists sometimes need to be inspired by the works of others. Here are some
      of the most recently created tacos, designed by taco artists just like you...
    </p>
    <div class="recentsblock">
      <div class="tacoblock" v-for="taco in recentTacos" :key="taco.id">
        <div class="tacoName">
          <span class="small">The</span>
          <br />
          "{{ taco.name }}"
        </div>
        <div class="tacoDesc">
          <ul class="commalist">
            <li v-for="ingredient in nonwraps(taco.ingredients)" :key="ingredient.id">
              {{ ingredient.name }}
            </li>
          </ul>
          <div v-if="hasWrap(taco.ingredients)">
            <span>wrapped in</span>
            <ul class="commalist">
              <li v-for="ingredient in wraps(taco.ingredients)" :key="ingredient.id">
                {{ ingredient.name }}
              </li>
            </ul>
          </div>
          <div v-else>in a bowl</div>
        </div>
        <button @click="addToCart(taco)">Order this taco</button>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '@/components/title/title';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      recentTacos: [],
    };
  },
  mounted() {
    this.fetch.get('/design/recent').then(res => {
      this.recentTacos = res;
    });
  },
  methods: {
    hasWrap(ingredients) {
      for (let ingredient of ingredients) {
        if (ingredient.type === 'WRAP') {
          return true;
        }
      }
      return false;
    },
    addToCart(taco) {
      this.pushProductToCart(taco);
    },
    ...mapMutations('cart', ['pushProductToCart']),
  },
  computed: {
    nonwraps() {
      return ingredients => ingredients.filter(ingredient => ingredient.type !== 'WRAP');
    },
    wraps() {
      return ingredients => ingredients.filter(ingredient => ingredient.type === 'WRAP');
    },
  },

  components: {
    Title,
  },
};
</script>
<style lang="less" scoped>
.small {
  font-size: 12pt;
}
button {
  background-color: rgba(118, 214, 255, 0.25);
  border: 1px solid #76d6ff;
  color: #003366;
  font-size: 10pt;
  padding: 4px;
  border-radius: 10px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.recentsblock {
  min-width: 1000px;
  .tacoblock {
    display: inline-block;
    vertical-align: top;
    width: 300px;
    background-image: url('../../assets/taco-icon.png');
    background-repeat: no-repeat;
    background-color: rgba(118, 214, 255, 0.25);
    margin: 10px;
    border-radius: 10px;
    text-align: right;
    padding: 0 10px 10px 0;
    height: 100%;
    color: #003366;
    border: 1px solid #76d6ff;
    .tacoName {
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid lightblue;
      padding-bottom: 10px;
      text-transform: capitalize;
    }
    .tacoDesc {
      padding: 20px;
      text-align: center;
      font-size: 12pt;
      .commalist {
        display: inline;
        list-style: none;
        padding: 0;
        li {
          display: inline;
          &:not(:first-child):before {
            content: ', ';
          }
          &:last-child:before {
            content: ' and ';
          }
          &:only-child:before {
            content: '';
          }
        }
      }
    }
  }
}
</style>
