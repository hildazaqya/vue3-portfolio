<script>
export default {
    data() {
        return {
            activeTab: 1,
            Education: [
                {
                    id: 1,
                    imageUrl: "",
                },
                {
                    id: 2,
                    imageUrl: "",
                },
                {
                    id: 3,
                    imageUrl: "",
                },
            ],
        };
    },
};
</script>

<template>
    <main class="min-h-[65vh] md:min-h-[80vh] w-screen bg-blacky flex justify-start flex-col items-center" id="home">
        <section id="education" class="lg:w-[1000px] lg:h-[480px] px-7 md:px-5">
            <div data-aos="zoom-in-right" data-aos-duration="600"
                class="text-3xl font-bold text-white mb-5 title-section flex items-center">
                <div class="h-[1px] w-16 md:w-32 bg-bluesky aos-init aos-animate"></div>
                &nbsp; Education
            </div>

            <div class="flex flex-col md:flex-row justify-start items-center gap-6 lg:gap-2 overflow-hidden"
                data-aos="zoom-in-right" data-aos-duration="600">
                <div
                    class="md:w-[350px] md:h-[350px] shadow-md bg-[#6e7075] overflow-hidden hover:bg-slate-800 me-3 rounded-2xl">
                    <div class="md:w-[350px] md:h-[180px] flex justify-center items-center">
                        <img src="@img/saintek.jpg" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-full p-5">
                        <div class="text-title text-xl font-bold text-white">
                            UIN Maulana Malik Ibrahim Malang
                        </div>
                        <div class="text-base text-bluesky pt-1">Sep 2020 - Present</div>
                        <div class="text-base text-white italic pt-1">
                            Bachelor's Degree in Mathematics - S.Mat.
                        </div>
                    </div>
                </div>
                <div
                    class="md:w-[350px] md:h-[350px] shadow-md bg-[#6e7075] hover:bg-slate-800 me-3 overflow-hidden rounded-2xl">
                    <div class="md:w-[350px] md:h-[180px] flex justify-center items-center">
                        <img src="@img/pondok.jpg" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-full p-5">
                        <div class="text-title font-bold text-xl text-white">
                            Madrasah Aliyah Swasta Al-Hamid 
                        </div>
                        <div class="text-base text-bluesky pt-1">Jul 2017 - Jul 2020</div>
                        <div class="text-base text-white italic pt-1">
                            Mathematics and Natural Science
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="certifications" class="mt-5 lg:w-[1000px] lg:h-[480px] px-7 md:px-5">
            >
            <h1 class="text-white font-semibold text-3xl mb-6 flex text-left justify-start items-center">
                Certifications &nbsp;
                <div class="h-[1px] bg-bluesky w-20 md:w-32 aos-init aos-animate"></div>
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-[3px] lg:p-0 lg:gap-6">
                <div class="cursor-pointer">
                    <img src="@img/sertif_skilvul_html.jpg" alt=""
                        class="rounded-md shadow-md hover:bg-black hover:opacity-80" />
                </div>
                <div class="cursor-pointer">
                    <img src="@img/sertif_skilvul_css.jpg" alt=""
                        class="rounded-md shadow-md hover:bg-black hover:opacity-80" />
                </div>
                <div class="cursor-pointer">
                    <img src="@img/sertif_skilvul_js.jpg" alt=""
                        class="rounded-md shadow-md hover:bg-black hover:opacity-80" />
                </div>
                <div class="cursor-pointer">
                    <img src="@img/sertif_bigdata.jpg" alt=""
                        class="rounded-md shadow-md hover:bg-black hover:opacity-80" />
                </div>
                <div class="cursor-pointer">
                    <img src="@img/sertif_python.jpg" alt=""
                        class="rounded-md shadow-md hover:bg-black hover:opacity-80" />
                </div>
            </div>
        </section>
    </main>
</template>
