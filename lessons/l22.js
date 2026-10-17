// Lektion 22 · "Mehr, mehr, mehr?" (Momente A1.2, Modul 8)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 23.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 22, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const COMP = GB + '23', ALS = GB + '23', GERN = GB + '23', WD = GB + '23', SHOP = GB + '23';
  const cmp = (id, prompt, a, ex) => q({ id, topic: 'comparative', skill: 'grammar', grammar: 'comparative', type: 'gap', objective: 'L22-O1', instructions: 'Fill in the comparative.', prompt, answer: a, explanation: ex, learnHref: COMP });
  const sup = (id, prompt, a, ex) => q({ id, topic: 'superlative', skill: 'grammar', grammar: 'superlative', type: 'gap', objective: 'L22-O1', instructions: 'Fill in the superlative (am …sten).', prompt, answer: a, explanation: ex, learnHref: COMP });
  const wd = (id, prompt, a, ex, opts) => q({ id, topic: 'welch-dies', skill: 'grammar', grammar: 'welch-dies', type: 'mc', objective: 'L22-O4', instructions: 'Choose the right ending.', prompt, options: opts, answer: a, explanation: ex, learnHref: WD });

  const objectives = [
    { id: 'L22-O1', text: 'Form the comparative (-er) and superlative (am -sten), incl. umlaut and gut / viel / gern.', kind: 'grammar' },
    { id: 'L22-O2', text: 'Compare with als (different) and (nicht) so … wie (same).', kind: 'grammar' },
    { id: 'L22-O3', text: 'Talk about preferences with gern – lieber – am liebsten.', kind: 'communication' },
    { id: 'L22-O4', text: 'Use welch- (which?) and dies- (this) with der/das/die endings.', kind: 'grammar' },
    { id: 'L22-O5', text: 'Name clothes and manage a clothes-shop conversation (size, trying on, fit).', kind: 'communication' }
  ];

  const learn = [
    { id: 'comp', title: 'Comparative and superlative', objective: 'L22-O1', href: COMP,
      text: 'Comparative = adjective + -er. Superlative = am + adjective + -sten. Many short adjectives with a, o, u take an umlaut. German never uses „mehr“ for a comparative: teurer, interessanter.',
      table: [['billig → billiger → am billigsten', 'regular'], ['alt → älter → am ältesten', 'umlaut; -esten after -t'], ['groß → größer → am größten', 'umlaut; -ten after ß'], ['teuer → teurer → am teuersten', 'drops an e'], ['gut → besser → am besten', 'irregular'], ['viel → mehr → am meisten', 'irregular']],
      mistakes: [['Die Jacke ist mehr teuer.', 'Die Jacke ist teurer.', 'Never mehr + adjective.']] },
    { id: 'als', title: 'Comparing: als and so … wie', objective: 'L22-O2', href: ALS,
      table: [['Die Jacke ist teurer als der Pullover.', 'different → comparative + als'], ['Der Rock ist so schön wie das Kleid.', 'the same → so … wie'], ['Der Pullover ist nicht so warm wie die Jacke.', 'not the same → nicht so … wie']],
      mistakes: [['teurer wie', 'teurer als', 'After a comparative always als.']] },
    { id: 'gern', title: 'gern – lieber – am liebsten', objective: 'L22-O3', href: GERN,
      examples: [['Ich trinke gern Tee, lieber Kaffee und am liebsten Saft.', 'I like tea, prefer coffee and like juice best of all.'], ['Was machst du am liebsten?', 'What do you like doing most?']] },
    { id: 'wd', title: 'welch- (which?) and dies- (this)', objective: 'L22-O4', href: WD,
      text: 'welch- and dies- take the endings of der / das / die: der → welcher / dieser, das → welches / dieses, die → welche / diese. Accusative masculine: welchen / diesen. In speech: die hier = this one.',
      table: [['Welcher Mantel gefällt dir? – Dieser hier.', 'nominative m'], ['Welches Hemd nimmst du? – Dieses.', 'nominative / accusative n'], ['Welche Hose? – Diese.', 'feminine / plural'], ['Wie findest du diesen Pullover?', 'accusative m: -en']] },
    { id: 'shop', title: 'Clothes and the clothes shop', objective: 'L22-O5', href: SHOP,
      table: [['der Mantel · der Pullover · der Rock · der Schuh', 'coat · jumper · skirt · shoe'], ['das Hemd · das Kleid · das T-Shirt', 'shirt · dress · T-shirt'], ['die Hose · die Jacke · die Bluse · die Jeans', 'trousers · jacket · blouse · jeans'], ['Welche Größe haben Sie? – Größe M / 40.', 'size'], ['Kann ich das anprobieren? – Die Umkleidekabine ist dort.', 'try on · changing room'], ['Die Hose passt nicht. Sie ist zu klein.', 'fit']] }
  ];

  const practice = [
    cmp('L22-P-01', 'Mein Bruder ist ___ als ich. (alt)', [['älter']], 'alt → älter (umlaut).'),
    cmp('L22-P-02', 'Der Mantel ist ___ als die Jacke. (gut)', [['besser']], 'gut → besser (irregular).'),
    cmp('L22-P-03', 'Die Hose ist ___ als der Rock. (billig)', [['billiger']], 'billig → billiger.'),
    cmp('L22-P-04', 'Berlin ist ___ als München. (groß)', [['größer']], 'groß → größer.'),
    q({ id: 'L22-P-05', topic: 'comparative', skill: 'grammar', grammar: 'comparative', type: 'mc', objective: 'L22-O1', instructions: 'Choose the comparative.', prompt: 'teuer →', options: ['teurer', 'teuerer', 'mehr teuer', 'täurer'], answer: 'teurer', explanation: 'teuer drops an e: teurer.' }),
    q({ id: 'L22-P-06', topic: 'comparative', skill: 'grammar', grammar: 'comparative', type: 'mc', objective: 'L22-O1', instructions: 'Choose the comparative.', prompt: 'viel →', options: ['mehr', 'vieler', 'meist', 'mehrer'], answer: 'mehr', explanation: 'viel – mehr – am meisten.' }),
    sup('L22-P-07', 'Das T-Shirt ist ___ ___. (billig)', [['am'], ['billigsten']], 'am billigsten.'),
    sup('L22-P-08', 'Wer ist in deiner Familie ___ ___? (alt)', [['am'], ['ältesten']], 'am ältesten (-esten after -t).'),
    q({ id: 'L22-P-09', topic: 'superlative', skill: 'grammar', grammar: 'superlative', type: 'mc', objective: 'L22-O1', instructions: 'Choose the superlative.', prompt: 'gut →', options: ['am besten', 'am gutesten', 'am bessten', 'am güten'], answer: 'am besten', explanation: 'gut – besser – am besten.' }),
    q({ id: 'L22-P-10', topic: 'comparative', skill: 'grammar', grammar: 'comparative', type: 'match', objective: 'L22-O1', instructions: 'Match the comparatives.', prompt: '', pairs: [['jung', 'jünger'], ['kurz', 'kürzer'], ['schön', 'schöner'], ['warm', 'wärmer'], ['gern', 'lieber']], explanation: 'Comparatives (some with umlaut).', learnHref: COMP }),
    q({ id: 'L22-P-11', topic: 'als-wie', skill: 'grammar', grammar: 'als-wie', type: 'mc', objective: 'L22-O2', instructions: 'als or wie?', prompt: 'Die Hose ist so teuer … das Hemd.', options: ['wie', 'als'], answer: 'wie', explanation: 'so … wie = as … as.', learnHref: ALS }),
    q({ id: 'L22-P-12', topic: 'als-wie', skill: 'grammar', grammar: 'als-wie', type: 'mc', objective: 'L22-O2', instructions: 'als or wie?', prompt: 'Das Kleid ist schöner … der Rock.', options: ['als', 'wie'], answer: 'als', explanation: 'comparative + als.' }),
    q({ id: 'L22-P-13', topic: 'als-wie', skill: 'grammar', grammar: 'als-wie', type: 'order', objective: 'L22-O2', instructions: 'Put the words in order.', prompt: 'The jumper is not as warm as the jacket.', tokens: ['Der', 'Pullover', 'ist', 'nicht', 'so', 'warm', 'wie', 'die', 'Jacke'], answer: 'Der Pullover ist nicht so warm wie die Jacke', explanation: 'nicht so … wie.' }),
    q({ id: 'L22-P-14', topic: 'gern', skill: 'grammar', grammar: 'gern-lieber', type: 'gap', objective: 'L22-O3', instructions: 'Fill in gern / lieber / am liebsten.', prompt: 'Ich trage ___ ___ Jeans. (most of all)', answer: [['am'], ['liebsten']], explanation: 'am liebsten = most of all.', learnHref: GERN }),
    q({ id: 'L22-P-15', topic: 'gern', skill: 'grammar', grammar: 'gern-lieber', type: 'mc', objective: 'L22-O3', instructions: 'Choose the word.', prompt: 'Ich trinke gern Tee, aber … Kaffee.', options: ['lieber', 'am liebsten', 'besser', 'mehr'], answer: 'lieber', explanation: 'gern → lieber (prefer).' }),
    wd('L22-P-16', 'Welch… Mantel gefällt dir? (der Mantel)', 'Welcher', 'der → welcher.', ['Welcher', 'Welches', 'Welche', 'Welchen']),
    wd('L22-P-17', 'Welch… Schuhe kaufst du? (plural)', 'Welche', 'plural → welche.', ['Welche', 'Welcher', 'Welches', 'Welchen']),
    wd('L22-P-18', 'Ich nehme dies… Mantel. (accusative)', 'diesen', 'der Mantel, accusative → diesen.', ['diesen', 'dieser', 'dieses', 'diese']),
    q({ id: 'L22-P-19', topic: 'welch-dies', skill: 'grammar', grammar: 'welch-dies', type: 'gap', objective: 'L22-O4', instructions: 'Fill in dies- with the right ending.', prompt: 'Wie findest du ___ Kleid? (das Kleid)', answer: [['dieses']], explanation: 'das → dieses.', learnHref: WD }),
    q({ id: 'L22-P-20', topic: 'welch-dies', skill: 'grammar', grammar: 'welch-dies', type: 'gap', objective: 'L22-O4', instructions: 'Fill in welch- with the right ending.', prompt: '___ Jacke gefällt dir? (die Jacke)', answer: [['Welche']], explanation: 'die → welche.' }),
    q({ id: 'L22-P-21', topic: 'shop', skill: 'vocabulary', type: 'match', objective: 'L22-O5', instructions: 'Match the clothes.', prompt: '', pairs: [['der Mantel', 'coat'], ['die Hose', 'trousers'], ['das Hemd', 'shirt'], ['der Rock', 'skirt'], ['das Kleid', 'dress']], explanation: 'Clothes.', learnHref: SHOP }),
    q({ id: 'L22-P-22', topic: 'shop', skill: 'vocabulary', type: 'article', objective: 'L22-O5', instructions: 'Choose the article.', prompt: '… Jacke', options: ['der', 'die', 'das'], answer: 'die', explanation: 'die Jacke.' }),
    q({ id: 'L22-P-23', topic: 'shop', skill: 'vocabulary', type: 'article', objective: 'L22-O5', instructions: 'Choose the article.', prompt: '… Pullover', options: ['der', 'die', 'das'], answer: 'der', explanation: 'der Pullover.' }),
    q({ id: 'L22-P-24', topic: 'shop', skill: 'communication', type: 'mc', objective: 'L22-O5', instructions: 'Choose the best answer.', prompt: '– Welche Größe haben Sie? – …', options: ['Größe M.', 'Die hier.', 'Sie ist zu klein.', 'Am liebsten.'], answer: 'Größe M.', explanation: 'Answer with your size.' }),
    q({ id: 'L22-P-25', topic: 'comparative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L22-O2', instructions: 'Write it in German.', prompt: 'The jacket is more expensive than the jumper.', answer: 'Die Jacke ist teurer als der Pullover.', explanation: 'teurer als.' }),
    q({ id: 'L22-P-26', topic: 'shop', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L22-O5', instructions: 'Write it in German.', prompt: 'Can I try on these trousers?', answer: 'Kann ich diese Hose anprobieren?', explanation: 'die Hose → diese; anprobieren at the end.' }),
    q({ id: 'L22-P-27', topic: 'shop', skill: 'listening', type: 'listen', objective: 'L22-O5', instructions: 'Listen and answer.', prompt: 'What is the problem?', audio: 'Die Hose gefällt mir, aber sie passt nicht. Sie ist zu klein. Haben Sie sie auch in Größe L?', options: ['The trousers are too small.', 'The trousers are too expensive.', 'The trousers are the wrong colour.', 'The trousers are too long.'], answer: 'The trousers are too small.', explanation: 'Sie ist zu klein.' }),
    q({ id: 'L22-P-28', topic: 'als-wie', skill: 'listening', type: 'listen', objective: 'L22-O2', instructions: 'Listen and answer.', prompt: 'Which coat does she buy?', audio: 'Der graue Mantel ist schön, aber der schwarze ist wärmer und billiger. Ich nehme den schwarzen.', options: ['the black one', 'the grey one', 'both', 'neither'], answer: 'the black one', explanation: 'Ich nehme den schwarzen.' }),
    q({ id: 'L22-P-29', topic: 'welch-dies', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L22-O4', instructions: 'Listen and write.', prompt: '', audio: 'Welcher Pullover gefällt dir? Dieser hier.', answer: 'Welcher Pullover gefällt dir? Dieser hier.', explanation: 'Welcher … Dieser.' }),
    q({ id: 'L22-P-30', topic: 'comparative', skill: 'grammar', grammar: 'comparative', type: 'mc', objective: 'L22-O1', instructions: 'Choose the correct sentence.', prompt: 'This film is more interesting.', options: ['Dieser Film ist interessanter.', 'Dieser Film ist mehr interessant.', 'Dieser Film ist interessanter wie.', 'Dieser Film ist am interessant.'], answer: 'Dieser Film ist interessanter.', explanation: 'Even long adjectives: -er.' })
  ];

  const DIALOG = '– Kann ich Ihnen helfen? – Ja, ich suche eine Jacke. – Welche Größe haben Sie? – Größe 38. – Wie finden Sie diese hier? Sie kostet 89 Euro. – Die ist schön, aber die blaue ist billiger. Kann ich die anprobieren? – Natürlich, die Umkleidekabine ist dort.';
  const READ = 'Mein Kleiderschrank\nIch habe viele T-Shirts, aber nur zwei Hosen. Am liebsten trage ich Jeans, denn sie sind bequem.\nMeine Schwester hat mehr Kleider als ich. Ihre Schuhe sind schöner, aber meine sind bequemer.\nDer teuerste Mantel im Schrank gehört meiner Mutter.';
  const apply = [
    q({ id: 'L22-A-01', topic: 'shop', skill: 'listening', type: 'listen', objective: 'L22-O5', instructions: 'Listen to the shop conversation.', prompt: 'What size does the customer need?', audio: DIALOG, options: ['38', '36', '40', '89'], answer: '38', explanation: 'Größe 38.' }),
    q({ id: 'L22-A-02', topic: 'comparative', skill: 'listening', type: 'listen', objective: 'L22-O2', instructions: 'Listen again.', prompt: 'Why does she want to try the blue jacket?', audio: DIALOG, options: ['It is cheaper.', 'It is warmer.', 'It is bigger.', 'It is nicer.'], answer: 'It is cheaper.', explanation: 'die blaue ist billiger.' }),
    q({ id: 'L22-A-03', topic: 'gern', skill: 'reading', type: 'reading', objective: 'L22-O3', instructions: 'Read the text.', passage: READ, prompt: 'Was trägt die Person am liebsten?', options: ['Jeans', 'Kleider', 'T-Shirts'], answer: 'Jeans', explanation: 'Am liebsten trage ich Jeans.' }),
    q({ id: 'L22-A-04', topic: 'comparative', skill: 'reading', type: 'reading', objective: 'L22-O2', instructions: 'Read the text.', passage: READ, prompt: 'Wessen Schuhe sind bequemer?', options: ['die Schuhe der Person', 'die Schuhe der Schwester', 'die Schuhe der Mutter'], answer: 'die Schuhe der Person', explanation: 'meine sind bequemer.' }),
    q({ id: 'L22-A-05', topic: 'superlative', skill: 'reading', type: 'reading', objective: 'L22-O1', instructions: 'Read the text.', passage: READ, prompt: 'Wem gehört der teuerste Mantel?', options: ['der Mutter', 'der Schwester', 'der Person'], answer: 'der Mutter', explanation: 'gehört meiner Mutter.' }),
    q({ id: 'L22-A-06', topic: 'comparative', skill: 'writing', type: 'writing', objective: 'L22-O2', instructions: 'Compare three people in your family or three items of clothing (5–6 sentences).', prompt: 'Use comparatives with als, one so … wie, one superlative and gern / lieber / am liebsten.',
      rubric: ['I use 2–3 comparatives with als.', 'I use (nicht) so … wie once.', 'I use a superlative (am …sten).', 'I use gern / lieber / am liebsten.'],
      model: 'Meine Schwester ist älter als ich, aber ich bin größer als sie. Mein Bruder ist so groß wie mein Vater. Meine Mutter ist am jüngsten. Ich trage gern Pullover, lieber T-Shirts und am liebsten Hemden.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L22-A-07', topic: 'shop', skill: 'speaking', type: 'speaking', objective: 'L22-O5', instructions: 'Role play the clothes shop out loud.', prompt: 'Ask for an item and a size, try it on, compare two items (welch- / dies-) and decide.',
      rubric: ['I asked for a size and to try something on.', 'I used welch- / dies- with the right ending.', 'I compared with -er als.', 'I decided: Ich nehme diesen / dieses / diese.'],
      model: '– Ich suche einen Pullover. – Welche Größe? – Größe L. Kann ich diesen anprobieren? … Welcher ist billiger? – Dieser hier. – Er ist schöner als der graue. Ich nehme diesen!', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    cmp('L22-T-01', 'Meine Schwester ist ___ als ich. (jung)', [['jünger']], 'jung → jünger.'),
    cmp('L22-T-02', 'Im Sommer ist es ___ als im Winter. (warm)', [['wärmer']], 'warm → wärmer.'),
    sup('L22-T-03', 'Dieser Pullover ist ___ ___. (schön)', [['am'], ['schönsten']], 'am schönsten.'),
    q({ id: 'L22-T-04', topic: 'superlative', skill: 'grammar', grammar: 'superlative', type: 'mc', objective: 'L22-O1', instructions: 'Choose the superlative.', prompt: 'groß →', options: ['am größten', 'am großesten', 'am größsten', 'am groß'], answer: 'am größten', explanation: 'After ß only -ten.' }),
    q({ id: 'L22-T-05', topic: 'superlative', skill: 'grammar', grammar: 'superlative', type: 'mc', objective: 'L22-O1', instructions: 'Choose the superlative.', prompt: 'Wer hat … Geld? (viel, superlative)', options: ['am meisten', 'am vielsten', 'am mehrsten', 'am meist'], answer: 'am meisten', explanation: 'viel – mehr – am meisten.' }),
    q({ id: 'L22-T-06', topic: 'als-wie', skill: 'grammar', grammar: 'als-wie', type: 'mc', objective: 'L22-O2', instructions: 'als or wie?', prompt: 'Mein Auto ist schneller … dein Auto.', options: ['als', 'wie'], answer: 'als', explanation: 'comparative + als.' }),
    q({ id: 'L22-T-07', topic: 'als-wie', skill: 'grammar', grammar: 'als-wie', type: 'mc', objective: 'L22-O2', instructions: 'als or wie?', prompt: 'Tim ist so alt … Lisa.', options: ['wie', 'als'], answer: 'wie', explanation: 'so … wie.' }),
    q({ id: 'L22-T-08', topic: 'gern', skill: 'grammar', grammar: 'gern-lieber', type: 'gap', objective: 'L22-O3', instructions: 'Fill in gern / lieber / am liebsten.', prompt: 'Was machst du ___ ___? (most of all)', answer: [['am'], ['liebsten']], explanation: 'am liebsten.' }),
    wd('L22-T-09', 'Welch… Hemd nimmst du? (das Hemd)', 'Welches', 'das → welches.', ['Welches', 'Welcher', 'Welche', 'Welchen']),
    q({ id: 'L22-T-10', topic: 'welch-dies', skill: 'grammar', grammar: 'welch-dies', type: 'gap', objective: 'L22-O4', instructions: 'Fill in dies- with the right ending.', prompt: 'Ich kaufe ___ Schuhe. (plural)', answer: [['diese']], explanation: 'plural → diese.' }),
    q({ id: 'L22-T-11', topic: 'gern', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L22-O3', instructions: 'Write it in German.', prompt: 'I like wearing jeans best.', answer: 'Ich trage am liebsten Jeans.', accept: ['Am liebsten trage ich Jeans.'], explanation: 'am liebsten.' }),
    q({ id: 'L22-T-12', topic: 'shop', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L22-O5', instructions: 'Write it in German.', prompt: 'The dress doesn’t fit. It is too big.', answer: 'Das Kleid passt nicht. Es ist zu groß.', explanation: 'passen · zu groß.' }),
    q({ id: 'L22-T-13', topic: 'comparative', skill: 'listening', type: 'listen', objective: 'L22-O1', instructions: 'Listen and answer.', prompt: 'Which shoes are cheaper?', audio: 'Die roten Schuhe kosten 60 Euro, die braunen nur 45 Euro.', options: ['the brown ones', 'the red ones', 'both cost the same', 'we don’t know'], answer: 'the brown ones', explanation: '45 < 60.' }),
    q({ id: 'L22-T-14', topic: 'shop', skill: 'reading', type: 'reading', objective: 'L22-O5', instructions: 'Read and answer.', passage: 'SALE! Alle Mäntel 30 % billiger.\nUmkleidekabinen im 1. Stock.', prompt: 'Wo kann man die Kleidung anprobieren?', options: ['im ersten Stock', 'im Erdgeschoss', 'an der Kasse'], answer: 'im ersten Stock', explanation: 'Umkleidekabinen im 1. Stock.' }),
    q({ id: 'L22-T-15', topic: 'shop', skill: 'vocabulary', type: 'match', objective: 'L22-O5', instructions: 'Match.', prompt: '', pairs: [['anprobieren', 'to try on'], ['die Größe', 'size'], ['die Umkleidekabine', 'changing room'], ['bequem', 'comfortable'], ['die Bluse', 'blouse']], explanation: 'Shop vocabulary.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
