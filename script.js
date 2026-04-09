const loginSection = document.getElementById('login-Section'); // Login Section
const pass = document.getElementById('pass'); // Password 
const learningSection = document.getElementById('learning');
const qnSection = document.getElementById('qn');
const footer = document.getElementById('ftr');// footer section
const inputPass = pass.value;
const userName = document.getElementById('userName') // Username input

// Dynamicaly loading Qn section
function loadingQn() {
    qnSection.innerHTML = `
                    <div class="w-11/12 flex flex-col items-center mx-auto py-10  ">
            <h1 class="font-bold text-2xl mb-16"> <span class="text-cyan-500">Frequently</span> Asked Questions</h1>
            <div id="collapseContainer" class="w-full flex flex-col gap-y-6">
                <div class="collapse bg-base-100 collapse-arrow bg-gray-100 rounded-sm border border-base-300">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-semibold">1. How can I start learning English on this
                        website?</div>
                    <div class="collapse-content text-gray-500 text-sm">
                        You can start by exploring our beginner lessons, interactive exercises, and quizzes. We also
                        offer structured courses to guide you step by step.
                    </div>
                </div>
                <div class="collapse bg-base-100 collapse-arrow bg-gray-100 rounded-sm border border-base-300">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-semibold">2. Is this website free to use?</div>
                    <div class="collapse-content text-gray-500 text-sm">
                        You can start by exploring our beginner lessons, interactive exercises, and quizzes. We also
                        offer structured courses to guide you step by step.
                    </div>
                </div>
                <div class="collapse bg-base-100 collapse-arrow bg-gray-100 rounded-sm border border-base-300">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-semibold">3. Do I need to create an account?</div>
                    <div class="collapse-content text-gray-500 text-sm">
                        You can start by exploring our beginner lessons, interactive exercises, and quizzes. We also
                        offer structured courses to guide you step by step.
                    </div>
                </div>
                <div class="collapse bg-base-100 collapse-arrow bg-gray-100 rounded-sm border border-base-300">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-semibold">4. How can I build my English vocabulary?</div>
                    <div class="collapse-content text-gray-500 text-sm">
                        You can start by exploring our beginner lessons, interactive exercises, and quizzes. We also
                        offer structured courses to guide you step by step.
                    </div>
                </div>
                <div class="collapse bg-base-100 collapse-arrow bg-gray-100 rounded-sm border border-base-300">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-semibold">5. Do you offer certificates for completed
                        courses?</div>
                    <div class="collapse-content text-gray-500 text-sm">
                        You can start by exploring our beginner lessons, interactive exercises, and quizzes. We also
                        offer structured courses to guide you step by step.
                    </div>
                </div>
            </div>
        </div>
            `;
}

// Dynamicaly loading footer section 
function loadingFooter() {
    footer.innerHTML = `
            <div class="w-11/12 flex flex-col mx-auto md:gap-y-4 gap-y-2 ">
            <div class="flex items-center">
                <p class="font-bold">English</p>
                <a href="index.html">
                    <img src="assets/logo.png" alt="Windows Logo">
                </a>
                <p class="font-bold">Janala</p>
            </div>
            <div>
                <p class="font-bold md:text-xl text-xs text-gray-500">ইংরেজি শিখুন সহজে</p>
                <p class="text-gray-500">Providing ED-Tech Applications since 2025</p>
            </div>
        </div>
            `
}

// when user is loggedin  after refresh page user stay  
document.addEventListener("DOMContentLoaded", () => {
    // if localStorage get "isLoggedin" is ture ,then login section is don't show 
    if (localStorage.getItem("isLoggedIn") === "true") {
        const header = document.getElementById('header');
        const learningSection = document.getElementById('learning');
        const cardCon = document.getElementById('cardCon');
        const qnSection = document.getElementById('qn');


        // login section remove
        loginSection.classList.add('hidden');

        // show other sections
        learningSection.classList.remove('hidden');
        cardCon.classList.remove('hidden');
        footer.classList.remove('hidden');
        qnSection.classList.remove('hidden');
        loadingQn()
        loadingFooter()

    } else { // if result is false show login section
        loginSection.classList.remove('hidden');
    }

});
/**************** Get Password ***************/
pass.addEventListener('input', (e) => {
    e.preventDefault();
    // filtering password only number is taken 
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
})

/************ Get Username **********/
userName.addEventListener('input', (e) => {
    e.preventDefault();
    // filtering username number and speach in not taken
    e.target.value = e.target.value.replace(/[^a-zA-Z*&_@#-*]/g, '')
});

/***************  Loging Button ********/
const logingBtn = document.getElementById('loginBtn').addEventListener('click', (element) => {
    element.preventDefault()
    const header = document.getElementById('header'); // Header section 
    header.classList.remove('md:backdrop-blur-none', 'md:static'); // remove some class in header section
    const learningSection = document.getElementById('learning'); // Learing section
    const cardCon = document.getElementById('cardCon'); // cardcontainer section 
    const qnSection = document.getElementById('qn'); // Qn Section
    const footer = document.getElementById('ftr');// footer section
    footer.classList.add('md:py-20', 'py-10');
    const convertedPass = parseInt(pass.value); // Password Coverted to number 

    /** Username and password check*/
    if (!userName.value == "") { // if username empty alert Empty username 
        if (convertedPass === 1234) { // Password check 
            localStorage.setItem("isLoggedIn", "true");
            loginSection.classList.add('hidden'); // Remove Login Section

            // Remove hidden class 
            learningSection.classList.remove('hidden')
            cardCon.classList.remove('hidden');
            footer.classList.remove('hidden');
            qnSection.classList.remove('hidden')

            // When Login button fire auto fill Qn Section
            loadingQn()
            // When Login button fire auto fill footer Section
            loadingFooter()
        } else {

            alert('Wrong Password')
        }
    }
    else {
        alert('Empty User Name')
    }
})

/************* Logout Section *************/
const logoutBtn = document.getElementById('logoutBtn').addEventListener('click', (element) => {
    element.preventDefault()
    localStorage.removeItem("isLoggedIn");
    pass.value = ''; // Defult password value empty
    userName.value = ''; // defult user value empty
    const learningSection = document.getElementById('learning');
    const cardCon = document.getElementById('cardCon');
    const qnSection = document.getElementById('qn');
    const footer = document.getElementById('ftr')

    // append Login section and other section is hidden
    loginSection.classList.remove('hidden')
    // displayed login section
    loginSection.classList.remove('hidden');
    learningSection.classList.add('hidden')
    cardCon.classList.add('hidden');
    qnSection.classList.add('hidden')
    footer.classList.add('hidden')


})

/************* This function make for hear the Word Pronuncitation *************/
function soundSys(word) {
    const sound = new SpeechSynthesisUtterance(word);
    sound.lang = 'en-EN';
    window.speechSynthesis.speak(sound)
}

/****** Make for show Word Details this funtion called in showWord function details button */
function wordDetails(id) {
    // Get id and fetch api
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    fetch(url)
        .then(res => res.json())
        .then((datas) => {
            datas.data.synonyms.forEach((e) => { console.log(e) })
            document.getElementById('my_modal_4').innerHTML = `
           <div class="modal-box w-11/12 md:w-6/12 max-w-5xl rounded-lg shadow-sm">
            <div class=" box-border p-5 border-1 border-emerald-100 rounded-lg grid gap-y-5">
                <h3 class=" font-bold text-2xl">${datas.data.word}("${datas.data.pronunciation}")</h3>
                <div class="">
                    <p class="py-2 font-semibold text-xl">Meaning</p>
                    <p class="py-2 font-semibold">${datas.data.meaning !== null ? datas.data.meaning : `Not Found`}</p>
                </div>
                <div>
                    <h1 class="py-2 font-semibold text-xl">Example</h1>
                    <p class="py-2 text-gray-500">${datas.data.sentence}</p>
                </div>
                <div>
                    <h1 class="py-2 font-semibold ">সমার্থক শব্দ গুলো</h1>
                    <div id ="wordBtn" class ="flex flex-wrap">
                    ${datas.data.synonyms.map(word => `<button class="btn mx-2 " onclick = "soundSys('${word}')">${word}</button>`).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-action justify-start w-11/12 ">
                <form method="dialog" class="w-full">
                    <button class="btn text-center w-4/6 md:w-2/6 bg-cyan-500 rounded-md ">Complete Learning</button>
                </form>
            </div>
        </div>
     `
            my_modal_4.showModal()
        })
}
/*********** Loader Function ************* */
function showLoader() {
    // When is showloader work , cardcontainer is hidden
    const cardContainer = document.getElementById('cardCon').classList.add('hidden');
    const loader = document.getElementById('loader').classList.remove('hidden')
}

function hideLoader() {
    // When hideloader is work , cardcontainer is static / remove hidden
    const cardContainer = document.getElementById('cardCon').classList.remove('hidden');
    const loader = document.getElementById('loader').classList.add('hidden')
}

/** This function give all of data theam */
function level() {
    const url = 'https://openapi.programming-hero.com/api/levels/all';
    fetch(url)
        .then(res => res.json())
        .then((datas) => {
            displayLevel(datas.data)
        })
};

function removeActive() {
    const activeBtn = document.querySelectorAll('.active');
    for (let removeBtn of activeBtn) {
        removeBtn.classList.remove('active')
    }
}

function displayLevel(datas) {
    const btnContainer = document.getElementById('btnContainer');
    for (let data of datas) {
        // console.log(data)
        const btn = document.createElement('div');
        btn.innerHTML = `
          <button onclick="showWord(${data.level_no})" id="btn-${data.level_no}"  class="btn text-cyan-500  border-cyan-500 py-0"><i class="fa-solid fa-book-open"></i>Lession
                -${data.level_no}</button>
        `
        btnContainer.appendChild(btn);
    }


}

const showWord = (datas) => {
    showLoader()
    removeActive()
    document.getElementById('non-sec').classList.add('hidden')
    // fecth data 
    const url = `https://openapi.programming-hero.com/api/level/${datas}`
    fetch(url)
        .then(res => res.json())
        .then((resData) => {
            const clickedBtn = document.getElementById(`btn-${datas}`);
            clickedBtn.classList.add('active')
            const cardConater = document.getElementById('cardContainer');
            cardConater.classList.add('py-8')
            cardConater.innerHTML = ''
            if (resData.data.length == 0) { // if resData has no data , then show this section
                cardConater.innerHTML = `
            <div class="bg-gray-100 py-5 w-11/12 col-span-full mx-auto flex flex-col gap-y-4 justify-center items-center opacity-0 -translate-x-10
            -translate-y-10 transition-all duration-500">
            <img src="assets/alert-error.png" alt="">
            <p class="font-semibold text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="font-semibold text-3xl">নেক্সট Lesson এ যান</h1>
            </div>
            `
                // set animation / smooth scrolling
                setTimeout(() => {
                    cardConater.firstElementChild.classList.remove('opacity-0', '-translate-x-10', '-translate-y-10')
                }, 200)
                hideLoader()
                return;
            }
            resData.data.forEach((data, index) => {
                const card = document.createElement('div');
                card.innerHTML = `
            <div id="card" class="flex flex-col  px-10 gap-y-10 py-10 h-80 bg-white rounded-lg shadow-sm opacity-0 -translate-x-10
            -translate-y-10 transition-all duration-500">
            <div id="text" class="grid gap-y-5 px-2 text-center h-52">
                <h1 class="font-bold text-2xl">${data.word}</h1>
                <p class="font-semibold">meaning / pronunciation</p>
                <h1 class="font-semibold text-2xl line-clamp-2">"${data.meaning == null ? `ortoh nai ` : data.meaning} / ${data.pronunciation == null ? `ortoh nai ` : data.pronunciation}"</h1>
            </div>
            <div id="icon"  class="flex justify-between ">
                <div id="details" onclick ="wordDetails(${data.id})" class="btn bg-cyan-100">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <div id="sound" onclick ='soundSys("${data.word}")' class="btn bg-cyan-100">
                    <i class="fa-solid fa-volume-high"></i>
                </div>
            </div>
        </div>
            `
                cardConater.appendChild(card)
                setTimeout(() => {
                    card.firstElementChild.classList.remove('opacity-0', '-translate-x-10', '-translate-y-10')
                }, index * 120)
            });
            hideLoader()
        })
}

level()