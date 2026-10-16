// Lektion 15 · "Ich finde ihr Zimmer schön." (Momente A1.2, Modul 5)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 16.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 15, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const own = (id, prompt, a, ex, opts) => q({ id, topic: 'possessives', skill: 'grammar', grammar: 'possessive-articles', type: 'mc', objective: 'L15-O1', instructions: 'Choose the possessive article.', prompt, options: opts, answer: a, explanation: ex, learnHref: GB + '161-who-owns-it' });
  const end = (id, prompt, a, ex) => q({ id, topic: 'possessive-endings', skill: 'grammar', grammar: 'possessive-endings', type: 'gap', objective: 'L15-O3', instructions: 'Fill in the possessive with the right ending.', prompt, answer: a, explanation: ex, learnHref: GB + '162-endings-the-same-as-ein--kein' });

  const objectives = [
    { id: 'L15-O1', text: 'Use all possessive articles: mein, dein, sein, ihr, unser, euer, ihr, Ihr.', kind: 'grammar' },
    { id: 'L15-O2', text: 'Choose sein or ihr by looking at the owner.', kind: 'grammar' },
    { id: 'L15-O3', text: 'Add the ein/kein endings to possessives in the nominative, accusative and dative.', kind: 'grammar' },
    { id: 'L15-O4', text: 'Name rooms and furniture and describe a flat (size, location, rent, opinion).', kind: 'communication' },
    { id: 'L15-O5', text: 'Give an opinion with finden: Ich finde … schön / zu klein.', kind: 'communication' }
  ];

  const learn = [
    { id: 'owners', title: 'Who owns it?', objective: 'L15-O1', href: GB + '161-who-owns-it',
      table: [['ich → mein', 'du → dein'], ['er / es → sein', 'sie (she) → ihr'], ['wir → unser', 'ihr → euer'], ['sie (they) → ihr', 'Sie → Ihr (capital I)']],
      text: 'ihr has three meanings: her, their, and (with a capital I) your (polite). Context tells you which.' },
    { id: 'sein-ihr', title: 'sein or ihr?', objective: 'L15-O2', href: GB + '161-who-owns-it',
      text: 'Look at the owner, not at the thing. A man’s thing → sein. A woman’s thing → ihr. Several people’s thing → ihr.',
      table: [['Jonas und seine Mutter', 'Jonas and his mother'], ['Lena und ihr Vater', 'Lena and her father'], ['Die Müllers und ihr Haus', 'The Müllers and their house']],
      mistakes: [['Lena und sein Bruder', 'Lena und ihr Bruder', 'The owner (Lena) is female → ihr.']] },
    { id: 'endings', title: 'Endings: the same as ein / kein', objective: 'L15-O3', href: GB + '162-endings-the-same-as-ein--kein',
      text: 'The ending depends on the gender and case of the thing, not of the owner.',
      table: [['Nominative', 'mein Balkon · mein Bad · meine Küche · meine Zimmer'], ['Accusative', 'meinen Balkon · mein Bad · meine Küche · meine Zimmer'], ['Dative', 'meinem Balkon · meinem Bad · meiner Küche · meinen Zimmern'], ['euer + ending', 'eure Wohnung, euren Garten (drop the second e)']],
      mistakes: [['Ich finde ihr Balkon schön.', 'Ich finde ihren Balkon schön.', 'finden + accusative; der Balkon → ihren.'], ['euere Küche', 'eure Küche', 'euer drops the e before an ending.']] },
    { id: 'flat', title: 'Describing a flat', objective: 'L15-O4', href: GB + '163-describing-a-flat',
      table: [['das Wohnzimmer · das Schlafzimmer · das Kinderzimmer', 'living room · bedroom · children’s room'], ['die Küche · das Bad · der Flur · der Balkon', 'kitchen · bathroom · hall · balcony'], ['das Bett · der Schrank · das Sofa · der Tisch', 'bed · wardrobe · sofa · table'], ['Die Wohnung hat drei Zimmer. Sie ist 70 Quadratmeter groß.', 'The flat has three rooms. It is 70 m².'], ['Sie liegt im Zentrum / im zweiten Stock.', 'It is in the centre / on the second floor.'], ['Die Miete ist 850 Euro warm.', 'The rent is €850 incl. heating.']] },
    { id: 'finden', title: 'Opinions with finden', objective: 'L15-O5', href: GB + '163-describing-a-flat',
      text: 'Ich finde + accusative + adjective. Useful pairs: hell – dunkel, groß – klein, ruhig – laut, modern – alt, teuer – günstig, gemütlich.',
      examples: [['Ich finde eure Küche sehr gemütlich.', 'I think your kitchen is very cosy.'], ['Ich finde das Schlafzimmer zu dunkel.', 'I think the bedroom is too dark.']] }
  ];

  const practice = [
    own('L15-P-01', 'Das ist Tom. … Zimmer ist groß.', 'Sein', 'Tom (male) → sein.', ['Sein', 'Ihr', 'Mein', 'Unser']),
    own('L15-P-02', 'Das ist Eva. … Wohnung ist hell.', 'Ihre', 'Eva (female) → ihr; die Wohnung → ihre.', ['Ihre', 'Seine', 'Ihr', 'Sein']),
    own('L15-P-03', 'Wir wohnen hier. … Haus ist alt.', 'Unser', 'wir → unser; das Haus → unser.', ['Unser', 'Unsere', 'Euer', 'Ihr']),
    own('L15-P-04', 'Frau Koch, ist das … Schlüssel?', 'Ihr', 'Sie (polite) → Ihr; der Schlüssel (nominative) → Ihr.', ['Ihr', 'ihr', 'Ihre', 'sein']),
    q({ id: 'L15-P-05', topic: 'possessives', skill: 'grammar', grammar: 'possessive-articles', type: 'match', objective: 'L15-O1', instructions: 'Match the person and the possessive.', prompt: '', pairs: [['ich', 'mein'], ['er', 'sein'], ['sie (she)', 'ihr'], ['wir', 'unser'], ['ihr (you all)', 'euer']], explanation: 'Possessive articles.', learnHref: GB + '161-who-owns-it' }),
    q({ id: 'L15-P-06', topic: 'possessives', skill: 'grammar', grammar: 'possessive-articles', type: 'gap', objective: 'L15-O1', instructions: 'Fill in the possessive (nominative).', prompt: 'Kinder, wo ist ___ Ball? (ihr, you all)', answer: [['euer']], explanation: 'ihr (you all) → euer; der Ball → euer.' }),
    q({ id: 'L15-P-07', topic: 'sein-ihr', skill: 'grammar', grammar: 'possessive-articles', type: 'mc', objective: 'L15-O2', instructions: 'sein or ihr?', prompt: 'Peter und … Schwester', options: ['seine', 'ihre', 'sein', 'ihr'], answer: 'seine', explanation: 'Peter → sein; die Schwester → seine.', learnHref: GB + '161-who-owns-it' }),
    q({ id: 'L15-P-08', topic: 'sein-ihr', skill: 'grammar', grammar: 'possessive-articles', type: 'mc', objective: 'L15-O2', instructions: 'sein or ihr?', prompt: 'Anna und … Bruder', options: ['ihr', 'sein', 'ihre', 'seine'], answer: 'ihr', explanation: 'Anna → ihr; der Bruder → ihr.' }),
    q({ id: 'L15-P-09', topic: 'sein-ihr', skill: 'grammar', grammar: 'possessive-articles', type: 'mc', objective: 'L15-O2', instructions: 'Choose the possessive.', prompt: 'Herr und Frau Weber und … Kinder', options: ['ihre', 'seine', 'ihr', 'unsere'], answer: 'ihre', explanation: 'Several owners → ihr; plural → ihre.' }),
    end('L15-P-10', 'Ich finde ___ Balkon schön. (ihr, her)', [['ihren']], 'finden + accusative; der Balkon → ihren.'),
    end('L15-P-11', 'Wir besuchen ___ Eltern. (unser)', [['unsere']], 'die Eltern (plural, accusative) → unsere.'),
    end('L15-P-12', 'Er wohnt mit ___ Freundin zusammen. (sein)', [['seiner']], 'mit + dative; die Freundin → seiner.'),
    end('L15-P-13', 'Wie groß ist ___ Wohnung? (euer)', [['eure']], 'euer + e → eure (drop the second e).'),
    q({ id: 'L15-P-14', topic: 'possessive-endings', skill: 'grammar', grammar: 'possessive-endings', type: 'mc', objective: 'L15-O3', instructions: 'Choose the correct form.', prompt: 'Hast du … Schlüssel? (dein, der Schlüssel, accusative)', options: ['deinen', 'dein', 'deine', 'deinem'], answer: 'deinen', explanation: 'der → accusative -en: deinen.' }),
    q({ id: 'L15-P-15', topic: 'possessive-endings', skill: 'grammar', grammar: 'possessive-endings', type: 'mc', objective: 'L15-O3', instructions: 'Choose the correct form.', prompt: 'Ich spreche mit … Vermieter. (mein, der Vermieter, dative)', options: ['meinem', 'meinen', 'meiner', 'mein'], answer: 'meinem', explanation: 'mit + dative masculine → meinem.' }),
    q({ id: 'L15-P-16', topic: 'flat', skill: 'vocabulary', type: 'match', objective: 'L15-O4', instructions: 'Match the rooms.', prompt: '', pairs: [['das Wohnzimmer', 'living room'], ['das Schlafzimmer', 'bedroom'], ['die Küche', 'kitchen'], ['das Bad', 'bathroom'], ['der Flur', 'hall']], explanation: 'Rooms.', learnHref: GB + '163-describing-a-flat' }),
    q({ id: 'L15-P-17', topic: 'flat', skill: 'vocabulary', type: 'match', objective: 'L15-O4', instructions: 'Match the furniture.', prompt: '', pairs: [['das Bett', 'bed'], ['der Schrank', 'wardrobe / cupboard'], ['das Sofa', 'sofa'], ['der Stuhl', 'chair'], ['die Lampe', 'lamp']], explanation: 'Furniture.' }),
    q({ id: 'L15-P-18', topic: 'flat', skill: 'vocabulary', type: 'article', objective: 'L15-O4', instructions: 'Choose the article.', prompt: '… Küche', options: ['der', 'die', 'das'], answer: 'die', explanation: 'die Küche.' }),
    q({ id: 'L15-P-19', topic: 'flat', skill: 'vocabulary', type: 'article', objective: 'L15-O4', instructions: 'Choose the article.', prompt: '… Balkon', options: ['der', 'die', 'das'], answer: 'der', explanation: 'der Balkon.' }),
    q({ id: 'L15-P-20', topic: 'finden', skill: 'vocabulary', type: 'mc', objective: 'L15-O5', instructions: 'Choose the opposite.', prompt: 'hell ↔ ?', options: ['dunkel', 'ruhig', 'günstig', 'alt'], answer: 'dunkel', explanation: 'hell (bright) ↔ dunkel (dark).' }),
    q({ id: 'L15-P-21', topic: 'finden', skill: 'vocabulary', type: 'mc', objective: 'L15-O5', instructions: 'Choose the opposite.', prompt: 'teuer ↔ ?', options: ['günstig', 'gemütlich', 'modern', 'laut'], answer: 'günstig', explanation: 'teuer (expensive) ↔ günstig (cheap, good value).' }),
    q({ id: 'L15-P-22', topic: 'finden', skill: 'grammar', grammar: 'possessive-endings', type: 'order', objective: 'L15-O5', instructions: 'Put the words in order.', prompt: 'I think her room is nice.', tokens: ['Ich', 'finde', 'ihr', 'Zimmer', 'schön'], answer: 'Ich finde ihr Zimmer schön', explanation: 'das Zimmer (accusative neuter) → ihr, no ending.' }),
    q({ id: 'L15-P-23', topic: 'flat', skill: 'grammar', grammar: 'describing-a-flat', type: 'order', objective: 'L15-O4', instructions: 'Put the words in order.', prompt: 'The flat is on the third floor.', tokens: ['Die', 'Wohnung', 'liegt', 'im', 'dritten', 'Stock'], answer: 'Die Wohnung liegt im dritten Stock', explanation: 'liegen = to be located.' }),
    q({ id: 'L15-P-24', topic: 'sein-ihr', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L15-O2', instructions: 'Write it in German.', prompt: 'Lisa and her brother', answer: 'Lisa und ihr Bruder', explanation: 'Lisa → ihr.' }),
    q({ id: 'L15-P-25', topic: 'flat', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L15-O4', instructions: 'Write it in German.', prompt: 'Our flat has two rooms.', answer: 'Unsere Wohnung hat zwei Zimmer.', explanation: 'die Wohnung → unsere.' }),
    q({ id: 'L15-P-26', topic: 'flat', skill: 'listening', type: 'listen', objective: 'L15-O4', instructions: 'Listen and answer.', prompt: 'How much is the rent?', audio: 'Die Wohnung hat zwei Zimmer und einen Balkon. Die Miete ist 720 Euro warm.', options: ['720 euros', '270 euros', '700 euros', '702 euros'], answer: '720 euros', explanation: 'siebenhundertzwanzig Euro.' }),
    q({ id: 'L15-P-27', topic: 'finden', skill: 'listening', type: 'listen', objective: 'L15-O5', instructions: 'Listen and answer.', prompt: 'What does she think of the kitchen?', audio: 'Das Wohnzimmer finde ich toll, aber die Küche ist ein bisschen klein.', options: ['a bit small', 'great', 'too dark', 'too expensive'], answer: 'a bit small', explanation: 'ein bisschen klein.' }),
    q({ id: 'L15-P-28', topic: 'possessive-endings', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L15-O3', instructions: 'Listen and write.', prompt: '', audio: 'Ich finde euren Garten sehr schön.', answer: 'Ich finde euren Garten sehr schön.', explanation: 'euer + en → euren.' }),
    q({ id: 'L15-P-29', topic: 'possessives', skill: 'grammar', grammar: 'possessive-articles', type: 'mc', objective: 'L15-O1', instructions: 'What does ihr mean here?', prompt: 'Das sind Max und Mia. Ist das ihr Auto?', options: ['their', 'her', 'your (polite)', 'you (all)'], answer: 'their', explanation: 'Max and Mia (several people) → ihr = their.' }),
    q({ id: 'L15-P-30', topic: 'possessive-endings', skill: 'grammar', grammar: 'possessive-endings', type: 'mc', objective: 'L15-O3', instructions: 'Choose the correct sentence.', prompt: 'Which sentence is correct?', options: ['Ich finde seinen Schrank zu groß.', 'Ich finde sein Schrank zu groß.', 'Ich finde seine Schrank zu groß.'], answer: 'Ich finde seinen Schrank zu groß.', explanation: 'der Schrank, accusative → seinen.' })
  ];

  const DIALOG = '– Hallo Lukas, ist das deine neue Wohnung? – Ja! Sie hat drei Zimmer, eine Küche und einen Balkon. – Toll! Ich finde deinen Balkon sehr schön. – Danke. Aber das Bad ist sehr klein.';
  const READ = 'Wohnung im Zentrum: 2 Zimmer, Küche, Bad, 55 m², 3. Stock, mit Balkon.\nDie Wohnung ist hell und ruhig. Miete: 690 Euro warm.\nKontakt: Frau Berger, Tel. 0761 44 55 66';
  const apply = [
    q({ id: 'L15-A-01', topic: 'flat', skill: 'listening', type: 'listen', objective: 'L15-O4', instructions: 'Listen to the conversation.', prompt: 'How many rooms does Lukas’s flat have?', audio: DIALOG, options: ['three', 'two', 'four', 'one'], answer: 'three', explanation: 'drei Zimmer.' }),
    q({ id: 'L15-A-02', topic: 'finden', skill: 'listening', type: 'listen', objective: 'L15-O5', instructions: 'Listen again.', prompt: 'What is the problem?', audio: DIALOG, options: ['The bathroom is very small.', 'The balcony is ugly.', 'The kitchen is dark.', 'The rent is high.'], answer: 'The bathroom is very small.', explanation: 'das Bad ist sehr klein.' }),
    q({ id: 'L15-A-03', topic: 'flat', skill: 'reading', type: 'reading', objective: 'L15-O4', instructions: 'Read the advert.', passage: READ, prompt: 'Wie groß ist die Wohnung?', options: ['55 Quadratmeter', '69 Quadratmeter', '35 Quadratmeter'], answer: '55 Quadratmeter', explanation: '55 m².' }),
    q({ id: 'L15-A-04', topic: 'flat', skill: 'reading', type: 'reading', objective: 'L15-O4', instructions: 'Read the advert.', passage: READ, prompt: 'Wo liegt die Wohnung?', options: ['im Zentrum, im dritten Stock', 'am Stadtrand, im Erdgeschoss', 'im Zentrum, im ersten Stock'], answer: 'im Zentrum, im dritten Stock', explanation: 'im Zentrum · 3. Stock.' }),
    q({ id: 'L15-A-05', topic: 'flat', skill: 'reading', type: 'reading', objective: 'L15-O4', instructions: 'Read the advert.', passage: READ, prompt: 'Wie ist die Wohnung?', options: ['hell und ruhig', 'dunkel und laut', 'groß und teuer'], answer: 'hell und ruhig', explanation: 'hell und ruhig.' }),
    q({ id: 'L15-A-06', topic: 'flat', skill: 'writing', type: 'writing', objective: 'L15-O4', instructions: 'Describe your flat or a friend’s flat (5–6 sentences).', prompt: 'How many rooms? Where is it? What do you like / not like?',
      rubric: ['I name rooms with the right article.', 'I use possessives with the right ending (meine Küche, ihren Balkon …).', 'I use sein / ihr correctly for a friend’s flat.', 'I give opinions with finden + adjective.'],
      model: 'Meine Freundin Sara wohnt in Köln. Ihre Wohnung hat zwei Zimmer, eine kleine Küche und ein Bad. Sie liegt im vierten Stock. Ich finde ihr Wohnzimmer sehr gemütlich. Ihren Balkon finde ich toll, aber die Küche ist zu dunkel.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L15-A-07', topic: 'finden', skill: 'speaking', type: 'speaking', objective: 'L15-O5', instructions: 'Show a friend around your home (out loud).', prompt: 'Say what each room is and give your opinion. Then ask about your friend’s home.',
      rubric: ['I used Das ist mein / meine …', 'I gave 2–3 opinions with finden.', 'I used size or rent (… Quadratmeter, … Euro).', 'I asked: Wie ist deine Wohnung?'],
      model: 'Das ist meine Wohnung. Hier ist das Wohnzimmer, es ist hell und groß. Das ist meine Küche – ich finde sie ein bisschen klein. Und wie ist deine Wohnung? Hat sie einen Balkon?', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    own('L15-T-01', 'Das ist Ben. … Küche ist modern.', 'Seine', 'Ben → sein; die Küche → seine.', ['Seine', 'Ihre', 'Sein', 'Ihr']),
    own('L15-T-02', 'Das ist Julia. … Sofa ist neu.', 'Ihr', 'Julia → ihr; das Sofa → ihr.', ['Ihr', 'Ihre', 'Sein', 'Seine']),
    q({ id: 'L15-T-03', topic: 'possessives', skill: 'grammar', grammar: 'possessive-articles', type: 'gap', objective: 'L15-O1', instructions: 'Fill in the possessive (nominative).', prompt: 'Herr Lang, ist das ___ Tasche? (Sie)', answer: [['Ihre']], explanation: 'Sie → Ihr; die Tasche → Ihre.' }),
    q({ id: 'L15-T-04', topic: 'sein-ihr', skill: 'grammar', grammar: 'possessive-articles', type: 'mc', objective: 'L15-O2', instructions: 'sein or ihr?', prompt: 'Maria und … Kinder', options: ['ihre', 'seine', 'ihr', 'sein'], answer: 'ihre', explanation: 'Maria → ihr; plural → ihre.' }),
    q({ id: 'L15-T-05', topic: 'sein-ihr', skill: 'grammar', grammar: 'possessive-articles', type: 'mc', objective: 'L15-O2', instructions: 'sein or ihr?', prompt: 'Das Kind und … Ball', options: ['sein', 'ihr', 'seine', 'ihre'], answer: 'sein', explanation: 'das Kind → sein (es → sein).' }),
    end('L15-T-06', 'Ich besuche ___ Bruder. (mein)', [['meinen']], 'der Bruder, accusative → meinen.'),
    end('L15-T-07', 'Wir wohnen bei ___ Eltern. (unser)', [['unseren']], 'bei + dative plural → unseren.'),
    end('L15-T-08', 'Wo ist ___ Garten? (euer)', [['euer']], 'der Garten, nominative → euer (no ending).'),
    q({ id: 'L15-T-09', topic: 'possessive-endings', skill: 'grammar', grammar: 'possessive-endings', type: 'mc', objective: 'L15-O3', instructions: 'Choose the correct form.', prompt: 'Sie kocht in … Küche. (ihr, die Küche, dative)', options: ['ihrer', 'ihre', 'ihrem', 'ihren'], answer: 'ihrer', explanation: 'dative feminine → ihrer.' }),
    q({ id: 'L15-T-10', topic: 'finden', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L15-O5', instructions: 'Write it in German.', prompt: 'I think your (du) kitchen is cosy.', answer: 'Ich finde deine Küche gemütlich.', explanation: 'die Küche → deine.' }),
    q({ id: 'L15-T-11', topic: 'flat', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L15-O4', instructions: 'Write it in German.', prompt: 'The rent is 800 euros.', answer: 'Die Miete ist 800 Euro.', accept: ['Die Miete beträgt 800 Euro.', 'Die Miete kostet 800 Euro.'], explanation: 'die Miete.' }),
    q({ id: 'L15-T-12', topic: 'flat', skill: 'vocabulary', type: 'match', objective: 'L15-O4', instructions: 'Match.', prompt: '', pairs: [['der Stock', 'floor (level)'], ['die Miete', 'rent'], ['gemütlich', 'cosy'], ['der Garten', 'garden'], ['das Kinderzimmer', 'children’s room']], explanation: 'Flat words.' }),
    q({ id: 'L15-T-13', topic: 'flat', skill: 'listening', type: 'listen', objective: 'L15-O4', instructions: 'Listen and answer.', prompt: 'What does the flat NOT have?', audio: 'Die Wohnung ist schön und hell, aber sie hat leider keinen Balkon.', options: ['a balcony', 'a kitchen', 'a bathroom', 'a bedroom'], answer: 'a balcony', explanation: 'keinen Balkon.' }),
    q({ id: 'L15-T-14', topic: 'sein-ihr', skill: 'reading', type: 'reading', objective: 'L15-O2', instructions: 'Read and answer.', passage: 'Lena wohnt mit ihrem Freund Paul in Bonn.\nSein Zimmer ist klein, aber ihr Zimmer ist groß und hell.', prompt: 'Wessen Zimmer ist groß?', options: ['Lenas Zimmer', 'Pauls Zimmer', 'beide Zimmer'], answer: 'Lenas Zimmer', explanation: 'ihr Zimmer (Lena) ist groß.' }),
    q({ id: 'L15-T-15', topic: 'possessive-endings', skill: 'grammar', grammar: 'possessive-endings', type: 'mc', objective: 'L15-O3', instructions: 'Choose the correct spelling.', prompt: 'your (you all) flat', options: ['eure Wohnung', 'euere Wohnung', 'euer Wohnung', 'euren Wohnung'], answer: 'eure Wohnung', explanation: 'euer drops the second e: eure.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
