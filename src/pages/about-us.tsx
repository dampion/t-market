// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import BlockReviews from '~/components/blocks/BlockReviews';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockTeammates from '~/components/blocks/BlockTeammates';
import Decor from '~/components/shared/Decor';
import PageTitle from '~/components/shared/PageTitle';
import { baseUrl } from '~/services/utils';
import theme from '~/data/theme';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>
                About Us
            </PageTitle>

            <div className="about">
                <div className="about__body">
                    <div className="about__image">
                        <div
                            className="about__image-bg"
                            style={{
                                backgroundImage: `url(${baseUrl('https://red-parts.react.themeforest.scompiler.ru/themes/red/images/about.jpg')})`,
                            }}
                        />
                        <Decor className="about__image-decor" type="bottom" />
                    </div>

                    <div className="about__card">
                        <div className="abobut__card-title">About Us</div>
                        <div className="about__card-text">
                            {theme.contacts.comment[0]}
                        </div>
                        <div className="about__card-author">Will Smith, CEO Tranzac</div>
                        <div className="about__card-signature">
                            <AppImage src="/images/Tranzac logo_edit.svg" width="160" height="55" />
                        </div>
                    </div>

                    <div className="about__indicators">
                        <div className="about__indicators-body">
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">9987</div>
                                <div className="about__indicators-item-title">Stores around the world</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">89 653</div>
                                <div className="about__indicators-item-title">Original auto parts</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">115 350</div>
                                <div className="about__indicators-item-title">Satisfied customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="divider-xl" />

            <BlockTeammates />

            <BlockSpace layout="divider-xl" />

            <BlockReviews />

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
