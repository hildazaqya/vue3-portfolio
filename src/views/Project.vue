<script>
export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: 'Portfolio Website',
          imageUrl: 'project_hildawebsite',
          status: 'This website contains a brief description and my personal experiences.',
          techStack: 'VueJS 3, Tailwind CSS',
          github: 'https://github.com/hildazaqya/vue3-portfolio',
          demo: 'https://hildazaqya.vercel.app/'
        },
        {
          id: 2,
          name: 'Goals Academy',
          imageUrl: 'project_goalsacademy',
          status: 'Goals Academy is a service business that has a guidance program product for the preparation, writing and material of thesis.',
          techStack: 'Laravel, Bootstrap 5',
          github: 'null',
          demo: 'https://goalsacademy.id'
        },
        {
          id: 3,
          name: 'Helyoulips',
          imageUrl: 'project_helyoulips',
          status: 'Helyoulips is an e-commerce website that sells beauty products. This website was created for the final project of a web programming course.',
          techStack: 'HTML5, Bootstrap 5, MySQL',
          github: 'https://github.com/hildazaqya/helyoulips-website',
          demo: 'https://helyoulips.000webhostapp.com/'
        },
        {
          id: 4,
          name: 'Komparasi Algoritma SVM dan Decision Tree untuk Klasifikasi Penyakit Strok',
          imageUrl: 'project_svmdecisiontree',
          status: 'This research employs a data mining approach and is created to fulfill the final assignment of the Computer Selecta Capstone course.',
          techStack: 'Python',
          github: 'https://github.com/hildazaqya/komparasi-algoritma-svm-dan-decisiontree-untuk-klasifikasi-penyakit-strok',
          demo: 'null'
        },
        {
          id: 5,
          name: 'Klasifikasi Laporan Masyarakat Kota Malang Menggunakan Metode Naive Bayes',
          imageUrl: 'project_naivebayes',
          status: 'This research utilizes a text mining approach and is created to fulfill the final assignment of the fieldwork internship course.',
          techStack: 'Python',
          github: 'https://github.com/hildazaqya/Klasifikasi-Laporan-Masyarakat-Kota-Malang-Menggunakan-Metode-Naive-Bayes',
          demo: 'null'
        }
      ]
    };
  }
}
</script>
<template>
  <main class="min-h-[65vh] md:min-h-[80vh] w-screen bg-blacky flex justify-start flex-col items-center" id="portfolio">
    <header data-aos="fade-down" data-aos-easing="linear">
      <h1 class="text-white text-3xl font-semibold tracking-wide text-center">
        Past Project Experience
      </h1>
    </header>
    <h3 class="text-transparent bg-clip-text bg-gradient-to-r mt-3 from-slate-100 to-cyan-500" data-aos="fade-down"
      data-aos-easing="linear">
      Explore the projects I've worked on so far
    </h3>
    <ul class="hidden flex-row text-white cursor-pointer gap-4 mt-4 items-center justify-center" data-aos="fade-down"
      data-aos-easing="linear">
      <li class="md:w-20 p-3 bg-gray-500 hover:bg-gray-800 rounded-md text-center">
        All
      </li>
      <li class="md:w-28 p-3 bg-gray-500 hover:bg-gray-800 rounded-md text-center">
        Website
      </li>
      <li class="md:w-40 p-3 bg-gray-500 hover:bg-gray-800 rounded-md text-center">
        Data Science
      </li>
    </ul>
    <div class="md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid mt-8 mb-12 md:my-8 lg:px-10 gap-6 px-5" data-aos="zoom-in">
      <div v-for="item in items" :key="item.id">
      <div
        class="flex flex-col overflow-hidden hover:-translate-y-3 cursor-pointer max-w-full md:max-w-[400px] md:h-[492px] bg-gray-700 rounded-xl"
        id="portfolio-website">
        <img :src="'./src/img/' + item.imageUrl + '.png'" class="object-cover bg-cover w-full h-60" />
        <div class="w-full flex flex-col p-4 justify-start mt-1">
          <h2 class="text-xl text-white font-semibold">{{ item.name }}</h2>
          <p class="mt-2 text-base text-white">
            {{ item.status }}
          </p>
          <p class="mt-3 text-bluesky">{{ item.techStack }}</p>
          <div class="flex justify-end my-3 gap-2">
            <a v-if="item.github !== 'null'" :href="item.github">
              <font-awesome-icon icon="fa-brands fa-github" style="color: #ffffff;" />
            </a>
            <a v-if="item.demo !== 'null'" :href="item.demo">
              <font-awesome-icon icon="fa-solid fa-laptop" style="color: #ffffff;" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main></template>