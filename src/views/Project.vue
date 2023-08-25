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
    <div class="md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid mt-8 mb-12 md:my-8 lg:px-10 gap-6 px-5"
      data-aos="zoom-in">
      <div
        class="flex flex-col overflow-hidden hover:-translate-y-3 cursor-pointer max-w-full md:max-w-[400px] bg-gray-700 rounded-xl"
        id="portfolio-website">
      <img src="@img/project_hildawebsite.png" class="object-cover bg-cover w-full h-60"  />
        <div class="w-full flex flex-col p-4 justify-start mt-1">
          <h2 class="text-xl text-white font-semibold">Portfolio Website</h2>
          <p class="mt-2 text-base text-white">
            This website contains a brief description and my personal
            experiences.
          </p>
          <p class="mt-3 text-bluesky">VueJS, Tailwind CSS</p>
          <div class="flex justify-end my-3 gap-2">
            <a href="https://github.com/hildazaqya/portfolio-vercel-v2">
              <font-awesome-icon icon="fa-brands fa-github" style="color: #ffffff;" />
            </a>
            <a href="https://hildazaqya.vercel.app/">
              <font-awesome-icon icon="fa-solid fa-laptop" style="color: #ffffff;" />
            </a>
          </div>
        </div>
      </div>

      <!-- Portfolio Goals Academy -->
      <div
        class="flex flex-col overflow-hidden hover:-translate-y-3 cursor-pointer max-w-full md:max-w-[400px] bg-gray-700 rounded-xl"
        id="portfolio-website">
      <img src="@img/project_goalsacademy.png" class="object-cover w-full h-60"  />
        <div class="w-full flex flex-col p-4 justify-start mt-1">
          <h2 class="text-xl text-white font-semibold">Goals Academy</h2>
          <p class="mt-2 text-base text-white">
            Goals Academy is a service business that has a guidance program
            product for the preparation, writing and material of thesis.
          </p>
          <p class="mt-3 text-bluesky">Laravel, Bootstrap 5</p>
          <div class="flex justify-end my-3 gap-2">
            <!-- <i class="fa-brands fa-github fa-lg" style="color: #fff"></i> -->
            <a href="https://goalsacademy.id/">
              <i class="fa-solid fa-laptop fa-lg" style="color: #ffff"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Portfolio Helyoulips -->
      <div
        class="flex flex-col overflow-hidden hover:-translate-y-3 cursor-pointer max-w-full md:max-w-[400px] bg-gray-700 rounded-xl"
        id="portfolio-website">
      <img src="@img/project_helyoulips.png" class="object-cover w-full h-60"  />
        <div class="w-full flex flex-col p-4 justify-start mt-1">
          <h2 class="text-xl text-white font-semibold">Helyoulips</h2>
          <p class="mt-2 text-base text-white">
            Helyoulips is an e-commerce website that sells beauty products.
            This website was created for the final project of a web
            programming course.
          </p>
          <p class="mt-3 text-bluesky">HTML5, Bootstrap 5, MySQL</p>
          <div class="flex justify-end my-3 gap-2">
            <a href="https://github.com/hildazaqya/helyoulips-website"><i class="fa-brands fa-github fa-lg" style="color: #fff"></i></a>
            <a href="https://helyoulips.000webhostapp.com/"><i class="fa-solid fa-laptop fa-lg" style="color: #ffff"></i></a>          
          </div>
        </div>
      </div>

      <!-- Portfolio Data Science -->
      <div
        class="flex flex-col overflow-hidden hover:-translate-y-3 cursor-pointer max-w-full md:max-w-[400px] bg-gray-700 rounded-xl"
        id="portfolio-ds">
        <div class="w-full h-60 bg-cover" style="
              background-image: url(https://i.pinimg.com/564x/b3/c3/99/b3c399c4144c1654aa78026ae7feaec9.jpg);
            "></div>
        <div class="w-full flex flex-col p-4 justify-start mt-1">
          <h2 class="text-xl text-white font-semibold">
            Komparasi Algoritma SVM dan Decision Tree untuk Klasifikasi
            Penyakit Strok
          </h2>
          <p class="mt-2 text-base text-white">
            This research employs a data mining approach and is created to
            fulfill the final assignment of the Computer Selecta Capstone
            course.
          </p>
          <p class="mt-3 text-bluesky">Python</p>
          <div class="flex justify-end my-1 gap-2">
            <a
              href="https://github.com/hildazaqya/komparasi-algoritma-svm-dan-decisiontree-untuk-klasifikasi-penyakit-strok/tree/main">
              <i class="fa-brands fa-github fa-lg" style="color: #fff"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Portfolio Data Science -->
      <div
        class="flex flex-col overflow-hidden hover:-translate-y-3 cursor-pointer max-w-full md:max-w-[400px] bg-gray-700 rounded-xl"
        id="portfolio-ds">
        <div class="w-full h-60 bg-cover" style="
              background-image: url(https://i.pinimg.com/564x/3a/e1/0c/3ae10c2e92d7eba0a4dca12aba23beda.jpg);
            "></div>
        <div class="w-full flex flex-col p-4 justify-start mt-1">
          <h2 class="text-xl text-white font-semibold">
            Klasifikasi Laporan Masyarakat Kota Malang Menggunakan Metode
            Naive Bayes
          </h2>
          <p class="mt-2 text-base text-white">
            This research utilizes a text mining approach and is created to
            fulfill the final assignment of the fieldwork internship course.
          </p>
          <p class="mt-3 text-bluesky">Python</p>
          <div class="flex justify-end my-1 gap-2">
            <a href="https://github.com/hildazaqya/Klasifikasi-Laporan-Masyarakat-Kota-Malang-Menggunakan-Metode-Naive-Bayes"><i class="fa-brands fa-github fa-lg" style="color: #fff"></i></a>  
          </div>
        </div>
      </div>
    </div>
  </main>
</template>