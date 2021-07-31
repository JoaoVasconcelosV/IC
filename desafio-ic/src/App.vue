<template>
  <div>
  <Register v-bind:isOpen="isOpen" v-bind:reload="req" v-bind:closeModal="closeModal" v-bind:registerId="registerId" v-if="isOpen === true"/>
  <div class="button">
    <button v-if="isOpen === false" class="button-register" @click="() => {isOpen= !isOpen; registerId = null}">+</button>            
    <button v-else class="button-register" @click="() => {isOpen= !isOpen; registerId = null}">x</button>            
  </div> 
  <div class="content">
    <Header />    
    <div class="container">
      <div class="titles">
        <span>
          Relação de Operadoras Ativas ANS
        </span>
        <input v-model="getIt" type="text" placeholder="Buscar por Registro ANS">
      </div>
      <div class="dados">
        <table class="table">
          <tr>
            <th>
              Registro ANS
            </th>
            <th>
              CNPJ
            </th>
            <th>
              Razão Social
            </th>
            <th>
              Nome Fantasia
            </th>
            <th>
              Modalidade
            </th>
            <th>
              Logradouro
            </th>
            <th>
              Número
            </th>
            <th>
              Complemento
            </th>
            <th>
              Bairro
            </th>
            <th>
              Cidade
            </th>
            <th>
              UF
            </th>
            <th>
              CEP
            </th>
            <th>
              DDD
            </th>
            <th>
              Telefone
            </th>
            <th>
              Fax
            </th>
            <th>
              Endereço eletrônico
            </th>
            <th>
              Representante
            </th>
            <th>
              Cargo Representante
            </th>
            <th>
              Data Registro ANS
            </th>
          </tr>
          <!-- eslint-disable -->
          <tr style="cursor: pointer" v-for="dado in dados" :key="dado._id" v-if="getIt ? getIt == dado.registroAns : true" @click="changeId(dado._id)">
          <!-- eslint-enable -->
            <td>{{dado.registroAns}}</td>
            <td>{{dado.cnpj}}</td>
            <td>{{dado.razaoSocial}}</td>
            <td>{{dado.nomeFantasia}}</td>
            <td>{{dado.modalidade}}</td>
            <td>{{dado.logradouro}}</td>
            <td>{{dado.numero}}</td>
            <td>{{dado.complemento}}</td>
            <td>{{dado.bairro}}</td>
            <td>{{dado.cidade}}</td>
            <td>{{dado.uf}}</td>
            <td>{{dado.cep}}</td>
            <td>{{dado.ddd}}</td>
            <td>{{dado.telefone}}</td>
            <td>{{dado.fax}}</td>
            <td>{{dado.enderecoEletronico}}</td>
            <td>{{dado.representante}}</td>
            <td>{{dado.cargoRepresentante}}</td>
            <td style="min-width: 120px">{{new Date(dado.dataRegistroAns).getDate()}} / {{new Date(dado.dataRegistroAns).getMonth()}} / {{new Date(dado.dataRegistroAns).getFullYear()}}</td>            
          </tr> 
        </table>               
      </div>           
    </div>
  </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    Header,
    Register
  },
  data() {
    return {
      getIt: "",
      dados: null,
      isOpen: false,
      registerId: null
    }
  },  
  async mounted() {    
    this.req();
  }, 
  methods: {
    closeModal() {
      this.isOpen= !this.isOpen      
    },    
    async req() {
      this.dados = (await this.axios.get('http://localhost:3333/api/records')).data;
    },
    changeId(id) {
      this.registerId = id;
      this.closeModal();      
    }
  }  
}
</script>

<style scoped>

.content {
  background-color: #F1F1F1;
  height: 100%;
}

.container {
  background-color: #fff;

  margin: 24px;
  padding: 12px;
}

.titles {
  display: flex;
  justify-content: space-between;
}

.titles span {
  color: #5161F1;
  font-size: 20px;
}

.titles input {
  font-size: 16px;
  text-align: center;

  border-style: dotted;

  width: 40vw;
}

.dados {
  overflow-x: auto;
  max-height: calc(100vh - 169px);
}

.table {
  margin: 12px 0;

  width: 100%;
  
  border: 1px solid;
  border-collapse: collapse;  
}

.table th{
  text-align: left;
  background-color: #555555;
  color: white;
}

.table td, th {
  border: 1px solid #dddddd;  
  padding: 5px 10px
}

.button{
  position: fixed;
  right: 6px;
  bottom: 6px;
}

.button-register { 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;  
  border: 0px;
  background-color: #68dd83;  
  height: 50px;
  width: 50px;
  border-radius: 50%;
  transition: 0.3s;
}

.button-register:hover {
  background-color: rgb(92, 182, 111);
}

.button-register:active {
  background-color: rgb(77, 155, 94);
}
</style>
