/* Accept Number */
export const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow only numeric characters (0-9)
    if (!/^[0-9]+$/.test(keyValue)) {
        event.preventDefault();
    }
};
/* N */
/* Formatted Address */
export const getAddress = (data) => {
    const formattedAddress = `${data?.city} ${data?.stateName}, ${data?.country}, ${data?.zipCode}`
    return formattedAddress
};

/* Voice Greeting Message */
export const speakGreetMessage = (name, inOut) => {
    // const message = inOut != "out" ? `Welcome, ${name}! We're glad to have you here.` : `Good Bye, ${name}! see you soon.`;

    // // Use Web Speech API to generate speech
    // const speechSynthesis = window.speechSynthesis;
    // const speechMessage = new SpeechSynthesisUtterance(message);

    // // Speak the message
    // speechSynthesis.speak(speechMessage);
};

export const checkSubAdminPermit = (userData, currentPageTitle) => {
    let updatedPermit = null
    userData?.access?.forEach((item) => {
        if (item?.title == currentPageTitle) {
            updatedPermit = item;
            return false;
        }
    });
    return updatedPermit
};

/* Pagination Button */
export const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
        return <b>PREV</b>;
    }
    if (type === 'next') {
        return <b>NEXT</b>;
    }
    return originalElement;
};

export const myLogger = (key, value) => {
    return console.log(`${key} : -> `, value);
};

export const blackColor = `#000`
export const whiteColor = `#fff`