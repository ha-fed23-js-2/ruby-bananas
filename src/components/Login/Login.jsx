import React, { useState } from 'react';
import './login.css';
import HeaderBack from '../HeaderBack/HeaderBack'
import { Link, useNavigate } from 'react-router-dom';

const Letter = ({ letter, onLetterClick, isWrong }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(true);
		setTimeout(() => setIsClicked(false), 200);
		onLetterClick(letter);
	};

	return (
		<span
			className={`letter ${isClicked ? 'clicked' : ''} ${isWrong ? 'wrong' : ''}`}
			onClick={handleClick}
		>
			{letter}
		</span>
	);
};

const LoginPage = () => {
	const [input, setInput] = useState('');
	const [isWrong, setIsWrong] = useState(false);
	const words = ["MASA", "FEJUJA"];
	const password = "MUMS";
	const navigate = useNavigate();

	const handleLetterClick = (letter) => {
		const newInput = input + letter;
		if (newInput === password) {
			navigate('/edit');
		} else if (!password.startsWith(newInput)) {
			setIsWrong(true);
			setInput('');
			setTimeout(() => setIsWrong(false), 600);
		} else {
			setInput(newInput);
		}
	};

	return (
		<>
			<HeaderBack/>
			<section className='login-container'>
				<div className={`passlogo ${isWrong ? 'wrong' : ''}`}>
					{words.map((word, wordIndex) => (
						<div key={wordIndex}>
							{word.split('').map((letter, index) => (
								<Letter key={index} letter={letter} onLetterClick={handleLetterClick} isWrong={isWrong} />
							))}
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default LoginPage;
