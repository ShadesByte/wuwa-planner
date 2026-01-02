/*
  This is for configured data, such as tiered materials
*/

import { MATERIAL_CATEGORIES } from '@/data/game/constants/materialCategories';
import { ITEM_IDS } from '@/data/game/constants/itemIDs';

export const resonator_exp_material = {
	// resonance_potion
	[ITEM_IDS.BASIC_RESONANCE_POTION]: {
		exp_value: 1000,
	},
	[ITEM_IDS.MEDIUM_RESONANCE_POTION]: {
		exp_value: 3000,
	},
	[ITEM_IDS.ADVANCED_RESONANCE_POTION]: {
		exp_value: 8000,
	},
	[ITEM_IDS.PREMIUM_RESONANCE_POTION]: {
		exp_value: 20000,
	},
};

export const weapon_exp_material = {
	// energy_core
	[ITEM_IDS.BASIC_ENERGY_CORE]: {
		exp_value: 1000,
	},
	[ITEM_IDS.MEDIUM_ENERGY_CORE]: {
		exp_value: 3000,
	},
	[ITEM_IDS.ADVANCED_ENERGY_CORE]: {
		exp_value: 8000,
	},
	[ITEM_IDS.PREMIUM_ENERGY_CORE]: {
		exp_value: 20000,
	},
};

import {
	tiered_enemy_drop_weapon_skill_material_index_category,
	tiered_enemy_drop_weapon_skill_material_index_name,
} from '@/data/game/inventoryItem/tiered/enemyDropWeaponSkillMaterial';

import {
	tiered_forgery_weapon_skill_material_index_category,
	tiered_forgery_weapon_skill_material_index_name,
} from '@/data/game/inventoryItem/tiered/forgeryWeaponSkillMaterial';

import {
	tiered_char_exp_index_category,
	tiered_char_exp_index_name,
} from '@/data/game/inventoryItem/tiered/characterExp';

import {
	tiered_weap_exp_index_category,
	tiered_weap_exp_index_name,
} from '@/data/game/inventoryItem/tiered/weaponExp';

export const tiered_materials_all = {
	...tiered_enemy_drop_weapon_skill_material_index_name,
	...tiered_forgery_weapon_skill_material_index_name,
	...tiered_char_exp_index_name,
	...tiered_weap_exp_index_name,
};

export const tiered_materials_per_type = {
	[MATERIAL_CATEGORIES.ENEMY_DROP]:
		tiered_enemy_drop_weapon_skill_material_index_category,
	[MATERIAL_CATEGORIES.FORGERY]: tiered_forgery_weapon_skill_material_index_category,
	tiered_char_exp: tiered_char_exp_index_category,
	tiered_weap_exp: tiered_weap_exp_index_category,
};

export const exp_data = {
	[ITEM_IDS.Ref_WEAP_EXP]: weapon_exp_material,
	[ITEM_IDS.Ref_CHAR_EXP]: resonator_exp_material,
};
