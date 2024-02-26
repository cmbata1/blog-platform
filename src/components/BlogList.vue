<template>
    <div>
        <section class="hero" style="background-color: #b8b1c4;">
            <div class="hero-body" style="align-content: center; margin: auto;">
                <div class="container" style="text-align: center;">
                    <p class="title is-1" style="font-family: 'Brush Script MT', cursive;">Blogs</p>
                </div>
            </div>
        </section>
        <b-loading :is-full-page="false" :active="isLoading" :can-cancel="false"></b-loading>
        <b-table v-if="!isLoading && data.length"
            :data="data"
            paginated=true
            pagination-position="both"
            default-sort-direction="desc"
            per-page=10
            default-sort="Id"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <b-table-column field="id" label="ID" width="40" searchable sortable numeric v-slot="props">
                {{ props.row.Id }}
            </b-table-column>

            <b-table-column field="title" label="Title" searchable sortable v-slot="props">
                {{ props.row.Title }}
            </b-table-column>

            <b-table-column field="content" label="Preview" searchable sortable v-slot="props">
                {{ props.row.Preview }}
            </b-table-column>

            <b-table-column field="date" label="Date" sortable centered v-slot="props">
                <span class="tag is-success">
                    {{ props.row.date }}
                </span>
            </b-table-column>
        </b-table>
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import fetch from 'node-fetch'

Vue.use(Buefy)
export default {
    name: "BlogList",
    data (){
        return {
            data: null,
            isLoading: true
        }
    },
    async created(){
        const endpoint = '/data-api/rest/Blog';
        const response = await fetch(endpoint);
        const blogs = await response.json();
        this.data = blogs.value;
        this.isLoading = false;
    }
};
</script>