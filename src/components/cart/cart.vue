<template>
  <div>
    <Title>Order your taco creations</Title>
    <p>
      You've crafted your mouthwatering taco masterpieces. Now, just imagine those creations
      appearing before you at home...or work...or wherever you are!
    </p>

    <p v-if="items.length === 0">
      <b>
        There are no tacos currently in your cart.
        <router-link to="/design">Create one now</router-link>or choose a
        <router-link to="/recents">recently created taco</router-link>
      </b>
    </p>

    <div v-if="items.length > 0">
      <p>
        Here are your latest taco designs. Just say the word and we'll set them on a cloud aloft to
        you!
      </p>

      <div class="groupBox groupBoxFull">
        <div class="groupBoxTitle">Here are my tacos...</div>
        <div class="groupBoxContent">
          <table border="1" width="90%">
            <thead>
              <tr>
                <td>Qty</td>
                <td>Name</td>
                <td>Description</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>
                  <select @change="selectQuantity(item.id, $event)">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="0">Remove</option>
                  </select>
                </td>
                <td>
                  The "
                  <span class="caps">{{ item.name }}</span
                  >"
                </td>
                <td>
                  <ul class="commalist">
                    <li v-for="ingredient in nonwraps(item.ingredients)" :key="ingredient.id">
                      {{ ingredient.name }}
                    </li>
                  </ul>
                  <span v-if="hasWrap(item.ingredients)">
                    <span>wrapped in</span>
                    <ul class="commalist">
                      <li v-for="ingredient in wraps(item.ingredients)" :key="ingredient.id">
                        {{ ingredient.name }}
                      </li>
                    </ul>
                  </span>
                  <div v-else>in a bowl</div>
                </td>
                <td align="right">{{ (item.price * item.quantity) | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" align="right">Total:</td>
                <td align="right">
                  <span>{{ cartTotalPrice | currency }}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <form>
        <div class="groupBox groupBoxHalf">
          <div class="groupBoxTitle">Deliver them to...</div>
          <div class="groupBoxContent">
            <label for="deliveryName">Name:</label>
            <input type="text" name="deliveryName" size="40" />
            <br />

            <label for="deliveryStreet">Street address:</label>
            <input type="text" name="deliveryStreet" size="40" />
            <br />

            <label for="deliveryCity">City / State:</label>
            <input type="text" name="deliveryCity" size="30" />
            <select name="deliveryState">
              <option value>--</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">DC</option>
            </select>
            <br />
            <label for="deliveryZip">Zip code:</label>
            <input type="text" name="deliveryZip" />
          </div>
        </div>
        <div class="groupBox groupBoxHalf">
          <div class="groupBoxTitle">Here's how I'll pay...</div>
          <div class="groupBoxContent">
            <label for="ccNumber">Credit Card #:</label>
            <input type="text" name="ccNumber" />
            <br />
            <label for="ccExpiration">Expiration / CVV:</label>
            <input type="text" name="ccExpiration" />
            <input type="text" name="ccCVV" size="4" />
          </div>
        </div>
        <br />
        <button label="Submit Order"></button>
      </form>
    </div>
  </div>
</template>
<script>
import Title from '@/components/title/title';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectValue: 1,
    };
  },
  methods: {
    ...mapMutations('cart', ['setItemQuantity']),
    hasWrap(ingredients) {
      for (let ingredient of ingredients) {
        if (ingredient.type === 'WRAP') {
          return true;
        }
      }
      return false;
    },
    selectQuantity(id, event) {
      this.setItemQuantity({ id, quantity: event.target.value });
    },
  },
  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['cartTotalPrice']),
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
.groupBox {
  display: inline-block;
  vertical-align: top;
  background-repeat: no-repeat;
  background-color: rgba(118, 214, 255, 0.25);
  margin: 10px;
  border-radius: 10px;
  text-align: right;
  padding: 0 10px 10px 0;
  height: 100%;
  color: #003366;
  border: 1px solid #76d6ff;
  .groupBoxTitle {
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid lightblue;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .groupBoxContent {
    padding: 20px;
    text-align: left;
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
.groupBoxFull {
  width: 938px;
}
.groupBoxHalf {
  width: 450px;
}
select {
  font-size: 14pt;
  color: #003366;
  background-color: white;
}
label {
  display: block;
  font-weight: bold;
  font-size: 14pt;
}

input {
  font-size: 14pt;
  color: #003366;
}
</style>
