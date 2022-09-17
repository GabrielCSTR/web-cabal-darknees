<template>

    <!--- Start News Section -->
    <section class="page-section" id="stats">
        <div class="row count-wrapper" data-aos="zoom-in">
            <!-- Counter Item -->
            <div class="col-xs-6 col-sm-3">
                <div class="count-number">
                    100
                </div>
                <div class="count-descr font-alt">
                    <fa class="fa" icon="globe" />
                    <span class="count-title animated bounce ">Online Players</span>
                </div>
            </div>

            <!-- End Counter Item -->
            <!-- Counter Item -->
            <div class="col-xs-6 col-sm-3">
                <div class="count-number">
                    300
                </div>
                <div class="count-descr font-alt">
                    <fa class="fa" icon="user" />
                    <span class="count-title">Total de contas</span>
                </div>
            </div>
            <!-- End Counter Item -->

            <!-- Counter Item -->
            <div class="col-xs-6 col-sm-3">
                <div class="count-number">
                    1005
                </div>
                <div class="count-descr font-alt">
                    <fa class="fa" icon="users"></fa>
                    <span class="count-title">Total de chars</span>
                </div>
            </div>
            <!-- End Counter Item -->

            <!-- Counter Item -->
            <div class="col-xs-6 col-sm-3">
                <div class="count-number">
                    10
                </div>
                <div class="count-descr font-alt">
                    <fa class="fa" icon="ban"></fa>
                    <span class="count-title">Contas banidas</span>
                </div>
            </div>
            <!-- End Counter Item -->
        </div>
    </section>
    <!--- End News Section -->


</template>

<script>

export default {
    name: 'SectionWeb02',

}
</script>
    
<style>
/* ==============================
   Counters
   ============================== */
.font-alt {
    font-family: Dosis, arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

.count-wrapper {
    padding: 40px 20px;
    border: 1px solid rgba(0, 0, 0, .09);
}

.count-number {
    font-size: 48px;
    font-weight: 300;
    line-height: 1.3;
    text-align: center;
}

.count-descr {
    color: #999;
    font-size: 11px;
    text-align: center;
}

.count-descr .fa {
    font-size: 14px;
    margin-right: 10px;
}

.count-title {
    margin-top: -1px;
    font-size: 13px;
}

.count-separator {
    height: 30px;
    clear: both;
    float: none;
    overflow: hidden;
}
</style>