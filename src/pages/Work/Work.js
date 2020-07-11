import React, { useEffect, useState, useCallback } from 'react'
import WorkItem from '../../components/WorkItem';
import { useWheel, preloadImages, getImg } from '../../utils';
import ChevronNav from '../../components/ChevronNav';

const contentful = require('contentful');

const client = contentful.createClient({
    space: 'kpsg6aooxb97',
    accessToken: 'G2Di1ss5TOjJRqWOQBPwYEFgoMXumtOW1XkDyqhrdaI'
});

export default ({ isMobile }) => {
    const [work, setWork] = useState([]);
    const [curr, setCurr] = useState(0);
    const [status, setStatus] = useState('idle');

    const changeCur = useCallback(dir => setCurr(c => {
        let newC = c + dir;
        if (newC < 0) return c;
        if (newC >= work.length) return c;
        return newC;
    }), [setCurr, work]);
    useWheel(changeCur);

    const prevDisabled = curr <= 0;
    const nextDisabled = curr >= work.length - 1;

    useEffect(() => {
        const getWork = async () => {
            setStatus('loading...');
            try {
                const res = await client.getEntries();
                const items = res.items.map(i => i.fields);
                setWork(items);
                await preloadImages(items);
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
                    {isMobile ?
                        <ChevronNav
                            prevDisabled={prevDisabled}
                            nextDisabled={nextDisabled}
                            handleClick={changeCur}
                        /> :
                        <div>
                            {!prevDisabled && <h1 className='outline prev'>{work[curr - 1].title}</h1>}
                            {!nextDisabled && <h1 className='outline next'>{work[curr + 1].title}</h1>}
                        </div>
                    }
                    <WorkItem
                        title={`${curr}: ${work[curr].title}`}
                        description={work[curr].description}
                        date={work[curr].date.split('T')[0]}
                        images={work[curr].images.map(img => getImg(img))}
                        key={curr}
                    />
                </React.Fragment>
            }
        </div>
    )
}