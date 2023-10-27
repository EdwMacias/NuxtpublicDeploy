<template>
    <div class="notificaciones position-fixed bottom-0 end-0 ">

        <el-alert 
        v-if="showSuccessMessage" :title="successMessage" type="success" show-icon class="alert" 
        style="color: #418141; background: #caf5ca;" />

        <el-alert v-if="showErrorMessage" :title="errorMessage" type="error" show-icon class="alert"/>

        <el-alert v-if="showInfoMessage" :title="infoMessage" type="info" show-icon class="alert"/>

        <el-alert v-if="showWarningMessage" :title="warningMessage" type="warning" show-icon class="alert"/>

    </div>  
</template>

<script> 

export default { 
    props: { 
        successMessage: String, 
        errorMessage: String, 
        infoMessage: String, 
        warningMessage: String 
    }, 
    data() {
        return {
        showSuccessMessage: false, 
        showErrorMessage: false,
        showInfoMessage: false,
        showWarningMessage: false
        };
    },
    watch: {
        successMessage(newValue) {
        // Cuando successMessage cambia, mostramos el mensaje y programamos su cierre
            if (newValue) {
                this.showSuccessMessage = true;
                setTimeout(() => {
                    this.showSuccessMessage = false; // Cerramos el mensaje después de 5 segundos
                    }, 5000);
            }
        },
        errorMessage(newValue) {
            if(newValue) {
                this.showErrorMessage = true;
                setTimeout(() => {
                    this.showErrorMessage = false;
                }, 5000);
            }
        },
        infoMessage(newValue) {
            if(newValue) {
                this.showInfoMessage = true;
                setTimeout(() => {
                    this.showInfoMessage = false;
                }, 5000);
            }
        },
        warningMessage(newValue) {
            if(newValue) {
                this.showWarningMessage = true;
                setTimeout(() => {
                    this.showWarningMessage = false;
                }, 5000);
            }
        },
    },
}   
</script>

<style scoped>
    .el-alert {
        margin: 20px 0;
    }
    .el-alert:first-child {
        margin: 20px 0;
    }
    .notificaciones {
        z-index: 1000;
        padding-right: 1.5%;
        min-width: 40%;
    }
    .alert {
        padding-right: 8%;
    }
</style>
