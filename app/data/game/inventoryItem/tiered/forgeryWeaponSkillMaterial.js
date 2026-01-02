import { ITEM_FAMILIES } from "../../constants/itemFamilies";
import { ITEM_IDS } from "../../constants/itemIDs";

export const forgery_proper_data = [
	{
		general_name: ITEM_FAMILIES.CADENCE,
		name: ITEM_IDS.CADENCE_SEED,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.CADENCE_BUD,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.CADENCE,
		name: ITEM_IDS.CADENCE_BUD,
		tier: 2,
		from: ITEM_IDS.CADENCE_SEED,
		to: ITEM_IDS.CADENCE_LEAF,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.CADENCE,
		name: ITEM_IDS.CADENCE_LEAF,
		tier: 3,
		from: ITEM_IDS.CADENCE_BUD,
		to: ITEM_IDS.CADENCE_BLOSSOM,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.CADENCE,
		name: ITEM_IDS.CADENCE_BLOSSOM,
		tier: 4,
		from: ITEM_IDS.CADENCE_LEAF,
		to: undefined,
		count: undefined,
	},
	{
		general_name: ITEM_FAMILIES.PHLOGISTON,
		name: ITEM_IDS.IMPURE_PHLOGISTON,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.EXTRACTED_PHLOGISTON,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.PHLOGISTON,
		name: ITEM_IDS.EXTRACTED_PHLOGISTON,
		tier: 2,
		from: ITEM_IDS.IMPURE_PHLOGISTON,
		to: ITEM_IDS.REFINED_PHLOGISTON,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.PHLOGISTON,
		name: ITEM_IDS.REFINED_PHLOGISTON,
		tier: 3,
		from: ITEM_IDS.EXTRACTED_PHLOGISTON,
		to: ITEM_IDS.FLAWLESS_PHLOGISTON,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.PHLOGISTON,
		name: ITEM_IDS.FLAWLESS_PHLOGISTON,
		tier: 4,
		from: ITEM_IDS.REFINED_PHLOGISTON,
		to: undefined,
		count: undefined,
	},
	{
		general_name: ITEM_FAMILIES.METALLIC_DRIP,
		name: ITEM_IDS.INERT_METALLIC_DRIP,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.REACTIVE_METALLIC_DRIP,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.METALLIC_DRIP,
		name: ITEM_IDS.REACTIVE_METALLIC_DRIP,
		tier: 2,
		from: ITEM_IDS.INERT_METALLIC_DRIP,
		to: ITEM_IDS.POLARIZED_METALLIC_DRIP,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.METALLIC_DRIP,
		name: ITEM_IDS.POLARIZED_METALLIC_DRIP,
		tier: 3,
		from: ITEM_IDS.REACTIVE_METALLIC_DRIP,
		to: ITEM_IDS.HETERIZED_METALLIC_DRIP,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.METALLIC_DRIP,
		name: ITEM_IDS.HETERIZED_METALLIC_DRIP,
		tier: 4,
		from: ITEM_IDS.POLARIZED_METALLIC_DRIP,
		to: undefined,
		count: undefined,
	},
	{
		general_name: ITEM_FAMILIES.HELIX,
		name: ITEM_IDS.LENTO_HELIX,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.ADAGIO_HELIX,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.HELIX,
		name: ITEM_IDS.ADAGIO_HELIX,
		tier: 2,
		from: ITEM_IDS.LENTO_HELIX,
		to: ITEM_IDS.ANDANTE_HELIX,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.HELIX,
		name: ITEM_IDS.ANDANTE_HELIX,
		tier: 3,
		from: ITEM_IDS.ADAGIO_HELIX,
		to: ITEM_IDS.PRESTO_HELIX,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.HELIX,
		name: ITEM_IDS.PRESTO_HELIX,
		tier: 4,
		from: ITEM_IDS.ANDANTE_HELIX,
		to: undefined,
		count: undefined,
	},
	{
		general_name: ITEM_FAMILIES.WAVEWORN_RESIDUE,
		name: ITEM_IDS.WAVEWORN_RESIDUE_210,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.WAVEWORN_RESIDUE_226,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.WAVEWORN_RESIDUE,
		name: ITEM_IDS.WAVEWORN_RESIDUE_226,
		tier: 2,
		from: ITEM_IDS.WAVEWORN_RESIDUE_210,
		to: ITEM_IDS.WAVEWORN_RESIDUE_235,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.WAVEWORN_RESIDUE,
		name: ITEM_IDS.WAVEWORN_RESIDUE_235,
		tier: 3,
		from: ITEM_IDS.WAVEWORN_RESIDUE_226,
		to: ITEM_IDS.WAVEWORN_RESIDUE_239,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.WAVEWORN_RESIDUE,
		name: ITEM_IDS.WAVEWORN_RESIDUE_239,
		tier: 4,
		from: ITEM_IDS.WAVEWORN_RESIDUE_235,
		to: undefined,
		count: undefined,
	},
	{
		general_name: ITEM_FAMILIES.COMBUSTOR,
		name: ITEM_IDS.INCOMPLETE_COMBUSTOR,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.AFTERTUNE_COMBUSTOR,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.COMBUSTOR,
		name: ITEM_IDS.AFTERTUNE_COMBUSTOR,
		tier: 2,
		from: ITEM_IDS.INCOMPLETE_COMBUSTOR,
		to: ITEM_IDS.REMNANT_COMBUSTOR,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.COMBUSTOR,
		name: ITEM_IDS.REMNANT_COMBUSTOR,
		tier: 3,
		from: ITEM_IDS.AFTERTUNE_COMBUSTOR,
		to: ITEM_IDS.REVERB_COMBUSTOR,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.COMBUSTOR,
		name: ITEM_IDS.REVERB_COMBUSTOR,
		tier: 4,
		from: ITEM_IDS.REMNANT_COMBUSTOR,
		to: undefined,
		count: undefined,
	},
	{
		general_name: ITEM_FAMILIES.CARVED_CRYSTAL,
		name: ITEM_IDS.LF_CARVED_CRYSTAL,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.MF_CARVED_CRYSTAL,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.CARVED_CRYSTAL,
		name: ITEM_IDS.MF_CARVED_CRYSTAL,
		tier: 2,
		from: ITEM_IDS.LF_CARVED_CRYSTAL,
		to: ITEM_IDS.HF_CARVED_CRYSTAL,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.CARVED_CRYSTAL,
		name: ITEM_IDS.HF_CARVED_CRYSTAL,
		tier: 3,
		from: ITEM_IDS.MF_CARVED_CRYSTAL,
		to: ITEM_IDS.FF_CARVED_CRYSTAL,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.CARVED_CRYSTAL,
		name: ITEM_IDS.FF_CARVED_CRYSTAL,
		tier: 4,
		from: ITEM_IDS.HF_CARVED_CRYSTAL,
		to: undefined,
		count: undefined,
	},

	{
		general_name: ITEM_FAMILIES.POLARIZER,
		name: ITEM_IDS.BROKEN_WING_POLARIZER,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.MONOWING_POLARIZER,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.POLARIZER,
		name: ITEM_IDS.MONOWING_POLARIZER,
		tier: 2,
		from: ITEM_IDS.BROKEN_WING_POLARIZER,
		to: ITEM_IDS.POLYWING_POLARIZER,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.POLARIZER,
		name: ITEM_IDS.POLYWING_POLARIZER,
		tier: 3,
		from: ITEM_IDS.MONOWING_POLARIZER,
		to: ITEM_IDS.LAYERED_WING_POLARIZER,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.POLARIZER,
		name: ITEM_IDS.LAYERED_WING_POLARIZER,
		tier: 4,
		from: ITEM_IDS.POLYWING_POLARIZER,
		to: undefined,
		count: undefined,
	},

	{
		general_name: ITEM_FAMILIES.WAVEWORN_SHARD,
		name: ITEM_IDS.LF_WAVEWORN_SHARD,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.MF_WAVEWORN_SHARD,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.WAVEWORN_SHARD,
		name: ITEM_IDS.MF_WAVEWORN_SHARD,
		tier: 2,
		from: ITEM_IDS.LF_WAVEWORN_SHARD,
		to: ITEM_IDS.HF_WAVEWORN_SHARD,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.WAVEWORN_SHARD,
		name: ITEM_IDS.HF_WAVEWORN_SHARD,
		tier: 3,
		from: ITEM_IDS.MF_WAVEWORN_SHARD,
		to: ITEM_IDS.FF_WAVEWORN_SHARD,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.WAVEWORN_SHARD,
		name: ITEM_IDS.FF_WAVEWORN_SHARD,
		tier: 4,
		from: ITEM_IDS.HF_WAVEWORN_SHARD,
		to: undefined,
		count: undefined,
	},

	{
		general_name: ITEM_FAMILIES.STRING,
		name: ITEM_IDS.SPLICED_STRING,
		tier: 1,
		from: undefined,
		to: ITEM_IDS.BROKEN_STRING,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.STRING,
		name: ITEM_IDS.BROKEN_STRING,
		tier: 2,
		from: ITEM_IDS.SPLICED_STRING,
		to: ITEM_IDS.SOLIDIFIED_STRING,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.STRING,
		name: ITEM_IDS.SOLIDIFIED_STRING,
		tier: 3,
		from: ITEM_IDS.BROKEN_STRING,
		to: ITEM_IDS.MELODIC_STRING,
		count: 3,
	},
	{
		general_name: ITEM_FAMILIES.STRING,
		name: ITEM_IDS.MELODIC_STRING,
		tier: 4,
		from: ITEM_IDS.SOLIDIFIED_STRING,
		to: undefined,
		count: undefined,
	},
];

export const tiered_forgery_weapon_skill_material_index_category = Object.keys(
	forgery_proper_data
).reduce((acc, key) => {
	const { general_name, name, tier, from, to, count } =
		forgery_proper_data[key];
	acc[general_name] = acc[general_name] || {};
	if (to) {
		acc[general_name][tier] = {
			name,
			synthesizable: {
				to: tier,
				count,
			},
		};
	} else {
		acc[general_name][tier] = {
			name,
		};
	}
	return acc;
}, {});

export const tiered_forgery_weapon_skill_material_index_name = Object.keys(
	forgery_proper_data
).reduce((acc, key) => {
	const { general_name, name, from, to, count } = forgery_proper_data[key];
	acc[name] = {
		to: to,
		cost: count,
	};
	if (from) acc[name].from = from;
	return acc;
}, {});
