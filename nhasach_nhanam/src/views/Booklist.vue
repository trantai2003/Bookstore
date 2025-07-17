<template>
    <div>
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
            </tr>
            <tr v-for="(book, index) in books" :key="index">
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import book_service from '@/services/book_service'
import { onMounted, ref } from 'vue'
import type { Book } from '@/types'

const books = ref(Array<Book>());
onMounted(() => {
    books.value = book_service.getAllBook();
});
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    border: solid 1px black;
}
</style>