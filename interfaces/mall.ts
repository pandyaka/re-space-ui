import Space from './space';

interface Mall {
    id: string;
    name: string;
    class: string;
    location: string;
    highlights: string;
    image_url: string[];
    map_url: string[];
    spaces: Space[];
}

export default Mall;
