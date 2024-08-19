# My Resume Website
This project is a personal resume website built using Vite, React, and TypeScript. The site is hosted on GitHub Pages.


### Live website:  https://mr-vl.github.io/Resume/

## Features
Responsive Design: The site is fully responsive and works on all devices.
Interactive UI: Built with React components, providing a smooth user experience.
TypeScript Support: Written in TypeScript for better type safety and development experience.
Vite: Fast build and development server with hot module replacement.
Customizable: Easily update your information and style the site to match your personal brand.

# Installation
Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo-name.git
```
```markdown
Navigate to the project directory:
```


```bash
cd resume
```
Install dependencies:
``` bash
npm install gh-pages --save-dev
```

Install project
```bash
npm install
```
### Usage<br>
After installing the dependencies, you can run the project locally using the following command:

```bash
npm run dev
```
This will start the Vite development server. <br>The site should be available at http://localhost:5173.

# Deployment
To deploy the site to GitHub Pages, follow these steps:

### Build the project:

```bash
npm run build
```
This will create a dist directory with the production build of the site.

## Deploy to GitHub Pages:

You can use the gh-pages branch to deploy your site. If you are using a custom deployment method, adjust as needed.

```bash
npm run deploy
```
This command assumes you have configured your package.json with the following deploy script:
#### The project is automatically configured to deploy to GH-PAGES

```markdown
package.json
"scripts": {
"deploy": "vite build && gh-pages -d dist"
}
```

Ensure you have the gh-pages package installed:

```bash
npm i gh-pages
```


Go to your repository settings on GitHub.
In the "Pages" section, set the source to the gh-pages branch.
<br><br>
Your site should now be live at https://yourusername.github.io/your-repo-name/.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

