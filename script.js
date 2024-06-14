const overlayElement = document.getElementById("overlay");
const imageElement = document.getElementById("image");

const images = [
    "./img/支付-明日方舟1.png",
    "./img/支付-明日方舟2.png",
    "./img/支付-明日方舟3.png",
    "./img/支付-明日方舟5.png",,
    "./img/支付-明日方舟6.png",
    "./img/支付-明日方舟8.png",
];

// 建立ID映射表
const idMap = {};
for (let i = 1; i <= 24; i++) {
    idMap[`renew${i}`] = document.getElementById(`renew${i}`);
}

// 为每个renew<i>元素添加点击事件监听器
for (let i = 1; i <= 24; i++) {
    idMap[`renew${i}`].addEventListener("click", () => {
        overlayElement.style.display = "block";
        const randomIndex = Math.floor(Math.random() * images.length);
        imageElement.src = images[randomIndex];
    });
}

// 点击overlay隐藏图片
overlayElement.addEventListener("click", (event) => {
    if (event.target === overlayElement) {
        overlayElement.style.display = "none";
    }
});