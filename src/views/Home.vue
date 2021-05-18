<template>
  <div class="home">
    <b-row>
      <b-col cols="9">
        <h2>
          <img class="imgicon" src="../assets/brasilbandeira.png" /> O que é uma
          marca coletiva?
        </h2>
        <h5>
          Marca coletiva é aquela destinada a identificar e distinguir produtos
          ou serviços provenientes de membros de uma pessoa jurídica
          representativa de coletividade (associação, cooperativa, sindicato,
          consórcio, federação, confederação, entre outros), de produtos ou
          serviços iguais, semelhantes ou afins, de procedência diversa (art.
          123, inciso III, da LPI)
        </h5>

        <hr />

        <h2>
          <img class="imgicon" src="../assets/brasilbandeira.png" /> Como abrir
          uma marca coletiva?
        </h2>
        <h5>
          O pedido de registro de marca coletiva deve vir acompanhado do
          regulamento de utilização da marca, de acordo com o disposto no art.
          147 da LPI e conforme a Instrução Normativa nº 19/2013. Caso o
          regulamento não acompanhe o pedido, este documento deve ser
          protocolizado no prazo de até 60 (sessenta) dias da data do depósito
          da referida marca, sob pena de arquivamento definitivo do pedido, em
          conformidade com o disposto no parágrafo único do mesmo artigo.
        </h5>
      </b-col>
      <b-col cols="3" align="center">
        <img class="imghack" src="../assets/brasilbandeira.png" />
      </b-col>
    </b-row>
    <hr />
    <h2>
      <img class="imgicon" src="../assets/brasilbandeira.png" /> Exemplos de
      marcas coletivas nacionais!
    </h2>
    <hr />
    <b-row>
      <b-col>
        <img
          class="imgmarcas"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8iUgKEFQPksEniIuoNumxl3Wr_mZBzifmX-rGXdFP2DgH-QqBzqnoQ9QfQ7l7i_0_gs&usqp=CAU"
          alt=""
        />
      </b-col>
      <b-col>
        <img
          class="imgmarcas"
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQFyxFv05Qy8EA/company-logo_200_200/0/1560365170303?e=2159024400&v=beta&t=Duy6Lb9k8CMbrMVcjo8wrHj0YrsVdPpZ1bcOJxwsOAA"
          alt=""
        />
      </b-col>
      <b-col
        ><img
          class="imgmarcas"
          src="https://mercadomomento.com.br/desenv/web/images/mercado13.jpg"
          alt=""
        />
      </b-col>
      <b-col>
        <img
          class="imgmarcas"
          src="https://revistacafeicultura.com.br/bancofotos/materias/cafes-sustentaveis1.jpg"
          alt=""
        />
      </b-col>
      <b-col>
        <img
          class="imgmarcas"
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQG4iOFbjtYDSQ/company-logo_200_200/0/1553607733499?e=2159024400&v=beta&t=Ud59jGW-t9wY6CaDUmLz9Qol9zq-uIZ8MRJ_KVHAD1Y"
          alt=""
        />
      </b-col>

      <b-col>
        <img
          class="imgmarcas"
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQGeW0xdCNQX5w/company-logo_200_200/0/1519902597884?e=2159024400&v=beta&t=4i2Ta1ruYV6c0rG1zMjgww4xqUKfH-adpKxRWQR1M6A"
          alt=""
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "Home",
};
</script>

<style>
.imghack {
  max-width: 300px;
}

.imgicon {
  height: 60px;
}

h5 {
  word-spacing: 4px;
  letter-spacing: 1px;
  color: rgb(218, 226, 255);
}

.imgmarcas {
  height: 180px;
  border: 3px solid black;
  padding: 0px;
  border-radius: 15px;
  transition-duration: 0.5s;
}

.imgmarcas:hover {
  transform: scale(1.2);
}
</style>