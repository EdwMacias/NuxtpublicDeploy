    
<template>
    <footer>
    <el-divider><IconsMail/><el-divider direction="vertical" /><IconsNuxt/><el-divider direction="vertical" /><IconsFacebook/></el-divider>
                <el-row>
                    <el-col :span="4"><div class="grid-content" />Datos de la empresa</el-col>
                    <el-col :span="16"></el-col>
                    <!-- <el-col :span="4"><div class="grid-content" /><Logo /><LogoTitulo /></el-col> -->
                </el-row>
            </footer>
</template>

<style>
footer {
    position: relative;
    bottom: 0;
    background-color: var(--color-secondary);
    color: #080808;
    min-height: 70px;
}

/* .logo-footer {
    text-align: right;
}

.nombre-footer {
    text-align: right;
} */
/* ---------- Diseño responsive -------------- */
/* @media (max-width: 768px) {
    .contacto_footer {
        margin-left: 2%;
        width: 120%;
    }   
    .logo-footer {
        text-align: right;
        margin-top: 10%;
        margin-right: 2%;
    }
    .nombre-footer {
        display: none;
    }
} */
</style>
