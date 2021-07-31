<template>
  <div class="register">
    <div class="content"> 
      <div>
        <input v-model="register.registroAns" type="number" placeholder="Registro ANS">
        <input v-model="register.cnpj" type="number" placeholder="CNPJ">
        <input v-model="register.razaoSocial" type="text" placeholder="Razão social">
      </div>   
      <div>  
        <input v-model="register.nomeFantasia" type="text" placeholder="Nome Fantasia">
        <input v-model="register.modalidade" type="text" placeholder="Modalidade">
        <input v-model="register.logradouro" type="text" placeholder="Logradouro">
      </div>   
      <div>   
        <input v-model="register.numero" type="text" placeholder="Número">
        <input v-model="register.complemento" type="text" placeholder="Complemento">
        <input v-model="register.bairro" type="text" placeholder="Bairro">
      </div>   
      <div>   
        <input v-model="register.cidade" type="text" placeholder="Cidade">
        <input v-model="register.uf" type="text" placeholder="UF">
        <input v-model="register.cep" type="number" placeholder="CEP">
      </div>   
      <div>   
        <input v-model="register.ddd" type="number" placeholder="DDD">
        <input v-model="register.telefone" type="number" placeholder="Telefone">
        <input v-model="register.fax" type="number" placeholder="Fax">
      </div>   
      <div>   
        <input v-model="register.enderecoEletronico" type="text" placeholder="Endereço Eletronico">
        <input v-model="register.representante" type="text" placeholder="Representante">
        <input v-model="register.cargoRepresentante" type="text" placeholder="Cargo Representante">      
      </div>  
      <div>
        <button id="delete-button" class="button-register" @click="deleteRegister(registerId)" v-if="registerId">Remover</button>
        <button class="button-register" @click="newRegister()">Salvar</button>        
      </div> 
    </div>           
  </div>
</template>

<script>
export default {
  name: 'Register',  
  props: {
    isOpen: Boolean,     
    reload: Function,
    closeModal: Function,
    registerId: String 
  },
  data() {
    return {
      register: {
        registroAns: "",
        cnpj: "",
        razaoSocial: "",
        nomeFantasia: "",
        modalidade: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        ddd: "",
        telefone: "",
        fax: "",
        enderecoEletronico: "",
        representante: "",
        cargoRepresentante: ""
      }
    }
  },
  mounted: async function() {
    if(this.registerId){
      this.register = (await this.axios.get(`http://localhost:3333/api/records/${this.registerId}`)).data;      
    }
  },
  methods: {    
    clearForm() {
      this.register= {
        registroAns: "",
        cnpj: "",
        razaoSocial: "",
        nomeFantasia: "",
        modalidade: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        ddd: "",
        telefone: "",
        fax: "",
        enderecoEletronico: "",
        representante: "",
        cargoRepresentante: ""
      }
    },
    newRegister() {        
      let method = this.registerId ? this.axios.put : this.axios.post;
      let url = this.registerId ? `http://localhost:3333/api/records/${this.registerId}` : "http://localhost:3333/api/records/";
      method(url, this.register)
        .then(() => {
          this.registerId ? alert("Registro atualizado") : alert("Registro cadastrado");
          this.clearForm();                
          this.reload();  
          this.closeModal();
        })  
        .catch(() => {
          alert("Ocorreu um erro");
      })    
    },    
    async deleteRegister(_id) {
      await this.axios.delete(`http://localhost:3333/api/records/${_id}`);
      this.closeModal();
      this.reload();
    },
  }, 
}
</script>

<style scoped>
.register {
  background-color: #00000073;
  
  height: 100%;
  width: 100%;
  
  position: fixed;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  position: relative;

  background-color: #fff;
  
  width: 60vw;
  height: 85vh;

  border-radius: 10px;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  height: 45px;
  font-size: 20px;
}

#delete-button {
  background-color: red; 
  color: white;
}

#delete-button:hover {
  background-color: rgb(126, 1, 1);
}

.button-register {
  margin: 5px 5px;
  border: 0;
  background-color: #68dd83;
  height: 45px;
  width: 200px;
  font-size: 20px;
  border-radius: 6px; 
  transition: 0.3s;
}

.button-register:hover {
  background-color: rgb(92, 182, 111);
}

.button-register:active {
  background-color: rgb(77, 155, 94);
}
</style>