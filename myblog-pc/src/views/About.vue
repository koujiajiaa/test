
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getData">返回数据</button>
  </div>
</template>

<script>
export default {
  data(){
    return {};
  },
  methods:{
    getData(){
      //阻止预检请求
    this.axios({
        methods:'post',
        url:'http://localhost:3000',
        data:{
            name:'lisi',
            age:23
        },
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }).then((response)=>{
      console.log(response.data);
    });
    },
}
}
</script>
