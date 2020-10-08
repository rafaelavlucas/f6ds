window.onload = function (e) {

    // Populate Content


    const projects = [{
            id: 0,
            client: "Energy Digital Platform",
            thumb: "assets/thumbs/pbs.jpg",
            color: "#0b10b7",
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
            id: 2,
            client: "McDonald's",
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
            id: 3,
            client: "CUF",
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
            id: 4,
            client: "AICEP",
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
            id: 5,
            client: "Ferbar",
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
            id: 8,
            client: "Vodafone",
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
            id: 9,
            client: "Seguro Directo",
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
            id: 10,
            client: "Porto Business School",
            thumb: "assets/thumbs/pbs.jpg",
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
            id: 11,
            client: "Porto Bay",
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
            id: 12,
            client: "Médis",
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
            id: 13,
            client: "Entreposto",
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

    ];

    projects.forEach(function (el) {

        let template = `
        <div class="projects__item">

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



    // Select and copy User and Password

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

    // Hover Items
    const itemDs = document.querySelectorAll(".projects__item");
    itemDs.forEach(function (el) {
        el.addEventListener("mouseenter", cenas)
    });

    function cenas(e) {
        itemDs.forEach(function (el) {
            el.classList.remove("active");
        });

        e.currentTarget.classList.add("active");
    }


    // Dark Mode

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


    // Search

    const searchInput = document.getElementById("search");

    searchInput.addEventListener('keyup', function (event) {
        const searchValue = event.target.value;

        const filteredProjects = projects.filter(project => {
            return project.client.includes(searchValue);
        });


        console.log(filteredProjects);


        //showProjects(filteredProjects);


    });


    function clearList() {

    }

    function noResults() {

    }



}