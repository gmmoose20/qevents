  const events = [{
      name: 'Fast Hands',
      mechanics: 'The GM/Admin will system shout a word/words or sometimes a phrase/sentence and first one to shout him/her with the correct answer wins. You need at least 8 fingers to win this.'
    },
    {
      name: 'Q&A',
      mechanics: 'The GM/Admin will system shout a question and first to shout him/her with the correct answer wins(thanks, captain obvious).'
    },
    {
      name: 'Riddle Me This',
      mechanics: 'Riddle; answer. \'Nuff said. Just kidding. The GM/Admin will system shout a riddle and the first one to shout him/her with the correct answer wins.'
    },
    {
      name: 'Hide & Seek',
      mechanics: 'The GM/Admin will hide somewhere all around Madrigal(the whole flyff world and stuff), disguised as a Masquerpet(monster/mob/whatever you call it) or not and the first one who found and traded him/her wins.'
    },
    {
      name: 'Fill in the blanks',
      mechanics: 'The GM/Admin will system shout a word/s with missing letter/s with clues included so keep calm and first one to shout him/her wins. Wrong spelling wrong. Aight.'
    },
    {
      name: 'Guessing Game',
      mechanics: 'Guess it. The GM/Admin will system shout a random nameless part of his/her gear and the first one to shout him/her with the correct name for the designated random gear part wins. My explanation is complicated, I know. Just take a look at them screenshots.'
    },
    {
      name: 'Unscramble',
      mechanics: 'The GM/Admin will system shout an intentionally misspelled word/s and the first one to shout with the correct spelling/answer wins.'
    },
    {
      name: 'Q&A(Math Edition)',
      mechanics: 'The GM/Admin will system shout an arithmetic problem and the first one to shout him/her the correct answer wins.'
    },
    {
      name: 'Run & Sit',
      mechanics: 'The GM/Admin will system shout a place where the event will be held(often times at Collecting Area of Flaris/Saint Morning/Darkon). He/she will then hide by being invisible while players are running around the Collecting Area. The player who will luckily sit beside him/her after he/she said stop, wins.'
    },
    {
      name: 'Bring Me',
      mechanics: 'The GM/Admin will system shout the name of the item/s/quest item/s, often times with quantity, and the first one to bring him/her the exact amount and item/s/quest item/s wins, hence, bring me.'
    },
    {
      name: 'Players Choice',
      mechanics: 'The GM/Admin will let the players decide what event to do'
    },
    {
      name: 'Monster Invasion',
      mechanics: 'The GM/Admin summons monsters for everyone to kill :)'
    },
    {
      name: 'Whats in my Egg',
      mechanics: 'The GM/Admin hatch an egg and the players have to guess which pet will it be when it hatches'
    },
  ]


  const randEvent = Math.floor(Math.random() * events.length);

  const setRandomEvent = () => {
    const randEvent = Math.floor(Math.random() * events.length);
    document.getElementById('random-event').innerHTML = `<h2>Todays Event is: </h2>
    <div class="result">
    <h3>"${events[randEvent].name}"</h3>
    <p>${events[randEvent].mechanics}</p>
    </div>
    `
    document.getElementById('generate').innerText = 'More Events...'
  }
  document.getElementById('generate').addEventListener('click', setRandomEvent);