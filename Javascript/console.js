const label = input => {
	const [color, type, ...message] = input.split(' ');
	return [
		`%c${type} %c${message.join(' ')}`,
		`color: white; background: ${color}; padding-left: 5px; margin-right: 5px;`,
		''	
	];
};

console.log(...label('red error this is my message'));
console.log(...label('deepskyblue info this is my message'));