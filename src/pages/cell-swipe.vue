<template>
  <div class="page-cell">
    <div class="page-title">Cell Swipe</div>
    <mt-cell-swipe
      v-for="n in 10"
      :right="rightButtons"
      title="swipe me">
    </mt-cell-swipe>
  </div>
</template>

<script>
  export default {
    created() {
      this.rightButtons = [
        {
          content: 'Mark as Unread',
          style: { background: 'lightgray', color: 'red',height:'100px' }
        },
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ];
    },

    methods: {
      leftButtonHandler(evt) {
        console.log(123);
      }
    }
  };
</script>
