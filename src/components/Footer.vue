<template>
    <!-- Foter -->
    <footer class="page-section bg-gray-lighter footer pb-60">
        <div class="row justify-content-center">

            <!-- Footer Logo -->
            <div class="local-scroll mb-30 mb-5">
                <a href="#top"><img src="@/assets/images/logo-footer.png" width="150" height="40" alt="" /></a>
            </div>
            <!-- End Footer Logo -->

            <!-- Social Links -->
            <div class="footer-social-links mb-110 mb-xs-60 mb-5">
                <a href="#" title="Facebook" target="_blank"><fa :icon="['fab', 'facebook']" /></a>
                <a href="#" title="Youtube" target="_blank"><fa :icon="['fab', 'youtube']" /></a>
                <a href="#" title="Discord" target="_blank"><fa :icon="['fab', 'discord']" /></a>
            </div>
            <!-- End Social Links -->

            <!-- Footer Text -->
            <div class="footer-text">

                <!-- Copyright -->
                <div class="footer-copy font-alt">
                    <a href="#" target="_blank">Copyright &copy; Cabal WEB 2022</a>.
                </div>
                <!-- End Copyright -->
                <div class="footer-made">
                    Todos os direitos reservados. Proibido a copia parcial ou total dos arquivo.
                </div>
                <div class="footer-made">
                    Desenvolvido por <a href="https://strdeveloped.com.br/" target="_blank">&copy; <span class="uppercase">STRDeveloped</span> </a>.
                </div>

            </div>
            <!-- End Footer Text -->

        </div>


        <!-- Top Link -->
        <div class="local-scroll">
            <a href="#top" class="link-to-top"><fa :icon="['fa', 'caret-up']" /></a>
        </div>
        <!-- End Top Link -->

    </footer>
    <!-- End Foter -->
</template>

<script>

export default {
    name: 'FooterWeb',
}
</script>
        
<style>

</style>