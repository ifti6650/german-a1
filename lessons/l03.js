// Lektion 3 · "Das ist meine Schwester." (Momente A1.1, Modul 1)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 4.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 3, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);

  const objectives = [
    { id: 'L3-O1', text: 'Introduce your family: Das ist mein Vater / meine Schwester.', kind: 'communication' },
    { id: 'L3-O2', text: 'Ask and answer yes/no questions (the verb comes first).', kind: 'grammar' },
    { id: 'L3-O3', text: 'Answer with ja, nein and doch.', kind: 'communication' },
    { id: 'L3-O4', text: 'Say which languages you speak and how well; sprechen → du sprichst, er spricht.', kind: 'grammar' },
    { id: 'L3-O5', text: 'Use mein/meine and dein/deine.', kind: 'grammar' },
    { id: 'L3-O6', text: 'Say whose family member it is with names: Annas Bruder.', kind: 'grammar' }
  ];

  const learn = [
    { id: 'family', title: 'Family words', objective: 'L3-O1',
      text: 'Learn each word with its article. Plural-only words like die Eltern and die Geschwister always take die.',
      table: [['der Vater · die Mutter', 'father · mother'], ['die Eltern', 'parents'], ['der Bruder · die Schwester', 'brother · sister'], ['die Geschwister', 'siblings'], ['der Sohn · die Tochter', 'son · daughter'], ['der Großvater (Opa) · die Großmutter (Oma)', 'grandfather · grandmother'], ['der Mann · die Frau', 'husband · wife (also: man · woman)']] },
    { id: 'yes-no', title: 'Yes/no questions: the verb comes first', objective: 'L3-O2', href: GB + '41-yesno-questions-the-verb-comes-first',
      text: 'Without a question word, the verb moves to position 1. Your voice usually goes up at the end.',
      examples: [['Kommst du aus Polen?', 'Do you come from Poland?'], ['Sind Sie verheiratet?', 'Are you married?'], ['Hast du Geschwister?', 'Do you have siblings?']],
      mistakes: [['Du kommst aus Polen?', 'Kommst du aus Polen?', 'In a normal yes/no question the verb comes first.']] },
    { id: 'two-questions', title: 'Two kinds of questions', objective: 'L3-O2', href: GB + '42-two-kinds-of-questions-side-by-side',
      table: [['Woher kommst du?', 'W-question: question word + verb (position 2) → answer with information'], ['Kommst du aus Polen?', 'Yes/no question: verb first (position 1) → answer with ja / nein / doch']] },
    { id: 'ja-nein-doch', title: 'ja, nein and doch', objective: 'L3-O3', href: GB + '43-answering-ja-nein-and-doch',
      text: 'doch means “yes” as an answer to a negative question (one with nicht).',
      examples: [['Sprichst du Englisch? – Ja. / Nein.', 'Do you speak English? – Yes. / No.'], ['Kommst du nicht aus Spanien? – Doch, ich komme aus Spanien.', 'Don’t you come from Spain? – Yes, I do.']],
      mistakes: [['Wohnst du nicht in Berlin? – Ja, ich wohne in Berlin.', 'Doch, ich wohne in Berlin.', 'After a negative question, “yes” is doch.']] },
    { id: 'sprechen', title: 'sprechen changes its vowel', objective: 'L3-O4', href: GB + '44-the-verb-sprechen-changes-its-vowel',
      text: 'With du and er/sie/es, e becomes i. All other forms are regular.',
      table: [['ich spreche', 'I speak'], ['du sprichst', 'you speak'], ['er / sie spricht', 'he / she speaks'], ['wir sprechen · ihr sprecht · sie/Sie sprechen', 'we · you (all) · they / you (polite)']],
      examples: [['Ich spreche ein bisschen Deutsch.', 'I speak a little German.'], ['Meine Muttersprache ist Arabisch.', 'My mother tongue is Arabic.']],
      mistakes: [['er sprecht', 'er spricht', 'e → i with du and er/sie/es.']] },
    { id: 'mein-dein', title: 'mein and dein (my, your)', objective: 'L3-O5', href: GB + '45-mein-and-dein-my-your',
      text: 'der and das words → mein / dein. die words and all plurals → meine / deine.',
      table: [['mein Vater, mein Bruder, mein Kind', 'der / das words'], ['meine Mutter, meine Schwester', 'die words'], ['meine Eltern, meine Geschwister', 'plural'], ['dein Sohn · deine Tochter', 'your (informal)']],
      mistakes: [['mein Schwester', 'meine Schwester', 'die Schwester → meine.'], ['meine Bruder', 'mein Bruder', 'der Bruder → mein.']] },
    { id: 'names-s', title: 'Annas Bruder: -s with names', objective: 'L3-O6', href: GB + '46-annas-brother--s-with-names',
      text: 'To say whose, add -s to the name — without an apostrophe.',
      examples: [['Das ist Annas Bruder.', 'That is Anna’s brother.'], ['Toms Mutter spricht Englisch.', 'Tom’s mother speaks English.']],
      mistakes: [['Anna’s Bruder', 'Annas Bruder', 'German usually writes no apostrophe here.']] }
  ];

  const practice = [
    q({ id: 'L03-P-01', topic: 'yes-no-questions', skill: 'grammar', grammar: 'verb-first', type: 'order', objective: 'L3-O2', instructions: 'Put the words in order.', prompt: 'Do you come from Poland?', tokens: ['du', 'Kommst', 'Polen', 'aus'], answer: 'Kommst du aus Polen', explanation: 'Yes/no question: the verb comes first.', learnHref: GB + '41-yesno-questions-the-verb-comes-first' }),
    q({ id: 'L03-P-02', topic: 'yes-no-questions', skill: 'grammar', grammar: 'verb-first', type: 'order', objective: 'L3-O2', instructions: 'Put the words in order.', prompt: 'Are you married? (polite)', tokens: ['Sie', 'verheiratet', 'Sind'], answer: 'Sind Sie verheiratet', explanation: 'Sind – Sie – verheiratet?' }),
    q({ id: 'L03-P-03', topic: 'yes-no-questions', skill: 'grammar', grammar: 'verb-first', type: 'order', objective: 'L3-O4', instructions: 'Put the words in order.', prompt: 'Do you (all) speak German?', tokens: ['Deutsch', 'ihr', 'Sprecht'], answer: 'Sprecht ihr Deutsch', explanation: 'Sprecht – ihr – Deutsch?' }),
    q({ id: 'L03-P-04', topic: 'yes-no-questions', skill: 'grammar', grammar: 'question-types', type: 'mc', objective: 'L3-O2', instructions: 'Choose one.', prompt: 'Which one is a yes/no question?', options: ['Hast du Geschwister?', 'Wo wohnst du?', 'Wer ist das?', 'Wie heißt du?'], answer: 'Hast du Geschwister?', explanation: 'No question word, verb first.', learnHref: GB + '42-two-kinds-of-questions-side-by-side' }),
    q({ id: 'L03-P-05', topic: 'ja-nein-doch', skill: 'communication', grammar: 'doch', type: 'mc', objective: 'L3-O3', instructions: 'Choose the answer word.', prompt: 'Wohnst du nicht in Berlin? – …, ich wohne in Berlin.', options: ['Doch', 'Ja', 'Nein'], answer: 'Doch', explanation: 'Negative question + yes → doch.', learnHref: GB + '43-answering-ja-nein-and-doch' }),
    q({ id: 'L03-P-06', topic: 'ja-nein-doch', skill: 'communication', type: 'mc', objective: 'L3-O3', instructions: 'Choose the answer word.', prompt: 'Bist du verheiratet? – …, ich bin ledig.', options: ['Nein', 'Ja', 'Doch'], answer: 'Nein', explanation: 'ledig = not married → Nein.' }),
    q({ id: 'L03-P-07', topic: 'ja-nein-doch', skill: 'communication', type: 'mc', objective: 'L3-O3', instructions: 'Choose the answer word.', prompt: 'Ist das deine Mutter? – …, das ist meine Mutter.', options: ['Ja', 'Doch', 'Nein'], answer: 'Ja', explanation: 'Positive question + yes → ja.' }),
    q({ id: 'L03-P-08', topic: 'sprechen', skill: 'grammar', grammar: 'vowel-change', type: 'conjugation', objective: 'L3-O4', instructions: 'Write the verb form.', prompt: 'du + sprechen →', answer: 'sprichst', explanation: 'e → i: du sprichst.', learnHref: GB + '44-the-verb-sprechen-changes-its-vowel' }),
    q({ id: 'L03-P-09', topic: 'sprechen', skill: 'grammar', grammar: 'vowel-change', type: 'conjugation', objective: 'L3-O4', instructions: 'Write the verb form.', prompt: 'er + sprechen →', answer: 'spricht', explanation: 'e → i: er spricht.' }),
    q({ id: 'L03-P-10', topic: 'sprechen', skill: 'grammar', grammar: 'vowel-change', type: 'conjugation', objective: 'L3-O4', instructions: 'Write the verb form.', prompt: 'ihr + sprechen →', answer: 'sprecht', explanation: 'No vowel change with ihr: ihr sprecht.' }),
    q({ id: 'L03-P-11', topic: 'sprechen', skill: 'grammar', grammar: 'vowel-change', type: 'gap', objective: 'L3-O4', instructions: 'Write the correct form of sprechen.', prompt: 'Ich ___ Arabisch. ___ du auch Arabisch?', answer: [['spreche'], ['Sprichst']], explanation: 'ich spreche, du sprichst.' }),
    q({ id: 'L03-P-12', topic: 'mein-dein', skill: 'grammar', grammar: 'possessive', type: 'gap', objective: 'L3-O5', instructions: 'Fill in mein or meine.', prompt: 'Das ist ___ Vater und das ist ___ Mutter.', answer: [['mein'], ['meine']], explanation: 'der Vater → mein, die Mutter → meine.', learnHref: GB + '45-mein-and-dein-my-your' }),
    q({ id: 'L03-P-13', topic: 'mein-dein', skill: 'grammar', grammar: 'possessive', type: 'gap', objective: 'L3-O5', instructions: 'Fill in mein or meine.', prompt: 'Das sind ___ Eltern.', answer: [['meine']], explanation: 'Plural → meine.' }),
    q({ id: 'L03-P-14', topic: 'mein-dein', skill: 'grammar', grammar: 'possessive', type: 'mc', objective: 'L3-O5', instructions: 'Choose the right word.', prompt: 'Ist das … Bruder?', options: ['dein', 'deine'], answer: 'dein', explanation: 'der Bruder → dein.' }),
    q({ id: 'L03-P-15', topic: 'mein-dein', skill: 'grammar', grammar: 'possessive', type: 'mc', objective: 'L3-O5', instructions: 'Choose the right word.', prompt: 'Wie heißt … Schwester?', options: ['deine', 'dein'], answer: 'deine', explanation: 'die Schwester → deine.' }),
    q({ id: 'L03-P-16', topic: 'names-s', skill: 'grammar', grammar: 'genitive-s', type: 'mc', objective: 'L3-O6', instructions: 'Choose the correct German.', prompt: 'Anna’s brother', options: ['Annas Bruder', 'Anna’s Bruder', 'Bruder Anna', 'der Anna Bruder'], answer: 'Annas Bruder', explanation: 'Name + s, no apostrophe.', learnHref: GB + '46-annas-brother--s-with-names' }),
    q({ id: 'L03-P-17', topic: 'names-s', skill: 'writing', grammar: 'genitive-s', type: 'translate', objective: 'L3-O6', instructions: 'Write it in German.', prompt: 'Tom’s sister', answer: 'Toms Schwester', explanation: 'Toms Schwester.' }),
    q({ id: 'L03-P-18', topic: 'family', skill: 'vocabulary', type: 'match', objective: 'L3-O1', instructions: 'Match the family word with its meaning.', prompt: '', pairs: [['der Vater', 'father'], ['die Tochter', 'daughter'], ['die Geschwister', 'siblings'], ['die Großmutter', 'grandmother'], ['der Onkel', 'uncle']], explanation: 'Family words.' }),
    q({ id: 'L03-P-19', topic: 'family', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L3-O1', instructions: 'Choose the article.', prompt: 'Familie', hint: 'family', options: ['der', 'die', 'das'], answer: 'die', explanation: 'die Familie.' }),
    q({ id: 'L03-P-20', topic: 'family', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L3-O1', instructions: 'Choose the article.', prompt: 'Foto', hint: 'photo', options: ['der', 'die', 'das'], answer: 'das', explanation: 'das Foto.' }),
    q({ id: 'L03-P-21', topic: 'languages', skill: 'vocabulary', type: 'mc', objective: 'L3-O4', instructions: 'Choose the language.', prompt: 'In France people speak …', options: ['Französisch', 'Frankreich', 'Spanisch', 'Englisch'], answer: 'Französisch', explanation: 'Frankreich is the country; the language is Französisch.' }),
    q({ id: 'L03-P-22', topic: 'languages', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L3-O4', instructions: 'Write it in German.', prompt: 'I speak a little German.', answer: 'Ich spreche ein bisschen Deutsch.', explanation: 'ein bisschen = a little.' }),
    q({ id: 'L03-P-23', topic: 'yes-no-questions', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L3-O2', instructions: 'Write it in German (informal).', prompt: 'Do you speak English?', answer: 'Sprichst du Englisch?', explanation: 'Verb first: Sprichst du …?' }),
    q({ id: 'L03-P-24', topic: 'mein-dein', skill: 'writing', type: 'translate', objective: 'L3-O5', instructions: 'Write it in German.', prompt: 'This is my daughter.', answer: 'Das ist meine Tochter.', explanation: 'die Tochter → meine.' }),
    q({ id: 'L03-P-25', topic: 'yes-no-questions', skill: 'communication', type: 'mc', objective: 'L3-O2', instructions: 'Choose the answer that fits.', prompt: 'Kommst du aus Syrien?', options: ['Ja, aus Damaskus.', 'Aus Syrien?', 'Ich heiße Omar.', 'Doch.'], answer: 'Ja, aus Damaskus.', explanation: 'A yes/no question is answered with ja or nein (doch only after a negative question).' }),
    q({ id: 'L03-P-26', topic: 'family', skill: 'listening', type: 'listen', objective: 'L3-O1', instructions: 'Listen and answer.', prompt: 'Who is Leon?', audio: 'Das ist meine Familie. Das sind meine Eltern, und das ist mein Bruder Leon.', options: ['the brother', 'the father', 'the son', 'the uncle'], answer: 'the brother', explanation: 'mein Bruder Leon.' }),
    q({ id: 'L03-P-27', topic: 'languages', skill: 'listening', type: 'listen', objective: 'L3-O4', instructions: 'Listen and answer.', prompt: 'How well does she speak French?', audio: 'Sprichst du Französisch? – Ja, ein bisschen.', options: ['a little', 'very well', 'not at all', 'perfectly'], answer: 'a little', explanation: 'ein bisschen = a little.' }),
    q({ id: 'L03-P-28', topic: 'family', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L3-O4', instructions: 'Listen and write the sentences.', prompt: '', audio: 'Das ist meine Schwester. Sie spricht Spanisch.', answer: 'Das ist meine Schwester. Sie spricht Spanisch.', accept: ['Das ist meine Schwester, sie spricht Spanisch.'], explanation: 'meine Schwester · sie spricht.' }),
    q({ id: 'L03-P-29', topic: 'names-s', skill: 'grammar', grammar: 'genitive-s', type: 'order', objective: 'L3-O6', instructions: 'Put the words in order.', prompt: 'That is Anna’s brother.', tokens: ['ist', 'Annas', 'Das', 'Bruder'], answer: 'Das ist Annas Bruder', explanation: 'Das – ist – Annas Bruder.' }),
    q({ id: 'L03-P-30', topic: 'ja-nein-doch', skill: 'communication', grammar: 'doch', type: 'gap', objective: 'L3-O3', instructions: 'Fill in ja, nein or doch.', prompt: 'Kommst du nicht aus Spanien? – ___, ich komme aus Spanien.', answer: [['Doch']], explanation: 'Negative question, positive answer → Doch.' })
  ];

  const DIALOG = 'Ist das deine Familie? – Ja. Das sind meine Eltern, und das ist meine Schwester Mia. – Spricht Mia Englisch? – Ja, sehr gut. Sie spricht auch Französisch.';
  const READ = 'Hallo! Ich bin Samira. Ich komme aus Marokko. Meine Muttersprache ist Arabisch.\nIch spreche auch Französisch und ein bisschen Deutsch.\nDas ist mein Mann Karim. Wir haben einen Sohn und eine Tochter.';
  const apply = [
    q({ id: 'L03-A-01', topic: 'family', skill: 'listening', type: 'listen', objective: 'L3-O1', instructions: 'Listen to the conversation.', prompt: 'Who is Mia?', audio: DIALOG, options: ['the sister', 'the mother', 'the daughter', 'the aunt'], answer: 'the sister', explanation: 'meine Schwester Mia.' }),
    q({ id: 'L03-A-02', topic: 'languages', skill: 'listening', type: 'listen', objective: 'L3-O4', instructions: 'Listen again.', prompt: 'Which languages does Mia speak?', audio: DIALOG, options: ['English and French', 'only English', 'German and Spanish', 'French and Arabic'], answer: 'English and French', explanation: 'Ja, sehr gut. Sie spricht auch Französisch.' }),
    q({ id: 'L03-A-03', topic: 'languages', skill: 'reading', type: 'reading', objective: 'L3-O4', instructions: 'Read the text.', passage: READ, prompt: 'Was ist Samiras Muttersprache?', options: ['Arabisch', 'Französisch', 'Deutsch'], answer: 'Arabisch', explanation: 'Meine Muttersprache ist Arabisch.' }),
    q({ id: 'L03-A-04', topic: 'family', skill: 'reading', type: 'reading', objective: 'L3-O1', instructions: 'Read the text.', passage: READ, prompt: 'Wie heißt Samiras Mann?', options: ['Karim', 'Samir', 'Omar'], answer: 'Karim', explanation: 'Das ist mein Mann Karim.' }),
    q({ id: 'L03-A-05', topic: 'languages', skill: 'reading', type: 'reading', objective: 'L3-O4', instructions: 'Read the text.', passage: READ, prompt: 'Spricht Samira gut Deutsch?', options: ['Nein, nur ein bisschen.', 'Ja, sehr gut.'], answer: 'Nein, nur ein bisschen.', explanation: '… und ein bisschen Deutsch.' }),
    q({ id: 'L03-A-06', topic: 'family', skill: 'writing', type: 'writing', objective: 'L3-O1', instructions: 'Describe a family photo (4–6 sentences).', prompt: 'Who is who? Which languages do they speak?',
      rubric: ['I use Das ist … / Das sind … .', 'I use mein with der/das words and meine with die words and plurals.', 'I say which languages someone speaks (spricht).', 'I use at least one name with -s (e.g. Annas Bruder).'],
      model: 'Das ist meine Familie. Das sind meine Eltern. Mein Vater spricht Bengalisch und Englisch. Das ist meine Schwester Rina. Rinas Sohn ist drei Jahre alt.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L03-A-07', topic: 'yes-no-questions', skill: 'speaking', type: 'speaking', objective: 'L3-O2', instructions: 'Role-play (out loud): ask a friend about their family and languages. Use du.', prompt: 'Ask at least three yes/no questions. Answer one negative question with doch.',
      rubric: ['I asked yes/no questions with the verb first (Hast du …? Sprichst du …?).', 'I answered with ja / nein + a full sentence.', 'I used doch once after a question with nicht.', 'I used mein/meine correctly.'],
      model: '– Hast du Geschwister?\n– Ja, ich habe einen Bruder.\n– Sprichst du Englisch?\n– Ja, ein bisschen.\n– Wohnst du nicht in München?\n– Doch, ich wohne in München.', explanation: 'Self-assessed. For a live partner, use the Sprechen page.' })
  ];

  const quiz = [
    q({ id: 'L03-T-01', topic: 'yes-no-questions', skill: 'grammar', grammar: 'verb-first', type: 'order', objective: 'L3-O2', instructions: 'Put the words in order.', prompt: 'Do you have siblings?', tokens: ['Geschwister', 'du', 'Hast'], answer: 'Hast du Geschwister', explanation: 'Verb first.' }),
    q({ id: 'L03-T-02', topic: 'ja-nein-doch', skill: 'communication', grammar: 'doch', type: 'mc', objective: 'L3-O3', instructions: 'Choose the answer word.', prompt: 'Kommst du nicht aus Italien? – …, ich komme aus Italien.', options: ['Doch', 'Ja', 'Nein'], answer: 'Doch', explanation: 'Negative question, positive answer → Doch.' }),
    q({ id: 'L03-T-03', topic: 'ja-nein-doch', skill: 'communication', type: 'mc', objective: 'L3-O3', instructions: 'Choose the answer word.', prompt: 'Sprichst du Arabisch? – …, ich spreche Englisch und Deutsch.', options: ['Nein', 'Doch', 'Ja'], answer: 'Nein', explanation: 'The answer is negative → Nein.' }),
    q({ id: 'L03-T-04', topic: 'sprechen', skill: 'grammar', grammar: 'vowel-change', type: 'conjugation', objective: 'L3-O4', instructions: 'Write the verb form.', prompt: 'sie (she) + sprechen →', answer: 'spricht', explanation: 'sie spricht.' }),
    q({ id: 'L03-T-05', topic: 'sprechen', skill: 'grammar', grammar: 'vowel-change', type: 'gap', objective: 'L3-O4', instructions: 'Fill in sprechen.', prompt: 'Wir ___ Deutsch. ___ ihr auch Deutsch?', answer: [['sprechen'], ['Sprecht']], explanation: 'wir sprechen, ihr sprecht.' }),
    q({ id: 'L03-T-06', topic: 'mein-dein', skill: 'grammar', grammar: 'possessive', type: 'gap', objective: 'L3-O5', instructions: 'Fill in mein or meine.', prompt: 'Das ist ___ Bruder und das sind ___ Großeltern.', answer: [['mein'], ['meine']], explanation: 'der Bruder → mein; plural → meine.' }),
    q({ id: 'L03-T-07', topic: 'mein-dein', skill: 'grammar', grammar: 'possessive', type: 'mc', objective: 'L3-O5', instructions: 'Choose: “your” (informal).', prompt: 'Wie alt ist … Tochter?', options: ['deine', 'dein', 'meine', 'mein'], answer: 'deine', explanation: 'die Tochter → deine.' }),
    q({ id: 'L03-T-08', topic: 'names-s', skill: 'writing', grammar: 'genitive-s', type: 'translate', objective: 'L3-O6', instructions: 'Write it in German.', prompt: 'Lisa’s father', answer: 'Lisas Vater', explanation: 'Lisas Vater.' }),
    q({ id: 'L03-T-09', topic: 'yes-no-questions', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L3-O2', instructions: 'Write it in German (polite).', prompt: 'Are you married?', answer: 'Sind Sie verheiratet?', explanation: 'Sind Sie …?' }),
    q({ id: 'L03-T-10', topic: 'family', skill: 'vocabulary', type: 'match', objective: 'L3-O1', instructions: 'Match.', prompt: '', pairs: [['die Eltern', 'parents'], ['der Sohn', 'son'], ['die Tante', 'aunt'], ['die Schwester', 'sister'], ['der Großvater', 'grandfather']], explanation: 'Family words.' }),
    q({ id: 'L03-T-11', topic: 'family', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L3-O1', instructions: 'Choose the article.', prompt: 'Tochter', hint: 'daughter', options: ['der', 'die', 'das'], answer: 'die', explanation: 'die Tochter.' }),
    q({ id: 'L03-T-12', topic: 'yes-no-questions', skill: 'grammar', grammar: 'question-types', type: 'mc', objective: 'L3-O2', instructions: 'Choose one.', prompt: 'Which one is NOT a yes/no question?', options: ['Woher kommen Sie?', 'Kommen Sie aus Polen?', 'Sind Sie Lehrer?', 'Haben Sie Kinder?'], answer: 'Woher kommen Sie?', explanation: 'Woher … is a W-question.' }),
    q({ id: 'L03-T-13', topic: 'family', skill: 'listening', type: 'listen', objective: 'L3-O1', instructions: 'Listen and answer.', prompt: 'How old is Max?', audio: 'Das ist mein Sohn Max. Er ist sieben.', options: ['7', '17', '70', '6'], answer: '7', explanation: 'sieben = 7.' }),
    q({ id: 'L03-T-14', topic: 'languages', skill: 'reading', type: 'reading', objective: 'L3-O4', instructions: 'Read and answer.', passage: 'Das ist Pedro. Er kommt aus Spanien.\nPedro spricht Spanisch und sehr gut Englisch. Er lernt Deutsch.', prompt: 'Was lernt Pedro?', options: ['Deutsch', 'Englisch', 'Spanisch'], answer: 'Deutsch', explanation: 'Er lernt Deutsch.' }),
    q({ id: 'L03-T-15', topic: 'languages', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L3-O4', instructions: 'Write it in German.', prompt: 'My mother speaks French.', answer: 'Meine Mutter spricht Französisch.', explanation: 'meine Mutter + spricht.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
