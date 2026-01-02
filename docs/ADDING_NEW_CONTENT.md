# Adding New Content Checklist

Use this guide when updating the app for a new game version.

## 1. Adding a New Item (Material)
* **Step 1: Register ID**
    * Open `app/data/game/constants/itemIDs.js`.
    * Add the new key (e.g., `NEW_MAT: 'new_mat'`).
* **Step 2: Register Family (If new type)**
    * Open `app/data/game/constants/itemFamilies.js`.
    * If this is a new group (e.g., a new material type), add it here.
* **Step 3: Define Metadata**
    * Open `app/data/game/raw/inventoryItem.json`.
    * Add the entry under the correct category (label, rarity, icon path).
* **Step 4: Define Logic (If Tiered/Craftable)**
    * Open the relevant file in `app/data/game/inventoryItem/tiered/`.
    * Add the object defining synthesis costs (`from`, `to`, `count`).

## 2. Adding a New Character
* **Step 1: Register ID**
    * Open `app/data/game/constants/characterIDs.js`.
    * Add the new character key (e.g., `YINLIN: 'yinlin'`).
* **Step 2: Add Raw Data**
    * Open `app/data/game/raw/character.json`.
    * Add the character object.
    * **Note:** The "Select Character" dropdown in the app will **automatically update** to include this character once this file is saved.
* **Step 3: Verify Special Logic (Rare)**
    * Open `app/data/game/gameCharacter.js`.
    * Only edit this if the character has unique leveling costs (like Rover). Otherwise, the default logic works automatically.

## 3. Adding a New Weapon
* **Step 1: Register ID**
    * Open `app/data/game/constants/weaponIDs.js`.
    * Add the new weapon key.
* **Step 2: Add Raw Data**
    * Open `app/data/game/raw/weapon.json`.
    * Add the weapon object.
    * **Note:** The "Select Weapon" dropdown will **automatically update** to include this weapon.