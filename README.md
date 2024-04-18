# GPT Translate Web Extension Demo

Welcome to the GPT Translate Web Extension Demo! This browser extension offers a convenient tool that allows you to translate text directly within your browser by simply highlighting it. Built using the robust framework from [Jonghakseo/chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite?tab=readme-ov-file), this extension leverages React, Vite, and TypeScript to provide a seamless and efficient user experience with the additional capability of streaming translation outputs.

## Features
- **Stream Translation**: Experience real-time, streaming output for translations, ensuring quick and dynamic responses.
- **Text Translation**: Easily translate text in any webpage by highlighting it.
- **Quick Access**: Perform translations directly in your browser without the need for external websites or applications.
- **Support for Multiple Languages**: Utilizes the powerful GPT models to support translations across a variety of languages.

## Installation

To get started with the GPT Translate Web Extension, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/gpt-translate-web-extension-demo.git
   cd gpt-translate-web-extension-demo
   ```

2. **Environment Setup**
   Create a `.env` file in the project root directory and add your GPT key:
   ```
   VITE_OPENAI_KEY=your_gpt_key
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

4. **Run Development Server**
   ```bash
   pnpm dev
   ```

5. **Load the Extension in Browser**
   - Open your browser and navigate to the extensions management page (e.g., `chrome://extensions` in Chrome).
   - Enable Developer Mode.
   - Choose "Load unpacked" and select the `dist` folder from this project.

## Usage
After installing the extension, simply highlight any text on a webpage and an option to translate it will appear. Selecting this option will display the translated text right on your current page.

## Areas for Improvement
- **Translation Window Placement**: Enhance the positioning of the translation window for better accessibility and visibility.
- **Advanced Translation Prompts**: Implement improved translation prompts inspired by the two-step translation method described by Baoyu. This approach can significantly enhance translation quality and reduce the "machine translation" feel. [Learn more about it here](https://baoyu.io/blog/prompt-engineering/two-ai-agents-in-one-prompt).
- **Text Formatting Preservation**: Work towards retaining the original formatting of the selected text to ensure that the translation maintains the context and emphasis of the source material.

## Acknowledgments
- Big thanks to Jonghakseo for the [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite?tab=readme-ov-file) which helped kickstart this project.

Feel free to star the repository if you like this project!