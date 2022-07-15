import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import CommonHeaderRight from './CommonHeaderRight';
import Company1 from '../../../assets/logos/company1.png';

const ProductListHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				<img src={Company1} alt='Company' height={24} />
				<span>Products</span>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default ProductListHeader;
