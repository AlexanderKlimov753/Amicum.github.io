new Vue({
    el: ".progressBar",
    el2: ".circle-in",
    data: {
      progress: 0,
      turn: 1,
    },
    methods: {
      makeProgress() {
        if(this.progress < 110) {
          this.progress += 5;
          this.turn += 0.025;
        }
    }
    }
});

new Vue({
    el: ".progressBar2",
    el2: ".circle-in2",
    data: {
      progress: 0,
      turn: 1,
    },
    methods: {
      makeProgress() {
        if(this.progress < 110) {
          this.progress += 5;
          this.turn += 0.025;
        }
      }
    }
  }); 

  new Vue({
    el: ".progressBar3",
    el2: ".circle-in3",
    data: {
      progress: 0,
      turn: 1,
    },
    methods: {
      makeProgress() {
        if(this.progress < 110) {
          this.progress += 5;
          this.turn += 0.025;
        }
      }
    }
  });

  new Vue({
    el: ".progressBar4",
    el2: ".circle-in4",
    data: {
      progress: 0,
      turn: 1,
    },
    methods: {
      makeProgress() {
        if(this.progress < 110) {
          this.progress += 5;
          this.turn += 0.025;
        }
      }
    }
  });