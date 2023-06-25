      document.addEventListener('alpine:init', function () {
    Alpine.data('counter', function () {
        return {
          count: 0,
          increment() {
            this.count++;
          },
          decrement() {
            this.count--;
            
          },
          reset() {
            this.count0;
          },
        }
    })
})
    