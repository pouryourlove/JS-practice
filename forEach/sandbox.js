const sentences = document.querySelectorAll('p')

sentences.forEach((sentence) => {
    if(sentence.textContent.includes('error')) {
        sentence.classList.add('error')
    } else if( sentence.textContent.includes('success')){
        sentence.classList.add('success')
    }
})