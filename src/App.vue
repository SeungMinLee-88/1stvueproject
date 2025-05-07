<script setup>
import Axios from "axios";
import { RouterLink, RouterView } from 'vue-router'

import { ref, onMounted } from 'vue'



const userListref = ref([]);
console.log("userListref aaaaaaaaaa : " + JSON.stringify(userListref));

//      Axios.get("http://localhost:8090/user/userList", {
// /*       headers :{
//                 'Access-Control-Allow-Headers':'Content-Type, Authorization, Response-Header',
//                 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE',
//                 'Access-Control-Allow-Origin':'*',
//                 'Access-Control-Expose-Headers':'*'
//               }, */
//       params: {
//       },
//     }
//   ).then((response) => {
//       console.log("response.data : " + JSON.stringify(response.data));
//       userListref.value = response.data;
//       console.log("userListref 11111111 : " + JSON.stringify(userListref));


//     }).catch(function (error) {
//       console.log("error : " + error)
//     });
//     console.log("userListref 2222222222 : " + JSON.stringify(userListref));
//     //console.log("userListref loginId : " + JSON.stringify(userListref.value[0].loginId));
//     userListref.value.forEach((users, index) => {
//   console.log("users : " + users[index].loginId);
// })

const getData = () => {

Axios.get("http://localhost:8090/user/userList", {
/*       headers :{
            'Access-Control-Allow-Headers':'Content-Type, Authorization, Response-Header',
            'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Expose-Headers':'*'
          }, */
  params: {
  },
}
).then((response) => {
  console.log("response.data : " + JSON.stringify(response.data));
  userListref.value = response.data;
  console.log("userListref 11111111 : " + JSON.stringify(userListref));


}).catch(function (error) {
  console.log("error : " + error)
});
console.log("userListref 2222222222 : " + JSON.stringify(userListref));
//console.log("userListref loginId : " + JSON.stringify(userListref.value[0].loginId));
userListref.value.forEach((users, index) => {
console.log("users : " + users[index].loginId);
})
}




  console.log("userListref 000000000 : " + JSON.stringify(userListref));
/*   userListref.value.forEach((users, index) => {
  console.log("users : " + JSON.stringify(users))
}) */

  // forEach의 콜백 함수 외부에 있는 `parentMessage`에 대한 접근 가능.
  // 반면 `item`과 `index`는 콜백함수 내부에서만 접근 가능.
  const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
  console.log("items 11111111 : " + JSON.stringify(items));

  userListref.value.forEach((users, index) => {
  console.log("users : " + users[index].loginId);
})


onMounted(() => {
  getData();
  console.log("call onMounted");
})
</script>
<template>
<div>
  <li v-for="(userList, index) in userListref">
  - index : {{ index }} - userList : {{ userList }}
  </li>
</div>
<sui_list divided relaxed>
    <sui_list_item>
      <sui_list_icon name="github" size="large" vertical_align="middle" />
      <sui_list_content>
        <a is="sui_list_header">Semantic_Org/Semantic_UI</a>
        <a is="sui_list_description">Updated 10 mins ago</a>
      </sui_list_content>
    </sui_list_item>
    <sui_list_item>
      <sui_list_icon name="github" size="large" vertical_align="middle" />
      <sui_list_content>
        <a is="sui_list_header">Semantic_Org/Semantic_UI_Docs</a>
        <a is="sui_list_description">Updated 22 mins ago</a>
      </sui_list_content>
    </sui_list_item>
    <sui_list_item>
      <sui_list_icon name="github" size="large" vertical_align="middle" />
      <sui_list_content>
        <a is="sui_list_header">Semantic_Org/Semantic_UI_Meteor</a>
        <a is="sui_list_description">Updated 34 mins ago</a>
      </sui_list_content>
    </sui_list_item>
  </sui_list>



</template>
