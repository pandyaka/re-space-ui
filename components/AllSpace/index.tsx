import React, { FunctionComponent, useState } from 'react';

import { AllSpaceStyle, AllSpaceTitle, CardGallery } from './style';
import SpaceCard from '@components/SpaceCard';
import SpaceModal from '@components/SpaceModal';
import Space from '@interfaces/space';

interface AllSpaceProps {
    spaces: Space[];
}

const AllSpace: FunctionComponent<AllSpaceProps> = (props: AllSpaceProps) => {
    const { spaces } = props;
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalSpace, setModalSpace] = useState(null);

    const handleModal = (id) => {
        setModalSpace(spaces.find((el) => el.id === id));
        setModalOpen(true);
    };

    const toggleModal = () => {
        setModalOpen((s) => !s);
    };

    return (
        <AllSpaceStyle>
            <AllSpaceTitle>Available Spaces</AllSpaceTitle>
            <CardGallery>
                {spaces.map((space, idx) => (
                    <SpaceCard onClick={handleModal} key={idx} space={space} />
                ))}
            </CardGallery>
            <SpaceModal isOpen={isModalOpen} toggleModal={toggleModal} modalSpace={modalSpace} />
        </AllSpaceStyle>
    );
};

export default AllSpace;
