import React, { useState } from 'react'

import triviaImage from '../assets/img/trivia.png'
import shoppingImage from '../assets/img/shopping.png'
import ticTacToeImage from '../assets/img/game.png'

import { info } from '../constants/project-info'

const Projects = () => {
	const {
		titleOne,
		titleTwo,
		titleThree,
		descOne,
		descTwo,
		descThree,
		liveLinkOne,
		liveLinkTwo,
		liveLinkThree,
		gitHubOne,
		gitHubTwo,
		gitHubThree,
		html,
		css,
		js,
		react,
		projectOneLearnings,
		projectTwoLearnings,
		projectThreeLearnings,
	} = info

	// States
	const [title, setTitle] = useState(titleOne)
	const [description, setDescription] = useState(descOne)
	const [stackOne, setStackOne] = useState(react)
	const [stackTwo, setStackTwo] = useState(css)
	const [stackThree, setStackThree] = useState(js)
	const [projectImg, setProjectImg] = useState(triviaImage)
	const [liveLink, setLiveLink] = useState(liveLinkOne)
	const [gitHubLink, setGitHubLink] = useState(gitHubOne)
	const [projectLearn, setProjectLearn] = useState(projectOneLearnings)

	// Handle Button Clicks
	const handleProjectOne = () => {
		setTitle(titleOne)
		setDescription(descOne)
		setStackOne(react)
		setStackTwo(null)
		setStackThree(null)
		setProjectImg(triviaImage)
		setLiveLink(liveLinkOne)
		setGitHubLink(gitHubOne)
		setProjectLearn(projectOneLearnings)
	}
	// Handle Button Clicks
	const handleProjectTwo = () => {
		setTitle(titleTwo)
		setDescription(descTwo)
		setStackOne(html)
		setStackTwo(css)
		setStackThree(js)
		setProjectImg(shoppingImage)
		setLiveLink(liveLinkTwo)
		setGitHubLink(gitHubTwo)
		setProjectLearn(projectTwoLearnings)
	}
	// Handle Button Clicks
	const handleProjectThree = () => {
		setTitle(titleThree)
		setDescription(descThree)
		setStackOne(html)
		setStackTwo(css)
		setStackThree(js)
		setProjectImg(ticTacToeImage)
		setLiveLink(liveLinkThree)
		setGitHubLink(gitHubThree)
		setProjectLearn(projectThreeLearnings)
	}

	return (
		<main className='projects' id='projects'>
			<h1>Projects</h1>
			<div className='project-choice'>
				{/* Project Choosing Buttons */}
				<button onClick={handleProjectOne}>{titleOne}</button>
				<button onClick={handleProjectTwo}>{titleTwo}</button>
				<button onClick={handleProjectThree}>{titleThree}</button>
			</div>
			<section className='project-container'>
				<div className='project-text-area'>
					{/* Project Info */}
					<h2>{title}</h2>
					<h3>{description}</h3>
					<div className='project-info'>
						<div className='project-learned'>
							<h3>
								What
								I
								learned
								from
								this
								project
							</h3>
							<ul>
								<li>
									{
										projectLearn.first
									}
								</li>
								<li>
									{
										projectLearn.second
									}
								</li>
								<li>
									{
										projectLearn.third
									}
								</li>
								<li>
									{
										projectLearn.fourth
									}
								</li>
								<li>
									{
										projectLearn.fifth
									}
								</li>
								<li>
									{
										projectLearn.sixth
									}
								</li>
								<li>
									{
										projectLearn.seventh
									}
								</li>
							</ul>
						</div>
						{/* Project Stack */}
						<div className='project-stack'>
							<h3>
								Stacks
								used
							</h3>
							<ul>
								<li>
									{
										stackOne
									}
								</li>
								<li>
									{
										stackTwo
									}
								</li>
								<li>
									{
										stackThree
									}
								</li>
							</ul>
						</div>
					</div>
					{/* Live and Code Buttons */}
					<div className='project-buttons'>
						<a
							target='_blank'
							rel='noreferrer'
							href={
								liveLink
							}
						>
							View Live
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href={
								gitHubLink
							}
						>
							View Code
						</a>
					</div>
				</div>
				{/* Project Image */}
				<div className='project-img-area'>
					<img
						className='project-img'
						src={projectImg}
						alt='project'
					/>
				</div>
			</section>
			<div className='my-current-project'>
				<h1>My current project</h1>
				<h3>To view my current work project click on the buttons below</h3>
				<h4>Next project coming soon</h4>
				{/* <div className='my-current-project-buttons'>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://immocodes-trivia.netlify.app/'
					>
						View Live
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/iMMoCodes/trivia'
					>
						View Code
					</a>
				</div> */}
			</div>
		</main>
	)
}

export default Projects
