<template>
  <div align="center">
    <hr />
    <b-row>
      <b-col id="alertsdiv"
        ><b-alert show variant="success" v-if="show1()">
          <h1 class="alert-heading">Parabéns!</h1>
          <h4>
            Sua marca possui todas as caracteísticas adequadas para se enquadrar
            em uma marca coletiva. Agora o próximo passo é entrar em contato com
            o INPI para registrar sua marca.
          </h4>
        </b-alert>
        <b-alert show variant="warning" v-if="show2()">
          <h1 class="alert-heading">Quase lá!</h1>
          <h4>
            Sua marca possui certas características de uma marca coletiva, no
            entanto, talvez seja melhor outro tipo de marca (certificação,
            indicação geográfica, tridimensional).
          </h4>
        </b-alert>
        <b-alert show variant="danger" v-if="show3()">
          <h1 class="alert-heading">Acho que não!</h1>
          <h4>
            Sua marca não possui os requisitos básicos de uma marca coletiva.
            Talvez seja melhor refatorar seus planos.
          </h4>
        </b-alert>
      </b-col>
    </b-row>

    <hr />
    <h2>Entre em contato</h2>
    <hr />
    <b-row id="formulario" align-h="center">
      <b-col cols="5">
        <b-form-group label="Nome:" label-size="lg" label-for="input-1">
          <b-form-input
            size="lg"
            type="text"
            placeholder="Entre com o seu nome"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Email:" label-size="lg" label-for="input-1">
          <b-form-input
            size="lg"
            type="email"
            placeholder="Entre com o seu email"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Telefone:" label-size="lg" label-for="input-1">
          <b-form-input
            size="lg"
            placeholder="Entre com o seu telefone"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="5">
        <b-form-group label-size="lg" label="Sobrenome:" label-for="input-1">
          <b-form-input
            size="lg"
            type="text"
            placeholder="Entre com seu sobrenome"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Fale conosco:" label-size="lg" label-for="input-1">
          <b-form-textarea
            size="lg"
            placeholder="Entre com a sua dúvida"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <b-button size="lg" variant="danger"> Submit </b-button>
  </div>
</template>

<script>
export default {
  name: "Resultado",
  data() {
    return {
      resultado: this.$route.params.resultado,
    };
  },
  methods: {
    show1: function () {
      if (this.resultado == 1) {
        return true;
      } else return false;
    },
    show2: function () {
      if (this.resultado == 2) {
        return true;
      } else return false;
    },
    show3: function () {
      if (this.resultado == 3) {
        return true;
      } else return false;
    },
  },
};
</script>

<style>
#formulario {
  padding: 0 200px 0 200px;
}

#alertsdiv {
  padding: 0 200px 0 200px;
}
</style>