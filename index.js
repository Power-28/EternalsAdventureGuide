// Data input (entry, name, abilitiesList format)
const rawCreatureData = `
740000, Void Discharge, 245746,252722,248128
740001, Waning Void, 224179,249755
740002, Subjugated Voidlord, 175286,157176,246692,253068
740003, Seething Voidripper, 215466,197783,219112,207166
740004, Ravenous Voidbeast, 185982,242021,207720,167039
740005, BOOM!, 219614,163379
740006, Uncrowned Bruiser, 238595,252173,221243
740007, Licensed Arcano-Hustler, 241069,252456,126936
740008, Freelance Backstabber, 135343,135345,231426,231427
740009, On-Call Medic, 242194,251075,194482,249677
740010, Mariath, 249457,249440,249399
740011, Bursting Elemental, 251888,251896,252575
740012, Crimson Construct, 250761,174124
740013, Congealed Plasma, 145271,250262,250263
740014, Ishamael, 142201,249235,212258,249245,249244,249934,209329
740015, Ishamael?, 98581,249242,249243
`;

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

    /*
    // Get the current date and subtract 7 days to get the date from one week ago
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 7);
    */

    // Last Updated
    const currentDate = new Date('2025-05-04'); // (YYYY-MM-DD)

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
