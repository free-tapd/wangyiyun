<template>
    <div>
        <div>播放</div>
        <div class='song' v-for="(item, index) in songlist" :key="index" >
            <audio :src="item.url" controls autoplay></audio>
        </div>
    </div>
</template>
<script >
import {reactive,toRefs,getCurrentInstance,onMounted} from "vue"
import { useRouter,useRoute } from "vue-router";
export default {
    setup(){
    const state = reactive({
      songlist: []
    });
    const {params} = useRoute()
    console.log(params)
    const { ctx } = getCurrentInstance();
    const getSang = () => {
      ctx.$http.get("/song/url",params).then((res) => {
        state.songlist = res.data
        console.log(res)
        console.log(state.songlist)
      });
    };
     onMounted(() => {
      getSang();

    });
    return {
      ...toRefs(state),
      getSang
    };

    }
}
</script>