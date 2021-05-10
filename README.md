<!-- PROJECT LOGO -->
<br />
<p align="center">

<h3 align="center">Reusable React Components</h3>

  <p align="center">
    An awesome project to publish your own components in npm 
    <br /> 
    <br />
    </p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
</ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is an alternative to bit or Storybook, to build and publish your React components in npm, simply using gulp and components wrote in typescript.

Of course, the project maybe has bugs or any problem. You may also suggest changes by forking this repo and creating a pull request or opening an issue. 

### Built With

This project was build it with:

- [Gulp](https://gulpjs.com)
- [Typescript](https://www.typescriptlang.org)
- [React](https://reactjs.org)

<!-- GETTING STARTED -->

## Getting Started

Before you start, you must read the article where I explain all project and how it works.

### Prerequisites

You must be logged with your npm account

- npm
  ```sh
  npm login
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ridouku/reusable-components-react.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Modify package.json and assets/package.json to use your own data and then publish the components

4. Build your custom components
5. Generate your components to publish 
   ```sh
   npm run build
   ```
6. Publish your components  
   ```sh
   npm run publish-cmp
   ```
7. You can publish your components using access restricted or public, just modify the next line in package.json 
   ```sh
   "publish-cmp": "npm publish --access restricted lib/src/components",
   ```
<!-- USAGE EXAMPLES -->

## Usage

You can read about this project and how it works, following the next link [Documentation](https://example.com)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Bryan Arellano - ridouku@gmail.com

Project Link: [Reusable components react](https://github.com/ridouku/reusable-components-react)
