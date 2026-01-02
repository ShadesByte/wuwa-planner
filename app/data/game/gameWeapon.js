// TO DO: double check the shell credit amounts with in game values. I'm not sure these are correct (provided by OG dev). 

import { ITEM_IDS } from "@/data/game/constants/itemIDs";
import { MATERIAL_CATEGORIES } from "@/data/game/constants/materialCategories";

export const weaponLevellingMaterialsCount = {
	3: [
		{ level: '1', materials: {} },
		{ level: '20', materials: { [ITEM_IDS.REF_WEAP_EXP]: 24660, [ITEM_IDS.SHELL_CREDIT]: 9864 } },
		{
			level: '20A',
			materials: {
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					1: 4,
				},
				[ITEM_IDS.SHELL_CREDIT]: 6_000,
			},
		},
		{ level: '40', materials: { [ITEM_IDS.REF_WEAP_EXP]: 95340, [ITEM_IDS.SHELL_CREDIT]: 38136 } },
		{
			level: '40A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					1: 4,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					2: 4,
				},
				[ITEM_IDS.SHELL_CREDIT]: 12_000,
			},
		},
		{ level: '50', materials: { [ITEM_IDS.REF_WEAP_EXP]: 94440, [ITEM_IDS.SHELL_CREDIT]: 37776 } },
		{
			level: '50A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					2: 5,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					3: 3,
				},
				[ITEM_IDS.SHELL_CREDIT]: 24_000,
			},
		},
		{ level: '60', materials: { [ITEM_IDS.REF_WEAP_EXP]: 142260, [ITEM_IDS.SHELL_CREDIT]: 56904 } },
		{
			level: '60A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					3: 4,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					3: 4,
				},
				[ITEM_IDS.SHELL_CREDIT]: 36_000,
			},
		},
		{ level: '70', materials: { [ITEM_IDS.REF_WEAP_EXP]: 207600, [ITEM_IDS.SHELL_CREDIT]: 83040 } },
		{
			level: '70A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					4: 5,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					4: 3,
				},
				[ITEM_IDS.SHELL_CREDIT]: 48_000,
			},
		},
		{ level: '80', materials: { [ITEM_IDS.REF_WEAP_EXP]: 296880, [ITEM_IDS.SHELL_CREDIT]: 118752 } },
		{
			level: '80A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					4: 8,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					4: 5,
				},
				[ITEM_IDS.SHELL_CREDIT]: 72_000,
			},
		},
		{ level: '90', materials: { [ITEM_IDS.REF_WEAP_EXP]: 512340, [ITEM_IDS.SHELL_CREDIT]: 204936 } },
	],
	4: [
		{ level: '1', materials: {} },
		{ level: '20', materials: { [ITEM_IDS.REF_WEAP_EXP]: 41100, [ITEM_IDS.SHELL_CREDIT]: 16440 } },
		{
			level: '20A',
			materials: {
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					1: 5,
				},
				[ITEM_IDS.SHELL_CREDIT]: 8_000,
			},
		},
		{ level: '40', materials: { [ITEM_IDS.REF_WEAP_EXP]: 158900, [ITEM_IDS.SHELL_CREDIT]: 63560 } },
		{
			level: '40A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					1: 5,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					2: 5,
				},
				[ITEM_IDS.SHELL_CREDIT]: 16_000,
			},
		},
		{ level: '50', materials: { [ITEM_IDS.REF_WEAP_EXP]: 157400, [ITEM_IDS.SHELL_CREDIT]: 62960 } },
		{
			level: '50A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					2: 7,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					3: 4,
				},
				[ITEM_IDS.SHELL_CREDIT]: 32_000,
			},
		},
		{ level: '60', materials: { [ITEM_IDS.REF_WEAP_EXP]: 237100, [ITEM_IDS.SHELL_CREDIT]: 94840 } },
		{
			level: '60A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					3: 5,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					3: 5,
				},
				[ITEM_IDS.SHELL_CREDIT]: 48_000,
			},
		},
		{ level: '70', materials: { [ITEM_IDS.REF_WEAP_EXP]: 346000, [ITEM_IDS.SHELL_CREDIT]: 138400 } },
		{
			level: '70A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					4: 7,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					4: 4,
				},
				[ITEM_IDS.SHELL_CREDIT]: 64_000,
			},
		},
		{ level: '80', materials: { [ITEM_IDS.REF_WEAP_EXP]: 494800, [ITEM_IDS.SHELL_CREDIT]: 197920 } },
		{
			level: '80A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					4: 10,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					4: 7,
				},
				[ITEM_IDS.SHELL_CREDIT]: 96_000,
			},
		},
		{ level: '90', materials: { [ITEM_IDS.REF_WEAP_EXP]: 853900, [ITEM_IDS.SHELL_CREDIT]: 341560 } },
	],
	5: [
		{ level: '1', materials: {} },
		{ level: '20', materials: { [ITEM_IDS.REF_WEAP_EXP]: 43300, [ITEM_IDS.SHELL_CREDIT]: 17320 } },
		{
			level: '20A',
			materials: {
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					1: 6,
				},
				[ITEM_IDS.SHELL_CREDIT]: 10_000,
			},
		},
		{ level: '40', materials: { [ITEM_IDS.REF_WEAP_EXP]: 198900, [ITEM_IDS.SHELL_CREDIT]: 79560 } },
		{
			level: '40A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					1: 6,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					2: 6,
				},
				[ITEM_IDS.SHELL_CREDIT]: 20_000,
			},
		},
		{ level: '50', materials: { [ITEM_IDS.REF_WEAP_EXP]: 209000, [ITEM_IDS.SHELL_CREDIT]: 83600 } },
		{
			level: '50A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					2: 8,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					3: 4,
				},
				[ITEM_IDS.SHELL_CREDIT]: 40_000,
			},
		},
		{ level: '60', materials: { [ITEM_IDS.REF_WEAP_EXP]: 314100, [ITEM_IDS.SHELL_CREDIT]: 125640 } },
		{
			level: '60A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					3: 6,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					3: 6,
				},
				[ITEM_IDS.SHELL_CREDIT]: 60_000,
			},
		},
		{ level: '70', materials: { [ITEM_IDS.REF_WEAP_EXP]: 446600, [ITEM_IDS.SHELL_CREDIT]: 178640 } },
		{
			level: '70A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					4: 8,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					4: 4,
				},
				[ITEM_IDS.SHELL_CREDIT]: 80_000,
			},
		},
		{ level: '80', materials: { [ITEM_IDS.REF_WEAP_EXP]: 610900, [ITEM_IDS.SHELL_CREDIT]: 244360 } },
		{
			level: '80A',
			materials: {
				[MATERIAL_CATEGORIES.FORGERY]: {
					4: 12,
				},
				[MATERIAL_CATEGORIES.ENEMY_DROP]: {
					4: 8,
				},
				[ITEM_IDS.SHELL_CREDIT]: 120_000,
			},
		},
		{ level: '90', materials: { [ITEM_IDS.REF_WEAP_EXP]: 869600, [ITEM_IDS.SHELL_CREDIT]: 347840 } },
	],
};

import gameWeaponRawData from '@/data/game/raw/weapon.json';

export const weapons = gameWeaponRawData;
