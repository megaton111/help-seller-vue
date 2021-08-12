<template>
    
  <div>
    <div class="form_track">
      <select v-model="selected" >
        <option 
        v-for="( comp, idx ) in company" 
        :value="comp.code" 
        :key="idx">
          {{ comp.name }}
        </option>
      </select>
      <input type="text" placeholder="운송장번호" v-model="number"  @keyup.enter="confirmData" />
      <button type="button" class="btn" @click="confirmData">확인</button>
    </div>

    <div class="result" :class="{ fail : !check }">{{ message }}</div>

    <div class="wrap-progress">
      <h2>{{ state }}</h2>
      <div v-for="(info , idx) in progress" :key="idx">
        <div>{{ info.time }}</div>
        <div>{{ info.location.name }}</div>
        <div>{{ info.description }}</div>
      </div>
    </div>

  </div>
</template>

<script>
  
  import { checkTrack } from "../apis/checkTrack"

  export default {
    name : 'Track' ,
    data () {
      return {
        company : [
          { name : '우체국택배', code : 'kr.epost' } ,
          { name : 'CJ대한통운', code : 'kr.cjlogistics' }
        ] ,
        selected : 'kr.cjlogistics' ,
        number : '' , 
        message : '정보를 입력해주세요.' , 
        check : true , 
        state : '' ,
        progress : [] ,
      }
    } ,
    methods : {
      confirmData () {
        this.message = '확인중...' ; 
        checkTrack( this.selected, this.number ).then(res => {

          let { state, progresses } = res ;
          this.state = state.text ; 
          console.log( 'progresses :', progresses ) ; 
          progresses.forEach((item) => {
            let t = new Date( item.time ) ;
            item.time = t.getFullYear() +'년' + ( t.getMonth() + 1 ) + '월' + t.getDate() + '일' + t.getHours() + '시' + t.getMinutes() + '분';
          })
          this.progress = progresses  ;
          this.message = '' ; 
        }).catch( err => {
          console.log('ERROR :', err) ;
          this.check = false ; 
          this.message = '잘못된 정보이거나 아직 조회되지 않는 정보입니다' ; 
          this.progress = [] ; 
          this.state = '' ; 
        }) ; 

      }
    }
  }
</script>

<style lang="scss" scoped>
  div.fail { color : red ; }
  .btn { cursor: pointer ; }
</style>