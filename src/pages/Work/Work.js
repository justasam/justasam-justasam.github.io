import React, { useEffect, useState } from 'react'
import CarouselItem from '../../components/CarouselItem/CarouselItem';

const contentful = require('contentful');

const client = contentful.createClient({
    space: 'kpsg6aooxb97',
    accessToken: 'G2Di1ss5TOjJRqWOQBPwYEFgoMXumtOW1XkDyqhrdaI'
});

// gets image src from contentful image
const getImg = (img) => {
    return 'https:' + img.fields.file.url
};

// Preloads images used
const preloadImages = async (items) => {
    // images from contentful are stored
    // in fields/file/url
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

const positions = [
    'center',
    'top',
    'bot'
];


export default () => {
    const [work, setWork] = useState([]);
    const [curr, setCurr] = useState(0);
    const [status, setStatus] = useState('idle');

    // set to handle edge cases where < 3 elements
    let indexes = new Set();
    indexes.add(curr);
    indexes.add(Math.max(0, curr === 0 ? work.length - 1 : curr - 1));
    indexes.add(curr + 1 > work.length - 1 ? 0 : curr + 1);
    indexes = Array.from(indexes);


    useEffect(() => {
        const scrollHandler = totSize => throttled(500, (ev) => {
            if (totSize === 0) return;

            if (ev.deltaY < 0) {
                // downscroll
                setCurr(c => Math.max(0, c === 0 ? totSize - 1 : c - 1))
            } else {
                // upscroll
                setCurr(c => c + 1 > totSize - 1 ? 0 : c + 1)
            }
        });

        const getWork = async () => {

            setStatus('loading...');
            try {
                const res = await client.getEntries();
                const items = res.items.map(i => i.fields);
                setWork(items);
                console.log(items);
                await preloadImages(items);
                window.addEventListener('wheel', scrollHandler(items.length));
                setStatus('done');
            }
            catch (err) {
                console.log(err);
                setStatus('Error has occured');
            }
        }

        getWork();

    }, []);

    return (
        <div>
            {status !== 'idle' && status !== 'done' && <h2
                style={{
                    fontSize: '6vw',
                }}
                className='centered'
            >{status}</h2>}
            {status === 'done' &&
                <React.Fragment>
                    {indexes.map((i, index) =>
                        <CarouselItem
                            title={`${i}: ${work[i].title}`}
                            description={work[i].description}
                            date={work[i].date.split('T')[0]}
                            images={work[i].images.map(img => getImg(img))}
                            position={positions[index]}
                            key={i}
                        />
                    )}
                </React.Fragment>
            }
        </div>
    )
}