window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    // Get scroll position values
    const trigger = window.scrollY;
    // The top position when we change the opacity
    const navbarHeight = navbar.clientHeight;

    if (trigger >= navbarHeight) {
        navbar.style.backgroundColor = "white"; // 흰색으로 변경
    } else {
        navbar.style.backgroundColor = "hsl(0 100% 100%/0.4)"; // 투명으로 변경
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
        });
    });
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add("is-active");
    }

    function closeModal($el) {
        $el.classList.remove("is-active");
    }

    function closeAllModals() {
        (document.querySelectorAll(".modal") || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll(".js-modal-trigger") || []).forEach(
        ($trigger) => {
            const modal = $trigger.dataset.target;
            const $target = document.getElementById(modal);

            $trigger.addEventListener("click", () => {
                openModal($target);
            });
        }
    );

    // Add a click event on various child elements to close the parent modal
    (
        document.querySelectorAll(
            ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
        ) || []
    ).forEach(($close) => {
        const $target = $close.closest(".modal");

        $close.addEventListener("click", () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            closeAllModals();
        }
    });

    // function to load charts
    var langData = {
        labels: ["C++", "C", "Python", "Java", "Kotlin"],
        datasets: [
            {
                data: [80, 80, 70, 65, 60],
                backgroundColor: [
                    "rgba(0, 89, 156, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(255, 165, 0, 0.5)",
                    "rgba(128, 0, 128, 0.5)",
                ],
                borderColor: [
                    "rgba(0, 89, 156, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(255, 165, 0, 1)",
                    "rgba(128, 0, 128, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    var frameData = {
        labels: ["NodeJS", "ExpressJS", "MongoDB", "Firebase", "AWS EC2"],
        datasets: [
            {
                data: [90, 90, 90, 50, 70],
                backgroundColor: [
                    "rgba(51, 153, 51, 0.5)",
                    "rgba(0, 0, 0, 0.5)",
                    "rgba(83, 167, 106, 0.5)",
                    "rgba(255, 202, 40, 0.5)",
                    "rgba(255, 153, 0, 0.5)",
                ],
                borderColor: [
                    "rgba(51, 153, 51, 1)",
                    "rgba(0, 0, 0, 1)",
                    "rgba(83, 167, 106, 1)",
                    "rgba(255, 202, 40, 1)",
                    "rgba(255, 153, 0, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    var chartOptions = {
        maintainAspectRatio: true,
        scales: {
            r: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                    max: 100,
                    stepSize: 20,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                formatter: (value, ctx) => {
                    return ctx.chart.data.labels[ctx.dataIndex];
                },
                font: {
                    weight: "bold",
                    size: 15,
                },
                color: "#000",
            },
        },
    };
    var ctx = document.getElementById("langChart").getContext("2d");
    var langChart = new Chart(ctx, {
        type: "polarArea",
        data: langData,
        plugins: [ChartDataLabels],
        options: chartOptions,
    });
    ctx = document.getElementById("frameChart").getContext("2d");
    var frameChart = new Chart(ctx, {
        type: "polarArea",
        data: frameData,
        plugins: [ChartDataLabels],
        options: chartOptions,
    });
});
