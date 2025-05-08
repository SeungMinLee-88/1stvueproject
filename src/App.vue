<script setup>
import Axios from "axios";
import { RouterLink, RouterView } from 'vue-router'

import { ref, onMounted } from 'vue'
import Button from 'primevue/button';
import DataView from 'primevue/dataview';
import Tag from 'primevue/tag';

import { ProductService  } from './service/ProductService';

const userListref = ref([]);
const customers = ref();
const userList = ref([]);
const products = ref();
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

const getData = async () => {

await Axios.get("http://localhost:8090/user/userList", {
  params: {
  },
}
).then((response) => {
  //console.log("response.data : " + JSON.stringify(response.data));
  userListref.value = response.data;
  //console.log("userListref 11111111 : " + JSON.stringify(userListref));


}).catch(function (error) {
  console.log("error : " + error)
});
//console.log("userListref 2222222222 : " + JSON.stringify(userListref));
//console.log("userListref loginId : " + JSON.stringify(userListref.value[0].loginId));
userListref.value.forEach((users, index) => {
//console.log("users : " + users[index].loginId);
})
//console.log("userListref 2222222222 : " + JSON.stringify(userListref));
return userListref;
}

  const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
  console.log("items 11111111 : " + JSON.stringify(items));

  userListref.value.forEach((users, index) => {
  console.log("users : " + users[index].loginId);
})
onMounted(() => {
  Promise.resolve(getData()).then((data) => (userList.value = data));;
  console.log("userList 11111111 : " + JSON.stringify(userList));
  console.log("call onMounted");
  ProductService.getProductsSmall().then((data) => (products.value = data));
})
</script>
<template>
<div>

  <li v-for="(userList, index) in userListref">
  - index : {{ index }} - userList : {{ userList }}
  </li>

  <div class="card">
        <DataView :value="userListref" paginator :rows="5">
            <template #list="slotProps">
                <div class="flex flex-col">
                    <div v-for="(userList, index) in slotProps.items" :key="index">
                        <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                    <div style="display: flex">
                                      <div style="padding-right: 5px;">
                                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ userList.id }}</span>
                                      </div>
                                      <div style="padding-right: 5px;">
                                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ userList.loginId }}</span>
                                      </div>
                                      <div style="padding-right: 5px;">
                                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ userList.userName }}</span>
                                      </div>
                                        <div class="text-lg font-medium mt-2">{{ userList.roleUserSave }}</div>
                                    </div>
                                    <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                        <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 font-medium text-sm">{{ "&nbsp" }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</div>


</template>
