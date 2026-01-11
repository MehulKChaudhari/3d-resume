Hey folks! Thought I'd share a quick solution to an accessibility problem I faced a while ago. If you've ever struggled with keyboard navigation in modals containing iframes, this might save you some time.

## The Problem I Faced

I was working on this modal popup that had a close button at the top and a YouTube video embedded in it. Simple stuff, right? But making it keyboard accessible was giving me a headache!

What I wanted was straightforward:

User opens modal

Press tab → focus moves to close button

Press tab again → focus goes to YouTube iframe

User tabs through iframe content

After iframe, focus returns to close button

I added tabindex="0" to the iframe to make it focusable, but even with focus trapping on the modal, the focus would just disappear after going through the iframe elements. Super frustrating!

## Why This Happens?

Iframes have their own separate DOM. Once focus goes into the iframe, the parent document loses control of it. When you reach the end of tabbable elements inside the iframe, focus doesn't automatically return to the modal - it gets completely lost and jumps outside the modal to browser UI elements like the back button or address bar. This creates a terrible user experience, especially for keyboard and screen reader users who rely on proper focus management.

## My Solution

After banging my head against the wall for a while, I found a simple workaround:

I added an invisible input element right after the iframe

Made sure it's not visible but still in the tab order

When users tab through all elements in the iframe, focus naturally lands on this hidden input

From there, the next tab press takes them back to the close button

The only weird thing was that users would feel an "extra" tab stop after the iframe before returning to the close button. To make this less confusing, I added an aria-label saying "Press tab to return to the close button".

## The Code: Before and After

Before (problematic version):

```html
<div class="modal" role="dialog" aria-modal="true">
  <button class="close-button">Close</button>
  
  <iframe src="youtube-video-url" tabindex="0"></iframe>
</div>
```

With this version, keyboard focus would enter the iframe but would get lost afterward, breaking the focus trap.

After (working solution):

```html
<div class="modal" role="dialog" aria-modal="true">
  <button class="close-button">Close</button>
  
  <iframe src="youtube-video-url" tabindex="0"></iframe>
  
  <input 
    tabindex="0"
    aria-label="Press tab to return to close button" 
    style="position: absolute; opacity: 0; height: 1px; width: 1px;" 
  />
</div>
```

## React Implementation Example

For those of you using React with Chakra UI, here's how the before and after solutions look:

Before (problematic version with Chakra UI):

```jsx
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

function Modal({ isOpen, onClose, videoUrl }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered trapFocus>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Video</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <iframe 
            src={videoUrl}
            title="YouTube video player"
            tabIndex="0"
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          {/* Even with trapFocus, focus will escape after tabbing through iframe */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
```

Even though we're using Chakra UI's trapFocus prop, the focus still escapes the modal when tabbing through the iframe because iframes have their own separate DOM context.

After (accessible solution with Chakra UI):

```jsx
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

function Modal({ isOpen, onClose, videoUrl }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered trapFocus>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Video</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <iframe 
            src={videoUrl}
            title="YouTube video player"
            tabIndex="0"
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          
          {/* Hidden input to maintain focus trap */}
          <input 
            tabIndex="0"
            aria-label="Press tab to return to close button"
            className="absolute opacity-0 h-px w-px pointer-events-none"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
```

The key parts of the solution are:

We're still using Chakra UI's trapFocus prop which handles most of the focus trapping

Added an invisible input with tabIndex="0" right after the iframe

Used Tailwind CSS classes for styling the hidden input

Added an informative aria-label for screen reader users

Even with Chakra's built-in focus trapping, we need the hidden input to handle the iframe edge case. This solution works with any UI library that has focus trapping (like Chakra UI, Material UI, etc.) because the iframe issue affects all of them.

Not the most elegant solution, but it works! Sometimes the practical solution is better than the perfect one.

Hope this helps someone facing the same issue. Let me know in the comments if you've found better ways to handle this!

Better UX,
Mehul

