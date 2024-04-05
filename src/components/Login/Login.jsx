import React, { useState } from 'react';
import './login.css'; // Ensure your styles are defined here

const Letter = ({ letter, onLetterClick }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(true);
		setTimeout(() => setIsClicked(false), 200); // Reset isClicked to false after 200 ms
		onLetterClick(letter);
	};

	return (
		<span
			className={`letter ${isClicked ? 'clicked' : ''}`}
			onClick={handleClick}
		>
			{letter}
		</span>
	);
};

const LoginPage = () => {
	const [input, setInput] = useState('');
	const [correctPassword, setCorrectPassword] = useState(false);
	const words = ["MASA", "FEJUJA"]; // Split the logo into words for separate lines
	const password = "MUMS";

	const handleLetterClick = (letter) => {
		const newInput = input + letter;
		if (newInput === password) {
			setCorrectPassword(true);
			setTimeout(() => {
				setCorrectPassword(false);
				setInput('');
			}, 1000);
			alert('Välkommen!');
		} else if (!password.startsWith(newInput)) {
			setInput('');
		} else {
			setInput(newInput);
		}
	};

	return (
		<div className={`logo ${correctPassword ? 'correct' : ''}`}>
			{words.map((word, wordIndex) => (
				<div key={wordIndex}>
					{word.split('').map((letter, index) => (
						<Letter key={index} letter={letter} onLetterClick={handleLetterClick} />
					))}
				</div>
			))}
		</div>
	);
};

export default LoginPage;
