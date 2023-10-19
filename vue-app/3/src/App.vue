<template>
  <div>
    <input type="text" v-model="input" />

    <ul>
      <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';

  const users = ref([]);
  const input = ref('');
  const filteredUsers = computed(() => users.value.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())));

  onMounted(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await res.json();
  });
</script>



