const startTableStyle = '<table>' + '\n';
const endTableStyle = '</table>';
const startTdStyle = '<td>' + '\n';
const endTdStyle = '</td>';
const paragraph = '\n';

const startAnchorLinkStyle = '<a href="#link(No.';
const endAnchorLinkStyle = '</a>'

const anchorSummary = '?utm_source=mailmagazine&utm_medium=email&utm_campaign=';
const endAnchorSummary = ')"';

const startAltTag = ' alt="';
const endAltTag = '"';

const url = document.querySelector('.urlValue');
url.value = '';

const number = document.querySelector('.numberValue');
number.value = '';

const idNumber = document.querySelector('.idNumberValue');
idNumber.value = '';

const eventName = document.querySelector('.eventValue');
eventName.value = '';

const imageUrl = document.querySelector('.imageUrl');
imageUrl.value = '';

const description = document.querySelector('.descriptionText');
description.value = '';

const message = document.querySelector('.setMessage');

const setGenerationButton = document.querySelector('.generationButton');
setGenerationButton.addEventListener('click', buttonClick);

function buttonClick()
{
    message.innerText = startTableStyle + startTdStyle + startAnchorLinkStyle + eventName.value + url.value + anchorSummary + number.value + ',' + idNumber.value + endAnchorSummary + '>' + '<img src="' + imageUrl.value + '"' + startAltTag + description.value + endAltTag + '>' + endAnchorLinkStyle + paragraph + endTdStyle + paragraph + endTableStyle;
};

buttonClick();

