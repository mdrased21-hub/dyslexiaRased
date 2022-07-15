import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import HumansWebp from '../../../assets/img/scene8.webp';
import Humans from '../../../assets/img/scene8.png';
import { layoutMenu } from '../../../menu';

const Blank = () => {
	return (
		<PageWrapper title={layoutMenu.blank.text}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<p>Blank</p>
					</div>
					<div className='col-12 d-flex align-items-baseline justify-content-center'>
						<img
							srcSet={HumansWebp}
							src={Humans}
							alt='Humans'
							style={{ height: '70vh' }}
						/>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Blank;
