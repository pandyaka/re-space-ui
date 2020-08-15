import React, { SFC } from 'react';

import INTERVALS from 'common/intervals';
import SPACE_TYPE from 'common/space-type';
import {
    ModalStyle,
    PictureGrid,
    Cover,
    SpaceInfoGrid,
    PriceTag,
    RentDialog,
    RentButton,
    SpaceInfo,
    SpaceInfoTitle,
    SpaceInfoSectionTitle,
    AllowedTenantGrid,
    AllowedTenantText,
    RentGridItem
} from './style';
import VerticalScrollContainer from '@components/VerticalScrollContainer';
import { Image } from '@components/Image';
import Dropdown from '@components/Dropdown';
import SpaceTypeIcon from '@components/SpaceTypeIcon';

interface SpaceModal {
    isOpen: boolean;
    toggleModal: () => void;
}

const SpaceModal: SFC<SpaceModal> = (props: SpaceModal) => {
    const { isOpen, toggleModal } = props;

    return (
        <ModalStyle isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
            <VerticalScrollContainer height="40%">
                <PictureGrid>
                    <Cover img="/images/space-placeholder.jpg" w="500px" h="100%" />
                    {[...Array(10).keys()].map((el, idx) => (
                        <Image key={idx} img="/images/space-placeholder.jpg" w="250px" h="100%" />
                    ))}
                </PictureGrid>
            </VerticalScrollContainer>
            <SpaceInfoGrid>
                <SpaceInfo>
                    <SpaceInfoTitle>Spot at Area 51</SpaceInfoTitle>
                    <span>Mall Kasablanka</span>
                    <SpaceInfoSectionTitle>Overview</SpaceInfoSectionTitle>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, exercitationem. Distinctio
                        fugiat soluta saepe totam natus perferendis unde debitis, beatae, quia ab nemo pariatur
                        mollitia! Nisi corrupti voluptas provident, libero est aspernatur at inventore perferendis!
                        Temporibus, explicabo facere! Officia magni nobis, vel voluptatum nam fugit nesciunt eius ipsam
                        animi error.
                    </p>
                    <SpaceInfoSectionTitle>Specification</SpaceInfoSectionTitle>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Ut enim minima cupiditate porro?</li>
                        <li>Quae voluptas excepturi deleniti unde.</li>
                        <li>Possimus cumque amet maxime necessitatibus?</li>
                        <li>Autem modi illo dignissimos esse!</li>
                    </ul>
                    <SpaceInfoSectionTitle>Allowed Tenant Type</SpaceInfoSectionTitle>
                    <AllowedTenantGrid>
                        {SPACE_TYPE.map((el, idx) => (
                            <div key={idx}>
                                <SpaceTypeIcon type={el} size="40px" />
                                <AllowedTenantText>{el}</AllowedTenantText>
                            </div>
                        ))}
                    </AllowedTenantGrid>
                </SpaceInfo>
                <RentGridItem>
                    <RentDialog>
                        <PriceTag color="pink">Rp 45jt/Month</PriceTag>
                        <Dropdown
                            formKey="interval"
                            list={INTERVALS}
                            handleChange={(key, value) => console.log(value)}
                        />
                        <RentButton w="232px" h="auto" c="white" bc="pink">
                            Rent
                        </RentButton>
                    </RentDialog>
                </RentGridItem>
            </SpaceInfoGrid>
        </ModalStyle>
    );
};

export default SpaceModal;
