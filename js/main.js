window.onload = function (e) {
    const baseUrl = 'https://myeverydayapps.com/directus/public/jc20'
    var token = ''
    let projects = []
    let projectItem = "",
        faveProjects = [];

    const noFaves = document.querySelector('.message__noFaves'),
        noResults = document.querySelector('.message__noResults'),
        btnFaves = document.querySelector('.faveBtn'),
        projectList = document.querySelector('.projects'),
        body = document.querySelector('body');

    async function addProjects() {
        const json = await fetch(`${baseUrl}/items/projects?fields=*.*`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const dbProjects = await json.json()
        projects = dbProjects.data
        projects.forEach(function (el) {

            let template = `
            <div class="projects__item" data-id="${el.id}">
            <span class="projects__fave"></span>
    
            <figure class="projects__thumb" style="background-color:${el.color}"> <img src="${el.thumb.data.full_url}" alt=""></figure>
            <span  class="projects__color" style="background-color:${el.color}"></span>
            <h2 class="projects__title">${el.client}</h2>
    
            <div class="projects__details">
                <div class="projects__detailsContent">
                    <input type="text" class="inputCopy">
                    
                    <div class="projects__info">
                        <p class="projects__detail user">${el.user}</p>
                        <p class="projects__detail pass">${el.pass}</p>
                    </div> 

                    <div class="projects__copyClipboard">
                        Copied!
                    </div>

                    <a class="projects__stageLink" href="${el.url}" target="_blank"></a>
                </div>
                <div class="projects__tools">
                </div>
            </div>
        </div>
        `;

            document.querySelector(".projects").insertAdjacentHTML("beforeend", template);

            if (el.tools) {
                el.tools.forEach(function (tool) {
                    let template2 = `
                <a class="projects__toolLink" href="${tool.link}" target="_blank">
                    <p class="projects__toolTitle">${tool.title}</p>
                    <p class="projects__toolName ${tool.name}">${tool.name}</p>
                </a>`;

                    document.querySelector(`.projects__item[data-id="${el.id}"] .projects__tools`).insertAdjacentHTML("beforeend", template2);
                })
            }
        });
        saveFaves();
        search();
        openProject();
        copydetails();
        addFave();
        filterFaves();
        openDrop();
    }

    // Select and copy User and Password
    function copydetails() {
        const text = document.querySelectorAll('.projects__detail'),
            copyClipboard = document.querySelectorAll('.projects__copyClipboard');

        text.forEach(function (element) {
            element.addEventListener('click', selectText);
        });

        function selectText(event) {
            input = document.querySelector('.inputCopy');

            input.value = event.currentTarget.innerHTML;
            input.select();
            document.execCommand('copy');

            event.currentTarget.classList.add("selected");
            setTimeout(function () {
                text.forEach(function (el) {
                    el.classList.remove("selected");
                });
            }, 1200);

            copyClipboard.forEach(function (el) {
                event.currentTarget.closest('.projects__detailsContent').querySelector('.projects__copyClipboard').classList.add('show');

                setTimeout(function () {
                    el.classList.remove('show');
                }, 1200);
            });
        }
    }

    // Add to favorites
    function addFave() {
        const faveBtn = document.querySelectorAll('.projects__fave');

        faveBtn.forEach(function (el) {
            el.addEventListener('click', selectFave)
        });

        function selectFave(e) {
            e.stopPropagation();

            const currentProject = e.currentTarget.closest('.projects__item');
            getFaves = JSON.parse(localStorage.getItem('projectFaves'));

            if (currentProject.classList.contains('faved')) {

                if (projectList.classList.contains('faveArea')) {
                    currentProject.style.display = "none";
                }

                currentProject.classList.remove('faved');
                const targetIndex = [...getFaves].indexOf(e.currentTarget.closest('.projects__item').dataset.id)
                getFaves.splice(targetIndex, 1);
                getFaves = localStorage.setItem('projectFaves', JSON.stringify(getFaves));
            } else {
                currentProject.classList.add('faved');
                if (getFaves) {
                    getFaves.push(e.currentTarget.closest('.projects__item').dataset.id);
                    getFaves = localStorage.setItem('projectFaves', JSON.stringify(getFaves));
                } else {
                    faveProjects.push(e.currentTarget.closest('.projects__item').dataset.id);
                    getFaves = localStorage.setItem('projectFaves', JSON.stringify(faveProjects));
                }
            }
        }
    };

    // Save favorites on cache
    function saveFaves() {
        projectItem = document.querySelectorAll(".projects__item");
        let getFaves = JSON.parse(localStorage.getItem('projectFaves'));

        if (getFaves) {
            const cenas = getFaves.map(Number);
            const getFaveProjects = [...projectItem].filter(element => cenas.indexOf(parseInt(element.dataset.id)) >= 0);
            getFaveProjects.forEach(function (el) {
                el.classList.add('faved');
            })
        };
    }

    // Filter faves
    function filterFaves() {

        btnFaves.addEventListener('click', function () {
            ifnoFaves();

            if (btnFaves.classList.contains('selected')) {

                projectList.classList.remove('faveArea');
                noFaves.style.display = "none";
                btnFaves.classList.remove('selected');
                projectItem.forEach(function (el) {

                    el.style.display = "none";
                    setTimeout(() => {
                        el.style.display = "flex";
                    }, 100);
                })
            } else {
                btnFaves.classList.add('selected');
                projectList.classList.add('faveArea');
                projectItem.forEach(function (el) {
                    if (!el.classList.contains('faved')) {
                        el.style.display = "none";

                    } else {
                        el.style.display = "none";
                        setTimeout(() => {
                            el.style.display = "flex";
                        }, 100);


                    }
                })
            }
        })
    }

    function ifnoFaves() {
        getFaves = JSON.parse(localStorage.getItem('projectFaves'));

        if (getFaves.length) {
            noResults.style.display = "none";
            noFaves.style.display = "none";
        } else {
            noResults.style.display = "none";
            noFaves.style.display = "flex";
        }
    }

    // Click on Projects and show details
    function openProject() {
        projectItem.forEach(function (el) {
            el.addEventListener("click", showDetail)
        });

        function showDetail(e) {
            projectItem.forEach(function (el) {
                el.classList.remove("active");
            });
            e.currentTarget.classList.add("active");
        }
    }

    // Search
    function search() {
        const searchInput = document.getElementById("search"),
            cleanBtn = document.querySelector('.search__clean');

        searchInput.addEventListener('keyup', function (event) {
            btnFaves.classList.remove('selected');
            const searchValue = event.target.value.toLowerCase();
            cleanBtn.style.display = "none";
            noResults.style.display = "none";

            // Filter the projects when type on input
            const filteredProjects = projects.filter(project => {
                return project.client.toLowerCase().includes(searchValue);
            });

            // Get the id of the filtered projects
            const getId = filteredProjects.map(item => item.id);

            const getProjects = [...projectItem].filter(element => getId.indexOf(parseInt(element.dataset.id)) >= 0);

            // Hide all projects and show the filteres ones
            projectItem.forEach(function (el) {
                el.style.display = "none";
            })

            getProjects.forEach(function (el) {
                el.style.display = "none";
                setTimeout(() => {
                    el.style.display = "flex";
                }, 100);
            })

            if (getProjects == 0) {
                noResults.style.display = "flex";

            } else {
                noFaves.style.display = "none";
                noResults.style.display = "none";
            }

            if (searchInput.value == "") {
                cleanBtn.style.display = "none";
            } else {
                cleanBtn.style.display = "flex";
            }


        });

        // Clean Search

        cleanBtn.addEventListener('click', cleanResults);

        function cleanResults() {
            searchInput.value = "";
            cleanBtn.style.display = "none";
            noResults.style.display = "none";

            projectItem.forEach(function (el) {
                el.style.display = "flex";
            })
        }
    }

    // To open and close Dropdown
    function openDrop() {
        const drop = document.querySelector('.drop');

        drop.addEventListener('click', function () {
            if (drop.classList.contains('open')) {
                drop.classList.remove('open');
            } else {
                drop.classList.add('open');
            }
        });
    }

    // Dark Mode
    function darkMode() {
        const body = document.querySelector("body"),
            toggle = document.querySelector(".toggle");
        let getTheme = localStorage.getItem('themeDark');

        toggle.addEventListener('click', changeTheme);

        if (getTheme != "false") {
            body.dataset.theme = "dark";
            toggle.classList.add('on');
            localStorage.setItem('themeDark', true);
        };

        function changeTheme() {
            getTheme = localStorage.getItem('themeDark');
            if (getTheme == "false") {
                body.dataset.theme = "dark";
                toggle.classList.add('on');
                getTheme = localStorage.setItem('themeDark', true);
            } else {
                body.dataset.theme = "";
                toggle.classList.remove('on');
                getTheme = localStorage.setItem('themeDark', false);
            }
        };
    }


    // Intro page for authentication

    async function checkPassword() {
        const passwordInput = document.getElementById("password"),
            intro = document.querySelector(".intro"),
            inputArrow = document.querySelector(".intro__inputArrow"),
            dbToken = localStorage.getItem("token");

        if (dbToken) {
            const data = {
                token: dbToken
            }
            const json = await fetch(`${baseUrl}/auth/refresh`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const response = await json.json()
            const newToken = response.data.token
            localStorage.setItem('token', newToken);
            intro.classList.add('checked');
            token = newToken
            body.style.overflowY = "visible";
            intro.style.display = "none";
            addProjects();
        }
        passwordInput.addEventListener("keyup", enterPage);
        inputArrow.addEventListener("click", enterPage);

        async function enterPage(event) {
            event.preventDefault()
            intro.querySelector('.input__error').classList.remove('showError')
            if (!event.code || event.code === 'Enter') {
                const data = {
                    email: 'andre.dargains@gmail.com',
                    password: event.target.value
                }
                console.log(data);
                const json = await fetch(`${baseUrl}/auth/authenticate`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

                if (json.status !== 200) {
                    const response = await json.json()
                    intro.querySelector('.input__error').classList.add('showError')
                    intro.querySelector('.input__error').innerText = response.error.message
                } else {
                    const response = await json.json()
                    token = response.data.token
                    localStorage.setItem('token', token);
                    intro.classList.add('checked');
                    body.style.overflowY = "visible";
                    intro.style.display = "none";
                    addProjects();

                }
            }
        }
    }

    //////////////////
    // Call functions
    //////////////////

    darkMode();
    checkPassword();
}