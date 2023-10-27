<template>
    <div class="waves">
        <section class="wave" id="wave1"></section>
        <section class="wave" id="wave2"></section>
        <section class="wave" id="wave3"></section>
        <section class="wave" id="wave4"></section>
    </div>
</template>

<style>
.wave {
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(/disenoFooter/wave_negro.png);
    background-size: 1000px 100px;
}
.wave#wave1 {
    z-index: 1000;
    opacity: 1;
    bottom: 0;
    animation: animateWave 4s linear infinite; 
}
.wave#wave2 {
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: animateWave_02 9s linear infinite; 
}
.wave#wave3 {
    z-index: 1000;
    opacity: 0.2;
    bottom: 15px;
    animation: animateWave_03 7s linear infinite; 
}
.wave#wave4 {
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
    animation: animateWave_04 5s linear infinite; 
}
@keyframes animateWave {
    0% {
        background-position-x: 1000px;
    }
    100% {
        background-position-x: 0px;
    }
}
@keyframes animateWave_02 {
    0% {
        background-position-x: 0;
    }
    100% {
        background-position-x: 1000px;
    }
}
@keyframes animateWave_03 {
    0% {
        background-position-x: 1000px;
    }
    100% {
        background-position-x: 0px;
    }
}
@keyframes animateWave_04 {
    0% {
        background-position-x: 0;
    }
    100% {
        background-position-x: 1000px;
    }
}
</style>
