import React, { FunctionComponent, useState } from 'react';

import { AllSpaceStyle, AllSpaceTitle, CardGallery } from './style';
import SpaceCard from '@components/SpaceCard';
import SpaceModal from '@components/SpaceModal';

const AllSpace: FunctionComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen((s) => !s);
    };

    return (
        <AllSpaceStyle>
            <AllSpaceTitle>Available Spaces</AllSpaceTitle>
            <CardGallery>
                {[...Array(10).keys()].map((el, idx) => (
                    <SpaceCard onClick={handleModal} key={idx} />
                ))}
            </CardGallery>
            <SpaceModal isOpen={isModalOpen} toggleModal={handleModal} />
        </AllSpaceStyle>
    );
};

export default AllSpace;
