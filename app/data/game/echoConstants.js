// The game version this configuration was last verified against
export const GAME_DATA_VERSION = '3.0';

// A list of all Echo sets available in the game
export const ECHO_SETS = Object.freeze({
  FREEZING_FROST: 'freezing_frost',
  MOLTEN_RIFT: 'molten_rift',
  VOID_THUNDER: 'void_thunder',
  SIERRA_GALE: 'sierra_gale',
  CELESTIAL_LIGHT: 'celestial_light',
  HAVOC_ECLIPSE: 'havoc_eclipse',
  REJUVENATING_GLOW: 'rejuvenating_glow',
  MOONLIT_CLOUDS: 'moonlit_clouds',
  LINGERING_TUNES: 'lingering_tunes',
  FROSTY_RESOLVE: 'frosty_resolve',
  ETERNAL_RADIANCE: 'eternal_radiance',
  MIDNIGHT_VEIL: 'midnight_veil',
  EMPYREAN_ANTHEM: 'empyrean_anthem',
  TIDEBREAKING_COURAGE: 'tidebreaking_courage',
  GUSTS_OF_WELKIN: 'gusts_of_welkin',
  FLAMING_CLAWPRINT: 'flaming_clawprint',
  WINDWARD_PILGRIMAGE: 'windward_pilgrimage',
  DREAM_OF_THE_LOST: 'dream_of_the_lost',
  CROWN_OF_VALOR: 'crown_of_valor',
  LAW_OF_HARMONY: 'law_of_harmony',
  FLAMEWINGS_SHADOW: 'flamewings_shadow',
  THREAD_OF_SEVERED_FATE: 'thread_of_severed_fate',
  HALO_OF_STARRY_RADIANCE: 'halo_of_starry_radiance',
  PACT_OF_NEONLIGHT_LEAP: 'pact_of_neonlight_leap',
  RITE_OF_GILDED_REVELATION: 'rite_of_gilded_revelation',
});

// A list of all main stats available for Echoes
export const ECHO_MAIN_STATS = Object.freeze({
    HP_PERCENT: 'hp%',
    ATK_PERCENT: 'atk%',
    DEF_PERCENT: 'def%',
    CRIT_RATE: 'crit_rate',
    CRIT_DMG: 'crit_dmg',
    HEALING_BONUS: 'healing_bonus',
    GLACIO_DMG_BONUS: 'glacio_dmg_bonus',
    FUSION_DMG_BONUS: 'fusion_dmg_bonus',
    ELECTRO_DMG_BONUS: 'electro_dmg_bonus',
    AERO_DMG_BONUS: 'aero_dmg_bonus',
    SPECTRO_DMG_BONUS: 'spectro_dmg_bonus',
    HAVOC_DMG_BONUS: 'havoc_dmg_bonus',
    ENERGY_REGEN: 'energy_regen',
});

// A list of all sub stats available for Echoes
export const ECHO_SUB_STATS = Object.freeze({
    HP: 'hp',
    ATK: 'atk',
    DEF: 'def',
    HP_PERCENT: 'hp%',
    ATK_PERCENT: 'atk%',
    DEF_PERCENT: 'def%',
    CRIT_RATE: 'crit_rate',
    CRIT_DMG: 'crit_dmg',
    ENERGY_REGEN: 'energy_regen',
    BASIC_ATTACK_DMG_BONUS: 'basic_attack_dmg_bonus',
    HEAVY_ATTACK_DMG_BONUS: 'heavy_attack_dmg_bonus',
    RESONANCE_SKILL_DMG_BONUS: 'resonance_skill_dmg_bonus',
    RESONANCE_LIBERATION_DMG_BONUS: 'resonance_liberation_dmg_bonus',
});

// Echo cost tiers
export const ECHO_COSTS = Object.freeze({
    COST_4: 'cost_4',
    COST_3: 'cost_3',
    COST_1: 'cost_1',
});

// Valid main stats for each Echo cost
export const VALID_MAIN_STATS = Object.freeze({
    [ECHO_COSTS.COST_4]: [
        ECHO_MAIN_STATS.HP_PERCENT,
        ECHO_MAIN_STATS.ATK_PERCENT,
        ECHO_MAIN_STATS.DEF_PERCENT,
        ECHO_MAIN_STATS.CRIT_RATE,
        ECHO_MAIN_STATS.CRIT_DMG,
        ECHO_MAIN_STATS.HEALING_BONUS,
    ],
    [ECHO_COSTS.COST_3]: [
        ECHO_MAIN_STATS.HP_PERCENT,
        ECHO_MAIN_STATS.ATK_PERCENT,
        ECHO_MAIN_STATS.DEF_PERCENT,
        ECHO_MAIN_STATS.ENERGY_REGEN,
        ECHO_MAIN_STATS.GLACIO_DMG_BONUS,
        ECHO_MAIN_STATS.FUSION_DMG_BONUS,
        ECHO_MAIN_STATS.ELECTRO_DMG_BONUS,
        ECHO_MAIN_STATS.AERO_DMG_BONUS,
        ECHO_MAIN_STATS.SPECTRO_DMG_BONUS,
        ECHO_MAIN_STATS.HAVOC_DMG_BONUS,
    ],
    [ECHO_COSTS.COST_1]: [
        ECHO_MAIN_STATS.HP_PERCENT,
        ECHO_MAIN_STATS.ATK_PERCENT,
        ECHO_MAIN_STATS.DEF_PERCENT,
    ],
});