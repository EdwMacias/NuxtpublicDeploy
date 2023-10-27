

<template>
    <div>
        <h4 style="color: beige;">Test</h4>
        <AlertNotificaciones />
    </div>
</template>

<script>

export default {
    components: {
        Notification,
    },
    data() {
        return {
            notifications: [],
        };
    },
    methods: {
        createNotification(type) {
        let message = "";
        let icon = "";
        switch (type) {
            case "info":
                message = "This is an info message";
                icon = "mdi:information";
            break;
            case "success":
                message = "This is a success message";
                icon = "mdi:check-circle";
            break;
            case "error":
                message = "This is an error message";
                icon = "mdi:alert-circle";
            break;
            case "warning":
                message = "This is a warning message";
                icon = "mdi:alert";
            break;
        }
        this.notifications.push({ message, type, icon });
        },
        removeNotification(index) {
            this.notifications.splice(index, 1);
        },
    },
};
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }
    
    .notifications {
        position: fixed;
        top: 1rem;
        right: 1rem;
    }
</style>