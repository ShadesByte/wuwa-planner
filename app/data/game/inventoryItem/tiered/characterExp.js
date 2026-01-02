import { ITEM_FAMILIES } from "../../constants/itemFamilies";
import { ITEM_IDS } from "../../constants/itemIDs";

export const char_exp_proper_data = [
	{
		general_name: ITEM_FAMILIES.RESONANCE_POTION,
		name: ITEM_IDS.BASIC_RESONANCE_POTION,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.MEDIUM_RESONANCE_POTION,
		count: 3000.0 / 1000,
		exp_value: 1000,
	},
	{
		general_name: ITEM_FAMILIES.RESONANCE_POTION,
		name: ITEM_IDS.MEDIUM_RESONANCE_POTION,
		tier: 2,
		from: ITEM_IDS.BASIC_RESONANCE_POTION,
		to: ITEM_IDS.ADVANCED_RESONANCE_POTION,
		count: 8000.0 / 3000,
		exp_value: 3000,
	},
	{
		general_name: ITEM_FAMILIES.RESONANCE_POTION,
		name: ITEM_IDS.ADVANCED_RESONANCE_POTION,
		tier: 3,
		from: ITEM_IDS.MEDIUM_RESONANCE_POTION,
		to: ITEM_IDS.PREMIUM_RESONANCE_POTION,
		count: 20000.0 / 8000,
		exp_value: 8000,
	},
	{
		general_name: ITEM_FAMILIES.RESONANCE_POTION,
		name: ITEM_IDS.PREMIUM_RESONANCE_POTION,
		tier: 4,
		from: ITEM_IDS.ADVANCED_RESONANCE_POTION,
		to: undefined,
		count: undefined,
		exp_value: 20000,
	},
];

import * as utilites from '~/data/game/inventoryItem/utilities';

export const tiered_char_exp_index_category =
	utilites.tiered_material_index_category(char_exp_proper_data);

export const tiered_char_exp_index_name =
	utilites.tiered_material_index_name(char_exp_proper_data);
