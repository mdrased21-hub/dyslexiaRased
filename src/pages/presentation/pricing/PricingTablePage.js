import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';
import arrayShuffle from 'array-shuffle';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { dmsStudentMenu } from '../../../menu';
import Card, {
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
} from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../components/bootstrap/Modal';
import showNotification from '../../../components/extras/showNotification';
import { db } from '../../../firebase-config';
import Icon from '../../../components/icon/Icon';
import Spinner from '../../../components/bootstrap/Spinner';
import Select from '../../../components/bootstrap/forms/Select';

const PricingTablePage = () => {
	const { id } = useParams();

	const quizzes = useSelector((state) => state.quizzes);
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();

	const data = quizzes.data?.filter((quiz) => quiz.id === id)[0];

	const [questionIndex, setQuestionIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [answer, setAnswer] = useState(['', '', '', '', '']);
	const [isAnswer, setIsAnswer] = useState(false);
	const [isLoading, setIsloading] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);
	const [answerOptions, setAnswerOptions] = useState([]);

	useEffect(() => {
		const array = [
			{ value: data.q1, text: data.q1 },
			{ value: data.q2, text: data.q2 },
			{ value: data.q3, text: data.q3 },
			{ value: data.q4, text: data.q4 },
			{ value: data.q5, text: data.q5 },
		];
		const shuffled = arrayShuffle(array);
		setAnswerOptions(shuffled);
	}, [questionIndex, data]); // Automate Process

	const micHandler = () => {
		if (listening) {
			SpeechRecognition.stopListening();
		} else {
			SpeechRecognition.startListening();
		}
	};

	const prevHandler = () => {
		if (data.category === 'Reading') {
			if (listening) {
				SpeechRecognition.stopListening();
			}

			resetTranscript();
		}

		setQuestionIndex(questionIndex - 1);
	};

	const nextHandler = () => {
		if (data.category === 'Reading') {
			if (listening) {
				SpeechRecognition.stopListening();
			}

			resetTranscript();
		}

		setQuestionIndex(questionIndex + 1);
	};

	const answerHandler = () => {
		const newArr = [...answer];
		newArr[questionIndex] = transcript; // Answer Handling
		setAnswer(newArr);
		setIsAnswer(false);
	};

	const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
		useSpeechRecognition();

	if (!browserSupportsSpeechRecognition) {
		setIsOpen(true);
	}

	const { speak, speaking } = useSpeechSynthesis();

	useEffect(() => {
		if (transcript && !listening) {
			setIsAnswer(true);
		}
	}, [listening, transcript]);

	const submit = async () => {
		let marks = 0;

		// Marks Calculation of Reading And Listening

		if (data.category === 'Reading') {
			let points = 0;
			let totalWords = 0;

			answer.forEach((item, index) => {
				const question = data[`q${index + 1}`].split(' ');
				const ans = item.split(' ');
				totalWords += question.length;

				question.forEach((q) => {
					ans.forEach((a) => {
						if (q.toString().toLowerCase().includes(a.toLowerCase())) {
							points += 1;
						}
					});
				});
			});

			marks = parseInt(((points / totalWords) * 10).toFixed(0), 10);
		} else {
			answer.forEach((item, index) => {
				if (data[`q${index + 1}`] === item) {
					marks += 2;
				}
			});
		}

		setIsloading(true);

		try {
			addDoc(collection(db, 'marks'), {
				studentId: user.data.id,
				marks: marks, // eslint-disable-line object-shorthand
				quizName: data.name,
				quizId: id,
				category: data.category,

				createdAt: serverTimestamp(),
			});

			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Saved Successfully</span>
				</span>,
				'Marks have been successfully saved.',
			);

			navigate(`/${dmsStudentMenu.studentDetails.path}`);
		} catch (error) {
			showNotification(
				'Notice', // String, HTML or Component
				error.message, // String, HTML or Component
				'danger', // 'default' || 'info' || 'warning' || 'success' || 'danger',
			);
		}

		setIsloading(false);
	};

	return (
		<PageWrapper title={dmsStudentMenu.quizList.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Button
						color='info'
						isLink
						icon='ArrowBack'
						tag='a'
						to={`../${dmsStudentMenu.quizList.path}`}>
						Back to List
					</Button>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row d-flex align-items-center justify-content-center'>
					<div className='col-12 my-3'>
						<div className='display-4 fw-bold py-3'>{data.name}</div>
					</div>
					<div className='col-md-6'>
						{data.category === 'Reading' ? (
							<Card>
								<CardHeader borderSize={1}>
									<div className='col text-center py-4'>
										<div className='h3 fw-bold'>
											Question {questionIndex + 1}/5
										</div>
										<div className='h5 fw-light mt-3'>
											Press mic button below and start speaking the sentence.
											<br />
											You can change your answer by pressing the mic button
											again.
										</div>
										<Button
											className='mt-3'
											icon={`${listening ? 'Mic' : 'MicOff'}`}
											color='info'
											isOutline={!listening}
											size='lg'
											onClick={() => micHandler()}
										/>
										<div className='h5 mt-3'>
											Microphone: {listening ? 'On' : 'Off'}
										</div>
									</div>
								</CardHeader>
								<CardBody>
									<div className='row g-5 pt-4 text-center flex-column'>
										<div className='col-auto mx-auto'>
											<h3 className='display-1 fw-bold'>
												{data[`q${questionIndex + 1}`]}
											</h3>
										</div>
										<div className='col-8 mx-auto fs-3'>
											Your answer:{' '}
											<span className='text-primary fw-bold'>
												{listening ? transcript : answer[questionIndex]}
											</span>
										</div>
									</div>
								</CardBody>
								<CardFooter>
									{questionIndex !== 0 && (
										<CardFooterLeft>
											<Button
												color='info'
												isOutline
												onClick={() => prevHandler()}>
												Previous
											</Button>
										</CardFooterLeft>
									)}
									{questionIndex !== 4 ? (
										<CardFooterRight>
											<Button color='info' onClick={() => nextHandler()}>
												Next
											</Button>
										</CardFooterRight>
									) : (
										<CardFooterRight>
											<Button
												color='info'
												onClick={() => {
													const hasEmpty = answer.filter(
														(element) => element === '',
													);
													if (hasEmpty.length > 0) {
														showNotification(
															'Notice', // String, HTML or Component
															'You need to answer all questions before submit.', // String, HTML or Component
															'warning', // 'default' || 'info' || 'warning' || 'success' || 'danger',
														);
														return;
													}
													setIsSubmit(true);
												}}>
												Submit
											</Button>
										</CardFooterRight>
									)}
								</CardFooter>
							</Card>
						) : (
							<Card>
								<CardHeader borderSize={1}>
									<div className='col text-center py-4'>
										<div className='h3 fw-bold'>
											Question {questionIndex + 1}/5
										</div>
										<div className='h5 fw-light'>
											Press play button below and start listening.
											<br />
											Select sentence that match with the audio sound.
										</div>
										<Button
											className='mt-3'
											icon='PlayArrow'
											color='info'
											size='lg'
											onClick={() => {
												if (!speaking) {
													speak({ text: data[`q${questionIndex + 1}`] });
												}
											}}
										/>
									</div>
								</CardHeader>
								<CardBody>
									<div className='row g-5 pt-4 text-center flex-column'>
										<div className='col-8 mx-auto fs-3'>
											<Select
												placeholder='Select Answer'
												ariaLabel='Select Answer'
												list={answerOptions}
												size='lg'
												onChange={(e) => {
													const newArr = [...answer];
													newArr[questionIndex] = e.target.value;
													setAnswer(newArr);
												}}
												value={answer[questionIndex]}
											/>
										</div>
									</div>
								</CardBody>
								<CardFooter>
									{questionIndex !== 0 && (
										<CardFooterLeft>
											<Button
												color='info'
												isOutline
												onClick={() => prevHandler()}>
												Previous
											</Button>
										</CardFooterLeft>
									)}
									{questionIndex !== 4 ? (
										<CardFooterRight>
											<Button color='info' onClick={() => nextHandler()}>
												Next
											</Button>
										</CardFooterRight>
									) : (
										<CardFooterRight>
											<Button
												color='info'
												onClick={() => {
													const hasEmpty = answer.filter(
														(element) => element === '',
													);
													if (hasEmpty.length > 0) {
														showNotification(
															'Notice', // String, HTML or Component
															'You need to answer all questions before submit.', // String, HTML or Component
															'warning', // 'default' || 'info' || 'warning' || 'success' || 'danger',
														);
														return;
													}
													setIsSubmit(true);
												}}>
												Submit
											</Button>
										</CardFooterRight>
									)}
								</CardFooter>
							</Card>
						)}
					</div>
				</div>
			</Page>

			<Modal isOpen={isOpen} setIsOpen={setIsOpen} isStaticBackdrop isCentered isAnimation>
				<ModalHeader
					setIsOpen={setIsOpen} // Example: setState
				>
					<ModalTitle id='notice'>Attention</ModalTitle>
				</ModalHeader>
				<ModalBody>Browser doesn't support speech recognition.</ModalBody>
				<ModalFooter>
					<Button
						color='info'
						onClick={() => navigate(`../${dmsStudentMenu.quizList.path}`)}>
						Okay
					</Button>
				</ModalFooter>
			</Modal>

			<Modal
				isOpen={isAnswer}
				setIsOpen={setIsAnswer}
				isStaticBackdrop
				isCentered
				isAnimation>
				<ModalHeader
					setIsOpen={setIsAnswer} // Example: setState
				>
					<ModalTitle id='notice'>Notice</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<p className='text-center fs-4'>
						Use this as your answer?
						<br />
						<span className='fs-3 fw-bold text-primary'>{transcript}</span>
					</p>
				</ModalBody>
				<ModalFooter>
					<CardFooterLeft>
						<Button color='info' onClick={() => setIsAnswer(false)} isOutline>
							Cancel
						</Button>
					</CardFooterLeft>
					<CardFooterRight>
						<Button color='info' onClick={answerHandler}>
							Yes
						</Button>
					</CardFooterRight>
				</ModalFooter>
			</Modal>

			<Modal
				isOpen={isSubmit}
				setIsOpen={setIsSubmit}
				isStaticBackdrop
				isCentered
				isAnimation>
				<ModalHeader
					setIsOpen={setIsSubmit} // Example: setState
				>
					<ModalTitle id='notice'>Notice</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<p className='text-center fs-4'>
						Satisfied with your answer?
						<br />
						Are you sure want to submit?
					</p>
				</ModalBody>
				<ModalFooter>
					<CardFooterLeft>
						<Button color='info' onClick={() => setIsSubmit(false)} isOutline>
							Cancel
						</Button>
					</CardFooterLeft>
					<CardFooterRight>
						<Button color='info' onClick={submit} isDisable={isLoading}>
							{!isLoading ? 'Yes' : <Spinner isSmall />}
						</Button>
					</CardFooterRight>
				</ModalFooter>
			</Modal>
		</PageWrapper>
	); // yes & Cancel
};

export default PricingTablePage;
