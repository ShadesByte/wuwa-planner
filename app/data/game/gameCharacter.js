import { ITEM_IDS } from "@/data/game/constants/itemIDs";
import { MATERIAL_CATEGORIES } from "@/data/game/constants/materialCategories";

const CHAR_EXP = 'char_exp';

let baseCharLevellingMaterialsCount = [
	{ level: '1', materials: {} },
	{ level: '20', materials: { [CHAR_EXP]: 33300, [ITEM_IDS.SHELL_CREDIT]: 11655 } },
	{
		level: '20A',
		materials: {
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				1: 4,
			},
			[ITEM_IDS.SHELL_CREDIT]: 5000,
		},
	},
	{ level: '40', materials: { [CHAR_EXP]: 175500, [ITEM_IDS.SHELL_CREDIT]: 61425 } },
	{
		level: '40A',
		materials: {
			[MATERIAL_CATEGORIES.ASCENSION]: 3,
			[MATERIAL_CATEGORIES.OVERWORLD]: 4,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				2: 4,
			},
			[ITEM_IDS.SHELL_CREDIT]: 10000,
		},
	},
	{ level: '50', materials: { [CHAR_EXP]: 188300, [ITEM_IDS.SHELL_CREDIT]: 65905 } },
	{
		level: '50A',
		materials: {
			[MATERIAL_CATEGORIES.ASCENSION]: 6,
			[MATERIAL_CATEGORIES.OVERWORLD]: 8,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				2: 8,
			},
			[ITEM_IDS.SHELL_CREDIT]: 15000,
		},
	},
	{ level: '60', materials: { [CHAR_EXP]: 286600, [ITEM_IDS.SHELL_CREDIT]: 100310 } },
	{
		level: '60A',
		materials: {
			[MATERIAL_CATEGORIES.ASCENSION]: 9,
			[MATERIAL_CATEGORIES.OVERWORLD]: 12,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 4,
			},
			[ITEM_IDS.SHELL_CREDIT]: 20000,
		},
	},
	{ level: '70', materials: { [CHAR_EXP]: 413000, [ITEM_IDS.SHELL_CREDIT]: 144550 } },
	{
		level: '70A',
		materials: {
			[MATERIAL_CATEGORIES.ASCENSION]: 12,
			[MATERIAL_CATEGORIES.OVERWORLD]: 16,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 8,
			},
			[ITEM_IDS.SHELL_CREDIT]: 40000,
		},
	},
	{ level: '80', materials: { [CHAR_EXP]: 572400, [ITEM_IDS.SHELL_CREDIT]: 200340 } },
	{
		level: '80A',
		materials: {
			[MATERIAL_CATEGORIES.ASCENSION]: 16,
			[MATERIAL_CATEGORIES.OVERWORLD]: 20,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				4: 4,
			},
			[ITEM_IDS.SHELL_CREDIT]: 80000,
		},
	},
	{ level: '90', materials: { [CHAR_EXP]: 768900, [ITEM_IDS.SHELL_CREDIT]: 269115 } },
];

export const activeSkillLevellingMaterialsCount = [
	{ level: 1, materials: {} },
	{
		level: 2,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 1500,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				1: 2,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				1: 2,
			},
		},
	},
	{
		level: 3,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 2000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				1: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				1: 3,
			},
		},
	},
	{
		level: 4,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 4500,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				2: 2,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				2: 2,
			},
		},
	},
	{
		level: 5,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 6000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				2: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				2: 3,
			},
		},
	},
	{
		level: 6,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 16000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 2,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				3: 3,
			},
		},
	},
	{
		level: 7,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 30000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				3: 5,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
	{
		level: 8,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 50000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				4: 2,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				4: 2,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
	{
		level: 9,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 70000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
	{
		level: 10,
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 100000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				4: 4,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				4: 6,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
];

export const passiveSkillLevellingMaterialsCount = {
	passive_skill_1: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 10000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				2: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				2: 3,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
	passive_skill_2: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 20000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				3: 3,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
	bonus_stat_tier_1_stat_1: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 50000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				3: 3,
			},
		},
	},
	bonus_stat_tier_1_stat_2: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 50000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				3: 3,
			},
		},
	},
	bonus_stat_tier_1_stat_3: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 50000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				3: 3,
			},
		},
	},
	bonus_stat_tier_1_stat_4: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 50000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				3: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				3: 3,
			},
		},
	},
	bonus_stat_tier_2_stat_1: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 100000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
	bonus_stat_tier_2_stat_2: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 100000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
	bonus_stat_tier_2_stat_3: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 100000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
	bonus_stat_tier_2_stat_4: {
		materials: {
			[ITEM_IDS.SHELL_CREDIT]: 100000,
			[MATERIAL_CATEGORIES.ENEMY_DROP]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.FORGERY]: {
				4: 3,
			},
			[MATERIAL_CATEGORIES.WEEKLY_BOSS]: 1,
		},
	},
};

export const activeSkills = [
	'basic_attack',
	'resonance_skill',
	'forte_circuit',
	'resonance_liberation',
	'intro_skill',
];

export const passiveSkills = [
	'passive_skill_1',
	'bonus_stat_tier_1_stat_1',
	'bonus_stat_tier_1_stat_2',
	'bonus_stat_tier_1_stat_3',
	'bonus_stat_tier_1_stat_4',
	'passive_skill_2',
	'bonus_stat_tier_2_stat_1',
	'bonus_stat_tier_2_stat_2',
	'bonus_stat_tier_2_stat_3',
	'bonus_stat_tier_2_stat_4',
];

export const tieredPassiveSkills = {
	tier_1: [
		'passive_skill_1',
		'bonus_stat_tier_1_stat_1',
		'bonus_stat_tier_1_stat_2',
		'bonus_stat_tier_1_stat_3',
		'bonus_stat_tier_1_stat_4',
	],
	tier_2: [
		'passive_skill_2',
		'bonus_stat_tier_2_stat_1',
		'bonus_stat_tier_2_stat_2',
		'bonus_stat_tier_2_stat_3',
		'bonus_stat_tier_2_stat_4',
	],
};

// Import new constants
import { CHARACTER_IDS } from '@/data/game/constants/characterIDs';

import gameCharacterRawData from '@/data/game/raw/character.json';

export const characters = gameCharacterRawData;

export function charLevellingMaterialsCount(characterName = '') {
	// here is characters that have custom modifiers

	// ROVER

	const isRover = [
		CHARACTER_IDS.ROVER_AERO_MALE,
		CHARACTER_IDS.ROVER_AERO_FEMALE,
		CHARACTER_IDS.ROVER_HAVOC_MALE,
		CHARACTER_IDS.ROVER_HAVOC_FEMALE,
		CHARACTER_IDS.ROVER_SPECTRO_MALE,
		CHARACTER_IDS.ROVER_SPECTRO_FEMALE,
	].includes(characterName);
	
	// Fallback: keep the startsWith check for backward compatibility, but rely on the IDs primarily
	if (
		isRover || (typeof characterName === 'string' && characterName.toLowerCase().startsWith('rover'))
	) {
		// deep copy the data. smh.
		let data = JSON.parse(JSON.stringify(baseCharLevellingMaterialsCount));
		data[4]['materials'][MATERIAL_CATEGORIES.ASCENSION] = 1;
		data[6]['materials'][MATERIAL_CATEGORIES.ASCENSION] = 1;
		data[8]['materials'][MATERIAL_CATEGORIES.ASCENSION] = 1;
		data[10]['materials'][MATERIAL_CATEGORIES.ASCENSION] = 1;
		data[12]['materials'][MATERIAL_CATEGORIES.ASCENSION] = 1;
		return data;
	}

	return baseCharLevellingMaterialsCount;
}
