// Lektion 7 · "Sie können super tanzen!" (Momente A1.1, Modul 3)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 8.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 7, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const conj = (id, prompt, answer, ex, obj = 'L7-O3', g = 'vowel-change', topic = 'vowel-change') => q({ id, topic, skill: 'grammar', grammar: g, type: 'conjugation', objective: obj, instructions: 'Write the verb form.', prompt, answer, explanation: ex });
  const art = (id, noun, hint, a) => q({ id, topic: 'articles', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L7-O4', instructions: 'Choose the article.', prompt: noun, hint, options: ['der', 'die', 'das'], answer: a, explanation: `${a} ${noun}.` });

  const objectives = [
    { id: 'L7-O1', text: 'Say what you can do with können (Ich kann gut tanzen).', kind: 'communication' },
    { id: 'L7-O2', text: 'Build the sentence bracket: können in position 2, the infinitive at the end.', kind: 'grammar' },
    { id: 'L7-O3', text: 'Use verbs with a vowel change: fahren (fährt), lesen (liest), treffen (trifft).', kind: 'grammar' },
    { id: 'L7-O4', text: 'Say what you like doing with gern / nicht gern.', kind: 'communication' },
    { id: 'L7-O5', text: 'Say how often: immer, oft, manchmal, selten, nie.', kind: 'communication' },
    { id: 'L7-O6', text: 'Give a compliment and react to one.', kind: 'communication' }
  ];

  const learn = [
    { id: 'koennen', title: 'können (can, to be able to)', objective: 'L7-O1', href: GB + '8',
      text: 'ich and er/sie have the same form and no ending: ich kann, er kann.',
      table: [['ich kann · du kannst', 'I can · you can'], ['er / sie kann', 'he / she can'], ['wir können · ihr könnt', 'we can · you (all) can'], ['sie / Sie können', 'they can / you can (polite)']],
      mistakes: [['er kannt', 'er kann', 'No ending with ich and er/sie/es.']] },
    { id: 'bracket', title: 'The sentence bracket (Satzklammer)', objective: 'L7-O2', href: GB + '8',
      text: 'können goes in position 2. The second verb goes to the very end, in the infinitive.',
      table: [['Ich kann sehr gut tanzen.', 'können … tanzen = the bracket'], ['Kannst du Gitarre spielen?', 'yes/no question: können first, infinitive last']],
      mistakes: [['Er kann singen sehr gut.', 'Er kann sehr gut singen.', 'The infinitive goes to the end.']] },
    { id: 'vowel', title: 'More verbs with a vowel change', objective: 'L7-O3', href: GB + '8',
      text: 'Like sprechen and sehen, these change the vowel only with du and er/sie/es.',
      table: [['fahren → du fährst, er fährt', 'a → ä'], ['lesen → du liest, er liest', 'e → ie'], ['treffen → du triffst, er trifft', 'e → i']] },
    { id: 'gern', title: 'gern: saying what you like doing', objective: 'L7-O4', href: GB + '8',
      text: 'Put gern after the verb. nicht gern = don’t like doing.',
      examples: [['Ich schwimme gern.', 'I like swimming.'], ['Er kocht nicht gern.', 'He doesn’t like cooking.'], ['Was machst du gern in der Freizeit?', 'What do you like doing in your free time?']] },
    { id: 'frequency', title: 'How often?', objective: 'L7-O5', href: GB + '8',
      table: [['immer', 'always (100 %)'], ['oft', 'often'], ['manchmal', 'sometimes'], ['selten', 'rarely'], ['nie', 'never (0 %)']],
      examples: [['Tom spielt oft Fußball.', 'Tom often plays football.']] },
    { id: 'compliments', title: 'Compliments', objective: 'L7-O6', href: GB + '8',
      examples: [['Du kannst super tanzen!', 'You can dance really well!'], ['Toll! / Wow!', 'Great! / Wow!'], ['Danke, das ist nett.', 'Thanks, that’s kind.']] }
  ];

  const practice = [
    conj('L07-P-01', 'du + können →', 'kannst', 'du kannst.', 'L7-O1', 'modal-verb', 'koennen'),
    conj('L07-P-02', 'er + können →', 'kann', 'er kann (no ending).', 'L7-O1', 'modal-verb', 'koennen'),
    q({ id: 'L07-P-03', topic: 'koennen', skill: 'grammar', grammar: 'modal-verb', type: 'gap', objective: 'L7-O1', instructions: 'Fill in können.', prompt: 'Wir ___ gut kochen. ___ ihr auch kochen?', answer: [['können'], ['Könnt']], explanation: 'wir können, ihr könnt.', learnHref: GB + '8' }),
    q({ id: 'L07-P-04', topic: 'bracket', skill: 'grammar', grammar: 'sentence-bracket', type: 'order', objective: 'L7-O2', instructions: 'Put the words in order.', prompt: 'I can dance well.', tokens: ['kann', 'Ich', 'tanzen', 'gut'], answer: 'Ich kann gut tanzen', explanation: 'kann in position 2, tanzen at the end.', learnHref: GB + '8' }),
    q({ id: 'L07-P-05', topic: 'bracket', skill: 'grammar', grammar: 'sentence-bracket', type: 'order', objective: 'L7-O2', instructions: 'Put the words in order.', prompt: 'Can you swim? (polite)', tokens: ['Sie', 'schwimmen', 'Können'], answer: 'Können Sie schwimmen', explanation: 'Können first, schwimmen last.' }),
    q({ id: 'L07-P-06', topic: 'bracket', skill: 'grammar', grammar: 'sentence-bracket', type: 'mc', objective: 'L7-O2', instructions: 'Choose the correct sentence.', prompt: 'He can sing very well.', options: ['Er kann sehr gut singen.', 'Er kann singen sehr gut.', 'Er singen kann sehr gut.', 'Er kann sehr gut singt.'], answer: 'Er kann sehr gut singen.', explanation: 'Infinitive at the end.' }),
    conj('L07-P-07', 'du + fahren →', 'fährst', 'a → ä: du fährst.'),
    conj('L07-P-08', 'er + lesen →', 'liest', 'e → ie: er liest.'),
    conj('L07-P-09', 'sie (she) + treffen →', 'trifft', 'e → i: sie trifft.'),
    q({ id: 'L07-P-10', topic: 'vowel-change', skill: 'grammar', grammar: 'vowel-change', type: 'gap', objective: 'L7-O3', instructions: 'Fill in lesen.', prompt: 'Was ___ du? – Ich ___ ein Buch.', answer: [['liest'], ['lese']], explanation: 'du liest, ich lese.', learnHref: GB + '8' }),
    q({ id: 'L07-P-11', topic: 'vowel-change', skill: 'grammar', grammar: 'vowel-change', type: 'gap', objective: 'L7-O3', instructions: 'Fill in fahren.', prompt: 'Er ___ gern Fahrrad.', answer: [['fährt']], explanation: 'er fährt.' }),
    q({ id: 'L07-P-12', topic: 'gern', skill: 'grammar', grammar: 'gern', type: 'mc', objective: 'L7-O4', instructions: 'Choose the correct sentence.', prompt: 'I like swimming.', options: ['Ich schwimme gern.', 'Ich gern schwimme.', 'Gern ich schwimme.', 'Ich schwimme gern nicht.'], answer: 'Ich schwimme gern.', explanation: 'gern comes after the verb.', learnHref: GB + '8' }),
    q({ id: 'L07-P-13', topic: 'gern', skill: 'grammar', grammar: 'gern', type: 'order', objective: 'L7-O4', instructions: 'Put the words in order.', prompt: 'I don’t like cooking.', tokens: ['nicht', 'Ich', 'gern', 'koche'], answer: 'Ich koche nicht gern', explanation: 'nicht gern after the verb.' }),
    q({ id: 'L07-P-14', topic: 'frequency', skill: 'vocabulary', type: 'match', objective: 'L7-O5', instructions: 'Match.', prompt: '', pairs: [['immer', 'always'], ['oft', 'often'], ['manchmal', 'sometimes'], ['selten', 'rarely'], ['nie', 'never']], explanation: 'From 100 % to 0 %.', learnHref: GB + '8' }),
    q({ id: 'L07-P-15', topic: 'frequency', skill: 'vocabulary', type: 'mc', objective: 'L7-O5', instructions: 'Choose one.', prompt: 'Which word means more often than manchmal?', options: ['oft', 'selten', 'nie', 'gar nicht'], answer: 'oft', explanation: 'immer > oft > manchmal > selten > nie.' }),
    q({ id: 'L07-P-16', topic: 'frequency', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L7-O5', instructions: 'Put the words in order.', prompt: 'Tom often plays football.', tokens: ['spielt', 'oft', 'Fußball', 'Tom'], answer: 'Tom spielt oft Fußball', explanation: 'oft after the verb.' }),
    q({ id: 'L07-P-17', topic: 'hobbies', skill: 'vocabulary', type: 'match', objective: 'L7-O1', instructions: 'Match the hobby.', prompt: '', pairs: [['tanzen', 'to dance'], ['malen', 'to paint'], ['wandern', 'to hike'], ['reiten', 'to ride a horse'], ['joggen', 'to jog']], explanation: 'Hobbies.' }),
    q({ id: 'L07-P-18', topic: 'compliments', skill: 'communication', type: 'mc', objective: 'L7-O6', instructions: 'Choose the best reaction.', prompt: 'Du kannst super singen!', options: ['Danke, das ist nett.', 'Bitte.', 'Wie bitte?', 'Tschüs!'], answer: 'Danke, das ist nett.', explanation: 'Thank the person for the compliment.', learnHref: GB + '8' }),
    q({ id: 'L07-P-19', topic: 'koennen', skill: 'writing', type: 'translate', objective: 'L7-O1', instructions: 'Write it in German.', prompt: 'I can swim.', answer: 'Ich kann schwimmen.', explanation: 'Ich kann + infinitive.' }),
    q({ id: 'L07-P-20', topic: 'frequency', skill: 'writing', type: 'translate', objective: 'L7-O5', instructions: 'Write it in German.', prompt: 'She often reads.', answer: 'Sie liest oft.', explanation: 'sie liest (e → ie) + oft.' }),
    q({ id: 'L07-P-21', topic: 'bracket', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L7-O2', instructions: 'Write it in German (informal).', prompt: 'Can you play the guitar?', answer: 'Kannst du Gitarre spielen?', explanation: 'Kannst du … spielen?' }),
    q({ id: 'L07-P-22', topic: 'frequency', skill: 'vocabulary', type: 'mc', objective: 'L7-O5', instructions: 'Choose the meaning.', prompt: 'gar nicht', options: ['not at all', 'a little', 'often', 'nothing'], answer: 'not at all', explanation: 'gar nicht = not at all.' }),
    q({ id: 'L07-P-23', topic: 'frequency', skill: 'vocabulary', type: 'gap', objective: 'L7-O5', instructions: 'Write “not at all”.', prompt: 'Ich kann ___ tanzen.', answer: [['gar nicht']], explanation: 'Ich kann gar nicht tanzen.' }),
    art('L07-P-24', 'Hobby', 'hobby', 'das'), art('L07-P-25', 'Freizeit', 'free time', 'die'),
    q({ id: 'L07-P-26', topic: 'koennen', skill: 'listening', type: 'listen', objective: 'L7-O1', instructions: 'Listen and answer.', prompt: 'What can’t Ben do?', audio: 'Ich heiße Ben. Ich kann gut kochen, aber ich kann nicht singen.', options: ['sing', 'cook', 'dance', 'swim'], answer: 'sing', explanation: 'Ich kann nicht singen.' }),
    q({ id: 'L07-P-27', topic: 'frequency', skill: 'listening', type: 'listen', objective: 'L7-O5', instructions: 'Listen and answer.', prompt: 'What does the speaker often do at the weekend?', audio: 'Am Wochenende fahre ich oft Fahrrad. Ich lese auch gern.', options: ['ride a bike', 'swim', 'cook', 'paint'], answer: 'ride a bike', explanation: 'Ich fahre oft Fahrrad.' }),
    q({ id: 'L07-P-28', topic: 'koennen', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L7-O1', instructions: 'Listen and write.', prompt: '', audio: 'Kannst du tanzen? Ja, ein bisschen.', answer: 'Kannst du tanzen? Ja, ein bisschen.', accept: ['Kannst du tanzen? – Ja, ein bisschen.'], explanation: 'Kannst du tanzen? – Ja, ein bisschen.' }),
    q({ id: 'L07-P-29', topic: 'vowel-change', skill: 'grammar', grammar: 'vowel-change', type: 'mc', objective: 'L7-O3', instructions: 'Choose the verb form.', prompt: 'Wir … heute Freunde.', options: ['treffen', 'trefft', 'trifft', 'triffst'], answer: 'treffen', explanation: 'wir treffen (no change).' }),
    conj('L07-P-30', 'ihr + fahren →', 'fahrt', 'No vowel change with ihr: ihr fahrt.')
  ];

  const DIALOG = 'Was machst du gern in der Freizeit? – Ich tanze gern und ich fotografiere oft. Und du? – Ich spiele Gitarre. Ich kann auch ein bisschen singen.';
  const READ = 'Hallo, ich bin Lina. In meiner Freizeit lese ich sehr gern.\nIch jogge manchmal, aber ich schwimme nie.\nMein Freund Paul kann super kochen!';
  const apply = [
    q({ id: 'L07-A-01', topic: 'frequency', skill: 'listening', type: 'listen', objective: 'L7-O5', instructions: 'Listen to the conversation.', prompt: 'What does the first person often do?', audio: DIALOG, options: ['take photos', 'play the guitar', 'sing', 'cook'], answer: 'take photos', explanation: 'Ich fotografiere oft.' }),
    q({ id: 'L07-A-02', topic: 'koennen', skill: 'listening', type: 'listen', objective: 'L7-O1', instructions: 'Listen again.', prompt: 'What can the second person do a little?', audio: DIALOG, options: ['sing', 'dance', 'paint', 'swim'], answer: 'sing', explanation: 'Ich kann auch ein bisschen singen.' }),
    q({ id: 'L07-A-03', topic: 'frequency', skill: 'reading', type: 'reading', objective: 'L7-O5', instructions: 'Read the text.', passage: READ, prompt: 'Was macht Lina nie?', options: ['schwimmen', 'lesen', 'joggen'], answer: 'schwimmen', explanation: 'ich schwimme nie.' }),
    q({ id: 'L07-A-04', topic: 'koennen', skill: 'reading', type: 'reading', objective: 'L7-O1', instructions: 'Read the text.', passage: READ, prompt: 'Wer kann gut kochen?', options: ['Paul', 'Lina'], answer: 'Paul', explanation: 'Mein Freund Paul kann super kochen!' }),
    q({ id: 'L07-A-05', topic: 'frequency', skill: 'reading', type: 'reading', objective: 'L7-O5', instructions: 'Read the text.', passage: READ, prompt: 'Wie oft joggt Lina?', options: ['manchmal', 'oft', 'nie'], answer: 'manchmal', explanation: 'Ich jogge manchmal.' }),
    q({ id: 'L07-A-06', topic: 'hobbies', skill: 'writing', type: 'writing', objective: 'L7-O4', instructions: 'Write about your free time (5–6 sentences).', prompt: 'What do you like doing? What can you do well / not at all? How often?',
      rubric: ['I use gern and nicht gern.', 'I use können with the infinitive at the end.', 'I use at least two frequency words.', 'I use one verb with a vowel change (fährt, liest, trifft …).'],
      model: 'In meiner Freizeit lese ich sehr gern. Ich kann gut kochen, aber ich kann gar nicht tanzen. Ich spiele oft Fußball. Am Wochenende fahre ich manchmal Fahrrad. Ich schwimme nie.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L07-A-07', topic: 'compliments', skill: 'speaking', type: 'speaking', objective: 'L7-O6', instructions: 'Talk (out loud) with a friend about hobbies.', prompt: 'Ask what they can do and like doing. Give one compliment and react to one.',
      rubric: ['I asked: Kannst du …? / Was machst du gern?', 'I used the sentence bracket correctly.', 'I gave a compliment (Du kannst super …!).', 'I reacted: Danke, das ist nett.'],
      model: '– Was machst du gern?\n– Ich male gern. Und du?\n– Ich spiele Gitarre. Kannst du auch Gitarre spielen?\n– Nein, gar nicht. Aber du malst super!\n– Danke, das ist nett.', explanation: 'Self-assessed. For a live partner, use the Sprechen page.' })
  ];

  const quiz = [
    conj('L07-T-01', 'ihr + können →', 'könnt', 'ihr könnt.', 'L7-O1', 'modal-verb', 'koennen'),
    q({ id: 'L07-T-02', topic: 'koennen', skill: 'grammar', grammar: 'modal-verb', type: 'gap', objective: 'L7-O1', instructions: 'Fill in können.', prompt: '___ du Fahrrad fahren? – Ja, ich ___ gut Fahrrad fahren.', answer: [['Kannst'], ['kann']], explanation: 'du kannst, ich kann.' }),
    q({ id: 'L07-T-03', topic: 'bracket', skill: 'grammar', grammar: 'sentence-bracket', type: 'order', objective: 'L7-O2', instructions: 'Put the words in order.', prompt: 'He can play the guitar.', tokens: ['Gitarre', 'kann', 'Er', 'spielen'], answer: 'Er kann Gitarre spielen', explanation: 'kann … spielen.' }),
    conj('L07-T-04', 'du + lesen →', 'liest', 'du liest.'),
    conj('L07-T-05', 'er + fahren →', 'fährt', 'er fährt.'),
    q({ id: 'L07-T-06', topic: 'vowel-change', skill: 'grammar', grammar: 'vowel-change', type: 'gap', objective: 'L7-O3', instructions: 'Fill in treffen.', prompt: 'Du ___ heute Anna, oder?', answer: [['triffst']], explanation: 'du triffst.' }),
    q({ id: 'L07-T-07', topic: 'gern', skill: 'grammar', grammar: 'gern', type: 'mc', objective: 'L7-O4', instructions: 'Choose the correct sentence.', prompt: 'She doesn’t like cooking.', options: ['Sie kocht nicht gern.', 'Sie kocht gern nicht.', 'Sie nicht gern kocht.', 'Sie kocht kein gern.'], answer: 'Sie kocht nicht gern.', explanation: 'nicht gern after the verb.' }),
    q({ id: 'L07-T-08', topic: 'frequency', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L7-O5', instructions: 'Put the words in order.', prompt: 'We sometimes go hiking.', tokens: ['manchmal', 'Wir', 'wandern'], answer: 'Wir wandern manchmal', explanation: 'Wir – wandern – manchmal.' }),
    q({ id: 'L07-T-09', topic: 'frequency', skill: 'vocabulary', type: 'mc', objective: 'L7-O5', instructions: 'Choose the opposite.', prompt: 'nie ↔ …', options: ['immer', 'oft', 'manchmal', 'selten'], answer: 'immer', explanation: 'nie (never) ↔ immer (always).' }),
    q({ id: 'L07-T-10', topic: 'koennen', skill: 'writing', type: 'translate', objective: 'L7-O1', instructions: 'Write it in German.', prompt: 'I can’t dance.', answer: 'Ich kann nicht tanzen.', explanation: 'Ich kann nicht + infinitive.' }),
    q({ id: 'L07-T-11', topic: 'gern', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L7-O4', instructions: 'Write it in German.', prompt: 'He likes listening to music.', answer: 'Er hört gern Musik.', explanation: 'Musik hören → Er hört gern Musik.' }),
    q({ id: 'L07-T-12', topic: 'hobbies', skill: 'vocabulary', type: 'match', objective: 'L7-O1', instructions: 'Match.', prompt: '', pairs: [['schwimmen', 'to swim'], ['singen', 'to sing'], ['kochen', 'to cook'], ['lesen', 'to read'], ['treffen', 'to meet']], explanation: 'Free-time verbs.' }),
    q({ id: 'L07-T-13', topic: 'gern', skill: 'listening', type: 'listen', objective: 'L7-O4', instructions: 'Listen and answer.', prompt: 'What does the sister like doing?', audio: 'Meine Schwester reitet sehr gern. Sie reitet jeden Samstag.', options: ['horse riding', 'swimming', 'painting', 'dancing'], answer: 'horse riding', explanation: 'reiten = to ride a horse.' }),
    q({ id: 'L07-T-14', topic: 'frequency', skill: 'reading', type: 'reading', objective: 'L7-O5', instructions: 'Read and answer.', passage: 'Herr Wolf ist 70. Er wandert oft und malt gern.\nFußball spielt er nie.', prompt: 'Was macht Herr Wolf nie?', options: ['Fußball spielen', 'wandern', 'malen'], answer: 'Fußball spielen', explanation: 'Fußball spielt er nie.' }),
    q({ id: 'L07-T-15', topic: 'compliments', skill: 'communication', type: 'mc', objective: 'L7-O6', instructions: 'Choose one.', prompt: 'Which one is a compliment?', options: ['Du kannst toll malen!', 'Wie spät ist es?', 'Ich male nicht gern.', 'Kannst du malen?'], answer: 'Du kannst toll malen!', explanation: 'A compliment praises someone.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
