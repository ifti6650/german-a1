// Lektion 1 · "Ich heiße Miriam." (Momente A1.1, Modul 1)
// Original content written for this site. Aligned with the lesson's title/topic and grammar steps 1–2
// of the site's Grammar Book. NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status: 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 1, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);

  const objectives = [
    { id: 'L1-O1', text: 'Greet people and say goodbye, formally and informally.', kind: 'communication' },
    { id: 'L1-O2', text: 'Ask how someone is and answer.', kind: 'communication' },
    { id: 'L1-O3', text: 'Say your name and where you come from, and ask others.', kind: 'communication' },
    { id: 'L1-O4', text: 'Use ich, du, Sie, er, sie with heißen, kommen, lernen and sein.', kind: 'grammar' },
    { id: 'L1-O5', text: 'Build W-questions (wie, woher, wer, was) with the verb in position 2.', kind: 'grammar' },
    { id: 'L1-O6', text: 'Spell your name with the German alphabet.', kind: 'communication' }
  ];

  // ---------------- Learn
  const learn = [
    { id: 'greetings', title: 'Hello and goodbye', objective: 'L1-O1', href: GB + '1',
      text: 'German greetings change with the time of day. Guten Tag! works all day and is polite. Hallo! and Tschüs! are informal: use them with friends, family and children.',
      table: [['Guten Morgen!', 'Good morning! (until about 10–11 am)'], ['Guten Tag!', 'Hello! / Good day! (polite)'], ['Guten Abend!', 'Good evening!'], ['Gute Nacht!', 'Good night! (before going to bed)'], ['Hallo!', 'Hi! (informal)'], ['Tschüs!', 'Bye! (informal)'], ['Auf Wiedersehen!', 'Goodbye! (polite)'], ['Bis morgen!', 'See you tomorrow!']],
      mistakes: [['Gute Nacht! (when you arrive in the evening)', 'Guten Abend!', 'Gute Nacht! is only for saying goodbye late at night.']] },
    { id: 'how-are-you', title: 'How are you?', objective: 'L1-O2', href: GB + '2',
      text: 'There is an informal and a polite question. The answer is the same; only “and you?” changes.',
      examples: [['Wie geht’s? – Gut, danke. Und dir?', 'How are you? – Good, thanks. And you? (informal)'], ['Wie geht es Ihnen? – Sehr gut, danke. Und Ihnen?', 'How are you? – Very well, thanks. And you? (polite)'], ['Es geht. / Nicht so gut.', 'Okay. / Not so good.']] },
    { id: 'pronouns', title: 'ich, du, Sie, er, sie', objective: 'L1-O4', href: GB + '1',
      text: 'du is for friends, family, children and other learners. Sie (always with a capital S) is the polite “you” for adults you don’t know, at work and in shops. er = he, sie = she.',
      table: [['ich', 'I'], ['du', 'you (informal)'], ['er / sie', 'he / she'], ['Sie', 'you (polite)']],
      mistakes: [['wie heißen sie? (to a stranger)', 'Wie heißen Sie?', 'Polite Sie always has a capital S.']] },
    { id: 'verb-endings', title: 'The verb changes with the person', objective: 'L1-O4', href: GB + '1',
      text: 'Take the stem (kommen → komm-) and add the ending for the person.',
      table: [['ich komme', 'ich -e'], ['du kommst', 'du -st'], ['er / sie kommt', 'er/sie -t'], ['Sie kommen', 'Sie -en']],
      examples: [['Ich heiße Ali. Wie heißt du?', 'My name is Ali. What is your name?'], ['Sie lernt Deutsch.', 'She is learning German.']],
      mistakes: [['du heißst', 'du heißt', 'The stem already ends in ß, so du only adds -t.']] },
    { id: 'sein', title: 'sein (to be) is irregular', objective: 'L1-O4', href: GB + '1',
      table: [['ich bin', 'I am'], ['du bist', 'you are'], ['er / sie ist', 'he / she is'], ['Sie sind', 'you are (polite)']],
      examples: [['Ich bin Lena. Bist du Tom?', 'I am Lena. Are you Tom?'], ['Das ist Herr Weber.', 'This is Mr Weber.']] },
    { id: 'w-questions', title: 'W-questions: the verb is in position 2', objective: 'L1-O5', href: GB + '2',
      text: 'The question word comes first, the verb second, then the person.',
      table: [['Wie heißt du?', 'What is your name?'], ['Woher kommen Sie?', 'Where are you from?'], ['Wer ist das?', 'Who is that?'], ['Wie geht es Ihnen?', 'How are you?']],
      examples: [['Woher kommst du? – Ich komme aus Bangladesch.', 'Where are you from? – I come from Bangladesh.'], ['Ich komme aus der Schweiz / aus der Türkei.', 'Some countries have an article: die Schweiz, die Türkei.']],
      mistakes: [['Woher du kommst?', 'Woher kommst du?', 'In a W-question the verb comes right after the question word.'], ['Ich komme von Indien.', 'Ich komme aus Indien.', 'With countries and cities, use aus.']] },
    { id: 'alphabet', title: 'Spelling your name', objective: 'L1-O6', href: GB + '2',
      text: 'Wie schreibt man das? = How do you spell that? Letters that sound different from English: E (“eh”), I (“ee”), J (“yot”), V (“fow”), W (“veh”), Z (“tset”). Plus ä, ö, ü and ß (“Eszett”).',
      examples: [['Wie heißen Sie? – Novak. N-O-V-A-K.', 'What is your name? – Novak. N-O-V-A-K.']] }
  ];

  // ---------------- Practice (immediate feedback)
  const practice = [
    q({ id: 'L01-P-01', topic: 'greetings', skill: 'communication', type: 'mc', objective: 'L1-O1', instructions: 'Choose the right greeting.', prompt: 'It is 8 o’clock in the morning. You meet your neighbour.', options: ['Guten Morgen!', 'Guten Abend!', 'Gute Nacht!', 'Tschüs!'], answer: 'Guten Morgen!', explanation: 'Guten Morgen! is used in the morning.', learnHref: GB + '1' }),
    q({ id: 'L01-P-02', topic: 'greetings', skill: 'communication', type: 'mc', objective: 'L1-O1', instructions: 'Choose the right phrase.', prompt: 'You leave a job interview. What do you say?', options: ['Auf Wiedersehen!', 'Tschüs!', 'Hallo!', 'Gute Nacht!'], answer: 'Auf Wiedersehen!', explanation: 'Auf Wiedersehen! is the polite goodbye. Tschüs! is informal.' }),
    q({ id: 'L01-P-03', topic: 'greetings', skill: 'vocabulary', type: 'match', objective: 'L1-O1', instructions: 'Match the German phrase with its meaning.', prompt: '', pairs: [['Guten Abend!', 'Good evening!'], ['Tschüs!', 'Bye!'], ['Bis morgen!', 'See you tomorrow!'], ['Gute Nacht!', 'Good night!'], ['Danke!', 'Thanks!']], explanation: 'Learn greetings as fixed phrases.' }),
    q({ id: 'L01-P-04', topic: 'how-are-you', skill: 'communication', type: 'mc', objective: 'L1-O2', instructions: 'Choose the polite question.', prompt: 'Ask your new teacher how she is.', options: ['Wie geht es Ihnen?', 'Wie geht’s?', 'Wie heißen Sie?', 'Woher kommen Sie?'], answer: 'Wie geht es Ihnen?', explanation: 'Wie geht es Ihnen? is the polite form; Wie geht’s? is informal.', learnHref: GB + '2' }),
    q({ id: 'L01-P-05', topic: 'how-are-you', skill: 'communication', type: 'mc', objective: 'L1-O2', instructions: 'Choose the best answer.', prompt: 'Wie geht’s? – … Und dir?', options: ['Gut, danke.', 'Ich heiße Paul.', 'Aus Spanien.', 'Auf Wiedersehen!'], answer: 'Gut, danke.', explanation: 'Gut, danke. = Good, thanks.' }),
    q({ id: 'L01-P-06', topic: 'pronouns', skill: 'grammar', grammar: 'du-sie', type: 'mc', objective: 'L1-O4', instructions: 'du or Sie?', prompt: 'You talk to a child at school. Which question fits?', options: ['Wie heißt du?', 'Wie heißen Sie?'], answer: 'Wie heißt du?', explanation: 'Use du with children, friends and family.', learnHref: GB + '1' }),
    q({ id: 'L01-P-07', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'gap', objective: 'L1-O4', instructions: 'Write the correct form of heißen.', prompt: 'Ich ___ Anna. Und wie ___ du?', answer: [['heiße'], ['heißt']], explanation: 'ich heiße, du heißt (not heißst).', learnHref: GB + '1' }),
    q({ id: 'L01-P-08', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'gap', objective: 'L1-O4', instructions: 'Write the correct form of kommen.', prompt: 'Woher ___ Sie? – Ich ___ aus Indien.', answer: [['kommen'], ['komme']], explanation: 'Sie kommen, ich komme.' }),
    q({ id: 'L01-P-09', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L1-O4', instructions: 'Write the verb form.', prompt: 'du + kommen →', answer: 'kommst', explanation: 'du: stem + -st → du kommst.' }),
    q({ id: 'L01-P-10', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L1-O4', instructions: 'Write the verb form.', prompt: 'er + heißen →', answer: 'heißt', explanation: 'er/sie: stem + -t → er heißt.' }),
    q({ id: 'L01-P-11', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L1-O4', instructions: 'Write the verb form.', prompt: 'sie (she) + lernen →', answer: 'lernt', explanation: 'sie (she): stem + -t → sie lernt.' }),
    q({ id: 'L01-P-12', topic: 'sein', skill: 'grammar', grammar: 'sein', type: 'gap', objective: 'L1-O4', instructions: 'Write the correct form of sein.', prompt: 'Ich ___ Tom. ___ du Lena?', answer: [['bin'], ['Bist']], explanation: 'ich bin, du bist. At the start of a sentence: Bist.', learnHref: GB + '1' }),
    q({ id: 'L01-P-13', topic: 'sein', skill: 'grammar', grammar: 'sein', type: 'mc', objective: 'L1-O4', instructions: 'Choose the correct form.', prompt: '… Sie Herr Novak?', options: ['Sind', 'Bist', 'Ist', 'Bin'], answer: 'Sind', explanation: 'Polite Sie: Sie sind → Sind Sie …?' }),
    q({ id: 'L01-P-14', topic: 'sein', skill: 'grammar', grammar: 'sein', type: 'gap', objective: 'L1-O4', instructions: 'Write the correct form of sein.', prompt: 'Das ___ Frau Weber. Sie ___ aus Österreich.', answer: [['ist'], ['ist']], explanation: 'Das ist …, sie (she) ist …' }),
    q({ id: 'L01-P-15', topic: 'w-questions', skill: 'grammar', grammar: 'question-words', type: 'mc', objective: 'L1-O5', instructions: 'Choose the question word.', prompt: '… kommst du? – Aus Brasilien.', options: ['Woher', 'Wie', 'Wer', 'Was'], answer: 'Woher', explanation: 'Woher? = Where from?', learnHref: GB + '2' }),
    q({ id: 'L01-P-16', topic: 'w-questions', skill: 'grammar', grammar: 'question-words', type: 'mc', objective: 'L1-O5', instructions: 'Choose the question word.', prompt: '… ist das? – Das ist Herr Klein.', options: ['Wer', 'Woher', 'Wie', 'Was'], answer: 'Wer', explanation: 'Wer? = Who?' }),
    q({ id: 'L01-P-17', topic: 'w-questions', skill: 'grammar', grammar: 'question-words', type: 'mc', objective: 'L1-O5', instructions: 'Choose the question word.', prompt: '… heißt du? – Lukas.', options: ['Wie', 'Wer', 'Woher', 'Was'], answer: 'Wie', explanation: 'Wie heißt du? = What is your name? (literally: How are you called?)' }),
    q({ id: 'L01-P-18', topic: 'word-order', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L1-O5', instructions: 'Put the words in order.', prompt: 'Where are you from? (informal)', tokens: ['kommst', 'Woher', 'du'], answer: 'Woher kommst du', explanation: 'Question word – verb – person.', learnHref: GB + '2' }),
    q({ id: 'L01-P-19', topic: 'word-order', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L1-O5', instructions: 'Put the words in order.', prompt: 'What is your name? (polite)', tokens: ['heißen', 'Wie', 'Sie'], answer: 'Wie heißen Sie', explanation: 'Wie – heißen – Sie.' }),
    q({ id: 'L01-P-20', topic: 'word-order', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L1-O3', instructions: 'Put the words in order.', prompt: 'I come from Poland.', tokens: ['komme', 'Ich', 'aus', 'Polen'], answer: 'Ich komme aus Polen', explanation: 'Subject – verb – rest.' }),
    q({ id: 'L01-P-21', topic: 'word-order', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L1-O4', instructions: 'Put the words in order.', prompt: 'I am learning German.', tokens: ['lerne', 'Deutsch', 'Ich'], answer: 'Ich lerne Deutsch', explanation: 'Deutsch (the language) is written with a capital D.' }),
    q({ id: 'L01-P-22', topic: 'countries', skill: 'grammar', grammar: 'aus-country', type: 'gap', objective: 'L1-O3', instructions: 'Fill in the gaps.', prompt: 'Ich komme ___ der Türkei. Sie kommt ___ Deutschland.', answer: [['aus'], ['aus']], explanation: 'kommen aus + country. die Türkei, die Schweiz: aus der …' }),
    q({ id: 'L01-P-23', topic: 'countries', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L1-O3', instructions: 'Choose the article.', prompt: 'Land', hint: 'country', options: ['der', 'die', 'das'], answer: 'das', explanation: 'das Land (country).' }),
    q({ id: 'L01-P-24', topic: 'introductions', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L1-O3', instructions: 'Choose the article.', prompt: 'Vorname', hint: 'first name', options: ['der', 'die', 'das'], answer: 'der', explanation: 'der Name, der Vorname, der Familienname.' }),
    q({ id: 'L01-P-25', topic: 'introductions', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L1-O3', instructions: 'Write it in German.', prompt: 'My name is Sara.', answer: 'Ich heiße Sara.', accept: ['Mein Name ist Sara.', 'Ich bin Sara.'], explanation: 'Ich heiße … / Mein Name ist … / Ich bin …' }),
    q({ id: 'L01-P-26', topic: 'w-questions', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L1-O5', instructions: 'Write it in German (informal).', prompt: 'Where are you from?', answer: 'Woher kommst du?', explanation: 'Woher + kommst + du.' }),
    q({ id: 'L01-P-27', topic: 'how-are-you', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L1-O2', instructions: 'Write it in German (polite).', prompt: 'How are you?', answer: 'Wie geht es Ihnen?', explanation: 'Polite: Wie geht es Ihnen? Informal: Wie geht’s?' }),
    q({ id: 'L01-P-28', topic: 'alphabet', skill: 'vocabulary', type: 'mc', objective: 'L1-O6', instructions: 'Choose the letter.', prompt: 'Which letter is said “fow” in German?', options: ['V', 'W', 'F', 'U'], answer: 'V', explanation: 'V = “fow”, W = “veh”.', learnHref: GB + '2' }),
    q({ id: 'L01-P-29', topic: 'introductions', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L1-O3', instructions: 'Listen and write the sentences.', prompt: '', audio: 'Ich heiße Maria. Ich komme aus Spanien.', answer: 'Ich heiße Maria. Ich komme aus Spanien.', accept: ['Ich heiße Maria, ich komme aus Spanien.'], explanation: 'Ich heiße Maria. Ich komme aus Spanien.' }),
    q({ id: 'L01-P-30', topic: 'countries', skill: 'listening', type: 'listen', objective: 'L1-O3', instructions: 'Listen and answer.', prompt: 'Where does Jonas come from?', audio: 'Hallo, ich bin Jonas. Ich komme aus der Schweiz.', options: ['Switzerland', 'Sweden', 'Austria', 'Germany'], answer: 'Switzerland', explanation: 'aus der Schweiz = from Switzerland.' })
  ];

  // ---------------- Apply: Hören, Lesen, Schreiben, Sprechen
  const DIALOG = '– Guten Tag! Ich heiße Paula Sommer. Und wie heißen Sie?\n– Guten Tag, Frau Sommer. Mein Name ist Ali Demir.\n– Woher kommen Sie, Herr Demir?\n– Ich komme aus der Türkei.';
  const READ = 'Hallo! Ich heiße Tarek. Ich komme aus Ägypten und ich lerne Deutsch.\nDas ist Sofia. Sie kommt aus Italien. Sie lernt auch Deutsch.';
  const apply = [
    q({ id: 'L01-A-01', topic: 'introductions', skill: 'listening', type: 'listen', objective: 'L1-O3', instructions: 'Listen to the conversation.', prompt: 'Is the conversation formal or informal?', audio: DIALOG.replace(/– /g, ''), options: ['formal (Sie)', 'informal (du)'], answer: 'formal (Sie)', explanation: 'They say Sie, Frau Sommer and Herr Demir.' }),
    q({ id: 'L01-A-02', topic: 'countries', skill: 'listening', type: 'listen', objective: 'L1-O3', instructions: 'Listen again.', prompt: 'Where does Mr Demir come from?', audio: DIALOG.replace(/– /g, ''), options: ['Turkey', 'Germany', 'Switzerland', 'Austria'], answer: 'Turkey', explanation: 'Ich komme aus der Türkei.' }),
    q({ id: 'L01-A-03', topic: 'introductions', skill: 'reading', type: 'reading', objective: 'L1-O3', instructions: 'Read the text.', passage: READ, prompt: 'Woher kommt Sofia?', options: ['aus Italien', 'aus Ägypten', 'aus Deutschland'], answer: 'aus Italien', explanation: 'Sie kommt aus Italien.' }),
    q({ id: 'L01-A-04', topic: 'introductions', skill: 'reading', type: 'reading', objective: 'L1-O3', instructions: 'Read the text.', passage: READ, prompt: 'Wer kommt aus Ägypten?', options: ['Tarek', 'Sofia'], answer: 'Tarek', explanation: 'Ich heiße Tarek. Ich komme aus Ägypten.' }),
    q({ id: 'L01-A-05', topic: 'introductions', skill: 'writing', type: 'writing', objective: 'L1-O3', instructions: 'Introduce yourself in 3–4 short sentences.', prompt: 'Greet, say your name, where you come from and what you are learning. End with a goodbye.',
      rubric: ['I start with a greeting (Hallo! / Guten Tag!).', 'I say my name (Ich heiße … / Mein Name ist …).', 'I say where I come from (Ich komme aus …).', 'The verb is in position 2 in every sentence.', 'I end with a goodbye (Tschüs! / Auf Wiedersehen!).'],
      model: 'Hallo! Ich heiße Delowar. Ich komme aus Bangladesch. Ich lerne Deutsch. Tschüs!', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L01-A-06', topic: 'introductions', skill: 'speaking', type: 'speaking', objective: 'L1-O3', instructions: 'Role-play (out loud): you meet a new colleague. Use Sie.', prompt: 'Greet, say your name, ask for their name and where they come from. Say goodbye.',
      rubric: ['I used Guten Tag! and Auf Wiedersehen!', 'I said my name.', 'I asked: Wie heißen Sie?', 'I asked: Woher kommen Sie?', 'I used Sie, not du.'],
      model: '– Guten Tag! Ich heiße … Wie heißen Sie?\n– Ich heiße …\n– Woher kommen Sie?\n– Ich komme aus … Und Sie?\n– Ich komme aus …\n– Auf Wiedersehen!', explanation: 'Self-assessed. For a live conversation partner, use the Sprechen page.' }),
    q({ id: 'L01-A-07', topic: 'alphabet', skill: 'speaking', type: 'speaking', objective: 'L1-O6', instructions: 'Spell your first name and surname out loud, letter by letter.', prompt: 'Wie schreibt man das?',
      rubric: ['I said each letter the German way (e.g. E = “eh”, I = “ee”, W = “veh”).', 'I spelled my first name and my surname.'], model: 'Mein Name ist Novak: N – O – V – A – K.', explanation: 'Self-assessed.' })
  ];

  // ---------------- Lesson quiz (test mode: no answers until submitted). Different items from Practice.
  const quiz = [
    q({ id: 'L01-T-01', topic: 'greetings', skill: 'communication', type: 'mc', objective: 'L1-O1', instructions: 'Choose the right greeting.', prompt: 'You meet friends at 7 pm.', options: ['Guten Abend!', 'Guten Morgen!', 'Gute Nacht!', 'Auf Wiedersehen!'], answer: 'Guten Abend!', explanation: 'In the evening you say Guten Abend!' }),
    q({ id: 'L01-T-02', topic: 'greetings', skill: 'communication', type: 'mc', objective: 'L1-O1', instructions: 'Choose one.', prompt: 'Which greeting is informal?', options: ['Hallo!', 'Guten Tag!', 'Auf Wiedersehen!', 'Wie geht es Ihnen?'], answer: 'Hallo!', explanation: 'Hallo! is informal.' }),
    q({ id: 'L01-T-03', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'gap', objective: 'L1-O4', instructions: 'Fill in heißen.', prompt: 'Wie ___ du? – Ich ___ Mehmet.', answer: [['heißt'], ['heiße']], explanation: 'du heißt, ich heiße.' }),
    q({ id: 'L01-T-04', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'gap', objective: 'L1-O4', instructions: 'Fill in kommen.', prompt: 'Woher ___ du? – Ich ___ aus Vietnam.', answer: [['kommst'], ['komme']], explanation: 'du kommst, ich komme.' }),
    q({ id: 'L01-T-05', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L1-O4', instructions: 'Write the verb form.', prompt: 'Sie (polite) + lernen →', answer: 'lernen', explanation: 'Sie lernen.' }),
    q({ id: 'L01-T-06', topic: 'sein', skill: 'grammar', grammar: 'sein', type: 'gap', objective: 'L1-O4', instructions: 'Fill in sein.', prompt: '___ Sie Frau Berger? – Ja, ich ___ Frau Berger.', answer: [['Sind'], ['bin']], explanation: 'Sind Sie …? – Ich bin …' }),
    q({ id: 'L01-T-07', topic: 'sein', skill: 'grammar', grammar: 'sein', type: 'conjugation', objective: 'L1-O4', instructions: 'Write the verb form.', prompt: 'du + sein →', answer: 'bist', explanation: 'du bist.' }),
    q({ id: 'L01-T-08', topic: 'word-order', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L1-O5', instructions: 'Put the words in order.', prompt: 'Who is that?', tokens: ['ist', 'Wer', 'das'], answer: 'Wer ist das', explanation: 'Wer – ist – das?' }),
    q({ id: 'L01-T-09', topic: 'word-order', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L1-O3', instructions: 'Put the words in order.', prompt: 'She comes from Japan.', tokens: ['aus', 'kommt', 'Sie', 'Japan'], answer: 'Sie kommt aus Japan', explanation: 'Sie – kommt – aus Japan.' }),
    q({ id: 'L01-T-10', topic: 'w-questions', skill: 'grammar', grammar: 'question-words', type: 'mc', objective: 'L1-O5', instructions: 'Choose the question word.', prompt: '… geht es Ihnen?', options: ['Wie', 'Woher', 'Wer', 'Was'], answer: 'Wie', explanation: 'Wie geht es Ihnen?' }),
    q({ id: 'L01-T-11', topic: 'countries', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L1-O3', instructions: 'Write it in German.', prompt: 'I come from Germany.', answer: 'Ich komme aus Deutschland.', explanation: 'kommen aus + country.' }),
    q({ id: 'L01-T-12', topic: 'greetings', skill: 'vocabulary', type: 'translate', objective: 'L1-O1', instructions: 'Write it in German.', prompt: 'Good night!', answer: 'Gute Nacht!', explanation: 'Gute Nacht! (not Guten Nacht).' }),
    q({ id: 'L01-T-13', topic: 'countries', skill: 'listening', type: 'listen', objective: 'L1-O3', instructions: 'Listen and answer.', prompt: 'Where does Lea come from?', audio: 'Hallo! Ich bin Lea. Ich komme aus Österreich.', options: ['Austria', 'Australia', 'Germany', 'Switzerland'], answer: 'Austria', explanation: 'Österreich = Austria.' }),
    q({ id: 'L01-T-14', topic: 'introductions', skill: 'reading', type: 'reading', objective: 'L1-O3', instructions: 'Read and answer.', passage: 'Guten Tag! Mein Name ist Peter Brandt. Ich komme aus Deutschland.\nUnd das ist Frau Kaya. Sie kommt aus der Türkei.', prompt: 'Wer kommt aus der Türkei?', options: ['Frau Kaya', 'Peter Brandt'], answer: 'Frau Kaya', explanation: 'Sie (Frau Kaya) kommt aus der Türkei.' }),
    q({ id: 'L01-T-15', topic: 'pronouns', skill: 'grammar', grammar: 'pronouns', type: 'match', objective: 'L1-O4', instructions: 'Match.', prompt: '', pairs: [['ich', 'I'], ['du', 'you (informal)'], ['Sie', 'you (polite)'], ['er', 'he'], ['sie', 'she']], explanation: 'Personal pronouns.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
