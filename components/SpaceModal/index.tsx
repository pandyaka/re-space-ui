import React, { SFC } from 'react';

import INTERVALS from 'common/intervals';
import {
    ModalStyle,
    PictureGrid,
    Cover,
    SpaceInfoGrid,
    PriceTag,
    RentDialog,
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
import Space from '@interfaces/space';
import { idrFormatter } from 'utils';
import { Button } from '@components/Button';

interface SpaceModal {
    isOpen: boolean;
    modalSpace: Space;
    toggleModal: () => void;
}

const SpaceModal: SFC<SpaceModal> = (props: SpaceModal) => {
    const { isOpen, modalSpace, toggleModal } = props;

    if (!modalSpace) return null;
    console.log(modalSpace);
    const { image_url, name, price, allowed_tenant_type } = modalSpace;

    return (
        <ModalStyle isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
            <VerticalScrollContainer height="40%">
                <PictureGrid>
                    <Cover img={`${image_url[0]}`} w="500px" h="100%" />
                    {image_url.map((el, idx) => (
                        <Image key={idx} img={`${el}`} w="250px" h="100%" />
                    ))}
                </PictureGrid>
            </VerticalScrollContainer>
            <SpaceInfoGrid>
                <SpaceInfo>
                    <SpaceInfoTitle>{name}</SpaceInfoTitle>
                    <span>Plasa Indonesia</span>
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
                        {allowed_tenant_type.map((el, idx) => (
                            <div key={idx}>
                                <SpaceTypeIcon type={el} size="35px" />
                                <AllowedTenantText>{el}</AllowedTenantText>
                            </div>
                        ))}
                    </AllowedTenantGrid>
                </SpaceInfo>
                <RentGridItem>
                    <RentDialog>
                        <PriceTag color="pink">{idrFormatter(price)}</PriceTag>
                        <Dropdown
                            formKey="interval"
                            list={INTERVALS}
                            handleChange={(key, value) => console.log(value)}
                        />
                        <Button w="232px" h="auto" c="white" bc="pink" ph="Rent" href="/dashboard" />
                    </RentDialog>
                </RentGridItem>
            </SpaceInfoGrid>
        </ModalStyle>
    );
};

export default SpaceModal;
