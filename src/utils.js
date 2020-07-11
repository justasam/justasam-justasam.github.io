const { useEffect } = require("react")

// function to throttle
const throttled = (delay, fn) => {
    let lastCall = 0;
    return function (...args) {
        const now = (new Date()).getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(...args);
    }
}

const useWheel = (cb) => {
    // -1 down, 1 up
    useEffect(() => {
        const handleWheel = throttled(200, (ev) => {
            if (ev.deltaY < 0) {
                // downscroll
                cb(-1)
            } else {
                // upscroll
                cb(1)
            }
        });

        window.addEventListener('wheel', handleWheel);

        return () => {
            console.log('destroyed');
            window.removeEventListener('wheel', handleWheel);
        }
    }, [cb]);
}

// gets image src from contentful image
// images from contentful are stored
// in fields/file/url
const getImg = (img) => {
    return 'https:' + img.fields.file.url
};

const preloadImages = async (items) => {
    let promises = items.map(({ images }) => {
        let image = new Image();
        image.src = getImg(images[0]);

        return new Promise((res, _) => {
            image.onload = () => {
                image.remove();
                res();
            }
        });
    });

    return Promise.all(promises);
}


export { throttled, useWheel, getImg, preloadImages };