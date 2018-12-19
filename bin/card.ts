#!/usr/bin/env ts-node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from "chalk";
import boxen = require("boxen");

// Define options for Boxen
let options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
};
// Text + chalk definitions
let data = {
	name: chalk.white("Frederic Barthelemy /"),
	handle: chalk.cyan("@fbartho"),
	work: chalk.white("Lead Client, Staff Engineer at TaskRabbit"),
	twitter: chalk.cyan("https://twitter.com/fbartho"),
	github: chalk.cyan("https://github.com/fbartho"),
	linkedin: chalk.cyan("https://linkedin.com/in/fbartho"),
	web: chalk.cyan("https://fbartho.com"),
	npx: chalk.white("npx fbartho"),
	labelWork: chalk.white.bold("      Work:"),
	labelTwitter: chalk.white.bold("   Twitter:"),
	labelGitHub: chalk.white.bold("    GitHub:"),
	labelLinkedIn: chalk.white.bold("  LinkedIn:"),
	labelWeb: chalk.white.bold("       Web:"),
	labelCard: chalk.white.bold("      Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedIn = `${data.labelLinkedIn}  ${data.linkedin}`;
const web = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output = [
	heading,
	newline,
	working,
	twitter,
	github,
	linkedIn,
	// web,
	newline,
	carding,
].join(newline);

console.log(chalk.green(boxen(output, options)));
