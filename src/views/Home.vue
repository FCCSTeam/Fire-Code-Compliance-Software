<template>
  <div class="home">
    <GoogleDrive />
  </div>
</template>

<script>
import GoogleDrive from '@/components/filepicker/GoogleDrive'
export default {
  name: 'Home',
  components: {
    GoogleDrive
  }
}
</script>