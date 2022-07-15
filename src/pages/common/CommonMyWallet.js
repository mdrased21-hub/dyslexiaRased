import React, { useState } from 'react';
import ReactCreditCards from 'react-credit-cards';
import Payment from 'payment';
import { useFormik } from 'formik';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../components/bootstrap/Modal';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import ReactCreditCardsContainer from '../../components/extras/ReactCreditCardsContainer';
import useDarkMode from '../../hooks/useDarkMode';

const validate = (values) => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length < 7) {
		errors.name = 'Must be 5 characters or more';
	} else if (!values.name.includes(' ')) {
		errors.name = 'Must contain first and last name';
	}

	if (!values.number || values.number.includes('_')) {
		errors.number = 'Required';
	} else if (Payment.fns.validateCardNumber(values.number)) {
		errors.number = 'Invalid Card Number';
	}

	if (!values.cvc) {
		errors.cvc = 'Required';
	} else if (values.cvc.toString().length !== 3) {
		errors.cvc = 'Must be 3 characters';
	}

	if (!values.expiry || values.expiry.includes('_')) {
		errors.expiry = 'Required';
	} else if (parseInt(values.expiry.slice(-2), 10) <= 20) {
		errors.expiry = 'Must be valid date';
	}

	return errors;
};

const CommonMyWallet = () => {
	const { darkModeStatus } = useDarkMode();

	const [cardList, setCardList] = useState([
		{
			id: 1,
			name: 'John Doe',
			number: '4134 1111 1111 1134',
			expiry: '12/21',
			cvc: 123,
		},
		{
			id: 2,
			name: 'John Doe',
			number: '5534 1111 1111 1198',
			expiry: '12/24',
			cvc: 234,
		},
		{
			id: 3,
			name: 'John Doe',
			number: '3700 000000 00002',
			expiry: '12/24',
			cvc: 234,
		},
	]);
	const [selectedCardId, setSelectedCardId] = useState(2);
	const [modalStatus, setModalStatus] = useState(false);
	const selectedCard = cardList.find((f) => f.id === selectedCardId);

	const formik = useFormik({
		initialValues: {
			name: '',
			number: '',
			expiry: '',
			cvc: '',
		},
		validate,
		onSubmit: () => {
			setCardList([...cardList, { id: cardList.length + 1, ...formik.values }]);
		},
	});
	const [focused, setFocused] = useState('number');
	const handleInputFocus = ({ target }) => setFocused(target.name);

	return (
		<>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='Style' iconColor='info'>
						<CardTitle>My Wallet</CardTitle>
					</CardLabel>
					<CardActions>
						<Button
							color='info'
							icon='CreditCard'
							isLight
							onClick={() => setModalStatus(true)}>
							Add New
						</Button>
					</CardActions>
				</CardHeader>
				<CardBody>
					<div className='row g-3'>
						<div className='col-12'>
							<ReactCreditCardsContainer
								issuer={Payment.fns.cardType(selectedCard.number)}>
								<ReactCreditCards
									cvc={selectedCard.cvc}
									expiry={selectedCard.expiry}
									name={selectedCard.name}
									number={selectedCard.number.replace(/\d(?!(\d*)$)/g, '*')}
									preview
									issuer={Payment.fns.cardType(selectedCard.number)}
								/>
							</ReactCreditCardsContainer>
						</div>
						<div className='col-12'>
							<div
								className={classNames('rounded-3', {
									'bg-l10-dark': !darkModeStatus,
									'bg-dark': darkModeStatus,
								})}>
								<div className='row row-cols-2 g-3 pb-3 px-3 mt-0'>
									{cardList.map((c) => (
										<div key={c.id} className='col'>
											<Button
												color='dark'
												isLight={
													darkModeStatus
														? c.id === selectedCardId
														: c.id !== selectedCardId
												}
												className='w-100 text-capitalize'
												rounded={1}
												onClick={() => setSelectedCardId(c.id)}>
												{`${Payment.fns.cardType(
													c.number,
												)} - ${c.number.slice(
													Payment.fns.cardType(c.number) === 'amex'
														? -5
														: -4,
												)}`}
											</Button>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
			<Modal
				setIsOpen={setModalStatus}
				isOpen={modalStatus}
				size='xl'
				titleId='add-new-card'
				isCentered>
				<ModalHeader setIsOpen={setModalStatus}>
					<ModalTitle id='add-new-card'>Card List</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<div className='row'>
						<div className='col-md-6'>
							<ReactCreditCards
								cvc={formik.values.cvc}
								expiry={formik.values.expiry}
								name={formik.values.name}
								number={formik.values.number
									.toString()
									.replace(/\d(?!(\d*)$)/g, '*')}
								preview
								issuer={Payment.fns.cardType(formik.values.number)}
								focused={focused}
							/>
							<form className='row g-4' noValidate onSubmit={formik.handleSubmit}>
								<FormGroup className='col-12' id='name' label='Name'>
									<Input
										placeholder='Full Name'
										autoComplete='ccName'
										onChange={formik.handleChange}
										value={formik.values.name}
										onFocus={handleInputFocus}
										onBlur={formik.handleBlur}
										isValid={formik.isValid}
										isTouched={formik.touched.name}
										invalidFeedback={formik.errors.name}
										validFeedback='Looks good!'
									/>
								</FormGroup>
								<FormGroup className='col-6' id='number' label='Credit Card Number'>
									<Input
										type='text'
										mask={
											Payment.fns.cardType(formik.values.number) === 'amex'
												? '9999 999999 99999'
												: '9999 9999 9999 9999'
										}
										maskChar='_'
										autoComplete='cc-number'
										placeholder='Digit Numbers'
										required
										onChange={formik.handleChange}
										value={formik.values.number}
										onFocus={handleInputFocus}
										onBlur={formik.handleBlur}
										isValid={formik.isValid}
										isTouched={formik.touched.number}
										invalidFeedback={formik.errors.number}
										validFeedback='Looks good!'
									/>
								</FormGroup>
								<FormGroup className='col-3' id='cvc' label='CVC Number'>
									<Input
										type='number'
										autoComplete='cc-csc'
										placeholder='CVC Number'
										required
										onChange={formik.handleChange}
										value={formik.values.cvc}
										onFocus={handleInputFocus}
										onBlur={formik.handleBlur}
										isValid={formik.isValid}
										isTouched={formik.touched.cvc}
										invalidFeedback={formik.errors.cvc}
										validFeedback='Looks good!'
									/>
								</FormGroup>
								<FormGroup className='col-3' id='expiry' label='Expiry'>
									<Input
										type='text'
										autoComplete='cc-exp'
										placeholder='MM/YY'
										mask='99/99'
										required
										onChange={formik.handleChange}
										value={formik.values.expiry}
										onFocus={handleInputFocus}
										onBlur={formik.handleBlur}
										isValid={formik.isValid}
										isTouched={formik.touched.expiry}
										invalidFeedback={formik.errors.expiry}
										validFeedback='Looks good!'
									/>
								</FormGroup>
								<div className='col'>
									<Button
										type='submit'
										color='info'
										icon='Save'
										isDisable={!formik.isValid && !!formik.submitCount}>
										Save
									</Button>
								</div>
							</form>
						</div>
						<div className='col-md-6'>
							<table className='table table-modern table-hover'>
								<colgroup>
									<col style={{ width: 25 }} />
									<col style={{ width: 75 }} />
									<col />
									<col />
								</colgroup>
								<thead>
									<tr>
										<th>#</th>
										<th>Type</th>
										<th>Name</th>
										<th>Expiry</th>
									</tr>
								</thead>
								<tbody>
									{cardList.map((c, index) => (
										<tr key={c.id}>
											<td>{index + 1}</td>
											<td>
												<div
													className={`payment-type-${Payment.fns.cardType(
														c.number,
													)}`}
												/>
											</td>
											<td className='text-capitalize'>
												<div className='fw-bold fs-6 mb-0'>
													{Payment.fns.cardType(c.number)}
												</div>
												<div className='text-muted mt-n1'>
													<small>
														{c.number.slice(
															Payment.fns.cardType(c.number) ===
																'amex'
																? -5
																: -4,
														)}
													</small>
												</div>
											</td>
											<td>{c.expiry}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</ModalBody>
			</Modal>
		</>
	);
};

export default CommonMyWallet;
