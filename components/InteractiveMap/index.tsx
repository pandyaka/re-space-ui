import React, { FunctionComponent, useState, useEffect } from 'react';
import { Fade } from 'react-reveal';

import { InteractiveMapStyle } from './style';

interface MapProps {
    url: string;
    onLocationClick: (id: string) => void;
    w?: string;
    h?: string;
}

const InteractiveMap: FunctionComponent<MapProps> = (props: MapProps) => {
    const [svg, setSvg] = useState('');
    const [loading, setLoading] = useState(true);

    const { url, onLocationClick, h, w } = props;

    useEffect(() => {
        (async () => {
            const res = await fetch(url);
            const svgRes = await res.text();

            setLoading(false);
            setSvg(svgRes);
        })();
    }, []);

    useEffect(() => {
        if (svg.length) {
            setupClickHandler();
        }

        return () => {
            disassClickHandler();
        };
    }, [svg]);

    const locationClickHandler = (e) => {
        const id = (e.target as any).id as string;
        onLocationClick(id);
    };

    const setupClickHandler = () => {
        document.querySelectorAll('.hoverable').forEach((el) => {
            el.addEventListener('click', locationClickHandler);
        });
    };

    const disassClickHandler = () => {
        document.querySelectorAll('.hoverable').forEach((el) => {
            el.removeEventListener('click', locationClickHandler);
        });
    };

    return (
        <InteractiveMapStyle h={h} w={w}>
            <Fade when={!loading}>
                <div dangerouslySetInnerHTML={{ __html: svg }} />
            </Fade>
        </InteractiveMapStyle>
    );
};

export default InteractiveMap;
