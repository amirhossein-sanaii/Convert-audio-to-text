// alert('سلام برای تاییپ صوتی از صحبت کردن و برای اتمام ان از ایست استفاده کنید')
const audio = new Audio();
const audioError = new Audio();

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'fa-IR';
recognition.interimResults = false;
recognition.maxAlternatives = 10;
const addBtn = document.querySelector('.add')
const stopBtn = document.querySelector('.stop')
const copyBtn = document.querySelector('.copyBtn')
const textarea = document.querySelector('#textarea')
let textareaValue = ''
let i = 0

addBtn.addEventListener('click', () => {
    recognition.start();

    recognition.onresult = function(event) {
        console.log(event.results);
        textareaValue = textareaValue + event.results[i][0].transcript
        textarea.value = textareaValue
        i++
    }
})

stopBtn.addEventListener('click', () => {
    i = 0
    recognition.stop()
})


copyBtn.addEventListener('click', () => {

    var copyText = textarea
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
})

var msg = new SpeechSynthesisUtterance();
msg.text = "Hello"
window.speechSynthesis.speak(msg);