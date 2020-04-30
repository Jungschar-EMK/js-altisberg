<template>
    <wrapper :tags="tags">
        <blog-list>
            <template v-slot:default="value">
                <blog :value="value.value" />
            </template>
        </blog-list>
    </wrapper>
</template>

<script lang='ts'>
import Vue from "vue";
import Blog from "../components/Blog.vue";
import BlogList from "../components/BlogList.vue";
import Wrapper from "../components/Wrapper.vue";

export default Vue.extend({
    components: {
        Blog,
        BlogList,
        Wrapper
    },
    computed: {
        tags() {
            return this.$route.params.tags;
        }
    }
});
</script>
