<script>
export default {
    data() {
        return {
            activeTab: 1,
            techstack: [
                {
                    id: 1,
                    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
                    name: 'HTML',
                },
                {
                    id: 2,
                    imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
                    name: 'CSS',
                },
                {
                    id: 3,
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
                    name: 'JavaScript',
                },
                {
                    id: 4,
                    imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
                    name: 'Laravel',
                },
                {
                    id: 5,
                    imageUrl: 'https://img.icons8.com/?size=512&id=rY6agKizO9eb&format=png',
                    name: 'VueJS',
                },
                {
                    id: 6,
                    imageUrl: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
                    name: 'Bootstrap',
                },
                {
                    id: 7,
                    imageUrl: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
                    name: 'Tailwind CSS',
                },
                {
                    id: 8,
                    imageUrl: 'https://cdn.worldvectorlogo.com/logos/mysql-logo.svg',
                    name: 'MySQL',
                },
                {
                    id: 9,
                    imageUrl: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
                    name: 'Python',
                },
            ]
        };
    }
}
</script>
<template>
    <main class="px-5 min-h-[65vh] md:min-h-[80vh] gap-12 w-screen bg-blacky flex flex-col items-center justify-center"
        id="home">
        <article data-page="about">
            <div
                class="flex flex-col justify-center lg:w-[1000px] lg:h-[430px] bg-[#56585d] bg-opacity-50 border rounded-3xl px-5 lg:px-10 py-8">
                <header>
                    <div class="text-left flex justify-start items-center text-white font-semibold text-2xl md:text-3xl"
                        data-aos="zoom-in-left">
                        About Me &nbsp;
                        <div class="h-[1px] w-32 bg-bluesky md:w-96 aos-init aos-animate" data-aos-duration="600"></div>
                    </div>
                </header>
                <div class="flex flex-col-reverse lg:flex-row w-full" data-aos="zoom-in-right">
                    <p class="mt-3 text-[13px] md:text-base text-justify text-white">
                        &nbsp; &nbsp; I am a 7th-semester student majoring in Mathematics
                        with a strong interest in Data Science and Front-End Development.
                        I possess skills in data analysis, such as data mining and text
                        mining, as well as proficiency in key programming languages like
                        Python. Additionally, I am capable of creating appealing website
                        interfaces using HTML, CSS, and Javascript, and I have experience
                        with the Laravel framework.
                        <br class="h-2" />
                        &nbsp; &nbsp; I am actively engaged in self-directed learning and
                        committed to continuously improving my skills in both fields. I am
                        highly enthusiastic about contributing within an innovative,
                        goal-oriented environment. With a passion for collaboration and a
                        commitment to learning from experts, I aspire to provide valuable
                        and high-quality contributions to upcoming projects.
                    </p>
                    <img src="@img/foto-hilda-3.jpeg" alt=""
                        class="mx-auto my-5 rounded-3xl lg:-mt-5 lg:ml-16 h-[320px] w-[250px]" />
                </div>
            </div>
        </article>
        <section id="skills" class="lg:w-[1000px] h-auto">
            <h1 class="text-white font-semibold text-3xl mb-6 flex text-left justify-start items-center">
                Skills &nbsp;
                <div class="h-[1px] w-32 bg-bluesky md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
                    data-aos-duration="600"></div>
            </h1>
            <div class="grid grid-cols-2 gap-4 mb-5 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
                data-aos="zoom-out">
                <div v-for="item in techstack" :key="item.id">
                    <div
                        class="item-tech flex cursor-pointer items-center gap-2 rounded border border-bluesky px-2 py-2 hover:bg-bluesky hover:bg-opacity-10 md:gap-3 lg:px-3">
                        <div class="flex items-center">
                            <img class="h-12 w-12" :src="item.imageUrl" />
                        </div>
                        <div class="flex items-center">
                            <p class="text-white">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="experience" class="lg:w-[1000px] h-auto">
            <h1 class="text-white font-semibold text-3xl mb-6 flex text-left justify-start items-center"
                data-aos="fade-left">
                Experiences &nbsp;
                <div class="my-auto h-[1px] w-32 bg-bluesky md:w-96 aos-init aos-animate"></div>
            </h1>
            <div class="item-tech bg-[#56585d] hover:bg-slate-600 mb-11 p-8 md:h-96 md:p-11 rounded-xl" data-aos="zoom-in">
                <div class="flex flex-col md:flex-row items-center w-full">
                    <img src="@img/goals_academy.png" alt="" class="h-28" />
                    <div class="flex justify-center flex-col md:ps-5 tracking-wider py-2">
                        <h1 class="font-bold text-white text-xl lg:text-2xl">
                            Front End Developer
                        </h1>
                        <h3 class="font-bold text-bluesky text-lg lg:text-xl">
                            Goals Academy - Internship
                        </h3>
                        <p class="italic text-white text-base">March - June 2023</p>
                    </div>
                </div>
                <div class="md:mt-5 px-6 w-full text-base text-white">
                    <ul class="list-outside list-decimal">
                        <li class="py-1">
                            Created and built websites using programming languages such as
                            HTML, CSS, and JavaScript.
                        </li>
                        <li class="py-1">Built and managed databases for websites.</li>
                        <li class="py-1">
                            Optimized and evaluated website performance to ensure smooth
                            operation, such as by improving page loading times and reducing
                            unnecessary resource usage.
                        </li>
                        <li class="py-1">
                            Collaborated with UI/UX designers in website development to
                            ensure attractive and user-friendly design.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="item-tech bg-[#56585d] hover:bg-slate-600 mb-11 p-8 md:h-96 md:p-11 rounded-xl">
                <div class="flex flex-col md:flex-row items-center w-full">
                    <img src="@img/logo_uin.png" alt="" class="mx-auto h-32" />
                    <div class="flex justify-center flex-col md:ps-5 tracking-wider py-2">
                        <h1 class="font-bold text-white text-xl lg:text-2xl">
                            Laboratory Assistant Computer Programming I
                        </h1>
                        <h3 class="font-bold text-bluesky text-lg lg:text-xl">
                            Mathematics Department of Malang Islamic State University - Full
                            Time
                        </h3>
                        <p class="italic text-white text-base">March - June 2023</p>
                    </div>
                </div>
                <div class="md:mt-5 w-full text-base text-white overflow-hidden">
                    <ul class="ps-4 list-outside list-decimal text-justify">
                        <li class="py-1">
                            Participated in training and got certified to teach courses in
                            the Python programming language.
                        </li>
                        <li class="py-1">
                            Taught students in practicum the Python programming language
                            using software such as Visual Studio Code and Jupyter Notebook.
                        </li>
                        <li class="py-1">
                            Provided direction in learning materials, quizzes, exams, and
                            final assignments to students.
                        </li>
                        <li class="py-1">
                            Conducted thorough corrections and evaluations of the
                            performance of each student.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>