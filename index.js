/*
Random background pictures
*/
var bgArr = ["https://s2.ax1x.com/2020/03/01/36o3uD.gif", "https://s2.ax1x.com/2020/03/01/36oN4I.gif", "https://s2.ax1x.com/2020/03/01/36osbQ.gif", "https://s2.ax1x.com/2020/03/01/36orDg.gif", "https://s2.ax1x.com/2020/03/01/36TcLD.gif", "https://s2.ax1x.com/2020/03/01/36TyQK.gif", "https://s2.ax1x.com/2020/03/01/36TDRx.gif", "https://s2.ax1x.com/2020/03/01/36TRdH.gif", "https://s1.ax1x.com/2020/03/20/86BbqJ.gif", "https://i.mji.rip/2023/07/28/82f2ede6fd7b120ea783be716605a7c5.gif"];

function preloadImage(url) {
    return new Promise((resolve,reject)=>{
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
    }
    );
}

// Preload the image before setting it as the background
var bgIndex = Math.floor(Math.random() * bgArr.length);
preloadImage(bgArr[bgIndex]).then(()=>{
    document.body.style.backgroundImage = "url(" + bgArr[bgIndex] + ")";
}
).catch((error)=>{
    console.error("Failed to load background image:", error);
}
);

/*
Show or hide the sites
*/
const logoLink = document.querySelector('.logo');
const sitesElement = document.querySelector('.sites');

let isVisible = true;

logoLink.addEventListener('click', function(event) {
    event.preventDefault();

    if (isVisible) {
        sitesElement.classList.add('hidden');
        isVisible = false;
    } else {
        sitesElement.classList.remove('hidden');
        isVisible = true;
    }
});

/*
Late night reminder
*/
function displayMessage() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    if (hours >= 0 && hours < 6) {
        var link = document.createElement("a");
        link.href = "https://music.163.com/#/song?id=29600147";
        link.textContent = "夜深了";
        link.target = "_blank";
        link.classList.add("hint");
        link.id = "nightLink";
        // Add a unique id

        // Check if an element with id "nightLink" already exists
        var existingLink = document.getElementById("nightLink");
        if (existingLink) {
            // If it already exists, do nothing
            return;
        }

        document.body.appendChild(link);
    } else {
        var existingLink = document.getElementById("nightLink");
        if (existingLink) {
            // If an element with id "nightLink" exists, remove it from the DOM
            existingLink.parentNode.removeChild(existingLink);
        }
    }
}

// Call displayMessage function once after the page has finished loading
window.addEventListener('load', function() {
    displayMessage();
});

// Check time every minute
setInterval(displayMessage, 60000);

// Switch the tabs
var btnArr = document.getElementsByTagName("button");
var divArr = document.getElementsByClassName("con");
for (var i = 0; i < btnArr.length; i++) {
    btnArr[i].index = i;
    btnArr[i].onmouseover = function() {
        for (var j = 0; j < btnArr.length; j++) {
            btnArr[j].className = "";
            divArr[j].style.display = "none"
        }
        this.className = "current";
        divArr[this.index].style.display = "block";
    }
}

/*
Save the notes
*/
var d = document;
// Check browser support
if (typeof (Storage) !== "undefined") {
    d.addEventListener("DOMContentLoaded", function() {
        var savedContent = localStorage.getItem("notesContent");
        if (savedContent != null) {
            d.getElementById("notes").value = savedContent;
        }

        d.getElementById("notes").onkeyup = function() {
            var data = d.getElementById("notes").value;
            localStorage.setItem("notesContent", data);
        }
    });
} else {
    document.getElementById("result").innerHTML = "你这个浏览器不支持 Web Storage";
}

const toolsData = [{
    link: "https://www.notion.so/login",
    imageSrc: "https://www.notion.so/front-static/favicon.ico",
    text: "Notion"
}, {
    link: "https://www.figma.com/login",
    imageSrc: "https://static.figma.com/app/icon/1/favicon.png",
    text: "Figma"
}, {
    link: "https://docs.qq.com/desktop/",
    imageSrc: "https://docs.idqqimg.com/tim/docs/desktop/favicon.ico",
    text: "腾讯文档"
}, {
    link: "https://www.weiyun.com/",
    imageSrc: "https://img.weiyun.com/vipstyle/nr/box/img/favicon.ico",
    text: "微云"
}, {
    link: "https://mail.qq.com",
    imageSrc: "https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_32h.png",
    text: "QQ邮箱"
}, {
    link: "https://snapdrop.net/",
    imageSrc: "https://snapdrop.net/images/favicon-96x96.png",
    text: "Snapdrop"
}, {
    link: "https://filehelper.weixin.qq.com/",
    imageSrc: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
    text: "微信文件传输助手网页版"
}, {
    link: "https://wetransfer.com/",
    imageSrc: "https://prod-cdn.wetransfer.net/packs/media/images/favicon-a34a7465.ico",
    text: "WeTransfer"
}, {
    link: "https://yunduanxin.net/",
    imageSrc: "https://yunduanxin.net/favicon.ico",
    text: "云短信"
}, {
    link: "https://temp-mail.org/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/b0dab371374999d42c070f5c5a583cec.png",
    text: "Temp Mail"
}, {
    link: "https://paint.withdiagram.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/e40afc5325d5a224ba2a7b66835673a2.png",
    text: "Paint"
}, {
    link: "https://www.photopea.com/",
    imageSrc: "https://www.photopea.com/promo/thumb256.png",
    text: "Photopea"
}, {
    link: "https://rive.app/login/",
    imageSrc: "https://rive.app/favicon.ico",
    text: "Rive"
}, {
    link: "https://www.veed.io/",
    imageSrc: "https://assets-global.website-files.com/616e938268c8f02f94b2b53c/616e938268c8f01093b2b56b_Frame%202.png",
    text: "VEED"
}, {
    link: "https://codepen.io/pen/",
    imageSrc: "https://static.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico",
    text: "CodePen"
}, {
    link: "https://www.aconvert.com/image/",
    imageSrc: "https://s1.ax1x.com/2020/03/14/8Q2pqA.png",
    text: "Aconvert"
}, {
    link: "https://mjj.today/",
    imageSrc: "https://mjj.today/content/images/system/favicon_1639686409730_363774.png",
    text: "MJJ.TODAY"
}, {
    link: "https://i18ns.com/",
    imageSrc: "https://i18ns.com/favicon.ico",
    text: "I18ns"
}, {
    link: "http://libgen.rs/",
    imageSrc: "https://s1.ax1x.com/2020/10/07/0a7fU0.png",
    text: "Library Genesis"
}, {
    link: "https://unsplash.com/",
    imageSrc: "https://unsplash.com/favicon-32x32.png",
    text: "Unsplash"
}, {
    link: "https://www.soundsnap.com/",
    imageSrc: "https://www.soundsnap.com/themes/soundsnap5/assets/favicon.png",
    text: "Soundsnap"
}, {
    link: "https://coverr.co/",
    imageSrc: "https://coverr.co/favicon-32x32.png",
    text: "coverr"
}, {
    link: "https://github.com/",
    imageSrc: "https://github.githubassets.com/favicons/favicon.svg",
    text: "GitHub"
}, {
    link: "https://apkpure.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/dc89b0ef6480d30c1a01f23ecc3db519.png",
    text: "APKPure"
}, {
    link: "https://chat.openai.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/0d1b8cde7e34db9f97683be019c21532.png",
    text: "ChatGPT"
}];

const newsData = [{
    link: "https://cn.nytimes.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/6db3334b24599860c84c7ffbc031eb6b.png",
    text: "纽约时报中文网"
}, {
    link: "https://www.bbc.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/47eaca6a6daebf595d14866f8f6f7b7e.png",
    text: "BBC"
}, {
    link: "https://theinitium.com/",
    imageSrc: "https://s1.ax1x.com/2020/03/14/8Q5LmF.png",
    text: "端傳媒"
}, {
    link: "https://news.pts.org.tw/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/99fd19330308deef59e30b18fedd9b7d.png",
    text: "公視新聞網"
}, {
    link: "https://weibo.com/newlogin?tabtype=search",
    imageSrc: "https://weibo.com/favicon.ico",
    text: "微博"
}, {
    link: "https://xueqiu.com/u/1247347556",
    imageSrc: "https://xqimg.imedao.com/17af5fe80fb1844b3fd48941.png",
    text: "雪球"
}, {
    link: "https://www.ithome.com/blog/",
    imageSrc: "https://www.ithome.com/favicon.ico",
    text: "IT之家"
}, {
    link: "https://www.dongchedi.com",
    imageSrc: "https://p3.dcarimg.com/obj/eden-cn/vlseh7ubqnuhs/motor/favicon/favicon-96x96.png",
    text: "懂车帝"
}, {
    link: "https://hypebeast.com/?gl=us",
    imageSrc: "https://i2.mjj.rip/2023/06/30/bd18cec50e6e8fce29cefa878fb6defb.png",
    text: "HYPEBEAST"
}, {
    link: "https://www.zfrontier.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/d3062d2b58e42536fcba7810d468ed33.png",
    text: "zFrontier"
}, {
    link: "https://twitter.com/elonmusk?lang=en",
    imageSrc: "https://s2.ax1x.com/2020/03/05/370I81.png",
    text: "Twitter"
}, {
    link: "https://www.reddit.com/r/Genshin_Impact/",
    imageSrc: "https://s2.ax1x.com/2020/03/05/37Bgzt.png",
    text: "Reddit"
}, {
    link: "https://dig.chouti.com",
    imageSrc: "https://dig.chouti.com/images/favicon-d38b877458.png",
    text: "抽屉新热榜"
}, {
    link: "https://www.v2ex.com/",
    imageSrc: "https://s1.ax1x.com/2020/09/12/wdCPU0.png",
    text: "V2EX"
}, {
    link: "https://www.qimai.cn/rank/index/brand/all/device/iphone/country/us/genre/6014",
    imageSrc: "https://static.qimai.cn/static/bitbug_favicon.ico",
    text: "七麦数据"
}, {
    link: "https://play.google.com/store/games?hl=en&gl=us",
    imageSrc: "https://i2.mjj.rip/2023/06/30/0ede3f74f24a3ccaf4ed9b5b23e539b0.png",
    text: "Google Play"
}, {
    link: "https://www.similarweb.com/top-websites/",
    imageSrc: "https://www.similarweb.com/favicon.ico",
    text: "Similarweb"
}, {
    link: "https://www.google.com/finance/?hl=en&gl=us",
    imageSrc: "https://i2.mjj.rip/2023/06/30/6b5a21c7c1177ab4925ff114ba9c6ea0.png",
    text: "Google Finance"
}, {
    link: "https://www.binance.com/zh-CN/markets",
    imageSrc: "https://i2.mjj.rip/2023/06/30/ac112f608dca95c450f5e5f2f972e8dc.png",
    text: "币安"
}];
const entertainmentData = [{
    link: "https://ddys.tv/",
    imageSrc: "https://ddys.tv/favicon-32x32.png",
    text: "低端影视"
}, {
    link: "https://www.zxzjhd.com",
    imageSrc: "https://i.mji.rip/2023/07/26/c6d9615ed1865621edb35c2160ea097b.png",
    text: "在线之家"
}, {
    link: "https://www.freeok.vip",
    imageSrc: "https://i2.mjj.rip/2023/06/30/d3617fad9880dd3208d8e32e42484d72.png",
    text: "FreeOK"
}, {
    link: "https://www.agedm.tv",
    imageSrc: "https://www.agedm.tv/favicon.ico",
    text: "AGE动漫"
}, {
    link: "https://cupfox.app/",
    imageSrc: "https://picx.zhimg.com/80/v2-de36e385e59fcca2df694b76f108431a.png",
    text: "茶杯狐"
}, {
    link: "https://www.youtube.com/?gl=US",
    imageSrc: "https://s2.ax1x.com/2020/03/07/3XHOM9.png",
    text: "YouTube"
}, {
    link: "https://www.bilibili.com/",
    imageSrc: "https://www.bilibili.com/favicon.ico",
    text: "哔哩哔哩"
}, {
    link: "https://www.douyin.com/",
    imageSrc: "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico",
    text: "抖音"
}, {
    link: "https://weread.qq.com/#login",
    imageSrc: "https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_32h.png",
    text: "微信读书"
}, {
    link: "https://open.spotify.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/110976cb469a18ee90a59db2ea70138a.png",
    text: "Spotify"
}, {
    link: "https://www.taptap.com/upcoming",
    imageSrc: "https://www.taptap.com/favicon.ico",
    text: "TapTap"
}, {
    link: "https://store.steampowered.com/?cc=en",
    imageSrc: "https://s2.ax1x.com/2020/03/07/3XbqFf.png",
    text: "Steam"
}, {
    link: "https://www.epicgames.com/store",
    imageSrc: "https://static-assets-prod-1251447533.file.myqcloud.com/epic-store/static/favicon.ico",
    text: "Epic Games Store"
}, {
    link: "https://www.y8.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/b90b2e6bf2b06c02fc6e3eee6f95f4f1.png",
    text: "Y8"
}, {
    link: "https://dos.lol",
    imageSrc: "https://zaixianwan.app/favicon.svg",
    text: "在线 DOS 游戏"
}, {
    link: "https://www.yikm.net/",
    imageSrc: "https://s2.ax1x.com/2020/03/07/3XbrLR.png",
    text: "小霸王"
}, {
    link: "https://movie.douban.com/mine?status=wish",
    imageSrc: "https://www.douban.com/favicon.ico",
    text: "豆瓣"
}];
const referenceData = [{
    link: "https://www.apple.com/",
    imageSrc: "https://www.apple.com/favicon.ico",
    text: "Apple"
}, {
    link: "https://www.tesla.com/",
    imageSrc: "https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon.ico",
    text: "Tesla"
}, {
    link: "https://www.nike.com/w/new-mens-shoes-3n82yznik1zy7ok",
    imageSrc: "https://www.nike.com/favicon.ico",
    text: "Nike"
}, {
    link: "https://www.mcdonalds.com/us/en-us.html",
    imageSrc: "https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/favicon.ico",
    text: "McDonald's"
}, {
    link: "https://www.muji.com/jp/ja/store",
    imageSrc: "https://www.muji.com/favicon.ico",
    text: "無印良品"
}, {
    link: "https://www.facebook.com/",
    imageSrc: "https://s1.ax1x.com/2020/10/24/BV6KCd.png",
    text: "Facebook"
}, {
    link: "https://www.pinterest.com/ideas/",
    imageSrc: "https://s1.ax1x.com/2020/03/20/8609fK.png",
    text: "Pinterest"
}, {
    link: "https://medium.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/15f3b96c90cc0aac20490f36bcc21820.png",
    text: "Medium"
}, {
    link: "https://dribbble.com/",
    imageSrc: "https://s2.ax1x.com/2020/03/06/3LSNHs.png",
    text: "Dribbble"
}, {
    link: "https://www.behance.net/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/e961ade12caa9ea25f7ad6ac03908fec.png",
    text: "Behance"
}, {
    link: "https://www.qq.com/",
    imageSrc: "https://mat1.gtimg.com/www/icon/favicon2.ico",
    text: "腾讯网"
}, {
    link: "https://www.dgtle.com/",
    imageSrc: "https://www.dgtle.com/favicon.ico",
    text: "数字尾巴"
}, {
    link: "https://www.theverge.com/",
    imageSrc: "https://cdn.vox-cdn.com/verge/favicon.ico",
    text: "The Verge"
}, {
    link: "https://fanqienovel.com/",
    imageSrc: "https://p1-tt.byteimg.com/origin/pgc-image/40b62ecded39425e819b950e745e46ae",
    text: "番茄小说网"
}, {
    link: "https://mp.weixin.qq.com/",
    imageSrc: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
    text: "微信公众平台"
}, {
    link: "https://about.facebook.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/9324c4d5f86b61f2e0a8a4f40a69d8f6.png",
    text: "Meta"
}, {
    link: "https://ethereum.org/",
    imageSrc: "https://ethereum.org/favicon-32x32.png",
    text: "Ethereum"
}, {
    link: "https://cash.app/",
    imageSrc: "https://i2.mjj.rip/2023/07/02/b0a7514daebfa8051916e2bf0c2dd54f.png",
    text: "Cash App"
}, {
    link: "https://us.nothing.tech/",
    imageSrc: "https://cdn.shopifycdn.net/s/files/1/0585/2479/5086/files/favicon_32x32.png?v=1627223914",
    text: "Nothing"
}, {
    link: "https://www.dinehq.com/",
    imageSrc: "https://www.dinehq.com/favicon.png",
    text: "Dine Creative Design"
}, {
    link: "http://www.timepill.net/",
    imageSrc: "http://www.timepill.net/favicon.ico",
    text: "胶囊日记"
}, {
    link: "https://www.sneakinpeace.com/",
    imageSrc: "https://cdn.shopifycdn.net/s/files/1/0493/5663/6318/files/favicon_fce707f0-955d-4b19-8beb-a3bfcb9a2b11_32x32.png",
    text: "Sneak in Peace"
}, {
    link: "https://music.youtube.com/",
    imageSrc: "https://i2.mjj.rip/2023/06/30/699ca4142d93123618633951513ca17c.png",
    text: "YouTube Music"
}, {
    link: "https://www.tiktok.com/en",
    imageSrc: "https://i.mji.rip/2023/07/29/af2d8fabebcd52a9e2e4f3e46ba2b8cb.png",
    text: "TikTok"
}, {
    link: "https://discord.com/app",
    imageSrc: "https://i2.mjj.rip/2023/06/30/213fbb5e8bf865a94eb7d3058c97aa33.png",
    text: "Discord"
}];

function createListItem(link, imageSrc, text) {
    const listItem = document.createElement("li");
    const linkElement = document.createElement("a");
    const imageElement = document.createElement("img");
    const textElement = document.createElement("span");

    linkElement.href = link;
    linkElement.target = "_blank";
    imageElement.src = imageSrc;
    textElement.textContent = text;
    textElement.classList.add("text");
    // Add the class name "text"

    linkElement.appendChild(imageElement);
    linkElement.appendChild(textElement);
    listItem.appendChild(linkElement);

    return listItem;
}

function appendListItems(listId, data) {
    const list = document.getElementById(listId);

    data.forEach((item)=>{
        const listItem = createListItem(item.link, item.imageSrc, item.text);
        list.appendChild(listItem);
    }
    );
}

appendListItems("tools-list", toolsData);
appendListItems("news-list", newsData);
appendListItems("entertainment-list", entertainmentData);
appendListItems("reference-list", referenceData);
