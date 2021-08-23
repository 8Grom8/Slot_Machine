export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
export const triggerSlotRotation = (ref) => {
    const options = ref.children;
    const randomIdx = getRandomNumber(1,13);
    const chosenOption = options[randomIdx -1];
    const shift = -chosenOption.offsetTop;
    ref.style.top = `${shift}px`;
    return randomIdx;
};

export const debuggingSlotRotation = (ref) => {
    const options = ref.children;
    const chosenOption = options[6];
    const shift = -chosenOption.offsetTop;
    ref.style.top = `${shift}px`;
    return 7;
};
