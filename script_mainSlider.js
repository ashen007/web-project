// main slider

let sliderImages = [
    'url("file:///C:/Users/ashen/Dropbox/IS_projects-(ashen)/IS-assingment/HCI%20web%20UI/images/2bf99c8ed06141611c9fe9339b55c3fe.jpg")',
    'url("file:///C:/Users/ashen/Dropbox/IS_projects-(ashen)/IS-assingment/HCI%20web%20UI/images/Alex-The-Great-Arte-e-moda-Editorial-Cover.jpg")',
    'url("file:///C:/Users/ashen/Dropbox/IS_projects-(ashen)/IS-assingment/HCI%20web%20UI/images/Chanel-Spring-Summer-2018-Campaign-1.jpg")',
    'url("file:///C:/Users/ashen/Dropbox/IS_projects-(ashen)/IS-assingment/HCI%20web%20UI/images/giampaolo-sgura-kendra-spears-vogue-spain-february-2014-top-10-photographers-in-the-world.jpg")',
    'url("file:///C:/Users/ashen/Dropbox/IS_projects-(ashen)/IS-assingment/HCI%20web%20UI/images/GU634_MENS%252520TAILORING%25252019_DPS_MASTER_PR_CROP_300dpi_03.jpg")',
    'url("file:///C:/Users/ashen/Dropbox/IS_projects-(ashen)/IS-assingment/HCI%20web%20UI/images/kkcopromo.jpg")',
    'url("file:///C:/Users/ashen/Dropbox/IS_projects-(ashen)/IS-assingment/HCI%20web%20UI/images/See%20You%20At%20Sundown%20-%20Elizabeth%20Debicki%20shoot.jpg")'
];

let i = 0;
let k = 0;
let yPosition = 0;
let sliders = document.querySelectorAll('div.hci_slide_img');
let slideCount = document.querySelectorAll('div.hci_slidies');
let slideTextCount = document.querySelectorAll('div.hci_slide_inner_content');

document.getElementById('hci_main_slider').style.height = window.innerHeight + 'px';

for (let j = 0; j < sliders.length; j++) {
    sliders[j].style.cssText = 'background-image:' + sliderImages[j] + '; width: 100%; height: 100%; background-repeat: no-repeat; background-size: cover;';
}

slideCount[0].classList.add('active');

(function rolling_text() {
    if (k != 0) {
        yPosition += (-156);
        for (let j = 0; j < slideTextCount.length; j++) {
            slideTextCount[j].style.cssText = 'transform: translate3d(10px,' + yPosition + 'px, 0px); transition: ease-in-out 300ms;';
        }
    }
    if (k == slideTextCount.length) {
        k = 0;
        yPosition = 0;
        for (let j = 0; j <slideTextCount.length; j++) {
        slideTextCount[j].style.cssText = 'transform: translate3d(10px,' + yPosition + 'px, 0px);';
        }
    }
        k++;
    setTimeout(rolling_text, 5300);
})();

(function live_slider() {
    if (i != 0) {
        slideCount[i - 1].classList.remove('active');
    }
    if (i == 0 && slideCount[slideCount.length - 1].hasAttribute('class', 'active')) {
        slideCount[slideCount.length - 1].classList.remove('active');
    }
    slideCount[i].classList.add('active');
    i++;
    if (i == slideCount.length) {
        i = 0;
    }
    setTimeout(live_slider, 5300);
})();
