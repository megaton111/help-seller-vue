<template>
  <div>

    <div class="wrap-input">
      <textarea name="" id="" cols="30" rows="10" v-model="input1"></textarea>
      <textarea name="" id="" cols="30" rows="10" v-model="input2"></textarea>
      <textarea name="" id="" cols="30" rows="10" v-model="input3"></textarea>
    </div>
    <div class="wrap-check">
      <input type="checkbox" id="chk1" value="1+2" v-model="checkedNames" /><label for="chk1">1+2</label>
      <input type="checkbox" id="chk2" value="1+3" v-model="checkedNames" /><label for="chk2">1+3</label>
      <input type="checkbox" id="chk3" value="2+1" v-model="checkedNames" /><label for="chk3">2+1</label>
      <input type="checkbox" id="chk4" value="2+3" v-model="checkedNames" /><label for="chk4">2+3</label>
      <input type="checkbox" id="chk5" value="3+1" v-model="checkedNames" /><label for="chk5">3+1</label>
      <input type="checkbox" id="chk6" value="3+2" v-model="checkedNames" /><label for="chk6">3+2</label>
    </div>
    {{ checkedNames }}
      <button type="button" @click="checkKeyword">확인</button>

  </div>
</template>

<script>
  export default {
    name : 'KeywordCombi' ,
    data () {
      return {
        input1 : '', 
        input2 : '', 
        input3 : '', 
        input1Arr : [] , 
        input2Arr : [] , 
        input3Arr : [] , 
        checkedNames : [] , 
        checkedNumber : [] ,

        testArr1 : [ '가', '나', '다', '라', '마', '바', '사' ] ,
        testArr2 : [ '1', '2', '3', '4', '5', '6', '7' ] , 
        resultArr : [] ,

      }
    } ,
    methods : {
      checkKeyword() {
        console.log( 'checkKeyword in' ) ; 

        this.testArr1.forEach((item)=>{
          this.testArr2.forEach((num) => this.resultArr.push( item + num ) ) ; 
        }) ;
        console.log( 'result :', this.resultArr ) ;

        // console.log( this.testArr1 , this.testArr2 ) ;
        // let result = this.testArr1.map((item) => {
        //   for( let i=0; i<this.testArr2.length; i++ ){
        //     return item + this.testArr2[i] 
        //   }
        // }) ; 
        // console.log( 'result :', result ) ; 

        // this.input1Arr = this.input1.split('\n') ; 
        // this.input2Arr = this.input2.split('\n') ; 
        // this.input3Arr = this.input3.split('\n') ; 
        // console.log( this.input1Arr ) ; 
        // console.log( this.input2Arr ) ; 
        // console.log( this.input3Arr ) ; 
        // this.checkedNumber = this.checkedNames.map((item) => item.split('+') ) ;
        // console.log( this.checkedNumber ) ; 
      } ,
      setKeyWord () {
        
      }
    }
  }
</script>