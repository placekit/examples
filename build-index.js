import fs from 'node:fs';
import path from 'node:path';
import { stringify } from 'yaml';

const rootPackage = JSON.parse(fs.readFileSync('./package.json'));
const repoURL = new URL(rootPackage.homepage);
repoURL.hash = '';

const output = {
  name: 'PlaceKit implementation examples',
  url: repoURL.href,
  author: rootPackage.author,
  examples: [],
};

const examplesPath = 'examples';
const baseURL = path.join(repoURL.href, 'tree/main', examplesPath);

for (const exampleDir of fs.readdirSync(examplesPath, { withFileTypes: true })) {
  if (exampleDir.isDirectory()) {
    for (const exampleFile of fs.readdirSync(path.join(exampleDir.path, exampleDir.name), {
      withFileTypes: true,
    })) {
      if (exampleFile.name === 'package.json') {
        const packagePath = path.join(exampleFile.path, exampleFile.name);
        const packageRaw = fs.readFileSync(packagePath, { encoding: 'utf8' });
        const packageJSON = JSON.parse(packageRaw);
        output.examples.push({
          slug: exampleDir.name,
          url: path.join(baseURL, exampleDir.name),
          name: packageJSON.description,
          env: packageJSON.keywords.sort(),
        });
      }
    }
  }
}

const outputFile = 'examples-index.yml';
fs.writeFileSync(outputFile, stringify(output));
console.log(`✅ ${outputFile} updated!`);

const readmeFile = 'README.md';
let readmeText = fs.readFileSync(readmeFile, { encoding: 'utf8' });
readmeText = readmeText.replace(/(\#{2,}\s*examples index)[^#]+/im, (...m) => {
  return `${m[1]}

<!-- prettier-ignore -->
| Description | Environment |
| :---         | :---      |
| ${output.examples
    .map((example) =>
      [`[${example.name}](./examples/${example.slug})`, example.env.join(', ')].join(' | '),
    )
    .join(` |\n| `)} |
\n`;
});
fs.writeFileSync(readmeFile, readmeText);
console.log(`✅ ${readmeFile} updated!`);
