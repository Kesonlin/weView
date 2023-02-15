<template>
  <!-- <Transition name="Notification">--> 
        <div id="NotificationPage" :style=PositionStyle v-show="IsVisible">
            <template v-if="Icon=='none'">
                <img class="NotificationType" v-if="Type=='scuess'" src="./src/scuess.png" alt="" />
                <img class="NotificationType" v-if="Type=='error'" src="./src/error.png" alt="" />
                <img class="NotificationType" v-if="Type=='warning'" src="./src/warning.png" alt="" />
                <img class="NotificationType" v-if="Type=='info'" src="./src/info.png" alt="" />
            </template>
            <template v-else>
                <img class="NotificationType" :src= Icon alt="" />
            </template>
            <div class="NotificationInfo">

                <h2 class="NotificationTitle">{{Title}}</h2>

                <div class="NotificationContent">
                    <p>{{ Content }}</p>
                </div>
            </div>
            <img @click="CloseNotification" v-show="ShowClose" class="NotificationClose" src="./src/close.png" alt="" />
        </div>
 <!--  </Transition>--> 
</template>
<style>
    @import url(./notification.css);
</style>
<script setup lang="ts">
    import {
        ref,
        //reactive,
        onUpdated,
        onMounted,
        computed,
    } from 'vue'
    interface Props {
        Title: string,
            Content: string,
            Type: string,
            Position: string,
            Duration: number,
            OffsetY: number,
            OffsetX: number,
            ShowClose: boolean,
            ZIndex: number,
            Icon: string

    }
    const props = withDefaults(defineProps < Props > (), {

        Type: "none",
        Position: "top-right",
        Duration: 4000,
        OffsetY: 0,
        OffsetX: 20,
        ShowClose: true,
        ZIndex: 0,
        Icon: 'none'
    })
    const IsVisible = ref(true)
    const Timer = ref(0)
    const PositionStyle = computed(() => {
        return `${props.Position.startsWith('top')?'top':'bottom'}:${props.OffsetY}px;${props.Position.endsWith('right')?'right':'left'}:${props.OffsetX}px;'z-index':${props.ZIndex}`
    })

    function CloseNotification() {
        clearInterval(Timer.value)
        IsVisible.value = false

    }
    onUpdated(() => {

    })
    onMounted(() => {
        if (props.Duration != 0) {
            Timer.value = window.setInterval(() => {
                if (IsVisible.value) {
                    CloseNotification()
                }
            }, props.Duration)
        }
        IsVisible.value = true
    })
    defineExpose({
        IsVisible,
        CloseNotification
    })
</script>