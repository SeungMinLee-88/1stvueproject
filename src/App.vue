<script setup>
import Axios from "axios";
import { RouterLink, RouterView } from 'vue-router'

import { Container,
  ListItem,
  ListIcon,
  ListHeader,
  ListDescription,
  ListContent,
  List,
  Pagination,
  Search  } from "semantic-ui-vue";
import { ref, onMounted } from 'vue'

const getData = async () => {
  const getUserList = [];
    await Axios.get("http://localhost:8090/user/userList", {
      headers :{
                'Access-Control-Allow-Headers':'Content-Type, Authorization, Response-Header',
                'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Expose-Headers':'*'
              },
      params: {
      },
    }
  ).then((response) => {
      console.log("response.data : " + JSON.stringify(response.data));
      getUserList.push(response.data);
      console.log("getUserList : " + JSON.stringify(getUserList));
      return "getUserList";

    }).catch(function (error) {
      return null;
    });

  }

  await Axios.get("http://localhost:8090/user/userList", {
      headers :{
                'Access-Control-Allow-Headers':'Content-Type, Authorization, Response-Header',
                'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Expose-Headers':'*'
              },
      params: {
      },
    }
  ).then((response) => {
      console.log("response.data : " + JSON.stringify(response.data));
      const userList = ref([response.data]);
    }).catch(function (error) {
    });


  console.log("userList : " + userList.length);
  userList.value.forEach((users, index) => {
  // forEach의 콜백 함수 외부에 있는 `parentMessage`에 대한 접근 가능.
  // 반면 `item`과 `index`는 콜백함수 내부에서만 접근 가능.
  console.log("users : " + users);
})

  onMounted(() => {

})


</script>

<template>
<div>
  <li v-for="({ users }, index) in userList">
  {{ users }} {{ index }}
</li>
</div>
</template>
