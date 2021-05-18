<template>
  <div class="quiz">
    <h2>
      <img class="imgicon" src="../assets/brasilbandeira.png" /> Teste de marca
      coletiva
    </h2>
    <hr />
    <h4>É pessoa jurídica representativa de coletividade?</h4>
    <b-form-group>
      <b-form-radio-group v-model="selected" :options="options" size="lg">
      </b-form-radio-group>
    </b-form-group>

    <hr />
    <hr />
    <h4>
      Sua marca terá como objetivo identificar e distinguir produtos ou até
      mesmo serviços que serão prestados ou vendidos por representantes de uma
      associação?
    </h4>
    <b-form-group>
      <b-form-radio-group v-model="selected2" :options="options2" size="lg">
      </b-form-radio-group>
    </b-form-group>

    <hr />
    <hr />
    <h4>
      Seu produto ou serviço segue determinadas normas, padrões ou
      especificações técnicas, ampliando o padrão de qualidade ou distinguido o
      método de produção?
    </h4>
    <b-form-group>
      <b-form-radio-group v-model="selected3" :options="options3" size="lg">
      </b-form-radio-group>
    </b-form-group>

    <hr />
    <hr />
    <h4>
      Sua marca tem como finalidade distinguir o seu produto ou serviço de
      potenciais outros produtos ou serviços que sejam iguais ao seu?
    </h4>
    <b-form-group>
      <b-form-radio-group v-model="selected4" :options="options4" size="lg">
      </b-form-radio-group>
    </b-form-group>

    <hr />
    <hr />
    <h4>
      São os seus associados que prestam o serviço ou a sua empresa que presta o
      serviço?
    </h4>
    <b-form-group>
      <b-form-radio-group v-model="selected5" :options="options5" size="lg">
      </b-form-radio-group>
    </b-form-group>
    <b-button
      size="lg"
      variant="outline-light"
      :to="{
        name: 'Resultado',
        params: { resultado: gerarResultado() },
      }"
      >Finalizar</b-button
    >
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      selected: null,
      options: [
        {
          text: "sim",
          value: true,
        },
        {
          text: "não",
          value: false,
        },
      ],
      selected2: null,
      options2: [
        {
          text: "sim",
          value: true,
        },
        {
          text: "não",
          value: false,
        },
      ],
      selected3: null,
      options3: [
        {
          text: "sim",
          value: true,
        },
        {
          text: "não",
          value: false,
        },
      ],
      selected4: null,
      options4: [
        {
          text: "sim",
          value: true,
        },
        {
          text: "não",
          value: false,
        },
      ],
      selected5: null,
      options5: [
        {
          text: "Meus associados que prestam o serviço",
          value: true,
        },
        {
          text: "Minha empresa que presta o serviço",
          value: false,
        },
      ],
      resultado: true,
    };
  },
  methods: {
    gerarResultado: function () {
      if (
        this.selected &&
        this.selected2 &&
        this.selected3 &&
        this.selected4 &&
        this.selected5
      ) {
        return 1;
      } else if (this.selected && this.selected4 && this.selected5) {
        return 2;
      } else return 3;
    },
  },
};
</script>
