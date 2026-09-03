function formatDate(date) {
    return date.toLocaleString("en-US");
}

window.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("last-modified-footer");

    const modifiedDate = new Date(document.lastModified);
    const currentDate = new Date();

    const diffMs = currentDate - modifiedDate;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    footer.innerHTML = `
        Last Modified: ${formatDate(modifiedDate)}<br>
        Current Date: ${formatDate(currentDate)}<br>
        Days Since Update: ${diffDays}
    `;
});