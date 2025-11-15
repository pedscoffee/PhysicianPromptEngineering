# Anki Arcade - Retro Flashcard Game

A browser-based flashcard learning game with retro arcade-style animations. Study your Anki decks while enjoying classic 80s arcade gaming aesthetics!

## Features

- **🎮 Pure Client-Side**: Runs entirely in your browser, no backend required
- **🎨 Retro Arcade Theme**: Five rotating pixel-art animation scenarios
- **🧠 Spaced Repetition**: Simplified SM-2 algorithm similar to Anki
- **⌨️ Keyboard Shortcuts**: Fast review with keyboard controls
- **💾 Session Persistence**: Save and load your study progress
- **📊 Statistics Tracking**: View your accuracy, streaks, and progress
- **🔒 Privacy First**: All data stays on your device

## How to Use

### 1. Prepare Your Deck

**Option A: Text Export (Recommended - Easiest!)**

1. Open Anki Desktop
2. Select your deck
3. File → Export
4. Format: "Notes in Plain Text (.txt)"
5. Click Export
6. **Either:**
   - **Upload the .txt file**, OR
   - **Open it and copy/paste the contents** into Anki Arcade

Example text export format:
```
#separator:tab
#html:false
Hola	Hi
rojo	red
verde	green
```

**Option B: Package Export (.apkg)**

1. Open Anki Desktop
2. Select your deck
3. File → Export
4. Format: "Anki Deck Package (.apkg)"
5. Upload to Anki Arcade

**Option C: CSV Export**

Create or export a CSV file with this format:

```csv
front,back
"What is the capital of France?","Paris"
"What is 2 + 2?","4"
```

**Requirements:**
- Supports .txt (Anki text export), .apkg, .csv, .tsv files
- Maximum 300 cards per session
- Automatically handles tab/comma separators
- Strips HTML formatting for text-only display

### 2. Load Your Cards

Choose your preferred method:

**Method 1: Paste Text (Fast!)**
1. Click "📋 PASTE TEXT"
2. Copy your Anki text export
3. Paste into the text area
4. Click "LOAD CARDS"

**Method 2: Upload File**
1. Click "📁 UPLOAD FILE"
2. Click the upload area or drag-and-drop your file
3. Cards load automatically

### 3. Review and Play

Rate each card based on how well you remembered it:
   - **Again**: Restart the card (didn't remember)
   - **Hard**: Remembered with difficulty
   - **Good**: Remembered correctly
   - **Easy**: Remembered easily

### 3. Keyboard Shortcuts

- **[SPACE]**: Show answer
- **[1]**: Again
- **[2]**: Hard
- **[3]**: Good
- **[4]**: Easy

## Animations

The game features 5 rotating arcade scenarios:

### Success (Good/Easy answers):
1. **Space Battle**: Ship destroys enemy
2. **Pac-Man**: Eats power pellet and ghost
3. **Platform Jump**: Successfully jumps across platforms
4. **Breakout**: Ball breaks through blocks
5. **Asteroid Field**: Ship navigates safely through asteroids

### Fail (Again/Hard answers):
1. **Space Battle**: Ship gets hit and explodes
2. **Pac-Man**: Ghost catches player
3. **Platform Jump**: Character falls into pit
4. **Breakout**: Ball falls off screen
5. **Asteroid Field**: Ship crashes into asteroid

## Session Management

### Save Session
- Click "SAVE SESSION" during gameplay
- Downloads a JSON file with your progress
- Includes card scheduling data and statistics

### Load Session
- Click "LOAD SESSION" on the upload screen
- Select a previously saved session file
- Resume exactly where you left off

### Download Stats
- Available on the summary screen
- Get detailed statistics in JSON format
- Includes per-card progress data

## Scheduling Algorithm

The game uses a simplified SM-2 algorithm:

- **Again**: Restarts the card, reduces ease factor
- **Hard**: Small interval increase, slight ease reduction
- **Good**: Standard Anki-style progression (1 day → 6 days → ease factor)
- **Easy**: Accelerated progression, increases ease factor

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Sample Deck

A sample deck (`sample-deck.csv`) is included with 20 general knowledge flashcards for testing.

## Technical Details

- **Framework**: Vanilla JavaScript with JSZip and sql.js for .apkg parsing
- **Size**: ~60KB HTML + ~500KB libraries (loaded from CDN)
- **Performance**: Optimized for 60fps animations
- **Storage**: Client-side only, no cookies or tracking
- **Hosting**: Static file, works on GitHub Pages
- **Supported Formats**: .apkg (native Anki), CSV, TSV, TXT

## Tips for Best Results

1. **Deck Size**: Keep sessions under 300 cards for best performance
2. **File Format**: Use UTF-8 encoding for non-English characters
3. **Regular Reviews**: Save your session and return daily for spaced repetition
4. **Honest Ratings**: Rate based on actual difficulty, not desired outcome
5. **Streak Building**: Consecutive "Good/Easy" ratings build your streak

## Exporting from Anki Desktop

**Method 1: Text Export (Easiest for Copy/Paste)**
1. Open Anki
2. Select your deck
3. File → Export
4. Format: "Notes in Plain Text (.txt)"
5. **Copy/paste the contents** or upload the file

**Method 2: Package Export (Complete Deck)**
1. Open Anki
2. Select your deck
3. File → Export
4. Format: "Anki Deck Package (.apkg)"
5. Upload the .apkg file

**Method 3: Create Your Own CSV**
Create a simple CSV file:
```csv
front,back
Question 1,Answer 1
Question 2,Answer 2
```

## Troubleshooting

**File upload not working:**
- Try using the **Paste Text** method instead (often more reliable)
- Make sure you're clicking the upload area (not just near it)
- Try drag-and-drop instead of clicking
- Check that your file is .txt, .apkg, .csv, or .tsv format

**"No valid cards found" error:**
- For Text Export: Make sure file starts with `#separator:tab` or has actual card data
- For .apkg: Ensure the deck has at least one card
- For CSV: Check that your file has "front" and "back" column headers
- **Easiest fix:** Try the copy/paste method with Anki text export

**Animations not showing:**
- Check that you're using a modern browser
- Try refreshing the page
- Disable browser extensions that might interfere

**Session won't load:**
- Ensure you're using a session file from Anki Arcade
- Check that the file wasn't corrupted
- Try uploading the original deck instead

## Privacy & Data

- No data is sent to any server
- No cookies or tracking
- All processing happens in your browser
- Sessions are saved only when you explicitly download them

## License

Free to use for personal and educational purposes.

---

**Enjoy your retro learning adventure! 🎮📚**
