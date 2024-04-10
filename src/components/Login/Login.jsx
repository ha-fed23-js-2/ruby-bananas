import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom'

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
	const [correctPassword, setCorrectPassword] = useState(false);
	const [isWrong, setIsWrong] = useState(false);
	const words = ["MASA", "FEJUJA"];
	const password = "MUMS";

	const handleLetterClick = (letter) => {
		const newInput = input + letter;
		if (newInput === password) {
			setCorrectPassword(true);
			setTimeout(() => {
				setCorrectPassword(false);
				setInput('');
			}, 600);
			alert('Välkommen!');
		} else if (!password.startsWith(newInput)) {
			setIsWrong(true);
			setInput('');
			setTimeout(() => setIsWrong(false), 600);
		} else {
			setInput(newInput);
		}
	};

	return (


		<section className='login-container'>


				<header>
					<div>
						<Link to="/"><button>Back</button></Link>
					</div>
					<div className='logo'>
						<img src="./logo.png" />
					</div>

				</header>

		<div className={`logo ${correctPassword ? 'correct' : ''}`}>
			{words.map((word, wordIndex) => (
				<div key={wordIndex}>
					{word.split('').map((letter, index) => (
						<Letter key={index} letter={letter} onLetterClick={handleLetterClick} isWrong={isWrong} />
					))}
				</div>


			))}
		</div>
		</section>


	);

};

export default LoginPage;
