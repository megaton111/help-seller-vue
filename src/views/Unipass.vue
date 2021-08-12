<template>
  <div>

    <div class="form_unipass">
      <input type="text" placeholder="이름" v-model="name" />
      <input type="text" placeholder="개인통관고유번호" v-model="number" @keyup.enter="confirmData" />
      <button type="button" class="btn" @click="confirmData">확인</button>
    </div>

    <div class="result" :class="{ fail : !check }">{{ message }}</div>

  </div>
</template>

<script>
  import { checkPass } from "../apis/checkPass"
  
  export default {
    name : 'Unipass' ,
    data () {
      return {
        name : '' ,   // 이근호
        number : '' ,   // P190007126387
        check : '' , 
        message : '정보를 입력해주세요.'
      }
    } , 
    methods : {
      confirmData () {

        if( this.name.trim() == '' ) {
          this.message = '이름을 입력해주세요' ; 
        } else if( this.number.trim() == '' ) {
          this.message = '개인통관번호를 입력해주세요.' ; 
        } else {
          this.message = '확인중...' ; 
          checkPass( this.name, this.number ).then( result => {
            this.check = result.value * 1; 
            this.message = this.check ? '정보가 일치합니다.' : '일치하지 않습니다.' ;
          }).catch( err => console.log(err) ) ; 
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  div.fail { color : red ; }
  .btn { cursor: pointer ; }
</style>