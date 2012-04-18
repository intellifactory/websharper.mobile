function notifySilverlight(obj) {
    window.external.notify(JSON.stringify(obj));
}

function hasSilverlight() {
    try {
        window.external.notify("ping");
        return true;
    } catch (e) {
        return false;
    }
}
