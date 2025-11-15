# Testing Guide - Critical Fixes

## What Was Fixed

### 1. ✅ LLM Crash Prevention (Priority 1)

**Problem**: App crashed during tokenization/generation

**Root Cause**:
- Long prompts exceeding context window
- Insufficient error handling in token stream
- Memory issues with large generation requests

**Fixes Applied**:
- ✅ Input validation (check for None, empty strings)
- ✅ Automatic prompt truncation at 12,000 chars (~3000 tokens)
- ✅ Retry logic: 3 attempts with reducing max_tokens
- ✅ Robust token parsing with try-catch on each token
- ✅ Reduced max_tokens from 2000 → 1500 (safer)
- ✅ Added top_p=0.95 for more stable sampling
- ✅ Return partial response if generation fails but >100 chars generated
- ✅ Better error logging with stack traces

### 2. ✅ UI Scrolling Fix (Priority 2)

**Problem**: UI not scrollable - couldn't see generated content below fold

**Root Cause**:
- Central widget not in a scroll area
- Text widgets with no max height pushed content off-screen
- No stretch factors on layouts

**Fixes Applied**:
- ✅ Wrapped entire central widget in QScrollArea
- ✅ Set proper min/max heights on transcription text (250-600px)
- ✅ Added minimum height on output text (300px)
- ✅ Set stretch factor on splitter to get most vertical space
- ✅ Ensured dynamically created enhancement tabs have min height
- ✅ Added minimum height on splitter itself (400px)

---

## How to Test

### Test 1: Short Transcription (Baseline)

1. Start the app
2. Initialize AI models
3. Record or paste a **short transcription** (1-2 sentences):
   ```
   Patient is a 5 year old with fever and cough for 2 days.
   ```
4. Click "Generate Clinical Notes"
5. **Expected**: Should work without crashing
6. **Check**: Can you scroll to see all outputs?

### Test 2: Medium Transcription

1. Paste a **medium transcription** (~500 words)
2. Click "Generate Clinical Notes"
3. **Expected**: Should complete successfully
4. **Check**:
   - Progress updates show token count
   - All outputs visible with scrolling
   - No crash during generation

### Test 3: Long Transcription (Edge Case)

1. Paste a **very long transcription** (15,000+ chars)
2. Click "Generate Clinical Notes"
3. **Expected**:
   - Prompt auto-truncated to 12,000 chars
   - Warning in logs about truncation
   - Generation completes successfully
   - Note includes: "[Note: Transcript truncated due to length]"
4. **Check**: Still no crash

### Test 4: Scrolling Verification

1. After any generation completes
2. **Check all of these**:
   - ✅ Can scroll main window up/down
   - ✅ Can scroll transcription text box
   - ✅ Can scroll output text boxes
   - ✅ All tabs are accessible
   - ✅ Customization section at bottom is visible

### Test 5: Retry Logic (Simulated)

If generation fails:
1. **Expected**: App shows "Retrying (attempt 2/3)"
2. Reduces max_tokens and tries again
3. After 3 failures, returns error gracefully
4. **Check**: App doesn't crash, just shows error message

---

## What to Monitor

### Logs to Check

```bash
# Watch the log file during testing
tail -f ~/.cache/mac-scribe-app/app.log
```

Look for:
- ✅ "Generated X characters (Y tokens)" - Success messages
- ⚠️ "Prompt too long, truncating..." - Truncation warnings
- ❌ "Error during generation: ..." - Error messages
- ℹ️ "Generation attempt X failed" - Retry messages

### Memory Usage

Monitor Activity Monitor (macOS):
- Should stay under 10GB RAM during generation
- If exceeds 12GB → reduce max_tokens further

---

## Known Limitations

1. **Max Transcription**: ~12,000 chars (~3000 tokens)
   - Longer transcripts are truncated
   - Consider splitting very long encounters

2. **Max Output**: 1500 tokens per generation
   - If notes are incomplete, output hit limit
   - Check logs for "finish_reason: length"

3. **Generation Time**: 1-3 minutes typical
   - M1 Macs may take longer
   - First generation is slower (model warmup)

---

## Quick Fixes If Issues Persist

### Still Crashing?

**Option 1**: Reduce max_tokens further
```python
# In engines/llm_engine.py, line 197
max_tokens=min(max_tokens, 1000),  # Change from 1500 to 1000
```

**Option 2**: Disable enhancement prompts temporarily
- Click "Show Customization"
- Disable AVS and Billing prompts
- Test with just system prompt

### Still Can't Scroll?

**Option 1**: Check window size
- Resize window to full screen
- Try maximizing window

**Option 2**: Restart app
- Quit completely
- Relaunch

---

## Success Criteria

✅ **Must Pass All**:
1. No crashes during generation (any length input)
2. Can scroll to see all generated content
3. All tabs accessible and readable
4. Error messages shown gracefully (no crashes)
5. Progress updates visible during generation

✅ **Nice to Have**:
1. Generation completes in <2 minutes
2. Memory stays under 8GB
3. Partial responses shown if failure occurs
4. Retry logic works without manual intervention

---

## Reporting Issues

If you still encounter problems:

1. **Capture logs**:
   ```bash
   cat ~/.cache/mac-scribe-app/app.log > crash_log.txt
   ```

2. **Note details**:
   - Mac model (M1/M2/M3)
   - RAM amount
   - Transcription length
   - Which stage crashed (transcription/system/editor/enhancement)

3. **Screenshots**:
   - Error messages
   - UI state before crash
   - Activity Monitor memory usage

---

**Next Steps**: Test with the fixes above and report results!
