# GPT Translate Web Extension Demo

Welcome to the GPT Translate Web Extension Demo! This browser extension offers a convenient tool that allows you to translate text directly within your browser by simply highlighting it. Built using the robust framework from [Jonghakseo/chrome-extension-boilerplate-react-vite](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite?tab=readme-ov-file), this extension leverages React, Vite, and TypeScript to provide a seamless and efficient user experience.

## Features
- **Text Translation**: Easily translate text in any webpage by highlighting it.
- **Quick Access**: Perform translations directly in your browser without the need for external websites or applications.
- **Support for Multiple Languages**: Utilizes the powerful GPT models to support translations across a variety of languages.

![](./record.gif)

## Installation

To get started with the GPT Translate Web Extension, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mortoys/gpt-translate-web-extension-demo.git
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

## Acknowledgments
- Big thanks to Jonghakseo for the [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite?tab=readme-ov-file) which helped kickstart this project.

Feel free to star the repository if you like this project!
