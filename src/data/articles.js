// Blog articles. `image` is a key resolved by src/assets/images/index.js.
// `body` is an array of content blocks rendered as real HTML (present in the
// raw source even before the inline "Read full article" panel is expanded).

export const ARTICLES = [
  {
    slug: 'how-mechanical-clocks-work',
    title: 'How Mechanical Clocks Work: A Plain-Language Tour of the Movement',
    category: 'Fundamentals',
    author: 'Harold Brennan',
    date: '2025-02-04',
    readingTime: '9 min read',
    image: 'anatomy',
    excerpt:
      'Before you touch a single screw, it helps to understand the four jobs every mechanical clock performs — storing power, releasing it evenly, counting the beats, and showing the time.',
    body: [
      { p: 'A mechanical clock can look like a bewildering jumble of brass wheels, but every movement ever made is built around four simple jobs. Once you can name those jobs and point to the parts that do them, the whole machine becomes legible. You stop seeing chaos and start seeing a sequence.' },
      { h: 'The power source' },
      { p: 'Every clock needs stored energy. In a weight-driven clock that energy is a heavy weight hanging on a cord or chain; gravity pulls it slowly downward. In a spring-driven clock it is a coiled mainspring inside a barrel. Winding the clock raises the weight or tightens the spring, and the clock spends the next hours or days spending that energy a tiny amount at a time.' },
      { h: 'The gear train' },
      { p: 'The stored energy flows through a train of toothed wheels and small-toothed pinions. This gear train does two things at once: it carries power toward the escapement, and it divides motion so that one shaft turns once per hour and another once per twelve hours. The ratios cut into those wheels are the quiet arithmetic behind the hands on the dial.' },
      { h: 'The escapement' },
      { p: 'If power flowed freely the weight would simply crash to the floor in a second. The escapement is the gatekeeper. It releases the gear train one small step at a time, giving a gentle push to the pendulum or balance with each step and producing the familiar tick-tock. The escapement is the heart of timekeeping, and it is also the part most sensitive to wear and poor oiling.' },
      { h: 'The regulator' },
      { p: 'Finally, something must decide how long each step lasts. In a pendulum clock it is the swing of the pendulum, governed by its length. In a portable clock or watch it is a balance wheel and hairspring. Lengthen the pendulum and the clock slows; shorten it and the clock gains. Almost every "my clock runs fast" question comes back to this single relationship.' },
      { p: 'Hold these four ideas in mind — power, train, escapement, regulator — and you will find you can follow any service guide we publish. The vocabulary stops being intimidating because you understand the story each part is telling.' }
    ]
  },
  {
    slug: 'common-restoration-mistakes',
    title: 'Common Restoration Mistakes (And the Calm Way to Avoid Them)',
    category: 'Restoration',
    author: 'Eleanor Voss',
    date: '2025-01-22',
    readingTime: '8 min read',
    image: 'workbench',
    excerpt:
      'The most expensive damage to antique clocks is rarely caused by age. It is caused by well-meaning hands moving too quickly. Here are the mistakes we see most often.',
    body: [
      { p: 'After years at the bench and many conversations with new restorers, the same handful of mistakes appear again and again. None of them come from carelessness — they come from enthusiasm outrunning patience. The good news is that every one of them is easy to avoid once you know to watch for it.' },
      { h: 'Drowning the movement in oil' },
      { p: 'The instinct to oil everything is almost universal and almost always wrong. Oil belongs only at specific bearing points. Spread across plates, teeth, and the escapement faces, it collects dust and grinds the metal like a fine paste. When in doubt, use less, and never oil gear teeth.' },
      { h: 'Forcing a stuck part' },
      { p: 'If something will not move, it is telling you something. A seized arbor or a bent tooth needs diagnosis, not force. The cost of a snapped pivot is far higher than the cost of stopping to think. Set the piece down, look closely, and ask what is actually catching.' },
      { h: 'Polishing away originality' },
      { p: 'A soft, even patina is part of a clock’s history and value. Aggressive metal polish or a buffing wheel can erase decades of character in minutes and leave swirl marks that never fully disappear. Clean gently, preserve original finishes, and resist the urge to make an old clock look brand new.' },
      { h: 'Working without a record' },
      { p: 'Disassembly always feels memorable until three days later. Photograph each stage, lay parts out in order, and write down what you did. A simple bench journal turns a frightening reassembly into a calm reversal of clear steps.' },
      { h: 'Skipping the practice movement' },
      { p: 'Learn on something you can afford to ruin. An inexpensive scrap movement teaches your hands the feel of pivots, springs, and screws without putting a family heirloom at risk. Every confident restorer has a graveyard of practice pieces behind them.' }
    ]
  },
  {
    slug: 'estate-sale-treasure-identification',
    title: 'Estate Sale Treasure Identification: Reading a Clock in Five Minutes',
    category: 'Collecting',
    author: 'Donald Pruett',
    date: '2025-03-11',
    readingTime: '7 min read',
    image: 'archive',
    excerpt:
      'A crowded estate sale gives you minutes, not hours. A short, repeatable inspection routine lets you separate a genuine find from an expensive disappointment.',
    body: [
      { p: 'Estate sales reward the prepared eye. You rarely have time to disassemble anything, and the seller seldom knows what they have. A calm, repeatable five-minute routine is worth more than any single fact you might memorize.' },
      { h: 'Start with the movement, not the case' },
      { p: 'A beautiful case can hide a replaced or ruined movement, and a plain case can hold a small treasure. Open the back and look first at the brass. Maker stamps, serial numbers, and town names are often pressed into the back plate and tell you far more than the exterior ever will.' },
      { h: 'Look for honesty in the wear' },
      { p: 'Genuine age wears evenly and predictably. Hands match the dial, screw slots are undamaged, and the patina is consistent across surfaces. Bright new screws beside dark old ones, or a dial that looks newer than its case, suggest later marriages of unrelated parts.' },
      { h: 'Check completeness' },
      { p: 'Missing weights, pendulums, finials, and keys are common and can be costly to replace correctly. Note what is absent before you fall in love with what is present. A cheap clock can become expensive once you total the missing pieces.' },
      { h: 'Test gently' },
      { p: 'With permission, give a pendulum a small swing and listen for an even beat, or feel the wind for grinding and slipping. You are not trying to fully evaluate the clock — only to decide whether it deserves a closer look at home.' },
      { p: 'Carry a small flashlight, a loupe, and a notebook. Five disciplined minutes will protect you from the most common buyer’s regret: paying antique prices for modern problems.' }
    ]
  },
  {
    slug: 'safe-cleaning-techniques',
    title: 'Safe Cleaning Techniques That Protect Original Surfaces',
    category: 'Maintenance',
    author: 'Eleanor Voss',
    date: '2025-02-18',
    readingTime: '8 min read',
    image: 'workbench',
    excerpt:
      'Cleaning is where most home restoration begins — and where the most avoidable damage happens. Gentle, reversible methods almost always win.',
    body: [
      { p: 'Cleaning seems like the safest possible task, which is exactly why it causes so much harm. The goal is never to make a clock look new. The goal is to remove what is doing damage — old oil, grime, and dust — while leaving the history of the piece intact.' },
      { h: 'Dust before you wet' },
      { p: 'Begin dry. A soft brush and gentle air remove loose dust that would otherwise turn to grit the moment any liquid is introduced. This single habit prevents most fine scratching.' },
      { h: 'Test every product first' },
      { p: 'Painted dials, lacquered brass, and old finishes react unpredictably. Test any cleaner on a hidden area and wait. Many a dial has been ruined by a cleaner that seemed gentle until it lifted the numerals.' },
      { h: 'Keep moisture away from the movement' },
      { p: 'Water and steel are old enemies. Avoid soaking assembled movements at home; trapped moisture becomes rust in places you cannot see. Targeted cleaning of removed brass parts is safer than flooding an assembled clock.' },
      { h: 'Respect the dial above all' },
      { p: 'The dial is the face a clock shows the world and the hardest part to restore convincingly. When unsure, do less. A softly aged but original dial is almost always more desirable than a clumsy attempt at renewal.' },
      { p: 'The quiet rule behind all of this: every action should be reversible. If a step cannot be undone, slow down and ask whether it truly needs doing at all.' }
    ]
  },
  {
    slug: 'maintaining-brass-components',
    title: 'Maintaining Brass Components Without Erasing Their History',
    category: 'Maintenance',
    author: 'Harold Brennan',
    date: '2025-01-09',
    readingTime: '6 min read',
    image: 'anatomy',
    excerpt:
      'Brass is forgiving and beautiful, but it is easy to over-clean. Learning to read patina is the difference between care and damage.',
    body: [
      { p: 'Brass gives an antique clock much of its warmth, and it tempts many beginners into over-polishing. The skill worth learning is restraint: knowing when brass should gleam and when it should be left to its honest age.' },
      { h: 'Understand patina' },
      { p: 'Patina is the soft, darkened surface brass develops over decades. On exposed decorative parts it can be a flaw worth gently addressing; on a movement it is often protective and historically valuable. The same surface can be treasure or grime depending on where it sits.' },
      { h: 'Choose the gentlest method that works' },
      { p: 'Start with the mildest approach and escalate only if needed. A soft cloth, then a gentle cleaner, long before any abrasive. Harsh polishes remove metal, not just tarnish, and the marks they leave are permanent.' },
      { h: 'Protect bearing surfaces' },
      { p: 'Never run abrasive polish near pivot holes and bearing faces. Stray compound becomes an abrasive paste that destroys the very surfaces a clock depends on to run smoothly.' },
      { p: 'When you finish, a thin protective measure can slow future tarnish — but always favor reversibility. The aim is a clock that looks cared for and authentic, not one stripped of the story written on its surfaces.' }
    ]
  },
  {
    slug: 'protecting-valuable-collectibles',
    title: 'Protecting Valuable Collectibles: Light, Humidity, and Handling',
    category: 'Collecting',
    author: 'Marjorie Whitfield',
    date: '2025-03-02',
    readingTime: '7 min read',
    image: 'archive',
    excerpt:
      'A collection is only as healthy as the room it lives in. Three quiet forces — light, humidity, and careless handling — do most long-term damage.',
    body: [
      { p: 'Most damage to a collection happens slowly, in plain sight, long after the excitement of acquiring a piece has faded. Three forces do the quiet work, and all three are manageable once you know them.' },
      { h: 'Light' },
      { p: 'Direct sunlight fades dials, yellows paper labels, and dries out wooden cases until they crack. Keep treasured pieces out of strong, direct light, and rotate display so no single clock bears the brunt of a sunny window.' },
      { h: 'Humidity' },
      { p: 'Steel rusts in damp air and wood swells and shrinks as humidity swings. A stable, moderate environment is far kinder than a room that is humid in summer and bone-dry in winter. Avoid basements and attics for anything you value.' },
      { h: 'Handling' },
      { p: 'Carry clocks with two hands and support the weight from below, never by a finial or a delicate handle. Remove pendulums and weights before moving a clock any distance. More heirlooms are broken in the move across a room than in a century on the shelf.' },
      { h: 'Documentation' },
      { p: 'Keep a simple record of each piece: photographs, what you know of its history, condition notes, and any work done. This protects value, aids insurance, and becomes a gift to whoever inherits the collection after you.' }
    ]
  },
  {
    slug: 'clock-oil-and-lubrication-basics',
    title: 'Clock Oil and Lubrication Basics: Where Oil Belongs and Where It Never Does',
    category: 'Maintenance',
    author: 'Harold Brennan',
    date: '2025-02-25',
    readingTime: '9 min read',
    image: 'anatomy',
    excerpt:
      'Oiling is the single most misunderstood part of clock care. The right oil in the right places extends a movement’s life; the wrong approach quietly destroys it.',
    body: [
      { p: 'If there is one subject that separates a clock’s long life from an early failure, it is lubrication. Done correctly, oiling is almost invisible work. Done carelessly, it is the most common cause of the wear restorers spend their time repairing.' },
      { h: 'Use real clock oil' },
      { p: 'Household oils, penetrating sprays, and cooking oils have no place in a clock. They gum, attract dust, and corrode. Proper synthetic clock oil is formulated to stay where it is put and not break down. It is inexpensive next to the damage its alternatives cause.' },
      { h: 'Oil the bearings, not the teeth' },
      { p: 'Oil belongs at the pivot points where arbors turn in the plates, and at specified points in the escapement. It does not belong on gear teeth, on leaves of pinions, or smeared across the plates. Geared surfaces are designed to run dry; oil there simply collects abrasive grit.' },
      { h: 'Less is genuinely more' },
      { p: 'A correct oiling uses a surprisingly small amount — a clean bead at each pivot, not a flood. Excess oil creeps away from where it is needed and carries dust back into the bearing. Restraint is the whole skill.' },
      { h: 'Clean before you oil' },
      { p: 'Fresh oil over old, dried oil and dust is worse than no oil at all. Proper service means cleaning the old lubricant out first, then applying fresh oil to clean surfaces. Oiling a dirty movement only speeds its wear.' },
      { h: 'Respect the interval' },
      { p: 'As a rough guide, a serviced clock benefits from attention every three to five years. A clock that suddenly needs daily winding, runs unevenly, or sounds harsh is often asking for cleaning and fresh oil rather than force.' }
    ]
  },
  {
    slug: 'workshop-setup-for-retirees',
    title: 'Workshop Setup for Retirees: A Calm, Capable Bench',
    category: 'Getting Started',
    author: 'Marjorie Whitfield',
    date: '2025-01-15',
    readingTime: '7 min read',
    image: 'workbench',
    excerpt:
      'You do not need a large room or a big budget to begin. You need good light, a stable surface, and a place where small parts cannot escape.',
    body: [
      { p: 'A good workshop is not about square footage; it is about comfort, light, and order. Many of our readers work happily at a corner of a spare room. What matters is that the bench supports patient, careful hands.' },
      { h: 'Light and seating first' },
      { p: 'Older eyes need more light than younger ones, so invest here before anything else. A bright, adjustable lamp and a comfortable chair at the right height will do more for your work than any expensive tool. Strain is the enemy of precision.' },
      { h: 'A surface that catches parts' },
      { p: 'Clock parts love to roll away and vanish. A light-colored mat or a low-walled tray keeps small screws and springs from disappearing into the carpet. Many lost afternoons are really just lost screws.' },
      { h: 'A starter tool kit' },
      { p: 'Begin modestly: fine screwdrivers, brass tweezers, a loupe, soft brushes, a small parts tray, proper clock oil, and a notebook. Add specialized tools only as specific projects demand them. A small, well-chosen kit beats a drawer of gadgets you never learn to use.' },
      { h: 'Order as a habit' },
      { p: 'Lay parts out in the order you remove them, label small bags, and keep the bench clear of everything but the job at hand. Order is not tidiness for its own sake; it is what makes reassembly calm instead of frightening.' }
    ]
  },
  {
    slug: 'reading-the-beat-of-a-pendulum-clock',
    title: 'Reading the Beat: Setting a Pendulum Clock in Time',
    category: 'Pendulum Clocks',
    author: 'Eleanor Voss',
    date: '2025-03-19',
    readingTime: '6 min read',
    image: 'pendulum',
    excerpt:
      'A clock “in beat” ticks with an even, balanced rhythm. Learning to hear and correct the beat is one of the most satisfying skills a beginner can master.',
    body: [
      { p: 'A pendulum clock that stops after an hour is often not broken at all — it is simply out of beat. The tick and the tock are uneven, and the clock loses its rhythm and stalls. Correcting this is a wonderfully approachable first skill.' },
      { h: 'Listen for the rhythm' },
      { p: 'Close your eyes and listen. A clock in beat says tick — tock — tick — tock with even spacing, like a steady heartbeat. An out-of-beat clock hurries one side: tick-tock … tick-tock. Your ear will learn this faster than you expect.' },
      { h: 'Level the case' },
      { p: 'Many beat problems are simply a clock that is not level. Before adjusting anything internal, set the case truly level and try again. A surprising number of "repairs" are solved with a small wedge under one corner.' },
      { h: 'Adjust gently' },
      { p: 'If leveling does not do it, the crutch or the beat-setting mechanism may need a small adjustment. Move in tiny increments and listen after each change. Patience here is rewarded with a clock that runs for days without stalling.' },
      { p: 'Once you can set a clock in beat by ear, you possess a skill that will revive countless "dead" clocks that needed nothing more than an attentive listener.' }
    ]
  },
  {
    slug: 'moving-a-grandfather-clock-safely',
    title: 'Moving a Grandfather Clock Without Causing Harm',
    category: 'Grandfather Clocks',
    author: 'Donald Pruett',
    date: '2025-02-11',
    readingTime: '7 min read',
    image: 'grandfather',
    excerpt:
      'A longcase clock is tall, top-heavy, and full of delicate parts that must come out before it travels even across a room.',
    body: [
      { p: 'A grandfather clock is one of the most rewarding pieces to own and one of the easiest to damage in transit. The height that makes it grand also makes it precarious, and the movement is far more fragile than its imposing case suggests.' },
      { h: 'Remove the vulnerable parts' },
      { p: 'Before the clock moves an inch, take out the pendulum and the weights, and secure or remove the chime rods and hammers. These swinging, hanging parts cause most transit damage when left in place.' },
      { h: 'Label as you go' },
      { p: 'Weights are often matched to specific positions and chains. Tag each one as you remove it so reassembly restores the clock exactly as it ran. A few minutes of labeling saves hours of confused guesswork later.' },
      { h: 'Protect the movement' },
      { p: 'Cushion the movement and secure the door so nothing shifts. The thin brass plates and steel arbors do not tolerate jostling, and a movement knocked out of alignment can be costly to set right.' },
      { h: 'Move it upright, with help' },
      { p: 'A tall case clock should travel upright and never be carried alone. Two people, a clear path, and a slow pace prevent the tip that cracks a case or snaps a finial. There is no prize for hurrying.' }
    ]
  },
  {
    slug: 'opening-a-pocket-watch-safely',
    title: 'Opening a Vintage Pocket Watch Without Doing Damage',
    category: 'Pocket Watches',
    author: 'Patricia Lindgren',
    date: '2025-03-25',
    readingTime: '6 min read',
    image: 'pocketwatch',
    excerpt:
      'A pocket watch case opens in one of a few specific ways. Forcing the wrong one is the fastest path to a scratched bezel or a sprung lid.',
    body: [
      { p: 'A vintage pocket watch rewards a gentle, curious hand and punishes a hasty one. Before you can admire the movement inside, you must open the case correctly — and there is more than one kind of case.' },
      { h: 'Identify the case type' },
      { p: 'Some cases hinge open, some snap, and some screw apart. Look closely for a lip, a hinge, or threading before applying any pressure. Guessing wrong leaves marks that never fully disappear.' },
      { h: 'Use the right tool, gently' },
      { p: 'A proper case knife in the correct seam, used with light leverage, opens a snap case cleanly. A fingernail or a kitchen knife scratches the bezel and risks a slip. The right tool is inexpensive and worth owning.' },
      { h: 'Mind the hairspring' },
      { p: 'Once open, resist the urge to touch. The hairspring is astonishingly delicate, and a single careless contact can ruin timekeeping. Look, appreciate, and photograph — but keep tools and fingers clear of the balance.' },
      { p: 'Knowing when to stop is part of the craft. A pocket watch movement that needs real service belongs with someone equipped for it, and there is no shame in admiring rather than dismantling.' }
    ]
  },
  {
    slug: 'judging-condition-and-value',
    title: 'Judging Condition and Value Before You Buy',
    category: 'Valuations',
    author: 'Donald Pruett',
    date: '2025-01-29',
    readingTime: '8 min read',
    image: 'archive',
    excerpt:
      'Value in antique clocks comes from originality, condition, rarity, and demand — in that order more often than not. Learning to weigh them protects your money.',
    body: [
      { p: 'Every collector eventually asks the same question: what is it really worth? There is no single answer, but there is a reliable way to think about it. Value grows from a few factors, and weighing them honestly keeps you from both overpaying and overlooking a bargain.' },
      { h: 'Originality' },
      { p: 'A clock with its original movement, dial, hands, and case is worth more than one assembled from mismatched parts. "Married" pieces — a good movement in a later case, or replaced hands — are common and dramatically affect value. Learn to spot the seams where unrelated parts meet.' },
      { h: 'Condition' },
      { p: 'Honest wear is expected and acceptable; damage and crude repair are not. Cracks, replaced dials, and amateur soldering all reduce value. The market rewards pieces that have aged gracefully and been cared for, not those that have been hard-used or clumsily fixed.' },
      { h: 'Rarity and maker' },
      { p: 'Some makers and models are simply scarcer and more sought after. Maker marks, serial numbers, and a little research separate a common production clock from a genuinely uncommon one. Knowledge here is the collector’s true edge.' },
      { h: 'Demand' },
      { p: 'Finally, value is what someone will pay today. Tastes shift, and a fashionable style can command more than a rarer but unloved one. Watch real sale prices, not asking prices, to keep your sense of value grounded in reality.' }
    ]
  }
]

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug)
}
