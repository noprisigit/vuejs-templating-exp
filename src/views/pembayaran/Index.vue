<template>
  <div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
      <Sidebar />

      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

        <Header title="Pembayaran" />

        <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
          <div class="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" class="container-xxl">
              Halaman Pembayaran Index
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/partials/Sidebar.vue';
import Header from '@/components/partials/Header.vue';
import Footer from '@/components/partials/Footer.vue';

export default {
  components: {
    Sidebar,
    Header,
    Footer
  }
}
</script>