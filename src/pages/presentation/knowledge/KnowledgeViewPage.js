import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import data from './helper/dummyKnowledgeData';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Button from '../../../components/bootstrap/Button';
import Avatar from '../../../components/Avatar';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Badge from '../../../components/bootstrap/Badge';
import USERS from '../../../common/data/userDummyData';
import useDarkMode from '../../../hooks/useDarkMode';
import useTourStep from '../../../hooks/useTourStep';

const KnowledgeViewPage = () => {
	useTourStep(16);
	const { darkModeStatus } = useDarkMode();

	const { id } = useParams();
	const navigate = useNavigate();
	const itemData = data.filter((item) => item.id.toString() === id.toString());
	const item = itemData[0];

	return (
		<PageWrapper title={item.title}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => navigate(-1)}>
						Back to List
					</Button>
					<SubheaderSeparator />
					{!!item.tags &&
						// eslint-disable-next-line react/prop-types
						item.tags.map((tag) => (
							<div key={tag.text} className='col-auto'>
								<Badge isLight color={tag.color} className='px-3 py-2'>
									{tag.text}
								</Badge>
							</div>
						))}
				</SubHeaderLeft>
				<SubHeaderRight>
					<span className='text-muted fst-italic'>Written by</span>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<Avatar {...USERS.GRACE} size={32} />
					<span>
						<strong>{`${USERS.GRACE.name} ${USERS.GRACE.surname}`}</strong>
					</span>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='display-4 fw-bold pt-3 pb-5'>{item.title}</div>
				<div className='row g-4'>
					<div className='col-12'>
						<div
							className={classNames(
								'ratio ratio-21x9',
								'rounded-2',
								`bg-l${darkModeStatus ? 'o25' : '10'}-${item.color}`,
								'mb-3',
							)}>
							<img
								src={item.image}
								alt={item.title}
								width='100%'
								height='auto'
								className='object-fit-contain p-5'
							/>
						</div>
					</div>
					<div className='col-12'>
						<h3 className='text-muted'>{item.description}</h3>
					</div>
					<div className='col-12'>{item.content || null}</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default KnowledgeViewPage;
