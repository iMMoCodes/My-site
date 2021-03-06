import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

export const info = {
	titleOne: 'Trivia Game',
	titleTwo: 'Shopping Cart',
	titleThree: 'Tic Tac Toe',
	descOne: 'A four player trivia game with multiple difficulties and categories.',
	descTwo: 'Basic shopping site with working shopping cart.',
	descThree: 'A game of Tic Tac Toe for two.',
	liveLinkOne: 'https://immocodes-trivia.netlify.app/',
	liveLinkTwo: 'https://my-shopping-cart-app.netlify.app/',
	liveLinkThree: 'https://my-tac-tic-toc-game.netlify.app/',
	gitHubOne: 'https://github.com/iMMoCodes/trivia',
	gitHubTwo: 'https://github.com/iMMoCodes/Shopping-Cart',
	gitHubThree: 'https://github.com/iMMoCodes/Tic-Tac-Toe',
	html: <FontAwesomeIcon style={{ color: '#e34c26' }} icon={faHtml5} />,
	css: <FontAwesomeIcon style={{ color: '#264de4' }} icon={faCss3} />,
	js: <FontAwesomeIcon style={{ color: '#f0db4f' }} icon={faJsSquare} />,
	react: <FontAwesomeIcon style={{ color: '#61DBFB' }} icon={faReact} />,
	projectOneLearnings: {
		first: 'Basic React',
		second: 'How to use useState',
		third: 'How to use useEffect',
		fourth: 'How to fetch data from an API',
		fifth: 'Use of UI library',
		sixth: 'Use of props',
		seventh: 'Folder structure',
	},
	projectTwoLearnings: {
		first: 'How to use async / await',
		second: 'How to use fetch',
		third: 'How to use classes in JS',
		fourth: 'How to use local / session storage',
		fifth: 'How to use try / catch',
		sixth: 'Higher order functions',
		seventh: "How 'this' works (still not an expert)",
	},
	projectThreeLearnings: {
		first: 'Basic CSS',
		second: 'CSS variables',
		third: 'CSS Pseudo elements & Pseudo classes',
		fourth: 'Basic coding logic in JS',
	},
}
