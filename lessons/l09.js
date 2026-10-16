// Lektion 9 · "Ich mag Hamburger." (Momente A1.1, Modul 3)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 10.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 9, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const conj = (id, prompt, answer, ex, obj = 'L9-O2', g = 'vowel-change', topic = 'food-verbs') => q({ id, topic, skill: 'grammar', grammar: g, type: 'conjugation', objective: obj, instructions: 'Write the verb form.', prompt, answer, explanation: ex });
  const art = (id, noun, hint, a) => q({ id, topic: 'articles', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L9-O1', instructions: 'Choose the article.', prompt: noun, hint, options: ['der', 'die', 'das'], answer: a, explanation: `${a} ${noun}.` });
  const comp = (id, a, b, art_, word) => q({ id, topic: 'compound-nouns', skill: 'grammar', grammar: 'compound-nouns', type: 'mc', objective: 'L9-O5', instructions: 'Choose the article of the compound noun.', prompt: `${a} + ${b} = … ${word}`, options: ['der', 'die', 'das'], answer: art_, explanation: `The last part decides: ${b} → ${art_} ${word}.`, learnHref: GB + '104-compound-nouns' });

  const objectives = [
    { id: 'L9-O1', text: 'Name food and drinks with their articles.', kind: 'communication' },
    { id: 'L9-O2', text: 'Use essen (du isst) and nehmen (du nimmst).', kind: 'grammar' },
    { id: 'L9-O3', text: 'Say what you like (mögen) and what you would like (möchte).', kind: 'grammar' },
    { id: 'L9-O4', text: 'Use the accusative with food verbs (Ich nehme einen Salat).', kind: 'grammar' },
    { id: 'L9-O5', text: 'Understand compound nouns: the last part decides the article.', kind: 'grammar' },
    { id: 'L9-O6', text: 'Order and pay in a café or restaurant.', kind: 'communication' }
  ];

  const learn = [
    { id: 'food', title: 'Food and drinks', objective: 'L9-O1',
      table: [['das Brot · das Brötchen · der Käse · die Wurst', 'bread · roll · cheese · sausage'], ['das Fleisch · der Fisch · das Hähnchen · das Ei', 'meat · fish · chicken · egg'], ['das Gemüse · die Kartoffel · der Salat', 'vegetables · potato · salad'], ['das Obst · der Apfel · die Banane', 'fruit · apple · banana'], ['das Wasser · der Kaffee · der Tee · die Milch · der Saft', 'water · coffee · tea · milk · juice']] },
    { id: 'food-verbs', title: 'Four verbs for food', objective: 'L9-O2', href: GB + '101-four-verbs-for-food',
      table: [['essen → du isst, er isst', 'e → i (and du isst: only one s added)'], ['nehmen → du nimmst, er nimmt', 'irregular'], ['mögen → ich mag, du magst, er mag', 'to like'], ['möchte → ich möchte, du möchtest, er möchte, wir möchten', 'would like']],
      mistakes: [['du esst', 'du isst', 'e → i with du and er/sie.'], ['er nehmt', 'er nimmt', 'nehmen is irregular.']] },
    { id: 'mag-moechte', title: 'mag, gern or möchte?', objective: 'L9-O3', href: GB + '102-mag-gern-or-möchte',
      text: 'mögen + noun = you like it in general. verb + gern = you like doing it. möchte = you want it now (polite).',
      examples: [['Ich mag Fisch.', 'I like fish (in general).'], ['Ich esse gern Fisch.', 'I like eating fish.'], ['Ich möchte einen Kaffee, bitte.', 'I would like a coffee, please.']] },
    { id: 'accusative', title: 'All four take the accusative', objective: 'L9-O4', href: GB + '103-all-four-take-the-accusative',
      text: 'Remember: only der words change (den / einen / keinen).',
      examples: [['Ich nehme einen Salat und eine Suppe.', 'I’ll have a salad and a soup.'], ['Ich mag keinen Fisch.', 'I don’t like fish.']] },
    { id: 'compounds', title: 'Compound nouns', objective: 'L9-O5', href: GB + '104-compound-nouns',
      text: 'German joins nouns into one word. The last part gives the meaning and the article.',
      table: [['der Apfel + der Saft = der Apfelsaft', 'apple juice'], ['die Tomate + die Suppe = die Tomatensuppe', 'tomato soup'], ['das Obst + der Kuchen = der Obstkuchen', 'fruit cake']] },
    { id: 'restaurant', title: 'In the restaurant', objective: 'L9-O6', href: GB + '105-in-the-restaurant',
      table: [['Die Speisekarte, bitte.', 'The menu, please.'], ['Ich möchte bestellen.', 'I would like to order.'], ['Ich nehme …', 'I’ll have …'], ['Wir möchten bezahlen. / Die Rechnung, bitte.', 'We would like to pay. / The bill, please.'], ['Das ist lecker!', 'That’s tasty!']] }
  ];

  const practice = [
    conj('L09-P-01', 'du + essen →', 'isst', 'du isst.'),
    conj('L09-P-02', 'er + nehmen →', 'nimmt', 'er nimmt.'),
    conj('L09-P-03', 'du + mögen →', 'magst', 'du magst.', 'L9-O3', 'moegen', 'mag-moechte'),
    conj('L09-P-04', 'er + möchte(n) (would like) →', 'möchte', 'er möchte (like ich möchte).', 'L9-O3', 'moechte', 'mag-moechte'),
    q({ id: 'L09-P-05', topic: 'mag-moechte', skill: 'grammar', grammar: 'moegen-moechte', type: 'gap', objective: 'L9-O3', instructions: 'Fill in mag or möchte.', prompt: 'Ich ___ Fisch (in general), aber heute ___ ich Hähnchen.', answer: [['mag'], ['möchte']], explanation: 'mag = like in general; möchte = would like now.', learnHref: GB + '102-mag-gern-or-möchte' }),
    q({ id: 'L09-P-06', topic: 'mag-moechte', skill: 'communication', type: 'mc', objective: 'L9-O3', instructions: 'Choose the polite question.', prompt: 'What would you like? (polite)', options: ['Was möchten Sie?', 'Was mögen Sie?', 'Was magst du?', 'Was möchte Sie?'], answer: 'Was möchten Sie?', explanation: 'Sie möchten.' }),
    q({ id: 'L09-P-07', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'gap', objective: 'L9-O4', instructions: 'Fill in the article (a).', prompt: 'Ich nehme ___ Salat.', answer: [['einen']], explanation: 'der Salat → einen Salat.', learnHref: GB + '103-all-four-take-the-accusative' }),
    q({ id: 'L09-P-08', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'gap', objective: 'L9-O4', instructions: 'Fill in the article (a).', prompt: 'Er trinkt ___ Kaffee.', answer: [['einen']], explanation: 'der Kaffee → einen Kaffee.' }),
    q({ id: 'L09-P-09', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'mc', objective: 'L9-O4', instructions: 'Choose the article.', prompt: 'Wir möchten … Suppe.', options: ['eine', 'einen', 'ein'], answer: 'eine', explanation: 'die Suppe → eine Suppe.' }),
    comp('L09-P-10', 'der Apfel', 'der Saft', 'der', 'Apfelsaft'),
    comp('L09-P-11', 'die Tomate', 'die Suppe', 'die', 'Tomatensuppe'),
    comp('L09-P-12', 'das Obst', 'der Kuchen', 'der', 'Obstkuchen'),
    q({ id: 'L09-P-13', topic: 'food', skill: 'vocabulary', type: 'match', objective: 'L9-O1', instructions: 'Match the food.', prompt: '', pairs: [['das Brot', 'bread'], ['der Käse', 'cheese'], ['das Ei', 'egg'], ['die Kartoffel', 'potato'], ['das Gemüse', 'vegetables']], explanation: 'Food.' }),
    q({ id: 'L09-P-14', topic: 'food', skill: 'vocabulary', type: 'match', objective: 'L9-O1', instructions: 'Match the drink.', prompt: '', pairs: [['das Wasser', 'water'], ['die Milch', 'milk'], ['der Saft', 'juice'], ['der Tee', 'tea'], ['das Bier', 'beer']], explanation: 'Drinks.' }),
    art('L09-P-15', 'Fleisch', 'meat', 'das'), art('L09-P-16', 'Wurst', 'sausage', 'die'), art('L09-P-17', 'Apfel', 'apple', 'der'),
    q({ id: 'L09-P-18', topic: 'restaurant', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L9-O6', instructions: 'Put the words in order.', prompt: 'I would like to order.', tokens: ['möchte', 'Ich', 'bestellen'], answer: 'Ich möchte bestellen', explanation: 'möchte … bestellen (infinitive at the end).', learnHref: GB + '105-in-the-restaurant' }),
    q({ id: 'L09-P-19', topic: 'restaurant', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L9-O6', instructions: 'Put the words in order.', prompt: 'We would like to pay.', tokens: ['bezahlen', 'Wir', 'möchten'], answer: 'Wir möchten bezahlen', explanation: 'möchten … bezahlen.' }),
    q({ id: 'L09-P-20', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'order', objective: 'L9-O4', instructions: 'Put the words in order.', prompt: 'I’ll have the fish.', tokens: ['nehme', 'Ich', 'Fisch', 'den'], answer: 'Ich nehme den Fisch', explanation: 'der Fisch → den Fisch.' }),
    q({ id: 'L09-P-21', topic: 'restaurant', skill: 'communication', type: 'mc', objective: 'L9-O6', instructions: 'Choose the phrase.', prompt: 'You want to see the menu.', options: ['Die Speisekarte, bitte.', 'Die Rechnung, bitte.', 'Guten Appetit!', 'Ich bezahle.'], answer: 'Die Speisekarte, bitte.', explanation: 'die Speisekarte = the menu.' }),
    q({ id: 'L09-P-22', topic: 'food-verbs', skill: 'grammar', grammar: 'vowel-change', type: 'mc', objective: 'L9-O2', instructions: 'Choose the verb form.', prompt: 'Was … du?', options: ['isst', 'esst', 'issst', 'essst'], answer: 'isst', explanation: 'du isst.' }),
    q({ id: 'L09-P-23', topic: 'mag-moechte', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L9-O3', instructions: 'Write it in German.', prompt: 'I would like a coffee.', answer: 'Ich möchte einen Kaffee.', accept: ['Ich möchte einen Kaffee, bitte.', 'Ich hätte gern einen Kaffee.'], explanation: 'möchte + einen Kaffee (accusative).' }),
    q({ id: 'L09-P-24', topic: 'mag-moechte', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L9-O3', instructions: 'Write it in German.', prompt: 'I don’t like fish.', answer: 'Ich mag keinen Fisch.', accept: ['Ich mag Fisch nicht.'], explanation: 'Ich mag keinen Fisch.' }),
    q({ id: 'L09-P-25', topic: 'restaurant', skill: 'writing', type: 'translate', objective: 'L9-O6', instructions: 'Write it in German.', prompt: 'The soup is tasty.', answer: 'Die Suppe ist lecker.', explanation: 'lecker = tasty.' }),
    q({ id: 'L09-P-26', topic: 'restaurant', skill: 'listening', type: 'listen', objective: 'L9-O6', instructions: 'Listen and answer.', prompt: 'What does the person order to eat?', audio: 'Ich nehme ein Hähnchen mit Reis und ein Wasser.', options: ['chicken with rice', 'fish with potatoes', 'soup', 'salad'], answer: 'chicken with rice', explanation: 'ein Hähnchen mit Reis.' }),
    q({ id: 'L09-P-27', topic: 'restaurant', skill: 'listening', type: 'listen', objective: 'L9-O6', instructions: 'Listen and answer.', prompt: 'What does the guest order?', audio: 'Möchten Sie noch etwas trinken? – Ja, einen Tee, bitte.', options: ['tea', 'water', 'juice', 'beer'], answer: 'tea', explanation: 'einen Tee, bitte.' }),
    q({ id: 'L09-P-28', topic: 'food', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L9-O1', instructions: 'Listen and write.', prompt: '', audio: 'Ich esse gern Obst. Obst ist gesund.', answer: 'Ich esse gern Obst. Obst ist gesund.', accept: ['Ich esse gern Obst, Obst ist gesund.'], explanation: 'gesund = healthy.' }),
    q({ id: 'L09-P-29', topic: 'mag-moechte', skill: 'grammar', grammar: 'moegen-moechte', type: 'mc', objective: 'L9-O3', instructions: 'Choose one.', prompt: 'Ich … Schokolade. (I like it in general.)', options: ['mag', 'möchte', 'möchten'], answer: 'mag', explanation: 'mögen = like in general.' }),
    conj('L09-P-30', 'ihr + essen →', 'esst', 'No vowel change with ihr: ihr esst.')
  ];

  const DIALOG = 'Guten Abend! Was möchten Sie trinken? – Einen Apfelsaft, bitte. – Und was möchten Sie essen? – Ich nehme die Tomatensuppe und einen Salat. – Gern.';
  const READ = 'Speisekarte\nTomatensuppe – 4,50 €\nFisch mit Kartoffeln – 12,90 €\nNudeln mit Gemüse – 9,80 €\nApfelkuchen – 3,90 €\nKaffee – 2,80 €';
  const apply = [
    q({ id: 'L09-A-01', topic: 'restaurant', skill: 'listening', type: 'listen', objective: 'L9-O6', instructions: 'Listen to the order.', prompt: 'What does the guest drink?', audio: DIALOG, options: ['apple juice', 'water', 'coffee', 'tea'], answer: 'apple juice', explanation: 'Einen Apfelsaft, bitte.' }),
    q({ id: 'L09-A-02', topic: 'restaurant', skill: 'listening', type: 'listen', objective: 'L9-O6', instructions: 'Listen again.', prompt: 'What does the guest eat?', audio: DIALOG, options: ['tomato soup and a salad', 'fish and potatoes', 'pasta with vegetables', 'apple cake'], answer: 'tomato soup and a salad', explanation: 'die Tomatensuppe und einen Salat.' }),
    q({ id: 'L09-A-03', topic: 'restaurant', skill: 'reading', type: 'reading', objective: 'L9-O6', instructions: 'Read the menu.', passage: READ, prompt: 'Was kostet der Fisch?', options: ['12,90 €', '9,80 €', '4,50 €'], answer: '12,90 €', explanation: 'Fisch mit Kartoffeln – 12,90 €.' }),
    q({ id: 'L09-A-04', topic: 'compound-nouns', skill: 'reading', type: 'reading', objective: 'L9-O5', instructions: 'Read the menu.', passage: READ, prompt: 'Was ist ein Dessert (sweet, after the meal)?', options: ['der Apfelkuchen', 'die Tomatensuppe', 'der Fisch'], answer: 'der Apfelkuchen', explanation: 'Apfel + Kuchen = apple cake.' }),
    q({ id: 'L09-A-05', topic: 'restaurant', skill: 'reading', type: 'reading', objective: 'L9-O6', instructions: 'Read the menu.', passage: READ, prompt: 'Wie viel kostet der Kaffee?', options: ['2,80 €', '3,90 €', '4,50 €'], answer: '2,80 €', explanation: 'Kaffee – 2,80 €.' }),
    q({ id: 'L09-A-06', topic: 'food', skill: 'writing', type: 'writing', objective: 'L9-O3', instructions: 'Write about your meals (5–6 sentences).', prompt: 'What do you eat and drink for breakfast, lunch and dinner? What do you like / not like?',
      rubric: ['I name meals: zum Frühstück / Mittagessen / Abendessen.', 'I use mögen or gern for likes.', 'I use the accusative with einen / keinen.', 'I use one compound noun.'],
      model: 'Zum Frühstück esse ich ein Brötchen mit Käse und trinke einen Kaffee. Zum Mittagessen esse ich oft Reis mit Gemüse. Ich mag keinen Fisch. Am Abend esse ich gern eine Tomatensuppe. Obst ist gesund – ich esse jeden Tag einen Apfel.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L09-A-07', topic: 'restaurant', skill: 'speaking', type: 'speaking', objective: 'L9-O6', instructions: 'Restaurant role-play (out loud).', prompt: 'Ask for the menu, order a drink and a meal, say it tastes good, and pay.',
      rubric: ['I asked for the menu.', 'I ordered with Ich möchte … / Ich nehme … + accusative.', 'I said: Das ist lecker!', 'I asked to pay: Die Rechnung, bitte. / Ich möchte bezahlen.'],
      model: '– Die Speisekarte, bitte.\n– Bitte schön. Was möchten Sie trinken?\n– Ich möchte einen Tee.\n– Und essen?\n– Ich nehme die Nudeln mit Gemüse.\n– … Das ist sehr lecker! Ich möchte bezahlen, bitte.', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    conj('L09-T-01', 'sie (she) + essen →', 'isst', 'sie isst.'),
    conj('L09-T-02', 'du + nehmen →', 'nimmst', 'du nimmst.'),
    q({ id: 'L09-T-03', topic: 'mag-moechte', skill: 'grammar', grammar: 'moegen', type: 'gap', objective: 'L9-O3', instructions: 'Fill in mögen.', prompt: '___ du Käse? – Ja, ich ___ Käse sehr.', answer: [['Magst'], ['mag']], explanation: 'du magst, ich mag.' }),
    q({ id: 'L09-T-04', topic: 'mag-moechte', skill: 'grammar', grammar: 'moechte', type: 'gap', objective: 'L9-O3', instructions: 'Fill in möchte(n).', prompt: 'Was ___ Sie trinken? – Ich ___ einen Tee, bitte.', answer: [['möchten'], ['möchte']], explanation: 'Sie möchten, ich möchte.' }),
    q({ id: 'L09-T-05', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'mc', objective: 'L9-O4', instructions: 'Choose the article.', prompt: 'Er nimmt … Apfel.', options: ['einen', 'ein', 'eine'], answer: 'einen', explanation: 'der Apfel → einen Apfel.' }),
    comp('L09-T-06', 'das Gemüse', 'die Suppe', 'die', 'Gemüsesuppe'),
    q({ id: 'L09-T-07', topic: 'restaurant', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L9-O6', instructions: 'Put the words in order.', prompt: 'The bill, please.', tokens: ['Rechnung', 'Die', 'bitte'], answer: 'Die Rechnung bitte', accept: ['Die Rechnung, bitte'], explanation: 'Die Rechnung, bitte.' }),
    art('L09-T-08', 'Banane', 'banana', 'die'),
    q({ id: 'L09-T-09', topic: 'restaurant', skill: 'writing', type: 'translate', objective: 'L9-O6', instructions: 'Write it in German.', prompt: 'The menu, please.', answer: 'Die Speisekarte, bitte.', accept: ['Die Speisekarte bitte.'], explanation: 'die Speisekarte = the menu.' }),
    q({ id: 'L09-T-10', topic: 'food', skill: 'writing', type: 'translate', objective: 'L9-O1', instructions: 'Write it in German.', prompt: 'I drink milk.', answer: 'Ich trinke Milch.', explanation: 'die Milch.' }),
    q({ id: 'L09-T-11', topic: 'mag-moechte', skill: 'grammar', grammar: 'moegen', type: 'mc', objective: 'L9-O3', instructions: 'Choose the correct question.', prompt: 'Do you like tea? (informal)', options: ['Magst du Tee?', 'Mag du Tee?', 'Magst Tee du?', 'Möchtest du Tee mögen?'], answer: 'Magst du Tee?', explanation: 'du magst → Magst du …?' }),
    q({ id: 'L09-T-12', topic: 'restaurant', skill: 'vocabulary', type: 'match', objective: 'L9-O6', instructions: 'Match.', prompt: '', pairs: [['das Frühstück', 'breakfast'], ['das Mittagessen', 'lunch'], ['das Abendessen', 'dinner'], ['die Speisekarte', 'menu'], ['lecker', 'tasty']], explanation: 'Meals and restaurant words.' }),
    q({ id: 'L09-T-13', topic: 'food', skill: 'listening', type: 'listen', objective: 'L9-O1', instructions: 'Listen and answer.', prompt: 'What does he drink for breakfast?', audio: 'Zum Frühstück esse ich ein Brötchen mit Käse und trinke einen Kaffee.', options: ['coffee', 'tea', 'milk', 'juice'], answer: 'coffee', explanation: 'trinke einen Kaffee.' }),
    q({ id: 'L09-T-14', topic: 'mag-moechte', skill: 'reading', type: 'reading', objective: 'L9-O3', instructions: 'Read and answer.', passage: 'Ich bin Vegetarierin. Ich esse kein Fleisch und keinen Fisch.\nAber ich mag Nudeln und Gemüse sehr.', prompt: 'Was isst sie nicht?', options: ['Fleisch', 'Nudeln', 'Gemüse'], answer: 'Fleisch', explanation: 'Ich esse kein Fleisch.' }),
    q({ id: 'L09-T-15', topic: 'mag-moechte', skill: 'grammar', grammar: 'moechte', type: 'mc', objective: 'L9-O3', instructions: 'Choose one.', prompt: 'Ich habe Hunger. Ich … ein Brötchen, bitte.', options: ['möchte', 'mag', 'möchten'], answer: 'möchte', explanation: 'möchte = would like (now).' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
