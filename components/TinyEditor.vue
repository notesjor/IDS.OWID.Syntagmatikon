<template>
  <div>
    <Editor v-model="content" :init="editorInit"></Editor>
  </div>
</template>
  
<script>
import Editor from '@tinymce/tinymce-vue';

export default {
  components: {
    Editor
  },
  data() {
    return {
      content: 'Test'
    }
  },
  methods: {
    editorInit: function () {
      return {
        plugins: 'advlist autolink lists link image charmap print preview anchor',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
        height: 500,
        branding: false
      }
    }
  }
}
</script>

<style>
.tox-notification--warning{
  display: none!important;
}
</style>