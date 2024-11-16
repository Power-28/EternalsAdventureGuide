// Data input (entry, name, abilitiesList format)
const rawCreatureData = `
720000, Archmage Khadgar, 221553, 194124
720001, Lightlock, 387835
720002, Unstable Crystal,
720003, Ancient Keeper, 
720004, Crystal Mother, 241962, 162475, 366091, 366097
720005, Ghostly Protector, 
720006, Vigilant Paarthos, 164192, 292270, 227807
720007, Embodied Gloom, 259895, 259899, 296049, 296047, 259850, 259867
720008, Sargerei War Machine, 227529, 72242
720009, Grom'kar Bomber, 190298, 190297, 159386, 110156, 247084, 160249
720010, Azuka Bladefury, 156274, 198496, 245627, 174438, 228895
720011, Kilrogg Deadeye, 195293, 120669, 189467, 189469
720012, Ner'zhul, 253917, 171355, 292826
720013, Kargath Bladefist, 189677, 259868, 175022, 241955
720014, Kaz the Shrieker, 130120, 143423, 130115, 136512, 260313, 260311, 50195
720015, Buci, 163501
720016, Blackhand, 354898, 244894, 255061, 191254, 259552, 259554, 216817, 244598, 159179, 156928
720017, Reinforced Crawler Mine, 
720018, Gyrocopter, 
720019, Bumbling Bee, 267545, 267553
720020, Crawler Mine, 149146
720021, Ashen Amalgamation, 337063, 318402
720022, Grom'kar Assassin, 188144, 188150, 132745, 132748
720023, Grom'kar Battlemaster, 334002, 228278, 133998, 429988, 298630
720024, Grom'kar Cauterizer, 215808, 218637, 228025, 228026, 236984, 251888
720025, Grom'kar Deadeye, 159085, 167240, 236442, 236516
720026, Grom'kar Far-Seer, 369055, 385652, 168082, 135999, 79927, 241306
720027, Grom'kar Pulverizer, 170750, 155264, 171950
720028, Grom'kar Warcaster, 403601, 223579, 238605
720029, Gorebound Brute, 184381, 181582, 175004, 122770, 117920
720030, Ragewing the Untamed, 392635, 392280, 392289, 228792, 228793, 217877, 412383, 428094
720031, Bloodmaul Ogron, 221143, 198073, 86867, 166032
720032, Young Gronnling, 419329, 189294, 330401
720033, Daughter of Devmorta, 96181, 149307, 176280, 172379, 176301
720034, Bleeding Hollow, 256099, 252019
720035, Crimson Dactyl, 388377
720036, Dactyl Hatchling, 
720037, Hulking Cryptsmasher, 365044, 314829
720038, Memory of a Traitorous Sister, 318150, 213352
720039, Giani, 192563, 192569, 227789, 227966, 198931, 215435
720040, Shadow Clone, 152818, 172451, 172453, 172449
720041, Stormcaster Throm, 419635, 200185, 200243, 222932, 210290, 200658
720042, Corrupted Wasp, 221033, 221034, 221036, 215452, 215449, 215460
720043, Corrupted Totem, 214540, 214497, 191525
720044, Growth-Covered Tentacle, 
720045, Shardmaster Azurrogg, 222932, 159958, 193271, 386801, 297261
720046, Zaxasj the Speaker, 248804, 411762, 360304, 361278, 361277, 365894, 362347, 336893, 287693, 304951, 308044, 307773, 313276, 307950, 309680
720047, Fulminant Elemental, 288136, 296673, 390943, 198892
720048, Dusty Flanker, 228833, 217233, 217234, 193271, 412823
720049, Succumbing Grovewalker, 194080
720050, Nightmare Tendril, 223923, 211182, 232026
720051, Azureback Broodmother, 204275, 196027, 264705, 264706
720052, Azureback Broodling, 720052
720053, Tideclaw, 252113, 150373
720054, Core of O'ros, 315089, 287025
720055, Runeforged Spectre, 242471, 152819, 340143
720056, Reanimated Guardian, 306492, 323753
720057, Telemancy Beacon, 400542
720058, Earthen Servant, 359334, 362288
720059, Devmorta, 309674, 337562, 337561, 337565, 337564, 344892, 337563, 338434, 420148, 72242
720060, Bucibreaker, 247963, 64770, 250286, 251485, 368478, 393811, 241374, 264685, 173645, 231249
720061, Corrupted Defender, 208620, 208622, 177091, 209387, 251166
720062, Blightborn Sludge, 208586, 207662, 203950
720063, Waking Nightmare, 213207, 213224
720064, Arch-Desecrator Malithar, 208724, 213657, 198379, 198376, 198388, 212515
720065, Antoran Charhound, 218639, 215860, 306111, 306163, 306247
720066, Maw of the Corruptor, 303923
720067, Eye of the Corruptor, 313400
720068, Prime Radiant, 375029
720069, Tentacle of the Corruptor, 313400
720070, Horrific Hemorrhage, 307639
720071, Faceless Conqueror, 303619
720072, Faceless Tormentor, 314777, 303978, 303971
720073, Putrid Ichor, 
720074, Fury of N'Zoth, 251045, 74828, 197783, 260226, 174016, 317157, 310324, 313391, 427668
720075, Terrorwing Gargoyle, 239266
720076, Shadowflame Terrorwalker, 253068, 156499, 156539, 249071, 246940, 246941
720077, Sludge Guard, 340174
720078, Felblood Brute, 232202, 232203, 204666, 163208
720079, Manafiend, 227618
720080, Void Wolf, 253504, 188272, 160525
720081, Hailstone Construct, 274888, 274895, 274891, 274896, 285459
720082, Talgathi Hound, 96913, 399061
720083, Hodir, 184768, 200460, 247585, 251076, 233516, 205344, 184124
720084, Dreadlord Defiler, 418539, 247492, 237582, 242021, 251091, 237582
720085, Metamorphosis, 235920, 242943, 154527, 419244
720086, Fel Mother, 251245, 252663, 185127
720087, Fel-Powered Purifier, 77131, 144184
720088, Talgathi Guardian, 252701, 233228
720089, Eye of the Torturer, 93960, 254008
720090, Wyrmtongue Collector, 
720091, Gorgodak, 126390, 176001, 173751, 252135
720092, Gar'kallus, 162339, 202062, 162066, 162065
720093, Muglokk, 244607, 308801, 308998, 366119
720094, Stalwart Echo, 78037, 204631, 166539, 338710
720095, Fulminating Lasher, 168634, 158873, 254727
720096, Death Specter, 268202
720097, Feltalon Matron, 13445, 188225, 185130
720098, Feltalon Hag, 251044
720099, Helblaze Imp, 243095, 228193, 449756
720100, Talgathi Portal Keeper, 236122, 188053, 251047, 182644, 418544
720101, Talgathi Executioner, 237573, 237583, 233228, 193659, 193660
720102, Talgathi Incinerator, 311622, 248550
720103, Deucus Valdera, 295709, 384930
720104, Talgathi Watcher, 242396
720105, Brimstone Destroyer, 245596, 244075, 228792, 247083, 229083, 175762
720106, Blackwater Oracle, 397541, 406230, 406240, 404818, 405113, 304931
720107, Door Barrier Trigger, 248453
720108, Fel Spike, 248702, 257792
720109, Voidshrieker, 248133, 248128, 209329
720110, Corrupted Arcane Assistant, 243713, 377024, 376982, 228328, 271870, 157252
720111, Elder Runecarver, 397427, 311551
720112, Seeping Fog, 198937, 205337, 205341, 205337, 198937
720113, Sadana Bloodfury, 189637, 157589, 418561, 212258, 418564, 207166, 185982, 307805, 307806, 307821, 309498
720114, Blazing Inferno, 408483, 408478, 418436
720115, Forsaken Apothecary, 260304, 307977
720116, Portal Guardian, 204517
720117, Shadowfel Warden, 
720118, Void Tendril, 203140, 203313
720119, Gorian Sorcerer, 382597, 389583, 271870, 406760
720120, Gorian Enforcer, 175765, 176552, 178046, 164324
720121, Gorian Runemaster, 171342, 145461, 145460, 151697
720122, Iron Blood Mage, 172795, 420808
720123, Enthralled Mutant, 168041, 255626, 169747
720124, Hungry Lasher, 238688, 337566
720125, Noxious Sproutling, 169876
720126, Botani Overgrowth, 338490, 367381
720127, Void Totem, 190918, 228279, 207410, 157425
720128, Lightspawn, 235518
720129, Shadow of Uul, 260373, 169590
720130, Dark Tendril, 260432, 260480
720131, Generic Purpose Trigger, 
720132, Verdant Ancient, 286510, 236450
720133, Zandalari Thundercaller, 310835, 241290, 241263
720134, Tormented Soul, 183347, 228254, 228255, 174559, 247678
720135, Devout Priestess, 177287
720136, Father Timothy, 179999, 174988, 228466, 222761, 406737, 314304, 314367, 314377, 179999
720137, Spore Cloud, 227341, 168636, 412816
720138, Rook Spiderling, 229904, 219861
720139, Za'qul, 262719, 412772, 142201, 213530
720140, Water Elemental, 217229, 367798, 183748
720141, Orgozoa, 241069, 175061, 252312, 252313, 254122, 301807, 224840, 307332, 72242
720142, Rezani Disciple, 372315, 273359, 242021, 341438
720143, Empowered Earth Elemental, 454535, 446242, 183455, 136864
720144, Tropical Toad, 
720145, Crystalmaw Goren, 158045, 395594
720146, Forsaken Eredar, 231918
720147, Risen Skulker, 228833
720148, Soul Reaper, 181718, 183881, 231915
720149, Mutated Defender, 255814, 173245, 255626, 315965, 171526
720150, Plant Hydra, 240126, 242779, 228390
720151, Podling Poisonspitter, 
720152, Reanimated Ritual Bones, 307396, 310298, 235856, 228833, 308575
720153, Nhallish, 184478, 157176, 171346, 171350, 219112, 186546, 303939, 318459
720154, Void Essence, 308172, 308375
720155, Void Tear, 
720156, Lightbound Scorcher, 331811, 362710
720157, Deep Stalker, 394639
720158, Erratic Power Conduit, 245508, 288427
720159, Stealth Stalker, 328773, 328772, 328781, 328779, 328780
720160, Celestial Heart, 208861, 221487
720161, Primitive Totem, 
720162, Lightning Rod, 
720163, Thu'raya, 357278, 311399, 193977
720164, Raszageth, 377594, 391726, 385574, 387261, 388691, 381249, 396734, 266019, 396158, 72242
720165, Illidan Stormrage, 189538, 323689, 305663, 267242, 265127, 273889, 273361, 406715, 409193, 407296, 407294, 407298
720166, Beehemoth, 
720167, Mind Devourer, 183745, 166398
720168, Waveblade Hunter, 304927, 351759, 297972, 175935, 303677
720169, Ancient Seedbearer, 192921
720170, Vengeful Conqueror, 368402, 368034, 314400
720171, Void Destroyer, 314851, 307089, 307092, 315878
720172, Wake of Horror, 
720173, Fel Spawn, 
720174, Ravenous Slime, 318539, 347000, 366689
720175, Zandalari Crusader, 288624, 288631, 288791, 403169, 290450
720176, Void Fiend, 308448, 316632
720177, Shadowguard Voidcaster, 309035, 309819, 309648
720178, Void Bulb, 372187, 305344
720179, Void Tendril, 253069, 167012, 312854, 254008
720180, Void Discharge, 245746
720181, Blistering Tornado, 288526
720182, Image of Xavius, 427896, 175098, 432671, 432675, 432743
720183, Parasitic Shadow Demon, 318078, 413059
720184, King Atrigan, 442408, 363999, 405433, 419751, 419993, 342310, 347610
720185, Embodied Sorrow, 
720186, Unbound Wraith, 418188, 260197
720187, Beckoned Wraith, 280525, 366190, 363533
720188, Ancient Spellweaver, 270543, 298992, 304933, 314610
720189, Resurrected Brute, 255814, 319132, 360876
720190, Water of Vision, 
720191, Nightmare Antigen, 181394, 174793, 183001
720192, Diretusk Piglet, 175973, 166226, 161040, 304178, 304196
720193, Dark Manifestation, 308265, 304282, 306617
720194, Black Iron Guard, 198608, 234055
720195, Battleship Engineer, 155192, 174726, 155201, 285725, 289952
720196, Shadowfel Amalgamation, 280248, 233516, 238005
720197, Grand Apothecary Putress, 418425, 418426, 417774, 418540, 419223, 353573, 406771, 353588, 419229, 419232, 419231
720198, Varimathras, 371983, 372082, 315011, 334051, 294454, 269781
720199, Nathrezim Arcanist, 420806, 212625, 208626, 221696
720200, Nurgash Muckformed, 366102, 366115, 366111, 306289, 366074, 386059, 334575, 398339, 314587, 403810, 403535
720201, Chaotic Spatial Rift, 
720202, Chaotic Spatial Rift, 
720203, Heinrich Gustav, 
720204, Agnes, 
720205, Magnus, 
720206, Brawling Patron, 
720207, Brawling Patron, 
720208, Trade Facilitator, 430981
720209, Attendant Protector, 
720210, No'ah, 
720211, G.V.E.S.V.S., 
720212, Mortanis, 338899, 321633, 320196, 339658, 339642, 366847, 381247
720213, Undercity Guardian, 320465, 320007, 316047
720214, Royal Dreadguard, 413815, 337178
720215, Mech Jockey, 311456
720216, Goblin Landmine, 258210, 269560
720217, Dark Ranger, 225635, 241168, 241169, 241170, 241171, 241172
720218, Risen Skeleton, 334128, 333151
720219, Forsaken Blight Thrower, 
720220, Plague Wagon, 
720221, Horde Demolisher, 303221, 303213, 364180
720222, Dreadful Huntmaster, 277611
720223, Sandfury Firecaller, 152941, 175904
720224, Gurtogg Bloodboil, 309882, 184359, 184357
720225, Blademaster Jubei'thos, 394564, 183701, 432807, 331510
720226, Dia Darkwhisper, 418558, 420512, 347858, 317304
720227, Siegemaster Mar'tak, 320679, 356306, 403574, 358260, 267250, 267378, 419912
720228, Darktide Engineer, 
720229, Lesser Crawler Mine, 
720230, Frostbound Devoted, 242471
720231, Unstable Canister, 
720232, Gushing Slime, 405905, 361343
720233, Plaguebelcher, 366412, 363686, 360340
720234, Rancid Gasbag, 332836, 306929, 420176
720235, Bone Magus, 327729, 332650, 333714, 321216
720236, Achillite, 349274, 349954, 350468, 349934, 349933, 349942, 349987
720237, Vigilant Kuro, 176676, 176636, 254026
720238, Jonas, 
720239, Ivus the Decayed, 353573, 287554, 287542, 287549, 287546, 287552, 287589
720240, Kill Credit Bonus Objective Pct, 
720241, Kill Credit Bonus Objective Boss, 
720242, Zan-Tien Subjugator, 308179
720243, Tenebrous Gateway, 315693
720244, Void Gateway, 
720245, Soul Gateway, 
720246, Explosive Ordnance, 305674
720247, Repair Bot, 279044, 420047
720248, Margrave Krexus, 
720249, Test Subject, 
720250, Venture Co. Skyscorcher, 260372, 281621, 257416, 256205
720251, Tashara, 314587, 314524, 314474, 364121
720252, Crawling Corruption, 296510
720253, Loch Frenzy, 297837
720254, Lost Algan, 304546, 304481, 304098, 304025, 304026, 304027, 307344
720255, Hydrospawn, 275937
720256, Enraged Fathom Ray, 260634, 258945
720257, Waveblade Sentry, 305349, 304827, 275702
720258, The Devourer, 357441, 357455, 420061, 420079, 420035
720259, Light Knight, 419676, 419670, 419671, 419661, 419672, 321652
720260, Blix Swiftwing, 419952, 420051, 420002, 420004, 420084, 419959, 420100
720261, Talgathi Felmaw, 420613
720262, Maiden of Vigilance, 419336, 419337
720263, Kill Credit Bonus Objective Dungeon, 
720264, Kill Credit Bronze Dungeon, 
720265, Kill Credit Silver Dungeon, 
720266, Kill Credit Gold Dungeon, 
720267, Animated Offering, 257320, 263502
720268, Caustic Spiderling, 373927, 395363, 372045, 372044
720269, Firemine Smoker, 415524, 415523, 415522, 415521, 415555, 415556, 415557, 415559, 160249
720270, Ascendant of Flame, 357245, 357356, 357357, 357194, 357183, 357181, 357182
720271, Bloodfeaster Larva, 
720272, Subterranean Crawler, 
720273, Fractured Causality, 
720274, Vicious Warbanner, 320709
720275, Time Rift, 227247
720276, Burning Flamespeaker, 364122, 400960, 400964, 419274, 373248
720277, Blazing Punisher, 414993, 408358, 419540
720278, Mole Machine, 255685
720279, Soulscythe, 206303, 396400
720280, Ghastly Guard, 165114, 428130
720281, Lingering Ranger, 165114, 324541, 325034, 325033, 325036, 345079
720282, Spectral Footman, 165114, 344966, 209308
720283, Restless Foreman, 165114, 258889, 267156
720284, Tank Engineer, 165114
720285, Haunting Mauler, 165114, 209309, 345207
720286, Fallen Soldier, 165114, 159474
720287, Ethereal High Priest, 165114, 198934, 213625, 213638, 213648, 253505
720288, Fleeting Spirit, 223200
720289, Unrepentant Soul, 364240
720290, High Priest of Silvermoon, 
720291, Chronomatic Flux, 428219
720292, Unwoven Paradox, 393907, 417926
720293, Animated Riches, 438821, 438783
720294, Heart of the Mountain, 346121, 419540, 419274
720295, Pulsing Leech, 
720296, Volatile Tidesurger, 420170, 396400, 202062
720297, Venomous Spiderling, 372408
720298, Dambovita, 6016, 275986
720299, Chronomancer's Hourglass, 
720300, Eternals Research Archive, 
`;

const currentDate = new Date().toLocaleDateString(); // Get the current date in a readable format

// Set the text for the "Last Updated" paragraph
const lastUpdatedElement = document.getElementById('last-updated');
lastUpdatedElement.textContent = `Last Updated: ${currentDate}`; // Display the date below the title

// Parsing the data into a structured format
const creatures = rawCreatureData
    .trim() // Remove leading/trailing spaces
    .split('\n') // Split data into lines
    .map(line => {
        const [id, name, ...abilities] = line.split(',').map(item => item.trim());
        return {
            id: parseInt(id, 10),
            name,
            abilities: abilities.map(Number), // Convert ability IDs to numbers
        };
    });

const creatureList = document.getElementById('creature-list');
const searchInput = document.getElementById('search');

// Function to render creatures with spell names and icons using WoWhead tooltips
function renderCreatures(data) {
    creatureList.innerHTML = '';  // Clear the list first
    data.forEach(creature => {
        const card = document.createElement('div');
        card.className = 'card';

        // Create the HTML structure for the card
        const abilitiesContainer = `<div class="abilities"></div>`;
        const buttonHTML = `<button class="open-spells-btn">Open All Spells (0)</button>`; // Default with 0 spells

        card.innerHTML = `
            <h2 title="${creature.name}">${creature.id} : ${creature.name}</h2>
            ${buttonHTML}
            ${abilitiesContainer}
        `;

        // Append the creature card to the list
        creatureList.appendChild(card);

        // For each ability, render the WoWhead tooltip link
        creature.abilities.forEach(spellId => {
            const abilitiesContainer = card.querySelector('.abilities');

            // Create the element for the spell link (with WoWhead tooltip)
            const spellLink = document.createElement('a');
            spellLink.href = `https://www.wowhead.com/spell=${spellId}`;
            spellLink.target = '_blank';
            spellLink.setAttribute('data-wowhead', `spell=${spellId}`);

            // Create the span for the icon (WoWhead will populate the icon)
            const spellIcon = document.createElement('span');
            spellIcon.className = 'spell-icon';

            // Append the icon and the link
            spellLink.appendChild(spellIcon);
            abilitiesContainer.appendChild(spellLink);
        });

        // Update the button text to reflect the number of spells
        const openSpellsButton = card.querySelector('.open-spells-btn');
        openSpellsButton.textContent = `Open All Spells (${creature.abilities.length})`; // Update button with spell count
    });

    // Re-initialize WoWhead tooltips after the content is dynamically added
    if (typeof WH !== 'undefined' && WH.Tooltip) {
        WH.Tooltip.reset(); // Reset tooltips for dynamically added content
    }
}

// Filter creatures based on search input
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredCreatures = creatures.filter(c =>
        c.name.toLowerCase().includes(searchValue)
    );
    renderCreatures(filteredCreatures); // Re-render creatures with filtered data
});

// Initial render
renderCreatures(creatures);

document.addEventListener("DOMContentLoaded", function() {

    // Get the current date and subtract 7 days to get the date from one week ago
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 7);

    // Format the date to display with the month in English
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options); // English month name format

    // Set the text for the "Last Updated" paragraph
    const lastUpdatedElement = document.getElementById('last-updated');
    lastUpdatedElement.textContent = `Last Updated: ${formattedDate}`; // Display the date below the title

    // Add event listeners to all "Open All Spells" buttons
    const openSpellButtons = document.querySelectorAll('.open-spells-btn');
    
    openSpellButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const card = button.closest('.card'); // Find the closest card to the button
            const spellLinks = card.querySelectorAll('.abilities a'); // Get all the spell links in the card
            
            spellLinks.forEach(function(link) {
                // Open each spell link in a new tab
                window.open(link.href, '_blank');
            });
        });
    });
});
