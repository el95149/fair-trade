<template>
  <footer class="app-footer">
    <a href="http://anagnostic.org" target="_blank">Angelos Anagnostopoulos</a>&nbsp; &copy; 2018 {{(new Date()).getFullYear() == '2018' ? '' : '- ' + (new Date()).getFullYear()}}
  </footer>
</template>
<script>
export default {
  name: 'footer'
}
</script>
