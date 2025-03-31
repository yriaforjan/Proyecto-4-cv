export const linkPage = (id, page) => {
    const link = document.getElementById(id);
    if (link) {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
            });
            page();
        });
    }
};