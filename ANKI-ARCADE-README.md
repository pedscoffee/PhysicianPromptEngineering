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

Export your Anki deck as a CSV or TSV file with the following format:

```csv
front,back
"What is the capital of France?","Paris"
"What is 2 + 2?","4"
```

**Requirements:**
- Must have "front" and "back" columns (or "question"/"answer", "q"/"a")
- Maximum 300 cards per session
- Supports both comma and tab delimiters
- Handles quoted fields with commas inside

### 2. Upload and Play

1. Visit the Anki Arcade page
2. Click or drag-and-drop your deck file
3. Review cards and rate them:
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

- **Framework**: Vanilla JavaScript (no dependencies)
- **Size**: ~40KB single HTML file
- **Performance**: Optimized for 60fps animations
- **Storage**: Client-side only, no cookies or tracking
- **Hosting**: Static file, works on GitHub Pages

## Tips for Best Results

1. **Deck Size**: Keep sessions under 300 cards for best performance
2. **File Format**: Use UTF-8 encoding for non-English characters
3. **Regular Reviews**: Save your session and return daily for spaced repetition
4. **Honest Ratings**: Rate based on actual difficulty, not desired outcome
5. **Streak Building**: Consecutive "Good/Easy" ratings build your streak

## Creating Decks from Anki

1. Open Anki desktop app
2. Select your deck
3. File → Export
4. Format: "Notes in Plain Text"
5. Include: Front and Back fields
6. Save as CSV or TXT file

## Troubleshooting

**"No valid cards found" error:**
- Check that your file has "front" and "back" column headers
- Ensure the file is actually CSV or TSV format
- Try opening in a text editor to verify format

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
