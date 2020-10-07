window.onload = function (e) {

    // Populate Content


    const ds = [{
            id: 0,
            client: "porto business school",
            thumb: "assets/thumbs/pbs.jpg",
            color: "#0b10b7",
            url: "https://www.rafaelalucas.com/dailyui/",
            user: "testweretsgf",
            pass: "rgdrfgtf",
            tools: [{
                    title: "Inspect",
                    name: "zeplin",
                    link: "zeplin.com"
                },
                {
                    title: "Prototype",
                    name: "invision",
                    link: "figma.com"
                },
                {
                    title: "Wireframes",
                    name: "figma",
                    link: "figma.com"
                }
            ]
        },
        {
            id: 1,
            client: "Ageas Seguros",
            thumb: "assets/thumbs/ageas.jpg",
            color: "#12A3BB",
            url: "https://www.rafaelalucas.com/dailyui/",
            user: "coco",
            pass: "rgdrfgtf",
            tools: [{

                    title: "Inspect",
                    name: "zeplin",
                    link: "zeplin.com"
                },
                {
                    title: "Prototype",
                    name: "figma",
                    link: "figma.com"
                },
                {
                    title: "Wireframes",
                    name: "axure",
                    link: "axure.com"
                }
            ]
        },
    ];

    const tools = [{
            id: 0,
            name: "Zeplin",
            icon: "assets/icon2.svg"
        }, {
            id: 1,
            name: "Invision",
            icon: "assets/icon.svg",
        },
        {
            id: 2,
            name: "Axure",
            icon: "assets/icon3.svg",
        },
        {
            id: 3,
            name: "Figma",
            icon: "assets/icon3.svg",
        },
    ];

    ds.forEach(function (el) {

        let template = `
        <div class="ds__item">

        <figure class="ds__thumb"> <img src="${el.thumb}" alt=""></figure>
        <span  class="ds__color" style="background-color:${el.color}"></span>
        <h2 class="ds__title">${el.client}</h2>

        <div class="ds__details">
            <div class="ds__detailsContent">
                <input type="text">
                <div class="ds__copyClipboard">
                    copied!
                </div>
                <div class="ds__info">
                    <a class="ds__detail link" href="" target="_blank">Stage Link</a>
                </div>
                <div class="ds__info">
                    <p class="ds__detail--title">User:</p>
                    <p class="ds__detail--text">${el.user}</p>

                </div>
                <div class="ds__info">
                    <p class="ds__detail--title">Password:</p>
                    <p class="ds__detail--text">${el.pass}</p>
                </div>
            </div>
            <div class="ds__tools">
            </div>
        </div>
    </div>
    `;

        document.querySelector(".ds").insertAdjacentHTML("beforeend", template);

        el.tools.forEach(function (tool) {
            let template2 = `
            <a class="ds__toolLink href="${tool.link}">
                <p class="ds__toolTitle">${tool.title}</p>
                <p class="ds__toolName ${tool.name}">${tool.name}</p>
            </a>`;

            document.querySelectorAll(".ds__tools")[el.id].insertAdjacentHTML("beforeend", template2);

        })

    })



    // Select and copy source

    const

        text = document.querySelectorAll('.ds__detail--text'),
        copyClipboard = document.querySelectorAll('.ds__copyClipboard');

    text.forEach(function (element) {
        element.addEventListener('click', selectText);
    });


    function selectText(event) {
        input = document.querySelector('input');

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
            event.currentTarget.closest('.ds__detailsContent').querySelector('.ds__copyClipboard').classList.add('show');

            setTimeout(function () {
                el.classList.remove('show');
            }, 1200);
        });




    }

    // Hover Items


    const itemDs = document.querySelectorAll(".ds__item");
    itemDs.forEach(function (el) {

        el.addEventListener("mouseenter", cenas)
    });

    function cenas(e) {
        itemDs.forEach(function (el) {
            el.classList.remove("active");
        });

        e.currentTarget.classList.add("active");
    }

}