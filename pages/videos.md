<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn From Videos</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #fff;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            background: linear-gradient(135deg, #0066cc 0%, #004c99 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
            margin-bottom: 40px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        h1 { color: #0066cc; margin-bottom: 20px; font-size: 2em; border-bottom: 3px solid #0066cc; padding-bottom: 10px; }
        h2 { color: #0066cc; margin-top: 30px; margin-bottom: 15px; font-size: 1.5em; }
        h3 { color: #004c99; margin-top: 25px; margin-bottom: 12px; }
        p { margin-bottom: 15px; }
        ul { margin-left: 20px; margin-bottom: 15px; }
        li { margin-bottom: 8px; }

        /* VIDEO WRAPPER - SIMPLIFIED FOR MOBILE */
        .video-container-outer {
            width: 100%;
            max-width: 100%;
            margin: 30px 0;
            display: flex;
            justify-content: center;
        }

        .video-wrapper {
            width: 100%;
            max-width: 560px;
            aspect-ratio: 16 / 9;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .video-wrapper iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        }

        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }

            .video-container-outer {
                margin: 20px 0;
            }

            .video-wrapper {
                width: 100%;
                max-width: 100%;
            }
        }

        footer {
            background-color: #f5f5f5;
            text-align: center;
            padding: 30px 20px;
            margin-top: 60px;
            border-top: 1px solid #ddd;
        }

        footer a {
            color: #0066cc;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }

        footer p {
            margin: 10px 0;
        }

        strong { font-weight: bold; }
    </style>
</head>
<body>
    <header>
        <h1>Learn From Videos</h1>
        <p class="tagline">Physician Prompt Engineering</p>
    </header>

    <div class="container">
        <main>
            <p>Watch these videos to understand how physician prompt engineering works in practice.</p>

            <h2>Video 1: A New Way Forward</h2>
            <p>An overview of the scribe + editor workflow and why it's better than smart phrases. Learn the core principles and see how this changes clinical documentation.</p>

            <div class="video-container-outer">
                <div class="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/KUBCUTD8T_c?rel=0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            <h3>Topics Covered:</h3>
            <ul>
                <li>Why smart phrases fall short</li>
                <li>The scribe + editor workflow</li>
                <li>Real-world results and benefits</li>
                <li>Getting started today</li>
            </ul>

            <h2>Video 2: See One, Do One, Teach One</h2>
            <p>A deep dive into prompt engineering principles with detailed walkthroughs of each production prompt. Learn how to customize prompts for your specific specialty and workflow.</p>

            <div class="video-container-outer">
                <div class="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/CmmU8azT6as?rel=0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            <h3>Topics Covered:</h3>
            <ul>
                <li>Few-shot examples (the most critical part)</li>
                <li>A/P Formatting prompt deep dive</li>
                <li>Billing prompt walkthrough</li>
                <li>AVS Generation prompt explained</li>
                <li>How to customize for your practice</li>
            </ul>

            <h2>More Resources</h2>
            <ul>
                <li><strong><a href="/quick-start/">Quick Start Guide</a></strong> - Get started in 5 minutes</li>
                <li><strong><a href="/prompts/">Prompt Library</a></strong> - All production-ready prompts</li>
                <li><strong><a href="/all-about-scribes/">All About Scribes</a></strong> - Best practices</li>
                <li><strong><a href="/faq/">FAQ</a></strong> - Common questions</li>
                <li><strong><a href="https://github.com/pedscoffee/PhysicianPromptEngineering">GitHub Repository</a></strong> - View the code</li>
            </ul>

            <h2>Ready to Get Started?</h2>
            <p>Start with <strong>Video 1</strong> to understand the big picture, then move to the <strong>Quick Start Guide</strong> to set up your first prompt.</p>
        </main>
    </div>

    <footer>
        <p>&copy; 2024 Physician Prompt Engineering. All rights reserved.</p>
    </footer>
</body>
</html>