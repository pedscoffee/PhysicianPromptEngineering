# Contributing

Use the [contribution form](https://physicianpromptengineering.com/support/#contribute), open an issue, or submit a pull request. Use synthetic examples and include testing notes. Do not submit patient information.

## Prompts and dot phrases

Add prompts as `.txt` files in `_prompts/`, with YAML front matter containing `title`, `description`, `specialty`, `model`, `category`, and `order`. Follow an existing prompt for formatting. `model` is the platform (`Epic Art`, `Epic Text Assistant`, `DAX Custom Instructions`, `Any AI Assistant`, or `Other`) and `category` is the section within it (`Memories`, `Documentation`, `Orders`, `Administrative`, `Teaching`, `Prompt Tools`). To add a new platform or category, add it to the ordered lists at the top of the prompts section in `prompt-library.md`; until then it appears under Other. The library calculates the displayed character count from the prompt body; `char_count` is legacy metadata.

Keep tool-specific variants when their instructions differ. Describe the intended platform, use cases, limitations, and any physician review needed. Add dot phrases in `_dotphrases/`, following the existing front matter and Markdown format.

## Site changes

See the local development commands in [README.md](README.md). Build the site and run the site checks before opening a pull request. Keep browser storage compatible with existing users' data; provide a migration when changing a storage key or record format.

Internal notes, audit reports, and unfinished newborn-course modules are deliberately excluded from the public build in `_config.yml`. The newborn course needs a landing page, scenario/exercise data wiring, independent progress handling, and content review before publication.
