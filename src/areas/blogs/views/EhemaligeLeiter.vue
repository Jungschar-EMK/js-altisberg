<template>
    <wrapper tags="Ehemalige-Leiter">
        <leiter-list>
            <template v-slot:default="value">
                <leiter :value="value.value" />
            </template>
        </leiter-list>
    </wrapper>
</template>

<script lang='ts'>
import Vue from "vue";
import Leiter from "../components/Leiter.vue";
import LeiterList from "../components/LeiterList.vue";
import Wrapper from "../components/Wrapper.vue";

export default Vue.extend({
    components: {
        Leiter,
        LeiterList,
        Wrapper
    }
});
</script>
