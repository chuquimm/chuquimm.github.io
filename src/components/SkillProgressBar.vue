<template>
  <div class="skill">
    <h3>{{ label }}</h3>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="`width: ${progress}%`"
        :aria-valuenow="progress"
        :aria-valuemin="min"
        :aria-valuemax="max"
      >
        <span>{{ progress }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 100,
    };
  },
  props: {
    label: String,
    progress: Number,
  },
};
</script>

<style>
</style>