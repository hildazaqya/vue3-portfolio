<template>
  <main
    class="min-h-[65vh] flex-col-reverse md:min-h-[80vh] gap-8 md:gap-36 w-screen bg-blacky flex md:flex-row items-center justify-center"
    id="home">
    <div class="text-center justify-start flex flex-col md:text-left" data-aos="fade-down">
      <h2 class="text-bluesky text-lg px py-1">Hi Folks! I'm</h2>
      <h1 class="font-bold text-4xl text-white py-1">Hilda Zaqya</h1>
      <h2
        class="typewrite text-bluesky text-bold text-lg py-1 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-500"
        ref="typewriter">
        <span class="wrap">{{ txt }}</span>
      </h2>
      <p class="text-white text-base py-1">
        Welcome to my portfolio Website!
        <span class="wave">🤞🏻</span>
      </p>
      <div
        class="md:hidden mb-14 mt-3 mx-auto bg-bluesky flex items-center justify-center flex-row px-7 py-2 space-x-3 rounded-lg w-2/3">
        <!-- Instagram -->
        <a class="text-black hover:text-white" aria-label="https://www.instagram.com/hildazaqya/"
          href="https://www.instagram.com/hildazaqya/">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z">
            </path>
          </svg>
        </a>
        <!-- Github -->
        <a class="text-black hover:text-white" href="https://github.com/hildazaqya"
          aria-label="https://github.com/hildazaqya">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
            <path
              d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
            </path>
          </svg>
        </a>
        <!-- Linkedln -->
        <a class="text-black hover:text-white" href="https://www.linkedin.com/in/hildazaqya/"
          aria-label="https://www.linkedin.com/in/hildazaqya/">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 30 30">
            <path
              d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z">
            </path>
          </svg>
        </a>
        <!-- Gmail -->
        <a class="text-black hover:text-white" href="mailto:hildazaqyaelnaz@gmail.com"
          aria-label="mailto:hildazaqyaelnaz@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M 4.5 3 C 2.5788117 3 1 4.5788117 1 6.5 L 1 18 C 1 19.64497 2.3550302 21 4 21 L 8 21 L 8 13.673828 L 12 16.798828 L 16 13.673828 L 16 21 L 20 21 C 21.64497 21 23 19.64497 23 18 L 23 6.5 C 23 4.5788117 21.421188 3 19.5 3 C 18.750123 3 17.982547 3.2422598 17.34375 3.7421875 L 12 7.9121094 L 6.65625 3.7421875 L 6.6542969 3.7421875 C 6.0158061 3.2430811 5.2492693 3 4.5 3 z M 4.5 5 C 4.8301235 5 5.1426247 5.098287 5.4238281 5.3183594 L 6 5.7675781 L 6 9.5742188 L 3 7.2324219 L 3 6.5 C 3 5.6591883 3.6591883 5 4.5 5 z M 19.5 5 C 20.340812 5 21 5.6591883 21 6.5 L 21 7.2324219 L 18 9.5742188 L 18 5.7675781 L 18.576172 5.3183594 C 18.857375 5.0982871 19.169877 5 19.5 5 z M 8 7.328125 L 12 10.449219 L 16 7.328125 L 16 11.136719 L 12 14.261719 L 8 11.136719 L 8 7.328125 z M 3 9.7695312 L 6 12.111328 L 6 19 L 4 19 C 3.4349698 19 3 18.56503 3 18 L 3 9.7695312 z M 21 9.7695312 L 21 18 C 21 18.56503 20.56503 19 20 19 L 18 19 L 18 12.111328 L 21 9.7695312 z">
            </path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex justify-center">
      <img src="@img/pict-hilda.jpg" alt="pictureHome" class="rounded-full bg-cover border-4 pict border-bluesky" width="350" height="350"
        style="
            box-shadow: rgba(79, 192, 208, 0.44) 0px 0px 73px -9px;" data-aos="flip-left" data-aos-duration="1500" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      toRotate: ["Front End Developer", "Mathematics Student", "Data Analysis Enthusiast", "Web Development Enthusiast"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
  }
}
</script>
<style>

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
}

</style>
