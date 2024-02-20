function creatAboutCard() {
    let div: JQuery<HTMLDivElement> = $(`<div></div>`);
    div.addClass("card about-card");
    return div;
}

function aboutHeading() {
    let head: JQuery<HTMLDivElement> = $(`<h1></h1>`);
    head.text('ABOUT');
    head.addClass('coinName aboutHeading');
    return head;
}

function creatAboutParagraph() {
    let paragraph: JQuery<HTMLParagraphElement> = $(`<p></p>`);
    return paragraph;
}

function creatAboutImage(src: string) {
    let img: JQuery<HTMLImageElement> = $(`<img/>`);
    img.attr({
        src: src,
        class: "aboutImg"
    });
    return img;
}

function aboutMeDiv() {
    let paragraphs: JQuery<HTMLDivElement> = $("<div></div>");
    let aboutMe: JQuery<HTMLDivElement> = $("<div></div>");
    let img = creatAboutImage("https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg");
    let name = creatAboutParagraph();
    let age = creatAboutParagraph();
    let religion = creatAboutParagraph();
    let nation = creatAboutParagraph();
    let address = creatAboutParagraph();
    let hobbies = creatAboutParagraph();
    name.text(`FULL NAME: ARIEL KASHANI`);
    age.text(`MY AGE: 23`);
    religion.text("RELIGION: PROUD JEWISH");
    nation.text(`COUNTRY: ISRAEL`);
    address.text(`ADDRESS: ROYHSCHILD`);
    hobbies.text(`HOBBIES: SOCCER, BASKETBALL`);
    paragraphs.addClass(`paragraphs`)
    paragraphs.append(name, age, religion, nation, address, hobbies);
    aboutMe.append(paragraphs, img);
    aboutMe.addClass("aboutMe");
    return aboutMe;
}

function aboutTheWeb() {
    let aboutWebDiv: JQuery<HTMLDivElement> = $("<div></div>")
    let aboutWeb1 = creatAboutParagraph();
    let aboutWeb2 = creatAboutParagraph();
    let aboutWeb3 = creatAboutParagraph();
    aboutWeb1.text(`This project is about Crypto, over the last few years the Crypto has yaken over the world 
    by storm, many prople have gotten reach over night by holding to so,e of those Curencies,
    many have also lost a lot of money buying these curencies at the wrong time,`);
    aboutWeb2.text(`In this website you can get real time Crypto data, real time valuation of each and every single
    digital coin you can think of, the HOME page will show you all the coins and all their data by
    clicking the MORE INFO button, by checking the toggle on a card you will be able to select that 
    coin and see its live reports on our chart, you can pick up to 5 different coins at once.`);
    aboutWeb3.text(`LIVE REPORTS page will sho you all the live reports and all the movements on a chart,
    by checking the toggle on the HOME page as written above, also notice that the the first coin selected USD price
    on the chart will be on the left of the screen, while all the others will be on the right`);
    aboutWebDiv.append(aboutWeb1, aboutWeb2, aboutWeb3);
    return aboutWebDiv;
}

function renderAboutPage() {
    let card = creatAboutCard();
    let heading = aboutHeading();
    let aboutMe = aboutMeDiv();
    let aboutWeb = aboutTheWeb();
    // heading.text("ABOUT");
    card.append(heading, aboutMe, aboutWeb);
    card.appendTo($("#about"));
}


