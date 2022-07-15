import React from 'react';
import { useFormik } from 'formik';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import BootstrapIcons from '../../../components/icon/bootstrap/iconList';
import CommonIconPreview from '../../../components/common/CommonIconPreview';
import { componentsMenu } from '../../../menu';

const BootstrapIconPage = () => {
	const formik = useFormik({
		initialValues: {
			filterIcon: '',
		},
	});

	const _filteredIcons = BootstrapIcons.filter((name) =>
		name.toLowerCase().includes(formik.values.filterIcon.toLowerCase()),
	);

	return (
		<PageWrapper title={componentsMenu.icons.subMenu.bootstrapIcon.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Icons', to: '/icons' },
							{ title: 'Bootstrap Icon', to: '/icons/bootstrap-icon' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row h-100'>
					<div className='col-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Lightbulb'>
									<CardTitle>
										icon <small>{_filteredIcons.length}</small>
									</CardTitle>
									<CardSubTitle>Icon</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Input
										name='filterIcon'
										placeholder='Filter icon...'
										aria-label='.form-control-lg example'
										onChange={formik.handleChange}
										value={formik.values.filterIcon}
									/>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{_filteredIcons.map((icon) => (
										<CommonIconPreview
											key={icon}
											icon={icon}
											forceFamily='bootstrap'
										/>
									))}
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default BootstrapIconPage;
