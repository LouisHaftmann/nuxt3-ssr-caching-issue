<script lang="ts" setup>
const ssrDate = useState<Date>('ssr-date')
if(process.server)
  ssrDate.value = new Date()

</script>

<template>
  <h1>This time should only change every 10 seconds: {{ ssrDate.toLocaleTimeString('en-EN') }}</h1>

  <p>Try changing to a different route rule in <code>nuxt.config.ts</code></p>
</template>