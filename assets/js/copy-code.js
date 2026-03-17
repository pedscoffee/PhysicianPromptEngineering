document.addEventListener('DOMContentLoaded', () => {
    const preElements = document.querySelectorAll('pre');

    preElements.forEach((pre) => {
        // Skip code blocks that are already managed by the prompt library
        if (pre.closest('.prompt-code-wrapper')) {
            return;
        }

        // Create a wrapper to position the copy button relative to the code block
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        // Wrap the pre element
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        // Create the button
        const copyButton = document.createElement('button');
        copyButton.className = 'btn btn-sm btn-primary copy-code-btn';
        copyButton.textContent = 'Copy';
        
        // Style the button directly
        Object.assign(copyButton.style, {
            position: 'absolute',
            top: '8px',
            right: '8px',
            opacity: '0',
            transition: 'opacity 0.2s ease, background-color 0.2s ease',
            zIndex: '10'
        });

        // Show button on hover/focus
        wrapper.addEventListener('mouseenter', () => copyButton.style.opacity = '1');
        wrapper.addEventListener('mouseleave', () => copyButton.style.opacity = '0');
        copyButton.addEventListener('focus', () => copyButton.style.opacity = '1');
        copyButton.addEventListener('blur', () => copyButton.style.opacity = '0');

        // Copy functionality
        copyButton.addEventListener('click', async () => {
            const code = pre.querySelector('code');
            const textToCopy = code ? code.innerText : pre.innerText;

            try {
                await navigator.clipboard.writeText(textToCopy);
                
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                copyButton.style.backgroundColor = 'var(--color-success, #10b981)';
                copyButton.style.borderColor = 'var(--color-success, #10b981)';
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    // Reset to original styling via class
                    copyButton.style.backgroundColor = '';
                    copyButton.style.borderColor = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
                copyButton.textContent = 'Failed';
            }
        });

        wrapper.appendChild(copyButton);
    });
});
