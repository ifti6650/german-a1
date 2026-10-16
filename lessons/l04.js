// Lektion 4 · "Das Bild ist so schön." (Momente A1.1, Modul 2)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 5.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 4, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);

  const objectives = [
    { id: 'L4-O1', text: 'Name furniture with its article (der, das, die) and a capital letter.', kind: 'grammar' },
    { id: 'L4-O2', text: 'Refer to things with er, es, sie (= it).', kind: 'grammar' },
    { id: 'L4-O3', text: 'Describe things with sein + adjective (Der Tisch ist zu teuer).', kind: 'communication' },
    { id: 'L4-O4', text: 'Give your opinion with finden (Ich finde das Sofa bequem).', kind: 'communication' },
    { id: 'L4-O5', text: 'Ask about and say prices; numbers up to a million.', kind: 'communication' }
  ];

  const learn = [
    { id: 'nouns', title: 'Nouns: capital letter and gender', objective: 'L4-O1', href: GB + '51-nouns-have-capital-letters-and-a-gender',
      text: 'Every German noun starts with a capital letter and has one of three genders: der, das or die. Always learn the noun together with its article.',
      table: [['der Tisch, der Stuhl, der Schrank', 'masculine (der)'], ['das Bett, das Sofa, das Regal', 'neuter (das)'], ['die Lampe, die Tasche', 'feminine (die)']] },
    { id: 'gender-hints', title: 'Hints for guessing the gender', objective: 'L4-O1', href: GB + '52-hints-for-guessing-the-gender',
      text: 'A few endings help. Many nouns ending in -e are die (die Lampe), but not all. Nouns ending in -ung, -heit and -keit are always die. Nouns ending in -chen are always das.' },
    { id: 'it', title: 'er, es, sie also mean “it”', objective: 'L4-O2', href: GB + '53-er-es-sie-also-mean-it',
      text: 'The pronoun follows the article of the noun, not whether it is a person or a thing.',
      table: [['der Tisch → er', 'Der Tisch? Er ist neu.'], ['das Sofa → es', 'Das Sofa? Es ist bequem.'], ['die Lampe → sie', 'Die Lampe? Sie ist schön.']],
      mistakes: [['Der Spiegel ist schön. Es kostet 40 Euro.', 'Er kostet 40 Euro.', 'der Spiegel → er.']] },
    { id: 'describing', title: 'Describing things: sein + adjective', objective: 'L4-O3', href: GB + '54-describing-things-sein--adjective',
      text: 'After sein, the adjective does not change. zu = too.',
      table: [['groß ↔ klein', 'big ↔ small'], ['teuer ↔ billig / günstig', 'expensive ↔ cheap / good value'], ['neu ↔ alt', 'new ↔ old'], ['schön ↔ hässlich', 'beautiful ↔ ugly'], ['bequem · praktisch · modern', 'comfortable · practical · modern']],
      examples: [['Der Schrank ist zu groß.', 'The wardrobe is too big.'], ['Das Bild ist so schön!', 'The picture is so beautiful!']] },
    { id: 'finden', title: 'Giving your opinion with finden', objective: 'L4-O4', href: GB + '55-giving-your-opinion-with-finden',
      text: 'finden = to find / to think. Like arbeiten, it adds -e- with du and er/sie: du findest, er findet.',
      examples: [['Wie findest du das Sofa? – Ich finde es bequem.', 'What do you think of the sofa? – I find it comfortable.'], ['Ich finde die Lampe hässlich.', 'I think the lamp is ugly.']],
      mistakes: [['Er find das Bild toll.', 'Er findet das Bild toll.', 'Stem find- + e + t.']] },
    { id: 'prices', title: 'Prices and numbers up to a million', objective: 'L4-O5', href: GB + '56-numbers-from-100-to-a-million-and-prices',
      table: [['100 · 200 · 350', 'hundert · zweihundert · dreihundertfünfzig'], ['1.000 · 1.200', 'tausend · tausendzweihundert'], ['1.000.000', 'eine Million'], ['2,50 €', 'zwei Euro fünfzig'], ['0,99 €', 'neunundneunzig Cent']],
      examples: [['Was kostet das Regal? – Es kostet 49 Euro.', 'How much is the shelf? – It costs 49 euros.']] }
  ];

  const art = (id, noun, hint, a, ex) => q({ id, topic: 'articles', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L4-O1', instructions: 'Choose the article.', prompt: noun, hint, options: ['der', 'die', 'das'], answer: a, explanation: ex || `${a} ${noun}.`, learnHref: GB + '51-nouns-have-capital-letters-and-a-gender' });
  const practice = [
    art('L04-P-01', 'Tisch', 'table', 'der'), art('L04-P-02', 'Lampe', 'lamp', 'die'), art('L04-P-03', 'Bett', 'bed', 'das'), art('L04-P-04', 'Schrank', 'wardrobe', 'der'), art('L04-P-05', 'Regal', 'shelf', 'das'),
    q({ id: 'L04-P-06', topic: 'articles', skill: 'grammar', grammar: 'capital-nouns', type: 'mc', objective: 'L4-O1', instructions: 'Which sentence is written correctly?', prompt: 'The chair is comfortable.', options: ['Der Stuhl ist bequem.', 'der stuhl ist bequem.', 'Der stuhl ist bequem.', 'Der Stuhl ist Bequem.'], answer: 'Der Stuhl ist bequem.', explanation: 'Nouns have a capital letter, adjectives do not.' }),
    q({ id: 'L04-P-07', topic: 'articles', skill: 'grammar', grammar: 'gender-hints', type: 'mc', objective: 'L4-O1', instructions: 'Choose one.', prompt: 'Nouns with this ending are always die:', options: ['-ung', '-chen', '-er', '-o'], answer: '-ung', explanation: '-ung, -heit, -keit → die. -chen → das.', learnHref: GB + '52-hints-for-guessing-the-gender' }),
    q({ id: 'L04-P-08', topic: 'it-pronouns', skill: 'grammar', grammar: 'er-es-sie', type: 'gap', objective: 'L4-O2', instructions: 'Fill in er, es or sie.', prompt: 'Das Sofa ist toll. ___ ist sehr bequem.', answer: [['Es']], explanation: 'das Sofa → es.', learnHref: GB + '53-er-es-sie-also-mean-it' }),
    q({ id: 'L04-P-09', topic: 'it-pronouns', skill: 'grammar', grammar: 'er-es-sie', type: 'gap', objective: 'L4-O2', instructions: 'Fill in er, es or sie.', prompt: 'Wie ist die Lampe? – ___ ist modern.', answer: [['Sie']], explanation: 'die Lampe → sie.' }),
    q({ id: 'L04-P-10', topic: 'it-pronouns', skill: 'grammar', grammar: 'er-es-sie', type: 'mc', objective: 'L4-O2', instructions: 'Choose the pronoun.', prompt: 'Der Spiegel ist schön. … kostet 40 Euro.', options: ['Er', 'Es', 'Sie'], answer: 'Er', explanation: 'der Spiegel → er.' }),
    q({ id: 'L04-P-11', topic: 'adjectives', skill: 'vocabulary', type: 'match', objective: 'L4-O3', instructions: 'Match the adjective with its meaning.', prompt: '', pairs: [['teuer', 'expensive'], ['billig', 'cheap'], ['neu', 'new'], ['bequem', 'comfortable'], ['hässlich', 'ugly']], explanation: 'Adjectives for describing things.', learnHref: GB + '54-describing-things-sein--adjective' }),
    q({ id: 'L04-P-12', topic: 'adjectives', skill: 'vocabulary', type: 'mc', objective: 'L4-O3', instructions: 'Choose the opposite.', prompt: 'Das Bett ist nicht neu, es ist …', options: ['alt', 'groß', 'teuer', 'modern'], answer: 'alt', explanation: 'neu ↔ alt.' }),
    q({ id: 'L04-P-13', topic: 'finden', skill: 'grammar', grammar: 'present-tense-t-stem', type: 'gap', objective: 'L4-O4', instructions: 'Fill in finden.', prompt: 'Wie ___ du das Bild? – Ich ___ es super.', answer: [['findest'], ['finde']], explanation: 'du findest, ich finde.', learnHref: GB + '55-giving-your-opinion-with-finden' }),
    q({ id: 'L04-P-14', topic: 'finden', skill: 'grammar', grammar: 'present-tense-t-stem', type: 'conjugation', objective: 'L4-O4', instructions: 'Write the verb form.', prompt: 'er + finden →', answer: 'findet', explanation: 'er find-e-t.' }),
    q({ id: 'L04-P-15', topic: 'finden', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L4-O4', instructions: 'Put the words in order.', prompt: 'I think the lamp is beautiful.', tokens: ['finde', 'Ich', 'Lampe', 'die', 'schön'], answer: 'Ich finde die Lampe schön', explanation: 'Ich – finde – die Lampe – schön.' }),
    q({ id: 'L04-P-16', topic: 'adjectives', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L4-O3', instructions: 'Put the words in order.', prompt: 'The sofa is too expensive.', tokens: ['ist', 'zu', 'Das', 'Sofa', 'teuer'], answer: 'Das Sofa ist zu teuer', explanation: 'zu = too.' }),
    q({ id: 'L04-P-17', topic: 'prices', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L4-O5', instructions: 'Put the words in order.', prompt: 'How much is the shelf?', tokens: ['kostet', 'Was', 'Regal', 'das'], answer: 'Was kostet das Regal', explanation: 'Was kostet …?' }),
    q({ id: 'L04-P-18', topic: 'numbers', skill: 'vocabulary', type: 'mc', objective: 'L4-O5', instructions: 'Choose the number.', prompt: 'Which word is 350?', options: ['dreihundertfünfzig', 'dreihundertfünfzehn', 'dreitausendfünfzig', 'fünfzigdreihundert'], answer: 'dreihundertfünfzig', explanation: 'drei-hundert-fünfzig.', learnHref: GB + '56-numbers-from-100-to-a-million-and-prices' }),
    q({ id: 'L04-P-19', topic: 'numbers', skill: 'writing', type: 'translate', objective: 'L4-O5', instructions: 'Write the number in words.', prompt: '1000', answer: 'tausend', accept: ['eintausend'], explanation: '1000 = tausend / eintausend.' }),
    q({ id: 'L04-P-20', topic: 'numbers', skill: 'writing', type: 'translate', objective: 'L4-O5', instructions: 'Write the number in words.', prompt: '200', answer: 'zweihundert', explanation: '200 = zweihundert.' }),
    q({ id: 'L04-P-21', topic: 'prices', skill: 'listening', type: 'listen', objective: 'L4-O5', instructions: 'Listen and answer.', prompt: 'How much is the table?', audio: 'Der Tisch kostet neunundachtzig Euro.', options: ['89 €', '98 €', '19 €', '80 €'], answer: '89 €', explanation: 'neun-und-achtzig = 89.' }),
    q({ id: 'L04-P-22', topic: 'finden', skill: 'listening', type: 'listen', objective: 'L4-O4', instructions: 'Listen and answer.', prompt: 'What does the speaker think about the sofa?', audio: 'Das Sofa kostet zweihundertfünfzig Euro. Das ist zu teuer!', options: ['It is too expensive.', 'It is cheap.', 'It is ugly.', 'It is uncomfortable.'], answer: 'It is too expensive.', explanation: 'zu teuer = too expensive.' }),
    q({ id: 'L04-P-23', topic: 'it-pronouns', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L4-O2', instructions: 'Listen and write the sentences.', prompt: '', audio: 'Der Schrank ist groß. Er kostet hundert Euro.', answer: 'Der Schrank ist groß. Er kostet hundert Euro.', accept: ['Der Schrank ist groß, er kostet hundert Euro.', 'Der Schrank ist groß. Er kostet 100 Euro.'], explanation: 'der Schrank → er.' }),
    q({ id: 'L04-P-24', topic: 'adjectives', skill: 'writing', type: 'translate', objective: 'L4-O3', instructions: 'Write it in German.', prompt: 'The chair is comfortable.', answer: 'Der Stuhl ist bequem.', explanation: 'der Stuhl + ist + bequem.' }),
    q({ id: 'L04-P-25', topic: 'finden', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L4-O4', instructions: 'Write it in German.', prompt: 'I think the lamp is ugly.', answer: 'Ich finde die Lampe hässlich.', explanation: 'Ich finde + noun + adjective.' }),
    q({ id: 'L04-P-26', topic: 'prices', skill: 'writing', type: 'translate', objective: 'L4-O5', instructions: 'Write it in German.', prompt: 'How much is the bed?', answer: 'Was kostet das Bett?', accept: ['Wie viel kostet das Bett?'], explanation: 'Was kostet …? / Wie viel kostet …?' }),
    q({ id: 'L04-P-27', topic: 'prices', skill: 'vocabulary', type: 'mc', objective: 'L4-O5', instructions: 'How do you say the price?', prompt: '2,50 €', options: ['zwei Euro fünfzig', 'zweihundertfünfzig Euro', 'zwei Euro fünf', 'fünfzig Euro zwei'], answer: 'zwei Euro fünfzig', explanation: 'Euros first, then cents (without the word Cent).' }),
    q({ id: 'L04-P-28', topic: 'adjectives', skill: 'vocabulary', type: 'gap', objective: 'L4-O3', instructions: 'Write the adjective (cheap).', prompt: 'Der Teppich ist nicht teuer, er ist ___.', answer: [['billig', 'günstig']], explanation: 'teuer ↔ billig / günstig.' })
  ];

  const DIALOG = 'Schau mal, das Regal! Wie findest du es? – Ich finde es praktisch. Was kostet es? – Nur fünfunddreißig Euro. – Super, das ist günstig!';
  const READ = 'Flohmarkt am Samstag!\nSofa, grau, sehr bequem – 120 Euro\nLampe, modern – 15 Euro\nSpiegel, alt, aber schön – 30 Euro';
  const apply = [
    q({ id: 'L04-A-01', topic: 'finden', skill: 'listening', type: 'listen', objective: 'L4-O4', instructions: 'Listen to the conversation.', prompt: 'What are they looking at?', audio: DIALOG, options: ['a shelf', 'a sofa', 'a mirror', 'a lamp'], answer: 'a shelf', explanation: 'das Regal = shelf.' }),
    q({ id: 'L04-A-02', topic: 'prices', skill: 'listening', type: 'listen', objective: 'L4-O5', instructions: 'Listen again.', prompt: 'How much does it cost?', audio: DIALOG, options: ['35 €', '53 €', '25 €', '45 €'], answer: '35 €', explanation: 'fünfunddreißig = 35.' }),
    q({ id: 'L04-A-03', topic: 'prices', skill: 'reading', type: 'reading', objective: 'L4-O5', instructions: 'Read the advert.', passage: READ, prompt: 'Was kostet die Lampe?', options: ['15 Euro', '30 Euro', '120 Euro'], answer: '15 Euro', explanation: 'Lampe, modern – 15 Euro.' }),
    q({ id: 'L04-A-04', topic: 'adjectives', skill: 'reading', type: 'reading', objective: 'L4-O3', instructions: 'Read the advert.', passage: READ, prompt: 'Wie ist das Sofa?', options: ['grau und bequem', 'alt und schön', 'modern'], answer: 'grau und bequem', explanation: 'Sofa, grau, sehr bequem.' }),
    q({ id: 'L04-A-05', topic: 'adjectives', skill: 'reading', type: 'reading', objective: 'L4-O3', instructions: 'Read the advert.', passage: READ, prompt: 'Was ist alt?', options: ['der Spiegel', 'das Sofa', 'die Lampe'], answer: 'der Spiegel', explanation: 'Spiegel, alt, aber schön.' }),
    q({ id: 'L04-A-06', topic: 'adjectives', skill: 'writing', type: 'writing', objective: 'L4-O3', instructions: 'Describe three things in your room (4–6 sentences).', prompt: 'What is it like? What do you think of it? How much did it cost?',
      rubric: ['Every noun has the right article and a capital letter.', 'I use er / es / sie for the things.', 'I give an opinion with finden.', 'I write one price in words.'],
      model: 'Das ist mein Zimmer. Der Schrank ist groß und alt. Er ist aus Holz. Das Sofa ist neu. Ich finde es sehr bequem. Die Lampe kostet neunzehn Euro. Sie ist praktisch.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L04-A-07', topic: 'prices', skill: 'speaking', type: 'speaking', objective: 'L4-O5', instructions: 'Role-play (out loud) at a flea market.', prompt: 'Ask for the price of two things, give your opinion, and say one is too expensive.',
      rubric: ['I asked: Was kostet …?', 'I said a price in German.', 'I gave an opinion: Ich finde … schön / hässlich.', 'I said: Das ist zu teuer.'],
      model: '– Was kostet der Spiegel?\n– Dreißig Euro.\n– Hm, ich finde ihn schön. Und was kostet das Sofa?\n– Hundertzwanzig Euro.\n– Das ist zu teuer!', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    art('L04-T-01', 'Stuhl', 'chair', 'der'), art('L04-T-02', 'Bild', 'picture', 'das'), art('L04-T-03', 'Sofa', 'sofa', 'das'),
    q({ id: 'L04-T-04', topic: 'it-pronouns', skill: 'grammar', grammar: 'er-es-sie', type: 'mc', objective: 'L4-O2', instructions: 'Choose the pronoun.', prompt: 'Das Regal ist praktisch. … ist neu.', options: ['Es', 'Er', 'Sie'], answer: 'Es', explanation: 'das Regal → es.' }),
    q({ id: 'L04-T-05', topic: 'it-pronouns', skill: 'grammar', grammar: 'er-es-sie', type: 'gap', objective: 'L4-O2', instructions: 'Fill in er, es or sie.', prompt: 'Wie ist die Lampe? – ___ ist zu klein.', answer: [['Sie']], explanation: 'die Lampe → sie.' }),
    q({ id: 'L04-T-06', topic: 'finden', skill: 'grammar', grammar: 'present-tense-t-stem', type: 'gap', objective: 'L4-O4', instructions: 'Fill in finden.', prompt: 'Ihr ___ das Bild toll, oder?', answer: [['findet']], explanation: 'ihr findet.' }),
    q({ id: 'L04-T-07', topic: 'adjectives', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L4-O3', instructions: 'Put the words in order.', prompt: 'The wardrobe is too big.', tokens: ['ist', 'Der', 'groß', 'Schrank', 'zu'], answer: 'Der Schrank ist zu groß', explanation: 'Der Schrank – ist – zu groß.' }),
    q({ id: 'L04-T-08', topic: 'finden', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L4-O4', instructions: 'Put the words in order.', prompt: 'I find it boring.', tokens: ['finde', 'Ich', 'langweilig', 'es'], answer: 'Ich finde es langweilig', explanation: 'Ich – finde – es – langweilig.' }),
    q({ id: 'L04-T-09', topic: 'adjectives', skill: 'vocabulary', type: 'mc', objective: 'L4-O3', instructions: 'Choose the opposite.', prompt: 'teuer ↔ …', options: ['billig', 'neu', 'schön', 'klein'], answer: 'billig', explanation: 'teuer ↔ billig.' }),
    q({ id: 'L04-T-10', topic: 'numbers', skill: 'writing', type: 'translate', objective: 'L4-O5', instructions: 'Write the number in words.', prompt: '500', answer: 'fünfhundert', explanation: '500 = fünfhundert.' }),
    q({ id: 'L04-T-11', topic: 'numbers', skill: 'vocabulary', type: 'mc', objective: 'L4-O5', instructions: 'Choose the number.', prompt: 'Which word is 1.200?', options: ['tausendzweihundert', 'zwölfhunderttausend', 'einhundertzwanzig', 'zweitausendeinhundert'], answer: 'tausendzweihundert', explanation: '1.200 = (ein)tausendzweihundert.' }),
    q({ id: 'L04-T-12', topic: 'prices', skill: 'listening', type: 'listen', objective: 'L4-O5', instructions: 'Listen and answer.', prompt: 'How much is the lamp?', audio: 'Die Lampe kostet neunzehn Euro neunzig.', options: ['19,90 €', '90,19 €', '9,90 €', '19,09 €'], answer: '19,90 €', explanation: 'neunzehn Euro neunzig = 19,90 €.' }),
    q({ id: 'L04-T-13', topic: 'adjectives', skill: 'reading', type: 'reading', objective: 'L4-O3', instructions: 'Read and answer.', passage: 'Mein Zimmer ist toll! Das Bett ist groß und bequem.\nDer Schrank ist alt, aber schön. Nur der Stuhl ist hässlich.', prompt: 'Was ist hässlich?', options: ['der Stuhl', 'das Bett', 'der Schrank'], answer: 'der Stuhl', explanation: 'Nur der Stuhl ist hässlich.' }),
    q({ id: 'L04-T-14', topic: 'adjectives', skill: 'writing', type: 'translate', objective: 'L4-O3', instructions: 'Write it in German.', prompt: 'The table is new.', answer: 'Der Tisch ist neu.', explanation: 'der Tisch + ist + neu.' }),
    q({ id: 'L04-T-15', topic: 'furniture', skill: 'vocabulary', type: 'match', objective: 'L4-O1', instructions: 'Match.', prompt: '', pairs: [['der Tisch', 'table'], ['das Bett', 'bed'], ['der Schrank', 'wardrobe'], ['das Regal', 'shelf'], ['der Spiegel', 'mirror']], explanation: 'Furniture.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
