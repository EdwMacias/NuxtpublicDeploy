<template>
    <div class="notification" :class="type">
        <div class="icon">
            <iconify-icon :icon="icon" />
        </div>
        <div class="message">
            {{ message }}
        </div>
        <div class="close" @click="$emit('close')">
            <iconify-icon icon="mdi:close" />
        </div>
    </div>
</template>

<script>
import { IconifyIcon } from "@iconify/vue";

export default {
    components: {
        IconifyIcon,
    },
    props: {
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: "info",
        },
        icon: {
            type: String,
            default: "mdi:information",
        },
    },
};
</script>

<style scoped>
.notification {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
}

.notification.info {
    background-color: #eef2ff;
    color: #1d4ed8;
}

.notification.success {
    background-color: #ecfdf5;
    color: #10b981;
}

.notification.error {
    background-color: #fef2f2;
    color: #ef4444;
}

.notification.warning {
    background-color: #fffbeb;
    color: #f59e0b;
}

.icon {
    margin-right: 0.5rem;
}

.close {
    margin-left: auto;
    cursor: pointer;
}
</style>  