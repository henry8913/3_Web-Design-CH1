//______//______//______//______//______//______//______//______//______//______//______//______//______//______//

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

document.addEventListener("DOMContentLoaded", function () {
    const altroSection = document.querySelector(".blog-sidebar .p-4:nth-of-type(3)");
    
    const twitterLink = Array.from(altroSection.querySelectorAll("a")).find(link => 
    link.textContent.trim().toLowerCase() === "twitter"
    );

    if (twitterLink) {
    twitterLink.remove();
    }
});

//______//______//______//______//______//______//______//______//______//______//______//______//______//______//

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

document.addEventListener("DOMContentLoaded", function () {
    const continuaLinks = document.querySelectorAll('a');

    continuaLinks.forEach(link => {
    if (link.textContent.trim() === "Continua a leggere") {
        link.addEventListener("click", function (event) {
        event.preventDefault();

        const parentElement = link.closest('.blog-post, .jumbotron, .row');
        if (parentElement) {
            parentElement.remove();
        }
        });
    }
    });
});

//______//______//______//______//______//______//______//______//______//______//______//______//______//______//

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

document.addEventListener("DOMContentLoaded", function () {
    const authorLinks = document.querySelectorAll('.blog-post-meta a');

    authorLinks.forEach(link => {
    link.addEventListener("mouseover", function () {
        alert(`Autore del post: ${link.textContent.trim()}`);
    });
    });
});

//______//______//______//______//______//______//______//______//______//______//______//______//______//______//