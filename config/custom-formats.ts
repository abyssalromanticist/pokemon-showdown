// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.

aubriel was here. i will never die
*/

export const Formats: FormatList = [

	// Monster Hunter
	///////////////////////////////////////////////////////////////////

	{
		section: "Pet Mods",
	},
	{
		name: "[Gen 9] Monster Hunter",
		desc: `A mod that uses monsters from Monster Hunter Rise in lieu of Pokemon.`,
		mod: 'monhun',
		ruleset: ['Species Clause', 'HP Percentage Mod', 'Illusion Level Mod'],
	},
];
