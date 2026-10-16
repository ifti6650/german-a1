// Lektion 13 · "Berlin gefällt mir." (Momente A1.2, Modul 5)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 14.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 13, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const pron = (id, prompt, a, ex, opts) => q({ id, topic: 'dative-pronouns', skill: 'grammar', grammar: 'dative-pronouns', type: 'mc', objective: 'L13-O2', instructions: 'Choose the dative pronoun.', prompt, options: opts || ['mir', 'mich', 'ich', 'mein'], answer: a, explanation: ex, learnHref: GB + '142-the-dative-pronouns' });
  const gibt = (id, prompt, a, ex) => q({ id, topic: 'es-gibt', skill: 'grammar', grammar: 'es-gibt', type: 'gap', objective: 'L13-O1', instructions: 'Fill in the gaps.', prompt, answer: a, explanation: ex, learnHref: GB + '141-es-gibt--accusative-there-is--there-are' });

  const objectives = [
    { id: 'L13-O1', text: 'Say what there is in a town with es gibt + accusative (einen / ein / eine / keinen …).', kind: 'grammar' },
    { id: 'L13-O2', text: 'Use the dative pronouns mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.', kind: 'grammar' },
    { id: 'L13-O3', text: 'Use the dative verbs gefallen, gehören, helfen, danken, schmecken.', kind: 'grammar' },
    { id: 'L13-O4', text: 'Make gefallen agree with the thing you like (gefällt / gefallen).', kind: 'grammar' },
    { id: 'L13-O5', text: 'Name places in a town and describe a city or district.', kind: 'communication' }
  ];

  const learn = [
    { id: 'es-gibt', title: 'es gibt + accusative', objective: 'L13-O1', href: GB + '141-es-gibt--accusative-there-is--there-are',
      text: 'es gibt = there is / there are. It never changes, even for plural. The thing that exists is in the accusative. If you start with a place, es comes after gibt.',
      table: [['In Köln gibt es einen Dom.', 'der → einen'], ['Hier gibt es ein Kino.', 'das → ein'], ['Gibt es hier eine Apotheke?', 'die → eine'], ['In meiner Straße gibt es viele Cafés.', 'plural: no article'], ['Hier gibt es keinen Bahnhof.', 'kein → keinen (der)']],
      mistakes: [['Hier gibt es ein Supermarkt.', 'Hier gibt es einen Supermarkt.', 'es gibt + accusative: der Supermarkt → einen.'], ['Hier gibt einen Park.', 'Hier gibt es einen Park.', 'Never drop es.']] },
    { id: 'pronouns', title: 'The dative pronouns', objective: 'L13-O2', href: GB + '142-the-dative-pronouns',
      table: [['ich → mir', 'du → dir'], ['er → ihm', 'sie → ihr'], ['es → ihm', 'wir → uns'], ['ihr → euch', 'sie (they) → ihnen'], ['Sie → Ihnen', 'Wie geht es Ihnen? – Mir geht es gut.']] },
    { id: 'verbs', title: 'Verbs with the dative', objective: 'L13-O3', href: GB + '143-verbs-with-the-dative',
      text: 'These verbs take a dative object: gefallen (to like / please), gehören (to belong to), helfen (to help), danken (to thank), schmecken (to taste good). Watch the vowel change: es gefällt, du hilfst, er hilft.',
      table: [['Kannst du mir helfen?', 'Can you help me?'], ['Das Rad gehört ihr.', 'The bike is hers.'], ['Ich danke Ihnen!', 'Thank you!'], ['Schmeckt dir die Suppe?', 'Do you like the soup?']],
      mistakes: [['Kannst du mich helfen?', 'Kannst du mir helfen?', 'helfen takes the dative: mir.']] },
    { id: 'gefallen', title: 'gefallen: the thing is the subject', objective: 'L13-O4', href: GB + '144-gefallen-watch-the-subject',
      text: 'With gefallen the thing you like is the subject, so the verb agrees with the thing: one thing → gefällt, several things → gefallen. The person is in the dative.',
      table: [['Die Altstadt gefällt mir.', 'one thing → gefällt'], ['Die Brücken gefallen mir.', 'plural → gefallen'], ['Gefällt dir das Viertel?', 'question: verb first']],
      mistakes: [['Ich gefalle Hamburg.', 'Hamburg gefällt mir.', '„Ich gefalle Hamburg“ means Hamburg likes me!']] },
    { id: 'city', title: 'Places in town and describing a city', objective: 'L13-O5', href: GB + '145-describing-a-city',
      table: [['der Park · der Bahnhof · der Markt', 'park · station · market'], ['das Museum · das Rathaus · das Kino', 'museum · town hall · cinema'], ['die Brücke · die Kirche · die Bibliothek', 'bridge · church · library'], ['laut – ruhig · sauber – schmutzig', 'noisy – quiet · clean – dirty'], ['berühmt · interessant · grün', 'famous · interesting · green']],
      examples: [['In meiner Stadt gibt es einen Fluss und viele Brücken. Das gefällt mir sehr gut.', 'In my town there is a river and many bridges. I like that a lot.']] }
  ];

  const practice = [
    gibt('L13-P-01', 'In Berlin ___ ___ viele Museen.', [['gibt'], ['es']], 'In Berlin gibt es … (verb 2nd, es after it).'),
    q({ id: 'L13-P-02', topic: 'es-gibt', skill: 'grammar', grammar: 'es-gibt', type: 'mc', objective: 'L13-O1', instructions: 'Choose the article.', prompt: 'Hier gibt es … Park. (der Park)', options: ['einen', 'ein', 'eine', 'einem'], answer: 'einen', explanation: 'es gibt + accusative: der → einen.', learnHref: GB + '141-es-gibt--accusative-there-is--there-are' }),
    q({ id: 'L13-P-03', topic: 'es-gibt', skill: 'grammar', grammar: 'es-gibt', type: 'mc', objective: 'L13-O1', instructions: 'Choose the article.', prompt: 'Gibt es hier … Bibliothek? (die Bibliothek)', options: ['eine', 'einen', 'ein', 'einer'], answer: 'eine', explanation: 'die → eine (accusative = nominative for feminine).' }),
    gibt('L13-P-04', 'Leider gibt es hier ___ Kino. (kein, das Kino)', [['kein']], 'das → kein (accusative neuter does not change).'),
    q({ id: 'L13-P-05', topic: 'es-gibt', skill: 'grammar', grammar: 'es-gibt', type: 'order', objective: 'L13-O1', instructions: 'Put the words in order.', prompt: 'Is there a supermarket here?', tokens: ['Gibt', 'es', 'hier', 'einen', 'Supermarkt'], answer: 'Gibt es hier einen Supermarkt', explanation: 'Yes/no question: verb first.' }),
    pron('L13-P-06', 'Das Museum gefällt … (ich)', 'mir', 'ich → mir.'),
    pron('L13-P-07', 'Kannst du … helfen? (wir)', 'uns', 'wir → uns.', ['uns', 'wir', 'unser', 'euch']),
    pron('L13-P-08', 'Das Fahrrad gehört … (er)', 'ihm', 'er → ihm.', ['ihm', 'ihn', 'er', 'ihr']),
    pron('L13-P-09', 'Schmeckt … der Kuchen? (du)', 'dir', 'du → dir.', ['dir', 'dich', 'du', 'dein']),
    q({ id: 'L13-P-10', topic: 'dative-pronouns', skill: 'grammar', grammar: 'dative-pronouns', type: 'match', objective: 'L13-O2', instructions: 'Match nominative and dative.', prompt: '', pairs: [['ich', 'mir'], ['du', 'dir'], ['sie (she)', 'ihr'], ['wir', 'uns'], ['sie (they)', 'ihnen']], explanation: 'Dative pronouns.', learnHref: GB + '142-the-dative-pronouns' }),
    q({ id: 'L13-P-11', topic: 'dative-pronouns', skill: 'grammar', grammar: 'dative-pronouns', type: 'gap', objective: 'L13-O2', instructions: 'Fill in the dative pronoun.', prompt: 'Ich danke ___! (Sie)', answer: [['Ihnen']], explanation: 'Sie → Ihnen (capital I).' }),
    q({ id: 'L13-P-12', topic: 'dative-pronouns', skill: 'grammar', grammar: 'dative-pronouns', type: 'gap', objective: 'L13-O2', instructions: 'Fill in the dative pronoun.', prompt: 'Die Tasche gehört ___. (sie, she)', answer: [['ihr']], explanation: 'sie (she) → ihr.' }),
    q({ id: 'L13-P-13', topic: 'dative-verbs', skill: 'grammar', grammar: 'dative-verbs', type: 'conjugation', objective: 'L13-O3', instructions: 'Conjugate.', prompt: 'er + helfen →', answer: 'hilft', explanation: 'helfen: e → i (du hilfst, er hilft).', learnHref: GB + '143-verbs-with-the-dative' }),
    q({ id: 'L13-P-14', topic: 'dative-verbs', skill: 'grammar', grammar: 'dative-verbs', type: 'mc', objective: 'L13-O3', instructions: 'Choose the correct sentence.', prompt: 'Which sentence is correct?', options: ['Kannst du mir helfen?', 'Kannst du mich helfen?', 'Kannst du ich helfen?'], answer: 'Kannst du mir helfen?', explanation: 'helfen + dative.', learnHref: GB + '143-verbs-with-the-dative' }),
    q({ id: 'L13-P-15', topic: 'dative-verbs', skill: 'vocabulary', type: 'match', objective: 'L13-O3', instructions: 'Match the verbs.', prompt: '', pairs: [['gefallen', 'to please / like'], ['gehören', 'to belong to'], ['helfen', 'to help'], ['danken', 'to thank'], ['schmecken', 'to taste good']], explanation: 'The dative verbs.' }),
    q({ id: 'L13-P-16', topic: 'gefallen', skill: 'grammar', grammar: 'gefallen', type: 'mc', objective: 'L13-O4', instructions: 'gefällt or gefallen?', prompt: 'Die Parks … mir sehr gut.', options: ['gefallen', 'gefällt'], answer: 'gefallen', explanation: 'die Parks = plural → gefallen.', learnHref: GB + '144-gefallen-watch-the-subject' }),
    q({ id: 'L13-P-17', topic: 'gefallen', skill: 'grammar', grammar: 'gefallen', type: 'mc', objective: 'L13-O4', instructions: 'gefällt or gefallen?', prompt: 'Das Viertel … uns.', options: ['gefällt', 'gefallen'], answer: 'gefällt', explanation: 'das Viertel = one thing → gefällt.' }),
    q({ id: 'L13-P-18', topic: 'gefallen', skill: 'grammar', grammar: 'gefallen', type: 'gap', objective: 'L13-O4', instructions: 'Fill in gefallen.', prompt: '___ dir die Schuhe?', answer: [['Gefallen']], explanation: 'die Schuhe (plural) → Gefallen …?' }),
    q({ id: 'L13-P-19', topic: 'gefallen', skill: 'grammar', grammar: 'gefallen', type: 'order', objective: 'L13-O4', instructions: 'Put the words in order.', prompt: 'I like Munich very much.', tokens: ['München', 'gefällt', 'mir', 'sehr', 'gut'], answer: 'München gefällt mir sehr gut', explanation: 'The city is the subject.' }),
    q({ id: 'L13-P-20', topic: 'city', skill: 'vocabulary', type: 'match', objective: 'L13-O5', instructions: 'Match the places.', prompt: '', pairs: [['der Bahnhof', 'station'], ['das Rathaus', 'town hall'], ['die Brücke', 'bridge'], ['die Kirche', 'church'], ['der Markt', 'market']], explanation: 'Places in town.', learnHref: GB + '145-describing-a-city' }),
    q({ id: 'L13-P-21', topic: 'city', skill: 'vocabulary', type: 'mc', objective: 'L13-O5', instructions: 'Choose the opposite.', prompt: 'laut ↔ ?', options: ['ruhig', 'sauber', 'berühmt', 'groß'], answer: 'ruhig', explanation: 'laut (noisy) ↔ ruhig (quiet).' }),
    q({ id: 'L13-P-22', topic: 'city', skill: 'vocabulary', type: 'article', objective: 'L13-O5', instructions: 'Choose the article.', prompt: '… Museum', options: ['der', 'die', 'das'], answer: 'das', explanation: 'das Museum (plural: die Museen).' }),
    q({ id: 'L13-P-23', topic: 'gefallen', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L13-O4', instructions: 'Write it in German (use gefallen).', prompt: 'I like the city.', answer: 'Die Stadt gefällt mir.', accept: ['Mir gefällt die Stadt.'], explanation: 'Die Stadt gefällt mir.' }),
    q({ id: 'L13-P-24', topic: 'dative-verbs', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L13-O3', instructions: 'Write it in German.', prompt: 'The car belongs to him.', answer: 'Das Auto gehört ihm.', explanation: 'gehören + dative: ihm.' }),
    q({ id: 'L13-P-25', topic: 'es-gibt', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L13-O1', instructions: 'Write it in German.', prompt: 'There is a market here.', answer: 'Hier gibt es einen Markt.', accept: ['Es gibt hier einen Markt.'], explanation: 'es gibt + einen (der Markt).' }),
    q({ id: 'L13-P-26', topic: 'city', skill: 'listening', type: 'listen', objective: 'L13-O5', instructions: 'Listen and answer.', prompt: 'What does the speaker NOT like?', audio: 'Die Altstadt gefällt mir sehr gut. Aber die Straßen sind zu laut.', options: ['the noisy streets', 'the old town', 'the parks', 'the museums'], answer: 'the noisy streets', explanation: 'Die Straßen sind zu laut.' }),
    q({ id: 'L13-P-27', topic: 'es-gibt', skill: 'listening', type: 'listen', objective: 'L13-O1', instructions: 'Listen and answer.', prompt: 'What is there NOT in the village?', audio: 'In meinem Dorf gibt es eine Kirche und einen Bäcker, aber es gibt keinen Bahnhof.', options: ['a station', 'a church', 'a bakery', 'a river'], answer: 'a station', explanation: 'keinen Bahnhof.' }),
    q({ id: 'L13-P-28', topic: 'dative-verbs', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L13-O3', instructions: 'Listen and write.', prompt: '', audio: 'Entschuldigung, können Sie mir helfen?', answer: 'Entschuldigung, können Sie mir helfen?', accept: ['Entschuldigung! Können Sie mir helfen?'], explanation: 'helfen + mir.' }),
    q({ id: 'L13-P-29', topic: 'dative-pronouns', skill: 'grammar', grammar: 'dative-pronouns', type: 'mc', objective: 'L13-O2', instructions: 'Choose the dative pronoun.', prompt: 'Wie geht es …? (ihr, you all)', options: ['euch', 'ihr', 'ihnen', 'uns'], answer: 'euch', explanation: 'ihr (you all) → euch.' }),
    q({ id: 'L13-P-30', topic: 'gefallen', skill: 'grammar', grammar: 'gefallen', type: 'mc', objective: 'L13-O4', instructions: 'Choose the correct sentence.', prompt: 'You want to say: I like Hamburg.', options: ['Hamburg gefällt mir.', 'Ich gefalle Hamburg.', 'Ich gefällt Hamburg.'], answer: 'Hamburg gefällt mir.', explanation: 'The thing (Hamburg) is the subject.' })
  ];

  const DIALOG = '– Wie gefällt dir Leipzig? – Sehr gut! Es gibt viele Parks und Cafés. Nur der Bahnhof gefällt mir nicht, er ist zu groß und zu laut.';
  const READ = 'Hallo Jonas,\nich wohne jetzt in Freiburg. Die Stadt ist klein, aber sie gefällt mir sehr gut. Es gibt eine schöne Altstadt und viele Fahrräder. Leider gibt es keinen Flughafen.\nKommst du mich besuchen?\nTim';
  const apply = [
    q({ id: 'L13-A-01', topic: 'city', skill: 'listening', type: 'listen', objective: 'L13-O5', instructions: 'Listen to the conversation.', prompt: 'What are there many of in Leipzig?', audio: DIALOG, options: ['parks and cafés', 'museums and churches', 'bridges and rivers', 'shops and cinemas'], answer: 'parks and cafés', explanation: 'viele Parks und Cafés.' }),
    q({ id: 'L13-A-02', topic: 'gefallen', skill: 'listening', type: 'listen', objective: 'L13-O4', instructions: 'Listen again.', prompt: 'What doesn’t the speaker like?', audio: DIALOG, options: ['the station', 'the parks', 'the cafés', 'the old town'], answer: 'the station', explanation: 'Der Bahnhof gefällt mir nicht.' }),
    q({ id: 'L13-A-03', topic: 'gefallen', skill: 'reading', type: 'reading', objective: 'L13-O4', instructions: 'Read the message.', passage: READ, prompt: 'Gefällt Tim Freiburg?', options: ['Ja, sehr gut.', 'Nein, gar nicht.', 'Das sagt er nicht.'], answer: 'Ja, sehr gut.', explanation: 'sie gefällt mir sehr gut.' }),
    q({ id: 'L13-A-04', topic: 'es-gibt', skill: 'reading', type: 'reading', objective: 'L13-O1', instructions: 'Read the message.', passage: READ, prompt: 'Was gibt es in Freiburg nicht?', options: ['einen Flughafen', 'eine Altstadt', 'viele Fahrräder'], answer: 'einen Flughafen', explanation: 'keinen Flughafen.' }),
    q({ id: 'L13-A-05', topic: 'city', skill: 'reading', type: 'reading', objective: 'L13-O5', instructions: 'Read the message.', passage: READ, prompt: 'Wie ist Freiburg?', options: ['klein', 'sehr groß', 'laut'], answer: 'klein', explanation: 'Die Stadt ist klein.' }),
    q({ id: 'L13-A-06', topic: 'city', skill: 'writing', type: 'writing', objective: 'L13-O5', instructions: 'Write about your town (5–6 sentences).', prompt: 'What is there? What isn’t there? What do you like / not like?',
      rubric: ['I use es gibt + einen / ein / eine and keinen / kein / keine.', 'I use gefällt / gefallen correctly (thing = subject).', 'I use dative pronouns (mir, uns …).', 'I use 2–3 adjectives (laut, ruhig, grün …).'],
      model: 'Ich wohne in Bremen. In Bremen gibt es einen Fluss, ein Rathaus und viele Parks. Es gibt aber keinen Berg. Die Altstadt gefällt mir sehr gut, sie ist schön und ruhig. Die Straßen am Bahnhof gefallen mir nicht, sie sind zu laut.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L13-A-07', topic: 'city', skill: 'speaking', type: 'speaking', objective: 'L13-O5', instructions: 'Describe your town out loud for one minute.', prompt: 'Then ask a partner: Wie gefällt dir deine Stadt? Was gibt es dort?',
      rubric: ['I said what there is and isn’t (es gibt … / es gibt keinen …).', 'I said what I like with gefallen.', 'I asked a question with dir.', 'I spoke for about one minute.'],
      model: 'In meiner Stadt gibt es einen Markt, eine Bibliothek und viele Cafés. Es gibt aber kein Kino. Der Markt gefällt mir sehr gut. Und du? Wie gefällt dir deine Stadt?', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    q({ id: 'L13-T-01', topic: 'es-gibt', skill: 'grammar', grammar: 'es-gibt', type: 'mc', objective: 'L13-O1', instructions: 'Choose the article.', prompt: 'In der Stadt gibt es … Fluss. (der Fluss)', options: ['einen', 'ein', 'eine', 'einem'], answer: 'einen', explanation: 'der → einen.' }),
    gibt('L13-T-02', 'Hier gibt es ___ Apotheke. (kein, die Apotheke)', [['keine']], 'die → keine.'),
    q({ id: 'L13-T-03', topic: 'es-gibt', skill: 'grammar', grammar: 'es-gibt', type: 'order', objective: 'L13-O1', instructions: 'Put the words in order.', prompt: 'In Hamburg there are many bridges.', tokens: ['In', 'Hamburg', 'gibt', 'es', 'viele', 'Brücken'], answer: 'In Hamburg gibt es viele Brücken', explanation: 'Place first → gibt es.' }),
    pron('L13-T-04', 'Das Haus gehört … (sie, they)', 'ihnen', 'sie (they) → ihnen.', ['ihnen', 'ihr', 'sie', 'Ihnen']),
    pron('L13-T-05', 'Ich helfe … gern. (du)', 'dir', 'du → dir.', ['dir', 'dich', 'du', 'euch']),
    q({ id: 'L13-T-06', topic: 'dative-pronouns', skill: 'grammar', grammar: 'dative-pronouns', type: 'gap', objective: 'L13-O2', instructions: 'Fill in the dative pronoun.', prompt: 'Die Stadt gefällt ___ gut. (wir)', answer: [['uns']], explanation: 'wir → uns.' }),
    q({ id: 'L13-T-07', topic: 'dative-verbs', skill: 'grammar', grammar: 'dative-verbs', type: 'conjugation', objective: 'L13-O3', instructions: 'Conjugate.', prompt: 'du + helfen →', answer: 'hilfst', explanation: 'du hilfst.' }),
    q({ id: 'L13-T-08', topic: 'gefallen', skill: 'grammar', grammar: 'gefallen', type: 'mc', objective: 'L13-O4', instructions: 'gefällt or gefallen?', prompt: 'Die Museen … ihm nicht.', options: ['gefallen', 'gefällt'], answer: 'gefallen', explanation: 'plural → gefallen.' }),
    q({ id: 'L13-T-09', topic: 'gefallen', skill: 'grammar', grammar: 'gefallen', type: 'gap', objective: 'L13-O4', instructions: 'Fill in gefallen.', prompt: 'Wie ___ Ihnen das Hotel?', answer: [['gefällt']], explanation: 'das Hotel → gefällt.' }),
    q({ id: 'L13-T-10', topic: 'dative-verbs', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L13-O3', instructions: 'Write it in German.', prompt: 'Can you help me? (du)', answer: 'Kannst du mir helfen?', explanation: 'helfen + mir.' }),
    q({ id: 'L13-T-11', topic: 'gefallen', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L13-O4', instructions: 'Write it in German (use gefallen).', prompt: 'Do you like the flat? (du)', answer: 'Gefällt dir die Wohnung?', explanation: 'Gefällt dir …?' }),
    q({ id: 'L13-T-12', topic: 'city', skill: 'vocabulary', type: 'match', objective: 'L13-O5', instructions: 'Match.', prompt: '', pairs: [['sauber', 'clean'], ['berühmt', 'famous'], ['ruhig', 'quiet'], ['die Bibliothek', 'library'], ['das Kino', 'cinema']], explanation: 'City words.' }),
    q({ id: 'L13-T-13', topic: 'dative-verbs', skill: 'listening', type: 'listen', objective: 'L13-O3', instructions: 'Listen and answer.', prompt: 'Whose bike is it?', audio: 'Das Fahrrad ist nicht von mir. Es gehört meiner Schwester.', options: ['his sister’s', 'his brother’s', 'his', 'his friend’s'], answer: 'his sister’s', explanation: 'Es gehört meiner Schwester.' }),
    q({ id: 'L13-T-14', topic: 'es-gibt', skill: 'reading', type: 'reading', objective: 'L13-O1', instructions: 'Read and answer.', passage: 'In Lindau gibt es einen See und einen kleinen Hafen.\nEs gibt aber keine Universität.', prompt: 'Was gibt es in Lindau nicht?', options: ['eine Universität', 'einen See', 'einen Hafen'], answer: 'eine Universität', explanation: 'keine Universität.' }),
    q({ id: 'L13-T-15', topic: 'dative-verbs', skill: 'grammar', grammar: 'dative-verbs', type: 'mc', objective: 'L13-O3', instructions: 'Choose one.', prompt: 'Which verb takes the dative?', options: ['danken', 'sehen', 'suchen', 'kaufen'], answer: 'danken', explanation: 'danken + dative: Ich danke dir.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
