<template>
  <div>
    <Title>Design your taco masterpiece</Title>
    <p>
      We provide a palette of fresh ingredients...you provide the inspiration! Select the components
      that will come together as your crowning achievement of taco workmanship.
    </p>

    <form>
      <div class="ingredientsblock" style="text-align: center; width: 100%;">
        <group-box title="Record your wrap">
          <span v-for="item in form.wrap" :key="item.id">
            <input
              type="checkbox"
              name="ingredients"
              :value="item.id"
              @change="checkSelect(item, $event)"
            />
            {{ item.name }}
            <br />
          </span>
        </group-box>
        <group-box title="Pick your proteins">
          <span v-for="item in form.protein" :key="item.id">
            <input
              type="checkbox"
              name="ingredients"
              :value="item.id"
              @change="checkSelect(item, $event)"
            />
            {{ item.name }}
            <br />
          </span>
        </group-box>
        <group-box title="Choose your cheeses">
          <span v-for="item in form.cheese" :key="item.id">
            <input
              type="checkbox"
              name="ingredients"
              :value="item.id"
              @change="checkSelect(item, $event)"
            />
            {{ item.name }}
            <br />
          </span>
        </group-box>
        <group-box title="Vouch for your veggies">
          <span v-for="item in form.veggies" :key="item.id">
            <input
              type="checkbox"
              name="ingredients"
              :value="item.id"
              @change="checkSelect(item, $event)"
            />
            {{ item.name }}
            <br />
          </span>
        </group-box>
        <group-box title="Select your sauces">
          <span v-for="item in form.sauce" :key="item.id">
            <input
              type="checkbox"
              name="ingredients"
              :value="item.id"
              @change="checkSelect(item, $event)"
            />
            {{ item.name }}
            <br />
          </span>
        </group-box>
        <group-box title="Name your taco creation">
          My taco magnum opus shall be called
          <br />the " <input type="text" v-model="model.name" name="name" class="nameField" />"!
        </group-box>
      </div>

      <div style="text-align:center; width:100%;">
        <button @click="submit">Construct this taco</button>
      </div>
    </form>
  </div>
</template>

<script>
import Title from '@/components/title/title';
import GroupBox from '@/components/group-box/group-box';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      model: {
        name: '',
        ingredients: [],
      },
      form: {
        wrap: [],
        protein: [],
        veggies: [],
        cheese: [],
        sauce: [],
      },
    };
  },
  mounted() {
    this.fetch.get('/ingredientsx').then(res => {
      res.forEach(element => {
        this.form[element.type.toLowerCase()].push(element);
      });
    });
  },
  methods: {
    submit() {
      event.preventDefault();
      if (this.model.name.trim() === '') {
        alert('name can not be empty!');
        return;
      } else if (this.model.ingredients.length < 1) {
        alert('you must at least choose one ingredient!');
        return;
      }
      this.fetch
        .post('/design', this.model)
        .then(res => {
          console.log('ssss', res);
          this.pushProductToCart(res);
          this.$router.push('/cart');
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkSelect(item, e) {
      console.log(item, e.target.checked);
      let checked = e.target.checked;
      if (checked) {
        this.model.ingredients.push(item);
      } else {
        this.model.ingredients.splice(this.model.ingredients.findIndex(i => i === item), 1);
      }
    },
    ...mapMutations('cart', ['pushProductToCart']),
  },
  components: {
    Title,
    GroupBox,
  },
};
</script>

<style lang="less" scoped>
.ingredientsblock {
  width: 1000px;
  .nameField {
    font-size: 16pt;
    background: none;
    border: none;
    border-bottom: 1px solid #003366;
  }
}
button {
  background-color: rgba(118, 214, 255, 0.25);
  border: 1px solid #76d6ff;
  color: #003366;
  font-size: 16pt;
  padding: 8px;
  border-radius: 10px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
