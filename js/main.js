window.onload = function (e) {

    let projectItem = "",
        faveProjects = [];

    // Add Projects
    function addProjects() {
        const projects = [{
                id: 0,
                client: "EDP Digital Platform",
                thumb: "assets/thumbs/edp.jpg",
                color: "#F6334f",
                url: "https://google.com",
                user: "f6ds_usr",
                pass: "aRfvbGt67Hj",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "invision",
                        link: "https://www.invisionapp.com"
                    },
                    {
                        title: "Wireframes",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                ]
            },
            {
                id: 1,
                client: "Portgás",
                thumb: "assets/thumbs/portgas.jpg",
                color: "#003087",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 2,
                client: "McDonald's",
                thumb: "assets/thumbs/mcdonalds.jpg",
                color: "#ffbc0d",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 3,
                client: "CUF",
                thumb: "assets/thumbs/cuf.jpg",
                color: "#00a2ce",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 4,
                client: "AICEP",
                thumb: "assets/thumbs/aicep.jpg",
                color: "#00A4B4",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 5,
                client: "Ferbar",
                thumb: "assets/thumbs/ferbar.jpg",
                color: "#ed2424",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 6,
                client: "Ageas Seguros",
                thumb: "assets/thumbs/ageas.jpg",
                color: "#12A3BB",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 7,
                client: "Ageas Portugal",
                thumb: "assets/thumbs/ageaspt.jpg",
                color: "#d30773",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 8,
                client: "Vodafone",
                thumb: "assets/thumbs/vodafone.jpg",
                color: "#e60000",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 9,
                client: "Seguro Directo",
                thumb: "assets/thumbs/segurodirecto.jpg",
                color: "#2fc9da",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 10,
                client: "Porto Business School",
                thumb: "assets/thumbs/pbs.jpg",
                color: "#192aea",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 11,
                client: "Porto Bay",
                thumb: "assets/thumbs/portobay.jpg",
                color: "#3e91b1",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 12,
                client: "Médis",
                thumb: "assets/thumbs/medis.jpg",
                color: "#11bba1",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },
            {
                id: 13,
                client: "Entreposto",
                thumb: "assets/thumbs/entreposto.jpg",
                color: "#f51e1e",
                url: "https://google.com",
                user: "cenas_usr",
                pass: "gtYhnJK78Sd",
                tools: [{
                        title: "Inspect",
                        name: "zeplin",
                        link: "https://app.zeplin.io"
                    },
                    {
                        title: "Prototype",
                        name: "figma",
                        link: "https://www.figma.com/"
                    },
                    {
                        title: "Wireframes",
                        name: "axure",
                        link: "https://www.axure.com"
                    }
                ]
            },

        ];

        projects.forEach(function (el) {

            let template = `
            <div class="projects__item" data-id="${el.id}">
            <span class="projects__fave"></span>
    
            <figure class="projects__thumb" style="background-color:${el.color}"> <img src="${el.thumb}" alt=""></figure>
            <span  class="projects__color" style="background-color:${el.color}"></span>
            <h2 class="projects__title">${el.client}</h2>
    
            <div class="projects__details">
                <div class="projects__detailsContent">
                    <input type="text" class="inputCopy">
                    <div class="projects__copyClipboard">
                        copied!
                    </div>
                    <div class="projects__info">
                        <a class="projects__detail link" href="${el.url}" target="_blank">Stage Link</a>
                    </div>
                    <div class="projects__info">
                        <p class="projects__detail--title user">User:</p>
                        <p class="projects__detail--text">${el.user}</p>
    
                    </div>
                    <div class="projects__info">
                        <p class="projects__detail--title pass">Password:</p>
                        <p class="projects__detail--text">${el.pass}</p>
                    </div>
                </div>
                <div class="projects__tools">
                </div>
            </div>
        </div>
        `;

            document.querySelector(".projects").insertAdjacentHTML("beforeend", template);

            el.tools.forEach(function (tool) {
                let template2 = `
                <a class="projects__toolLink" href="${tool.link}">
                    <p class="projects__toolTitle">${tool.title}</p>
                    <p class="projects__toolName ${tool.name}">${tool.name}</p>
                </a>`;

                document.querySelectorAll(".projects__tools")[el.id].insertAdjacentHTML("beforeend", template2);
            })
        });
    }

    // Select and copy User and Password
    function copydetails() {
        const text = document.querySelectorAll('.projects__detail--text'),
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
        let getFaves = localStorage.getItem('projectFaves');

        faveBtn.forEach(function (el) {
            el.addEventListener('click', selectFave)
        });

        function selectFave(e) {
            const currentProject = e.currentTarget.closest('.projects__item');
            getFaves = JSON.parse(localStorage.getItem('projectFaves'));

            if (currentProject.classList.contains('faved')) {
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

    function saveFaves() {
        projectItem = document.querySelectorAll(".projects__item");
        let getFaves = JSON.parse(localStorage.getItem('projectFaves'));

        if (getFaves) {
            const cenas = getFaves.map(Number);
            const getFaveProjects = [...projectItem].filter(element => cenas.indexOf(parseInt(element.dataset.id)) >= 0);
            console.log(getFaveProjects)
            getFaveProjects.forEach(function (el) {
                el.classList.add('faved');
            })
        };
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

    // Search
    function search() {
        const searchInput = document.getElementById("search"),
            cleanBtn = document.querySelector('.search__clean'),
            noResults = document.querySelector('.search__noResults');

        searchInput.addEventListener('keyup', function (event) {
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
                el.style.display = "flex";
            })

            if (getProjects == 0) {
                noResults.style.display = "flex";
            } else {
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

    //////////////////
    // Call functions
    //////////////////
    addProjects();
    addFave();
    saveFaves();
    openProject();
    copydetails();
    darkMode();
    search();
    openDrop();
}