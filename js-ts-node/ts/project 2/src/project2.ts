let Coins_Api = `https://api.coingecko.com/api/v3/coins`;
let Two_Minutes = 2 * 60 * 1000;

let coins: Coin[];
let curencies = {}
let checkedcoins: string[] = []; //



$(async () => {
    coins = await getCoinsWithApi()
    printAllCards();
    btnSearch();
});

async function getCoinsWithApi() {
    let coinsArr: Coin[] = await fetch(Coins_Api).then(res => res.json())
    return coinsArr;
}

function creatCardButton(coin: Coin) {
    let button: JQuery<HTMLButtonElement> = $("<button></button>");
    button.addClass("btn btn-warning moreInfo");
    button.append('More Info')
    button.attr({
        "type": "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": `#${coin.id}-info`,
    });
    return button
}

function CreateCoinCard(coin: Coin) {
    let card: JQuery<HTMLDivElement> = $("<div></div>");
    let nameAndCheckboxDiv = addCoinTickerAndChecboxToDiv(coin);
    let heading = creatCoinNameH3(coin);
    let button = creatCardButton(coin);
    let divInfo = moreInfoDiv(coin);
    card.addClass("card form-switch coinCard");
    card.append(nameAndCheckboxDiv, heading, button, divInfo);

    button.one('click', async function () {
        if (this.ariaExpanded === 'true') {
            if (!curencies[coin.id]) {

                curencies[coin.id] = await CurrentPrice(coin)
            } else {
                let timeDifference = new Date().getTime() - curencies[coin.id].date
                if (timeDifference > Two_Minutes) {
                    divInfo.append(loadingGif());
                    curencies[coin.id] = await CurrentPrice(coin)
                }
            }
            divInfo.empty()
            let usd = $(`<span>USD: $${curencies[coin.id].usd}</span>`);
            let eur = $(`<span>EUR: €${curencies[coin.id].eur}</span>`);
            let ils = $(`<span>ILS: ₪${curencies[coin.id].ils}</span>`);
            divInfo.append(createImage(coin), usd, eur, ils)
        }
    })
    return card;
}

async function CurrentPrice(coin: Coin) {
    let newCoinInfo = await singleCoinApi(coin);
    let price = {
        date: new Date().getTime(),
        usd: newCoinInfo.market_data.current_price.usd,
        eur: newCoinInfo.market_data.current_price.eur,
        ils: newCoinInfo.market_data.current_price.ils
    }
    return price;
}

function moreInfoDiv(coin: Coin) {
    let divInfo: JQuery<HTMLDivElement> = $("<div></div>");
    divInfo.addClass('collapse div-info');
    divInfo.attr("id", `${coin.id}-info`);
    let gifImg = loadingGif();
    divInfo.append(gifImg);
    return divInfo;
}

function createImage(coin: Coin) {
    let image: JQuery<HTMLImageElement> = $("<img/>");
    image.attr('src', coin.image.small);
    image.addClass('card-img')
    return image;
}

async function singleCoinApi(coin: Coin) {
    let newCoinInfo = await fetch(`${Coins_Api}/${coin.id}`).then(res => res.json());
    return newCoinInfo;
}


function createCoinTicker(coin: Coin) {
    let heading: JQuery<HTMLHeadingElement> = $("<h4></h4>");
    heading.text(coin.symbol.toUpperCase());
    heading.addClass("coinTicker");
    return heading;
}

function addCoinTickerAndChecboxToDiv(coin: Coin) {
    let div: JQuery<HTMLDivElement> = $("<div></div>");
    let ticker = createCoinTicker(coin);
    let checkbox = creatCoinCheckBox(coin);
    div.addClass("checkSwitch")
    div.append(ticker, checkbox);
    return div;
}

function creatCoinNameH3(coin: Coin) {
    let h3: JQuery<HTMLHeadingElement> = $("<h3></h3>");
    h3.addClass(`coinName`)
    h3.text(coin.name)
    return h3;
}

function creatCoinCheckBox(coin: Coin) {
    let checkbox = createCheckbox()
    checkbox.attr("id", coin.id)
    checkbox.prop("checked", checkedcoins.includes(coin.id));
    checkbox.on("change", () => {
        if (checkbox.is(":checked")) {
            if (checkedcoins.length < 5) {
                checkedcoins.push(coin.id);
            } else {
                checkbox.prop("checked", false);
                modal(checkbox)
            }
        } else {
            checkedcoins = checkedcoins.filter(id => id !== coin.id);
        }
    });
    return checkbox;
}

function createCheckbox() {
    let checkbox: JQuery<HTMLInputElement> = $("<input/>");
    checkbox.attr({
        type: "checkbox",
        class: "form-check-input",
    });
    return checkbox;
}

function modal(checkbox: JQuery<HTMLInputElement>) {
    $(`.modal-body`).html("");
    let cancelledCoins: string[] = [];
    let modalCoins = checkedcoins;

    for (const item of checkedcoins) {
        let div: JQuery<HTMLDivElement> = $(`<div></div>`);
        let span: JQuery<HTMLSpanElement> = $(`<span>${item}</span>`);
        let modalCheckbox: JQuery<HTMLInputElement> = createCheckbox()
        modalCheckbox.prop("checked", true);
        modalCheckbox.on(`change`, () => {
            if ($(modalCheckbox).is(":not(:checked)")) {
                modalCoins = modalCoins.filter(key => key !== item);
                cancelledCoins.push(item);
            } else {
                cancelledCoins = cancelledCoins.filter(key => key !== item)
                modalCoins.push(item)
            }
        });
        div.append(span, modalCheckbox);
        div.addClass(`modal-div`);
        $(`#modal-body`).append(div);
    }
    $(`#submit`).one(`click`, () => modalBytton(checkbox, cancelledCoins, modalCoins));
    ($(`.modal`) as any).modal(`show`);
}

function modalBytton(checkbox: JQuery<HTMLInputElement>, unselected: string[], filteredCoins: string[]) {
    if (unselected.length) {
        unselected.forEach(id => $(`#${id}`).prop("checked", false));
        checkbox.prop("checked", true);
        checkedcoins = filteredCoins;
        checkedcoins.push(checkbox.prop("id"));
    }
}

function btnSearch() {
    $(`.btnSearch`).on(`click`, () => {
        let searchVal = $(`#search`).val().toString();
        let coinsFound: Coin[];
        coinsFound = coins.filter(coin => (searchVal.toLowerCase().includes(coin.symbol.toLowerCase())));
        if (coinsFound.length > 0) {
            $(`#search`).removeClass("invalid");
            $(`.cards`).empty();
            coinsFound.forEach(coin => $(`.cards`).append(CreateCoinCard(coin)));
            onKeyUp();
        } else {
            $(`#search`).addClass("invalid");
        }
    })
}

function onKeyUp() {
    $(`#search`).one("keyup", () => {
        if ($(`#search`).val(null)) {
            printAllCards();
        }
    })
}

function printAllCards() {
    coins.forEach(coin => {
        let curency = CreateCoinCard(coin)
        curency.appendTo($(".cards"));
    });
}

function loadingGif() {
    let gifImg = $(`<img/>`).attr("src", "loading.gif");
    gifImg.addClass(`gif-img`);
    return gifImg;
}