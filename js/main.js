// // SMOOTH SCROLL
const smoothScroll = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');


    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })

        })
    }

}
smoothScroll();




// LIBRARY SECTION
const librarySection = () => {
    const hideCardsFirstRow = document.getElementById('hide-cards-first-row');
    const hideCardsSecondRow = document.getElementById('hide-cards-second-row');

    const loadBtn = document.querySelector('.library__collapse-btn');

    loadBtn.addEventListener('click', () => {
        const result = loadBtn.classList.toggle('k');
        loadBtn.textContent = `${result ? "Hide" : "Load more"}`;

        hideCardsFirstRow.classList.add('open');
        hideCardsSecondRow.classList.add('open');

        if (!loadBtn.classList.contains('k')) {
            hideCardsFirstRow.classList.remove('open');
            hideCardsSecondRow.classList.remove('open');
        }
    })
}
librarySection();

// FEATURES SECTION
const featuresSection = () => {
    const SHOW_CLASS = 'show';
    const collapseBtn = document.querySelector('.features__collapse-btn');
    const classes = collapseBtn.classList;
    const hideLinks = document.querySelectorAll('.hide-el');

    collapseBtn.addEventListener('click', () => {
        const result = classes.toggle("c");
        collapseBtn.textContent = `${result ? "Collapse features list" : "Full features list"}`;

        for (let i = 0; i < hideLinks.length; i++) {
            hideLinks[i].classList.add(SHOW_CLASS);
        }

        if (!collapseBtn.classList.contains('c')) {
            console.log(false);
            for (let i = 0; i < hideLinks.length; i++) {
                hideLinks[i].classList.remove(SHOW_CLASS);

            }
        }

    })
}
featuresSection();

// MODAL SCROLL
const bodyEl = document.querySelector('body');

const modalFunction = () => {
    if (bodyEl.classList.contains('modal-open')) {
        document.querySelector('html').style.overflow = 'hidden';
        // scrollController.disabledScroll();
    } else {
        document.querySelector('html').style.overflow = 'visible';
        // scrollController.enabledScroll();
    }
}
modalFunction();

// const firstIframe = document.getElementById('firstIframe');

// firstIframe.addEventListener('load', () => {
//     const iframeWindow = firstIframe.contentWindow;
//     console.log(iframeWindow);
//     const iframeDocument = firstIframe.contentDocument;
//     console.log(firstIframe.contentDocument);
//     console.log('LOADDDDDDD');
//     iframeDocument.querySelector('.ndfHFb-c4YZDc-i5oIFb.ndfHFb-c4YZDc-e1YmVc .ndfHFb-c4YZDc-Wrql6b-AeOLfc-b0t70b .ndfHFb-c4YZDc-GSQQnc-LgbsSe').style.backgroundColor = '#000000';
// })