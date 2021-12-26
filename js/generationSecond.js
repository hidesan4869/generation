const startTableStyleSecond = '<table>' + '\n';
const endTableStyleSecond = '</table>';
const startTdStyleSecond = '<td>' + '\n';
const endTdStyleSecond = '</td>';
const paragraphSecond = '\n';

const startAnchorLinkStyleSecond = '<a href="#link(No.';
const endAnchorLinkStyleSecond = '</a>'

const anchorSummarySecond = '?utm_source=mailmagazine&utm_medium=email&utm_campaign=';
const endAnchorSummarySecond = ')"';

const startAltTagSecond = ' alt="';
const endAltTagSecond = '"';

const urlSecond = document.querySelector('.urlValueSecond');
urlSecond.value = '';

const numberSecond = document.querySelector('.numberValueSecond');
numberSecond.value = '';

const idNumberSecond = document.querySelector('.idNumberValueSecond');
idNumberSecond.value = '';

const eventNameSecond = document.querySelector('.eventValueSecond');
eventNameSecond.value = '';

const imageUrlSecond = document.querySelector('.imageUrlSecond');
imageUrlSecond.value = '';

const descriptionSecond = document.querySelector('.descriptionTextSecond');
descriptionSecond.value = '';

const messageSecond = document.querySelector('.setMessageSecond');

const startTableStyleThird = '<table>' + '\n';
const endTableStyleThird = '</table>';
const startTdStyleThird = '<td>' + '\n';
const endTdStyleThird = '</td>';
const paragraphThird = '\n';

const startAnchorLinkStyleThird = '<a href="#link(No.';
const endAnchorLinkStyleThird = '</a>'

const anchorSummaryThird = '?utm_source=mailmagazine&utm_medium=email&utm_campaign=';
const endAnchorSummaryThird = ')"';

const startAltTagThird = ' alt="';
const endAltTagThird = '"';

const urlThird = document.querySelector('.urlValueThird');
urlThird.value = '';

const numberThird = document.querySelector('.numberValueThird');
numberThird.value = '';

const idNumberThird = document.querySelector('.idNumberValueThird');
idNumberThird.value = '';

const eventNameThird = document.querySelector('.eventValueThird');
eventNameThird.value = '';

const imageUrlThird = document.querySelector('.imageUrlThird');
imageUrlThird.value = '';

const descriptionThird = document.querySelector('.descriptionTextThird');
descriptionThird.value = '';

const messageThird = document.querySelector('.setMessageThird');

const setGenerationButtonSecondColumn = document.querySelector('.generationButtonSecond');
setGenerationButtonSecondColumn.addEventListener('click', buttonClickSecondColumn);

function buttonClickSecondColumn()
{
    messageSecond.innerText = startTableStyleSecond + startTdStyleSecond + startAnchorLinkStyleSecond + eventNameSecond.value + urlSecond.value + anchorSummarySecond + numberSecond.value + ',' + idNumberSecond.value + endAnchorSummarySecond + '>' + '<img src="' + imageUrlSecond.value + '"' + startAltTagSecond + descriptionSecond.value + endAltTagSecond + '>' + endAnchorLinkStyleSecond + paragraphSecond + endTdStyleSecond + paragraphThird + startTdStyleThird + startAnchorLinkStyleThird + eventNameThird.value + urlThird.value + anchorSummaryThird + numberThird.value + ',' + idNumberThird.value + endAnchorSummaryThird + '>' + '<img src="' + imageUrlThird.value + '"' + startAltTagThird + descriptionThird.value + endAltTagThird + '>' + endAnchorLinkStyleThird + paragraphThird + endTdStyleThird + paragraphSecond + endTableStyleSecond;
};

buttonClickSecondColumn();


